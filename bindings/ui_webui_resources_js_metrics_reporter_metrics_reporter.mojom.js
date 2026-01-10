// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/metrics_reporter/metrics_reporter.mojom
// Module: metrics_reporter.mojom

'use strict';

// Module namespace
var metrics_reporter = metrics_reporter || {};
metrics_reporter.mojom = metrics_reporter.mojom || {};

metrics_reporter.mojom.PageMetricsHost = {};
metrics_reporter.mojom.PageMetricsHost.$interfaceName = 'metrics_reporter.mojom.PageMetricsHost';
metrics_reporter.mojom.PageMetricsHost_OnPageRemoteCreated_ParamsSpec = { $: {} };
metrics_reporter.mojom.PageMetricsHost_OnGetMark_ParamsSpec = { $: {} };
metrics_reporter.mojom.PageMetricsHost_OnGetMark_ResponseParamsSpec = { $: {} };
metrics_reporter.mojom.PageMetricsHost_OnClearMark_ParamsSpec = { $: {} };
metrics_reporter.mojom.PageMetricsHost_OnUmaReportTime_ParamsSpec = { $: {} };
metrics_reporter.mojom.PageMetrics = {};
metrics_reporter.mojom.PageMetrics.$interfaceName = 'metrics_reporter.mojom.PageMetrics';
metrics_reporter.mojom.PageMetrics_OnGetMark_ParamsSpec = { $: {} };
metrics_reporter.mojom.PageMetrics_OnGetMark_ResponseParamsSpec = { $: {} };
metrics_reporter.mojom.PageMetrics_OnClearMark_ParamsSpec = { $: {} };

// Interface: PageMetricsHost
mojo.internal.Struct(
    metrics_reporter.mojom.PageMetricsHost_OnPageRemoteCreated_ParamsSpec, 'metrics_reporter.mojom.PageMetricsHost_OnPageRemoteCreated_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(metrics_reporter.mojom.PageMetricsRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    metrics_reporter.mojom.PageMetricsHost_OnGetMark_ParamsSpec, 'metrics_reporter.mojom.PageMetricsHost_OnGetMark_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    metrics_reporter.mojom.PageMetricsHost_OnGetMark_ResponseParamsSpec, 'metrics_reporter.mojom.PageMetricsHost_OnGetMark_ResponseParams', [
      mojo.internal.StructField('marked_time', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    metrics_reporter.mojom.PageMetricsHost_OnClearMark_ParamsSpec, 'metrics_reporter.mojom.PageMetricsHost_OnClearMark_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    metrics_reporter.mojom.PageMetricsHost_OnUmaReportTime_ParamsSpec, 'metrics_reporter.mojom.PageMetricsHost_OnUmaReportTime_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('time', 8, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

metrics_reporter.mojom.PageMetricsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics_reporter.mojom.PageMetricsHostRemote = class {
  static get $interfaceName() {
    return 'metrics_reporter.mojom.PageMetricsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics_reporter.mojom.PageMetricsHostPendingReceiver,
      handle);
    this.$ = new metrics_reporter.mojom.PageMetricsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics_reporter.mojom.PageMetricsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPageRemoteCreated(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics_reporter.mojom.PageMetricsHost_OnPageRemoteCreated_ParamsSpec,
      null,
      [page]);
  }

  onGetMark(name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      metrics_reporter.mojom.PageMetricsHost_OnGetMark_ParamsSpec,
      metrics_reporter.mojom.PageMetricsHost_OnGetMark_ResponseParamsSpec,
      [name]);
  }

  onClearMark(name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      metrics_reporter.mojom.PageMetricsHost_OnClearMark_ParamsSpec,
      null,
      [name]);
  }

  onUmaReportTime(name, time) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      metrics_reporter.mojom.PageMetricsHost_OnUmaReportTime_ParamsSpec,
      null,
      [name, time]);
  }

};

metrics_reporter.mojom.PageMetricsHost.getRemote = function() {
  let remote = new metrics_reporter.mojom.PageMetricsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics_reporter.mojom.PageMetricsHost',
    'context');
  return remote.$;
};

metrics_reporter.mojom.PageMetricsHostPtr = metrics_reporter.mojom.PageMetricsHostRemote;
metrics_reporter.mojom.PageMetricsHostRequest = metrics_reporter.mojom.PageMetricsHostPendingReceiver;


// Interface: PageMetrics
mojo.internal.Struct(
    metrics_reporter.mojom.PageMetrics_OnGetMark_ParamsSpec, 'metrics_reporter.mojom.PageMetrics_OnGetMark_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    metrics_reporter.mojom.PageMetrics_OnGetMark_ResponseParamsSpec, 'metrics_reporter.mojom.PageMetrics_OnGetMark_ResponseParams', [
      mojo.internal.StructField('marked_time', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    metrics_reporter.mojom.PageMetrics_OnClearMark_ParamsSpec, 'metrics_reporter.mojom.PageMetrics_OnClearMark_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

metrics_reporter.mojom.PageMetricsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics_reporter.mojom.PageMetricsRemote = class {
  static get $interfaceName() {
    return 'metrics_reporter.mojom.PageMetrics';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics_reporter.mojom.PageMetricsPendingReceiver,
      handle);
    this.$ = new metrics_reporter.mojom.PageMetricsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics_reporter.mojom.PageMetricsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onGetMark(name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics_reporter.mojom.PageMetrics_OnGetMark_ParamsSpec,
      metrics_reporter.mojom.PageMetrics_OnGetMark_ResponseParamsSpec,
      [name]);
  }

  onClearMark(name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      metrics_reporter.mojom.PageMetrics_OnClearMark_ParamsSpec,
      null,
      [name]);
  }

};

metrics_reporter.mojom.PageMetrics.getRemote = function() {
  let remote = new metrics_reporter.mojom.PageMetricsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics_reporter.mojom.PageMetrics',
    'context');
  return remote.$;
};

metrics_reporter.mojom.PageMetricsPtr = metrics_reporter.mojom.PageMetricsRemote;
metrics_reporter.mojom.PageMetricsRequest = metrics_reporter.mojom.PageMetricsPendingReceiver;

