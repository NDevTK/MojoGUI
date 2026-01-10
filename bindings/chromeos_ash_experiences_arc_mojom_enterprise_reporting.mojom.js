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
arc.mojom.TimedCloudDpcOpSpec = { $: mojo.internal.Enum() };

// Interface: EnterpriseReportingHost
arc.mojom.EnterpriseReportingHost = {};

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

  reportCloudDpcOperationTime(time_ms, op, success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.EnterpriseReportingHost_ReportCloudDpcOperationTime_ParamsSpec,
      null,
      [time_ms, op, success]);
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
};

// ParamsSpec for ReportCloudDpcOperationTime
arc.mojom.EnterpriseReportingHost_ReportCloudDpcOperationTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.EnterpriseReportingHost.ReportCloudDpcOperationTime_Params',
      packedSize: 24,
      fields: [
        { name: 'time_ms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'op', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.TimedCloudDpcOpSpec, nullable: false, minVersion: 0 },
        { name: 'success', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
arc.mojom.EnterpriseReportingHostPtr = arc.mojom.EnterpriseReportingHostRemote;
arc.mojom.EnterpriseReportingHostRequest = arc.mojom.EnterpriseReportingHostPendingReceiver;


// Interface: EnterpriseReportingInstance
arc.mojom.EnterpriseReportingInstance = {};

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

  init(host_remote) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.EnterpriseReportingInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  getStatus() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.EnterpriseReportingInstance_GetStatus_ParamsSpec,
      arc.mojom.EnterpriseReportingInstance_GetStatus_ResponseParamsSpec,
      []);
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
};

// ParamsSpec for Init
arc.mojom.EnterpriseReportingInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.EnterpriseReportingInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetStatus
arc.mojom.EnterpriseReportingInstance_GetStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.EnterpriseReportingInstance.GetStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.EnterpriseReportingInstance_GetStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.EnterpriseReportingInstance.GetStatus_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'droid_guard_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
arc.mojom.EnterpriseReportingInstancePtr = arc.mojom.EnterpriseReportingInstanceRemote;
arc.mojom.EnterpriseReportingInstanceRequest = arc.mojom.EnterpriseReportingInstancePendingReceiver;

