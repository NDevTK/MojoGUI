// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webid/federated_auth_request.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};
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
      mojo.internal.StructField('config_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('from_idp_registration_api', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('client_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: IdentityProviderRequestOptions
mojo.internal.Struct(
    blink.mojom.IdentityProviderRequestOptionsSpec, 'blink.mojom.IdentityProviderRequestOptions', [
      mojo.internal.StructField('config', 0, 0, blink.mojom.IdentityProviderConfigSpec, null, false, 0, undefined),
      mojo.internal.StructField('nonce', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('login_hint', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('domain_hint', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fields', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('params_json', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('format', 48, 0, blink.mojom.FormatSpec, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: IdentityCredentialDisconnectOptions
mojo.internal.Struct(
    blink.mojom.IdentityCredentialDisconnectOptionsSpec, 'blink.mojom.IdentityCredentialDisconnectOptions', [
      mojo.internal.StructField('config', 0, 0, blink.mojom.IdentityProviderConfigSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('picture', 32, 0, url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: LoginStatusOptions
mojo.internal.Struct(
    blink.mojom.LoginStatusOptionsSpec, 'blink.mojom.LoginStatusOptions', [
      mojo.internal.StructField('accounts', 0, 0, mojo.internal.Array(blink.mojom.LoginStatusAccountSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('expiration', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: IdentityProviderGetParameters
mojo.internal.Struct(
    blink.mojom.IdentityProviderGetParametersSpec, 'blink.mojom.IdentityProviderGetParameters', [
      mojo.internal.StructField('providers', 0, 0, mojo.internal.Array(blink.mojom.IdentityProviderRequestOptionsSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('context', 8, 0, blink.mojom.RpContextSpec, null, false, 0, undefined),
      mojo.internal.StructField('mode', 12, 0, blink.mojom.RpModeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      mojo.internal.StructField('idp_get_params', 0, 0, mojo.internal.Array(blink.mojom.IdentityProviderGetParametersSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('requirement', 8, 0, blink.mojom.CredentialMediationRequirementSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_RequestToken_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_RequestToken_ResponseParams', [
      mojo.internal.StructField('status', 32, 0, blink.mojom.RequestTokenStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('selected_identity_provider_config_url', 16, 0, url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.ValueSpec, null, true, 0, undefined),
      mojo.internal.StructField('error', 24, 0, blink.mojom.TokenErrorSpec, null, true, 0, undefined),
      mojo.internal.StructField('is_auto_selected', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec, 'blink.mojom.FederatedAuthRequest_RequestUserInfo_Params', [
      mojo.internal.StructField('provider', 0, 0, blink.mojom.IdentityProviderConfigSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParams', [
      mojo.internal.StructField('status', 8, 0, blink.mojom.RequestUserInfoStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('user_info', 0, 0, mojo.internal.Array(blink.mojom.IdentityUserInfoSpec, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec, 'blink.mojom.FederatedAuthRequest_CancelTokenRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec, 'blink.mojom.FederatedAuthRequest_ResolveTokenRequest_Params', [
      mojo.internal.StructField('account_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.ValueSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec, 'blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('status', 16, 0, blink.mojom.IdpSigninStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.LoginStatusOptionsSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec, 'blink.mojom.FederatedAuthRequest_RegisterIdP_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.RegisterIdpStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec, 'blink.mojom.FederatedAuthRequest_UnregisterIdP_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('options', 0, 0, blink.mojom.IdentityCredentialDisconnectOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FederatedAuthRequest_Disconnect_ResponseParamsSpec, 'blink.mojom.FederatedAuthRequest_Disconnect_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.DisconnectStatusSpec, null, false, 0, undefined),
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
};

blink.mojom.FederatedAuthRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestToken(idp_get_params, requirement) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec,
      blink.mojom.FederatedAuthRequest_RequestToken_ResponseParamsSpec,
      [idp_get_params, requirement]);
  }

  requestUserInfo(provider) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec,
      blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParamsSpec,
      [provider]);
  }

  cancelTokenRequest() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec,
      null,
      []);
  }

  resolveTokenRequest(account_id, token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec,
      blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParamsSpec,
      [account_id, token]);
  }

  setIdpSigninStatus(origin, status, options) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec,
      blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParamsSpec,
      [origin, status, options]);
  }

  registerIdP(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec,
      blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParamsSpec,
      [url]);
  }

  unregisterIdP(url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec,
      blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParamsSpec,
      [url]);
  }

  closeModalDialogView() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec,
      null,
      []);
  }

  preventSilentAccess() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec,
      blink.mojom.FederatedAuthRequest_PreventSilentAccess_ResponseParamsSpec,
      []);
  }

  disconnect(options) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec,
      blink.mojom.FederatedAuthRequest_Disconnect_ResponseParamsSpec,
      [options]);
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

blink.mojom.FederatedAuthRequestPtr = blink.mojom.FederatedAuthRequestRemote;
blink.mojom.FederatedAuthRequestRequest = blink.mojom.FederatedAuthRequestPendingReceiver;

