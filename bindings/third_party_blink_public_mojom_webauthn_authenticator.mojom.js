// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webauthn/authenticator.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AuthenticatorStatus
blink.mojom.AuthenticatorStatus = {
  SUCCESS: 0,
  PENDING_REQUEST: 1,
  NOT_ALLOWED_ERROR: 2,
  INVALID_DOMAIN: 3,
  CREDENTIAL_EXCLUDED: 4,
  NOT_IMPLEMENTED: 5,
  NOT_FOCUSED: 6,
  RESIDENT_CREDENTIALS_UNSUPPORTED: 7,
  USER_VERIFICATION_UNSUPPORTED: 8,
  ALGORITHM_UNSUPPORTED: 9,
  EMPTY_ALLOW_CREDENTIALS: 10,
  ANDROID_NOT_SUPPORTED_ERROR: 11,
  PROTECTION_POLICY_INCONSISTENT: 12,
  ABORT_ERROR: 13,
  OPAQUE_DOMAIN: 14,
  INVALID_PROTOCOL: 15,
  BAD_RELYING_PARTY_ID: 16,
  BAD_RELYING_PARTY_ID_ATTEMPTED_FETCH: 17,
  BAD_RELYING_PARTY_ID_WRONG_CONTENT_TYPE: 18,
  BAD_RELYING_PARTY_ID_JSON_PARSE_ERROR: 19,
  BAD_RELYING_PARTY_ID_NO_JSON_MATCH: 20,
  BAD_RELYING_PARTY_ID_NO_JSON_MATCH_HIT_LIMITS: 21,
  CANNOT_READ_AND_WRITE_LARGE_BLOB: 22,
  INVALID_ALLOW_CREDENTIALS_FOR_LARGE_BLOB: 23,
  FAILED_TO_SAVE_CREDENTIAL_ID_FOR_PAYMENT_EXTENSION: 24,
  REMOTE_DESKTOP_CLIENT_OVERRIDE_NOT_AUTHORIZED: 25,
  DEVICE_PUBLIC_KEY_ATTESTATION_REJECTED: 26,
  CERTIFICATE_ERROR: 27,
  ERROR_WITH_DOM_EXCEPTION_DETAILS: 28,
  IMMEDIATE_NOT_FOUND: 29,
  UNKNOWN_ERROR: 30,
};

// Enum: AuthenticatorTransport
blink.mojom.AuthenticatorTransport = {
  USB: 0,
  NFC: 1,
  BLE: 2,
  HYBRID: 3,
  INTERNAL: 4,
};

// Enum: Hint
blink.mojom.Hint = {
  SECURITY_KEY: 0,
  CLIENT_DEVICE: 1,
  HYBRID: 2,
};

// Enum: UserVerificationRequirement
blink.mojom.UserVerificationRequirement = {
  REQUIRED: 0,
  PREFERRED: 1,
  DISCOURAGED: 2,
};

// Enum: Mediation
blink.mojom.Mediation = {
  MODAL: 0,
  CONDITIONAL: 1,
  IMMEDIATE: 2,
};

// Enum: ResidentKeyRequirement
blink.mojom.ResidentKeyRequirement = {
  DISCOURAGED: 0,
  PREFERRED: 1,
  REQUIRED: 2,
};

// Enum: AuthenticatorAttachment
blink.mojom.AuthenticatorAttachment = {
  NO_PREFERENCE: 0,
  PLATFORM: 1,
  CROSS_PLATFORM: 2,
};

// Enum: ProtectionPolicy
blink.mojom.ProtectionPolicy = {
  UNSPECIFIED: 0,
  NONE: 1,
  UV_OR_CRED_ID_REQUIRED: 2,
  UV_REQUIRED: 3,
};

// Enum: LargeBlobSupport
blink.mojom.LargeBlobSupport = {
  NOT_REQUESTED: 0,
  REQUIRED: 1,
  PREFERRED: 2,
};

// Enum: AttestationConveyancePreference
blink.mojom.AttestationConveyancePreference = {
  NONE: 0,
  INDIRECT: 1,
  DIRECT: 2,
  ENTERPRISE: 3,
};

