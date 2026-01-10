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
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.RequestTokenStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.RequestUserInfoStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.DisconnectStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.IdpSigninStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.RpContextSpec = { $: mojo.internal.Enum() };
blink.mojom.RpModeSpec = { $: mojo.internal.Enum() };
blink.mojom.RegisterIdpStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.FormatSpec = { $: mojo.internal.Enum() };
blink.mojom.IdentityProviderConfigSpec = { $: {} };
blink.mojom.IdentityProviderRequestOptionsSpec = { $: {} };
blink.mojom.IdentityCredentialDisconnectOptionsSpec = { $: {} };
blink.mojom.IdentityUserInfoSpec = { $: {} };
blink.mojom.LoginStatusAccountSpec = { $: {} };
blink.mojom.LoginStatusOptionsSpec = { $: {} };
blink.mojom.IdentityProviderGetParametersSpec = { $: {} };
blink.mojom.TokenErrorSpec = { $: {} };
blink.mojom.FederatedAuthRequest = {};
blink.mojom.FederatedAuthRequest.$interfaceName = 'blink.mojom.FederatedAuthRequest';
blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_RequestToken_ResponseParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_PreventSilentAccess_ResponseParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec = { $: {} };
blink.mojom.FederatedAuthRequest_Disconnect_ResponseParamsSpec = { $: {} };

// Enum: RequestTokenStatus
blink.mojom.RequestTokenStatus = {
  kSuccess: 0,
  kErrorTooManyRequests: 1,
  kErrorCanceled: 2,
  kError: 3,
};

// Enum: RequestUserInfoStatus
blink.mojom.RequestUserInfoStatus = {
  kSuccess: 0,
  kError: 1,
};

// Enum: DisconnectStatus
blink.mojom.DisconnectStatus = {
  kSuccess: 0,
  kErrorTooManyRequests: 1,
  kError: 2,
};

// Enum: IdpSigninStatus
blink.mojom.IdpSigninStatus = {
  kSignedIn: 0,
  kSignedOut: 1,
};

// Enum: RpContext
blink.mojom.RpContext = {
  kSignIn: 0,
  kSignUp: 1,
  kUse: 2,
  kContinue: 3,
};

// Enum: RpMode
blink.mojom.RpMode = {
  kActive: 0,
  kPassive: 1,
};

// Enum: RegisterIdpStatus
blink.mojom.RegisterIdpStatus = {
  kSuccess: 0,
  kErrorFeatureDisabled: 1,
  kErrorCrossOriginConfig: 2,
  kErrorNoTransientActivation: 3,
  kErrorDeclined: 4,
  kErrorInvalidConfig: 5,
};

// Enum: Format
blink.mojom.Format = {
  kSdJwt: 0,
};

