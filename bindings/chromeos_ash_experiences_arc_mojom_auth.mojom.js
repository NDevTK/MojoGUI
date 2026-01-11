// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/auth.mojom
 // Module: arc.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};

mojo.internal.bindings.arc.mojom.ArcAuthCodeStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.GeneralSignInErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.GMSCheckInErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.GMSSignInErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.CloudProvisionFlowErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.ArcSignInSuccessSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.AccountCheckStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.AndroidIdSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.ReauthReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.MainAccountResolutionStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.ManagementChangeStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.ChromeAccountTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.MetricsTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.AccountUpdateTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.ArcSignInErrorSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcSignInResultSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcSignInAccountSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AccountInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ArcAccountInfoSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost = {};
mojo.internal.bindings.arc.mojom.AuthHostSpec = { $ : {} };
mojo.internal.bindings.arc.mojom.AuthHost.$interfaceName = 'arc.mojom.AuthHost';
mojo.internal.bindings.arc.mojom.AuthHost_OnAuthorizationResult_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_ReportMetrics_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_RequestAccountInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_IsAccountManagerAvailable_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_IsAccountManagerAvailable_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_HandleAddAccountRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_HandleRemoveAccountRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_HandleUpdateCredentialsRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthHost_ReportAccountReauthReason_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthInstance = {};
mojo.internal.bindings.arc.mojom.AuthInstanceSpec = { $ : {} };
mojo.internal.bindings.arc.mojom.AuthInstance.$interfaceName = 'arc.mojom.AuthInstance';
mojo.internal.bindings.arc.mojom.AuthInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.AuthInstance_SetAccounts_ParamsSpec = { $: {} };

// Enum: ArcAuthCodeStatus
mojo.internal.bindings.arc.mojom.ArcAuthCodeStatus = {
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
};

// Enum: GeneralSignInError
mojo.internal.bindings.arc.mojom.GeneralSignInError = {
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
mojo.internal.bindings.arc.mojom.GMSCheckInError = {
  GMS_CHECK_IN_FAILED: 1,
  GMS_CHECK_IN_TIMEOUT: 2,
  GMS_CHECK_IN_INTERNAL_ERROR: 3,
};

// Enum: GMSSignInError
mojo.internal.bindings.arc.mojom.GMSSignInError = {
  GMS_SIGN_IN_NETWORK_ERROR: 1,
  GMS_SIGN_IN_SERVICE_UNAVAILABLE: 2,
  GMS_SIGN_IN_BAD_AUTHENTICATION: 3,
  GMS_SIGN_IN_FAILED: 4,
  GMS_SIGN_IN_TIMEOUT: 5,
  GMS_SIGN_IN_INTERNAL_ERROR: 6,
};

// Enum: CloudProvisionFlowError
mojo.internal.bindings.arc.mojom.CloudProvisionFlowError = {
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
mojo.internal.bindings.arc.mojom.ArcSignInSuccess = {
  MinVersion: -1,
  MinVersion: -1,
};

// Enum: AccountCheckStatus
mojo.internal.bindings.arc.mojom.AccountCheckStatus = {
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
};

// Enum: AndroidIdSource
mojo.internal.bindings.arc.mojom.AndroidIdSource = {
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
};

// Enum: ReauthReason
mojo.internal.bindings.arc.mojom.ReauthReason = {
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
};

// Enum: MainAccountResolutionStatus
mojo.internal.bindings.arc.mojom.MainAccountResolutionStatus = {
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
mojo.internal.bindings.arc.mojom.ManagementChangeStatus = {
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
  MinVersion: -1,
};

// Enum: ChromeAccountType
mojo.internal.bindings.arc.mojom.ChromeAccountType = {
  UNKNOWN: 0,
  USER_ACCOUNT: 1,
  ROBOT_ACCOUNT: 2,
  CHILD_ACCOUNT: 4,
  MinVersion: 4,
};

// Enum: MetricsType
mojo.internal.bindings.arc.mojom.MetricsType = {
  NETWORK_WAITING_TIME_MILLISECONDS: 0,
  CHECKIN_ATTEMPTS: 1,
  CHECKIN_TIME_MILLISECONDS: 2,
  SIGNIN_TIME_MILLISECONDS: 3,
  MinVersion: 3,
};

// Enum: AccountUpdateType
mojo.internal.bindings.arc.mojom.AccountUpdateType = {
  UPSERT: 0,
  REMOVAL: 1,
};

// Union: ArcSignInError
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.ArcSignInErrorSpec, 'arc.mojom.ArcSignInError', {
      'arg_cloud_provision_flow_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.arc.mojom.CloudProvisionFlowErrorSpec.$,
        'nullable': false,
      },
      'arg_general_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.arc.mojom.GeneralSignInErrorSpec.$,
        'nullable': false,
      },
      'arg_sign_in_error': {
        'ordinal': 2,
        'type': mojo.internal.bindings.arc.mojom.GMSSignInErrorSpec.$,
        'nullable': false,
      },
      'arg_check_in_error': {
        'ordinal': 3,
        'type': mojo.internal.bindings.arc.mojom.GMSCheckInErrorSpec.$,
        'nullable': false,
      },
    });

