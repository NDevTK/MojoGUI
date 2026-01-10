// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webauthn/authenticator.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var payments = payments || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.AuthenticatorStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.AuthenticatorTransportSpec = { $: mojo.internal.Enum() };
blink.mojom.HintSpec = { $: mojo.internal.Enum() };
blink.mojom.UserVerificationRequirementSpec = { $: mojo.internal.Enum() };
blink.mojom.MediationSpec = { $: mojo.internal.Enum() };
blink.mojom.ResidentKeyRequirementSpec = { $: mojo.internal.Enum() };
blink.mojom.AuthenticatorAttachmentSpec = { $: mojo.internal.Enum() };
blink.mojom.ProtectionPolicySpec = { $: mojo.internal.Enum() };
blink.mojom.LargeBlobSupportSpec = { $: mojo.internal.Enum() };
blink.mojom.AttestationConveyancePreferenceSpec = { $: mojo.internal.Enum() };
blink.mojom.PublicKeyCredentialTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.GetCredentialResponseSpec = { $: {} };
blink.mojom.CommonCredentialInfoSpec = { $: {} };
blink.mojom.UvmEntrySpec = { $: {} };
blink.mojom.SupplementalPubKeysResponseSpec = { $: {} };
blink.mojom.AuthenticationExtensionsPaymentResponseSpec = { $: {} };
blink.mojom.MakeCredentialAuthenticatorResponseSpec = { $: {} };
blink.mojom.GetAssertionAuthenticatorResponseSpec = { $: {} };
blink.mojom.AuthenticationExtensionsClientOutputsSpec = { $: {} };
blink.mojom.PublicKeyCredentialRpEntitySpec = { $: {} };
blink.mojom.PublicKeyCredentialUserEntitySpec = { $: {} };
blink.mojom.PublicKeyCredentialParametersSpec = { $: {} };
blink.mojom.CableAuthenticationSpec = { $: {} };
blink.mojom.PRFValuesSpec = { $: {} };
blink.mojom.PaymentOptionsSpec = { $: {} };
blink.mojom.PaymentCredentialInstrumentSpec = { $: {} };
blink.mojom.ShownPaymentEntityLogoSpec = { $: {} };
blink.mojom.RemoteDesktopClientOverrideSpec = { $: {} };
blink.mojom.SupplementalPubKeysRequestSpec = { $: {} };
blink.mojom.PublicKeyCredentialRequestOptionsSpec = { $: {} };
blink.mojom.AuthenticationExtensionsClientInputsSpec = { $: {} };
blink.mojom.GetCredentialOptionsSpec = { $: {} };
blink.mojom.AuthenticatorSelectionCriteriaSpec = { $: {} };
blink.mojom.PublicKeyCredentialCreationOptionsSpec = { $: {} };
blink.mojom.PublicKeyCredentialDescriptorSpec = { $: {} };
blink.mojom.WebAuthnDOMExceptionDetailsSpec = { $: {} };
blink.mojom.PublicKeyCredentialReportOptionsSpec = { $: {} };
blink.mojom.AllAcceptedCredentialsOptionsSpec = { $: {} };
blink.mojom.CurrentUserDetailsOptionsSpec = { $: {} };
blink.mojom.WebAuthnClientCapabilitySpec = { $: {} };
blink.mojom.GetAssertionResponseSpec = { $: {} };
blink.mojom.Authenticator = {};
blink.mojom.Authenticator.$interfaceName = 'blink.mojom.Authenticator';
blink.mojom.Authenticator_MakeCredential_ParamsSpec = { $: {} };
blink.mojom.Authenticator_MakeCredential_ResponseParamsSpec = { $: {} };
blink.mojom.Authenticator_GetCredential_ParamsSpec = { $: {} };
blink.mojom.Authenticator_GetCredential_ResponseParamsSpec = { $: {} };
blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec = { $: {} };
blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec = { $: {} };
blink.mojom.Authenticator_IsConditionalMediationAvailable_ParamsSpec = { $: {} };
blink.mojom.Authenticator_IsConditionalMediationAvailable_ResponseParamsSpec = { $: {} };
blink.mojom.Authenticator_Report_ParamsSpec = { $: {} };
blink.mojom.Authenticator_Report_ResponseParamsSpec = { $: {} };
blink.mojom.Authenticator_GetClientCapabilities_ParamsSpec = { $: {} };
blink.mojom.Authenticator_GetClientCapabilities_ResponseParamsSpec = { $: {} };
blink.mojom.Authenticator_Cancel_ParamsSpec = { $: {} };

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

