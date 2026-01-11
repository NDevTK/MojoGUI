// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cross_origin_opener_policy.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};

network.mojom.CoopAccessReportTypeSpec = { $: mojo.internal.Enum() };
network.mojom.CrossOriginOpenerPolicyValueSpec = { $: mojo.internal.Enum() };
network.mojom.CrossOriginOpenerPolicyReporterParamsSpec = { $: {} };
network.mojom.CrossOriginOpenerPolicySpec = { $: {} };
network.mojom.CrossOriginOpenerPolicyReporter = {};
network.mojom.CrossOriginOpenerPolicyReporter.$interfaceName = 'network.mojom.CrossOriginOpenerPolicyReporter';
network.mojom.CrossOriginOpenerPolicyReporter_QueueAccessReport_ParamsSpec = { $: {} };

// Enum: CoopAccessReportType
network.mojom.CoopAccessReportType = {
  kAccessFromCoopPageToOpener: 0,
  kAccessFromCoopPageToOpenee: 1,
  kAccessFromCoopPageToOther: 2,
  kAccessToCoopPageFromOpener: 3,
  kAccessToCoopPageFromOpenee: 4,
  kAccessToCoopPageFromOther: 5,
};

// Enum: CrossOriginOpenerPolicyValue
network.mojom.CrossOriginOpenerPolicyValue = {
  kUnsafeNone: 0,
  kSameOriginAllowPopups: 1,
  kSameOrigin: 2,
  kSameOriginPlusCoep: 3,
  kNoopenerAllowPopups: 4,
};

// Struct: CrossOriginOpenerPolicyReporterParams
mojo.internal.Struct(
    network.mojom.CrossOriginOpenerPolicyReporterParamsSpec, 'network.mojom.CrossOriginOpenerPolicyReporterParams', [
      mojo.internal.StructField('report_type', 0, 0, network.mojom.CoopAccessReportTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reporter', 8, 0, mojo.internal.InterfaceProxy(network.mojom.CrossOriginOpenerPolicyReporterRemote), null, false, 0, undefined),
      mojo.internal.StructField('reported_window_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('endpoint_defined', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CrossOriginOpenerPolicy
mojo.internal.Struct(
    network.mojom.CrossOriginOpenerPolicySpec, 'network.mojom.CrossOriginOpenerPolicy', [
      mojo.internal.StructField('reporting_endpoint', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('report_only_reporting_endpoint', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CrossOriginOpenerPolicyReporter
mojo.internal.Struct(
    network.mojom.CrossOriginOpenerPolicyReporter_QueueAccessReport_ParamsSpec, 'network.mojom.CrossOriginOpenerPolicyReporter_QueueAccessReport_Params', [
      mojo.internal.StructField('report_type', 0, 0, network.mojom.CoopAccessReportTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('property', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_location', 16, 0, network.mojom.SourceLocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reported_window_url', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

network.mojom.CrossOriginOpenerPolicyReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CrossOriginOpenerPolicyReporterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CrossOriginOpenerPolicyReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CrossOriginOpenerPolicyReporterPendingReceiver,
      handle);
    this.$ = new network.mojom.CrossOriginOpenerPolicyReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  queueAccessReport(report_type, property, source_location, reported_window_url) {
    return this.$.queueAccessReport(report_type, property, source_location, reported_window_url);
  }
};

network.mojom.CrossOriginOpenerPolicyReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrossOriginOpenerPolicyReporter', [
      { explicit: null },
    ]);
  }

  queueAccessReport(report_type, property, source_location, reported_window_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.CrossOriginOpenerPolicyReporter_QueueAccessReport_ParamsSpec,
      null,
      [report_type, property, source_location, reported_window_url],
      false);
  }

};

network.mojom.CrossOriginOpenerPolicyReporter.getRemote = function() {
  let remote = new network.mojom.CrossOriginOpenerPolicyReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CrossOriginOpenerPolicyReporter',
    'context');
  return remote.$;
};

network.mojom.CrossOriginOpenerPolicyReporterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrossOriginOpenerPolicyReporter', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.CrossOriginOpenerPolicyReporter_QueueAccessReport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.CrossOriginOpenerPolicyReporter_QueueAccessReport_ParamsSpec.$.structSpec);
          const result = this.impl.queueAccessReport(params.report_type, params.property, params.source_location, params.reported_window_url);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

network.mojom.CrossOriginOpenerPolicyReporterReceiver = network.mojom.CrossOriginOpenerPolicyReporterReceiver;

network.mojom.CrossOriginOpenerPolicyReporterPtr = network.mojom.CrossOriginOpenerPolicyReporterRemote;
network.mojom.CrossOriginOpenerPolicyReporterRequest = network.mojom.CrossOriginOpenerPolicyReporterPendingReceiver;

