// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/auth.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcAuthCodeStatus
arc.mojom.ArcAuthCodeStatus = {
};
arc.mojom.ArcAuthCodeStatusSpec = { $: mojo.internal.Enum() };

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
arc.mojom.GeneralSignInErrorSpec = { $: mojo.internal.Enum() };

// Enum: GMSCheckInError
arc.mojom.GMSCheckInError = {
  GMS_CHECK_IN_FAILED: 0,
  GMS_CHECK_IN_TIMEOUT: 1,
  GMS_CHECK_IN_INTERNAL_ERROR: 2,
};
arc.mojom.GMSCheckInErrorSpec = { $: mojo.internal.Enum() };

// Enum: GMSSignInError
arc.mojom.GMSSignInError = {
  GMS_SIGN_IN_NETWORK_ERROR: 0,
  GMS_SIGN_IN_SERVICE_UNAVAILABLE: 1,
  GMS_SIGN_IN_BAD_AUTHENTICATION: 2,
  GMS_SIGN_IN_FAILED: 3,
  GMS_SIGN_IN_TIMEOUT: 4,
  GMS_SIGN_IN_INTERNAL_ERROR: 5,
};
arc.mojom.GMSSignInErrorSpec = { $: mojo.internal.Enum() };

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
arc.mojom.CloudProvisionFlowErrorSpec = { $: mojo.internal.Enum() };

// Enum: ArcSignInSuccess
arc.mojom.ArcSignInSuccess = {
};
arc.mojom.ArcSignInSuccessSpec = { $: mojo.internal.Enum() };

// Enum: AccountCheckStatus
arc.mojom.AccountCheckStatus = {
};
arc.mojom.AccountCheckStatusSpec = { $: mojo.internal.Enum() };

// Enum: AndroidIdSource
arc.mojom.AndroidIdSource = {
};
arc.mojom.AndroidIdSourceSpec = { $: mojo.internal.Enum() };

// Enum: ReauthReason
arc.mojom.ReauthReason = {
};
arc.mojom.ReauthReasonSpec = { $: mojo.internal.Enum() };

// Enum: MainAccountResolutionStatus
arc.mojom.MainAccountResolutionStatus = {
};
arc.mojom.MainAccountResolutionStatusSpec = { $: mojo.internal.Enum() };

// Enum: ManagementChangeStatus
arc.mojom.ManagementChangeStatus = {
};
arc.mojom.ManagementChangeStatusSpec = { $: mojo.internal.Enum() };

// Enum: ChromeAccountType
arc.mojom.ChromeAccountType = {
  UNKNOWN: 0,
  USER_ACCOUNT: 1,
  ROBOT_ACCOUNT: 2,
  CHILD_ACCOUNT: 3,
};
arc.mojom.ChromeAccountTypeSpec = { $: mojo.internal.Enum() };

// Enum: MetricsType
arc.mojom.MetricsType = {
  NETWORK_WAITING_TIME_MILLISECONDS: 0,
  CHECKIN_ATTEMPTS: 1,
  CHECKIN_TIME_MILLISECONDS: 2,
  SIGNIN_TIME_MILLISECONDS: 3,
};
arc.mojom.MetricsTypeSpec = { $: mojo.internal.Enum() };

// Enum: AccountUpdateType
arc.mojom.AccountUpdateType = {
  UPSERT: 0,
  REMOVAL: 1,
};
arc.mojom.AccountUpdateTypeSpec = { $: mojo.internal.Enum() };

// Union: ArcSignInError
arc.mojom.ArcSignInErrorSpec = { $: mojo.internal.Union(
    'arc.mojom.ArcSignInError', {
      'cloud_provision_flow_error': {
        'ordinal': 0,
        'type': arc.mojom.CloudProvisionFlowErrorSpec,
      }},
      'general_error': {
        'ordinal': 1,
        'type': arc.mojom.GeneralSignInErrorSpec,
      }},
      'sign_in_error': {
        'ordinal': 2,
        'type': arc.mojom.GMSSignInErrorSpec,
      }},
      'check_in_error': {
        'ordinal': 3,
        'type': arc.mojom.GMSCheckInErrorSpec,
      }},
    })
};

