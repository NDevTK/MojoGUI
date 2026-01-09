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
crosapi.mojom.AccountTypeSpec = { $: mojo.internal.Enum() };

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
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: InvalidGaiaCredentialsReason
crosapi.mojom.InvalidGaiaCredentialsReason = {
  kCredentialsRejectedByServer: 0,
  kCredentialsRejectedByClient: 1,
  kCredentialsMissing: 2,
};
crosapi.mojom.InvalidGaiaCredentialsReasonSpec = { $: mojo.internal.Enum() };

// Enum: ScopeLimitedUnrecoverableErrorReason
crosapi.mojom.ScopeLimitedUnrecoverableErrorReason = {
  kInvalidGrantRaptError: 0,
  kInvalidScope: 1,
  kRestrictedClient: 2,
  kAdminPolicyEnforced: 3,
  kRemoteConsentResolutionRequired: 4,
  kAccessDenied: 5,
};
crosapi.mojom.ScopeLimitedUnrecoverableErrorReasonSpec = { $: mojo.internal.Enum() };

// Enum: Status
crosapi.mojom.Status = {
  kSuccess: 0,
  kAlreadyInProgress: 1,
  kCancelledByUser: 2,
  kNetworkError: 3,
};
crosapi.mojom.StatusSpec = { $: mojo.internal.Enum() };

// Union: AccessTokenResult
crosapi.mojom.AccessTokenResultSpec = { $: mojo.internal.Union(
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
crosapi.mojom.AccountKeySpec = {
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
crosapi.mojom.AccountSpec = {
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
crosapi.mojom.GoogleServiceAuthErrorSpec = {
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
crosapi.mojom.AccountAdditionOptionsSpec = {
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
crosapi.mojom.AccountUpsertionResultSpec = {
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
crosapi.mojom.AccessTokenInfoSpec = {
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
crosapi.mojom.AccountManagerObserver = {};

crosapi.mojom.AccountManagerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.AccountManagerObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.AccountManagerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.AccountManagerObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.AccountManagerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.AccountManagerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTokenUpserted(account) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.AccountManagerObserver_OnTokenUpserted_ParamsSpec,
      null,
      [account]);
  }

  onAccountRemoved(account) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.AccountManagerObserver_OnAccountRemoved_ParamsSpec,
      null,
      [account]);
  }

  onAuthErrorChanged(account, error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.AccountManagerObserver_OnAuthErrorChanged_ParamsSpec,
      null,
      [account, error]);
  }

  onSigninDialogClosed() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.AccountManagerObserver_OnSigninDialogClosed_ParamsSpec,
      null,
      []);
  }

};

crosapi.mojom.AccountManagerObserver.getRemote = function() {
  let remote = new crosapi.mojom.AccountManagerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.AccountManagerObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnTokenUpserted
crosapi.mojom.AccountManagerObserver_OnTokenUpserted_ParamsSpec = {
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
crosapi.mojom.AccountManagerObserver_OnAccountRemoved_ParamsSpec = {
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
crosapi.mojom.AccountManagerObserver_OnAuthErrorChanged_ParamsSpec = {
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
crosapi.mojom.AccountManagerObserver_OnSigninDialogClosed_ParamsSpec = {
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
crosapi.mojom.AccountManagerObserverPtr = crosapi.mojom.AccountManagerObserverRemote;
crosapi.mojom.AccountManagerObserverRequest = crosapi.mojom.AccountManagerObserverPendingReceiver;


// Interface: AccountManager
crosapi.mojom.AccountManager = {};

crosapi.mojom.AccountManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.AccountManagerRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.AccountManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.AccountManagerPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.AccountManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.AccountManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isInitialized() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.AccountManager_IsInitialized_ParamsSpec,
      crosapi.mojom.AccountManager_IsInitialized_ResponseParamsSpec,
      []);
  }

  addObserver() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.AccountManager_AddObserver_ParamsSpec,
      crosapi.mojom.AccountManager_AddObserver_ResponseParamsSpec,
      []);
  }

  getAccounts() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.AccountManager_GetAccounts_ParamsSpec,
      crosapi.mojom.AccountManager_GetAccounts_ResponseParamsSpec,
      []);
  }

  showAddAccountDialog(add_account_options) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.AccountManager_ShowAddAccountDialog_ParamsSpec,
      crosapi.mojom.AccountManager_ShowAddAccountDialog_ResponseParamsSpec,
      [add_account_options]);
  }

  showReauthAccountDialog(email) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.AccountManager_ShowReauthAccountDialog_ParamsSpec,
      crosapi.mojom.AccountManager_ShowReauthAccountDialog_ResponseParamsSpec,
      [email]);
  }

  showManageAccountsSettings() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.AccountManager_ShowManageAccountsSettings_ParamsSpec,
      null,
      []);
  }

  getPersistentErrorForAccount(account) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ParamsSpec,
      crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParamsSpec,
      [account]);
  }

  createAccessTokenFetcher(account_key, oauth_consumer_name) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ParamsSpec,
      crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParamsSpec,
      [account_key, oauth_consumer_name]);
  }

  reportAuthError(account, error) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.AccountManager_ReportAuthError_ParamsSpec,
      null,
      [account, error]);
  }

};

