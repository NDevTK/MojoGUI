// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/webid/federated_auth_request.mojom
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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.RequestTokenStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.RequestUserInfoStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.DisconnectStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.IdpSigninStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.RpContextSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.RpModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.RegisterIdpStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.FormatSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.IdentityProviderConfigSpec = { $: {} };
mojo.internal.bindings.blink.mojom.IdentityProviderRequestOptionsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.IdentityCredentialDisconnectOptionsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.IdentityUserInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LoginStatusAccountSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LoginStatusOptionsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.IdentityProviderGetParametersSpec = { $: {} };
mojo.internal.bindings.blink.mojom.TokenErrorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest = {};
mojo.internal.bindings.blink.mojom.FederatedAuthRequestSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest.$interfaceName = 'blink.mojom.FederatedAuthRequest';
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestToken_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_PreventSilentAccess_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequest_Disconnect_ResponseParamsSpec = { $: {} };

// Enum: RequestTokenStatus
mojo.internal.bindings.blink.mojom.RequestTokenStatus = {
  kSuccess: 0,
  kErrorTooManyRequests: 1,
  kErrorCanceled: 2,
  kError: 3,
};

// Enum: RequestUserInfoStatus
mojo.internal.bindings.blink.mojom.RequestUserInfoStatus = {
  kSuccess: 0,
  kError: 1,
};

// Enum: DisconnectStatus
mojo.internal.bindings.blink.mojom.DisconnectStatus = {
  kSuccess: 0,
  kErrorTooManyRequests: 1,
  kError: 2,
};

// Enum: IdpSigninStatus
mojo.internal.bindings.blink.mojom.IdpSigninStatus = {
  kSignedIn: 0,
  kSignedOut: 1,
};

// Enum: RpContext
mojo.internal.bindings.blink.mojom.RpContext = {
  kSignIn: 0,
  kSignUp: 1,
  kUse: 2,
  kContinue: 3,
};

// Enum: RpMode
mojo.internal.bindings.blink.mojom.RpMode = {
  kActive: 0,
  kPassive: 1,
};

// Enum: RegisterIdpStatus
mojo.internal.bindings.blink.mojom.RegisterIdpStatus = {
  kSuccess: 0,
  kErrorFeatureDisabled: 1,
  kErrorCrossOriginConfig: 2,
  kErrorNoTransientActivation: 3,
  kErrorDeclined: 4,
  kErrorInvalidConfig: 5,
};

// Enum: Format
mojo.internal.bindings.blink.mojom.Format = {
  kSdJwt: 0,
};