// Union: ArcSignInResult
arc.mojom.ArcSignInResultSpec = { $: mojo.internal.Union(
    'arc.mojom.ArcSignInResult', {
      'success': {
        'ordinal': 0,
        'type': arc.mojom.ArcSignInSuccessSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': arc.mojom.ArcSignInErrorSpec,
        'nullable': true,
      }},
    })
};

// Union: ArcSignInAccount
arc.mojom.ArcSignInAccountSpec = { $: mojo.internal.Union(
    'arc.mojom.ArcSignInAccount', {
      'initial_signin': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'account_name': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': true,
      }},
    })
};

// Struct: AccountInfo
arc.mojom.AccountInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AccountInfo',
      packedSize: 40,
      fields: [
        { name: 'auth_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'account_type', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ChromeAccountTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_managed', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'DEPRECATED_enrollment_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 6 },
        { name: 'account_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 9 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 6, packedSize: 32}, {version: 9, packedSize: 40}]
    }
  }
};

// Struct: ArcAccountInfo
arc.mojom.ArcAccountInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcAccountInfo',
      packedSize: 24,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'gaia_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: AuthHost
arc.mojom.AuthHost = {};

arc.mojom.AuthHost_OnAuthorizationResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost_OnAuthorizationResult_Params',
      packedSize: 40,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcSignInResultSpec, nullable: false, minVersion: 0 },
        { name: 'account', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.ArcSignInAccountSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

arc.mojom.AuthHost_ReportMetrics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost_ReportMetrics_Params',
      packedSize: 16,
      fields: [
        { name: 'metrics_type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.MetricsTypeSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost_ReportAccountCheckStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AccountCheckStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost_ReportManagementChangeStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ManagementChangeStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost_RequestPrimaryAccount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost_RequestPrimaryAccountInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost_RequestAccountInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'account_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AuthHost_IsAccountManagerAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost_IsAccountManagerAvailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.AuthHost_HandleAddAccountRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost_HandleAddAccountRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.AuthHost_HandleRemoveAccountRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost_HandleRemoveAccountRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'account_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AuthHost_HandleUpdateCredentialsRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost_HandleUpdateCredentialsRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'account_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AuthHost_ReportAccountReauthReason_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost_ReportAccountReauthReason_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ReauthReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [result, account]);
  }

  reportMetrics(metrics_type, value) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.AuthHost_ReportMetrics_ParamsSpec,
      null,
      [metrics_type, value]);
  }

  reportAccountCheckStatus(status) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec,
      null,
      [status]);
  }

  reportManagementChangeStatus(status) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec,
      null,
      [status]);
  }

  requestPrimaryAccount() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec,
      arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParamsSpec,
      []);
  }

  requestPrimaryAccountInfo() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec,
      arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParamsSpec,
      []);
  }

  requestAccountInfo(account_name) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec,
      arc.mojom.AuthHost_RequestAccountInfo_ResponseParamsSpec,
      [account_name]);
  }

  isAccountManagerAvailable() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.AuthHost_IsAccountManagerAvailable_ParamsSpec,
      arc.mojom.AuthHost_IsAccountManagerAvailable_ResponseParamsSpec,
      []);
  }

  handleAddAccountRequest() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.AuthHost_HandleAddAccountRequest_ParamsSpec,
      null,
      []);
  }

  handleRemoveAccountRequest(account_name) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      arc.mojom.AuthHost_HandleRemoveAccountRequest_ParamsSpec,
      null,
      [account_name]);
  }

  handleUpdateCredentialsRequest(account_name) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      arc.mojom.AuthHost_HandleUpdateCredentialsRequest_ParamsSpec,
      null,
      [account_name]);
  }

  reportAccountReauthReason(reason) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      arc.mojom.AuthHost_ReportAccountReauthReason_ParamsSpec,
      null,
      [reason]);
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

