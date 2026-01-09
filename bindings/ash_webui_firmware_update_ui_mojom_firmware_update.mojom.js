// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/firmware_update_ui/mojom/firmware_update.mojom
// Module: ash.firmware_update.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.firmware_update = ash.firmware_update || {};
ash.firmware_update.mojom = ash.firmware_update.mojom || {};


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
ash.firmware_update.mojom.FirmwareUpdateSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.FirmwareUpdate',
      packedSize: 72,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'device_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'device_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'device_description', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'priority', packedOffset: 32, packedBitOffset: 0, type: ash.firmware_update.mojom.UpdatePrioritySpec, nullable: false },
        { name: 'filepath', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'checksum', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'needs_reboot', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InstallationProgress
ash.firmware_update.mojom.InstallationProgressSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.InstallationProgress',
      packedSize: 24,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.firmware_update.mojom.UpdateStateSpec, nullable: false },
        { name: 'percentage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceRequest
ash.firmware_update.mojom.DeviceRequestSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.DeviceRequest',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: ash.firmware_update.mojom.DeviceRequestIdSpec, nullable: false },
        { name: 'kind', packedOffset: 8, packedBitOffset: 0, type: ash.firmware_update.mojom.DeviceRequestKindSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: UpdateObserver
ash.firmware_update.mojom.UpdateObserver = {};

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

// ParamsSpec for OnUpdateListChanged
ash.firmware_update.mojom.UpdateObserver_OnUpdateListChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateObserver.OnUpdateListChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'firmware_updates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.firmware_update.mojom.UpdateObserverPtr = ash.firmware_update.mojom.UpdateObserverRemote;
ash.firmware_update.mojom.UpdateObserverRequest = ash.firmware_update.mojom.UpdateObserverPendingReceiver;


// Interface: DeviceRequestObserver
ash.firmware_update.mojom.DeviceRequestObserver = {};

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

// ParamsSpec for OnDeviceRequest
ash.firmware_update.mojom.DeviceRequestObserver_OnDeviceRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.DeviceRequestObserver.OnDeviceRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: ash.firmware_update.mojom.DeviceRequestSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.firmware_update.mojom.DeviceRequestObserverPtr = ash.firmware_update.mojom.DeviceRequestObserverRemote;
ash.firmware_update.mojom.DeviceRequestObserverRequest = ash.firmware_update.mojom.DeviceRequestObserverPendingReceiver;


// Interface: UpdateProgressObserver
ash.firmware_update.mojom.UpdateProgressObserver = {};

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

// ParamsSpec for OnStatusChanged
ash.firmware_update.mojom.UpdateProgressObserver_OnStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateProgressObserver.OnStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: ash.firmware_update.mojom.InstallationProgressSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.firmware_update.mojom.UpdateProgressObserverPtr = ash.firmware_update.mojom.UpdateProgressObserverRemote;
ash.firmware_update.mojom.UpdateProgressObserverRequest = ash.firmware_update.mojom.UpdateProgressObserverPendingReceiver;


// Interface: UpdateProvider
ash.firmware_update.mojom.UpdateProvider = {};

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

// ParamsSpec for ObservePeripheralUpdates
ash.firmware_update.mojom.UpdateProvider_ObservePeripheralUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateProvider.ObservePeripheralUpdates_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PrepareForUpdate
ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateProvider.PrepareForUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.firmware_update.mojom.UpdateProvider_PrepareForUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateProvider.PrepareForUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'controller', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FetchInProgressUpdate
ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateProvider.FetchInProgressUpdate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.firmware_update.mojom.UpdateProvider_FetchInProgressUpdate_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.UpdateProvider.FetchInProgressUpdate_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: ash.firmware_update.mojom.FirmwareUpdateSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.firmware_update.mojom.UpdateProviderPtr = ash.firmware_update.mojom.UpdateProviderRemote;
ash.firmware_update.mojom.UpdateProviderRequest = ash.firmware_update.mojom.UpdateProviderPendingReceiver;


// Interface: InstallController
ash.firmware_update.mojom.InstallController = {};

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

// ParamsSpec for BeginUpdate
ash.firmware_update.mojom.InstallController_BeginUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.InstallController.BeginUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'filepath', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddDeviceRequestObserver
ash.firmware_update.mojom.InstallController_AddDeviceRequestObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.InstallController.AddDeviceRequestObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddUpdateProgressObserver
ash.firmware_update.mojom.InstallController_AddUpdateProgressObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.InstallController.AddUpdateProgressObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.firmware_update.mojom.InstallControllerPtr = ash.firmware_update.mojom.InstallControllerRemote;
ash.firmware_update.mojom.InstallControllerRequest = ash.firmware_update.mojom.InstallControllerPendingReceiver;


// Interface: SystemUtils
ash.firmware_update.mojom.SystemUtils = {};

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

// ParamsSpec for Restart
ash.firmware_update.mojom.SystemUtils_Restart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.firmware_update.mojom.SystemUtils.Restart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.firmware_update.mojom.SystemUtilsPtr = ash.firmware_update.mojom.SystemUtilsRemote;
ash.firmware_update.mojom.SystemUtilsRequest = ash.firmware_update.mojom.SystemUtilsPendingReceiver;

