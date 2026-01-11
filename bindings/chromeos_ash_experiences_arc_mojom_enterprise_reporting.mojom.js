// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/enterprise_reporting.mojom
// Module: arc.mojom

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
  reportCloudDpcOperationTime(time_ms, op, success) {
    return this.$.reportCloudDpcOperationTime(time_ms, op, success);
  }
};

arc.mojom.EnterpriseReportingHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EnterpriseReportingHost', [
      { explicit: 1 },
    ]);
  }

  reportCloudDpcOperationTime(time_ms, op, success) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EnterpriseReportingHost', [
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.EnterpriseReportingHost_ReportCloudDpcOperationTime_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.EnterpriseReportingHost_ReportCloudDpcOperationTime_ParamsSpec.$.structSpec);
          const result = this.impl.reportCloudDpcOperationTime(params.time_ms, params.op, params.success);
          break;
        }
      }
      } catch (err) {}
    }});
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
  init(host_remote) {
    return this.$.init(host_remote);
  }
  getStatus() {
    return this.$.getStatus();
  }
};

arc.mojom.EnterpriseReportingInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EnterpriseReportingInstance', [
      { explicit: 2 },
      { explicit: 1 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.EnterpriseReportingInstance_Init_ParamsSpec,
      arc.mojom.EnterpriseReportingInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  getStatus() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EnterpriseReportingInstance', [
      { explicit: 2 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.EnterpriseReportingInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.EnterpriseReportingInstance_GetStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.EnterpriseReportingInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.EnterpriseReportingInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.EnterpriseReportingInstance_GetStatus_ParamsSpec.$.structSpec);
          const result = this.impl.getStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.EnterpriseReportingInstance_GetStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.EnterpriseReportingInstanceReceiver = arc.mojom.EnterpriseReportingInstanceReceiver;

arc.mojom.EnterpriseReportingInstancePtr = arc.mojom.EnterpriseReportingInstanceRemote;
arc.mojom.EnterpriseReportingInstanceRequest = arc.mojom.EnterpriseReportingInstancePendingReceiver;

