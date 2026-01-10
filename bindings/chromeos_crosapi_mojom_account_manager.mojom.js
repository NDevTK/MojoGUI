// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/account_manager.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var mojo_base = mojo_base || {};

crosapi.mojom.AccountTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
crosapi.mojom.InvalidGaiaCredentialsReasonSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ScopeLimitedUnrecoverableErrorReasonSpec = { $: mojo.internal.Enum() };
crosapi.mojom.StatusSpec = { $: mojo.internal.Enum() };
crosapi.mojom.AccessTokenResultSpec = { $: {} };
crosapi.mojom.AccountKeySpec = { $: {} };
crosapi.mojom.AccountSpec = { $: {} };
crosapi.mojom.GoogleServiceAuthErrorSpec = { $: {} };
crosapi.mojom.AccountAdditionOptionsSpec = { $: {} };
crosapi.mojom.AccountUpsertionResultSpec = { $: {} };
crosapi.mojom.AccessTokenInfoSpec = { $: {} };
crosapi.mojom.AccountManagerObserver = {};
crosapi.mojom.AccountManagerObserver.$interfaceName = 'crosapi.mojom.AccountManagerObserver';
crosapi.mojom.AccountManagerObserver_OnTokenUpserted_ParamsSpec = { $: {} };
crosapi.mojom.AccountManagerObserver_OnAccountRemoved_ParamsSpec = { $: {} };
crosapi.mojom.AccountManagerObserver_OnAuthErrorChanged_ParamsSpec = { $: {} };
crosapi.mojom.AccountManagerObserver_OnSigninDialogClosed_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager = {};
crosapi.mojom.AccountManager.$interfaceName = 'crosapi.mojom.AccountManager';
crosapi.mojom.AccountManager_IsInitialized_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_IsInitialized_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_AddObserver_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_AddObserver_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_GetAccounts_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_GetAccounts_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_ShowAddAccountDialog_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_ShowAddAccountDialog_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_ShowReauthAccountDialog_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_ShowReauthAccountDialog_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_ShowManageAccountsSettings_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ParamsSpec = { $: {} };
crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParamsSpec = { $: {} };
crosapi.mojom.AccountManager_ReportAuthError_ParamsSpec = { $: {} };
crosapi.mojom.AccessTokenFetcher = {};
crosapi.mojom.AccessTokenFetcher.$interfaceName = 'crosapi.mojom.AccessTokenFetcher';
crosapi.mojom.AccessTokenFetcher_Start_ParamsSpec = { $: {} };
crosapi.mojom.AccessTokenFetcher_Start_ResponseParamsSpec = { $: {} };

// Enum: AccountType
crosapi.mojom.AccountType = {
  kUnspecified: 0,
  kGaia: 1,
};

// Enum: State
crosapi.mojom.State = {
  kNone: 0,
  kInvalidGaiaCredentials: 1,
  kAccountNotFound: 2,
  kConnectionFailed: 3,
  kServiceUnavailable: 7,
  kRequestCanceled: 9,
  kUnexpectedServiceResponse: 11,
  kServiceError: 12,
  MinVersion: 12,
  MinVersion: 12,
};

// Enum: InvalidGaiaCredentialsReason
crosapi.mojom.InvalidGaiaCredentialsReason = {
  kUnknown: 0,
  kCredentialsRejectedByServer: 1,
  kCredentialsRejectedByClient: 2,
  kCredentialsMissing: 3,
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
  kUnexpectedResponse: 4,
  MinVersion: 4,
};

