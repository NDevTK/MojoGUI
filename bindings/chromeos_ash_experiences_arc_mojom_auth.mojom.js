// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/auth.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ArcAuthCodeStatusSpec = { $: mojo.internal.Enum() };
arc.mojom.GeneralSignInErrorSpec = { $: mojo.internal.Enum() };
arc.mojom.GMSCheckInErrorSpec = { $: mojo.internal.Enum() };
arc.mojom.GMSSignInErrorSpec = { $: mojo.internal.Enum() };
arc.mojom.CloudProvisionFlowErrorSpec = { $: mojo.internal.Enum() };
arc.mojom.ArcSignInSuccessSpec = { $: mojo.internal.Enum() };
arc.mojom.AccountCheckStatusSpec = { $: mojo.internal.Enum() };
arc.mojom.AndroidIdSourceSpec = { $: mojo.internal.Enum() };
arc.mojom.ReauthReasonSpec = { $: mojo.internal.Enum() };
arc.mojom.MainAccountResolutionStatusSpec = { $: mojo.internal.Enum() };
arc.mojom.ManagementChangeStatusSpec = { $: mojo.internal.Enum() };
arc.mojom.ChromeAccountTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.MetricsTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.AccountUpdateTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.ArcSignInErrorSpec = { $: {} };
arc.mojom.ArcSignInResultSpec = { $: {} };
arc.mojom.ArcSignInAccountSpec = { $: {} };
arc.mojom.AccountInfoSpec = { $: {} };
arc.mojom.ArcAccountInfoSpec = { $: {} };
arc.mojom.AuthHost = {};
arc.mojom.AuthHost.$interfaceName = 'arc.mojom.AuthHost';
arc.mojom.AuthHost_OnAuthorizationResult_ParamsSpec = { $: {} };
arc.mojom.AuthHost_ReportMetrics_ParamsSpec = { $: {} };
arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec = { $: {} };
arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec = { $: {} };
arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec = { $: {} };
arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParamsSpec = { $: {} };
arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec = { $: {} };
arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParamsSpec = { $: {} };
arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec = { $: {} };
arc.mojom.AuthHost_RequestAccountInfo_ResponseParamsSpec = { $: {} };
arc.mojom.AuthHost_IsAccountManagerAvailable_ParamsSpec = { $: {} };
arc.mojom.AuthHost_IsAccountManagerAvailable_ResponseParamsSpec = { $: {} };
arc.mojom.AuthHost_HandleAddAccountRequest_ParamsSpec = { $: {} };
arc.mojom.AuthHost_HandleRemoveAccountRequest_ParamsSpec = { $: {} };
arc.mojom.AuthHost_HandleUpdateCredentialsRequest_ParamsSpec = { $: {} };
arc.mojom.AuthHost_ReportAccountReauthReason_ParamsSpec = { $: {} };
arc.mojom.AuthInstance = {};
arc.mojom.AuthInstance.$interfaceName = 'arc.mojom.AuthInstance';
arc.mojom.AuthInstance_Init_ParamsSpec = { $: {} };
arc.mojom.AuthInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec = { $: {} };
arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec = { $: {} };
arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParamsSpec = { $: {} };
arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec = { $: {} };
arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParamsSpec = { $: {} };
arc.mojom.AuthInstance_SetAccounts_ParamsSpec = { $: {} };

// Enum: ArcAuthCodeStatus
arc.mojom.ArcAuthCodeStatus = {
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
};

// Enum: GeneralSignInError
arc.mojom.GeneralSignInError = {
  UNKNOWN_ERROR: 0,
  MOJO_VERSION_MISMATCH: 1,
  GENERIC_PROVISIONING_TIMEOUT: 2,
  NO_NETWORK_CONNECTION: 3,
  CHROME_SERVER_COMMUNICATION_ERROR: 4,
  ARC_DISABLED: 5,
  UNSUPPORTED_ACCOUNT_TYPE: 6,
  CHROME_ACCOUNT_NOT_FOUND: 7,
};

// Enum: GMSCheckInError
arc.mojom.GMSCheckInError = {
  GMS_CHECK_IN_FAILED: 1,
  GMS_CHECK_IN_TIMEOUT: 2,
  GMS_CHECK_IN_INTERNAL_ERROR: 3,
};

