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
};

// Enum: FeatureStatusChange
ash.device_sync.mojom.FeatureStatusChange = {
};

// Enum: CryptAuthService
ash.device_sync.mojom.CryptAuthService = {
};

// Enum: ConnectivityStatus
ash.device_sync.mojom.ConnectivityStatus = {
};

// Enum: GroupPrivateKeyStatus
ash.device_sync.mojom.GroupPrivateKeyStatus = {
};

// Enum: BetterTogetherMetadataStatus
ash.device_sync.mojom.BetterTogetherMetadataStatus = {
};

// Struct: FindEligibleDevicesResponse
ash.device_sync.mojom.FindEligibleDevicesResponse = class {
  constructor(values = {}) {
    this.ineligible_devices = values.ineligible_devices !== undefined ? values.ineligible_devices : [];
  }
};

// Struct: DeviceActivityStatus
ash.device_sync.mojom.DeviceActivityStatus = class {
  constructor(values = {}) {
    this.last_update_time = values.last_update_time !== undefined ? values.last_update_time : "";
  }
};

// Struct: DebugInfo
ash.device_sync.mojom.DebugInfo = class {
  constructor(values = {}) {
    this.is_sync_in_progress = values.is_sync_in_progress !== undefined ? values.is_sync_in_progress : false;
  }
};

// Interface: DeviceSyncObserver
ash.device_sync.mojom.DeviceSyncObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.device_sync.mojom.DeviceSyncObserver';
  }

  onEnrollmentFinished() {
    // Method: OnEnrollmentFinished
    // Call: OnEnrollmentFinished()
  }

  onNewDevicesSynced() {
    // Method: OnNewDevicesSynced
    // Call: OnNewDevicesSynced()
  }

};

ash.device_sync.mojom.DeviceSyncObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DeviceSync
ash.device_sync.mojom.DeviceSyncPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.device_sync.mojom.DeviceSync';
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  forceEnrollmentNow() {
    // Method: ForceEnrollmentNow
    return new Promise((resolve) => {
      // Call: ForceEnrollmentNow()
      resolve({});
    });
  }

  forceSyncNow() {
    // Method: ForceSyncNow
    return new Promise((resolve) => {
      // Call: ForceSyncNow()
      resolve({});
    });
  }

  getGroupPrivateKeyStatus() {
    // Method: GetGroupPrivateKeyStatus
    return new Promise((resolve) => {
      // Call: GetGroupPrivateKeyStatus()
      resolve({});
    });
  }

  getBetterTogetherMetadataStatus() {
    // Method: GetBetterTogetherMetadataStatus
    return new Promise((resolve) => {
      // Call: GetBetterTogetherMetadataStatus()
      resolve({});
    });
  }

  getSyncedDevices() {
    // Method: GetSyncedDevices
    return new Promise((resolve) => {
      // Call: GetSyncedDevices()
      resolve({});
    });
  }

  getLocalDeviceMetadata() {
    // Method: GetLocalDeviceMetadata
    return new Promise((resolve) => {
      // Call: GetLocalDeviceMetadata()
      resolve({});
    });
  }

  setSoftwareFeatureState(device_public_key, software_feature, enabled, is_exclusive) {
    // Method: SetSoftwareFeatureState
    return new Promise((resolve) => {
      // Call: SetSoftwareFeatureState(device_public_key, software_feature, enabled, is_exclusive)
      resolve({});
    });
  }

  setFeatureStatus(device_instance_id, feature, status_change) {
    // Method: SetFeatureStatus
    return new Promise((resolve) => {
      // Call: SetFeatureStatus(device_instance_id, feature, status_change)
      resolve({});
    });
  }

  findEligibleDevices(software_feature) {
    // Method: FindEligibleDevices
    return new Promise((resolve) => {
      // Call: FindEligibleDevices(software_feature)
      resolve({});
    });
  }

  notifyDevices(device_instance_ids, cryptauth_service, feature) {
    // Method: NotifyDevices
    return new Promise((resolve) => {
      // Call: NotifyDevices(device_instance_ids, cryptauth_service, feature)
      resolve({});
    });
  }

  getDevicesActivityStatus() {
    // Method: GetDevicesActivityStatus
    return new Promise((resolve) => {
      // Call: GetDevicesActivityStatus()
      resolve({});
    });
  }

  getDebugInfo() {
    // Method: GetDebugInfo
    return new Promise((resolve) => {
      // Call: GetDebugInfo()
      resolve({});
    });
  }

};

ash.device_sync.mojom.DeviceSyncRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
