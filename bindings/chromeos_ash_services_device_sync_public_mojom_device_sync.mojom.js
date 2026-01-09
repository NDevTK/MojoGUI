// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/device_sync/public/mojom/device_sync.mojom
// Module: ash.device_sync.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.device_sync = ash.device_sync || {};
ash.device_sync.mojom = ash.device_sync.mojom || {};


// Enum: NetworkRequestResult
ash.device_sync.mojom.NetworkRequestResult = {
  kSuccess: 0,
  kRequestSucceededButUnexpectedResult: 1,
  kServiceNotYetInitialized: 2,
  kOffline: 3,
  kEndpointNotFound: 4,
  kAuthenticationError: 5,
  kBadRequest: 6,
  kResponseMalformed: 7,
  kInternalServerError: 8,
  kUnknown: 9,
};

// Enum: FeatureStatusChange
ash.device_sync.mojom.FeatureStatusChange = {
  kEnableExclusively: 0,
  kEnableNonExclusively: 1,
  kDisable: 2,
};

// Enum: CryptAuthService
ash.device_sync.mojom.CryptAuthService = {
  kEnrollment: 0,
  kDeviceSync: 1,
};

// Enum: ConnectivityStatus
ash.device_sync.mojom.ConnectivityStatus = {
  kOnline: 0,
  kOffline: 1,
  kUnknownConnectivity: 2,
};

// Enum: GroupPrivateKeyStatus
ash.device_sync.mojom.GroupPrivateKeyStatus = {
  kStatusUnavailableBecauseDeviceSyncIsNotInitialized: 0,
  kStatusUnavailableBecauseNoDeviceSyncerSet: 1,
  kWaitingForGroupPrivateKey: 2,
  kNoEncryptedGroupPrivateKeyReceived: 3,
  kEncryptedGroupPrivateKeyEmpty: 4,
  kLocalDeviceSyncBetterTogetherKeyMissing: 5,
  kGroupPrivateKeyDecryptionFailed: 6,
  kGroupPrivateKeySuccessfullyDecrypted: 7,
};

// Enum: BetterTogetherMetadataStatus
ash.device_sync.mojom.BetterTogetherMetadataStatus = {
  kStatusUnavailableBecauseDeviceSyncIsNotInitialized: 0,
  kStatusUnavailableBecauseNoDeviceSyncerSet: 1,
  kWaitingToProcessDeviceMetadata: 2,
  kGroupPrivateKeyMissing: 3,
  kEncryptedMetadataEmpty: 4,
  kMetadataDecrypted: 5,
};

// Struct: FindEligibleDevicesResponse
ash.device_sync.mojom.FindEligibleDevicesResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.FindEligibleDevicesResponse',
      packedSize: 24,
      fields: [
        { name: 'eligible_devices', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'ineligible_devices', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeviceActivityStatus
ash.device_sync.mojom.DeviceActivityStatusSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceActivityStatus',
      packedSize: 40,
      fields: [
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'last_activity_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'connectivity_status', packedOffset: 24, packedBitOffset: 0, type: ash.device_sync.mojom.ConnectivityStatusSpec, nullable: false },
        { name: 'last_update_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DebugInfo
ash.device_sync.mojom.DebugInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DebugInfo',
      packedSize: 56,
      fields: [
        { name: 'last_enrollment_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'time_to_next_enrollment_attempt', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'is_recovering_from_enrollment_failure', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_enrollment_in_progress', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'last_sync_time', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'time_to_next_sync_attempt', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'is_recovering_from_sync_failure', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_sync_in_progress', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: DeviceSyncObserver
ash.device_sync.mojom.DeviceSyncObserver = {};

ash.device_sync.mojom.DeviceSyncObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.device_sync.mojom.DeviceSyncObserverRemote = class {
  static get $interfaceName() {
    return 'ash.device_sync.mojom.DeviceSyncObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.device_sync.mojom.DeviceSyncObserverPendingReceiver,
      handle);
    this.$ = new ash.device_sync.mojom.DeviceSyncObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.device_sync.mojom.DeviceSyncObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEnrollmentFinished() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.device_sync.mojom.DeviceSyncObserver_OnEnrollmentFinished_ParamsSpec,
      null,
      []);
  }

  onNewDevicesSynced() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec,
      null,
      []);
  }

};

ash.device_sync.mojom.DeviceSyncObserver.getRemote = function() {
  let remote = new ash.device_sync.mojom.DeviceSyncObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.device_sync.mojom.DeviceSyncObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnEnrollmentFinished
ash.device_sync.mojom.DeviceSyncObserver_OnEnrollmentFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSyncObserver.OnEnrollmentFinished_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnNewDevicesSynced
ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSyncObserver.OnNewDevicesSynced_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.device_sync.mojom.DeviceSyncObserverPtr = ash.device_sync.mojom.DeviceSyncObserverRemote;
ash.device_sync.mojom.DeviceSyncObserverRequest = ash.device_sync.mojom.DeviceSyncObserverPendingReceiver;


// Interface: DeviceSync
ash.device_sync.mojom.DeviceSync = {};

ash.device_sync.mojom.DeviceSyncPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.device_sync.mojom.DeviceSyncRemote = class {
  static get $interfaceName() {
    return 'ash.device_sync.mojom.DeviceSync';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.device_sync.mojom.DeviceSyncPendingReceiver,
      handle);
    this.$ = new ash.device_sync.mojom.DeviceSyncRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.device_sync.mojom.DeviceSyncRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.device_sync.mojom.DeviceSync_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  forceEnrollmentNow() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec,
      []);
  }

  forceSyncNow() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.device_sync.mojom.DeviceSync_ForceSyncNow_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec,
      []);
  }

  getGroupPrivateKeyStatus() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec,
      []);
  }

  getBetterTogetherMetadataStatus() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec,
      []);
  }

  getSyncedDevices() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec,
      []);
  }

  getLocalDeviceMetadata() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec,
      []);
  }

  setSoftwareFeatureState(device_public_key, software_feature, enabled, is_exclusive) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec,
      [device_public_key, software_feature, enabled, is_exclusive]);
  }

  setFeatureStatus(device_instance_id, feature, status_change) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec,
      [device_instance_id, feature, status_change]);
  }

  findEligibleDevices(software_feature) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec,
      [software_feature]);
  }

  notifyDevices(device_instance_ids, cryptauth_service, feature) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.device_sync.mojom.DeviceSync_NotifyDevices_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec,
      [device_instance_ids, cryptauth_service, feature]);
  }

  getDevicesActivityStatus() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec,
      []);
  }

  getDebugInfo() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetDebugInfo_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec,
      []);
  }

};