// ParamsSpec for OnAuthorizationResult
arc.mojom.AuthHost_OnAuthorizationResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.OnAuthorizationResult_Params',
      packedSize: 40,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcSignInResultSpec, nullable: false, minVersion: 0 },
        { name: 'account', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.ArcSignInAccountSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for ReportMetrics
arc.mojom.AuthHost_ReportMetrics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.ReportMetrics_Params',
      packedSize: 16,
      fields: [
        { name: 'metrics_type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.MetricsTypeSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAccountCheckStatus
arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.ReportAccountCheckStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AccountCheckStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportManagementChangeStatus
arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.ReportManagementChangeStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ManagementChangeStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestPrimaryAccount
arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.RequestPrimaryAccount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.RequestPrimaryAccount_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'account_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'account_type', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ChromeAccountTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestPrimaryAccountInfo
arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.RequestPrimaryAccountInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.RequestPrimaryAccountInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ArcAuthCodeStatusSpec, nullable: false, minVersion: 0 },
        { name: 'account_info', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AccountInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestAccountInfo
arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.RequestAccountInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'account_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AuthHost_RequestAccountInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.RequestAccountInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ArcAuthCodeStatusSpec, nullable: false, minVersion: 0 },
        { name: 'account_info', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AccountInfoSpec, nullable: true, minVersion: 0 },
        { name: 'persistent_error', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 24 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 24, packedSize: 24}]
    }
  }
};

// ParamsSpec for IsAccountManagerAvailable
arc.mojom.AuthHost_IsAccountManagerAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.IsAccountManagerAvailable_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.AuthHost_IsAccountManagerAvailable_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.IsAccountManagerAvailable_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HandleAddAccountRequest
arc.mojom.AuthHost_HandleAddAccountRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.HandleAddAccountRequest_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for HandleRemoveAccountRequest
arc.mojom.AuthHost_HandleRemoveAccountRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.HandleRemoveAccountRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'account_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HandleUpdateCredentialsRequest
arc.mojom.AuthHost_HandleUpdateCredentialsRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.HandleUpdateCredentialsRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'account_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportAccountReauthReason
arc.mojom.AuthHost_ReportAccountReauthReason_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthHost.ReportAccountReauthReason_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ReauthReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.AuthHostPtr = arc.mojom.AuthHostRemote;
arc.mojom.AuthHostRequest = arc.mojom.AuthHostPendingReceiver;


// Interface: AuthInstance
arc.mojom.AuthInstance = {};

arc.mojom.AuthInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthInstance_Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.AuthHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthInstance_OnAccountUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'account_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'update_type', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.AccountUpdateTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthInstance_GetGoogleAccounts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthInstance_GetMainAccountResolutionStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.AuthInstance_SetAccounts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthInstance_SetAccounts_Params',
      packedSize: 16,
      fields: [
        { name: 'accounts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ArcAccountInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      null,
      [host_remote]);
  }

  onAccountUpdated(account_name, update_type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec,
      null,
      [account_name, update_type]);
  }

  getGoogleAccounts() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec,
      arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParamsSpec,
      []);
  }

  getMainAccountResolutionStatus() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec,
      arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParamsSpec,
      []);
  }

  setAccounts(accounts) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.AuthInstance_SetAccounts_ParamsSpec,
      null,
      [accounts]);
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

// ParamsSpec for Init
arc.mojom.AuthInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.AuthHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAccountUpdated
arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthInstance.OnAccountUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'account_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'update_type', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.AccountUpdateTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetGoogleAccounts
arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthInstance.GetGoogleAccounts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthInstance.GetGoogleAccounts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'accounts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ArcAccountInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMainAccountResolutionStatus
arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthInstance.GetMainAccountResolutionStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthInstance.GetMainAccountResolutionStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.MainAccountResolutionStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAccounts
arc.mojom.AuthInstance_SetAccounts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AuthInstance.SetAccounts_Params',
      packedSize: 16,
      fields: [
        { name: 'accounts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ArcAccountInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.AuthInstancePtr = arc.mojom.AuthInstanceRemote;
arc.mojom.AuthInstanceRequest = arc.mojom.AuthInstancePendingReceiver;

