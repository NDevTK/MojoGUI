// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/device_sync/public/mojom/device_sync.mojom
// Module: ash.device_sync.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.device_sync = ash.device_sync || {};
ash.device_sync.mojom = ash.device_sync.mojom || {};
var mojo_base = mojo_base || {};

ash.device_sync.mojom.NetworkRequestResultSpec = { $: mojo.internal.Enum() };
ash.device_sync.mojom.FeatureStatusChangeSpec = { $: mojo.internal.Enum() };
ash.device_sync.mojom.CryptAuthServiceSpec = { $: mojo.internal.Enum() };
ash.device_sync.mojom.ConnectivityStatusSpec = { $: mojo.internal.Enum() };
ash.device_sync.mojom.GroupPrivateKeyStatusSpec = { $: mojo.internal.Enum() };
ash.device_sync.mojom.BetterTogetherMetadataStatusSpec = { $: mojo.internal.Enum() };
ash.device_sync.mojom.FindEligibleDevicesResponseSpec = { $: {} };
ash.device_sync.mojom.DeviceActivityStatusSpec = { $: {} };
ash.device_sync.mojom.DebugInfoSpec = { $: {} };
ash.device_sync.mojom.DeviceSyncObserver = {};
ash.device_sync.mojom.DeviceSyncObserver.$interfaceName = 'ash.device_sync.mojom.DeviceSyncObserver';
ash.device_sync.mojom.DeviceSyncObserver_OnEnrollmentFinished_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync = {};
ash.device_sync.mojom.DeviceSync.$interfaceName = 'ash.device_sync.mojom.DeviceSync';
ash.device_sync.mojom.DeviceSync_AddObserver_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_AddObserver_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_ForceSyncNow_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_NotifyDevices_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetDebugInfo_ParamsSpec = { $: {} };
ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    ash.device_sync.mojom.FindEligibleDevicesResponseSpec, 'ash.device_sync.mojom.FindEligibleDevicesResponse', [
      mojo.internal.StructField('eligible_devices', 0, 0, mojo.internal.Array(ash.multidevice.mojom.RemoteDeviceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('ineligible_devices', 8, 0, mojo.internal.Array(ash.multidevice.mojom.RemoteDeviceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DeviceActivityStatus
mojo.internal.Struct(
    ash.device_sync.mojom.DeviceActivityStatusSpec, 'ash.device_sync.mojom.DeviceActivityStatus', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('last_activity_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connectivity_status', 16, 0, ash.device_sync.mojom.ConnectivityStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_update_time', 24, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DebugInfo
mojo.internal.Struct(
    ash.device_sync.mojom.DebugInfoSpec, 'ash.device_sync.mojom.DebugInfo', [
      mojo.internal.StructField('last_enrollment_time', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time_to_next_enrollment_attempt', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_sync_time', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time_to_next_sync_attempt', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_recovering_from_enrollment_failure', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_enrollment_in_progress', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_recovering_from_sync_failure', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_sync_in_progress', 32, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: DeviceSyncObserver
mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSyncObserver_OnEnrollmentFinished_ParamsSpec, 'ash.device_sync.mojom.DeviceSyncObserver_OnEnrollmentFinished_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec, 'ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  onNewDevicesSynced() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec,
      null,
      [],
      false);
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

ash.device_sync.mojom.DeviceSyncObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.device_sync.mojom.DeviceSyncObserver_OnEnrollmentFinished_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onEnrollmentFinished();
          break;
        }
        case 1: {
          const params = ash.device_sync.mojom.DeviceSyncObserver_OnNewDevicesSynced_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNewDevicesSynced();
          break;
        }
      }
    }});
  }
};

ash.device_sync.mojom.DeviceSyncObserverReceiver = ash.device_sync.mojom.DeviceSyncObserverReceiver;

ash.device_sync.mojom.DeviceSyncObserverPtr = ash.device_sync.mojom.DeviceSyncObserverRemote;
ash.device_sync.mojom.DeviceSyncObserverRequest = ash.device_sync.mojom.DeviceSyncObserverPendingReceiver;


// Interface: DeviceSync
mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_AddObserver_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.device_sync.mojom.DeviceSyncObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_AddObserver_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_AddObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_ForceSyncNow_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_ForceSyncNow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.device_sync.mojom.GroupPrivateKeyStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.device_sync.mojom.BetterTogetherMetadataStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetSyncedDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(ash.multidevice.mojom.RemoteDeviceSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParams', [
      mojo.internal.StructField('local_device', 0, 0, ash.multidevice.mojom.RemoteDeviceSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_Params', [
      mojo.internal.StructField('device_public_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('software_feature', 8, 0, ash.multidevice.mojom.SoftwareFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_exclusive', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, ash.device_sync.mojom.NetworkRequestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_SetFeatureStatus_Params', [
      mojo.internal.StructField('device_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('feature', 8, 0, ash.multidevice.mojom.SoftwareFeatureSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status_change', 16, 0, ash.device_sync.mojom.FeatureStatusChangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, ash.device_sync.mojom.NetworkRequestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_FindEligibleDevices_Params', [
      mojo.internal.StructField('software_feature', 0, 0, ash.multidevice.mojom.SoftwareFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, ash.device_sync.mojom.NetworkRequestResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('response', 8, 0, ash.device_sync.mojom.FindEligibleDevicesResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_NotifyDevices_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_NotifyDevices_Params', [
      mojo.internal.StructField('device_instance_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('cryptauth_service', 8, 0, ash.device_sync.mojom.CryptAuthServiceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('feature', 16, 0, ash.multidevice.mojom.SoftwareFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, ash.device_sync.mojom.NetworkRequestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParams', [
      mojo.internal.StructField('result_code', 0, 0, ash.device_sync.mojom.NetworkRequestResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_activity_statuses', 8, 0, mojo.internal.Array(ash.device_sync.mojom.DeviceActivityStatusSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetDebugInfo_ParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetDebugInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec, 'ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParams', [
      mojo.internal.StructField('debug_info', 0, 0, ash.device_sync.mojom.DebugInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      ash.device_sync.mojom.DeviceSync_AddObserver_ResponseParamsSpec,
      [observer],
      false);
  }

  forceEnrollmentNow() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec,
      [],
      false);
  }

  forceSyncNow() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.device_sync.mojom.DeviceSync_ForceSyncNow_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec,
      [],
      false);
  }

  getGroupPrivateKeyStatus() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec,
      [],
      false);
  }

  getBetterTogetherMetadataStatus() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec,
      [],
      false);
  }

  getSyncedDevices() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec,
      [],
      false);
  }

  getLocalDeviceMetadata() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec,
      [],
      false);
  }

  setSoftwareFeatureState(device_public_key, software_feature, enabled, is_exclusive) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec,
      [device_public_key, software_feature, enabled, is_exclusive],
      false);
  }

  setFeatureStatus(device_instance_id, feature, status_change) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec,
      [device_instance_id, feature, status_change],
      false);
  }

  findEligibleDevices(software_feature) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec,
      [software_feature],
      false);
  }

  notifyDevices(device_instance_ids, cryptauth_service, feature) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.device_sync.mojom.DeviceSync_NotifyDevices_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec,
      [device_instance_ids, cryptauth_service, feature],
      false);
  }

  getDevicesActivityStatus() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec,
      [],
      false);
  }

  getDebugInfo() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.device_sync.mojom.DeviceSync_GetDebugInfo_ParamsSpec,
      ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec,
      [],
      false);
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

