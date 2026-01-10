// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cross_origin_opener_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: CoopAccessReportType
network.mojom.mojom.CoopAccessReportType = {
  kAccessFromCoopPageToOpener: 0,
  kAccessFromCoopPageToOpenee: 1,
  kAccessFromCoopPageToOther: 2,
  kAccessToCoopPageFromOpener: 3,
  kAccessToCoopPageFromOpenee: 4,
  kAccessToCoopPageFromOther: 5,
};
network.mojom.mojom.CoopAccessReportTypeSpec = { $: mojo.internal.Enum() };

// Enum: CrossOriginOpenerPolicyValue
network.mojom.mojom.CrossOriginOpenerPolicyValue = {
  kUnsafeNone: 0,
  kSameOriginAllowPopups: 1,
  kSameOrigin: 2,
  kSameOriginPlusCoep: 3,
  kNoopenerAllowPopups: 4,
};
network.mojom.mojom.CrossOriginOpenerPolicyValueSpec = { $: mojo.internal.Enum() };

// Struct: CrossOriginOpenerPolicyReporterParams
network.mojom.mojom.CrossOriginOpenerPolicyReporterParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CrossOriginOpenerPolicyReporterParams',
      packedSize: 32,
      fields: [
        { name: 'report_type', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CoopAccessReportTypeSpec, nullable: false, minVersion: 0 },
        { name: 'reporter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(network.mojom.CrossOriginOpenerPolicyReporterRemote), nullable: false, minVersion: 0 },
        { name: 'endpoint_defined', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'reported_window_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CrossOriginOpenerPolicy
network.mojom.mojom.CrossOriginOpenerPolicySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CrossOriginOpenerPolicy',
      packedSize: 24,
      fields: [
        { name: 'reporting_endpoint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'report_only_reporting_endpoint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: CrossOriginOpenerPolicyReporter
network.mojom.mojom.CrossOriginOpenerPolicyReporter = {};

network.mojom.mojom.CrossOriginOpenerPolicyReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.CrossOriginOpenerPolicyReporterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CrossOriginOpenerPolicyReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.CrossOriginOpenerPolicyReporterPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.CrossOriginOpenerPolicyReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.CrossOriginOpenerPolicyReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queueAccessReport(report_type, property, source_location, reported_window_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.CrossOriginOpenerPolicyReporter_QueueAccessReport_ParamsSpec,
      null,
      [report_type, property, source_location, reported_window_url]);
  }

};

network.mojom.mojom.CrossOriginOpenerPolicyReporter.getRemote = function() {
  let remote = new network.mojom.mojom.CrossOriginOpenerPolicyReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CrossOriginOpenerPolicyReporter',
    'context');
  return remote.$;
};

// ParamsSpec for QueueAccessReport
network.mojom.mojom.CrossOriginOpenerPolicyReporter_QueueAccessReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CrossOriginOpenerPolicyReporter.QueueAccessReport_Params',
      packedSize: 40,
      fields: [
        { name: 'report_type', packedOffset: 24, packedBitOffset: 0, type: network.mojom.CoopAccessReportTypeSpec, nullable: false, minVersion: 0 },
        { name: 'property', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_location', packedOffset: 8, packedBitOffset: 0, type: network.mojom.SourceLocationSpec, nullable: false, minVersion: 0 },
        { name: 'reported_window_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.CrossOriginOpenerPolicyReporterPtr = network.mojom.mojom.CrossOriginOpenerPolicyReporterRemote;
network.mojom.mojom.CrossOriginOpenerPolicyReporterRequest = network.mojom.mojom.CrossOriginOpenerPolicyReporterPendingReceiver;