// Enum: PublicKeyCredentialType
blink.mojom.PublicKeyCredentialType = {
  PUBLIC_KEY: 0,
};

// Struct: CommonCredentialInfo
blink.mojom.CommonCredentialInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CommonCredentialInfo',
      packedSize: 16,
      fields: [
        { name: 'authenticator_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UvmEntry
blink.mojom.UvmEntrySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UvmEntry',
      packedSize: 16,
      fields: [
        { name: 'matcher_protection_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SupplementalPubKeysResponse
blink.mojom.SupplementalPubKeysResponseSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SupplementalPubKeysResponse',
      packedSize: 16,
      fields: [
        { name: 'signatures', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AuthenticationExtensionsPaymentResponse
blink.mojom.AuthenticationExtensionsPaymentResponseSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuthenticationExtensionsPaymentResponse',
      packedSize: 16,
      fields: [
        { name: 'browser_bound_signature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MakeCredentialAuthenticatorResponse
blink.mojom.MakeCredentialAuthenticatorResponseSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MakeCredentialAuthenticatorResponse',
      packedSize: 16,
      fields: [
        { name: 'payment', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GetAssertionAuthenticatorResponse
blink.mojom.GetAssertionAuthenticatorResponseSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GetAssertionAuthenticatorResponse',
      packedSize: 16,
      fields: [
        { name: 'extensions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AuthenticationExtensionsClientOutputs
blink.mojom.AuthenticationExtensionsClientOutputsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuthenticationExtensionsClientOutputs',
      packedSize: 16,
      fields: [
        { name: 'payment', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PublicKeyCredentialRpEntity
blink.mojom.PublicKeyCredentialRpEntitySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PublicKeyCredentialRpEntity',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PublicKeyCredentialUserEntity
blink.mojom.PublicKeyCredentialUserEntitySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PublicKeyCredentialUserEntity',
      packedSize: 16,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PublicKeyCredentialParameters
blink.mojom.PublicKeyCredentialParametersSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PublicKeyCredentialParameters',
      packedSize: 16,
      fields: [
        { name: 'algorithm_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CableAuthentication
blink.mojom.CableAuthenticationSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CableAuthentication',
      packedSize: 16,
      fields: [
        { name: 'experiments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PRFValues
blink.mojom.PRFValuesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PRFValues',
      packedSize: 16,
      fields: [
        { name: 'second', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaymentOptions
blink.mojom.PaymentOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PaymentOptions',
      packedSize: 16,
      fields: [
        { name: 'browser_bound_public_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaymentCredentialInstrument
blink.mojom.PaymentCredentialInstrumentSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PaymentCredentialInstrument',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ShownPaymentEntityLogo
blink.mojom.ShownPaymentEntityLogoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ShownPaymentEntityLogo',
      packedSize: 16,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RemoteDesktopClientOverride
blink.mojom.RemoteDesktopClientOverrideSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteDesktopClientOverride',
      packedSize: 16,
      fields: [
        { name: 'same_origin_with_ancestors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SupplementalPubKeysRequest
blink.mojom.SupplementalPubKeysRequestSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SupplementalPubKeysRequest',
      packedSize: 16,
      fields: [
        { name: 'attestation_formats', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PublicKeyCredentialRequestOptions
blink.mojom.PublicKeyCredentialRequestOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PublicKeyCredentialRequestOptions',
      packedSize: 16,
      fields: [
        { name: 'extensions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AuthenticationExtensionsClientInputs
blink.mojom.AuthenticationExtensionsClientInputsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuthenticationExtensionsClientInputs',
      packedSize: 16,
      fields: [
        { name: 'payment_browser_bound_key_parameters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GetCredentialOptions
blink.mojom.GetCredentialOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GetCredentialOptions',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AuthenticatorSelectionCriteria
blink.mojom.AuthenticatorSelectionCriteriaSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuthenticatorSelectionCriteria',
      packedSize: 16,
      fields: [
        { name: 'user_verification', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PublicKeyCredentialCreationOptions
blink.mojom.PublicKeyCredentialCreationOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PublicKeyCredentialCreationOptions',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PublicKeyCredentialDescriptor
blink.mojom.PublicKeyCredentialDescriptorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PublicKeyCredentialDescriptor',
      packedSize: 16,
      fields: [
        { name: 'transports', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebAuthnDOMExceptionDetails
blink.mojom.WebAuthnDOMExceptionDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebAuthnDOMExceptionDetails',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PublicKeyCredentialReportOptions
blink.mojom.PublicKeyCredentialReportOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PublicKeyCredentialReportOptions',
      packedSize: 16,
      fields: [
        { name: 'current_user_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AllAcceptedCredentialsOptions
blink.mojom.AllAcceptedCredentialsOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AllAcceptedCredentialsOptions',
      packedSize: 16,
      fields: [
        { name: 'all_accepted_credentials_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CurrentUserDetailsOptions
blink.mojom.CurrentUserDetailsOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CurrentUserDetailsOptions',
      packedSize: 16,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebAuthnClientCapability
blink.mojom.WebAuthnClientCapabilitySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebAuthnClientCapability',
      packedSize: 16,
      fields: [
        { name: 'supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GetAssertionResponse
blink.mojom.GetAssertionResponseSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GetAssertionResponse',
      packedSize: 16,
      fields: [
        { name: 'dom_exception_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: Authenticator
blink.mojom.Authenticator = {};

blink.mojom.AuthenticatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AuthenticatorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.Authenticator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AuthenticatorPendingReceiver,
      handle);
    this.$ = new blink.mojom.AuthenticatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AuthenticatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  makeCredential(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.Authenticator_MakeCredential_ParamsSpec,
      blink.mojom.Authenticator_MakeCredential_ResponseParamsSpec,
      [options]);
  }

  getCredential(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.Authenticator_GetCredential_ParamsSpec,
      blink.mojom.Authenticator_GetCredential_ResponseParamsSpec,
      [options]);
  }

  isUserVerifyingPlatformAuthenticatorAvailable() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec,
      blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec,
      []);
  }

  isConditionalMediationAvailable() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.Authenticator_IsConditionalMediationAvailable_ParamsSpec,
      blink.mojom.Authenticator_IsConditionalMediationAvailable_ResponseParamsSpec,
      []);
  }

  report(options) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.Authenticator_Report_ParamsSpec,
      blink.mojom.Authenticator_Report_ResponseParamsSpec,
      [options]);
  }

  getClientCapabilities() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.Authenticator_GetClientCapabilities_ParamsSpec,
      blink.mojom.Authenticator_GetClientCapabilities_ResponseParamsSpec,
      []);
  }

  cancel() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.Authenticator_Cancel_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.Authenticator.getRemote = function() {
  let remote = new blink.mojom.AuthenticatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.Authenticator',
    'context');
  return remote.$;
};

// ParamsSpec for MakeCredential
blink.mojom.Authenticator_MakeCredential_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.MakeCredential_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.Authenticator_MakeCredential_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.MakeCredential_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'credential', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'dom_exception_details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCredential
blink.mojom.Authenticator_GetCredential_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.GetCredential_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.Authenticator_GetCredential_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.GetCredential_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsUserVerifyingPlatformAuthenticatorAvailable
blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.IsUserVerifyingPlatformAuthenticatorAvailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsConditionalMediationAvailable
blink.mojom.Authenticator_IsConditionalMediationAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.IsConditionalMediationAvailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.Authenticator_IsConditionalMediationAvailable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.IsConditionalMediationAvailable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Report
blink.mojom.Authenticator_Report_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.Report_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.Authenticator_Report_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.Report_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'dom_exception_details', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetClientCapabilities
blink.mojom.Authenticator_GetClientCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.GetClientCapabilities_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.Authenticator_GetClientCapabilities_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.GetClientCapabilities_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Cancel
blink.mojom.Authenticator_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.AuthenticatorPtr = blink.mojom.AuthenticatorRemote;
blink.mojom.AuthenticatorRequest = blink.mojom.AuthenticatorPendingReceiver;