// Union: AccessTokenResult
mojo.internal.Union(
    crosapi.mojom.AccessTokenResultSpec, 'crosapi.mojom.AccessTokenResult', {
      'access_token_info': {
        'ordinal': 0,
        'type': crosapi.mojom.AccessTokenInfoSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.GoogleServiceAuthErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: AccountKey
mojo.internal.Struct(
    crosapi.mojom.AccountKeySpec, 'crosapi.mojom.AccountKey', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('account_type', 8, 0, crosapi.mojom.AccountTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Account
mojo.internal.Struct(
    crosapi.mojom.AccountSpec, 'crosapi.mojom.Account', [
      mojo.internal.StructField('key', 0, 0, crosapi.mojom.AccountKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('raw_email', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GoogleServiceAuthError
mojo.internal.Struct(
    crosapi.mojom.GoogleServiceAuthErrorSpec, 'crosapi.mojom.GoogleServiceAuthError', [
      mojo.internal.StructField('kNone', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AccountAdditionOptions
mojo.internal.Struct(
    crosapi.mojom.AccountAdditionOptionsSpec, 'crosapi.mojom.AccountAdditionOptions', [
      mojo.internal.StructField('is_available_in_arc', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_arc_availability_picker', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AccountUpsertionResult
mojo.internal.Struct(
    crosapi.mojom.AccountUpsertionResultSpec, 'crosapi.mojom.AccountUpsertionResult', [
      mojo.internal.StructField('kSuccess', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AccessTokenInfo
mojo.internal.Struct(
    crosapi.mojom.AccessTokenInfoSpec, 'crosapi.mojom.AccessTokenInfo', [
      mojo.internal.StructField('access_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('expiration_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id_token', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: AccountManagerObserver
mojo.internal.Struct(
    crosapi.mojom.AccountManagerObserver_OnTokenUpserted_ParamsSpec, 'crosapi.mojom.AccountManagerObserver_OnTokenUpserted_Params', [
      mojo.internal.StructField('account', 0, 0, crosapi.mojom.AccountSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManagerObserver_OnAccountRemoved_ParamsSpec, 'crosapi.mojom.AccountManagerObserver_OnAccountRemoved_Params', [
      mojo.internal.StructField('account', 0, 0, crosapi.mojom.AccountSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManagerObserver_OnAuthErrorChanged_ParamsSpec, 'crosapi.mojom.AccountManagerObserver_OnAuthErrorChanged_Params', [
      mojo.internal.StructField('account', 0, 0, crosapi.mojom.AccountKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, crosapi.mojom.GoogleServiceAuthErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManagerObserver_OnSigninDialogClosed_ParamsSpec, 'crosapi.mojom.AccountManagerObserver_OnSigninDialogClosed_Params', [
    ],
    [[0, 8]]);

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
      [account],
      false);
  }

  onAccountRemoved(account) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.AccountManagerObserver_OnAccountRemoved_ParamsSpec,
      null,
      [account],
      false);
  }

  onAuthErrorChanged(account, error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.AccountManagerObserver_OnAuthErrorChanged_ParamsSpec,
      null,
      [account, error],
      false);
  }

  onSigninDialogClosed() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.AccountManagerObserver_OnSigninDialogClosed_ParamsSpec,
      null,
      [],
      false);
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

crosapi.mojom.AccountManagerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.AccountManagerObserver_OnTokenUpserted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTokenUpserted(params.account);
          break;
        }
        case 1: {
          const params = crosapi.mojom.AccountManagerObserver_OnAccountRemoved_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAccountRemoved(params.account);
          break;
        }
        case 2: {
          const params = crosapi.mojom.AccountManagerObserver_OnAuthErrorChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAuthErrorChanged(params.account, params.error);
          break;
        }
        case 3: {
          const params = crosapi.mojom.AccountManagerObserver_OnSigninDialogClosed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSigninDialogClosed();
          break;
        }
      }
    }});
  }
};

crosapi.mojom.AccountManagerObserverReceiver = crosapi.mojom.AccountManagerObserverReceiver;

crosapi.mojom.AccountManagerObserverPtr = crosapi.mojom.AccountManagerObserverRemote;
crosapi.mojom.AccountManagerObserverRequest = crosapi.mojom.AccountManagerObserverPendingReceiver;


// Interface: AccountManager
mojo.internal.Struct(
    crosapi.mojom.AccountManager_IsInitialized_ParamsSpec, 'crosapi.mojom.AccountManager_IsInitialized_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_IsInitialized_ResponseParamsSpec, 'crosapi.mojom.AccountManager_IsInitialized_ResponseParams', [
      mojo.internal.StructField('is_initialized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_AddObserver_ParamsSpec, 'crosapi.mojom.AccountManager_AddObserver_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_AddObserver_ResponseParamsSpec, 'crosapi.mojom.AccountManager_AddObserver_ResponseParams', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.AccountManagerObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_GetAccounts_ParamsSpec, 'crosapi.mojom.AccountManager_GetAccounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_GetAccounts_ResponseParamsSpec, 'crosapi.mojom.AccountManager_GetAccounts_ResponseParams', [
      mojo.internal.StructField('accounts', 0, 0, mojo.internal.Array(crosapi.mojom.AccountSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_ShowAddAccountDialog_ParamsSpec, 'crosapi.mojom.AccountManager_ShowAddAccountDialog_Params', [
      mojo.internal.StructField('add_account_options', 0, 0, crosapi.mojom.AccountAdditionOptionsSpec.$, null, true, 8, undefined),
    ],
    [[0, 8], [8, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_ShowAddAccountDialog_ResponseParamsSpec, 'crosapi.mojom.AccountManager_ShowAddAccountDialog_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.AccountUpsertionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_ShowReauthAccountDialog_ParamsSpec, 'crosapi.mojom.AccountManager_ShowReauthAccountDialog_Params', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_ShowReauthAccountDialog_ResponseParamsSpec, 'crosapi.mojom.AccountManager_ShowReauthAccountDialog_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.AccountUpsertionResultSpec.$, null, true, 13, undefined),
    ],
    [[0, 8], [13, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_ShowManageAccountsSettings_ParamsSpec, 'crosapi.mojom.AccountManager_ShowManageAccountsSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ParamsSpec, 'crosapi.mojom.AccountManager_GetPersistentErrorForAccount_Params', [
      mojo.internal.StructField('account', 0, 0, crosapi.mojom.AccountKeySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParamsSpec, 'crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, crosapi.mojom.GoogleServiceAuthErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ParamsSpec, 'crosapi.mojom.AccountManager_CreateAccessTokenFetcher_Params', [
      mojo.internal.StructField('account_key', 0, 0, crosapi.mojom.AccountKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('oauth_consumer_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParamsSpec, 'crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParams', [
      mojo.internal.StructField('access_token_fetcher', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.AccessTokenFetcherSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccountManager_ReportAuthError_ParamsSpec, 'crosapi.mojom.AccountManager_ReportAuthError_Params', [
      mojo.internal.StructField('account', 0, 0, crosapi.mojom.AccountKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, crosapi.mojom.GoogleServiceAuthErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [],
      false);
  }

  addObserver() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.AccountManager_AddObserver_ParamsSpec,
      crosapi.mojom.AccountManager_AddObserver_ResponseParamsSpec,
      [],
      false);
  }

  getAccounts() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.AccountManager_GetAccounts_ParamsSpec,
      crosapi.mojom.AccountManager_GetAccounts_ResponseParamsSpec,
      [],
      false);
  }

  showAddAccountDialog(add_account_options) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      crosapi.mojom.AccountManager_ShowAddAccountDialog_ParamsSpec,
      crosapi.mojom.AccountManager_ShowAddAccountDialog_ResponseParamsSpec,
      [add_account_options],
      false);
  }

  showReauthAccountDialog(email) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.AccountManager_ShowReauthAccountDialog_ParamsSpec,
      crosapi.mojom.AccountManager_ShowReauthAccountDialog_ResponseParamsSpec,
      [email],
      false);
  }

  showManageAccountsSettings() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      crosapi.mojom.AccountManager_ShowManageAccountsSettings_ParamsSpec,
      null,
      [],
      false);
  }

  getPersistentErrorForAccount(account) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ParamsSpec,
      crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParamsSpec,
      [account],
      false);
  }

  createAccessTokenFetcher(account_key, oauth_consumer_name) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ParamsSpec,
      crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParamsSpec,
      [account_key, oauth_consumer_name],
      false);
  }

  reportAuthError(account, error) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      crosapi.mojom.AccountManager_ReportAuthError_ParamsSpec,
      null,
      [account, error],
      false);
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

crosapi.mojom.AccountManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.AccountManager_IsInitialized_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isInitialized();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_IsInitialized_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = crosapi.mojom.AccountManager_AddObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addObserver();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_AddObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = crosapi.mojom.AccountManager_GetAccounts_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAccounts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_GetAccounts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = crosapi.mojom.AccountManager_ShowAddAccountDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showAddAccountDialog(params.add_account_options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_ShowAddAccountDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = crosapi.mojom.AccountManager_ShowReauthAccountDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showReauthAccountDialog(params.email);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_ShowReauthAccountDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = crosapi.mojom.AccountManager_ShowManageAccountsSettings_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showManageAccountsSettings();
          break;
        }
        case 6: {
          const params = crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPersistentErrorForAccount(params.account);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_GetPersistentErrorForAccount_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createAccessTokenFetcher(params.account_key, params.oauth_consumer_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccountManager_CreateAccessTokenFetcher_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = crosapi.mojom.AccountManager_ReportAuthError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportAuthError(params.account, params.error);
          break;
        }
      }
    }});
  }
};

crosapi.mojom.AccountManagerReceiver = crosapi.mojom.AccountManagerReceiver;

crosapi.mojom.AccountManagerPtr = crosapi.mojom.AccountManagerRemote;
crosapi.mojom.AccountManagerRequest = crosapi.mojom.AccountManagerPendingReceiver;


// Interface: AccessTokenFetcher
mojo.internal.Struct(
    crosapi.mojom.AccessTokenFetcher_Start_ParamsSpec, 'crosapi.mojom.AccessTokenFetcher_Start_Params', [
      mojo.internal.StructField('scopes', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.AccessTokenFetcher_Start_ResponseParamsSpec, 'crosapi.mojom.AccessTokenFetcher_Start_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.AccessTokenResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [scopes],
      false);
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

crosapi.mojom.AccessTokenFetcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.AccessTokenFetcher_Start_ParamsSpec.$.decode(message.payload);
          const result = this.impl.start(params.scopes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.AccessTokenFetcher_Start_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

crosapi.mojom.AccessTokenFetcherReceiver = crosapi.mojom.AccessTokenFetcherReceiver;

crosapi.mojom.AccessTokenFetcherPtr = crosapi.mojom.AccessTokenFetcherRemote;
crosapi.mojom.AccessTokenFetcherRequest = crosapi.mojom.AccessTokenFetcherPendingReceiver;

