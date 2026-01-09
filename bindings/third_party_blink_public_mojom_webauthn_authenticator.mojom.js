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
  UNKNOWN_ERROR: 28,
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
  NONE: 0,
  UV_OR_CRED_ID_REQUIRED: 1,
  UV_REQUIRED: 2,
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
};

// Enum: PublicKeyCredentialType
blink.mojom.PublicKeyCredentialType = {
  PUBLIC_KEY: 0,
};

// Struct: CommonCredentialInfo
blink.mojom.CommonCredentialInfo = class {
  constructor(values = {}) {
    this.authenticator_data = values.authenticator_data !== undefined ? values.authenticator_data : 0;
  }
};

// Struct: UvmEntry
blink.mojom.UvmEntry = class {
  constructor(values = {}) {
    this.matcher_protection_type = values.matcher_protection_type !== undefined ? values.matcher_protection_type : 0;
  }
};

// Struct: SupplementalPubKeysResponse
blink.mojom.SupplementalPubKeysResponse = class {
  constructor(values = {}) {
    this.signatures = values.signatures !== undefined ? values.signatures : 0;
  }
};

// Struct: AuthenticationExtensionsPaymentResponse
blink.mojom.AuthenticationExtensionsPaymentResponse = class {
  constructor(values = {}) {
    this.browser_bound_signature = values.browser_bound_signature !== undefined ? values.browser_bound_signature : 0;
  }
};

// Struct: MakeCredentialAuthenticatorResponse
blink.mojom.MakeCredentialAuthenticatorResponse = class {
  constructor(values = {}) {
    this.attestation_object = values.attestation_object !== undefined ? values.attestation_object : 0;
    this.transports = values.transports !== undefined ? values.transports : [];
    this.hmac_create_secret = values.hmac_create_secret !== undefined ? values.hmac_create_secret : false;
    this.prf_results = values.prf_results !== undefined ? values.prf_results : false;
    this.cred_blob = values.cred_blob !== undefined ? values.cred_blob : false;
    this.payment = values.payment !== undefined ? values.payment : 0;
  }
};

// Struct: GetAssertionAuthenticatorResponse
blink.mojom.GetAssertionAuthenticatorResponse = class {
  constructor(values = {}) {
    this.signature = values.signature !== undefined ? values.signature : 0;
    this.extensions = values.extensions !== undefined ? values.extensions : 0;
  }
};

// Struct: AuthenticationExtensionsClientOutputs
blink.mojom.AuthenticationExtensionsClientOutputs = class {
  constructor(values = {}) {
    this.appid_extension = values.appid_extension !== undefined ? values.appid_extension : false;
    this.by = values.by !== undefined ? values.by : null;
    this.echo_prf = values.echo_prf !== undefined ? values.echo_prf : false;
    this.large_blob_written = values.large_blob_written !== undefined ? values.large_blob_written : 0;
    this.empty = values.empty !== undefined ? values.empty : null;
    this.payment = values.payment !== undefined ? values.payment : 0;
  }
};

// Struct: PublicKeyCredentialRpEntity
blink.mojom.PublicKeyCredentialRpEntity = class {
  constructor(values = {}) {
    this.name = values.name !== undefined ? values.name : "";
  }
};

// Struct: PublicKeyCredentialUserEntity
blink.mojom.PublicKeyCredentialUserEntity = class {
  constructor(values = {}) {
    this.display_name = values.display_name !== undefined ? values.display_name : 0;
  }
};

// Struct: PublicKeyCredentialParameters
blink.mojom.PublicKeyCredentialParameters = class {
  constructor(values = {}) {
    this.algorithm_identifier = values.algorithm_identifier !== undefined ? values.algorithm_identifier : 0;
  }
};

// Struct: CableAuthentication
blink.mojom.CableAuthentication = class {
  constructor(values = {}) {
    this.session_pre_key = values.session_pre_key !== undefined ? values.session_pre_key : 0;
    this.experiments = values.experiments !== undefined ? values.experiments : 0;
  }
};

// Struct: PRFValues
blink.mojom.PRFValues = class {
  constructor(values = {}) {
    this.these = values.these !== undefined ? values.these : null;
    this.second = values.second !== undefined ? values.second : 0;
  }
};

// Struct: PaymentOptions
blink.mojom.PaymentOptions = class {
  constructor(values = {}) {
    this.browser_bound_public_key = values.browser_bound_public_key !== undefined ? values.browser_bound_public_key : 0;
  }
};

// Struct: PaymentCredentialInstrument
blink.mojom.PaymentCredentialInstrument = class {
  constructor(values = {}) {
    this.display_name = values.display_name !== undefined ? values.display_name : "";
    this.iconMustBeShown = values.iconMustBeShown !== undefined ? values.iconMustBeShown : false;
    this.details = values.details !== undefined ? values.details : "";
  }
};

// Struct: ShownPaymentEntityLogo
blink.mojom.ShownPaymentEntityLogo = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
  }
};

// Struct: RemoteDesktopClientOverride
blink.mojom.RemoteDesktopClientOverride = class {
  constructor(values = {}) {
    this.same_origin_with_ancestors = values.same_origin_with_ancestors !== undefined ? values.same_origin_with_ancestors : false;
  }
};

// Struct: SupplementalPubKeysRequest
blink.mojom.SupplementalPubKeysRequest = class {
  constructor(values = {}) {
    this.attestation_formats = values.attestation_formats !== undefined ? values.attestation_formats : false;
  }
};

