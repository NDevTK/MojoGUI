// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/firmware_update_ui/mojom/firmware_update.mojom
// Module: ash.firmware_update.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.firmware_update = ash.firmware_update || {};
ash.firmware_update.firmware_update.mojom = ash.firmware_update.firmware_update.mojom || {};


// Enum: UpdatePriority
ash.firmware_update.firmware_update.mojom.mojom.UpdatePriority = {
  kLow: 0,
  kMedium: 1,
  kHigh: 2,
  kCritical: 3,
};
ash.firmware_update.firmware_update.mojom.mojom.UpdatePrioritySpec = { $: mojo.internal.Enum() };

// Enum: UpdateState
ash.firmware_update.firmware_update.mojom.mojom.UpdateState = {
  kUnknown: 0,
  kIdle: 1,
  kUpdating: 2,
  kRestarting: 3,
  kFailed: 4,
  kSuccess: 5,
  kWaitingForUser: 6,
};
ash.firmware_update.firmware_update.mojom.mojom.UpdateStateSpec = { $: mojo.internal.Enum() };

// Enum: DeviceRequestId
ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestId = {
  kDoNotPowerOff: 0,
  kReplugInstall: 1,
  kInsertUSBCable: 2,
  kRemoveUSBCable: 3,
  kPressUnlock: 4,
  kRemoveReplug: 5,
  kReplugPower: 6,
};
ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestIdSpec = { $: mojo.internal.Enum() };

// Enum: DeviceRequestKind
ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestKind = {
  kUnknown: 0,
  kPost: 1,
  kImmediate: 2,
};
ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestKindSpec = { $: mojo.internal.Enum() };

// Struct: FirmwareUpdate
ash.firmware_update.firmware_update.mojom.mojom.FirmwareUpdateSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.FirmwareUpdate',
      packedSize: 64,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'needs_reboot', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'device_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_description', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 48, packedBitOffset: 0, type: ash.firmware_update.mojom.UpdatePrioritySpec, nullable: false, minVersion: 0 },
        { name: 'filepath', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'checksum', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: InstallationProgress
ash.firmware_update.firmware_update.mojom.mojom.InstallationProgressSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.InstallationProgress',
      packedSize: 16,
      fields: [
        { name: 'percentage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 4, packedBitOffset: 0, type: ash.firmware_update.mojom.UpdateStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DeviceRequest
ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.DeviceRequest',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: ash.firmware_update.mojom.DeviceRequestIdSpec, nullable: false, minVersion: 0 },
        { name: 'kind', packedOffset: 4, packedBitOffset: 0, type: ash.firmware_update.mojom.DeviceRequestKindSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: UpdateObserver
ash.firmware_update.firmware_update.mojom.mojom.UpdateObserver = {};

ash.firmware_update.firmware_update.mojom.mojom.UpdateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.firmware_update.firmware_update.mojom.mojom.UpdateObserverRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.UpdateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.firmware_update.firmware_update.mojom.mojom.UpdateObserverPendingReceiver,
      handle);
    this.$ = new ash.firmware_update.firmware_update.mojom.mojom.UpdateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.firmware_update.firmware_update.mojom.mojom.UpdateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onUpdateListChanged(firmware_updates) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.firmware_update.firmware_update.mojom.mojom.UpdateObserver_OnUpdateListChanged_ParamsSpec,
      null,
      [firmware_updates]);
  }

};