// Enum: GMSSignInError
arc.mojom.GMSSignInError = {
  GMS_SIGN_IN_NETWORK_ERROR: 1,
  GMS_SIGN_IN_SERVICE_UNAVAILABLE: 2,
  GMS_SIGN_IN_BAD_AUTHENTICATION: 3,
  GMS_SIGN_IN_FAILED: 4,
  GMS_SIGN_IN_TIMEOUT: 5,
  GMS_SIGN_IN_INTERNAL_ERROR: 6,
};

// Enum: CloudProvisionFlowError
arc.mojom.CloudProvisionFlowError = {
  ERROR_OTHER: 0,
  ERROR_ENROLLMENT_TOKEN_INVALID: 1,
  ERROR_DEVICE_QUOTA_EXCEEDED: 2,
  ERROR_SERVER_TRANSIENT_ERROR: 3,
  ERROR_ADD_ACCOUNT_FAILED: 4,
  ERROR_REQUEST_ANDROID_ID_FAILED: 5,
  ERROR_QUARANTINE: 6,
  ERROR_TIMEOUT: 7,
  ERROR_NETWORK_UNAVAILABLE: 8,
  ERROR_ENTERPRISE_INVALID: 9,
  ERROR_USER_CANCEL: 10,
  ERROR_NO_ACCOUNT_IN_WORK_PROFILE: 11,
  ERROR_INVALID_POLICY_STATE: 12,
  ERROR_DPC_SUPPORT: 13,
  ERROR_ACCOUNT_NOT_READY: 14,
  ERROR_CHECKIN_FAILED: 15,
  ERROR_ACCOUNT_NOT_ALLOWLISTED: 16,
  ERROR_JSON: 17,
  ERROR_MANAGED_PROVISIONING_FAILED: 18,
  ERROR_INVALID_SETUP_ACTION: 19,
  ERROR_SERVER: 20,
  ERROR_REMOVE_ACCOUNT_FAILED: 21,
  ERROR_OAUTH_TOKEN: 22,
  ERROR_ACCOUNT_OTHER: 23,
  ERROR_OAUTH_TOKEN_AUTHENTICATOR_EXCEPTION: 24,
  ERROR_OAUTH_TOKEN_IO_EXCEPTION: 25,
  ERROR_OAUTH_TOKEN_OPERATION_CANCELED_EXCEPTION: 26,
};

// Enum: ArcSignInSuccess
arc.mojom.ArcSignInSuccess = {
  MinVersion: -1,
  MinVersion: -1,
};

// Enum: AccountCheckStatus
arc.mojom.AccountCheckStatus = {
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
};

// Enum: AndroidIdSource
arc.mojom.AndroidIdSource = {
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
};

// Enum: ReauthReason
arc.mojom.ReauthReason = {
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
};

// Enum: MainAccountResolutionStatus
arc.mojom.MainAccountResolutionStatus = {
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
};

// Enum: ManagementChangeStatus
arc.mojom.ManagementChangeStatus = {
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
};

// Enum: ChromeAccountType
arc.mojom.ChromeAccountType = {
  UNKNOWN: 0,
  USER_ACCOUNT: 1,
  ROBOT_ACCOUNT: 2,
  CHILD_ACCOUNT: 4,
  MinVersion: 4,
};

// Enum: MetricsType
arc.mojom.MetricsType = {
  NETWORK_WAITING_TIME_MILLISECONDS: 0,
  CHECKIN_ATTEMPTS: 1,
  CHECKIN_TIME_MILLISECONDS: 2,
  SIGNIN_TIME_MILLISECONDS: 3,
  MinVersion: 3,
};

// Enum: AccountUpdateType
arc.mojom.AccountUpdateType = {
  UPSERT: 0,
  REMOVAL: 1,
};

// Union: ArcSignInError
mojo.internal.Union(
    arc.mojom.ArcSignInErrorSpec, 'arc.mojom.ArcSignInError', {
      'cloud_provision_flow_error': {
        'ordinal': 0,
        'type': arc.mojom.CloudProvisionFlowErrorSpec,
        'nullable': false,
      },
      'general_error': {
        'ordinal': 1,
        'type': arc.mojom.GeneralSignInErrorSpec,
        'nullable': false,
      },
      'sign_in_error': {
        'ordinal': 2,
        'type': arc.mojom.GMSSignInErrorSpec,
        'nullable': false,
      },
      'check_in_error': {
        'ordinal': 3,
        'type': arc.mojom.GMSCheckInErrorSpec,
        'nullable': false,
      },
    });

