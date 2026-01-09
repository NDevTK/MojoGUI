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
ash.nearby.presence.mojom.NearbyPresenceCredentialStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.nearby.presence.mojom.NearbyPresenceCredentialStorageRemote = class {
  static get $interfaceName() {
    return 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.nearby.presence.mojom.NearbyPresenceCredentialStoragePendingReceiver,
      handle);
    this.$ = new ash.nearby.presence.mojom.NearbyPresenceCredentialStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.nearby.presence.mojom.NearbyPresenceCredentialStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  saveCredentials(local_credentials, shared_credentials, public_credential_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_ParamsSpec.$,
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_ResponseParamsSpec.$,
      [local_credentials, shared_credentials, public_credential_type]);
  }

  getPublicCredentials(public_credential_type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_ParamsSpec.$,
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_ResponseParamsSpec.$,
      [public_credential_type]);
  }

  getPrivateCredentials() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_ParamsSpec.$,
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_ResponseParamsSpec.$,
      []);
  }

  updateLocalCredential(local_credential) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_ParamsSpec.$,
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_ResponseParamsSpec.$,
      [local_credential]);
  }

};

ash.nearby.presence.mojom.NearbyPresenceCredentialStorage.getRemote = function() {
  let remote = new ash.nearby.presence.mojom.NearbyPresenceCredentialStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage',
    'context');
  return remote.$;
};

// ParamsSpec for SaveCredentials
ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage.SaveCredentials_Params',
      packedSize: 32,
      fields: [
        { name: 'local_credentials', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'shared_credentials', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'public_credential_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage.SaveCredentials_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPublicCredentials
ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage.GetPublicCredentials_Params',
      packedSize: 16,
      fields: [
        { name: 'public_credential_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage.GetPublicCredentials_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'shared_credentials', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPrivateCredentials
ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage.GetPrivateCredentials_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage.GetPrivateCredentials_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'local_credentials', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateLocalCredential
ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage.UpdateLocalCredential_Params',
      packedSize: 16,
      fields: [
        { name: 'local_credential', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage.UpdateLocalCredential_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.nearby.presence.mojom.NearbyPresenceCredentialStoragePtr = ash.nearby.presence.mojom.NearbyPresenceCredentialStorageRemote;
ash.nearby.presence.mojom.NearbyPresenceCredentialStorageRequest = ash.nearby.presence.mojom.NearbyPresenceCredentialStoragePendingReceiver;

