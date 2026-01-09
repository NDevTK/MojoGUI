// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cross_origin_embedder_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Enum: CrossOriginEmbedderPolicyValue
network.mojom.CrossOriginEmbedderPolicyValue = {
  kNone: 0,
  kRequireCorp: 1,
  kCredentialless: 2,
};

// Interface: CrossOriginEmbedderPolicyReporter
network.mojom.CrossOriginEmbedderPolicyReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CrossOriginEmbedderPolicyReporterRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CrossOriginEmbedderPolicyReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CrossOriginEmbedderPolicyReporterPendingReceiver,
      handle);
    this.$ = new network.mojom.CrossOriginEmbedderPolicyReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.CrossOriginEmbedderPolicyReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queueCorpViolationReport(blocked_url, destination, report_only) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_ParamsSpec.$,
      null,
      [blocked_url, destination, report_only]);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.CrossOriginEmbedderPolicyReporter_Clone_ParamsSpec.$,
      null,
      [receiver]);
  }

};

network.mojom.CrossOriginEmbedderPolicyReporter.getRemote = function() {
  let remote = new network.mojom.CrossOriginEmbedderPolicyReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CrossOriginEmbedderPolicyReporter',
    'context');
  return remote.$;
}};

// ParamsSpec for QueueCorpViolationReport
network.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CrossOriginEmbedderPolicyReporter.QueueCorpViolationReport_Params',
      packedSize: 32,
      fields: [
        { name: 'blocked_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'destination', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'report_only', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Clone
network.mojom.CrossOriginEmbedderPolicyReporter_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CrossOriginEmbedderPolicyReporter.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
network.mojom.CrossOriginEmbedderPolicyReporterPtr = network.mojom.CrossOriginEmbedderPolicyReporterRemote;
network.mojom.CrossOriginEmbedderPolicyReporterRequest = network.mojom.CrossOriginEmbedderPolicyReporterPendingReceiver;