// Struct: PublicKeyCredentialRequestOptions
blink.mojom.PublicKeyCredentialRequestOptions = class {
  constructor(values = {}) {
    this.extensions = values.extensions !== undefined ? values.extensions : 0;
  }
};

// Struct: AuthenticationExtensionsClientInputs
blink.mojom.AuthenticationExtensionsClientInputs = class {
  constructor(values = {}) {
    this.appid = values.appid !== undefined ? values.appid : "";
    this.cable_authentication_data = values.cable_authentication_data !== undefined ? values.cable_authentication_data : [];
    this.prf = values.prf !== undefined ? values.prf : false;
    this.prf_inputs = values.prf_inputs !== undefined ? values.prf_inputs : [];
    this.large_blob_read = values.large_blob_read !== undefined ? values.large_blob_read : false;
    this.large_blob_write = values.large_blob_write !== undefined ? values.large_blob_write : 0;
    this.remote_desktop_client_override = values.remote_desktop_client_override !== undefined ? values.remote_desktop_client_override : false;
    this.payment_browser_bound_key_parameters = values.payment_browser_bound_key_parameters !== undefined ? values.payment_browser_bound_key_parameters : [];
  }
};

// Struct: GetCredentialOptions
blink.mojom.GetCredentialOptions = class {
  constructor(values = {}) {
    this.mediation = values.mediation !== undefined ? values.mediation : null;
    this.public_key = values.public_key !== undefined ? values.public_key : null;
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: AuthenticatorSelectionCriteria
blink.mojom.AuthenticatorSelectionCriteria = class {
  constructor(values = {}) {
    this.authenticator_attachment = values.authenticator_attachment !== undefined ? values.authenticator_attachment : null;
    this.user_verification = values.user_verification !== undefined ? values.user_verification : null;
  }
};

// Struct: PublicKeyCredentialCreationOptions
blink.mojom.PublicKeyCredentialCreationOptions = class {
  constructor(values = {}) {
    this.user = values.user !== undefined ? values.user : null;
    this.timeout = values.timeout !== undefined ? values.timeout : 0;
    this.attestation = values.attestation !== undefined ? values.attestation : 0;
    this.prf_input = values.prf_input !== undefined ? values.prf_input : false;
    this.protection_policy = values.protection_policy !== undefined ? values.protection_policy : null;
    this.enforce_protection_policy = values.enforce_protection_policy !== undefined ? values.enforce_protection_policy : false;
    this.is_payment_credential_creation = values.is_payment_credential_creation !== undefined ? values.is_payment_credential_creation : false;
    this.remote_desktop_client_override = values.remote_desktop_client_override !== undefined ? values.remote_desktop_client_override : 0;
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: PublicKeyCredentialDescriptor
blink.mojom.PublicKeyCredentialDescriptor = class {
  constructor(values = {}) {
    this.transports = values.transports !== undefined ? values.transports : 0;
  }
};

// Struct: WebAuthnDOMExceptionDetails
blink.mojom.WebAuthnDOMExceptionDetails = class {
  constructor(values = {}) {
    this.message = values.message !== undefined ? values.message : "";
  }
};

// Struct: PublicKeyCredentialReportOptions
blink.mojom.PublicKeyCredentialReportOptions = class {
  constructor(values = {}) {
    this.current_user_details = values.current_user_details !== undefined ? values.current_user_details : 0;
  }
};

// Struct: AllAcceptedCredentialsOptions
blink.mojom.AllAcceptedCredentialsOptions = class {
  constructor(values = {}) {
    this.all_accepted_credentials_ids = values.all_accepted_credentials_ids !== undefined ? values.all_accepted_credentials_ids : 0;
  }
};

// Struct: CurrentUserDetailsOptions
blink.mojom.CurrentUserDetailsOptions = class {
  constructor(values = {}) {
    this.display_name = values.display_name !== undefined ? values.display_name : 0;
  }
};

// Struct: WebAuthnClientCapability
blink.mojom.WebAuthnClientCapability = class {
  constructor(values = {}) {
    this.supported = values.supported !== undefined ? values.supported : false;
  }
};

// Struct: GetAssertionResponse
blink.mojom.GetAssertionResponse = class {
  constructor(values = {}) {
    this.dom_exception_details = values.dom_exception_details !== undefined ? values.dom_exception_details : null;
  }
};

// Interface: Authenticator
blink.mojom.AuthenticatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.Authenticator';
  }

  makeCredential(options) {
    // Method: MakeCredential
    return new Promise((resolve) => {
      // Call: MakeCredential(options)
      resolve({});
    });
  }

  getCredential(options) {
    // Method: GetCredential
    return new Promise((resolve) => {
      // Call: GetCredential(options)
      resolve({});
    });
  }

  isUserVerifyingPlatformAuthenticatorAvailable() {
    // Method: IsUserVerifyingPlatformAuthenticatorAvailable
    return new Promise((resolve) => {
      // Call: IsUserVerifyingPlatformAuthenticatorAvailable()
      resolve({});
    });
  }

  isConditionalMediationAvailable() {
    // Method: IsConditionalMediationAvailable
    return new Promise((resolve) => {
      // Call: IsConditionalMediationAvailable()
      resolve({});
    });
  }

  report(options) {
    // Method: Report
    return new Promise((resolve) => {
      // Call: Report(options)
      resolve({});
    });
  }

  getClientCapabilities() {
    // Method: GetClientCapabilities
    return new Promise((resolve) => {
      // Call: GetClientCapabilities()
      resolve({});
    });
  }

  cancel() {
    // Method: Cancel
    // Call: Cancel()
  }

};

blink.mojom.AuthenticatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
