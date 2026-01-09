// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cross_origin_opener_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


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

// Interface: CrossOriginOpenerPolicyReporter
network.mojom.CrossOriginOpenerPolicyReporter = {};

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
};

network.mojom.CrossOriginOpenerPolicyReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queueAccessReport(report_type, property, source_location, reported_window_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CrossOriginOpenerPolicyReporter_QueueAccessReport_ParamsSpec,
      null,
      [report_type, property, source_location, reported_window_url]);
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

// ParamsSpec for QueueAccessReport
network.mojom.CrossOriginOpenerPolicyReporter_QueueAccessReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CrossOriginOpenerPolicyReporter.QueueAccessReport_Params',
      packedSize: 40,
      fields: [
        { name: 'report_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'property', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'source_location', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'reported_window_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.CrossOriginOpenerPolicyReporterPtr = network.mojom.CrossOriginOpenerPolicyReporterRemote;
network.mojom.CrossOriginOpenerPolicyReporterRequest = network.mojom.CrossOriginOpenerPolicyReporterPendingReceiver;

