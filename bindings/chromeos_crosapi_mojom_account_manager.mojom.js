// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/account_manager.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: AccountType
crosapi.mojom.mojom.AccountType = {
  kGaia: 0,
};
crosapi.mojom.mojom.AccountTypeSpec = { $: mojo.internal.Enum() };

// Enum: State
crosapi.mojom.mojom.State = {
  kNone: 0,
  kInvalidGaiaCredentials: 1,
  kAccountNotFound: 2,
  kConnectionFailed: 3,
  kServiceUnavailable: 4,
  kRequestCanceled: 5,
  kUnexpectedServiceResponse: 6,
  kServiceError: 7,
};
crosapi.mojom.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: InvalidGaiaCredentialsReason
crosapi.mojom.mojom.InvalidGaiaCredentialsReason = {
  kCredentialsRejectedByServer: 0,
  kCredentialsRejectedByClient: 1,
  kCredentialsMissing: 2,
};
crosapi.mojom.mojom.InvalidGaiaCredentialsReasonSpec = { $: mojo.internal.Enum() };

// Enum: ScopeLimitedUnrecoverableErrorReason
crosapi.mojom.mojom.ScopeLimitedUnrecoverableErrorReason = {
  kInvalidGrantRaptError: 0,
  kInvalidScope: 1,
  kRestrictedClient: 2,
  kAdminPolicyEnforced: 3,
  kRemoteConsentResolutionRequired: 4,
  kAccessDenied: 5,
};
crosapi.mojom.mojom.ScopeLimitedUnrecoverableErrorReasonSpec = { $: mojo.internal.Enum() };

// Enum: Status
crosapi.mojom.mojom.Status = {
  kSuccess: 0,
  kAlreadyInProgress: 1,
  kCancelledByUser: 2,
  kNetworkError: 3,
};
crosapi.mojom.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Union: AccessTokenResult
crosapi.mojom.mojom.AccessTokenResultSpec = { $: mojo.internal.Union(
    'crosapi.mojom.AccessTokenResult', {
      'access_token_info': {
        'ordinal': 0,
        'type': crosapi.mojom.AccessTokenInfoSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.GoogleServiceAuthErrorSpec,
      }},
    })
};

// Struct: AccountKey
crosapi.mojom.mojom.AccountKeySpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountKey',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'account_type', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.AccountTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Account
crosapi.mojom.mojom.AccountSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Account',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountKeySpec, nullable: false, minVersion: 0 },
        { name: 'raw_email', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: GoogleServiceAuthError
crosapi.mojom.mojom.GoogleServiceAuthErrorSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.GoogleServiceAuthError',
      packedSize: 16,
      fields: [
        { name: 'kNone', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AccountAdditionOptions
crosapi.mojom.mojom.AccountAdditionOptionsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountAdditionOptions',
      packedSize: 16,
      fields: [
        { name: 'is_available_in_arc', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_arc_availability_picker', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AccountUpsertionResult
crosapi.mojom.mojom.AccountUpsertionResultSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountUpsertionResult',
      packedSize: 16,
      fields: [
        { name: 'kSuccess', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AccessTokenInfo
crosapi.mojom.mojom.AccessTokenInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccessTokenInfo',
      packedSize: 32,
      fields: [
        { name: 'access_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'expiration_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'id_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: AccountManagerObserver
crosapi.mojom.mojom.AccountManagerObserver = {};

crosapi.mojom.mojom.AccountManagerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.AccountManagerObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.AccountManagerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.AccountManagerObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.AccountManagerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.AccountManagerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTokenUpserted(account) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.AccountManagerObserver_OnTokenUpserted_ParamsSpec,
      null,
      [account]);
  }

  onAccountRemoved(account) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.mojom.AccountManagerObserver_OnAccountRemoved_ParamsSpec,
      null,
      [account]);
  }

  onAuthErrorChanged(account, error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.mojom.AccountManagerObserver_OnAuthErrorChanged_ParamsSpec,
      null,
      [account, error]);
  }

  onSigninDialogClosed() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.mojom.AccountManagerObserver_OnSigninDialogClosed_ParamsSpec,
      null,
      []);
  }

};

crosapi.mojom.mojom.AccountManagerObserver.getRemote = function() {
  let remote = new crosapi.mojom.mojom.AccountManagerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.AccountManagerObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnTokenUpserted
crosapi.mojom.mojom.AccountManagerObserver_OnTokenUpserted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManagerObserver.OnTokenUpserted_Params',
      packedSize: 16,
      fields: [
        { name: 'account', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAccountRemoved
crosapi.mojom.mojom.AccountManagerObserver_OnAccountRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManagerObserver.OnAccountRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'account', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAuthErrorChanged
crosapi.mojom.mojom.AccountManagerObserver_OnAuthErrorChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManagerObserver.OnAuthErrorChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'account', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountKeySpec, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.GoogleServiceAuthErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnSigninDialogClosed
crosapi.mojom.mojom.AccountManagerObserver_OnSigninDialogClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManagerObserver.OnSigninDialogClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.AccountManagerObserverPtr = crosapi.mojom.mojom.AccountManagerObserverRemote;
crosapi.mojom.mojom.AccountManagerObserverRequest = crosapi.mojom.mojom.AccountManagerObserverPendingReceiver;


// Interface: AccountManager
crosapi.mojom.mojom.AccountManager = {};

crosapi.mojom.mojom.AccountManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.AccountManagerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.AccountManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.AccountManagerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.AccountManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.AccountManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isInitialized() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.AccountManager_IsInitialized_ParamsSpec,
      crosapi.mojom.mojom.AccountManager_IsInitialized_ResponseParamsSpec,
      []);
  }

  addObserver() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.mojom.AccountManager_AddObserver_ParamsSpec,
      crosapi.mojom.mojom.AccountManager_AddObserver_ResponseParamsSpec,
      []);
  }

  getAccounts() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.mojom.AccountManager_GetAccounts_ParamsSpec,
      crosapi.mojom.mojom.AccountManager_GetAccounts_ResponseParamsSpec,
      []);
  }

  showAddAccountDialog(add_account_options) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.mojom.AccountManager_ShowAddAccountDialog_ParamsSpec,
      crosapi.mojom.mojom.AccountManager_ShowAddAccountDialog_ResponseParamsSpec,
      [add_account_options]);
  }

  showReauthAccountDialog(email) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.mojom.AccountManager_ShowReauthAccountDialog_ParamsSpec,
      crosapi.mojom.mojom.AccountManager_ShowReauthAccountDialog_ResponseParamsSpec,
      [email]);
  }

  showManageAccountsSettings() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.mojom.AccountManager_ShowManageAccountsSettings_ParamsSpec,
      null,
      []);
  }

  getPersistentErrorForAccount(account) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.mojom.AccountManager_GetPersistentErrorForAccount_ParamsSpec,
      crosapi.mojom.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParamsSpec,
      [account]);
  }

  createAccessTokenFetcher(account_key, oauth_consumer_name) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.mojom.AccountManager_CreateAccessTokenFetcher_ParamsSpec,
      crosapi.mojom.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParamsSpec,
      [account_key, oauth_consumer_name]);
  }

  reportAuthError(account, error) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.mojom.AccountManager_ReportAuthError_ParamsSpec,
      null,
      [account, error]);
  }

};