// Union: ArcSignInResult
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.ArcSignInResultSpec, 'arc.mojom.ArcSignInResult', {
      'arg_success': {
        'ordinal': 0,
        'type': mojo.internal.bindings.arc.mojom.ArcSignInSuccessSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.arc.mojom.ArcSignInErrorSpec.$,
        'nullable': true,
      },
    });

// Union: ArcSignInAccount
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.ArcSignInAccountSpec, 'arc.mojom.ArcSignInAccount', {
      'arg_initial_signin': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'arg_account_name': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': true,
      },
    });

// Struct: AccountInfo
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AccountInfoSpec, 'arc.mojom.AccountInfo', [
      mojo.internal.StructField('arg_auth_code', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_account_type', 8, 0, mojo.internal.bindings.arc.mojom.ChromeAccountTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_managed', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_DEPRECATED_enrollment_token', 24, 0, mojo.internal.String, null, true, 6, undefined),
      mojo.internal.StructField('arg_account_name', 32, 0, mojo.internal.String, null, true, 9, undefined),
    ],
    [[0, 32], [6, 40], [9, 48]]);

// Struct: ArcAccountInfo
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ArcAccountInfoSpec, 'arc.mojom.ArcAccountInfo', [
      mojo.internal.StructField('arg_email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_gaia_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: AuthHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_OnAuthorizationResult_ParamsSpec, 'arc.mojom.AuthHost_OnAuthorizationResult_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.ArcSignInResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_account', 8, 0, mojo.internal.bindings.arc.mojom.ArcSignInAccountSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_ReportMetrics_ParamsSpec, 'arc.mojom.AuthHost_ReportMetrics_Params', [
      mojo.internal.StructField('arg_metrics_type', 0, 0, mojo.internal.bindings.arc.mojom.MetricsTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec, 'arc.mojom.AuthHost_ReportAccountCheckStatus_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.AccountCheckStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec, 'arc.mojom.AuthHost_ReportManagementChangeStatus_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.ManagementChangeStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec, 'arc.mojom.AuthHost_RequestPrimaryAccount_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParamsSpec, 'arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParams', [
      mojo.internal.StructField('arg_account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_account_type', 8, 0, mojo.internal.bindings.arc.mojom.ChromeAccountTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec, 'arc.mojom.AuthHost_RequestPrimaryAccountInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParamsSpec, 'arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.ArcAuthCodeStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_account_info', 8, 0, mojo.internal.bindings.arc.mojom.AccountInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec, 'arc.mojom.AuthHost_RequestAccountInfo_Params', [
      mojo.internal.StructField('arg_account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_RequestAccountInfo_ResponseParamsSpec, 'arc.mojom.AuthHost_RequestAccountInfo_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.ArcAuthCodeStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_account_info', 8, 0, mojo.internal.bindings.arc.mojom.AccountInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_persistent_error', 16, 0, mojo.internal.Bool, false, false, 24, undefined),
    ],
    [[0, 24], [24, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_IsAccountManagerAvailable_ParamsSpec, 'arc.mojom.AuthHost_IsAccountManagerAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_IsAccountManagerAvailable_ResponseParamsSpec, 'arc.mojom.AuthHost_IsAccountManagerAvailable_ResponseParams', [
      mojo.internal.StructField('arg_is_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_HandleAddAccountRequest_ParamsSpec, 'arc.mojom.AuthHost_HandleAddAccountRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_HandleRemoveAccountRequest_ParamsSpec, 'arc.mojom.AuthHost_HandleRemoveAccountRequest_Params', [
      mojo.internal.StructField('arg_account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_HandleUpdateCredentialsRequest_ParamsSpec, 'arc.mojom.AuthHost_HandleUpdateCredentialsRequest_Params', [
      mojo.internal.StructField('arg_account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthHost_ReportAccountReauthReason_ParamsSpec, 'arc.mojom.AuthHost_ReportAccountReauthReason_Params', [
      mojo.internal.StructField('arg_reason', 0, 0, mojo.internal.bindings.arc.mojom.ReauthReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.AuthHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.AuthHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AuthHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.AuthHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.AuthHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAuthorizationResult(arg_result, arg_account) {
    return this.$.onAuthorizationResult(arg_result, arg_account);
  }
  reportMetrics(arg_metrics_type, arg_value) {
    return this.$.reportMetrics(arg_metrics_type, arg_value);
  }
  reportAccountCheckStatus(arg_status) {
    return this.$.reportAccountCheckStatus(arg_status);
  }
  reportManagementChangeStatus(arg_status) {
    return this.$.reportManagementChangeStatus(arg_status);
  }
  requestPrimaryAccount() {
    return this.$.requestPrimaryAccount();
  }
  requestPrimaryAccountInfo() {
    return this.$.requestPrimaryAccountInfo();
  }
  requestAccountInfo(arg_account_name) {
    return this.$.requestAccountInfo(arg_account_name);
  }
  isAccountManagerAvailable() {
    return this.$.isAccountManagerAvailable();
  }
  handleAddAccountRequest() {
    return this.$.handleAddAccountRequest();
  }
  handleRemoveAccountRequest(arg_account_name) {
    return this.$.handleRemoveAccountRequest(arg_account_name);
  }
  handleUpdateCredentialsRequest(arg_account_name) {
    return this.$.handleUpdateCredentialsRequest(arg_account_name);
  }
  reportAccountReauthReason(arg_reason) {
    return this.$.reportAccountReauthReason(arg_reason);
  }
};

mojo.internal.bindings.arc.mojom.AuthHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.AuthHost', [
      { explicit: 19 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 11 },
      { explicit: 18 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 20 },
    ]);
  }

  onAuthorizationResult(arg_result, arg_account) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthHost_OnAuthorizationResult_ParamsSpec,
      null,
      [arg_result, arg_account],
      false);
  }

  reportMetrics(arg_metrics_type, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthHost_ReportMetrics_ParamsSpec,
      null,
      [arg_metrics_type, arg_value],
      false);
  }

  reportAccountCheckStatus(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec,
      null,
      [arg_status],
      false);
  }

  reportManagementChangeStatus(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec,
      null,
      [arg_status],
      false);
  }

  requestPrimaryAccount() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParamsSpec,
      [],
      false);
  }

  requestPrimaryAccountInfo() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParamsSpec,
      [],
      false);
  }

  requestAccountInfo(arg_account_name) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AuthHost_RequestAccountInfo_ResponseParamsSpec,
      [arg_account_name],
      false);
  }

  isAccountManagerAvailable() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthHost_IsAccountManagerAvailable_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AuthHost_IsAccountManagerAvailable_ResponseParamsSpec,
      [],
      false);
  }

  handleAddAccountRequest() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthHost_HandleAddAccountRequest_ParamsSpec,
      null,
      [],
      false);
  }

  handleRemoveAccountRequest(arg_account_name) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthHost_HandleRemoveAccountRequest_ParamsSpec,
      null,
      [arg_account_name],
      false);
  }

  handleUpdateCredentialsRequest(arg_account_name) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthHost_HandleUpdateCredentialsRequest_ParamsSpec,
      null,
      [arg_account_name],
      false);
  }

  reportAccountReauthReason(arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthHost_ReportAccountReauthReason_ParamsSpec,
      null,
      [arg_reason],
      false);
  }

};

