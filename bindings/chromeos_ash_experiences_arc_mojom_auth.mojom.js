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

};

arc.mojom.AuthInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
