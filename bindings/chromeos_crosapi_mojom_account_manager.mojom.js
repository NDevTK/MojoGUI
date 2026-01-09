// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/account_manager.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: AccountType
crosapi.mojom.AccountType = {
  kGaia: 0,
};

// Enum: State
crosapi.mojom.State = {
  kNone: 0,
  kInvalidGaiaCredentials: 1,
  kAccountNotFound: 2,
  kConnectionFailed: 3,
  kServiceUnavailable: 4,
  kRequestCanceled: 5,
  kUnexpectedServiceResponse: 6,
  kServiceError: 7,
};

// Enum: InvalidGaiaCredentialsReason
crosapi.mojom.InvalidGaiaCredentialsReason = {
  kCredentialsRejectedByServer: 0,
  kCredentialsRejectedByClient: 1,
  kCredentialsMissing: 2,
};

// Enum: ScopeLimitedUnrecoverableErrorReason
crosapi.mojom.ScopeLimitedUnrecoverableErrorReason = {
  kInvalidGrantRaptError: 0,
  kInvalidScope: 1,
  kRestrictedClient: 2,
  kAdminPolicyEnforced: 3,
  kRemoteConsentResolutionRequired: 4,
  kAccessDenied: 5,
};

// Enum: Status
crosapi.mojom.Status = {
  kSuccess: 0,
  kAlreadyInProgress: 1,
  kCancelledByUser: 2,
  kNetworkError: 3,
};

// Struct: AccountKey
crosapi.mojom.AccountKey = class {
  constructor(values = {}) {
    this.account_type@1 = values.account_type@1 !== undefined ? values.account_type@1 : "";
  }
};

// Struct: Account
crosapi.mojom.Account = class {
  constructor(values = {}) {
    this.key@0 = values.key@0 !== undefined ? values.key@0 : null;
    this.raw_email@1 = values.raw_email@1 !== undefined ? values.raw_email@1 : "";
  }
};

// Struct: GoogleServiceAuthError
crosapi.mojom.GoogleServiceAuthError = class {
  constructor(values = {}) {
    this.0 = values.0 !== undefined ? values.0 : null;
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
    this.3 = values.3 !== undefined ? values.3 : null;
    this.7 = values.7 !== undefined ? values.7 : null;
    this.9 = values.9 !== undefined ? values.9 : null;
    this.11 = values.11 !== undefined ? values.11 : null;
    this.12 = values.12 !== undefined ? values.12 : null;
    this.14 = values.14 !== undefined ? values.14 : null;
    this.15 = values.15 !== undefined ? values.15 : null;
  }
};

// Struct: AccountAdditionOptions
crosapi.mojom.AccountAdditionOptions = class {
  constructor(values = {}) {
    this.show_arc_availability_picker@1 = values.show_arc_availability_picker@1 !== undefined ? values.show_arc_availability_picker@1 : false;
  }
};

// Struct: AccountUpsertionResult
crosapi.mojom.AccountUpsertionResult = class {
  constructor(values = {}) {
    this.Ash = values.Ash !== undefined ? values.Ash : null;
    this.0 = values.0 !== undefined ? values.0 : null;
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
    this.3 = values.3 !== undefined ? values.3 : null;
    this.4 = values.4 !== undefined ? values.4 : null;
    this.5 = values.5 !== undefined ? values.5 : null;
  }
};

// Struct: AccessTokenInfo
crosapi.mojom.AccessTokenInfo = class {
  constructor(values = {}) {
    this.id_token@2 = values.id_token@2 !== undefined ? values.id_token@2 : "";
  }
};

// Interface: AccountManagerObserver
crosapi.mojom.AccountManagerObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.AccountManagerObserver';
  }

};

crosapi.mojom.AccountManagerObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AccountManager
crosapi.mojom.AccountManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.AccountManager';
  }

};

crosapi.mojom.AccountManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AccessTokenFetcher
crosapi.mojom.AccessTokenFetcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.AccessTokenFetcher';
  }

};

crosapi.mojom.AccessTokenFetcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
