// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/passkeys.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.UserVerificationRequirementSpec = { $: mojo.internal.Enum() };
crosapi.mojom.PasskeyCreationErrorSpec = { $: mojo.internal.Enum() };
crosapi.mojom.PasskeyAssertionErrorSpec = { $: mojo.internal.Enum() };
crosapi.mojom.PasskeyCreationResultSpec = { $: {} };
crosapi.mojom.PasskeyAssertionResultSpec = { $: {} };
crosapi.mojom.PasskeyCreationRequestSpec = { $: {} };
crosapi.mojom.PasskeyCreationResponseSpec = { $: {} };
crosapi.mojom.PasskeyAssertionRequestSpec = { $: {} };
crosapi.mojom.PasskeyAssertionResponseSpec = { $: {} };
crosapi.mojom.PasskeyAuthenticator = {};
crosapi.mojom.PasskeyAuthenticator.$interfaceName = 'crosapi.mojom.PasskeyAuthenticator';
crosapi.mojom.PasskeyAuthenticator_Create_ParamsSpec = { $: {} };
crosapi.mojom.PasskeyAuthenticator_Create_ResponseParamsSpec = { $: {} };
crosapi.mojom.PasskeyAuthenticator_Assert_ParamsSpec = { $: {} };
crosapi.mojom.PasskeyAuthenticator_Assert_ResponseParamsSpec = { $: {} };

// Enum: UserVerificationRequirement
crosapi.mojom.UserVerificationRequirement = {
  kDiscouraged: 0,
  kPreferred: 1,
  kRequired: 2,
};

// Enum: PasskeyCreationError
crosapi.mojom.PasskeyCreationError = {
  kInternalError: 0,
  kNonPrimaryAccount: 1,
  kPendingRequest: 2,
  kSecurityDomainSecretUnavailable: 3,
};

// Enum: PasskeyAssertionError
crosapi.mojom.PasskeyAssertionError = {
  kInternalError: 0,
  kNonPrimaryAccount: 1,
  kPendingRequest: 2,
  kCredentialNotFound: 3,
  kSecurityDomainSecretUnavailable: 4,
};

// Union: PasskeyCreationResult
mojo.internal.Union(
    crosapi.mojom.PasskeyCreationResultSpec, 'crosapi.mojom.PasskeyCreationResult', {
      'response': {
        'ordinal': 0,
        'type': crosapi.mojom.PasskeyCreationResponseSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.PasskeyCreationErrorSpec.$,
        'nullable': false,
      },
    });

// Union: PasskeyAssertionResult
mojo.internal.Union(
    crosapi.mojom.PasskeyAssertionResultSpec, 'crosapi.mojom.PasskeyAssertionResult', {
      'response': {
        'ordinal': 0,
        'type': crosapi.mojom.PasskeyAssertionResponseSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.PasskeyAssertionErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: PasskeyCreationRequest
mojo.internal.Struct(
    crosapi.mojom.PasskeyCreationRequestSpec, 'crosapi.mojom.PasskeyCreationRequest', [
      mojo.internal.StructField('rp_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('user_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('user_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('user_display_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('user_verification', 32, 0, crosapi.mojom.UserVerificationRequirementSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PasskeyCreationResponse
mojo.internal.Struct(
    crosapi.mojom.PasskeyCreationResponseSpec, 'crosapi.mojom.PasskeyCreationResponse', [
      mojo.internal.StructField('authenticator_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PasskeyAssertionRequest
mojo.internal.Struct(
    crosapi.mojom.PasskeyAssertionRequestSpec, 'crosapi.mojom.PasskeyAssertionRequest', [
      mojo.internal.StructField('rp_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('credential_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('challenge', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('client_data_hash', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('user_verification', 32, 0, crosapi.mojom.UserVerificationRequirementSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PasskeyAssertionResponse
mojo.internal.Struct(
    crosapi.mojom.PasskeyAssertionResponseSpec, 'crosapi.mojom.PasskeyAssertionResponse', [
      mojo.internal.StructField('signature', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('authenticator_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 1, undefined),
    ],
    [[0, 16], [1, 24]]);

// Interface: PasskeyAuthenticator
mojo.internal.Struct(
    crosapi.mojom.PasskeyAuthenticator_Create_ParamsSpec, 'crosapi.mojom.PasskeyAuthenticator_Create_Params', [
      mojo.internal.StructField('account', 0, 0, crosapi.mojom.AccountKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request', 8, 0, crosapi.mojom.PasskeyCreationRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.PasskeyAuthenticator_Create_ResponseParamsSpec, 'crosapi.mojom.PasskeyAuthenticator_Create_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.PasskeyCreationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.PasskeyAuthenticator_Assert_ParamsSpec, 'crosapi.mojom.PasskeyAuthenticator_Assert_Params', [
      mojo.internal.StructField('account', 0, 0, crosapi.mojom.AccountKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request', 8, 0, crosapi.mojom.PasskeyAssertionRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.PasskeyAuthenticator_Assert_ResponseParamsSpec, 'crosapi.mojom.PasskeyAuthenticator_Assert_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.PasskeyAssertionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [account, request],
      false);
  }

  assert(account, request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.PasskeyAuthenticator_Assert_ParamsSpec,
      crosapi.mojom.PasskeyAuthenticator_Assert_ResponseParamsSpec,
      [account, request],
      false);
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

crosapi.mojom.PasskeyAuthenticatorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 1: {
          const params = crosapi.mojom.PasskeyAuthenticator_Create_ParamsSpec.$.decode(message.payload);
          const result = this.impl.create(params.account, params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.PasskeyAuthenticator_Create_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 0: {
          const params = crosapi.mojom.PasskeyAuthenticator_Assert_ParamsSpec.$.decode(message.payload);
          const result = this.impl.assert(params.account, params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.PasskeyAuthenticator_Assert_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

crosapi.mojom.PasskeyAuthenticatorReceiver = crosapi.mojom.PasskeyAuthenticatorReceiver;

crosapi.mojom.PasskeyAuthenticatorPtr = crosapi.mojom.PasskeyAuthenticatorRemote;
crosapi.mojom.PasskeyAuthenticatorRequest = crosapi.mojom.PasskeyAuthenticatorPendingReceiver;

