// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/bluetooth_internals/bluetooth_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Interface: DebugLogsChangeHandler
mojom.DebugLogsChangeHandler = {};

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
      [should_debug_logs_be_enabled]);
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

// ParamsSpec for ChangeDebugLogsState
mojom.DebugLogsChangeHandler_ChangeDebugLogsState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.DebugLogsChangeHandler.ChangeDebugLogsState_Params',
      packedSize: 16,
      fields: [
        { name: 'should_debug_logs_be_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mojom.DebugLogsChangeHandlerPtr = mojom.DebugLogsChangeHandlerRemote;
mojom.DebugLogsChangeHandlerRequest = mojom.DebugLogsChangeHandlerPendingReceiver;


// Interface: BluetoothInternalsHandler
mojom.BluetoothInternalsHandler = {};

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
      []);
  }

  getDebugLogsChangeHandler() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ParamsSpec,
      mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ResponseParamsSpec,
      []);
  }

  checkSystemPermissions() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.BluetoothInternalsHandler_CheckSystemPermissions_ParamsSpec,
      mojom.BluetoothInternalsHandler_CheckSystemPermissions_ResponseParamsSpec,
      []);
  }

  requestSystemPermissions() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mojom.BluetoothInternalsHandler_RequestSystemPermissions_ParamsSpec,
      null,
      []);
  }

  requestLocationServices() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mojom.BluetoothInternalsHandler_RequestLocationServices_ParamsSpec,
      null,
      []);
  }

  restartSystemBluetooth() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ParamsSpec,
      null,
      []);
  }

  startBtsnoop() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      mojom.BluetoothInternalsHandler_StartBtsnoop_ParamsSpec,
      mojom.BluetoothInternalsHandler_StartBtsnoop_ResponseParamsSpec,
      []);
  }

  isBtsnoopFeatureEnabled() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ParamsSpec,
      mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ResponseParamsSpec,
      []);
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

// ParamsSpec for GetAdapter
mojom.BluetoothInternalsHandler_GetAdapter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothInternalsHandler.GetAdapter_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mojom.BluetoothInternalsHandler_GetAdapter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothInternalsHandler.GetAdapter_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'adapter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(bluetooth.mojom.AdapterRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDebugLogsChangeHandler
mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothInternalsHandler.GetDebugLogsChangeHandler_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mojom.BluetoothInternalsHandler_GetDebugLogsChangeHandler_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothInternalsHandler.GetDebugLogsChangeHandler_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(mojom.DebugLogsChangeHandlerRemote), nullable: true, minVersion: 0 },
        { name: 'initial_toggle_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CheckSystemPermissions
mojom.BluetoothInternalsHandler_CheckSystemPermissions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothInternalsHandler.CheckSystemPermissions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mojom.BluetoothInternalsHandler_CheckSystemPermissions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothInternalsHandler.CheckSystemPermissions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'need_location_permission', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'need_nearby_devices_permission', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'need_location_services', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'can_request_permissions', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestSystemPermissions
mojom.BluetoothInternalsHandler_RequestSystemPermissions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothInternalsHandler.RequestSystemPermissions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RequestLocationServices
mojom.BluetoothInternalsHandler_RequestLocationServices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothInternalsHandler.RequestLocationServices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RestartSystemBluetooth
mojom.BluetoothInternalsHandler_RestartSystemBluetooth_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothInternalsHandler.RestartSystemBluetooth_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StartBtsnoop
mojom.BluetoothInternalsHandler_StartBtsnoop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothInternalsHandler.StartBtsnoop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mojom.BluetoothInternalsHandler_StartBtsnoop_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothInternalsHandler.StartBtsnoop_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'btsnoop', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(mojom.BluetoothBtsnoopRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsBtsnoopFeatureEnabled
mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothInternalsHandler.IsBtsnoopFeatureEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mojom.BluetoothInternalsHandler_IsBtsnoopFeatureEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothInternalsHandler.IsBtsnoopFeatureEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mojom.BluetoothInternalsHandlerPtr = mojom.BluetoothInternalsHandlerRemote;
mojom.BluetoothInternalsHandlerRequest = mojom.BluetoothInternalsHandlerPendingReceiver;


// Interface: BluetoothBtsnoop
mojom.BluetoothBtsnoop = {};

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
      []);
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

// ParamsSpec for Stop
mojom.BluetoothBtsnoop_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothBtsnoop.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mojom.BluetoothBtsnoop_Stop_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.BluetoothBtsnoop.Stop_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mojom.BluetoothBtsnoopPtr = mojom.BluetoothBtsnoopRemote;
mojom.BluetoothBtsnoopRequest = mojom.BluetoothBtsnoopPendingReceiver;

