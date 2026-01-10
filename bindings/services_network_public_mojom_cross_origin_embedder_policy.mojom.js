// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cross_origin_embedder_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};


// Enum: CrossOriginEmbedderPolicyValue
network.mojom.mojom.CrossOriginEmbedderPolicyValue = {
  kNone: 0,
  kRequireCorp: 1,
  kCredentialless: 2,
};
network.mojom.mojom.CrossOriginEmbedderPolicyValueSpec = { $: mojo.internal.Enum() };

// Struct: CrossOriginEmbedderPolicy
network.mojom.mojom.CrossOriginEmbedderPolicySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CrossOriginEmbedderPolicy',
      packedSize: 32,
      fields: [
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: network.mojom.CrossOriginEmbedderPolicyValueSpec, nullable: false, minVersion: 0 },
        { name: 'reporting_endpoint', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'report_only_reporting_endpoint', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: CrossOriginEmbedderPolicyReporter
network.mojom.mojom.CrossOriginEmbedderPolicyReporter = {};

network.mojom.mojom.CrossOriginEmbedderPolicyReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.mojom.CrossOriginEmbedderPolicyReporterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CrossOriginEmbedderPolicyReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.mojom.CrossOriginEmbedderPolicyReporterPendingReceiver,
      handle);
    this.$ = new network.mojom.mojom.CrossOriginEmbedderPolicyReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.mojom.CrossOriginEmbedderPolicyReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queueCorpViolationReport(blocked_url, destination, report_only) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_ParamsSpec,
      null,
      [blocked_url, destination, report_only]);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.mojom.CrossOriginEmbedderPolicyReporter_Clone_ParamsSpec,
      null,
      [receiver]);
  }

};

network.mojom.mojom.CrossOriginEmbedderPolicyReporter.getRemote = function() {
  let remote = new network.mojom.mojom.CrossOriginEmbedderPolicyReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CrossOriginEmbedderPolicyReporter',
    'context');
  return remote.$;
};

// ParamsSpec for QueueCorpViolationReport
network.mojom.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CrossOriginEmbedderPolicyReporter.QueueCorpViolationReport_Params',
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
network.mojom.mojom.CrossOriginEmbedderPolicyReporter_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CrossOriginEmbedderPolicyReporter.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
network.mojom.mojom.CrossOriginEmbedderPolicyReporterPtr = network.mojom.mojom.CrossOriginEmbedderPolicyReporterRemote;
network.mojom.mojom.CrossOriginEmbedderPolicyReporterRequest = network.mojom.mojom.CrossOriginEmbedderPolicyReporterPendingReceiver;

