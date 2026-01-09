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

// Interface: PasskeyAuthenticator
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
}};

// Legacy compatibility
crosapi.mojom.PasskeyAuthenticatorPtr = crosapi.mojom.PasskeyAuthenticatorRemote;
crosapi.mojom.PasskeyAuthenticatorRequest = crosapi.mojom.PasskeyAuthenticatorPendingReceiver;

