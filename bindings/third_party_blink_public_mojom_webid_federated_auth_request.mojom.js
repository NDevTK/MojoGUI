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
blink.mojom.RequestTokenStatusSpec = { $: mojo.internal.Enum() };

// Enum: RequestUserInfoStatus
blink.mojom.RequestUserInfoStatus = {
  kSuccess: 0,
  kError: 1,
};
blink.mojom.RequestUserInfoStatusSpec = { $: mojo.internal.Enum() };

// Enum: DisconnectStatus
blink.mojom.DisconnectStatus = {
  kSuccess: 0,
  kErrorTooManyRequests: 1,
  kError: 2,
};
blink.mojom.DisconnectStatusSpec = { $: mojo.internal.Enum() };

// Enum: IdpSigninStatus
blink.mojom.IdpSigninStatus = {
  kSignedIn: 0,
  kSignedOut: 1,
};
blink.mojom.IdpSigninStatusSpec = { $: mojo.internal.Enum() };

// Enum: RpContext
blink.mojom.RpContext = {
  kSignIn: 0,
  kSignUp: 1,
  kUse: 2,
  kContinue: 3,
};
blink.mojom.RpContextSpec = { $: mojo.internal.Enum() };

// Enum: RpMode
blink.mojom.RpMode = {
  kActive: 0,
  kPassive: 1,
};
blink.mojom.RpModeSpec = { $: mojo.internal.Enum() };

// Enum: RegisterIdpStatus
blink.mojom.RegisterIdpStatus = {
  kSuccess: 0,
  kErrorFeatureDisabled: 1,
  kErrorCrossOriginConfig: 2,
  kErrorNoTransientActivation: 3,
  kErrorDeclined: 4,
  kErrorInvalidConfig: 5,
};
blink.mojom.RegisterIdpStatusSpec = { $: mojo.internal.Enum() };

// Enum: Format
blink.mojom.Format = {
  kSdJwt: 0,
};
blink.mojom.FormatSpec = { $: mojo.internal.Enum() };

// Struct: IdentityProviderConfig
blink.mojom.IdentityProviderConfigSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IdentityProviderConfig',
      packedSize: 40,
      fields: [
        { name: 'config_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'from_idp_registration_api', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'client_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IdentityProviderConfigSpec, nullable: false, minVersion: 0 },
        { name: 'nonce', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'login_hint', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'domain_hint', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'fields', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'params_json', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'format', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.FormatSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
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
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IdentityProviderConfigSpec, nullable: false, minVersion: 0 },
        { name: 'account_hint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'given_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'picture', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'email', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'given_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'picture', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
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
        { name: 'accounts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.LoginStatusAccountSpec, false), nullable: false, minVersion: 0 },
        { name: 'expiration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: IdentityProviderGetParameters
blink.mojom.IdentityProviderGetParametersSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IdentityProviderGetParameters',
      packedSize: 24,
      fields: [
        { name: 'providers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.IdentityProviderRequestOptionsSpec, false), nullable: false, minVersion: 0 },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.RpContextSpec, nullable: false, minVersion: 0 },
        { name: 'mode', packedOffset: 12, packedBitOffset: 0, type: blink.mojom.RpModeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'idp_get_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.IdentityProviderGetParametersSpec, false), nullable: false, minVersion: 0 },
        { name: 'requirement', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.CredentialMediationRequirementSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.FederatedAuthRequest_RequestToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RequestTokenStatusSpec, nullable: false, minVersion: 0 },
        { name: 'selected_identity_provider_config_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'token', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: true, minVersion: 0 },
        { name: 'error', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.TokenErrorSpec, nullable: true, minVersion: 0 },
        { name: 'is_auto_selected', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
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
        { name: 'provider', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IdentityProviderConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RequestUserInfoStatusSpec, nullable: false, minVersion: 0 },
        { name: 'user_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.IdentityUserInfoSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ResolveTokenRequest
blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequest.ResolveTokenRequest_Params',
      packedSize: 32,
      fields: [
        { name: 'account_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IdpSigninStatusSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.LoginStatusOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RegisterIdpStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IdentityCredentialDisconnectOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.FederatedAuthRequest_Disconnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DisconnectStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.FederatedAuthRequestPtr = blink.mojom.FederatedAuthRequestRemote;
blink.mojom.FederatedAuthRequestRequest = blink.mojom.FederatedAuthRequestPendingReceiver;

