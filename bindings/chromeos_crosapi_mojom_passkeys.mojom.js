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
crosapi.mojom.UserVerificationRequirementSpec = { $: mojo.internal.Enum() };

// Enum: PasskeyCreationError
crosapi.mojom.PasskeyCreationError = {
  kNonPrimaryAccount: 0,
  kPendingRequest: 1,
  kSecurityDomainSecretUnavailable: 2,
};
crosapi.mojom.PasskeyCreationErrorSpec = { $: mojo.internal.Enum() };

// Enum: PasskeyAssertionError
crosapi.mojom.PasskeyAssertionError = {
  kNonPrimaryAccount: 0,
  kPendingRequest: 1,
  kCredentialNotFound: 2,
  kSecurityDomainSecretUnavailable: 3,
};
crosapi.mojom.PasskeyAssertionErrorSpec = { $: mojo.internal.Enum() };

// Union: PasskeyCreationResult
crosapi.mojom.PasskeyCreationResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.PasskeyCreationResult', {
      'response': {
        'ordinal': 0,
        'type': crosapi.mojom.PasskeyCreationResponseSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.PasskeyCreationErrorSpec,
      }},
    })
};

// Union: PasskeyAssertionResult
crosapi.mojom.PasskeyAssertionResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.PasskeyAssertionResult', {
      'response': {
        'ordinal': 0,
        'type': crosapi.mojom.PasskeyAssertionResponseSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.PasskeyAssertionErrorSpec,
      }},
    })
};

// Struct: PasskeyCreationRequest
crosapi.mojom.PasskeyCreationRequestSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PasskeyCreationRequest',
      packedSize: 48,
      fields: [
        { name: 'rp_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'user_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'user_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'user_display_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'user_verification', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.UserVerificationRequirementSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
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
        { name: 'authenticator_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'rp_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'credential_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'challenge', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'client_data_hash', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'user_verification', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.UserVerificationRequirementSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: PasskeyAssertionResponse
crosapi.mojom.PasskeyAssertionResponseSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PasskeyAssertionResponse',
      packedSize: 24,
      fields: [
        { name: 'signature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'authenticator_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 1, packedSize: 24}]
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

  create(account, request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.PasskeyAuthenticator_Create_ParamsSpec,
      crosapi.mojom.PasskeyAuthenticator_Create_ResponseParamsSpec,
      [account, request]);
  }

  assert(account, request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.PasskeyAuthenticator_Assert_ParamsSpec,
      crosapi.mojom.PasskeyAuthenticator_Assert_ResponseParamsSpec,
      [account, request]);
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

// ParamsSpec for Create
crosapi.mojom.PasskeyAuthenticator_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PasskeyAuthenticator.Create_Params',
      packedSize: 24,
      fields: [
        { name: 'account', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountKeySpec, nullable: false, minVersion: 0 },
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.PasskeyCreationRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.PasskeyAuthenticator_Create_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PasskeyAuthenticator.Create_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.PasskeyCreationResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Assert
crosapi.mojom.PasskeyAuthenticator_Assert_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PasskeyAuthenticator.Assert_Params',
      packedSize: 24,
      fields: [
        { name: 'account', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountKeySpec, nullable: false, minVersion: 0 },
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.PasskeyAssertionRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.PasskeyAuthenticator_Assert_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.PasskeyAuthenticator.Assert_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.PasskeyAssertionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.PasskeyAuthenticatorPtr = crosapi.mojom.PasskeyAuthenticatorRemote;
crosapi.mojom.PasskeyAuthenticatorRequest = crosapi.mojom.PasskeyAuthenticatorPendingReceiver;

