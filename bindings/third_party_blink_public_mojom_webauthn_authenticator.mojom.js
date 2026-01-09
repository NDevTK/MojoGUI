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
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'raw_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'client_data_json', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'authenticator_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
        { name: 'user_verification_method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'key_protection_type', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'matcher_protection_type', packedOffset: 14, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
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
        { name: 'signatures', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
        { name: 'browser_bound_signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 104,
      fields: [
        { name: 'info', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CommonCredentialInfoSpec, nullable: false },
        { name: 'authenticator_attachment', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AuthenticatorAttachmentSpec, nullable: false },
        { name: 'attestation_object', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'transports', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'echo_hmac_create_secret', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'hmac_create_secret', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'echo_prf', packedOffset: 40, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'prf', packedOffset: 40, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'prf_results', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.PRFValuesSpec, nullable: true },
        { name: 'echo_cred_blob', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'cred_blob', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'public_key_der', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'public_key_algo', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'echo_cred_props', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_cred_props_rk', packedOffset: 76, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'cred_props_rk', packedOffset: 76, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'echo_large_blob', packedOffset: 76, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'supports_large_blob', packedOffset: 76, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'supplemental_pub_keys', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.SupplementalPubKeysResponseSpec, nullable: true },
        { name: 'payment', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.AuthenticationExtensionsPaymentResponseSpec, nullable: true },
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
      packedSize: 48,
      fields: [
        { name: 'info', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CommonCredentialInfoSpec, nullable: false },
        { name: 'authenticator_attachment', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AuthenticatorAttachmentSpec, nullable: false },
        { name: 'signature', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'user_handle', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'extensions', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.AuthenticationExtensionsClientOutputsSpec, nullable: false },
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
      packedSize: 96,
      fields: [
        { name: 'echo_appid_extension', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'appid_extension', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'echo_user_verification_methods', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'user_verification_methods', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'echo_prf', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'prf_results', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.PRFValuesSpec, nullable: true },
        { name: 'prf_not_evaluated', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'echo_large_blob', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'large_blob', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'echo_large_blob_written', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'large_blob_written', packedOffset: 64, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'get_cred_blob', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'supplemental_pub_keys', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.SupplementalPubKeysResponseSpec, nullable: true },
        { name: 'payment', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.AuthenticationExtensionsPaymentResponseSpec, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialTypeSpec, nullable: false },
        { name: 'algorithm_identifier', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
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
      packedSize: 56,
      fields: [
        { name: 'version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'client_eid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'authenticator_eid', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'session_pre_key', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'server_link_data', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'experiments', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'first', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'second', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 56,
      fields: [
        { name: 'total', packedOffset: 8, packedBitOffset: 0, type: payments.mojom.PaymentCurrencyAmountSpec, nullable: false },
        { name: 'instrument', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PaymentCredentialInstrumentSpec, nullable: false },
        { name: 'payee_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'payee_origin', packedOffset: 32, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true },
        { name: 'payment_entities_logos', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'browser_bound_public_key', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 40,
      fields: [
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'icon', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'iconMustBeShown', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'details', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'same_origin_with_ancestors', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'device_scope_requested', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'provider_scope_requested', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'attestation', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AttestationConveyancePreferenceSpec, nullable: false },
        { name: 'attestation_formats', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 72,
      fields: [
        { name: 'challenge', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'challenge_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'timeout', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'relying_party_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'allow_credentials', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'hints', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'user_verification', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.UserVerificationRequirementSpec, nullable: false },
        { name: 'extensions', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.AuthenticationExtensionsClientInputsSpec, nullable: false },
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
      packedSize: 96,
      fields: [
        { name: 'appid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cable_authentication_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'user_verification_methods', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'prf', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'prf_inputs', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'large_blob_read', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'large_blob_write', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'get_cred_blob', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'remote_desktop_client_override', packedOffset: 72, packedBitOffset: 0, type: blink.mojom.RemoteDesktopClientOverrideSpec, nullable: true },
        { name: 'supplemental_pub_keys', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.SupplementalPubKeysRequestSpec, nullable: true },
        { name: 'payment_browser_bound_key_parameters', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
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
      packedSize: 32,
      fields: [
        { name: 'mediation', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediationSpec, nullable: false },
        { name: 'public_key', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialRequestOptionsSpec, nullable: true },
        { name: 'password', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'authenticator_attachment', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AuthenticatorAttachmentSpec, nullable: false },
        { name: 'resident_key', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ResidentKeyRequirementSpec, nullable: false },
        { name: 'user_verification', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.UserVerificationRequirementSpec, nullable: false },
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
      packedSize: 200,
      fields: [
        { name: 'relying_party', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialRpEntitySpec, nullable: false },
        { name: 'user', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialUserEntitySpec, nullable: false },
        { name: 'challenge', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'public_key_parameters', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'timeout', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
        { name: 'exclude_credentials', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'authenticator_selection', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.AuthenticatorSelectionCriteriaSpec, nullable: true },
        { name: 'hints', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'attestation', packedOffset: 72, packedBitOffset: 0, type: blink.mojom.AttestationConveyancePreferenceSpec, nullable: false },
        { name: 'hmac_create_secret', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'prf_enable', packedOffset: 80, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'prf_input', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.PRFValuesSpec, nullable: true },
        { name: 'protection_policy', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.ProtectionPolicySpec, nullable: false },
        { name: 'enforce_protection_policy', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'appid_exclude', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cred_props', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'large_blob_enable', packedOffset: 128, packedBitOffset: 0, type: blink.mojom.LargeBlobSupportSpec, nullable: false },
        { name: 'is_payment_credential_creation', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'cred_blob', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'min_pin_length_requested', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'remote_desktop_client_override', packedOffset: 160, packedBitOffset: 0, type: blink.mojom.RemoteDesktopClientOverrideSpec, nullable: true },
        { name: 'supplemental_pub_keys', packedOffset: 168, packedBitOffset: 0, type: blink.mojom.SupplementalPubKeysRequestSpec, nullable: true },
        { name: 'payment_browser_bound_key_parameters', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'attestation_formats', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'is_conditional', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialTypeSpec, nullable: false },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'transports', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 40,
      fields: [
        { name: 'relying_party_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'unknown_credential_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'all_accepted_credentials', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AllAcceptedCredentialsOptionsSpec, nullable: true },
        { name: 'current_user_details', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.CurrentUserDetailsOptionsSpec, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'user_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'all_accepted_credentials_ids', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'user_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'display_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'supported', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AuthenticatorStatusSpec, nullable: false },
        { name: 'credential', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.GetAssertionAuthenticatorResponseSpec, nullable: true },
        { name: 'dom_exception_details', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.WebAuthnDOMExceptionDetailsSpec, nullable: true },
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
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialCreationOptionsSpec, nullable: false },
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
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AuthenticatorStatusSpec, nullable: false },
        { name: 'credential', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.MakeCredentialAuthenticatorResponseSpec, nullable: true },
        { name: 'dom_exception_details', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.WebAuthnDOMExceptionDetailsSpec, nullable: true },
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
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.GetCredentialOptionsSpec, nullable: false },
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
        { name: 'response', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.GetCredentialResponseSpec, nullable: false },
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
        { name: 'available', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
        { name: 'available', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialReportOptionsSpec, nullable: false },
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
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AuthenticatorStatusSpec, nullable: false },
        { name: 'dom_exception_details', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.WebAuthnDOMExceptionDetailsSpec, nullable: true },
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
        { name: 'capabilities', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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

