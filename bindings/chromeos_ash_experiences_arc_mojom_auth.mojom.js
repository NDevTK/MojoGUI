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
  GMS_CHECK_IN_FAILED: 0,
  GMS_CHECK_IN_TIMEOUT: 1,
  GMS_CHECK_IN_INTERNAL_ERROR: 2,
};

// Enum: GMSSignInError
arc.mojom.GMSSignInError = {
  GMS_SIGN_IN_NETWORK_ERROR: 0,
  GMS_SIGN_IN_SERVICE_UNAVAILABLE: 1,
  GMS_SIGN_IN_BAD_AUTHENTICATION: 2,
  GMS_SIGN_IN_FAILED: 3,
  GMS_SIGN_IN_TIMEOUT: 4,
  GMS_SIGN_IN_INTERNAL_ERROR: 5,
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
};

// Enum: AccountCheckStatus
arc.mojom.AccountCheckStatus = {
};

// Enum: AndroidIdSource
arc.mojom.AndroidIdSource = {
};

// Enum: ReauthReason
arc.mojom.ReauthReason = {
};

// Enum: MainAccountResolutionStatus
arc.mojom.MainAccountResolutionStatus = {
};

// Enum: ManagementChangeStatus
arc.mojom.ManagementChangeStatus = {
};

// Enum: ChromeAccountType
arc.mojom.ChromeAccountType = {
  UNKNOWN: 0,
  USER_ACCOUNT: 1,
  ROBOT_ACCOUNT: 2,
  CHILD_ACCOUNT: 3,
};

// Enum: MetricsType
arc.mojom.MetricsType = {
  NETWORK_WAITING_TIME_MILLISECONDS: 0,
  CHECKIN_ATTEMPTS: 1,
  CHECKIN_TIME_MILLISECONDS: 2,
  SIGNIN_TIME_MILLISECONDS: 3,
};

// Enum: AccountUpdateType
arc.mojom.AccountUpdateType = {
  UPSERT: 0,
  REMOVAL: 1,
};

// Interface: AuthHost
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

};

arc.mojom.AuthHost.getRemote = function() {
  let remote = new arc.mojom.AuthHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AuthHost',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.AuthHostPtr = arc.mojom.AuthHostRemote;
arc.mojom.AuthHostRequest = arc.mojom.AuthHostPendingReceiver;


// Interface: AuthInstance
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

};

arc.mojom.AuthInstance.getRemote = function() {
  let remote = new arc.mojom.AuthInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AuthInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.AuthInstancePtr = arc.mojom.AuthInstanceRemote;
arc.mojom.AuthInstanceRequest = arc.mojom.AuthInstancePendingReceiver;