ash.firmware_update.firmware_update.mojom.mojom.UpdateObserver.getRemote = function() {
  let remote = new ash.firmware_update.firmware_update.mojom.mojom.UpdateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.UpdateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnUpdateListChanged
ash.firmware_update.firmware_update.mojom.mojom.UpdateObserver_OnUpdateListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateObserver.OnUpdateListChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'firmware_updates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.firmware_update.mojom.FirmwareUpdateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.firmware_update.firmware_update.mojom.mojom.UpdateObserverPtr = ash.firmware_update.firmware_update.mojom.mojom.UpdateObserverRemote;
ash.firmware_update.firmware_update.mojom.mojom.UpdateObserverRequest = ash.firmware_update.firmware_update.mojom.mojom.UpdateObserverPendingReceiver;


// Interface: DeviceRequestObserver
ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserver = {};

ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserverRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.DeviceRequestObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserverPendingReceiver,
      handle);
    this.$ = new ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceRequest(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserver_OnDeviceRequest_ParamsSpec,
      null,
      [request]);
  }

};

ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserver.getRemote = function() {
  let remote = new ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.DeviceRequestObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDeviceRequest
ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserver_OnDeviceRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.DeviceRequestObserver.OnDeviceRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: ash.firmware_update.mojom.DeviceRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserverPtr = ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserverRemote;
ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserverRequest = ash.firmware_update.firmware_update.mojom.mojom.DeviceRequestObserverPendingReceiver;


// Interface: UpdateProgressObserver
ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserver = {};

ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserverRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.UpdateProgressObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserverPendingReceiver,
      handle);
    this.$ = new ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStatusChanged(update) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserver_OnStatusChanged_ParamsSpec,
      null,
      [update]);
  }

};

ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserver.getRemote = function() {
  let remote = new ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.UpdateProgressObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnStatusChanged
ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserver_OnStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateProgressObserver.OnStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: ash.firmware_update.mojom.InstallationProgressSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserverPtr = ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserverRemote;
ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserverRequest = ash.firmware_update.firmware_update.mojom.mojom.UpdateProgressObserverPendingReceiver;


// Interface: UpdateProvider
ash.firmware_update.firmware_update.mojom.mojom.UpdateProvider = {};

ash.firmware_update.firmware_update.mojom.mojom.UpdateProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.firmware_update.firmware_update.mojom.mojom.UpdateProviderRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.UpdateProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.firmware_update.firmware_update.mojom.mojom.UpdateProviderPendingReceiver,
      handle);
    this.$ = new ash.firmware_update.firmware_update.mojom.mojom.UpdateProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.firmware_update.firmware_update.mojom.mojom.UpdateProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  observePeripheralUpdates(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.firmware_update.firmware_update.mojom.mojom.UpdateProvider_ObservePeripheralUpdates_ParamsSpec,
      null,
      [observer]);
  }

  prepareForUpdate(device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.firmware_update.firmware_update.mojom.mojom.UpdateProvider_PrepareForUpdate_ParamsSpec,
      ash.firmware_update.firmware_update.mojom.mojom.UpdateProvider_PrepareForUpdate_ResponseParamsSpec,
      [device_id]);
  }

  fetchInProgressUpdate() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.firmware_update.firmware_update.mojom.mojom.UpdateProvider_FetchInProgressUpdate_ParamsSpec,
      ash.firmware_update.firmware_update.mojom.mojom.UpdateProvider_FetchInProgressUpdate_ResponseParamsSpec,
      []);
  }

};

ash.firmware_update.firmware_update.mojom.mojom.UpdateProvider.getRemote = function() {
  let remote = new ash.firmware_update.firmware_update.mojom.mojom.UpdateProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.UpdateProvider',
    'context');
  return remote.$;
};

// ParamsSpec for ObservePeripheralUpdates
ash.firmware_update.firmware_update.mojom.mojom.UpdateProvider_ObservePeripheralUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateProvider.ObservePeripheralUpdates_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.firmware_update.mojom.UpdateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrepareForUpdate
ash.firmware_update.firmware_update.mojom.mojom.UpdateProvider_PrepareForUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateProvider.PrepareForUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.firmware_update.firmware_update.mojom.mojom.UpdateProvider_PrepareForUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateProvider.PrepareForUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'controller', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.firmware_update.mojom.InstallControllerRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FetchInProgressUpdate
ash.firmware_update.firmware_update.mojom.mojom.UpdateProvider_FetchInProgressUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateProvider.FetchInProgressUpdate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.firmware_update.firmware_update.mojom.mojom.UpdateProvider_FetchInProgressUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateProvider.FetchInProgressUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: ash.firmware_update.mojom.FirmwareUpdateSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.firmware_update.firmware_update.mojom.mojom.UpdateProviderPtr = ash.firmware_update.firmware_update.mojom.mojom.UpdateProviderRemote;
ash.firmware_update.firmware_update.mojom.mojom.UpdateProviderRequest = ash.firmware_update.firmware_update.mojom.mojom.UpdateProviderPendingReceiver;


