// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/multidevice_setup/public/mojom/multidevice_setup.mojom
// Module: ash.multidevice_setup.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.multidevice_setup = ash.multidevice_setup || {};
ash.multidevice_setup.mojom = ash.multidevice_setup.mojom || {};


// Enum: CameraRollOptInEntryPoint
ash.multidevice_setup.mojom.CameraRollOptInEntryPoint = {
  kSetupFlow: 0,
  kOnboardingDialog: 1,
  kSettings: 2,
};

// Enum: EventTypeForDebugging
ash.multidevice_setup.mojom.EventTypeForDebugging = {
  kNewUserPotentialHostExists: 0,
  kExistingUserConnectedHostSwitched: 1,
  kExistingUserNewChromebookAdded: 2,
};

// Enum: HostStatus
ash.multidevice_setup.mojom.HostStatus = {
  but: 0,
  but: 1,
  the: 2,
  or: 3,
  but: 4,
  and: 5,
};

// Enum: Feature
ash.multidevice_setup.mojom.Feature = {
  kBetterTogetherSuite: 0,
  kInstantTethering: 1,
  kMessages: 2,
  kSmartLock: 3,
  kPhoneHub: 4,
  kPhoneHubNotifications: 5,
  kPhoneHubTaskContinuation: 6,
  kWifiSync: 7,
  kEche: 8,
  kPhoneHubCameraRoll: 9,
};

// Enum: FeatureState
ash.multidevice_setup.mojom.FeatureState = {
  EDU: 0,
  via: 1,
  via: 2,
  Smart: 3,
  but: 4,
  but: 5,
  and: 6,
  Phone: 7,
  use: 8,
  use: 9,
};

// Struct: HostDevice
ash.multidevice_setup.mojom.HostDevice = class {
  constructor(values = {}) {
    this.connectivity_status = values.connectivity_status !== undefined ? values.connectivity_status : null;
  }
};

// Interface: AccountStatusChangeDelegate
ash.multidevice_setup.mojom.AccountStatusChangeDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.multidevice_setup.mojom.AccountStatusChangeDelegate';
  }

  onPotentialHostExistsForNewUser() {
    // Method: OnPotentialHostExistsForNewUser
    // Call: OnPotentialHostExistsForNewUser()
  }

  onNoLongerNewUser() {
    // Method: OnNoLongerNewUser
    // Call: OnNoLongerNewUser()
  }

  onConnectedHostSwitchedForExistingUser(new_host_device_name) {
    // Method: OnConnectedHostSwitchedForExistingUser
    // Call: OnConnectedHostSwitchedForExistingUser(new_host_device_name)
  }

  onNewChromebookAddedForExistingUser(new_host_device_name) {
    // Method: OnNewChromebookAddedForExistingUser
    // Call: OnNewChromebookAddedForExistingUser(new_host_device_name)
  }

  onBecameEligibleForWifiSync() {
    // Method: OnBecameEligibleForWifiSync
    // Call: OnBecameEligibleForWifiSync()
  }

};

ash.multidevice_setup.mojom.AccountStatusChangeDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HostStatusObserver
ash.multidevice_setup.mojom.HostStatusObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.multidevice_setup.mojom.HostStatusObserver';
  }

  onHostStatusChanged(host_status, host_device) {
    // Method: OnHostStatusChanged
    // Call: OnHostStatusChanged(host_status, host_device)
  }

};

ash.multidevice_setup.mojom.HostStatusObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FeatureStateObserver
ash.multidevice_setup.mojom.FeatureStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.multidevice_setup.mojom.FeatureStateObserver';
  }

  onFeatureStatesChanged(feature_states_map) {
    // Method: OnFeatureStatesChanged
    // Call: OnFeatureStatesChanged(feature_states_map)
  }

};

ash.multidevice_setup.mojom.FeatureStateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MultiDeviceSetup
ash.multidevice_setup.mojom.MultiDeviceSetupPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.multidevice_setup.mojom.MultiDeviceSetup';
  }

  setAccountStatusChangeDelegate(delegate) {
    // Method: SetAccountStatusChangeDelegate
    // Call: SetAccountStatusChangeDelegate(delegate)
  }

  addHostStatusObserver(observer) {
    // Method: AddHostStatusObserver
    // Call: AddHostStatusObserver(observer)
  }

  addFeatureStateObserver(observer) {
    // Method: AddFeatureStateObserver
    // Call: AddFeatureStateObserver(observer)
  }

  getEligibleHostDevices() {
    // Method: GetEligibleHostDevices
    return new Promise((resolve) => {
      // Call: GetEligibleHostDevices()
      resolve({});
    });
  }

  getEligibleActiveHostDevices() {
    // Method: GetEligibleActiveHostDevices
    return new Promise((resolve) => {
      // Call: GetEligibleActiveHostDevices()
      resolve({});
    });
  }

  setHostDevice(instance_id_or_legacy_device_id, auth_token) {
    // Method: SetHostDevice
    return new Promise((resolve) => {
      // Call: SetHostDevice(instance_id_or_legacy_device_id, auth_token)
      resolve({});
    });
  }

  removeHostDevice() {
    // Method: RemoveHostDevice
    // Call: RemoveHostDevice()
  }

  getHostStatus() {
    // Method: GetHostStatus
    return new Promise((resolve) => {
      // Call: GetHostStatus()
      resolve({});
    });
  }

  setFeatureEnabledState(feature, enabled, auth_token) {
    // Method: SetFeatureEnabledState
    return new Promise((resolve) => {
      // Call: SetFeatureEnabledState(feature, enabled, auth_token)
      resolve({});
    });
  }

  getFeatureStates() {
    // Method: GetFeatureStates
    return new Promise((resolve) => {
      // Call: GetFeatureStates()
      resolve({});
    });
  }

  retrySetHostNow() {
    // Method: RetrySetHostNow
    return new Promise((resolve) => {
      // Call: RetrySetHostNow()
      resolve({});
    });
  }

  triggerEventForDebugging(type) {
    // Method: TriggerEventForDebugging
    return new Promise((resolve) => {
      // Call: TriggerEventForDebugging(type)
      resolve({});
    });
  }

  setQuickStartPhoneInstanceID(qs_phone_instance_id) {
    // Method: SetQuickStartPhoneInstanceID
    // Call: SetQuickStartPhoneInstanceID(qs_phone_instance_id)
  }

  getQuickStartPhoneInstanceID() {
    // Method: GetQuickStartPhoneInstanceID
    return new Promise((resolve) => {
      // Call: GetQuickStartPhoneInstanceID()
      resolve({});
    });
  }

};

ash.multidevice_setup.mojom.MultiDeviceSetupRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PrivilegedHostDeviceSetter
ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter';
  }

  setHostDevice(instance_id_or_legacy_device_id) {
    // Method: SetHostDevice
    return new Promise((resolve) => {
      // Call: SetHostDevice(instance_id_or_legacy_device_id)
      resolve({});
    });
  }

};

ash.multidevice_setup.mojom.PrivilegedHostDeviceSetterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
