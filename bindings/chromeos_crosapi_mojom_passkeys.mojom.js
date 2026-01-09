// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/passkeys.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: UserVerificationRequirement
crosapi.mojom.UserVerificationRequirement = {
  kDiscouraged: 0,
  kRequired: 1,
};

// Enum: PasskeyCreationError
crosapi.mojom.PasskeyCreationError = {
  kNonPrimaryAccount: 0,
  kPendingRequest: 1,
  kSecurityDomainSecretUnavailable: 2,
};

// Enum: PasskeyAssertionError
crosapi.mojom.PasskeyAssertionError = {
  kNonPrimaryAccount: 0,
  kPendingRequest: 1,
  kCredentialNotFound: 2,
  kSecurityDomainSecretUnavailable: 3,
};

// Struct: PasskeyCreationRequest
crosapi.mojom.PasskeyCreationRequestSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PasskeyCreationRequest',
      packedSize: 48,
      fields: [
        { name: 'rp_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'user_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'user_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'user_display_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'user_verification', packedOffset: 40, packedBitOffset: 0, type: crosapi.mojom.UserVerificationRequirementSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PasskeyCreationResponse
crosapi.mojom.PasskeyCreationResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PasskeyCreationResponse',
      packedSize: 16,
      fields: [
        { name: 'authenticator_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PasskeyAssertionRequest
crosapi.mojom.PasskeyAssertionRequestSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PasskeyAssertionRequest',
      packedSize: 48,
      fields: [
        { name: 'rp_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'credential_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'challenge', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'client_data_hash', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'user_verification', packedOffset: 40, packedBitOffset: 0, type: crosapi.mojom.UserVerificationRequirementSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PasskeyAssertionResponse
crosapi.mojom.PasskeyAssertionResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PasskeyAssertionResponse',
      packedSize: 16,
      fields: [
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PasskeyAuthenticator
crosapi.mojom.PasskeyAuthenticator = {};

crosapi.mojom.PasskeyAuthenticatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.PasskeyAuthenticatorRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.PasskeyAuthenticator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.PasskeyAuthenticatorPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.PasskeyAuthenticatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.PasskeyAuthenticatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

crosapi.mojom.PasskeyAuthenticator.getRemote = function() {
  let remote = new crosapi.mojom.PasskeyAuthenticatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.PasskeyAuthenticator',
    'context');
  return remote.$;
};

// Legacy compatibility
crosapi.mojom.PasskeyAuthenticatorPtr = crosapi.mojom.PasskeyAuthenticatorRemote;
crosapi.mojom.PasskeyAuthenticatorRequest = crosapi.mojom.PasskeyAuthenticatorPendingReceiver;

