// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_presence_credential_storage.mojom
// Module: ash.nearby.presence.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.nearby = ash.nearby || {};
ash.nearby.presence = ash.nearby.presence || {};
ash.nearby.presence.mojom = ash.nearby.presence.mojom || {};
var mojo_base = mojo_base || {};

ash.nearby.presence.mojom.NearbyPresenceCredentialStorage = {};
ash.nearby.presence.mojom.NearbyPresenceCredentialStorage.$interfaceName = 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage';
ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_ParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_ResponseParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_ParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_ResponseParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_ParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_ResponseParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_ParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_ResponseParamsSpec = { $: {} };

// Interface: NearbyPresenceCredentialStorage
mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_Params', [
      mojo.internal.StructField('local_credentials', 0, 0, mojo.internal.Array(ash.nearby.presence.mojom.LocalCredentialSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('shared_credentials', 8, 0, mojo.internal.Array(ash.nearby.presence.mojom.SharedCredentialSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('public_credential_type', 16, 0, ash.nearby.presence.mojom.PublicCredentialTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_ResponseParamsSpec, 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_Params', [
      mojo.internal.StructField('public_credential_type', 0, 0, ash.nearby.presence.mojom.PublicCredentialTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_ResponseParamsSpec, 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_credentials', 8, 0, mojo.internal.Array(ash.nearby.presence.mojom.SharedCredentialSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_ResponseParamsSpec, 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_credentials', 8, 0, mojo.internal.Array(ash.nearby.presence.mojom.LocalCredentialSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_Params', [
      mojo.internal.StructField('local_credential', 0, 0, ash.nearby.presence.mojom.LocalCredentialSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_ResponseParamsSpec, 'ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_ParamsSpec,
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_ResponseParamsSpec,
      [local_credentials, shared_credentials, public_credential_type],
      false);
  }

  getPublicCredentials(public_credential_type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_ParamsSpec,
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_ResponseParamsSpec,
      [public_credential_type],
      false);
  }

  getPrivateCredentials() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_ParamsSpec,
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_ResponseParamsSpec,
      [],
      false);
  }

  updateLocalCredential(local_credential) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_ParamsSpec,
      ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_ResponseParamsSpec,
      [local_credential],
      false);
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

ash.nearby.presence.mojom.NearbyPresenceCredentialStorageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_ParamsSpec.$.decode(message.payload);
          const result = this.impl.saveCredentials(params.local_credentials, params.shared_credentials, params.public_credential_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_SaveCredentials_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPublicCredentials(params.public_credential_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPublicCredentials_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPrivateCredentials();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_GetPrivateCredentials_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateLocalCredential(params.local_credential);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.nearby.presence.mojom.NearbyPresenceCredentialStorage_UpdateLocalCredential_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

ash.nearby.presence.mojom.NearbyPresenceCredentialStorageReceiver = ash.nearby.presence.mojom.NearbyPresenceCredentialStorageReceiver;

ash.nearby.presence.mojom.NearbyPresenceCredentialStoragePtr = ash.nearby.presence.mojom.NearbyPresenceCredentialStorageRemote;
ash.nearby.presence.mojom.NearbyPresenceCredentialStorageRequest = ash.nearby.presence.mojom.NearbyPresenceCredentialStoragePendingReceiver;

