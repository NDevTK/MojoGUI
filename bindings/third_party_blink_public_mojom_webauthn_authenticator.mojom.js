// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webauthn/authenticator.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};
var url = url || {};


blink.mojom.kPublicKeyCredentialDescriptorListMaxSize = 64;

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
blink.mojom.AuthenticatorStatusSpec = { $: mojo.internal.Enum() };

// Enum: AuthenticatorTransport
blink.mojom.AuthenticatorTransport = {
  USB: 0,
  NFC: 1,
  BLE: 2,
  HYBRID: 3,
  INTERNAL: 4,
};
blink.mojom.AuthenticatorTransportSpec = { $: mojo.internal.Enum() };

// Enum: Hint
blink.mojom.Hint = {
  SECURITY_KEY: 0,
  CLIENT_DEVICE: 1,
  HYBRID: 2,
};
blink.mojom.HintSpec = { $: mojo.internal.Enum() };

// Enum: UserVerificationRequirement
blink.mojom.UserVerificationRequirement = {
  REQUIRED: 0,
  PREFERRED: 1,
  DISCOURAGED: 2,
};
blink.mojom.UserVerificationRequirementSpec = { $: mojo.internal.Enum() };

// Enum: Mediation
blink.mojom.Mediation = {
  MODAL: 0,
  CONDITIONAL: 1,
  IMMEDIATE: 2,
};
blink.mojom.MediationSpec = { $: mojo.internal.Enum() };

// Enum: ResidentKeyRequirement
blink.mojom.ResidentKeyRequirement = {
  DISCOURAGED: 0,
  PREFERRED: 1,
  REQUIRED: 2,
};
blink.mojom.ResidentKeyRequirementSpec = { $: mojo.internal.Enum() };

// Enum: AuthenticatorAttachment
blink.mojom.AuthenticatorAttachment = {
  NO_PREFERENCE: 0,
  PLATFORM: 1,
  CROSS_PLATFORM: 2,
};
blink.mojom.AuthenticatorAttachmentSpec = { $: mojo.internal.Enum() };

// Enum: ProtectionPolicy
blink.mojom.ProtectionPolicy = {
  UNSPECIFIED: 0,
  NONE: 1,
  UV_OR_CRED_ID_REQUIRED: 2,
  UV_REQUIRED: 3,
};
blink.mojom.ProtectionPolicySpec = { $: mojo.internal.Enum() };

// Enum: LargeBlobSupport
blink.mojom.LargeBlobSupport = {
  NOT_REQUESTED: 0,
  REQUIRED: 1,
  PREFERRED: 2,
};
blink.mojom.LargeBlobSupportSpec = { $: mojo.internal.Enum() };

// Enum: AttestationConveyancePreference
blink.mojom.AttestationConveyancePreference = {
  NONE: 0,
  INDIRECT: 1,
  DIRECT: 2,
  ENTERPRISE: 3,
};
blink.mojom.AttestationConveyancePreferenceSpec = { $: mojo.internal.Enum() };

// Enum: PublicKeyCredentialType
blink.mojom.PublicKeyCredentialType = {
  PUBLIC_KEY: 0,
};
blink.mojom.PublicKeyCredentialTypeSpec = { $: mojo.internal.Enum() };

// Union: GetCredentialResponse
blink.mojom.GetCredentialResponseSpec = { $: mojo.internal.Union(
    'blink.mojom.GetCredentialResponse', {
      'get_assertion_response': {
        'ordinal': 0,
        'type': blink.mojom.GetAssertionResponseSpec,
      }},
      'password_response': {
        'ordinal': 1,
        'type': blink.mojom.CredentialInfoSpec,
      }},
    })
};

