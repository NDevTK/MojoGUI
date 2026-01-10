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
        'type': arc.mojom.CloudProvisionFlowErrorSpec.$,
        'nullable': false,
      },
      'general_error': {
        'ordinal': 1,
        'type': arc.mojom.GeneralSignInErrorSpec.$,
        'nullable': false,
      },
      'sign_in_error': {
        'ordinal': 2,
        'type': arc.mojom.GMSSignInErrorSpec.$,
        'nullable': false,
      },
      'check_in_error': {
        'ordinal': 3,
        'type': arc.mojom.GMSCheckInErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ArcSignInResult
mojo.internal.Union(
    arc.mojom.ArcSignInResultSpec, 'arc.mojom.ArcSignInResult', {
      'success': {
        'ordinal': 0,
        'type': arc.mojom.ArcSignInSuccessSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': arc.mojom.ArcSignInErrorSpec.$,
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
      mojo.internal.StructField('account_type', 8, 0, arc.mojom.ChromeAccountTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_managed', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('DEPRECATED_enrollment_token', 24, 0, mojo.internal.String, null, true, 6, undefined),
      mojo.internal.StructField('account_name', 32, 0, mojo.internal.String, null, true, 9, undefined),
    ],
    [[0, 32], [6, 40], [9, 48]]);

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
      mojo.internal.StructField('result', 0, 0, arc.mojom.ArcSignInResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('account', 8, 0, arc.mojom.ArcSignInAccountSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_ReportMetrics_ParamsSpec, 'arc.mojom.AuthHost_ReportMetrics_Params', [
      mojo.internal.StructField('metrics_type', 0, 0, arc.mojom.MetricsTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec, 'arc.mojom.AuthHost_ReportAccountCheckStatus_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.AccountCheckStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec, 'arc.mojom.AuthHost_ReportManagementChangeStatus_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.ManagementChangeStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec, 'arc.mojom.AuthHost_RequestPrimaryAccount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParamsSpec, 'arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParams', [
      mojo.internal.StructField('account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('account_type', 8, 0, arc.mojom.ChromeAccountTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec, 'arc.mojom.AuthHost_RequestPrimaryAccountInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParamsSpec, 'arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.ArcAuthCodeStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('account_info', 8, 0, arc.mojom.AccountInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec, 'arc.mojom.AuthHost_RequestAccountInfo_Params', [
      mojo.internal.StructField('account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthHost_RequestAccountInfo_ResponseParamsSpec, 'arc.mojom.AuthHost_RequestAccountInfo_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.ArcAuthCodeStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('account_info', 8, 0, arc.mojom.AccountInfoSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('reason', 0, 0, arc.mojom.ReauthReasonSpec.$, null, false, 0, undefined),
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

arc.mojom.AuthHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(19, 0); // Default ordinal 19 -> Index 0
    this.ordinalMap.set(8, 1); // Default ordinal 8 -> Index 1
    this.ordinalMap.set(9, 2); // Default ordinal 9 -> Index 2
    this.ordinalMap.set(11, 3); // Default ordinal 11 -> Index 3
    this.ordinalMap.set(18, 4); // Default ordinal 18 -> Index 4
    this.ordinalMap.set(12, 5); // Default ordinal 12 -> Index 5
    this.ordinalMap.set(13, 6); // Default ordinal 13 -> Index 6
    this.ordinalMap.set(14, 7); // Default ordinal 14 -> Index 7
    this.ordinalMap.set(15, 8); // Default ordinal 15 -> Index 8
    this.ordinalMap.set(16, 9); // Default ordinal 16 -> Index 9
    this.ordinalMap.set(17, 10); // Default ordinal 17 -> Index 10
    this.ordinalMap.set(20, 11); // Default ordinal 20 -> Index 11
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
        
        // Try Method 0: OnAuthorizationResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthHost_OnAuthorizationResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAuthorizationResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: ReportMetrics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthHost_ReportMetrics_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportMetrics (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: ReportAccountCheckStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAccountCheckStatus (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: ReportManagementChangeStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportManagementChangeStatus (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: RequestPrimaryAccount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPrimaryAccount (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: RequestPrimaryAccountInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPrimaryAccountInfo (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: RequestAccountInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAccountInfo (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: IsAccountManagerAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthHost_IsAccountManagerAvailable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsAccountManagerAvailable (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: HandleAddAccountRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthHost_HandleAddAccountRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleAddAccountRequest (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: HandleRemoveAccountRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthHost_HandleRemoveAccountRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleRemoveAccountRequest (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: HandleUpdateCredentialsRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthHost_HandleUpdateCredentialsRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleUpdateCredentialsRequest (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: ReportAccountReauthReason
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthHost_ReportAccountReauthReason_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAccountReauthReason (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(arc.mojom.AuthHost_OnAuthorizationResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAuthorizationResult');
          const result = this.impl.onAuthorizationResult(params.result, params.account);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthHost_ReportMetrics_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reportMetrics');
          const result = this.impl.reportMetrics(params.metrics_type, params.value);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reportAccountCheckStatus');
          const result = this.impl.reportAccountCheckStatus(params.status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reportManagementChangeStatus');
          const result = this.impl.reportManagementChangeStatus(params.status);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestPrimaryAccount');
          const result = this.impl.requestPrimaryAccount();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestPrimaryAccountInfo');
          const result = this.impl.requestPrimaryAccountInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestAccountInfo');
          const result = this.impl.requestAccountInfo(params.account_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AuthHost_RequestAccountInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthHost_IsAccountManagerAvailable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isAccountManagerAvailable');
          const result = this.impl.isAccountManagerAvailable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AuthHost_IsAccountManagerAvailable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthHost_HandleAddAccountRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.handleAddAccountRequest');
          const result = this.impl.handleAddAccountRequest();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthHost_HandleRemoveAccountRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.handleRemoveAccountRequest');
          const result = this.impl.handleRemoveAccountRequest(params.account_name);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthHost_HandleUpdateCredentialsRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.handleUpdateCredentialsRequest');
          const result = this.impl.handleUpdateCredentialsRequest(params.account_name);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthHost_ReportAccountReauthReason_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reportAccountReauthReason');
          const result = this.impl.reportAccountReauthReason(params.reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.AuthHostReceiver = arc.mojom.AuthHostReceiver;

arc.mojom.AuthHostPtr = arc.mojom.AuthHostRemote;
arc.mojom.AuthHostRequest = arc.mojom.AuthHostPendingReceiver;


// Interface: AuthInstance
mojo.internal.Struct(
    arc.mojom.AuthInstance_Init_ParamsSpec, 'arc.mojom.AuthInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AuthHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_Init_ResponseParamsSpec, 'arc.mojom.AuthInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec, 'arc.mojom.AuthInstance_OnAccountUpdated_Params', [
      mojo.internal.StructField('account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update_type', 8, 0, arc.mojom.AccountUpdateTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec, 'arc.mojom.AuthInstance_GetGoogleAccounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParamsSpec, 'arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParams', [
      mojo.internal.StructField('accounts', 0, 0, mojo.internal.Array(arc.mojom.ArcAccountInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec, 'arc.mojom.AuthInstance_GetMainAccountResolutionStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParamsSpec, 'arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.MainAccountResolutionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AuthInstance_SetAccounts_ParamsSpec, 'arc.mojom.AuthInstance_SetAccounts_Params', [
      mojo.internal.StructField('accounts', 0, 0, mojo.internal.Array(arc.mojom.ArcAccountInfoSpec.$, false), null, false, 0, undefined),
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

arc.mojom.AuthInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(2, 0); // Default ordinal 2 -> Index 0
    this.ordinalMap.set(3, 1); // Default ordinal 3 -> Index 1
    this.ordinalMap.set(4, 2); // Default ordinal 4 -> Index 2
    this.ordinalMap.set(5, 3); // Default ordinal 5 -> Index 3
    this.ordinalMap.set(6, 4); // Default ordinal 6 -> Index 4
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnAccountUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAccountUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: GetGoogleAccounts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGoogleAccounts (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: GetMainAccountResolutionStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMainAccountResolutionStatus (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: SetAccounts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.AuthInstance_SetAccounts_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAccounts (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(arc.mojom.AuthInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AuthInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAccountUpdated');
          const result = this.impl.onAccountUpdated(params.account_name, params.update_type);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getGoogleAccounts');
          const result = this.impl.getGoogleAccounts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getMainAccountResolutionStatus');
          const result = this.impl.getMainAccountResolutionStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.AuthInstance_SetAccounts_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAccounts');
          const result = this.impl.setAccounts(params.accounts);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.AuthInstanceReceiver = arc.mojom.AuthInstanceReceiver;

arc.mojom.AuthInstancePtr = arc.mojom.AuthInstanceRemote;
arc.mojom.AuthInstanceRequest = arc.mojom.AuthInstancePendingReceiver;

