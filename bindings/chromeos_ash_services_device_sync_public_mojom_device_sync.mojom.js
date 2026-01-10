// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/device_sync/public/mojom/device_sync.mojom
// Module: ash.device_sync.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.device_sync = ash.device_sync || {};
ash.device_sync.device_sync.mojom = ash.device_sync.device_sync.mojom || {};


// Enum: NetworkRequestResult
ash.device_sync.device_sync.mojom.mojom.NetworkRequestResult = {
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
ash.device_sync.device_sync.mojom.mojom.NetworkRequestResultSpec = { $: mojo.internal.Enum() };

// Enum: FeatureStatusChange
ash.device_sync.device_sync.mojom.mojom.FeatureStatusChange = {
  kEnableExclusively: 0,
  kEnableNonExclusively: 1,
  kDisable: 2,
};
ash.device_sync.device_sync.mojom.mojom.FeatureStatusChangeSpec = { $: mojo.internal.Enum() };

// Enum: CryptAuthService
ash.device_sync.device_sync.mojom.mojom.CryptAuthService = {
  kEnrollment: 0,
  kDeviceSync: 1,
};
ash.device_sync.device_sync.mojom.mojom.CryptAuthServiceSpec = { $: mojo.internal.Enum() };

// Enum: ConnectivityStatus
ash.device_sync.device_sync.mojom.mojom.ConnectivityStatus = {
  kOnline: 0,
  kOffline: 1,
  kUnknownConnectivity: 2,
};
ash.device_sync.device_sync.mojom.mojom.ConnectivityStatusSpec = { $: mojo.internal.Enum() };

// Enum: GroupPrivateKeyStatus
ash.device_sync.device_sync.mojom.mojom.GroupPrivateKeyStatus = {
  kStatusUnavailableBecauseDeviceSyncIsNotInitialized: 0,
  kStatusUnavailableBecauseNoDeviceSyncerSet: 1,
  kWaitingForGroupPrivateKey: 2,
  kNoEncryptedGroupPrivateKeyReceived: 3,
  kEncryptedGroupPrivateKeyEmpty: 4,
  kLocalDeviceSyncBetterTogetherKeyMissing: 5,
  kGroupPrivateKeyDecryptionFailed: 6,
  kGroupPrivateKeySuccessfullyDecrypted: 7,
};
ash.device_sync.device_sync.mojom.mojom.GroupPrivateKeyStatusSpec = { $: mojo.internal.Enum() };

// Enum: BetterTogetherMetadataStatus
ash.device_sync.device_sync.mojom.mojom.BetterTogetherMetadataStatus = {
  kStatusUnavailableBecauseDeviceSyncIsNotInitialized: 0,
  kStatusUnavailableBecauseNoDeviceSyncerSet: 1,
  kWaitingToProcessDeviceMetadata: 2,
  kGroupPrivateKeyMissing: 3,
  kEncryptedMetadataEmpty: 4,
  kMetadataDecrypted: 5,
};
ash.device_sync.device_sync.mojom.mojom.BetterTogetherMetadataStatusSpec = { $: mojo.internal.Enum() };

// Struct: FindEligibleDevicesResponse
ash.device_sync.device_sync.mojom.mojom.FindEligibleDevicesResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.FindEligibleDevicesResponse',
      packedSize: 24,
      fields: [
        { name: 'eligible_devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.multidevice.mojom.RemoteDeviceSpec, false), nullable: false, minVersion: 0 },
        { name: 'ineligible_devices', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.multidevice.mojom.RemoteDeviceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DeviceActivityStatus
ash.device_sync.device_sync.mojom.mojom.DeviceActivityStatusSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceActivityStatus',
      packedSize: 40,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'last_activity_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'connectivity_status', packedOffset: 24, packedBitOffset: 0, type: ash.device_sync.mojom.ConnectivityStatusSpec, nullable: false, minVersion: 0 },
        { name: 'last_update_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DebugInfo
ash.device_sync.device_sync.mojom.mojom.DebugInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DebugInfo',
      packedSize: 48,
      fields: [
        { name: 'last_enrollment_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'time_to_next_enrollment_attempt', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'is_recovering_from_enrollment_failure', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_enrollment_in_progress', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'last_sync_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'time_to_next_sync_attempt', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'is_recovering_from_sync_failure', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_sync_in_progress', packedOffset: 32, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: DeviceSyncObserver
ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserver = {};

ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserverRemote = class {
  static get $interfaceName() {
    return 'ash.device_sync.mojom.DeviceSyncObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserverPendingReceiver,
      handle);
    this.$ = new ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEnrollmentFinished() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserver_OnEnrollmentFinished_ParamsSpec,
      null,
      []);
  }

  onNewDevicesSynced() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec,
      null,
      []);
  }

};

ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserver.getRemote = function() {
  let remote = new ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.device_sync.mojom.DeviceSyncObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnEnrollmentFinished
ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserver_OnEnrollmentFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSyncObserver.OnEnrollmentFinished_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnNewDevicesSynced
ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSyncObserver.OnNewDevicesSynced_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserverPtr = ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserverRemote;
ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserverRequest = ash.device_sync.device_sync.mojom.mojom.DeviceSyncObserverPendingReceiver;


// Interface: DeviceSync
ash.device_sync.device_sync.mojom.mojom.DeviceSync = {};

ash.device_sync.device_sync.mojom.mojom.DeviceSyncPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSyncRemote = class {
  static get $interfaceName() {
    return 'ash.device_sync.mojom.DeviceSync';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.device_sync.device_sync.mojom.mojom.DeviceSyncPendingReceiver,
      handle);
    this.$ = new ash.device_sync.device_sync.mojom.mojom.DeviceSyncRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSyncRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_AddObserver_ParamsSpec,
      null,
      [observer]);
  }

  forceEnrollmentNow() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec,
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec,
      []);
  }

  forceSyncNow() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_ForceSyncNow_ParamsSpec,
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec,
      []);
  }

  getGroupPrivateKeyStatus() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec,
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec,
      []);
  }

  getBetterTogetherMetadataStatus() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec,
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec,
      []);
  }

  getSyncedDevices() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetSyncedDevices_ParamsSpec,
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec,
      []);
  }

  getLocalDeviceMetadata() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec,
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec,
      []);
  }

  setSoftwareFeatureState(device_public_key, software_feature, enabled, is_exclusive) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec,
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec,
      [device_public_key, software_feature, enabled, is_exclusive]);
  }

  setFeatureStatus(device_instance_id, feature, status_change) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_SetFeatureStatus_ParamsSpec,
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec,
      [device_instance_id, feature, status_change]);
  }

  findEligibleDevices(software_feature) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_FindEligibleDevices_ParamsSpec,
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec,
      [software_feature]);
  }

  notifyDevices(device_instance_ids, cryptauth_service, feature) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_NotifyDevices_ParamsSpec,
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec,
      [device_instance_ids, cryptauth_service, feature]);
  }

  getDevicesActivityStatus() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec,
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec,
      []);
  }

  getDebugInfo() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetDebugInfo_ParamsSpec,
      ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec,
      []);
  }

};

