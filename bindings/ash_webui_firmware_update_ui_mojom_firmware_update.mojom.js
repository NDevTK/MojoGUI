// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/firmware_update_ui/mojom/firmware_update.mojom
// Module: ash.firmware_update.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.firmware_update = ash.firmware_update || {};
ash.firmware_update.mojom = ash.firmware_update.mojom || {};

ash.firmware_update.mojom.UpdatePrioritySpec = { $: mojo.internal.Enum() };
ash.firmware_update.mojom.UpdateStateSpec = { $: mojo.internal.Enum() };
ash.firmware_update.mojom.DeviceRequestIdSpec = { $: mojo.internal.Enum() };
ash.firmware_update.mojom.DeviceRequestKindSpec = { $: mojo.internal.Enum() };
ash.firmware_update.mojom.FirmwareUpdateSpec = { $: {} };
ash.firmware_update.mojom.InstallationProgressSpec = { $: {} };
ash.firmware_update.mojom.DeviceRequestSpec = { $: {} };
ash.firmware_update.mojom.UpdateObserver = {};
ash.firmware_update.mojom.UpdateObserver.$interfaceName = 'ash.firmware_update.mojom.UpdateObserver';
ash.firmware_update.mojom.UpdateObserver_OnUpdateListChanged_ParamsSpec = { $: {} };
ash.firmware_update.mojom.DeviceRequestObserver = {};
ash.firmware_update.mojom.DeviceRequestObserver.$interfaceName = 'ash.firmware_update.mojom.DeviceRequestObserver';
ash.firmware_update.mojom.DeviceRequestObserver_OnDeviceRequest_ParamsSpec = { $: {} };
ash.firmware_update.mojom.UpdateProgressObserver = {};
ash.firmware_update.mojom.UpdateProgressObserver.$interfaceName = 'ash.firmware_update.mojom.UpdateProgressObserver';
ash.firmware_update.mojom.UpdateProgressObserver_OnStatusChanged_ParamsSpec = { $: {} };
ash.firmware_update.mojom.UpdateProvider = {};
ash.firmware_update.mojom.UpdateProvider.$interfaceName = 'ash.firmware_update.mojom.UpdateProvider';
ash.firmware_update.mojom.UpdateProvider_ObservePeripheralUpdates_ParamsSpec = { $: {} };
ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ParamsSpec = { $: {} };
ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ResponseParamsSpec = { $: {} };
ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ParamsSpec = { $: {} };
ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ResponseParamsSpec = { $: {} };
ash.firmware_update.mojom.InstallController = {};
ash.firmware_update.mojom.InstallController.$interfaceName = 'ash.firmware_update.mojom.InstallController';
ash.firmware_update.mojom.InstallController_BeginUpdate_ParamsSpec = { $: {} };
ash.firmware_update.mojom.InstallController_AddDeviceRequestObserver_ParamsSpec = { $: {} };
ash.firmware_update.mojom.InstallController_AddUpdateProgressObserver_ParamsSpec = { $: {} };
ash.firmware_update.mojom.SystemUtils = {};
ash.firmware_update.mojom.SystemUtils.$interfaceName = 'ash.firmware_update.mojom.SystemUtils';
ash.firmware_update.mojom.SystemUtils_Restart_ParamsSpec = { $: {} };

// Enum: UpdatePriority
ash.firmware_update.mojom.UpdatePriority = {
  kLow: 0,
  kMedium: 1,
  kHigh: 2,
  kCritical: 3,
};

// Enum: UpdateState
ash.firmware_update.mojom.UpdateState = {
  kUnknown: 0,
  kIdle: 1,
  kUpdating: 2,
  kRestarting: 3,
  kFailed: 4,
  kSuccess: 5,
  kWaitingForUser: 6,
};

// Enum: DeviceRequestId
ash.firmware_update.mojom.DeviceRequestId = {
  kDoNotPowerOff: 0,
  kReplugInstall: 1,
  kInsertUSBCable: 2,
  kRemoveUSBCable: 3,
  kPressUnlock: 4,
  kRemoveReplug: 5,
  kReplugPower: 6,
};

// Enum: DeviceRequestKind
ash.firmware_update.mojom.DeviceRequestKind = {
  kUnknown: 0,
  kPost: 1,
  kImmediate: 2,
};

