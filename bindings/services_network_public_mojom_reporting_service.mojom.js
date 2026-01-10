// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/reporting_service.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};
var url = url || {};
var services = services || {};

network.mojom.ReportingApiReportStatusSpec = { $: mojo.internal.Enum() };
network.mojom.ReportingApiReportSpec = { $: {} };
network.mojom.ReportingApiEndpointSpec = { $: {} };
network.mojom.ReportingApiObserver = {};
network.mojom.ReportingApiObserver.$interfaceName = 'network.mojom.ReportingApiObserver';
network.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec = { $: {} };
network.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec = { $: {} };
network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec = { $: {} };

// Enum: ReportingApiReportStatus
network.mojom.ReportingApiReportStatus = {
  kQueued: 0,
  kPending: 1,
  kDoomed: 2,
  kSuccess: 3,
};

// Struct: ReportingApiReport
mojo.internal.Struct(
    network.mojom.ReportingApiReportSpec, 'network.mojom.ReportingApiReport', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 32, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('depth', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('attempts', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('body', 48, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 56, 0, network.mojom.ReportingApiReportStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ReportingApiEndpoint
mojo.internal.Struct(
    network.mojom.ReportingApiEndpointSpec, 'network.mojom.ReportingApiEndpoint', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attempted_uploads', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('successful_uploads', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('attempted_reports', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('successful_reports', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('priority', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('weight', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('origin', 32, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_name', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 48, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reporting_source', 56, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Interface: ReportingApiObserver
mojo.internal.Struct(
    network.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec, 'network.mojom.ReportingApiObserver_OnReportAdded_Params', [
      mojo.internal.StructField('report', 0, 0, network.mojom.ReportingApiReportSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec, 'network.mojom.ReportingApiObserver_OnReportUpdated_Params', [
      mojo.internal.StructField('report', 0, 0, network.mojom.ReportingApiReportSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec, 'network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_Params', [
      mojo.internal.StructField('endpoints', 0, 0, mojo.internal.Array(network.mojom.ReportingApiEndpointSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

network.mojom.ReportingApiObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.ReportingApiObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.ReportingApiObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.ReportingApiObserverPendingReceiver,
      handle);
    this.$ = new network.mojom.ReportingApiObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.ReportingApiObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onReportAdded(report) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec,
      null,
      [report],
      false);
  }

  onReportUpdated(report) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      network.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec,
      null,
      [report],
      false);
  }

  onEndpointsUpdatedForOrigin(endpoints) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec,
      null,
      [endpoints],
      false);
  }

};

network.mojom.ReportingApiObserver.getRemote = function() {
  let remote = new network.mojom.ReportingApiObserverRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'network.mojom.ReportingApiObserver',
    'context');
  return remote.$;
};

network.mojom.ReportingApiObserverPtr = network.mojom.ReportingApiObserverRemote;
network.mojom.ReportingApiObserverRequest = network.mojom.ReportingApiObserverPendingReceiver;

