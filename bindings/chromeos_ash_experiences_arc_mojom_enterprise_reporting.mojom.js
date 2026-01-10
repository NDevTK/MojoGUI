// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/enterprise_reporting.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.TimedCloudDpcOpSpec = { $: mojo.internal.Enum() };
arc.mojom.EnterpriseReportingHost = {};
arc.mojom.EnterpriseReportingHost.$interfaceName = 'arc.mojom.EnterpriseReportingHost';
arc.mojom.EnterpriseReportingHost_ReportCloudDpcOperationTime_ParamsSpec = { $: {} };
arc.mojom.EnterpriseReportingInstance = {};
arc.mojom.EnterpriseReportingInstance.$interfaceName = 'arc.mojom.EnterpriseReportingInstance';
arc.mojom.EnterpriseReportingInstance_Init_ParamsSpec = { $: {} };
arc.mojom.EnterpriseReportingInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.EnterpriseReportingInstance_GetStatus_ParamsSpec = { $: {} };
arc.mojom.EnterpriseReportingInstance_GetStatus_ResponseParamsSpec = { $: {} };

// Enum: TimedCloudDpcOp
arc.mojom.TimedCloudDpcOp = {
  UNKNOWN_OP: 0,
  DEVICE_SETUP: 1,
  SETUP_TOTAL: 2,
  SETUP_CHECK_FOR_ANDROID_ID: 3,
  SETUP_CHECK_FOR_FIRST_ACCOUNT_READY: 4,
  SETUP_REGISTER: 5,
  SETUP_PULL_AND_APPLY_POLICIES: 6,
  SETUP_REPORT_POLICY_COMPLIANCE: 7,
  SETUP_QUARANTINED: 8,
  SETUP_ADD_ACCOUNT: 9,
  SETUP_INSTALL_APPS: 10,
  SETUP_INSTALL_APPS_RETRY: 11,
  SETUP_UPDATE_PLAY_SERVICES: 12,
  SETUP_CHECK_REGISTRATION_TOKEN: 13,
  SETUP_THIRD_PARTY_SIGNIN: 14,
};

// Interface: EnterpriseReportingHost
mojo.internal.Struct(
    arc.mojom.EnterpriseReportingHost_ReportCloudDpcOperationTime_ParamsSpec, 'arc.mojom.EnterpriseReportingHost_ReportCloudDpcOperationTime_Params', [
      mojo.internal.StructField('time_ms', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('op', 8, 0, arc.mojom.TimedCloudDpcOpSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [time_ms, op, success],
      false);
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

arc.mojom.EnterpriseReportingHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 1: {
          const params = arc.mojom.EnterpriseReportingHost_ReportCloudDpcOperationTime_ParamsSpec.$.decode(message.payload);
          const result = this.impl.reportCloudDpcOperationTime(params.time_ms, params.op, params.success);
          break;
        }
      }
    });
  }
};

arc.mojom.EnterpriseReportingHostReceiver = arc.mojom.EnterpriseReportingHostReceiver;

arc.mojom.EnterpriseReportingHostPtr = arc.mojom.EnterpriseReportingHostRemote;
arc.mojom.EnterpriseReportingHostRequest = arc.mojom.EnterpriseReportingHostPendingReceiver;


// Interface: EnterpriseReportingInstance
mojo.internal.Struct(
    arc.mojom.EnterpriseReportingInstance_Init_ParamsSpec, 'arc.mojom.EnterpriseReportingInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.EnterpriseReportingHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.EnterpriseReportingInstance_Init_ResponseParamsSpec, 'arc.mojom.EnterpriseReportingInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.EnterpriseReportingInstance_GetStatus_ParamsSpec, 'arc.mojom.EnterpriseReportingInstance_GetStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.EnterpriseReportingInstance_GetStatus_ResponseParamsSpec, 'arc.mojom.EnterpriseReportingInstance_GetStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('droid_guard_info', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      arc.mojom.EnterpriseReportingInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  getStatus() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.EnterpriseReportingInstance_GetStatus_ParamsSpec,
      arc.mojom.EnterpriseReportingInstance_GetStatus_ResponseParamsSpec,
      [],
      false);
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

arc.mojom.EnterpriseReportingInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 2: {
          const params = arc.mojom.EnterpriseReportingInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, arc.mojom.EnterpriseReportingInstance_Init_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = arc.mojom.EnterpriseReportingInstance_GetStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, arc.mojom.EnterpriseReportingInstance_GetStatus_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

arc.mojom.EnterpriseReportingInstanceReceiver = arc.mojom.EnterpriseReportingInstanceReceiver;

arc.mojom.EnterpriseReportingInstancePtr = arc.mojom.EnterpriseReportingInstanceRemote;
arc.mojom.EnterpriseReportingInstanceRequest = arc.mojom.EnterpriseReportingInstancePendingReceiver;

