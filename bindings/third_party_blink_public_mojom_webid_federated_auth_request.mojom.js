// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webid/federated_auth_request.mojom
// Module: blink.mojom

'use strict';

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
      [idp_get_params, requirement],
      false);
  }

  requestUserInfo(provider) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec,
      blink.mojom.FederatedAuthRequest_RequestUserInfo_ResponseParamsSpec,
      [provider],
      false);
  }

  cancelTokenRequest() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec,
      null,
      [],
      false);
  }

  resolveTokenRequest(account_id, token) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec,
      blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ResponseParamsSpec,
      [account_id, token],
      false);
  }

  setIdpSigninStatus(origin, status, options) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec,
      blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ResponseParamsSpec,
      [origin, status, options],
      false);
  }

  registerIdP(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec,
      blink.mojom.FederatedAuthRequest_RegisterIdP_ResponseParamsSpec,
      [url],
      false);
  }

  unregisterIdP(url) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec,
      blink.mojom.FederatedAuthRequest_UnregisterIdP_ResponseParamsSpec,
      [url],
      false);
  }

  closeModalDialogView() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec,
      null,
      [],
      false);
  }

  preventSilentAccess() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec,
      blink.mojom.FederatedAuthRequest_PreventSilentAccess_ResponseParamsSpec,
      [],
      false);
  }

  disconnect(options) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RequestToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(blink.mojom.FederatedAuthRequest_RequestToken_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(blink.mojom.FederatedAuthRequest_RequestUserInfo_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(blink.mojom.FederatedAuthRequest_CancelTokenRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelTokenRequest');
          const result = this.impl.cancelTokenRequest();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FederatedAuthRequest_ResolveTokenRequest_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(blink.mojom.FederatedAuthRequest_SetIdpSigninStatus_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(blink.mojom.FederatedAuthRequest_RegisterIdP_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(blink.mojom.FederatedAuthRequest_UnregisterIdP_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(blink.mojom.FederatedAuthRequest_CloseModalDialogView_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeModalDialogView');
          const result = this.impl.closeModalDialogView();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FederatedAuthRequest_PreventSilentAccess_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(blink.mojom.FederatedAuthRequest_Disconnect_ParamsSpec.$, message.header.headerSize);
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