// Interface: InstallController
ash.firmware_update.firmware_update.mojom.mojom.InstallController = {};

ash.firmware_update.firmware_update.mojom.mojom.InstallControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.firmware_update.firmware_update.mojom.mojom.InstallControllerRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.InstallController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.firmware_update.firmware_update.mojom.mojom.InstallControllerPendingReceiver,
      handle);
    this.$ = new ash.firmware_update.firmware_update.mojom.mojom.InstallControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.firmware_update.firmware_update.mojom.mojom.InstallControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  beginUpdate(device_id, filepath) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.firmware_update.firmware_update.mojom.mojom.InstallController_BeginUpdate_ParamsSpec,
      null,
      [device_id, filepath]);
  }

  addDeviceRequestObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.firmware_update.firmware_update.mojom.mojom.InstallController_AddDeviceRequestObserver_ParamsSpec,
      null,
      [observer]);
  }

  addUpdateProgressObserver(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.firmware_update.firmware_update.mojom.mojom.InstallController_AddUpdateProgressObserver_ParamsSpec,
      null,
      [observer]);
  }

};

ash.firmware_update.firmware_update.mojom.mojom.InstallController.getRemote = function() {
  let remote = new ash.firmware_update.firmware_update.mojom.mojom.InstallControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.InstallController',
    'context');
  return remote.$;
};

// ParamsSpec for BeginUpdate
ash.firmware_update.firmware_update.mojom.mojom.InstallController_BeginUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.InstallController.BeginUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'filepath', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for AddDeviceRequestObserver
ash.firmware_update.firmware_update.mojom.mojom.InstallController_AddDeviceRequestObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.InstallController.AddDeviceRequestObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.firmware_update.mojom.DeviceRequestObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddUpdateProgressObserver
ash.firmware_update.firmware_update.mojom.mojom.InstallController_AddUpdateProgressObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.InstallController.AddUpdateProgressObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.firmware_update.mojom.UpdateProgressObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.firmware_update.firmware_update.mojom.mojom.InstallControllerPtr = ash.firmware_update.firmware_update.mojom.mojom.InstallControllerRemote;
ash.firmware_update.firmware_update.mojom.mojom.InstallControllerRequest = ash.firmware_update.firmware_update.mojom.mojom.InstallControllerPendingReceiver;


// Interface: SystemUtils
ash.firmware_update.firmware_update.mojom.mojom.SystemUtils = {};

ash.firmware_update.firmware_update.mojom.mojom.SystemUtilsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.firmware_update.firmware_update.mojom.mojom.SystemUtilsRemote = class {
  static get $interfaceName() {
    return 'ash.firmware_update.mojom.SystemUtils';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.firmware_update.firmware_update.mojom.mojom.SystemUtilsPendingReceiver,
      handle);
    this.$ = new ash.firmware_update.firmware_update.mojom.mojom.SystemUtilsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.firmware_update.firmware_update.mojom.mojom.SystemUtilsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  restart() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.firmware_update.firmware_update.mojom.mojom.SystemUtils_Restart_ParamsSpec,
      null,
      []);
  }

};

ash.firmware_update.firmware_update.mojom.mojom.SystemUtils.getRemote = function() {
  let remote = new ash.firmware_update.firmware_update.mojom.mojom.SystemUtilsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.firmware_update.mojom.SystemUtils',
    'context');
  return remote.$;
};

// ParamsSpec for Restart
ash.firmware_update.firmware_update.mojom.mojom.SystemUtils_Restart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.SystemUtils.Restart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.firmware_update.firmware_update.mojom.mojom.SystemUtilsPtr = ash.firmware_update.firmware_update.mojom.mojom.SystemUtilsRemote;
ash.firmware_update.firmware_update.mojom.mojom.SystemUtilsRequest = ash.firmware_update.firmware_update.mojom.mojom.SystemUtilsPendingReceiver;

