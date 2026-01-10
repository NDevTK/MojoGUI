// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/document_isolation_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};

network.mojom.DocumentIsolationPolicyValueSpec = { $: mojo.internal.Enum() };
network.mojom.DocumentIsolationPolicySpec = { $: {} };
network.mojom.DocumentIsolationPolicyReporter = {};
network.mojom.DocumentIsolationPolicyReporter.$interfaceName = 'network.mojom.DocumentIsolationPolicyReporter';
network.mojom.DocumentIsolationPolicyReporter_QueueCorpViolationReport_ParamsSpec = { $: {} };
network.mojom.DocumentIsolationPolicyReporter_Clone_ParamsSpec = { $: {} };

// Enum: DocumentIsolationPolicyValue
network.mojom.DocumentIsolationPolicyValue = {
  kNone: 0,
  kIsolateAndRequireCorp: 1,
  kIsolateAndCredentialless: 2,
};

// Struct: DocumentIsolationPolicy
mojo.internal.Struct(
    network.mojom.DocumentIsolationPolicySpec, 'network.mojom.DocumentIsolationPolicy', [
      mojo.internal.StructField('value', 0, 0, network.mojom.DocumentIsolationPolicyValueSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('reporting_endpoint', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('report_only_reporting_endpoint', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: DocumentIsolationPolicyReporter
mojo.internal.Struct(
    network.mojom.DocumentIsolationPolicyReporter_QueueCorpViolationReport_ParamsSpec, 'network.mojom.DocumentIsolationPolicyReporter_QueueCorpViolationReport_Params', [
      mojo.internal.StructField('blocked_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('destination', 8, 0, network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('report_only', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.DocumentIsolationPolicyReporter_Clone_ParamsSpec, 'network.mojom.DocumentIsolationPolicyReporter_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.DocumentIsolationPolicyReporterSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [blocked_url, destination, report_only],
      false);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.DocumentIsolationPolicyReporter_Clone_ParamsSpec,
      null,
      [receiver],
      false);
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

network.mojom.DocumentIsolationPolicyReporterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = network.mojom.DocumentIsolationPolicyReporter_QueueCorpViolationReport_ParamsSpec.$.decode(message.payload);
          const result = this.impl.queueCorpViolationReport(params.blocked_url, params.destination, params.report_only);
          break;
        }
        case 1: {
          const params = network.mojom.DocumentIsolationPolicyReporter_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.receiver);
          break;
        }
      }
      }
    }});
  }
};

network.mojom.DocumentIsolationPolicyReporterReceiver = network.mojom.DocumentIsolationPolicyReporterReceiver;

network.mojom.DocumentIsolationPolicyReporterPtr = network.mojom.DocumentIsolationPolicyReporterRemote;
network.mojom.DocumentIsolationPolicyReporterRequest = network.mojom.DocumentIsolationPolicyReporterPendingReceiver;

