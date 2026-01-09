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
  }
};

// Struct: Account
crosapi.mojom.Account = class {
  constructor(values = {}) {
  }
};

// Struct: GoogleServiceAuthError
crosapi.mojom.GoogleServiceAuthError = class {
  constructor(values = {}) {
  }
};

// Struct: AccountAdditionOptions
crosapi.mojom.AccountAdditionOptions = class {
  constructor(values = {}) {
  }
};

// Struct: AccountUpsertionResult
crosapi.mojom.AccountUpsertionResult = class {
  constructor(values = {}) {
    this.Ash = values.Ash !== undefined ? values.Ash : null;
  }
};

// Struct: AccessTokenInfo
crosapi.mojom.AccessTokenInfo = class {
  constructor(values = {}) {
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