// Struct: IdentityProviderConfig
mojo.internal.Struct(
    blink.mojom.IdentityProviderConfigSpec, 'blink.mojom.IdentityProviderConfig', [
      mojo.internal.StructField('config_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('client_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('from_idp_registration_api', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: IdentityProviderRequestOptions
mojo.internal.Struct(
    blink.mojom.IdentityProviderRequestOptionsSpec, 'blink.mojom.IdentityProviderRequestOptions', [
      mojo.internal.StructField('config', 0, 0, blink.mojom.IdentityProviderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('nonce', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('login_hint', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('domain_hint', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fields', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('params_json', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('format', 48, 0, blink.mojom.FormatSpec.$, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: IdentityCredentialDisconnectOptions
mojo.internal.Struct(
    blink.mojom.IdentityCredentialDisconnectOptionsSpec, 'blink.mojom.IdentityCredentialDisconnectOptions', [
      mojo.internal.StructField('config', 0, 0, blink.mojom.IdentityProviderConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('account_hint', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: IdentityUserInfo
mojo.internal.Struct(
    blink.mojom.IdentityUserInfoSpec, 'blink.mojom.IdentityUserInfo', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('given_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('picture', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: LoginStatusAccount
mojo.internal.Struct(
    blink.mojom.LoginStatusAccountSpec, 'blink.mojom.LoginStatusAccount', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('email', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('given_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('picture', 32, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: LoginStatusOptions
mojo.internal.Struct(
    blink.mojom.LoginStatusOptionsSpec, 'blink.mojom.LoginStatusOptions', [
      mojo.internal.StructField('accounts', 0, 0, mojo.internal.Array(blink.mojom.LoginStatusAccountSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('expiration', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: IdentityProviderGetParameters
mojo.internal.Struct(
    blink.mojom.IdentityProviderGetParametersSpec, 'blink.mojom.IdentityProviderGetParameters', [
      mojo.internal.StructField('providers', 0, 0, mojo.internal.Array(blink.mojom.IdentityProviderRequestOptionsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('context', 8, 0, blink.mojom.RpContextSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mode', 16, 0, blink.mojom.RpModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TokenError
mojo.internal.Struct(
    blink.mojom.TokenErrorSpec, 'blink.mojom.TokenError', [
      mojo.internal.StructField('code', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('url', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FederatedAuthRequest
mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec, 'blink.mojom.FederatedAuthRequest_RequestToken_Params', [
      mojo.internal.StructField('idp_get_params', 0, 0, mojo.internal.Array(blink.mojom.IdentityProviderGetParametersSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('requirement', 8, 0, blink.mojom.CredentialMediationRequirementSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_RequestToken_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_RequestToken_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.RequestTokenStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selected_identity_provider_config_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('token', 16, 0, mojo_base.mojom.ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('error', 24, 0, blink.mojom.TokenErrorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_auto_selected', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec, 'blink.mojom.FederatedAuthRequest_RequestUserInfo_Params', [
      mojo.internal.StructField('provider', 0, 0, blink.mojom.IdentityProviderConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.RequestUserInfoStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_info', 8, 0, mojo.internal.Array(blink.mojom.IdentityUserInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec, 'blink.mojom.FederatedAuthRequest_CancelTokenRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec, 'blink.mojom.FederatedAuthRequest_ResolveTokenRequest_Params', [
      mojo.internal.StructField('account_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec, 'blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, blink.mojom.IdpSigninStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, blink.mojom.LoginStatusOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec, 'blink.mojom.FederatedAuthRequest_RegisterIdP_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.RegisterIdpStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec, 'blink.mojom.FederatedAuthRequest_UnregisterIdP_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec, 'blink.mojom.FederatedAuthRequest_CloseModalDialogView_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec, 'blink.mojom.FederatedAuthRequest_PreventSilentAccess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_PreventSilentAccess_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_PreventSilentAccess_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec, 'blink.mojom.FederatedAuthRequest_Disconnect_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.IdentityCredentialDisconnectOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_Disconnect_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_Disconnect_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.DisconnectStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FederatedAuthRequestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FederatedAuthRequestRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FederatedAuthRequest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FederatedAuthRequestPendingReceiver,
      handle);
    this.$ = new blink.mojom.FederatedAuthRequestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestToken(idp_get_params, requirement) {
    return this.$.requestToken(idp_get_params, requirement);
  }
  requestUserInfo(provider) {
    return this.$.requestUserInfo(provider);
  }
  cancelTokenRequest() {
    return this.$.cancelTokenRequest();
  }
  resolveTokenRequest(account_id, token) {
    return this.$.resolveTokenRequest(account_id, token);
  }
  setIdpSigninStatus(origin, status, options) {
    return this.$.setIdpSigninStatus(origin, status, options);
  }
  registerIdP(url) {
    return this.$.registerIdP(url);
  }
  unregisterIdP(url) {
    return this.$.unregisterIdP(url);
  }
  closeModalDialogView() {
    return this.$.closeModalDialogView();
  }
  preventSilentAccess() {
    return this.$.preventSilentAccess();
  }
  disconnect(options) {
    return this.$.disconnect(options);
  }
};

blink.mojom.FederatedAuthRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FederatedAuthRequest', [
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

  requestToken(idp_get_params, requirement) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec,
      blink.mojom.FederatedAuthRequest_RequestToken_ResponseParamsSpec,
      [idp_get_params, requirement],
      false);
  }

  requestUserInfo(provider) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec,
      blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParamsSpec,
      [provider],
      false);
  }

  cancelTokenRequest() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec,
      null,
      [],
      false);
  }

  resolveTokenRequest(account_id, token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec,
      blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParamsSpec,
      [account_id, token],
      false);
  }

  setIdpSigninStatus(origin, status, options) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec,
      blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParamsSpec,
      [origin, status, options],
      false);
  }

  registerIdP(url) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec,
      blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParamsSpec,
      [url],
      false);
  }

  unregisterIdP(url) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec,
      blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParamsSpec,
      [url],
      false);
  }

  closeModalDialogView() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec,
      null,
      [],
      false);
  }

  preventSilentAccess() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec,
      blink.mojom.FederatedAuthRequest_PreventSilentAccess_ResponseParamsSpec,
      [],
      false);
  }

  disconnect(options) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec,
      blink.mojom.FederatedAuthRequest_Disconnect_ResponseParamsSpec,
      [options],
      false);
  }

};

blink.mojom.FederatedAuthRequest.getRemote = function() {
  let remote = new blink.mojom.FederatedAuthRequestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FederatedAuthRequest',
    'context');
  return remote.$;
};

blink.mojom.FederatedAuthRequestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FederatedAuthRequest', [
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
             decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestToken');
          const result = this.impl.requestToken(params.idp_get_params, params.requirement);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FederatedAuthRequest_RequestToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestUserInfo');
          const result = this.impl.requestUserInfo(params.provider);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelTokenRequest');
          const result = this.impl.cancelTokenRequest();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolveTokenRequest');
          const result = this.impl.resolveTokenRequest(params.account_id, params.token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIdpSigninStatus');
          const result = this.impl.setIdpSigninStatus(params.origin, params.status, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerIdP');
          const result = this.impl.registerIdP(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unregisterIdP');
          const result = this.impl.unregisterIdP(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeModalDialogView');
          const result = this.impl.closeModalDialogView();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.preventSilentAccess');
          const result = this.impl.preventSilentAccess();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FederatedAuthRequest_PreventSilentAccess_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnect');
          const result = this.impl.disconnect(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FederatedAuthRequest_Disconnect_ResponseParamsSpec);
               responder(response);
            });
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

blink.mojom.FederatedAuthRequestReceiver = blink.mojom.FederatedAuthRequestReceiver;

blink.mojom.FederatedAuthRequestPtr = blink.mojom.FederatedAuthRequestRemote;
blink.mojom.FederatedAuthRequestRequest = blink.mojom.FederatedAuthRequestPendingReceiver;