ash.device_sync.mojom.DeviceSyncReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.device_sync.mojom.DeviceSync_AddObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addObserver(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_AddObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ParamsSpec.$.decode(message.payload);
          const result = this.impl.forceEnrollmentNow();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_ForceEnrollmentNow_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.device_sync.mojom.DeviceSync_ForceSyncNow_ParamsSpec.$.decode(message.payload);
          const result = this.impl.forceSyncNow();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_ForceSyncNow_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getGroupPrivateKeyStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_GetGroupPrivateKeyStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getBetterTogetherMetadataStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_GetBetterTogetherMetadataStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSyncedDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_GetSyncedDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getLocalDeviceMetadata();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_GetLocalDeviceMetadata_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSoftwareFeatureState(params.device_public_key, params.software_feature, params.enabled, params.is_exclusive);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_SetSoftwareFeatureState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setFeatureStatus(params.device_instance_id, params.feature, params.status_change);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_SetFeatureStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.findEligibleDevices(params.software_feature);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_FindEligibleDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = ash.device_sync.mojom.DeviceSync_NotifyDevices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyDevices(params.device_instance_ids, params.cryptauth_service, params.feature);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_NotifyDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const params = ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDevicesActivityStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_GetDevicesActivityStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const params = ash.device_sync.mojom.DeviceSync_GetDebugInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getDebugInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.device_sync.mojom.DeviceSync_GetDebugInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.device_sync.mojom.DeviceSyncReceiver = ash.device_sync.mojom.DeviceSyncReceiver;

ash.device_sync.mojom.DeviceSyncPtr = ash.device_sync.mojom.DeviceSyncRemote;
ash.device_sync.mojom.DeviceSyncRequest = ash.device_sync.mojom.DeviceSyncPendingReceiver;