// Struct: FirmwareUpdate
mojo.internal.Struct(
    ash.firmware_update.mojom.FirmwareUpdateSpec, 'ash.firmware_update.mojom.FirmwareUpdate', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_name', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('needs_reboot', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('device_version', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_description', 32, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('priority', 40, 0, ash.firmware_update.mojom.UpdatePrioritySpec, null, false, 0, undefined),
      mojo.internal.StructField('filepath', 48, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('checksum', 56, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: InstallationProgress
mojo.internal.Struct(
    ash.firmware_update.mojom.InstallationProgressSpec, 'ash.firmware_update.mojom.InstallationProgress', [
      mojo.internal.StructField('percentage', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('state', 4, 0, ash.firmware_update.mojom.UpdateStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DeviceRequest
mojo.internal.Struct(
    ash.firmware_update.mojom.DeviceRequestSpec, 'ash.firmware_update.mojom.DeviceRequest', [
      mojo.internal.StructField('id', 0, 0, ash.firmware_update.mojom.DeviceRequestIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('kind', 4, 0, ash.firmware_update.mojom.DeviceRequestKindSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: UpdateObserver
mojo.internal.Struct(
    ash.firmware_update.mojom.UpdateObserver_OnUpdateListChanged_ParamsSpec, 'ash.firmware_update.mojom.UpdateObserver_OnUpdateListChanged_Params', [
      mojo.internal.StructField('firmware_updates', 0, 0, mojo.internal.Array(ash.firmware_update.mojom.FirmwareUpdateSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.firmware_update.mojom.UpdateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.firmware_update.mojom.UpdateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.UpdateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.firmware_update.mojom.UpdateObserverPendingReceiver,
      handle);
    this.$ = new ash.firmware_update.mojom.UpdateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.firmware_update.mojom.UpdateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onUpdateListChanged(firmware_updates) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.firmware_update.mojom.UpdateObserver_OnUpdateListChanged_ParamsSpec,
      null,
      [firmware_updates]);
  }

};

ash.firmware_update.mojom.UpdateObserver.getRemote = function() {
  let remote = new ash.firmware_update.mojom.UpdateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.UpdateObserver',
    'context');
  return remote.$;
};

ash.firmware_update.mojom.UpdateObserverPtr = ash.firmware_update.mojom.UpdateObserverRemote;
ash.firmware_update.mojom.UpdateObserverRequest = ash.firmware_update.mojom.UpdateObserverPendingReceiver;


// Interface: DeviceRequestObserver
mojo.internal.Struct(
    ash.firmware_update.mojom.DeviceRequestObserver_OnDeviceRequest_ParamsSpec, 'ash.firmware_update.mojom.DeviceRequestObserver_OnDeviceRequest_Params', [
      mojo.internal.StructField('request', 0, 0, ash.firmware_update.mojom.DeviceRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.firmware_update.mojom.DeviceRequestObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.firmware_update.mojom.DeviceRequestObserverRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.DeviceRequestObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.firmware_update.mojom.DeviceRequestObserverPendingReceiver,
      handle);
    this.$ = new ash.firmware_update.mojom.DeviceRequestObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.firmware_update.mojom.DeviceRequestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceRequest(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.firmware_update.mojom.DeviceRequestObserver_OnDeviceRequest_ParamsSpec,
      null,
      [request]);
  }

};

ash.firmware_update.mojom.DeviceRequestObserver.getRemote = function() {
  let remote = new ash.firmware_update.mojom.DeviceRequestObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.DeviceRequestObserver',
    'context');
  return remote.$;
};

ash.firmware_update.mojom.DeviceRequestObserverPtr = ash.firmware_update.mojom.DeviceRequestObserverRemote;
ash.firmware_update.mojom.DeviceRequestObserverRequest = ash.firmware_update.mojom.DeviceRequestObserverPendingReceiver;


// Interface: UpdateProgressObserver
mojo.internal.Struct(
    ash.firmware_update.mojom.UpdateProgressObserver_OnStatusChanged_ParamsSpec, 'ash.firmware_update.mojom.UpdateProgressObserver_OnStatusChanged_Params', [
      mojo.internal.StructField('update', 0, 0, ash.firmware_update.mojom.InstallationProgressSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.firmware_update.mojom.UpdateProgressObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.firmware_update.mojom.UpdateProgressObserverRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.UpdateProgressObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.firmware_update.mojom.UpdateProgressObserverPendingReceiver,
      handle);
    this.$ = new ash.firmware_update.mojom.UpdateProgressObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.firmware_update.mojom.UpdateProgressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStatusChanged(update) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.firmware_update.mojom.UpdateProgressObserver_OnStatusChanged_ParamsSpec,
      null,
      [update]);
  }

};

ash.firmware_update.mojom.UpdateProgressObserver.getRemote = function() {
  let remote = new ash.firmware_update.mojom.UpdateProgressObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.UpdateProgressObserver',
    'context');
  return remote.$;
};

ash.firmware_update.mojom.UpdateProgressObserverPtr = ash.firmware_update.mojom.UpdateProgressObserverRemote;
ash.firmware_update.mojom.UpdateProgressObserverRequest = ash.firmware_update.mojom.UpdateProgressObserverPendingReceiver;


// Interface: UpdateProvider
mojo.internal.Struct(
    ash.firmware_update.mojom.UpdateProvider_ObservePeripheralUpdates_ParamsSpec, 'ash.firmware_update.mojom.UpdateProvider_ObservePeripheralUpdates_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.firmware_update.mojom.UpdateObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ParamsSpec, 'ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ResponseParamsSpec, 'ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ResponseParams', [
      mojo.internal.StructField('controller', 0, 0, mojo.internal.InterfaceProxy(ash.firmware_update.mojom.InstallControllerRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ParamsSpec, 'ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ResponseParamsSpec, 'ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ResponseParams', [
      mojo.internal.StructField('update', 0, 0, ash.firmware_update.mojom.FirmwareUpdateSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.firmware_update.mojom.UpdateProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.firmware_update.mojom.UpdateProviderRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.UpdateProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.firmware_update.mojom.UpdateProviderPendingReceiver,
      handle);
    this.$ = new ash.firmware_update.mojom.UpdateProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.firmware_update.mojom.UpdateProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observePeripheralUpdates(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.firmware_update.mojom.UpdateProvider_ObservePeripheralUpdates_ParamsSpec,
      null,
      [observer]);
  }

  prepareForUpdate(device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ParamsSpec,
      ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ResponseParamsSpec,
      [device_id]);
  }

  fetchInProgressUpdate() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ParamsSpec,
      ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ResponseParamsSpec,
      []);
  }

};

ash.firmware_update.mojom.UpdateProvider.getRemote = function() {
  let remote = new ash.firmware_update.mojom.UpdateProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.UpdateProvider',
    'context');
  return remote.$;
};

ash.firmware_update.mojom.UpdateProviderPtr = ash.firmware_update.mojom.UpdateProviderRemote;
ash.firmware_update.mojom.UpdateProviderRequest = ash.firmware_update.mojom.UpdateProviderPendingReceiver;


// Interface: InstallController
mojo.internal.Struct(
    ash.firmware_update.mojom.InstallController_BeginUpdate_ParamsSpec, 'ash.firmware_update.mojom.InstallController_BeginUpdate_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('filepath', 8, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.firmware_update.mojom.InstallController_AddDeviceRequestObserver_ParamsSpec, 'ash.firmware_update.mojom.InstallController_AddDeviceRequestObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.firmware_update.mojom.DeviceRequestObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.firmware_update.mojom.InstallController_AddUpdateProgressObserver_ParamsSpec, 'ash.firmware_update.mojom.InstallController_AddUpdateProgressObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.firmware_update.mojom.UpdateProgressObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.firmware_update.mojom.InstallControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.firmware_update.mojom.InstallControllerRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.InstallController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.firmware_update.mojom.InstallControllerPendingReceiver,
      handle);
    this.$ = new ash.firmware_update.mojom.InstallControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.firmware_update.mojom.InstallControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  beginUpdate(device_id, filepath) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.firmware_update.mojom.InstallController_BeginUpdate_ParamsSpec,
      null,
      [device_id, filepath]);
  }

  addDeviceRequestObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.firmware_update.mojom.InstallController_AddDeviceRequestObserver_ParamsSpec,
      null,
      [observer]);
  }

  addUpdateProgressObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.firmware_update.mojom.InstallController_AddUpdateProgressObserver_ParamsSpec,
      null,
      [observer]);
  }

};

