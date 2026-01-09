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
arc.mojom.EnterpriseReportingHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.EnterpriseReportingHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.EnterpriseReportingHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.EnterpriseReportingHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.EnterpriseReportingHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.EnterpriseReportingHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.EnterpriseReportingHost.getRemote = function() {
  let remote = new arc.mojom.EnterpriseReportingHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.EnterpriseReportingHost',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.EnterpriseReportingHostPtr = arc.mojom.EnterpriseReportingHostRemote;
arc.mojom.EnterpriseReportingHostRequest = arc.mojom.EnterpriseReportingHostPendingReceiver;


// Interface: EnterpriseReportingInstance
arc.mojom.EnterpriseReportingInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.EnterpriseReportingInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.EnterpriseReportingInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.EnterpriseReportingInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.EnterpriseReportingInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.EnterpriseReportingInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.EnterpriseReportingInstance.getRemote = function() {
  let remote = new arc.mojom.EnterpriseReportingInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.EnterpriseReportingInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.EnterpriseReportingInstancePtr = arc.mojom.EnterpriseReportingInstanceRemote;
arc.mojom.EnterpriseReportingInstanceRequest = arc.mojom.EnterpriseReportingInstancePendingReceiver;