// Struct: CommonCredentialInfo
blink.mojom.CommonCredentialInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CommonCredentialInfo',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'raw_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'client_data_json', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'authenticator_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'user_verification_method', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_protection_type', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'matcher_protection_type', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'signatures', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'browser_bound_signature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: MakeCredentialAuthenticatorResponse
blink.mojom.MakeCredentialAuthenticatorResponseSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MakeCredentialAuthenticatorResponse',
      packedSize: 80,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CommonCredentialInfoSpec, nullable: false, minVersion: 0 },
        { name: 'authenticator_attachment', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.AuthenticatorAttachmentSpec, nullable: false, minVersion: 0 },
        { name: 'attestation_object', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'transports', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AuthenticatorTransportSpec, false), nullable: false, minVersion: 0 },
        { name: 'echo_hmac_create_secret', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'hmac_create_secret', packedOffset: 64, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'echo_prf', packedOffset: 64, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prf', packedOffset: 64, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prf_results', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.PRFValuesSpec, nullable: true, minVersion: 0 },
        { name: 'echo_cred_blob', packedOffset: 64, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cred_blob', packedOffset: 64, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'public_key_der', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'public_key_algo', packedOffset: 60, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'echo_cred_props', packedOffset: 64, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_cred_props_rk', packedOffset: 64, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cred_props_rk', packedOffset: 65, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'echo_large_blob', packedOffset: 65, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supports_large_blob', packedOffset: 65, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'supplemental_pub_keys', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.SupplementalPubKeysResponseSpec, nullable: true, minVersion: 0 },
        { name: 'payment', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.AuthenticationExtensionsPaymentResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
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
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CommonCredentialInfoSpec, nullable: false, minVersion: 0 },
        { name: 'authenticator_attachment', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AuthenticatorAttachmentSpec, nullable: false, minVersion: 0 },
        { name: 'signature', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'user_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'extensions', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AuthenticationExtensionsClientOutputsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: AuthenticationExtensionsClientOutputs
blink.mojom.AuthenticationExtensionsClientOutputsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuthenticationExtensionsClientOutputs',
      packedSize: 64,
      fields: [
        { name: 'echo_appid_extension', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'appid_extension', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'echo_user_verification_methods', packedOffset: 48, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'user_verification_methods', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.UvmEntrySpec, false), nullable: true, minVersion: 0 },
        { name: 'echo_prf', packedOffset: 48, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prf_results', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PRFValuesSpec, nullable: true, minVersion: 0 },
        { name: 'prf_not_evaluated', packedOffset: 48, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'echo_large_blob', packedOffset: 48, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'large_blob', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'echo_large_blob_written', packedOffset: 48, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'large_blob_written', packedOffset: 48, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'get_cred_blob', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'supplemental_pub_keys', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.SupplementalPubKeysResponseSpec, nullable: true, minVersion: 0 },
        { name: 'payment', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.AuthenticationExtensionsPaymentResponseSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialTypeSpec, nullable: false, minVersion: 0 },
        { name: 'algorithm_identifier', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'version', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'client_eid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: true, minVersion: 0 },
        { name: 'authenticator_eid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: true, minVersion: 0 },
        { name: 'session_pre_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: true, minVersion: 0 },
        { name: 'server_link_data', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'experiments', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'first', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'second', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'total', packedOffset: 0, packedBitOffset: 0, type: payments.mojom.PaymentCurrencyAmountSpec, nullable: false, minVersion: 0 },
        { name: 'instrument', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PaymentCredentialInstrumentSpec, nullable: false, minVersion: 0 },
        { name: 'payee_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'payee_origin', packedOffset: 24, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: true, minVersion: 0 },
        { name: 'payment_entities_logos', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ShownPaymentEntityLogoSpec, false), nullable: true, minVersion: 0 },
        { name: 'browser_bound_public_key', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'iconMustBeShown', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'same_origin_with_ancestors', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SupplementalPubKeysRequest
blink.mojom.SupplementalPubKeysRequestSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SupplementalPubKeysRequest',
      packedSize: 24,
      fields: [
        { name: 'device_scope_requested', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'provider_scope_requested', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'attestation', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AttestationConveyancePreferenceSpec, nullable: false, minVersion: 0 },
        { name: 'attestation_formats', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'challenge', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'challenge_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'timeout', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'relying_party_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'allow_credentials', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.PublicKeyCredentialDescriptorSpec, false), nullable: false, minVersion: 0 },
        { name: 'hints', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.HintSpec, false), nullable: false, minVersion: 0 },
        { name: 'user_verification', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.UserVerificationRequirementSpec, nullable: false, minVersion: 0 },
        { name: 'extensions', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.AuthenticationExtensionsClientInputsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: AuthenticationExtensionsClientInputs
blink.mojom.AuthenticationExtensionsClientInputsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuthenticationExtensionsClientInputs',
      packedSize: 72,
      fields: [
        { name: 'appid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'cable_authentication_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.CableAuthenticationSpec, false), nullable: false, minVersion: 0 },
        { name: 'user_verification_methods', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prf', packedOffset: 56, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prf_inputs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.PRFValuesSpec, false), nullable: false, minVersion: 0 },
        { name: 'large_blob_read', packedOffset: 56, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'large_blob_write', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'get_cred_blob', packedOffset: 56, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'remote_desktop_client_override', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.RemoteDesktopClientOverrideSpec, nullable: true, minVersion: 0 },
        { name: 'supplemental_pub_keys', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.SupplementalPubKeysRequestSpec, nullable: true, minVersion: 0 },
        { name: 'payment_browser_bound_key_parameters', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.PublicKeyCredentialParametersSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: GetCredentialOptions
blink.mojom.GetCredentialOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GetCredentialOptions',
      packedSize: 24,
      fields: [
        { name: 'mediation', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MediationSpec, nullable: false, minVersion: 0 },
        { name: 'public_key', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialRequestOptionsSpec, nullable: true, minVersion: 0 },
        { name: 'password', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AuthenticatorSelectionCriteria
blink.mojom.AuthenticatorSelectionCriteriaSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AuthenticatorSelectionCriteria',
      packedSize: 24,
      fields: [
        { name: 'authenticator_attachment', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AuthenticatorAttachmentSpec, nullable: false, minVersion: 0 },
        { name: 'resident_key', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.ResidentKeyRequirementSpec, nullable: false, minVersion: 0 },
        { name: 'user_verification', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.UserVerificationRequirementSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PublicKeyCredentialCreationOptions
blink.mojom.PublicKeyCredentialCreationOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PublicKeyCredentialCreationOptions',
      packedSize: 144,
      fields: [
        { name: 'relying_party', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialRpEntitySpec, nullable: false, minVersion: 0 },
        { name: 'user', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialUserEntitySpec, nullable: false, minVersion: 0 },
        { name: 'challenge', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'public_key_parameters', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.PublicKeyCredentialParametersSpec, false), nullable: false, minVersion: 0 },
        { name: 'timeout', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'exclude_credentials', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.PublicKeyCredentialDescriptorSpec, false), nullable: false, minVersion: 0 },
        { name: 'authenticator_selection', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.AuthenticatorSelectionCriteriaSpec, nullable: true, minVersion: 0 },
        { name: 'hints', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.HintSpec, false), nullable: false, minVersion: 0 },
        { name: 'attestation', packedOffset: 120, packedBitOffset: 0, type: blink.mojom.AttestationConveyancePreferenceSpec, nullable: false, minVersion: 0 },
        { name: 'hmac_create_secret', packedOffset: 132, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prf_enable', packedOffset: 132, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'prf_input', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.PRFValuesSpec, nullable: true, minVersion: 0 },
        { name: 'protection_policy', packedOffset: 124, packedBitOffset: 0, type: blink.mojom.ProtectionPolicySpec, nullable: false, minVersion: 0 },
        { name: 'enforce_protection_policy', packedOffset: 132, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'appid_exclude', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'cred_props', packedOffset: 132, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'large_blob_enable', packedOffset: 128, packedBitOffset: 0, type: blink.mojom.LargeBlobSupportSpec, nullable: false, minVersion: 0 },
        { name: 'is_payment_credential_creation', packedOffset: 132, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'cred_blob', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'min_pin_length_requested', packedOffset: 132, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'remote_desktop_client_override', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.RemoteDesktopClientOverrideSpec, nullable: true, minVersion: 0 },
        { name: 'supplemental_pub_keys', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.SupplementalPubKeysRequestSpec, nullable: true, minVersion: 0 },
        { name: 'payment_browser_bound_key_parameters', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.PublicKeyCredentialParametersSpec, false), nullable: true, minVersion: 0 },
        { name: 'attestation_formats', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'is_conditional', packedOffset: 132, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 144}]
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
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialTypeSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'transports', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AuthenticatorTransportSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'relying_party_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'unknown_credential_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'all_accepted_credentials', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AllAcceptedCredentialsOptionsSpec, nullable: true, minVersion: 0 },
        { name: 'current_user_details', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.CurrentUserDetailsOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'user_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'all_accepted_credentials_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'user_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'supported', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AuthenticatorStatusSpec, nullable: false, minVersion: 0 },
        { name: 'credential', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.GetAssertionAuthenticatorResponseSpec, nullable: true, minVersion: 0 },
        { name: 'dom_exception_details', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WebAuthnDOMExceptionDetailsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: Authenticator
blink.mojom.Authenticator = {};

blink.mojom.Authenticator_MakeCredential_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator_MakeCredential_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialCreationOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.Authenticator_GetCredential_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator_GetCredential_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.GetCredentialOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.Authenticator_IsConditionalMediationAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator_IsConditionalMediationAvailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.Authenticator_Report_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator_Report_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialReportOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.Authenticator_GetClientCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator_GetClientCapabilities_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.Authenticator_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator_Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialCreationOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.Authenticator_MakeCredential_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.MakeCredential_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AuthenticatorStatusSpec, nullable: false, minVersion: 0 },
        { name: 'credential', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.MakeCredentialAuthenticatorResponseSpec, nullable: true, minVersion: 0 },
        { name: 'dom_exception_details', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.WebAuthnDOMExceptionDetailsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.GetCredentialOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.Authenticator_GetCredential_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.GetCredential_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.GetCredentialResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.Authenticator_IsConditionalMediationAvailable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.IsConditionalMediationAvailable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.PublicKeyCredentialReportOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.Authenticator_Report_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.Report_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AuthenticatorStatusSpec, nullable: false, minVersion: 0 },
        { name: 'dom_exception_details', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebAuthnDOMExceptionDetailsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.Authenticator_GetClientCapabilities_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Authenticator.GetClientCapabilities_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.WebAuthnClientCapabilitySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.AuthenticatorPtr = blink.mojom.AuthenticatorRemote;
blink.mojom.AuthenticatorRequest = blink.mojom.AuthenticatorPendingReceiver;