ash.firmware_update.mojom.InstallController.getRemote = function() {
  let remote = new ash.firmware_update.mojom.InstallControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.InstallController',
    'context');
  return remote.$;
};

ash.firmware_update.mojom.InstallControllerPtr = ash.firmware_update.mojom.InstallControllerRemote;
ash.firmware_update.mojom.InstallControllerRequest = ash.firmware_update.mojom.InstallControllerPendingReceiver;


// Interface: SystemUtils
mojo.internal.Struct(
    ash.firmware_update.mojom.SystemUtils_Restart_ParamsSpec, 'ash.firmware_update.mojom.SystemUtils_Restart_Params', [
    ],
    [[0, 8]]);

ash.firmware_update.mojom.SystemUtilsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.firmware_update.mojom.SystemUtilsRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.SystemUtils';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.firmware_update.mojom.SystemUtilsPendingReceiver,
      handle);
    this.$ = new ash.firmware_update.mojom.SystemUtilsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.firmware_update.mojom.SystemUtilsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  restart() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.firmware_update.mojom.SystemUtils_Restart_ParamsSpec,
      null,
      []);
  }

};

ash.firmware_update.mojom.SystemUtils.getRemote = function() {
  let remote = new ash.firmware_update.mojom.SystemUtilsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.SystemUtils',
    'context');
  return remote.$;
};

ash.firmware_update.mojom.SystemUtilsPtr = ash.firmware_update.mojom.SystemUtilsRemote;
ash.firmware_update.mojom.SystemUtilsRequest = ash.firmware_update.mojom.SystemUtilsPendingReceiver;

