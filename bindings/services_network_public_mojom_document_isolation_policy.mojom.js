// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/document_isolation_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Enum: DocumentIsolationPolicyValue
network.mojom.DocumentIsolationPolicyValue = {
  kNone: 0,
  kIsolateAndRequireCorp: 1,
  kIsolateAndCredentialless: 2,
};
network.mojom.DocumentIsolationPolicyValueSpec = { $: mojo.internal.Enum() };

// Struct: DocumentIsolationPolicy
network.mojom.DocumentIsolationPolicySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DocumentIsolationPolicy',
      packedSize: 32,
      fields: [
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: network.mojom.DocumentIsolationPolicyValueSpec, nullable: false, minVersion: 0 },
        { name: 'reporting_endpoint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'report_only_reporting_endpoint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: DocumentIsolationPolicyReporter
network.mojom.DocumentIsolationPolicyReporter = {};

network.mojom.DocumentIsolationPolicyReporter_QueueCorpViolationReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DocumentIsolationPolicyReporter_QueueCorpViolationReport_Params',
      packedSize: 24,
      fields: [
        { name: 'blocked_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'destination', packedOffset: 8, packedBitOffset: 0, type: network.mojom.RequestDestinationSpec, nullable: false, minVersion: 0 },
        { name: 'report_only', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

network.mojom.DocumentIsolationPolicyReporter_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DocumentIsolationPolicyReporter_Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.DocumentIsolationPolicyReporterRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

network.mojom.DocumentIsolationPolicyReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.DocumentIsolationPolicyReporterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.DocumentIsolationPolicyReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.DocumentIsolationPolicyReporterPendingReceiver,
      handle);
    this.$ = new network.mojom.DocumentIsolationPolicyReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.DocumentIsolationPolicyReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queueCorpViolationReport(blocked_url, destination, report_only) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.DocumentIsolationPolicyReporter_QueueCorpViolationReport_ParamsSpec,
      null,
      [blocked_url, destination, report_only]);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DocumentIsolationPolicyReporter_Clone_ParamsSpec,
      null,
      [receiver]);
  }

};

network.mojom.DocumentIsolationPolicyReporter.getRemote = function() {
  let remote = new network.mojom.DocumentIsolationPolicyReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.DocumentIsolationPolicyReporter',
    'context');
  return remote.$;
};

// ParamsSpec for QueueCorpViolationReport
network.mojom.DocumentIsolationPolicyReporter_QueueCorpViolationReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DocumentIsolationPolicyReporter.QueueCorpViolationReport_Params',
      packedSize: 24,
      fields: [
        { name: 'blocked_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'destination', packedOffset: 8, packedBitOffset: 0, type: network.mojom.RequestDestinationSpec, nullable: false, minVersion: 0 },
        { name: 'report_only', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Clone
network.mojom.DocumentIsolationPolicyReporter_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DocumentIsolationPolicyReporter.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(network.mojom.DocumentIsolationPolicyReporterRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.DocumentIsolationPolicyReporterPtr = network.mojom.DocumentIsolationPolicyReporterRemote;
network.mojom.DocumentIsolationPolicyReporterRequest = network.mojom.DocumentIsolationPolicyReporterPendingReceiver;