// Union: ArcSignInResult
mojo.internal.Union(
    arc.mojom.ArcSignInResultSpec, 'arc.mojom.ArcSignInResult', {
      'success': {
        'ordinal': 0,
        'type': arc.mojom.ArcSignInSuccessSpec,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': arc.mojom.ArcSignInErrorSpec,
        'nullable': true,
      },
    });

// Union: ArcSignInAccount
mojo.internal.Union(
    arc.mojom.ArcSignInAccountSpec, 'arc.mojom.ArcSignInAccount', {
      'initial_signin': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'account_name': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': true,
      },
    });

// Struct: AccountInfo
mojo.internal.Struct(
    arc.mojom.AccountInfoSpec, 'arc.mojom.AccountInfo', [
      mojo.internal.StructField('auth_code', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('account_type', 8, 0, arc.mojom.ChromeAccountTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_managed', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('DEPRECATED_enrollment_token', 16, 0, mojo.internal.String, null, true, 6, undefined),
      mojo.internal.StructField('account_name', 24, 0, mojo.internal.String, null, true, 9, undefined),
    ],
    [[0, 24], [6, 32], [9, 40]]);

// Struct: ArcAccountInfo
mojo.internal.Struct(
    arc.mojom.ArcAccountInfoSpec, 'arc.mojom.ArcAccountInfo', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gaia_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: AuthHost
mojo.internal.Struct(
    arc.mojom.AuthHost_OnAuthorizationResult_ParamsSpec, 'arc.mojom.AuthHost_OnAuthorizationResult_Params', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ArcSignInResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('account', 16, 0, arc.mojom.ArcSignInAccountSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_ReportMetrics_ParamsSpec, 'arc.mojom.AuthHost_ReportMetrics_Params', [
      mojo.internal.StructField('metrics_type', 0, 0, arc.mojom.MetricsTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('value', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec, 'arc.mojom.AuthHost_ReportAccountCheckStatus_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.AccountCheckStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec, 'arc.mojom.AuthHost_ReportManagementChangeStatus_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.ManagementChangeStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec, 'arc.mojom.AuthHost_RequestPrimaryAccount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParamsSpec, 'arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParams', [
      mojo.internal.StructField('account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('account_type', 8, 0, arc.mojom.ChromeAccountTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec, 'arc.mojom.AuthHost_RequestPrimaryAccountInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParamsSpec, 'arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.ArcAuthCodeStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('account_info', 8, 0, arc.mojom.AccountInfoSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec, 'arc.mojom.AuthHost_RequestAccountInfo_Params', [
      mojo.internal.StructField('account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_RequestAccountInfo_ResponseParamsSpec, 'arc.mojom.AuthHost_RequestAccountInfo_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.ArcAuthCodeStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('account_info', 8, 0, arc.mojom.AccountInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('persistent_error', 16, 0, mojo.internal.Bool, false, false, 24, undefined),
    ],
    [[0, 24], [24, 32]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_IsAccountManagerAvailable_ParamsSpec, 'arc.mojom.AuthHost_IsAccountManagerAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_IsAccountManagerAvailable_ResponseParamsSpec, 'arc.mojom.AuthHost_IsAccountManagerAvailable_ResponseParams', [
      mojo.internal.StructField('is_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_HandleAddAccountRequest_ParamsSpec, 'arc.mojom.AuthHost_HandleAddAccountRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_HandleRemoveAccountRequest_ParamsSpec, 'arc.mojom.AuthHost_HandleRemoveAccountRequest_Params', [
      mojo.internal.StructField('account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_HandleUpdateCredentialsRequest_ParamsSpec, 'arc.mojom.AuthHost_HandleUpdateCredentialsRequest_Params', [
      mojo.internal.StructField('account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_ReportAccountReauthReason_ParamsSpec, 'arc.mojom.AuthHost_ReportAccountReauthReason_Params', [
      mojo.internal.StructField('reason', 0, 0, arc.mojom.ReauthReasonSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.AuthHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AuthHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AuthHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AuthHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.AuthHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AuthHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAuthorizationResult(result, account) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      arc.mojom.AuthHost_OnAuthorizationResult_ParamsSpec,
      null,
      [result, account],
      false);
  }

  reportMetrics(metrics_type, value) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.AuthHost_ReportMetrics_ParamsSpec,
      null,
      [metrics_type, value],
      false);
  }

  reportAccountCheckStatus(status) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec,
      null,
      [status],
      false);
  }

  reportManagementChangeStatus(status) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec,
      null,
      [status],
      false);
  }

  requestPrimaryAccount() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec,
      arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParamsSpec,
      [],
      false);
  }

  requestPrimaryAccountInfo() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec,
      arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParamsSpec,
      [],
      false);
  }

  requestAccountInfo(account_name) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec,
      arc.mojom.AuthHost_RequestAccountInfo_ResponseParamsSpec,
      [account_name],
      false);
  }

  isAccountManagerAvailable() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.AuthHost_IsAccountManagerAvailable_ParamsSpec,
      arc.mojom.AuthHost_IsAccountManagerAvailable_ResponseParamsSpec,
      [],
      false);
  }

  handleAddAccountRequest() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.AuthHost_HandleAddAccountRequest_ParamsSpec,
      null,
      [],
      false);
  }

  handleRemoveAccountRequest(account_name) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.AuthHost_HandleRemoveAccountRequest_ParamsSpec,
      null,
      [account_name],
      false);
  }

  handleUpdateCredentialsRequest(account_name) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.AuthHost_HandleUpdateCredentialsRequest_ParamsSpec,
      null,
      [account_name],
      false);
  }

  reportAccountReauthReason(reason) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.AuthHost_ReportAccountReauthReason_ParamsSpec,
      null,
      [reason],
      false);
  }

};