// Union: GetCredentialResponse
mojo.internal.Union(
    blink.mojom.GetCredentialResponseSpec, 'blink.mojom.GetCredentialResponse', {
      'get_assertion_response': {
        'ordinal': 0,
        'type': blink.mojom.GetAssertionResponseSpec.$,
        'nullable': false,
      },
      'password_response': {
        'ordinal': 1,
        'type': blink.mojom.CredentialInfoSpec.$,
        'nullable': false,
      },
    });

// Struct: CommonCredentialInfo
mojo.internal.Struct(
    blink.mojom.CommonCredentialInfoSpec, 'blink.mojom.CommonCredentialInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('raw_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('client_data_json', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('authenticator_data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: UvmEntry
mojo.internal.Struct(
    blink.mojom.UvmEntrySpec, 'blink.mojom.UvmEntry', [
      mojo.internal.StructField('user_verification_method', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_protection_type', 4, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('matcher_protection_type', 6, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SupplementalPubKeysResponse
mojo.internal.Struct(
    blink.mojom.SupplementalPubKeysResponseSpec, 'blink.mojom.SupplementalPubKeysResponse', [
      mojo.internal.StructField('signatures', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AuthenticationExtensionsPaymentResponse
mojo.internal.Struct(
    blink.mojom.AuthenticationExtensionsPaymentResponseSpec, 'blink.mojom.AuthenticationExtensionsPaymentResponse', [
      mojo.internal.StructField('browser_bound_signature', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MakeCredentialAuthenticatorResponse
mojo.internal.Struct(
    blink.mojom.MakeCredentialAuthenticatorResponseSpec, 'blink.mojom.MakeCredentialAuthenticatorResponse', [
      mojo.internal.StructField('info', 0, 0, blink.mojom.CommonCredentialInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('authenticator_attachment', 8, 0, blink.mojom.AuthenticatorAttachmentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attestation_object', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('transports', 24, 0, mojo.internal.Array(blink.mojom.AuthenticatorTransportSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('prf_results', 32, 0, blink.mojom.PRFValuesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('public_key_der', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('supplemental_pub_keys', 48, 0, blink.mojom.SupplementalPubKeysResponseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('payment', 56, 0, blink.mojom.AuthenticationExtensionsPaymentResponseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('public_key_algo', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('echo_hmac_create_secret', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hmac_create_secret', 68, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('echo_prf', 68, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prf', 68, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('echo_cred_blob', 68, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cred_blob', 68, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('echo_cred_props', 68, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_cred_props_rk', 68, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cred_props_rk', 69, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('echo_large_blob', 69, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_large_blob', 69, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: GetAssertionAuthenticatorResponse
mojo.internal.Struct(
    blink.mojom.GetAssertionAuthenticatorResponseSpec, 'blink.mojom.GetAssertionAuthenticatorResponse', [
      mojo.internal.StructField('info', 0, 0, blink.mojom.CommonCredentialInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('authenticator_attachment', 8, 0, blink.mojom.AuthenticatorAttachmentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signature', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('user_handle', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('extensions', 32, 0, blink.mojom.AuthenticationExtensionsClientOutputsSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: AuthenticationExtensionsClientOutputs
mojo.internal.Struct(
    blink.mojom.AuthenticationExtensionsClientOutputsSpec, 'blink.mojom.AuthenticationExtensionsClientOutputs', [
      mojo.internal.StructField('user_verification_methods', 0, 0, mojo.internal.Array(blink.mojom.UvmEntrySpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('prf_results', 8, 0, blink.mojom.PRFValuesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('large_blob', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('get_cred_blob', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('supplemental_pub_keys', 32, 0, blink.mojom.SupplementalPubKeysResponseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('payment', 40, 0, blink.mojom.AuthenticationExtensionsPaymentResponseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('echo_appid_extension', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('appid_extension', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('echo_user_verification_methods', 48, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('echo_prf', 48, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prf_not_evaluated', 48, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('echo_large_blob', 48, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('echo_large_blob_written', 48, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('large_blob_written', 48, 7, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: PublicKeyCredentialRpEntity
mojo.internal.Struct(
    blink.mojom.PublicKeyCredentialRpEntitySpec, 'blink.mojom.PublicKeyCredentialRpEntity', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PublicKeyCredentialUserEntity
mojo.internal.Struct(
    blink.mojom.PublicKeyCredentialUserEntitySpec, 'blink.mojom.PublicKeyCredentialUserEntity', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PublicKeyCredentialParameters
mojo.internal.Struct(
    blink.mojom.PublicKeyCredentialParametersSpec, 'blink.mojom.PublicKeyCredentialParameters', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.PublicKeyCredentialTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('algorithm_identifier', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CableAuthentication
mojo.internal.Struct(
    blink.mojom.CableAuthenticationSpec, 'blink.mojom.CableAuthentication', [
      mojo.internal.StructField('client_eid', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('authenticator_eid', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('session_pre_key', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('server_link_data', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('experiments', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('version', 40, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PRFValues
mojo.internal.Struct(
    blink.mojom.PRFValuesSpec, 'blink.mojom.PRFValues', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('first', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('second', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PaymentOptions
mojo.internal.Struct(
    blink.mojom.PaymentOptionsSpec, 'blink.mojom.PaymentOptions', [
      mojo.internal.StructField('total', 0, 0, payments.mojom.PaymentCurrencyAmountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('instrument', 8, 0, blink.mojom.PaymentCredentialInstrumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('payee_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('payee_origin', 24, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('payment_entities_logos', 32, 0, mojo.internal.Array(blink.mojom.ShownPaymentEntityLogoSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('browser_bound_public_key', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PaymentCredentialInstrument
mojo.internal.Struct(
    blink.mojom.PaymentCredentialInstrumentSpec, 'blink.mojom.PaymentCredentialInstrument', [
      mojo.internal.StructField('display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('iconMustBeShown', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ShownPaymentEntityLogo
mojo.internal.Struct(
    blink.mojom.ShownPaymentEntityLogoSpec, 'blink.mojom.ShownPaymentEntityLogo', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RemoteDesktopClientOverride
mojo.internal.Struct(
    blink.mojom.RemoteDesktopClientOverrideSpec, 'blink.mojom.RemoteDesktopClientOverride', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('same_origin_with_ancestors', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SupplementalPubKeysRequest
mojo.internal.Struct(
    blink.mojom.SupplementalPubKeysRequestSpec, 'blink.mojom.SupplementalPubKeysRequest', [
      mojo.internal.StructField('attestation', 0, 0, blink.mojom.AttestationConveyancePreferenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attestation_formats', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('device_scope_requested', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('provider_scope_requested', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PublicKeyCredentialRequestOptions
mojo.internal.Struct(
    blink.mojom.PublicKeyCredentialRequestOptionsSpec, 'blink.mojom.PublicKeyCredentialRequestOptions', [
      mojo.internal.StructField('challenge', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('challenge_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('timeout', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('relying_party_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('allow_credentials', 32, 0, mojo.internal.Array(blink.mojom.PublicKeyCredentialDescriptorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('hints', 40, 0, mojo.internal.Array(blink.mojom.HintSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('user_verification', 48, 0, blink.mojom.UserVerificationRequirementSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extensions', 56, 0, blink.mojom.AuthenticationExtensionsClientInputsSpec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: AuthenticationExtensionsClientInputs
mojo.internal.Struct(
    blink.mojom.AuthenticationExtensionsClientInputsSpec, 'blink.mojom.AuthenticationExtensionsClientInputs', [
      mojo.internal.StructField('appid', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('cable_authentication_data', 8, 0, mojo.internal.Array(blink.mojom.CableAuthenticationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('prf_inputs', 16, 0, mojo.internal.Array(blink.mojom.PRFValuesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('large_blob_write', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('remote_desktop_client_override', 32, 0, blink.mojom.RemoteDesktopClientOverrideSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('supplemental_pub_keys', 40, 0, blink.mojom.SupplementalPubKeysRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('payment_browser_bound_key_parameters', 48, 0, mojo.internal.Array(blink.mojom.PublicKeyCredentialParametersSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('user_verification_methods', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prf', 56, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('large_blob_read', 56, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('get_cred_blob', 56, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: GetCredentialOptions
mojo.internal.Struct(
    blink.mojom.GetCredentialOptionsSpec, 'blink.mojom.GetCredentialOptions', [
      mojo.internal.StructField('mediation', 0, 0, blink.mojom.MediationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('public_key', 8, 0, blink.mojom.PublicKeyCredentialRequestOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('password', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AuthenticatorSelectionCriteria
mojo.internal.Struct(
    blink.mojom.AuthenticatorSelectionCriteriaSpec, 'blink.mojom.AuthenticatorSelectionCriteria', [
      mojo.internal.StructField('authenticator_attachment', 0, 0, blink.mojom.AuthenticatorAttachmentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resident_key', 8, 0, blink.mojom.ResidentKeyRequirementSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_verification', 16, 0, blink.mojom.UserVerificationRequirementSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PublicKeyCredentialCreationOptions
mojo.internal.Struct(
    blink.mojom.PublicKeyCredentialCreationOptionsSpec, 'blink.mojom.PublicKeyCredentialCreationOptions', [
      mojo.internal.StructField('relying_party', 0, 0, blink.mojom.PublicKeyCredentialRpEntitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user', 8, 0, blink.mojom.PublicKeyCredentialUserEntitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('challenge', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('public_key_parameters', 24, 0, mojo.internal.Array(blink.mojom.PublicKeyCredentialParametersSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('timeout', 32, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('exclude_credentials', 40, 0, mojo.internal.Array(blink.mojom.PublicKeyCredentialDescriptorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('authenticator_selection', 48, 0, blink.mojom.AuthenticatorSelectionCriteriaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('hints', 56, 0, mojo.internal.Array(blink.mojom.HintSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('attestation', 64, 0, blink.mojom.AttestationConveyancePreferenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('prf_input', 72, 0, blink.mojom.PRFValuesSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('protection_policy', 80, 0, blink.mojom.ProtectionPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('appid_exclude', 88, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('large_blob_enable', 96, 0, blink.mojom.LargeBlobSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cred_blob', 104, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('remote_desktop_client_override', 112, 0, blink.mojom.RemoteDesktopClientOverrideSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('supplemental_pub_keys', 120, 0, blink.mojom.SupplementalPubKeysRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('payment_browser_bound_key_parameters', 128, 0, mojo.internal.Array(blink.mojom.PublicKeyCredentialParametersSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('attestation_formats', 136, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('hmac_create_secret', 144, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prf_enable', 144, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enforce_protection_policy', 144, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cred_props', 144, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_payment_credential_creation', 144, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('min_pin_length_requested', 144, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_conditional', 144, 6, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 160]]);

// Struct: PublicKeyCredentialDescriptor
mojo.internal.Struct(
    blink.mojom.PublicKeyCredentialDescriptorSpec, 'blink.mojom.PublicKeyCredentialDescriptor', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.PublicKeyCredentialTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('transports', 16, 0, mojo.internal.Array(blink.mojom.AuthenticatorTransportSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebAuthnDOMExceptionDetails
mojo.internal.Struct(
    blink.mojom.WebAuthnDOMExceptionDetailsSpec, 'blink.mojom.WebAuthnDOMExceptionDetails', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PublicKeyCredentialReportOptions
mojo.internal.Struct(
    blink.mojom.PublicKeyCredentialReportOptionsSpec, 'blink.mojom.PublicKeyCredentialReportOptions', [
      mojo.internal.StructField('relying_party_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('unknown_credential_id', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('all_accepted_credentials', 16, 0, blink.mojom.AllAcceptedCredentialsOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('current_user_details', 24, 0, blink.mojom.CurrentUserDetailsOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AllAcceptedCredentialsOptions
mojo.internal.Struct(
    blink.mojom.AllAcceptedCredentialsOptionsSpec, 'blink.mojom.AllAcceptedCredentialsOptions', [
      mojo.internal.StructField('user_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('all_accepted_credentials_ids', 8, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CurrentUserDetailsOptions
mojo.internal.Struct(
    blink.mojom.CurrentUserDetailsOptionsSpec, 'blink.mojom.CurrentUserDetailsOptions', [
      mojo.internal.StructField('user_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebAuthnClientCapability
mojo.internal.Struct(
    blink.mojom.WebAuthnClientCapabilitySpec, 'blink.mojom.WebAuthnClientCapability', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('supported', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GetAssertionResponse
mojo.internal.Struct(
    blink.mojom.GetAssertionResponseSpec, 'blink.mojom.GetAssertionResponse', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.AuthenticatorStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('credential', 8, 0, blink.mojom.GetAssertionAuthenticatorResponseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('dom_exception_details', 16, 0, blink.mojom.WebAuthnDOMExceptionDetailsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: Authenticator
mojo.internal.Struct(
    blink.mojom.Authenticator_MakeCredential_ParamsSpec, 'blink.mojom.Authenticator_MakeCredential_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.PublicKeyCredentialCreationOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Authenticator_MakeCredential_ResponseParamsSpec, 'blink.mojom.Authenticator_MakeCredential_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.AuthenticatorStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('credential', 8, 0, blink.mojom.MakeCredentialAuthenticatorResponseSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('dom_exception_details', 16, 0, blink.mojom.WebAuthnDOMExceptionDetailsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.Authenticator_GetCredential_ParamsSpec, 'blink.mojom.Authenticator_GetCredential_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.GetCredentialOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Authenticator_GetCredential_ResponseParamsSpec, 'blink.mojom.Authenticator_GetCredential_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, blink.mojom.GetCredentialResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec, 'blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec, 'blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParams', [
      mojo.internal.StructField('available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Authenticator_IsConditionalMediationAvailable_ParamsSpec, 'blink.mojom.Authenticator_IsConditionalMediationAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Authenticator_IsConditionalMediationAvailable_ResponseParamsSpec, 'blink.mojom.Authenticator_IsConditionalMediationAvailable_ResponseParams', [
      mojo.internal.StructField('available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Authenticator_Report_ParamsSpec, 'blink.mojom.Authenticator_Report_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.PublicKeyCredentialReportOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Authenticator_Report_ResponseParamsSpec, 'blink.mojom.Authenticator_Report_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.AuthenticatorStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dom_exception_details', 8, 0, blink.mojom.WebAuthnDOMExceptionDetailsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.Authenticator_GetClientCapabilities_ParamsSpec, 'blink.mojom.Authenticator_GetClientCapabilities_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Authenticator_GetClientCapabilities_ResponseParamsSpec, 'blink.mojom.Authenticator_GetClientCapabilities_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, mojo.internal.Array(blink.mojom.WebAuthnClientCapabilitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Authenticator_Cancel_ParamsSpec, 'blink.mojom.Authenticator_Cancel_Params', [
    ],
    [[0, 8]]);

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
      [options],
      false);
  }

  getCredential(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.Authenticator_GetCredential_ParamsSpec,
      blink.mojom.Authenticator_GetCredential_ResponseParamsSpec,
      [options],
      false);
  }

  isUserVerifyingPlatformAuthenticatorAvailable() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec,
      blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec,
      [],
      false);
  }

  isConditionalMediationAvailable() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.Authenticator_IsConditionalMediationAvailable_ParamsSpec,
      blink.mojom.Authenticator_IsConditionalMediationAvailable_ResponseParamsSpec,
      [],
      false);
  }

  report(options) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.Authenticator_Report_ParamsSpec,
      blink.mojom.Authenticator_Report_ResponseParamsSpec,
      [options],
      false);
  }

  getClientCapabilities() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.Authenticator_GetClientCapabilities_ParamsSpec,
      blink.mojom.Authenticator_GetClientCapabilities_ResponseParamsSpec,
      [],
      false);
  }

  cancel() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.Authenticator_Cancel_ParamsSpec,
      null,
      [],
      false);
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

blink.mojom.AuthenticatorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.Authenticator_MakeCredential_ParamsSpec.$.decode(message.payload);
          const result = this.impl.makeCredential(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.Authenticator_MakeCredential_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = blink.mojom.Authenticator_GetCredential_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getCredential(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.Authenticator_GetCredential_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isUserVerifyingPlatformAuthenticatorAvailable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = blink.mojom.Authenticator_IsConditionalMediationAvailable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isConditionalMediationAvailable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.Authenticator_IsConditionalMediationAvailable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = blink.mojom.Authenticator_Report_ParamsSpec.$.decode(message.payload);
          const result = this.impl.report(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.Authenticator_Report_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = blink.mojom.Authenticator_GetClientCapabilities_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getClientCapabilities();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.Authenticator_GetClientCapabilities_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = blink.mojom.Authenticator_Cancel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancel();
          break;
        }
      }
    }});
  }
};

blink.mojom.AuthenticatorReceiver = blink.mojom.AuthenticatorReceiver;

blink.mojom.AuthenticatorPtr = blink.mojom.AuthenticatorRemote;
blink.mojom.AuthenticatorRequest = blink.mojom.AuthenticatorPendingReceiver;