crosapi.mojom.mojom.AccountManager.getRemote = function() {
  let remote = new crosapi.mojom.mojom.AccountManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.AccountManager',
    'context');
  return remote.$;
};

// ParamsSpec for IsInitialized
crosapi.mojom.mojom.AccountManager_IsInitialized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.IsInitialized_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.mojom.AccountManager_IsInitialized_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.IsInitialized_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_initialized', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddObserver
crosapi.mojom.mojom.AccountManager_AddObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.AddObserver_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.mojom.AccountManager_AddObserver_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.AddObserver_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAccounts
crosapi.mojom.mojom.AccountManager_GetAccounts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.GetAccounts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.mojom.AccountManager_GetAccounts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.GetAccounts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'accounts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.AccountSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowAddAccountDialog
crosapi.mojom.mojom.AccountManager_ShowAddAccountDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.ShowAddAccountDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'add_account_options', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountAdditionOptionsSpec, nullable: true, minVersion: 8 },
      ],
      versions: [{version: 8, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.AccountManager_ShowAddAccountDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.ShowAddAccountDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountUpsertionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowReauthAccountDialog
crosapi.mojom.mojom.AccountManager_ShowReauthAccountDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.ShowReauthAccountDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.AccountManager_ShowReauthAccountDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.ShowReauthAccountDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountUpsertionResultSpec, nullable: true, minVersion: 13 },
      ],
      versions: [{version: 13, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowManageAccountsSettings
crosapi.mojom.mojom.AccountManager_ShowManageAccountsSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.ShowManageAccountsSettings_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetPersistentErrorForAccount
crosapi.mojom.mojom.AccountManager_GetPersistentErrorForAccount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.GetPersistentErrorForAccount_Params',
      packedSize: 16,
      fields: [
        { name: 'account', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountKeySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.GetPersistentErrorForAccount_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.GoogleServiceAuthErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateAccessTokenFetcher
crosapi.mojom.mojom.AccountManager_CreateAccessTokenFetcher_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.CreateAccessTokenFetcher_Params',
      packedSize: 24,
      fields: [
        { name: 'account_key', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountKeySpec, nullable: false, minVersion: 0 },
        { name: 'oauth_consumer_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

crosapi.mojom.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.CreateAccessTokenFetcher_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'access_token_fetcher', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAuthError
crosapi.mojom.mojom.AccountManager_ReportAuthError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccountManager.ReportAuthError_Params',
      packedSize: 24,
      fields: [
        { name: 'account', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountKeySpec, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: crosapi.mojom.GoogleServiceAuthErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.AccountManagerPtr = crosapi.mojom.mojom.AccountManagerRemote;
crosapi.mojom.mojom.AccountManagerRequest = crosapi.mojom.mojom.AccountManagerPendingReceiver;


// Interface: AccessTokenFetcher
crosapi.mojom.mojom.AccessTokenFetcher = {};

crosapi.mojom.mojom.AccessTokenFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.AccessTokenFetcherRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.AccessTokenFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.AccessTokenFetcherPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.AccessTokenFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.AccessTokenFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(scopes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.AccessTokenFetcher_Start_ParamsSpec,
      crosapi.mojom.mojom.AccessTokenFetcher_Start_ResponseParamsSpec,
      [scopes]);
  }

};

crosapi.mojom.mojom.AccessTokenFetcher.getRemote = function() {
  let remote = new crosapi.mojom.mojom.AccessTokenFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.AccessTokenFetcher',
    'context');
  return remote.$;
};

// ParamsSpec for Start
crosapi.mojom.mojom.AccessTokenFetcher_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccessTokenFetcher.Start_Params',
      packedSize: 16,
      fields: [
        { name: 'scopes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.AccessTokenFetcher_Start_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.AccessTokenFetcher.Start_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccessTokenResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.AccessTokenFetcherPtr = crosapi.mojom.mojom.AccessTokenFetcherRemote;
crosapi.mojom.mojom.AccessTokenFetcherRequest = crosapi.mojom.mojom.AccessTokenFetcherPendingReceiver;