crosapi.mojom.AccountManager.getRemote = function() {
  let remote = new crosapi.mojom.AccountManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.AccountManager',
    'context');
  return remote.$;
};

// ParamsSpec for IsInitialized
crosapi.mojom.AccountManager_IsInitialized_ParamsSpec = {
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

crosapi.mojom.AccountManager_IsInitialized_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_initialized', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddObserver
crosapi.mojom.AccountManager_AddObserver_ParamsSpec = {
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

crosapi.mojom.AccountManager_AddObserver_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAccounts
crosapi.mojom.AccountManager_GetAccounts_ParamsSpec = {
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

crosapi.mojom.AccountManager_GetAccounts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'accounts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.AccountSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowAddAccountDialog
crosapi.mojom.AccountManager_ShowAddAccountDialog_ParamsSpec = {
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

crosapi.mojom.AccountManager_ShowAddAccountDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountUpsertionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowReauthAccountDialog
crosapi.mojom.AccountManager_ShowReauthAccountDialog_ParamsSpec = {
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

crosapi.mojom.AccountManager_ShowReauthAccountDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccountUpsertionResultSpec, nullable: true, minVersion: 13 },
      ],
      versions: [{version: 13, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowManageAccountsSettings
crosapi.mojom.AccountManager_ShowManageAccountsSettings_ParamsSpec = {
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
crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ParamsSpec = {
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

crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.GoogleServiceAuthErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateAccessTokenFetcher
crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ParamsSpec = {
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

crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'access_token_fetcher', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAuthError
crosapi.mojom.AccountManager_ReportAuthError_ParamsSpec = {
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
crosapi.mojom.AccountManagerPtr = crosapi.mojom.AccountManagerRemote;
crosapi.mojom.AccountManagerRequest = crosapi.mojom.AccountManagerPendingReceiver;


// Interface: AccessTokenFetcher
crosapi.mojom.AccessTokenFetcher = {};

crosapi.mojom.AccessTokenFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.AccessTokenFetcherRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.AccessTokenFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.AccessTokenFetcherPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.AccessTokenFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.AccessTokenFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(scopes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.AccessTokenFetcher_Start_ParamsSpec,
      crosapi.mojom.AccessTokenFetcher_Start_ResponseParamsSpec,
      [scopes]);
  }

};

crosapi.mojom.AccessTokenFetcher.getRemote = function() {
  let remote = new crosapi.mojom.AccessTokenFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.AccessTokenFetcher',
    'context');
  return remote.$;
};

// ParamsSpec for Start
crosapi.mojom.AccessTokenFetcher_Start_ParamsSpec = {
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

crosapi.mojom.AccessTokenFetcher_Start_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.AccessTokenResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.AccessTokenFetcherPtr = crosapi.mojom.AccessTokenFetcherRemote;
crosapi.mojom.AccessTokenFetcherRequest = crosapi.mojom.AccessTokenFetcherPendingReceiver;

