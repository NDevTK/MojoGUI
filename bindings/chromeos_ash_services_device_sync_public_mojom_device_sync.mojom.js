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
      null,
      [],
      undefined,
      undefined
    );
  }

  onNewDevicesSynced() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      null,
      [observer],
      undefined,
      undefined
    );
  }

  forceEnrollmentNow() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec,
      ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec,
      [],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  forceSyncNow() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.device_sync.mojom.DeviceSync_ForceSyncNow_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec,
      ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec,
      [],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

  getGroupPrivateKeyStatus() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getBetterTogetherMetadataStatus() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getSyncedDevices() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getLocalDeviceMetadata() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setSoftwareFeatureState(device_public_key, software_feature, enabled, is_exclusive) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec,
      ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec,
      [device_public_key, software_feature, enabled, is_exclusive],
      undefined,
      undefined
    );
  }

  setFeatureStatus(device_instance_id, feature, status_change) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec,
      ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec,
      [device_instance_id, feature, status_change],
      undefined,
      undefined
    );
  }

  findEligibleDevices(software_feature) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec,
      ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec,
      [software_feature],
      undefined,
      undefined
    );
  }

  notifyDevices(device_instance_ids, cryptauth_service, feature) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.device_sync.mojom.DeviceSync_NotifyDevices_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec,
      ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec,
      [device_instance_ids, cryptauth_service, feature],
      undefined,
      undefined
    );
  }

  getDevicesActivityStatus() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getDebugInfo() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetDebugInfo_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
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
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.ForceEnrollmentNow_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.ForceSyncNow_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetGroupPrivateKeyStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetBetterTogetherMetadataStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetSyncedDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetLocalDeviceMetadata_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'local_device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'device_public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'software_feature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'enabled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_exclusive', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.SetSoftwareFeatureState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'device_instance_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'feature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'status_change', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.SetFeatureStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'software_feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.FindEligibleDevices_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'device_instance_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'cryptauth_service', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'feature', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.NotifyDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetDevicesActivityStatus_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_activity_statuses', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.device_sync.mojom.DeviceSync.GetDebugInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'debug_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.device_sync.mojom.DeviceSyncPtr = ash.device_sync.mojom.DeviceSyncRemote;
ash.device_sync.mojom.DeviceSyncRequest = ash.device_sync.mojom.DeviceSyncPendingReceiver;