mojo.internal.bindings.arc.mojom.AuthHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.AuthHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AuthHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.AuthHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.AuthHost', [
      { explicit: 19 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 11 },
      { explicit: 18 },
      { explicit: 12 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
      { explicit: 17 },
      { explicit: 20 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnAuthorizationResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_OnAuthorizationResult_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAuthorizationResult (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReportMetrics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_ReportMetrics_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportMetrics (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReportAccountCheckStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAccountCheckStatus (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ReportManagementChangeStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportManagementChangeStatus (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RequestPrimaryAccount
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPrimaryAccount (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RequestPrimaryAccountInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestPrimaryAccountInfo (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RequestAccountInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestAccountInfo (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: IsAccountManagerAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_IsAccountManagerAvailable_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsAccountManagerAvailable (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: HandleAddAccountRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_HandleAddAccountRequest_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleAddAccountRequest (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: HandleRemoveAccountRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_HandleRemoveAccountRequest_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleRemoveAccountRequest (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: HandleUpdateCredentialsRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_HandleUpdateCredentialsRequest_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleUpdateCredentialsRequest (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ReportAccountReauthReason
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_ReportAccountReauthReason_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAccountReauthReason (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_OnAuthorizationResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAuthorizationResult');
          const result = this.impl.onAuthorizationResult(params.arg_result, params.arg_account);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_ReportMetrics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportMetrics');
          const result = this.impl.reportMetrics(params.arg_metrics_type, params.arg_value);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_ReportAccountCheckStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAccountCheckStatus');
          const result = this.impl.reportAccountCheckStatus(params.arg_status);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_ReportManagementChangeStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportManagementChangeStatus');
          const result = this.impl.reportManagementChangeStatus(params.arg_status);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccount_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPrimaryAccount');
          const result = this.impl.requestPrimaryAccount();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccount_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPrimaryAccount FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccountInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestPrimaryAccountInfo');
          const result = this.impl.requestPrimaryAccountInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AuthHost_RequestPrimaryAccountInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestPrimaryAccountInfo FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_RequestAccountInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestAccountInfo');
          const result = this.impl.requestAccountInfo(params.arg_account_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AuthHost_RequestAccountInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestAccountInfo FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_IsAccountManagerAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isAccountManagerAvailable');
          const result = this.impl.isAccountManagerAvailable();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AuthHost_IsAccountManagerAvailable_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsAccountManagerAvailable FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_HandleAddAccountRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleAddAccountRequest');
          const result = this.impl.handleAddAccountRequest();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_HandleRemoveAccountRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleRemoveAccountRequest');
          const result = this.impl.handleRemoveAccountRequest(params.arg_account_name);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_HandleUpdateCredentialsRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleUpdateCredentialsRequest');
          const result = this.impl.handleUpdateCredentialsRequest(params.arg_account_name);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthHost_ReportAccountReauthReason_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAccountReauthReason');
          const result = this.impl.reportAccountReauthReason(params.arg_reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.AuthHostReceiver = mojo.internal.bindings.arc.mojom.AuthHostReceiver;

mojo.internal.bindings.arc.mojom.AuthHostPtr = mojo.internal.bindings.arc.mojom.AuthHostRemote;
mojo.internal.bindings.arc.mojom.AuthHostRequest = mojo.internal.bindings.arc.mojom.AuthHostPendingReceiver;


// Interface: AuthInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthInstance_Init_ParamsSpec, 'arc.mojom.AuthInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.AuthHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthInstance_Init_ResponseParamsSpec, 'arc.mojom.AuthInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec, 'arc.mojom.AuthInstance_OnAccountUpdated_Params', [
      mojo.internal.StructField('arg_account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_update_type', 8, 0, mojo.internal.bindings.arc.mojom.AccountUpdateTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec, 'arc.mojom.AuthInstance_GetGoogleAccounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParamsSpec, 'arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParams', [
      mojo.internal.StructField('arg_accounts', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.ArcAccountInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec, 'arc.mojom.AuthInstance_GetMainAccountResolutionStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParamsSpec, 'arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.arc.mojom.MainAccountResolutionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.AuthInstance_SetAccounts_ParamsSpec, 'arc.mojom.AuthInstance_SetAccounts_Params', [
      mojo.internal.StructField('arg_accounts', 0, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.ArcAccountInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.AuthInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.AuthInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AuthInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.AuthInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.AuthInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
  onAccountUpdated(arg_account_name, arg_update_type) {
    return this.$.onAccountUpdated(arg_account_name, arg_update_type);
  }
  getGoogleAccounts() {
    return this.$.getGoogleAccounts();
  }
  getMainAccountResolutionStatus() {
    return this.$.getMainAccountResolutionStatus();
  }
  setAccounts(arg_accounts) {
    return this.$.setAccounts(arg_accounts);
  }
};

mojo.internal.bindings.arc.mojom.AuthInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('arc.mojom.AuthInstance', [
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AuthInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

  onAccountUpdated(arg_account_name, arg_update_type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec,
      null,
      [arg_account_name, arg_update_type],
      false);
  }

  getGoogleAccounts() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParamsSpec,
      [],
      false);
  }

  getMainAccountResolutionStatus() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec,
      mojo.internal.bindings.arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParamsSpec,
      [],
      false);
  }

  setAccounts(arg_accounts) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.AuthInstance_SetAccounts_ParamsSpec,
      null,
      [arg_accounts],
      false);
  }

};

mojo.internal.bindings.arc.mojom.AuthInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.AuthInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AuthInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.AuthInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('arc.mojom.AuthInstance', [
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthInstance_Init_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAccountUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAccountUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetGoogleAccounts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGoogleAccounts (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetMainAccountResolutionStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMainAccountResolutionStatus (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetAccounts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthInstance_SetAccounts_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAccounts (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AuthInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthInstance_OnAccountUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAccountUpdated');
          const result = this.impl.onAccountUpdated(params.arg_account_name, params.arg_update_type);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthInstance_GetGoogleAccounts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGoogleAccounts');
          const result = this.impl.getGoogleAccounts();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AuthInstance_GetGoogleAccounts_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetGoogleAccounts FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMainAccountResolutionStatus');
          const result = this.impl.getMainAccountResolutionStatus();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.AuthInstance_GetMainAccountResolutionStatus_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMainAccountResolutionStatus FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.AuthInstance_SetAccounts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAccounts');
          const result = this.impl.setAccounts(params.arg_accounts);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.AuthInstanceReceiver = mojo.internal.bindings.arc.mojom.AuthInstanceReceiver;

mojo.internal.bindings.arc.mojom.AuthInstancePtr = mojo.internal.bindings.arc.mojom.AuthInstanceRemote;
mojo.internal.bindings.arc.mojom.AuthInstanceRequest = mojo.internal.bindings.arc.mojom.AuthInstancePendingReceiver;

