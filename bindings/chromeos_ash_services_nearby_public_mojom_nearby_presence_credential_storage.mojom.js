// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_presence_credential_storage.mojom
// Module: ash.nearby.presence.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.nearby = ash.nearby || {};
ash.nearby.presence = ash.nearby.presence || {};
ash.nearby.presence.mojom = ash.nearby.presence.mojom || {};


// Interface: NearbyPresenceCredentialStorage
ash.nearby.presence.mojom.NearbyPresenceCredentialStoragePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage';
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  saveCredentials(local_credentials, shared_credentials, public_credential_type) {
    // Method: SaveCredentials
    return new Promise((resolve) => {
      // Call: SaveCredentials(local_credentials, shared_credentials, public_credential_type)
      resolve({});
    });
  }

  type() {
    // Method: type
    // Call: type()
  }

  getPublicCredentials(public_credential_type) {
    // Method: GetPublicCredentials
    return new Promise((resolve) => {
      // Call: GetPublicCredentials(public_credential_type)
      resolve({});
    });
  }

  getPrivateCredentials() {
    // Method: GetPrivateCredentials
    return new Promise((resolve) => {
      // Call: GetPrivateCredentials()
      resolve({});
    });
  }

  updateLocalCredential(local_credential) {
    // Method: UpdateLocalCredential
    return new Promise((resolve) => {
      // Call: UpdateLocalCredential(local_credential)
      resolve({});
    });
  }

};

ash.nearby.presence.mojom.NearbyPresenceCredentialStorageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