arc.mojom.AuthHost.getRemote = function() {
  let remote = new arc.mojom.AuthHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AuthHost',
    'context');
  return remote.$;
};

arc.mojom.AuthHostPtr = arc.mojom.AuthHostRemote;
arc.mojom.AuthHostRequest = arc.mojom.AuthHostPendingReceiver;


// Interface: AuthInstance
mojo.internal.Struct(
    arc.mojom.AuthInstance_Init_ParamsSpec, 'arc.mojom.AuthInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AuthHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_Init_ResponseParamsSpec, 'arc.mojom.AuthInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec, 'arc.mojom.AuthInstance_OnAccountUpdated_Params', [
      mojo.internal.StructField('account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update_type', 8, 0, arc.mojom.AccountUpdateTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec, 'arc.mojom.AuthInstance_GetGoogleAccounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParamsSpec, 'arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParams', [
      mojo.internal.StructField('accounts', 0, 0, mojo.internal.Array(arc.mojom.ArcAccountInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec, 'arc.mojom.AuthInstance_GetMainAccountResolutionStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParamsSpec, 'arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.MainAccountResolutionStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_SetAccounts_ParamsSpec, 'arc.mojom.AuthInstance_SetAccounts_Params', [
      mojo.internal.StructField('accounts', 0, 0, mojo.internal.Array(arc.mojom.ArcAccountInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.AuthInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AuthInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AuthInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AuthInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.AuthInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AuthInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.AuthInstance_Init_ParamsSpec,
      arc.mojom.AuthInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  onAccountUpdated(account_name, update_type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec,
      null,
      [account_name, update_type],
      false);
  }

  getGoogleAccounts() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec,
      arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParamsSpec,
      [],
      false);
  }

  getMainAccountResolutionStatus() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec,
      arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParamsSpec,
      [],
      false);
  }

  setAccounts(accounts) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.AuthInstance_SetAccounts_ParamsSpec,
      null,
      [accounts],
      false);
  }

};

arc.mojom.AuthInstance.getRemote = function() {
  let remote = new arc.mojom.AuthInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AuthInstance',
    'context');
  return remote.$;
};

arc.mojom.AuthInstancePtr = arc.mojom.AuthInstanceRemote;
arc.mojom.AuthInstanceRequest = arc.mojom.AuthInstancePendingReceiver;