ash.device_sync.mojom.DeviceSync.getRemote = function() {
  let remote = new ash.device_sync.mojom.DeviceSyncRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.device_sync.mojom.DeviceSync',
    'context');
  return remote.$;
};

// ParamsSpec for AddObserver
ash.device_sync.mojom.DeviceSync_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForceEnrollmentNow
ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.ForceEnrollmentNow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.ForceEnrollmentNow_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForceSyncNow
ash.device_sync.mojom.DeviceSync_ForceSyncNow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.ForceSyncNow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.ForceSyncNow_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetGroupPrivateKeyStatus
ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetGroupPrivateKeyStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetGroupPrivateKeyStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: ash.device_sync.mojom.GroupPrivateKeyStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetBetterTogetherMetadataStatus
ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetBetterTogetherMetadataStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetBetterTogetherMetadataStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: ash.device_sync.mojom.BetterTogetherMetadataStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSyncedDevices
ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetSyncedDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetSyncedDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetLocalDeviceMetadata
ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetLocalDeviceMetadata_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetLocalDeviceMetadata_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'local_device', packedOffset: 8, packedBitOffset: 0, type: ash.multidevice.mojom.RemoteDeviceSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSoftwareFeatureState
ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.SetSoftwareFeatureState_Params',
      packedSize: 32,
      fields: [
        { name: 'device_public_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'software_feature', packedOffset: 16, packedBitOffset: 0, type: ash.multidevice.mojom.SoftwareFeatureSpec, nullable: false },
        { name: 'enabled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_exclusive', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.SetSoftwareFeatureState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 8, packedBitOffset: 0, type: ash.device_sync.mojom.NetworkRequestResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFeatureStatus
ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.SetFeatureStatus_Params',
      packedSize: 32,
      fields: [
        { name: 'device_instance_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'feature', packedOffset: 16, packedBitOffset: 0, type: ash.multidevice.mojom.SoftwareFeatureSpec, nullable: false },
        { name: 'status_change', packedOffset: 24, packedBitOffset: 0, type: ash.device_sync.mojom.FeatureStatusChangeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.SetFeatureStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 8, packedBitOffset: 0, type: ash.device_sync.mojom.NetworkRequestResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FindEligibleDevices
ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.FindEligibleDevices_Params',
      packedSize: 16,
      fields: [
        { name: 'software_feature', packedOffset: 8, packedBitOffset: 0, type: ash.multidevice.mojom.SoftwareFeatureSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.FindEligibleDevices_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result_code', packedOffset: 8, packedBitOffset: 0, type: ash.device_sync.mojom.NetworkRequestResultSpec, nullable: false },
        { name: 'response', packedOffset: 16, packedBitOffset: 0, type: ash.device_sync.mojom.FindEligibleDevicesResponseSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyDevices
ash.device_sync.mojom.DeviceSync_NotifyDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.NotifyDevices_Params',
      packedSize: 32,
      fields: [
        { name: 'device_instance_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'cryptauth_service', packedOffset: 16, packedBitOffset: 0, type: ash.device_sync.mojom.CryptAuthServiceSpec, nullable: false },
        { name: 'feature', packedOffset: 24, packedBitOffset: 0, type: ash.multidevice.mojom.SoftwareFeatureSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.NotifyDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 8, packedBitOffset: 0, type: ash.device_sync.mojom.NetworkRequestResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDevicesActivityStatus
ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetDevicesActivityStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetDevicesActivityStatus_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result_code', packedOffset: 8, packedBitOffset: 0, type: ash.device_sync.mojom.NetworkRequestResultSpec, nullable: false },
        { name: 'device_activity_statuses', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDebugInfo
ash.device_sync.mojom.DeviceSync_GetDebugInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetDebugInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetDebugInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'debug_info', packedOffset: 8, packedBitOffset: 0, type: ash.device_sync.mojom.DebugInfoSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.device_sync.mojom.DeviceSyncPtr = ash.device_sync.mojom.DeviceSyncRemote;
ash.device_sync.mojom.DeviceSyncRequest = ash.device_sync.mojom.DeviceSyncPendingReceiver;

