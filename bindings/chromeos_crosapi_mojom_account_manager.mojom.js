// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/account_manager.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: AccountType
crosapi.mojom.AccountType = {
};

// Enum: State
crosapi.mojom.State = {
};

// Enum: InvalidGaiaCredentialsReason
crosapi.mojom.InvalidGaiaCredentialsReason = {
};

// Enum: ScopeLimitedUnrecoverableErrorReason
crosapi.mojom.ScopeLimitedUnrecoverableErrorReason = {
};

// Enum: Status
crosapi.mojom.Status = {
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
