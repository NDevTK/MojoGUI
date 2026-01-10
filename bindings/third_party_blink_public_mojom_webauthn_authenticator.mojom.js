// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webauthn/authenticator.mojom
// Module: blink.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
  makeCredential(options) {
    return this.$.makeCredential(options);
  }
  getCredential(options) {
    return this.$.getCredential(options);
  }
  isUserVerifyingPlatformAuthenticatorAvailable() {
    return this.$.isUserVerifyingPlatformAuthenticatorAvailable();
  }
  isConditionalMediationAvailable() {
    return this.$.isConditionalMediationAvailable();
  }
  report(options) {
    return this.$.report(options);
  }
  getClientCapabilities() {
    return this.$.getClientCapabilities();
  }
  cancel() {
    return this.$.cancel();
  }
};

blink.mojom.AuthenticatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Authenticator', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  makeCredential(options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.Authenticator_MakeCredential_ParamsSpec,
      blink.mojom.Authenticator_MakeCredential_ResponseParamsSpec,
      [options],
      false);
  }

  getCredential(options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.Authenticator_GetCredential_ParamsSpec,
      blink.mojom.Authenticator_GetCredential_ResponseParamsSpec,
      [options],
      false);
  }

  isUserVerifyingPlatformAuthenticatorAvailable() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec,
      blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ResponseParamsSpec,
      [],
      false);
  }

  isConditionalMediationAvailable() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.Authenticator_IsConditionalMediationAvailable_ParamsSpec,
      blink.mojom.Authenticator_IsConditionalMediationAvailable_ResponseParamsSpec,
      [],
      false);
  }

  report(options) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.Authenticator_Report_ParamsSpec,
      blink.mojom.Authenticator_Report_ResponseParamsSpec,
      [options],
      false);
  }

  getClientCapabilities() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.Authenticator_GetClientCapabilities_ParamsSpec,
      blink.mojom.Authenticator_GetClientCapabilities_ResponseParamsSpec,
      [],
      false);
  }

  cancel() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Authenticator', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: MakeCredential
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Authenticator_MakeCredential_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MakeCredential (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetCredential
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Authenticator_GetCredential_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCredential (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: IsUserVerifyingPlatformAuthenticatorAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsUserVerifyingPlatformAuthenticatorAvailable (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: IsConditionalMediationAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Authenticator_IsConditionalMediationAvailable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsConditionalMediationAvailable (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Report
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Authenticator_Report_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Report (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetClientCapabilities
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Authenticator_GetClientCapabilities_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetClientCapabilities (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Authenticator_Cancel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Authenticator_MakeCredential_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.makeCredential');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Authenticator_GetCredential_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCredential');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Authenticator_IsUserVerifyingPlatformAuthenticatorAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isUserVerifyingPlatformAuthenticatorAvailable');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Authenticator_IsConditionalMediationAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isConditionalMediationAvailable');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Authenticator_Report_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.report');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Authenticator_GetClientCapabilities_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getClientCapabilities');
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Authenticator_Cancel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AuthenticatorReceiver = blink.mojom.AuthenticatorReceiver;

blink.mojom.AuthenticatorPtr = blink.mojom.AuthenticatorRemote;
blink.mojom.AuthenticatorRequest = blink.mojom.AuthenticatorPendingReceiver;

