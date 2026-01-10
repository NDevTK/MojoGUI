// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cross_origin_embedder_policy.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};
var services = services || {};

network.mojom.CrossOriginEmbedderPolicyValueSpec = { $: mojo.internal.Enum() };
network.mojom.CrossOriginEmbedderPolicySpec = { $: {} };
network.mojom.CrossOriginEmbedderPolicyReporter = {};
network.mojom.CrossOriginEmbedderPolicyReporter.$interfaceName = 'network.mojom.CrossOriginEmbedderPolicyReporter';
network.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_ParamsSpec = { $: {} };
network.mojom.CrossOriginEmbedderPolicyReporter_Clone_ParamsSpec = { $: {} };

// Enum: CrossOriginEmbedderPolicyValue
network.mojom.CrossOriginEmbedderPolicyValue = {
  kNone: 0,
  kRequireCorp: 1,
  kCredentialless: 2,
};

// Struct: CrossOriginEmbedderPolicy
mojo.internal.Struct(
    network.mojom.CrossOriginEmbedderPolicySpec, 'network.mojom.CrossOriginEmbedderPolicy', [
      mojo.internal.StructField('value', 0, 0, network.mojom.CrossOriginEmbedderPolicyValueSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('reporting_endpoint', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('report_only_reporting_endpoint', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: CrossOriginEmbedderPolicyReporter
mojo.internal.Struct(
    network.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_ParamsSpec, 'network.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_Params', [
      mojo.internal.StructField('blocked_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('destination', 8, 0, network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('report_only', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    network.mojom.CrossOriginEmbedderPolicyReporter_Clone_ParamsSpec, 'network.mojom.CrossOriginEmbedderPolicyReporter_Clone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(network.mojom.CrossOriginEmbedderPolicyReporterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      network.mojom.CrossOriginEmbedderPolicyReporter_QueueCorpViolationReport_ParamsSpec,
      null,
      [blocked_url, destination, report_only],
      false);
  }

  clone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.CrossOriginEmbedderPolicyReporter_Clone_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

network.mojom.CrossOriginEmbedderPolicyReporter.getRemote = function() {
  let remote = new network.mojom.CrossOriginEmbedderPolicyReporterRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.CrossOriginEmbedderPolicyReporter',
    'context');
  return remote.$;
};

network.mojom.CrossOriginEmbedderPolicyReporterPtr = network.mojom.CrossOriginEmbedderPolicyReporterRemote;
network.mojom.CrossOriginEmbedderPolicyReporterRequest = network.mojom.CrossOriginEmbedderPolicyReporterPendingReceiver;

