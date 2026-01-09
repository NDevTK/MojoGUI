// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webid/federated_auth_request.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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
blink.mojom.IdentityProviderConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IdentityProviderConfig',
      packedSize: 40,
      fields: [
        { name: 'config_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'from_idp_registration_api', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IdentityProviderRequestOptions
blink.mojom.IdentityProviderRequestOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IdentityProviderRequestOptions',
      packedSize: 64,
      fields: [
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IdentityProviderConfigSpec, nullable: false },
        { name: 'nonce', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'login_hint', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'domain_hint', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'fields', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'params_json', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'format', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.FormatSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IdentityCredentialDisconnectOptions
blink.mojom.IdentityCredentialDisconnectOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IdentityCredentialDisconnectOptions',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IdentityProviderConfigSpec, nullable: false },
        { name: 'account_hint', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IdentityUserInfo
blink.mojom.IdentityUserInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IdentityUserInfo',
      packedSize: 40,
      fields: [
        { name: 'email', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'given_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'picture', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LoginStatusAccount
blink.mojom.LoginStatusAccountSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LoginStatusAccount',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'email', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'given_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'picture', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LoginStatusOptions
blink.mojom.LoginStatusOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LoginStatusOptions',
      packedSize: 24,
      fields: [
        { name: 'accounts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'expiration', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IdentityProviderGetParameters
blink.mojom.IdentityProviderGetParametersSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IdentityProviderGetParameters',
      packedSize: 32,
      fields: [
        { name: 'providers', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'context', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.RpContextSpec, nullable: false },
        { name: 'mode', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.RpModeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TokenError
blink.mojom.TokenErrorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.TokenError',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: FederatedAuthRequest
blink.mojom.FederatedAuthRequest = {};

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
      null,
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
      null,
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

// ParamsSpec for RequestToken
blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.RequestToken_Params',
      packedSize: 24,
      fields: [
        { name: 'idp_get_params', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'requirement', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.CredentialMediationRequirementSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FederatedAuthRequest_RequestToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.RequestToken_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.RequestTokenStatusSpec, nullable: false },
        { name: 'selected_identity_provider_config_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'token', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: true },
        { name: 'error', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.TokenErrorSpec, nullable: true },
        { name: 'is_auto_selected', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestUserInfo
blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.RequestUserInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'provider', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IdentityProviderConfigSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.RequestUserInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.RequestUserInfoStatusSpec, nullable: false },
        { name: 'user_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelTokenRequest
blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.CancelTokenRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ResolveTokenRequest
blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.ResolveTokenRequest_Params',
      packedSize: 24,
      fields: [
        { name: 'account_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'token', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.ResolveTokenRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetIdpSigninStatus
blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.SetIdpSigninStatus_Params',
      packedSize: 32,
      fields: [
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'status', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.IdpSigninStatusSpec, nullable: false },
        { name: 'options', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.LoginStatusOptionsSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterIdP
blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.RegisterIdP_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.RegisterIdP_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.RegisterIdpStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UnregisterIdP
blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.UnregisterIdP_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.UnregisterIdP_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseModalDialogView
blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.CloseModalDialogView_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PreventSilentAccess
blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.PreventSilentAccess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Disconnect
blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.Disconnect_Params',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IdentityCredentialDisconnectOptionsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FederatedAuthRequest_Disconnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.Disconnect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.DisconnectStatusSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FederatedAuthRequestPtr = blink.mojom.FederatedAuthRequestRemote;
blink.mojom.FederatedAuthRequestRequest = blink.mojom.FederatedAuthRequestPendingReceiver;

