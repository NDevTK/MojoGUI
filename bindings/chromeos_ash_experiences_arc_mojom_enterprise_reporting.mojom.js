// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/enterprise_reporting.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: TimedCloudDpcOp
arc.mojom.TimedCloudDpcOp = {
  DEVICE_SETUP: 0,
  SETUP_TOTAL: 1,
  SETUP_CHECK_FOR_ANDROID_ID: 2,
  SETUP_CHECK_FOR_FIRST_ACCOUNT_READY: 3,
  SETUP_REGISTER: 4,
  SETUP_PULL_AND_APPLY_POLICIES: 5,
  SETUP_REPORT_POLICY_COMPLIANCE: 6,
  SETUP_QUARANTINED: 7,
  SETUP_ADD_ACCOUNT: 8,
  SETUP_INSTALL_APPS: 9,
  SETUP_INSTALL_APPS_RETRY: 10,
  SETUP_UPDATE_PLAY_SERVICES: 11,
  SETUP_CHECK_REGISTRATION_TOKEN: 12,
  SETUP_THIRD_PARTY_SIGNIN: 13,
};

// Interface: EnterpriseReportingHost
arc.mojom.EnterpriseReportingHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.EnterpriseReportingHost';
  }

};

arc.mojom.EnterpriseReportingHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: EnterpriseReportingInstance
arc.mojom.EnterpriseReportingInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.EnterpriseReportingInstance';
  }

};

arc.mojom.EnterpriseReportingInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
