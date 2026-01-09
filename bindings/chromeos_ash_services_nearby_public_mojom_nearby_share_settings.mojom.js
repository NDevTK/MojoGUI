// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_share_settings.mojom
// Module: nearby_share.mojom

'use strict';

// Module namespace
var nearby_share = nearby_share || {};
nearby_share.mojom = nearby_share.mojom || {};


// Enum: DataUsage
nearby_share.mojom.DataUsage = {
  kUnknown: 0,
};

// Enum: Visibility
nearby_share.mojom.Visibility = {
  kUnknown: 0,
};

// Enum: DeviceNameValidationResult
nearby_share.mojom.DeviceNameValidationResult = {
};

// Enum: FastInitiationNotificationState
nearby_share.mojom.FastInitiationNotificationState = {
  kEnabled: 0,
};

// Struct: ContactRecord
nearby_share.mojom.ContactRecord = class {
  constructor(values = {}) {
    this.identifiers = values.identifiers !== undefined ? values.identifiers : "";
  }
};

// Interface: NearbyShareSettingsObserver
nearby_share.mojom.NearbyShareSettingsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby_share.mojom.NearbyShareSettingsObserver';
  }

  onEnabledChanged(enabled) {
    // Method: OnEnabledChanged
    // Call: OnEnabledChanged(enabled)
  }

  onFastInitiationNotificationStateChanged(state) {
    // Method: OnFastInitiationNotificationStateChanged
    // Call: OnFastInitiationNotificationStateChanged(state)
  }

  onIsFastInitiationHardwareSupportedChanged(is_supported) {
    // Method: OnIsFastInitiationHardwareSupportedChanged
    // Call: OnIsFastInitiationHardwareSupportedChanged(is_supported)
  }

  onDeviceNameChanged(device_name) {
    // Method: OnDeviceNameChanged
    // Call: OnDeviceNameChanged(device_name)
  }

  onDataUsageChanged(data_usage) {
    // Method: OnDataUsageChanged
    // Call: OnDataUsageChanged(data_usage)
  }

  onVisibilityChanged(visibility) {
    // Method: OnVisibilityChanged
    // Call: OnVisibilityChanged(visibility)
  }

  onAllowedContactsChanged(visible_contact_ids) {
    // Method: OnAllowedContactsChanged
    // Call: OnAllowedContactsChanged(visible_contact_ids)
  }

  onIsOnboardingCompleteChanged(is_complete) {
    // Method: OnIsOnboardingCompleteChanged
    // Call: OnIsOnboardingCompleteChanged(is_complete)
  }

};

nearby_share.mojom.NearbyShareSettingsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NearbyShareSettings
nearby_share.mojom.NearbyShareSettingsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby_share.mojom.NearbyShareSettings';
  }

  addSettingsObserver(observer) {
    // Method: AddSettingsObserver
    // Call: AddSettingsObserver(observer)
  }

  getEnabled() {
    // Method: GetEnabled
    return new Promise((resolve) => {
      // Call: GetEnabled()
      resolve({});
    });
  }

  setEnabled(enabled) {
    // Method: SetEnabled
    // Call: SetEnabled(enabled)
  }

  isOnboardingComplete() {
    // Method: IsOnboardingComplete
    return new Promise((resolve) => {
      // Call: IsOnboardingComplete()
      resolve({});
    });
  }

  setIsOnboardingComplete(completed) {
    // Method: SetIsOnboardingComplete
    // Call: SetIsOnboardingComplete(completed)
  }

  getFastInitiationNotificationState() {
    // Method: GetFastInitiationNotificationState
    return new Promise((resolve) => {
      // Call: GetFastInitiationNotificationState()
      resolve({});
    });
  }

  setFastInitiationNotificationState(state) {
    // Method: SetFastInitiationNotificationState
    // Call: SetFastInitiationNotificationState(state)
  }

  getIsFastInitiationHardwareSupported() {
    // Method: GetIsFastInitiationHardwareSupported
    return new Promise((resolve) => {
      // Call: GetIsFastInitiationHardwareSupported()
      resolve({});
    });
  }

  getDeviceName() {
    // Method: GetDeviceName
    return new Promise((resolve) => {
      // Call: GetDeviceName()
      resolve({});
    });
  }

  validateDeviceName(device_name) {
    // Method: ValidateDeviceName
    return new Promise((resolve) => {
      // Call: ValidateDeviceName(device_name)
      resolve({});
    });
  }

  setDeviceName(device_name) {
    // Method: SetDeviceName
    return new Promise((resolve) => {
      // Call: SetDeviceName(device_name)
      resolve({});
    });
  }

  getDataUsage() {
    // Method: GetDataUsage
    return new Promise((resolve) => {
      // Call: GetDataUsage()
      resolve({});
    });
  }

  setDataUsage(data_usage) {
    // Method: SetDataUsage
    // Call: SetDataUsage(data_usage)
  }

  getVisibility() {
    // Method: GetVisibility
    return new Promise((resolve) => {
      // Call: GetVisibility()
      resolve({});
    });
  }

  setVisibility(visibility) {
    // Method: SetVisibility
    // Call: SetVisibility(visibility)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  getAllowedContacts() {
    // Method: GetAllowedContacts
    return new Promise((resolve) => {
      // Call: GetAllowedContacts()
      resolve({});
    });
  }

  setAllowedContacts(allowed_contacts) {
    // Method: SetAllowedContacts
    // Call: SetAllowedContacts(allowed_contacts)
  }

};

nearby_share.mojom.NearbyShareSettingsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DownloadContactsObserver
nearby_share.mojom.DownloadContactsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby_share.mojom.DownloadContactsObserver';
  }

  setAllowedContacts() {
    // Method: SetAllowedContacts
    // Call: SetAllowedContacts()
  }

  contacts(case) {
    // Method: contacts
    // Call: contacts(case)
  }

  onContactsDownloaded(allowed_contacts, contacts, num_unreachable_contacts_filtered_out) {
    // Method: OnContactsDownloaded
    // Call: OnContactsDownloaded(allowed_contacts, contacts, num_unreachable_contacts_filtered_out)
  }

  onContactsDownloadFailed() {
    // Method: OnContactsDownloadFailed
    // Call: OnContactsDownloadFailed()
  }

};

nearby_share.mojom.DownloadContactsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ContactManager
nearby_share.mojom.ContactManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby_share.mojom.ContactManager';
  }

  addDownloadContactsObserver(observer) {
    // Method: AddDownloadContactsObserver
    // Call: AddDownloadContactsObserver(observer)
  }

  downloadContacts() {
    // Method: DownloadContacts
    // Call: DownloadContacts()
  }

  onContactsDownloaded() {
    // Method: OnContactsDownloaded
    // Call: OnContactsDownloaded()
  }

  setAllowedContacts(allowed_contacts) {
    // Method: SetAllowedContacts
    // Call: SetAllowedContacts(allowed_contacts)
  }

};

nearby_share.mojom.ContactManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
