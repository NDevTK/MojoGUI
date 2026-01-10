// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/bluetooth_internals/bluetooth_internals.mojom
// Module: mojom

'use strict';

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
};

mojom.DebugLogsChangeHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  changeDebugLogsState(should_debug_logs_be_enabled) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = mojom.DebugLogsChangeHandler_ChangeDebugLogsState_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.changeDebugLogsState');
          const result = this.impl.changeDebugLogsState(params.should_debug_logs_be_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceProxy(mojom.DebugLogsChangeHandlerSpec), null, true, 0, undefined),
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
      mojo.internal.StructField('btsnoop', 0, 0, mojo.internal.InterfaceProxy(mojom.BluetoothBtsnoopSpec), null, true, 0, undefined),
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
};

mojom.BluetoothInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAdapter() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.BluetoothInternalsHandler_GetAdapter_ParamsSpec,
      mojom.BluetoothInternalsHandler_GetAdapter_ResponseParamsSpec,
      [],
      false);
  }

  getDebugLogsChangeHandler() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ParamsSpec,
      mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ResponseParamsSpec,
      [],
      false);
  }

  checkSystemPermissions() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.BluetoothInternalsHandler_CheckSystemPermissions_ParamsSpec,
      mojom.BluetoothInternalsHandler_CheckSystemPermissions_ResponseParamsSpec,
      [],
      false);
  }

  requestSystemPermissions() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mojom.BluetoothInternalsHandler_RequestSystemPermissions_ParamsSpec,
      mojom.BluetoothInternalsHandler_RequestSystemPermissions_ResponseParamsSpec,
      [],
      false);
  }

  requestLocationServices() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mojom.BluetoothInternalsHandler_RequestLocationServices_ParamsSpec,
      mojom.BluetoothInternalsHandler_RequestLocationServices_ResponseParamsSpec,
      [],
      false);
  }

  restartSystemBluetooth() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ParamsSpec,
      mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ResponseParamsSpec,
      [],
      false);
  }

  startBtsnoop() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      mojom.BluetoothInternalsHandler_StartBtsnoop_ParamsSpec,
      mojom.BluetoothInternalsHandler_StartBtsnoop_ResponseParamsSpec,
      [],
      false);
  }

  isBtsnoopFeatureEnabled() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = mojom.BluetoothInternalsHandler_GetAdapter_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.getAdapter');
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
          const params = mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.getDebugLogsChangeHandler');
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
          const params = mojom.BluetoothInternalsHandler_CheckSystemPermissions_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.checkSystemPermissions');
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
          const params = mojom.BluetoothInternalsHandler_RequestSystemPermissions_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.requestSystemPermissions');
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
          const params = mojom.BluetoothInternalsHandler_RequestLocationServices_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.requestLocationServices');
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
          const params = mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.restartSystemBluetooth');
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
          const params = mojom.BluetoothInternalsHandler_StartBtsnoop_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.startBtsnoop');
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
          const params = mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.isBtsnoopFeatureEnabled');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

mojom.BluetoothBtsnoopRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  stop() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = mojom.BluetoothBtsnoop_Stop_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.stop');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojom.BluetoothBtsnoopReceiver = mojom.BluetoothBtsnoopReceiver;

mojom.BluetoothBtsnoopPtr = mojom.BluetoothBtsnoopRemote;
mojom.BluetoothBtsnoopRequest = mojom.BluetoothBtsnoopPendingReceiver;