ash.device_sync.device_sync.mojom.mojom.DeviceSync.getRemote = function() {
  let remote = new ash.device_sync.device_sync.mojom.mojom.DeviceSyncRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.device_sync.mojom.DeviceSync',
    'context');
  return remote.$;
};

// ParamsSpec for AddObserver
ash.device_sync.device_sync.mojom.mojom.DeviceSync_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.AddObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.device_sync.mojom.DeviceSyncObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ForceEnrollmentNow
ash.device_sync.device_sync.mojom.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.ForceEnrollmentNow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.ForceEnrollmentNow_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ForceSyncNow
ash.device_sync.device_sync.mojom.mojom.DeviceSync_ForceSyncNow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.ForceSyncNow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.ForceSyncNow_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetGroupPrivateKeyStatus
ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetGroupPrivateKeyStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetGroupPrivateKeyStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.device_sync.mojom.GroupPrivateKeyStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetBetterTogetherMetadataStatus
ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetBetterTogetherMetadataStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetBetterTogetherMetadataStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: ash.device_sync.mojom.BetterTogetherMetadataStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSyncedDevices
ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetSyncedDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetSyncedDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetSyncedDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.multidevice.mojom.RemoteDeviceSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLocalDeviceMetadata
ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetLocalDeviceMetadata_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetLocalDeviceMetadata_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'local_device', packedOffset: 0, packedBitOffset: 0, type: ash.multidevice.mojom.RemoteDeviceSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSoftwareFeatureState
ash.device_sync.device_sync.mojom.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.SetSoftwareFeatureState_Params',
      packedSize: 24,
      fields: [
        { name: 'device_public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'software_feature', packedOffset: 8, packedBitOffset: 0, type: ash.multidevice.mojom.SoftwareFeatureSpec, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_exclusive', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.SetSoftwareFeatureState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: ash.device_sync.mojom.NetworkRequestResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFeatureStatus
ash.device_sync.device_sync.mojom.mojom.DeviceSync_SetFeatureStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.SetFeatureStatus_Params',
      packedSize: 24,
      fields: [
        { name: 'device_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'feature', packedOffset: 8, packedBitOffset: 0, type: ash.multidevice.mojom.SoftwareFeatureSpec, nullable: false, minVersion: 0 },
        { name: 'status_change', packedOffset: 12, packedBitOffset: 0, type: ash.device_sync.mojom.FeatureStatusChangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.SetFeatureStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: ash.device_sync.mojom.NetworkRequestResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FindEligibleDevices
ash.device_sync.device_sync.mojom.mojom.DeviceSync_FindEligibleDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.FindEligibleDevices_Params',
      packedSize: 16,
      fields: [
        { name: 'software_feature', packedOffset: 0, packedBitOffset: 0, type: ash.multidevice.mojom.SoftwareFeatureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.FindEligibleDevices_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result_code', packedOffset: 8, packedBitOffset: 0, type: ash.device_sync.mojom.NetworkRequestResultSpec, nullable: false, minVersion: 0 },
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.device_sync.mojom.FindEligibleDevicesResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for NotifyDevices
ash.device_sync.device_sync.mojom.mojom.DeviceSync_NotifyDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.NotifyDevices_Params',
      packedSize: 24,
      fields: [
        { name: 'device_instance_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'cryptauth_service', packedOffset: 8, packedBitOffset: 0, type: ash.device_sync.mojom.CryptAuthServiceSpec, nullable: false, minVersion: 0 },
        { name: 'feature', packedOffset: 12, packedBitOffset: 0, type: ash.multidevice.mojom.SoftwareFeatureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.NotifyDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: ash.device_sync.mojom.NetworkRequestResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDevicesActivityStatus
ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetDevicesActivityStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetDevicesActivityStatus_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result_code', packedOffset: 8, packedBitOffset: 0, type: ash.device_sync.mojom.NetworkRequestResultSpec, nullable: false, minVersion: 0 },
        { name: 'device_activity_statuses', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.device_sync.mojom.DeviceActivityStatusSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetDebugInfo
ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetDebugInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetDebugInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.device_sync.mojom.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetDebugInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'debug_info', packedOffset: 0, packedBitOffset: 0, type: ash.device_sync.mojom.DebugInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.device_sync.device_sync.mojom.mojom.DeviceSyncPtr = ash.device_sync.device_sync.mojom.mojom.DeviceSyncRemote;
ash.device_sync.device_sync.mojom.mojom.DeviceSyncRequest = ash.device_sync.device_sync.mojom.mojom.DeviceSyncPendingReceiver;