// Struct: IdentityProviderConfig
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.IdentityProviderConfigSpec, 'blink.mojom.IdentityProviderConfig', [
      mojo.internal.StructField('arg_config_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_from_idp_registration_api', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: IdentityProviderRequestOptions
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.IdentityProviderRequestOptionsSpec, 'blink.mojom.IdentityProviderRequestOptions', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.blink.mojom.IdentityProviderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_nonce', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_login_hint', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_domain_hint', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_fields', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_params_json', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_format', 48, 0, mojo.internal.bindings.blink.mojom.FormatSpec.$, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: IdentityCredentialDisconnectOptions
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.IdentityCredentialDisconnectOptionsSpec, 'blink.mojom.IdentityCredentialDisconnectOptions', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.blink.mojom.IdentityProviderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_account_hint', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: IdentityUserInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.IdentityUserInfoSpec, 'blink.mojom.IdentityUserInfo', [
      mojo.internal.StructField('arg_email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_given_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_picture', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: LoginStatusAccount
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LoginStatusAccountSpec, 'blink.mojom.LoginStatusAccount', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_email', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_given_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_picture', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: LoginStatusOptions
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LoginStatusOptionsSpec, 'blink.mojom.LoginStatusOptions', [
      mojo.internal.StructField('arg_accounts', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.LoginStatusAccountSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_expiration', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: IdentityProviderGetParameters
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.IdentityProviderGetParametersSpec, 'blink.mojom.IdentityProviderGetParameters', [
      mojo.internal.StructField('arg_providers', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.IdentityProviderRequestOptionsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_context', 8, 0, mojo.internal.bindings.blink.mojom.RpContextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mode', 16, 0, mojo.internal.bindings.blink.mojom.RpModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TokenError
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.TokenErrorSpec, 'blink.mojom.TokenError', [
      mojo.internal.StructField('arg_code', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FederatedAuthRequest
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec, 'blink.mojom.FederatedAuthRequest_RequestToken_Params', [
      mojo.internal.StructField('arg_idp_get_params', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.IdentityProviderGetParametersSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_requirement', 8, 0, mojo.internal.bindings.blink.mojom.CredentialMediationRequirementSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestToken_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_RequestToken_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.RequestTokenStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_selected_identity_provider_config_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_token', 16, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_error', 24, 0, mojo.internal.bindings.blink.mojom.TokenErrorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_auto_selected', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec, 'blink.mojom.FederatedAuthRequest_RequestUserInfo_Params', [
      mojo.internal.StructField('arg_provider', 0, 0, mojo.internal.bindings.blink.mojom.IdentityProviderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.RequestUserInfoStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_info', 8, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.IdentityUserInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec, 'blink.mojom.FederatedAuthRequest_CancelTokenRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec, 'blink.mojom.FederatedAuthRequest_ResolveTokenRequest_Params', [
      mojo.internal.StructField('arg_account_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_token', 8, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec, 'blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_Params', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.blink.mojom.IdpSigninStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 16, 0, mojo.internal.bindings.blink.mojom.LoginStatusOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec, 'blink.mojom.FederatedAuthRequest_RegisterIdP_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.RegisterIdpStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec, 'blink.mojom.FederatedAuthRequest_UnregisterIdP_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec, 'blink.mojom.FederatedAuthRequest_CloseModalDialogView_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec, 'blink.mojom.FederatedAuthRequest_PreventSilentAccess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_PreventSilentAccess_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_PreventSilentAccess_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec, 'blink.mojom.FederatedAuthRequest_Disconnect_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.blink.mojom.IdentityCredentialDisconnectOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequest_Disconnect_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_Disconnect_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.DisconnectStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.FederatedAuthRequestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.FederatedAuthRequestRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FederatedAuthRequest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.FederatedAuthRequestPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.FederatedAuthRequestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestToken(arg_idp_get_params, arg_requirement) {
    return this.$.requestToken(arg_idp_get_params, arg_requirement);
  }
  requestUserInfo(arg_provider) {
    return this.$.requestUserInfo(arg_provider);
  }
  cancelTokenRequest() {
    return this.$.cancelTokenRequest();
  }
  resolveTokenRequest(arg_account_id, arg_token) {
    return this.$.resolveTokenRequest(arg_account_id, arg_token);
  }
  setIdpSigninStatus(arg_origin, arg_status, arg_options) {
    return this.$.setIdpSigninStatus(arg_origin, arg_status, arg_options);
  }
  registerIdP(arg_url) {
    return this.$.registerIdP(arg_url);
  }
  unregisterIdP(arg_url) {
    return this.$.unregisterIdP(arg_url);
  }
  closeModalDialogView() {
    return this.$.closeModalDialogView();
  }
  preventSilentAccess() {
    return this.$.preventSilentAccess();
  }
  disconnect(arg_options) {
    return this.$.disconnect(arg_options);
  }
};

mojo.internal.bindings.blink.mojom.FederatedAuthRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.FederatedAuthRequest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestToken(arg_idp_get_params, arg_requirement) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestToken_ResponseParamsSpec,
      [arg_idp_get_params, arg_requirement],
      false);
  }

  requestUserInfo(arg_provider) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParamsSpec,
      [arg_provider],
      false);
  }

  cancelTokenRequest() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec,
      null,
      [],
      false);
  }

  resolveTokenRequest(arg_account_id, arg_token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParamsSpec,
      [arg_account_id, arg_token],
      false);
  }

  setIdpSigninStatus(arg_origin, arg_status, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParamsSpec,
      [arg_origin, arg_status, arg_options],
      false);
  }

  registerIdP(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParamsSpec,
      [arg_url],
      false);
  }

  unregisterIdP(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParamsSpec,
      [arg_url],
      false);
  }

  closeModalDialogView() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec,
      null,
      [],
      false);
  }

  preventSilentAccess() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_PreventSilentAccess_ResponseParamsSpec,
      [],
      false);
  }

  disconnect(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FederatedAuthRequest_Disconnect_ResponseParamsSpec,
      [arg_options],
      false);
  }

};

mojo.internal.bindings.blink.mojom.FederatedAuthRequest.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.FederatedAuthRequestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FederatedAuthRequest',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.FederatedAuthRequestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.FederatedAuthRequest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: RequestToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestToken (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestUserInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestUserInfo (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CancelTokenRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelTokenRequest (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ResolveTokenRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolveTokenRequest (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetIdpSigninStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIdpSigninStatus (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RegisterIdP
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterIdP (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: UnregisterIdP
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnregisterIdP (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CloseModalDialogView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseModalDialogView (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: PreventSilentAccess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PreventSilentAccess (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Disconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Disconnect (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestToken');
          const result = this.impl.requestToken(params.arg_idp_get_params, params.arg_requirement);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestToken_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestToken FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestUserInfo');
          const result = this.impl.requestUserInfo(params.arg_provider);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestUserInfo FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelTokenRequest');
          const result = this.impl.cancelTokenRequest();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolveTokenRequest');
          const result = this.impl.resolveTokenRequest(params.arg_account_id, params.arg_token);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ResolveTokenRequest FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIdpSigninStatus');
          const result = this.impl.setIdpSigninStatus(params.arg_origin, params.arg_status, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetIdpSigninStatus FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerIdP');
          const result = this.impl.registerIdP(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RegisterIdP FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unregisterIdP');
          const result = this.impl.unregisterIdP(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UnregisterIdP FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeModalDialogView');
          const result = this.impl.closeModalDialogView();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.preventSilentAccess');
          const result = this.impl.preventSilentAccess();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FederatedAuthRequest_PreventSilentAccess_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PreventSilentAccess FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnect');
          const result = this.impl.disconnect(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FederatedAuthRequest_Disconnect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Disconnect FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.FederatedAuthRequestReceiver = mojo.internal.bindings.blink.mojom.FederatedAuthRequestReceiver;

mojo.internal.bindings.blink.mojom.FederatedAuthRequestPtr = mojo.internal.bindings.blink.mojom.FederatedAuthRequestRemote;
mojo.internal.bindings.blink.mojom.FederatedAuthRequestRequest = mojo.internal.bindings.blink.mojom.FederatedAuthRequestPendingReceiver;

