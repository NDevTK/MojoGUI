// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/auth.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcAuthCodeStatus
arc.mojom.ArcAuthCodeStatus = {
  you: 0,
};

// Enum: GeneralSignInError
arc.mojom.GeneralSignInError = {
};

// Enum: GMSCheckInError
arc.mojom.GMSCheckInError = {
  but: 0,
};

// Enum: GMSSignInError
arc.mojom.GMSSignInError = {
  but: 0,
  SERVICE_UNAVAILABLE: 1,
  we: 2,
};

// Enum: CloudProvisionFlowError
arc.mojom.CloudProvisionFlowError = {
  so: 0,
  most: 1,
};

// Enum: ArcSignInSuccess
arc.mojom.ArcSignInSuccess = {
};

// Enum: AccountCheckStatus
arc.mojom.AccountCheckStatus = {
  you: 0,
};

// Enum: AndroidIdSource
arc.mojom.AndroidIdSource = {
};

// Enum: ReauthReason
arc.mojom.ReauthReason = {
};

// Enum: MainAccountResolutionStatus
arc.mojom.MainAccountResolutionStatus = {
  you: 0,
};

// Enum: ManagementChangeStatus
arc.mojom.ManagementChangeStatus = {
};

// Enum: ChromeAccountType
arc.mojom.ChromeAccountType = {
  UNKNOWN: 0,
  and: 1,
};

// Enum: MetricsType
arc.mojom.MetricsType = {
};

// Enum: AccountUpdateType
arc.mojom.AccountUpdateType = {
};

// Struct: AccountInfo
arc.mojom.AccountInfo = class {
  constructor(values = {}) {
    this.is = values.is !== undefined ? values.is : null;
    this.DEPRECATED_enrollment_token@3 = values.DEPRECATED_enrollment_token@3 !== undefined ? values.DEPRECATED_enrollment_token@3 : false;
    this.account_name@4 = values.account_name@4 !== undefined ? values.account_name@4 : "";
  }
};

// Struct: ArcAccountInfo
arc.mojom.ArcAccountInfo = class {
  constructor(values = {}) {
    this.gaia_id = values.gaia_id !== undefined ? values.gaia_id : "";
  }
};

// Interface: AuthHost
arc.mojom.AuthHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.AuthHost';
  }

  19(result, account) {
    // Method: 19
    // Call: 19(result, account)
  }

  8(metrics_type, value) {
    // Method: 8
    // Call: 8(metrics_type, value)
  }

  9(status) {
    // Method: 9
    // Call: 9(status)
  }

  not(https:) {
    // Method: not
    // Call: not(https:)
  }

  11(status) {
    // Method: 11
    // Call: 11(status)
  }

  cases(sessions) {
    // Method: cases
    // Call: cases(sessions)
  }

  18() {
    // Method: 18
    return new Promise((resolve) => {
      // Call: 18()
      resolve({});
    });
  }

  12() {
    // Method: 12
    return new Promise((resolve) => {
      // Call: 12()
      resolve({});
    });
  }

  13(account_name) {
    // Method: 13
    return new Promise((resolve) => {
      // Call: 13(account_name)
      resolve({});
    });
  }

  14() {
    // Method: 14
    return new Promise((resolve) => {
      // Call: 14()
      resolve({});
    });
  }

  15() {
    // Method: 15
    // Call: 15()
  }

  16(account_name) {
    // Method: 16
    // Call: 16(account_name)
  }

  17(account_name) {
    // Method: 17
    // Call: 17(account_name)
  }

  20(reason) {
    // Method: 20
    // Call: 20(reason)
  }

};

arc.mojom.AuthHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AuthInstance
arc.mojom.AuthInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.AuthInstance';
  }

  2(host_remote) {
    // Method: 2
    // Call: 2(host_remote)
  }

  updated(inserted, see) {
    // Method: updated
    // Call: updated(inserted, see)
  }

  3(account_name, update_type) {
    // Method: 3
    // Call: 3(account_name, update_type)
  }

  4() {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4()
      resolve({});
    });
  }

  5() {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5()
      resolve({});
    });
  }

  accounts(the) {
    // Method: accounts
    // Call: accounts(the)
  }

  6(accounts) {
    // Method: 6
    // Call: 6(accounts)
  }

};

arc.mojom.AuthInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
