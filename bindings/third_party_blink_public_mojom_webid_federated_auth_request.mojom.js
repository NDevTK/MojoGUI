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
blink.mojom.IdentityProviderConfig = class {
  constructor(values = {}) {
    this.from_idp_registration_api = values.from_idp_registration_api !== undefined ? values.from_idp_registration_api : false;
    this.client_id = values.client_id !== undefined ? values.client_id : "";
  }
};

// Struct: IdentityProviderRequestOptions
blink.mojom.IdentityProviderRequestOptions = class {
  constructor(values = {}) {
    this.nonce = values.nonce !== undefined ? values.nonce : "";
    this.login_hint = values.login_hint !== undefined ? values.login_hint : "";
    this.domain_hint = values.domain_hint !== undefined ? values.domain_hint : "";
    this.params_json = values.params_json !== undefined ? values.params_json : "";
    this.format = values.format !== undefined ? values.format : null;
  }
};

// Struct: IdentityCredentialDisconnectOptions
blink.mojom.IdentityCredentialDisconnectOptions = class {
  constructor(values = {}) {
    this.account_hint = values.account_hint !== undefined ? values.account_hint : "";
  }
};

// Struct: IdentityUserInfo
blink.mojom.IdentityUserInfo = class {
  constructor(values = {}) {
    this.picture = values.picture !== undefined ? values.picture : "";
  }
};

// Struct: LoginStatusAccount
blink.mojom.LoginStatusAccount = class {
  constructor(values = {}) {
    this.picture = values.picture !== undefined ? values.picture : "";
  }
};

// Struct: LoginStatusOptions
blink.mojom.LoginStatusOptions = class {
  constructor(values = {}) {
    this.expiration = values.expiration !== undefined ? values.expiration : [];
  }
};

// Struct: IdentityProviderGetParameters
blink.mojom.IdentityProviderGetParameters = class {
  constructor(values = {}) {
    this.context = values.context !== undefined ? values.context : [];
    this.the = values.the !== undefined ? values.the : null;
    this.mode = values.mode !== undefined ? values.mode : null;
  }
};

// Struct: TokenError
blink.mojom.TokenError = class {
  constructor(values = {}) {
    this.url = values.url !== undefined ? values.url : "";
  }
};

// Interface: FederatedAuthRequest
blink.mojom.FederatedAuthRequestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FederatedAuthRequest';
  }

  requestToken(idp_get_params, requirement) {
    // Method: RequestToken
    return new Promise((resolve) => {
      // Call: RequestToken(idp_get_params, requirement)
      resolve({});
    });
  }

  requestUserInfo(provider) {
    // Method: RequestUserInfo
    return new Promise((resolve) => {
      // Call: RequestUserInfo(provider)
      resolve({});
    });
  }

  cancelTokenRequest() {
    // Method: CancelTokenRequest
    // Call: CancelTokenRequest()
  }

  resolveTokenRequest(account_id, token) {
    // Method: ResolveTokenRequest
    return new Promise((resolve) => {
      // Call: ResolveTokenRequest(account_id, token)
      resolve({});
    });
  }

  setIdpSigninStatus(origin, status, options) {
    // Method: SetIdpSigninStatus
    // Call: SetIdpSigninStatus(origin, status, options)
  }

  registerIdP(url) {
    // Method: RegisterIdP
    return new Promise((resolve) => {
      // Call: RegisterIdP(url)
      resolve({});
    });
  }

  unregisterIdP(url) {
    // Method: UnregisterIdP
    return new Promise((resolve) => {
      // Call: UnregisterIdP(url)
      resolve({});
    });
  }

  closeModalDialogView() {
    // Method: CloseModalDialogView
    // Call: CloseModalDialogView()
  }

  preventSilentAccess() {
    // Method: PreventSilentAccess
    // Call: PreventSilentAccess()
  }

  disconnect(options) {
    // Method: Disconnect
    return new Promise((resolve) => {
      // Call: Disconnect(options)
      resolve({});
    });
  }

};

blink.mojom.FederatedAuthRequestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
