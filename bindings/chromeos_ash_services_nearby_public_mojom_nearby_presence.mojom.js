// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_presence.mojom
// Module: ash.nearby.presence.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.nearby = ash.nearby || {};
ash.nearby.presence = ash.nearby.presence || {};
ash.nearby.presence.mojom = ash.nearby.presence.mojom || {};


// Enum: IdentityType
ash.nearby.presence.mojom.IdentityType = {
  kIdentityTypeUnspecified: 0,
  kIdentityTypePrivateGroup: 1,
  kIdentityTypeContactsGroup: 2,
  kIdentityTypePublic: 3,
};

// Enum: PresenceDeviceType
ash.nearby.presence.mojom.PresenceDeviceType = {
  kPhone: 0,
  kTablet: 1,
  kDisplay: 2,
  kLaptop: 3,
  kTv: 4,
  kWatch: 5,
  kChromeos: 6,
  kFoldable: 7,
};

// Enum: ActionType
ash.nearby.presence.mojom.ActionType = {
  kCallTransferAction: 0,
  kActiveUnlockAction: 1,
  kNearbyShareAction: 2,
  kInstantTetheringAction: 3,
  kPhoneHubAction: 4,
  kPresenceManagerAction: 5,
  kFinderAction: 6,
  kFastPairSassAction: 7,
  kTapToTransferAction: 8,
  kLastAction: 9,
};

// Enum: PublicCredentialType
ash.nearby.presence.mojom.PublicCredentialType = {
  kLocalPublicCredential: 0,
  kRemotePublicCredential: 1,
};

// Enum: CredentialType
ash.nearby.presence.mojom.CredentialType = {
  kCredentialTypeUnknown: 0,
  kCredentialTypeDevice: 1,
  kCredentialTypeGaia: 2,
};

// Struct: ScanRequest
ash.nearby.presence.mojom.ScanRequest = class {
  constructor(values = {}) {
    this.scan_filters = values.scan_filters !== undefined ? values.scan_filters : "";
  }
};

// Struct: PrivateKey
ash.nearby.presence.mojom.PrivateKey = class {
  constructor(values = {}) {
    this.key = values.key !== undefined ? values.key : 0;
  }
};

// Struct: PresenceScanFilter
ash.nearby.presence.mojom.PresenceScanFilter = class {
  constructor(values = {}) {
    this.device_type = values.device_type !== undefined ? values.device_type : null;
  }
};

// Struct: Metadata
ash.nearby.presence.mojom.Metadata = class {
  constructor(values = {}) {
    this.device_id = values.device_id !== undefined ? values.device_id : 0;
  }
};

// Struct: SharedCredential
ash.nearby.presence.mojom.SharedCredential = class {
  constructor(values = {}) {
    this.identity_type = values.identity_type !== undefined ? values.identity_type : 0;
    this.encrypted_metadata_bytes_v1 = values.encrypted_metadata_bytes_v1 !== undefined ? values.encrypted_metadata_bytes_v1 : 0;
    this.salt = values.salt !== undefined ? values.salt : null;
    this.signature_version = values.signature_version !== undefined ? values.signature_version : 0;
    this.salt = values.salt !== undefined ? values.salt : null;
    this.identity_token_signed_adv_hmac_key_v1 = values.identity_token_signed_adv_hmac_key_v1 !== undefined ? values.identity_token_signed_adv_hmac_key_v1 : 0;
  }
};

// Struct: PresenceDevice
ash.nearby.presence.mojom.PresenceDevice = class {
  constructor(values = {}) {
    this.decrypt_shared_credential = values.decrypt_shared_credential !== undefined ? values.decrypt_shared_credential : 0;
  }
};

// Struct: LocalCredential
ash.nearby.presence.mojom.LocalCredential = class {
  constructor(values = {}) {
    this.secret_id = values.secret_id !== undefined ? values.secret_id : 0;
    this.signature_version = values.signature_version !== undefined ? values.signature_version : 0;
  }
};

// Interface: ScanSession
ash.nearby.presence.mojom.ScanSessionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.nearby.presence.mojom.ScanSession';
  }

};

ash.nearby.presence.mojom.ScanSessionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ScanObserver
ash.nearby.presence.mojom.ScanObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.nearby.presence.mojom.ScanObserver';
  }

  onDeviceFound(device) {
    // Method: OnDeviceFound
    // Call: OnDeviceFound(device)
  }

  onDeviceChanged(device) {
    // Method: OnDeviceChanged
    // Call: OnDeviceChanged(device)
  }

  onDeviceLost(device) {
    // Method: OnDeviceLost
    // Call: OnDeviceLost(device)
  }

};

ash.nearby.presence.mojom.ScanObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NearbyPresence
ash.nearby.presence.mojom.NearbyPresencePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.nearby.presence.mojom.NearbyPresence';
  }

  startScan(scan_request) {
    // Method: StartScan
    return new Promise((resolve) => {
      // Call: StartScan(scan_request)
      resolve({});
    });
  }

  setScanObserver(scan_observer) {
    // Method: SetScanObserver
    // Call: SetScanObserver(scan_observer)
  }

  updateLocalDeviceMetadata(metadata) {
    // Method: UpdateLocalDeviceMetadata
    // Call: UpdateLocalDeviceMetadata(metadata)
  }

  updateLocalDeviceMetadataAndGenerateCredentials(metadata) {
    // Method: UpdateLocalDeviceMetadataAndGenerateCredentials
    return new Promise((resolve) => {
      // Call: UpdateLocalDeviceMetadataAndGenerateCredentials(metadata)
      resolve({});
    });
  }

  updateRemoteSharedCredentials(shared_credentials, account_name) {
    // Method: UpdateRemoteSharedCredentials
    return new Promise((resolve) => {
      // Call: UpdateRemoteSharedCredentials(shared_credentials, account_name)
      resolve({});
    });
  }

  getLocalSharedCredentials(account_name) {
    // Method: GetLocalSharedCredentials
    return new Promise((resolve) => {
      // Call: GetLocalSharedCredentials(account_name)
      resolve({});
    });
  }

};

ash.nearby.presence.mojom.NearbyPresenceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
