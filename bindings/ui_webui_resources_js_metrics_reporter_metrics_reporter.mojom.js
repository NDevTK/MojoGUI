// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/metrics_reporter/metrics_reporter.mojom
// Module: metrics_reporter.mojom

'use strict';

// Module namespace
var metrics_reporter = metrics_reporter || {};
metrics_reporter.mojom = metrics_reporter.mojom || {};


// Interface: PageMetricsHost
metrics_reporter.mojom.PageMetricsHost = {};

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

// ParamsSpec for OnPageRemoteCreated
metrics_reporter.mojom.PageMetricsHost_OnPageRemoteCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics_reporter.mojom.PageMetricsHost.OnPageRemoteCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnGetMark
metrics_reporter.mojom.PageMetricsHost_OnGetMark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics_reporter.mojom.PageMetricsHost.OnGetMark_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

metrics_reporter.mojom.PageMetricsHost_OnGetMark_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics_reporter.mojom.PageMetricsHost.OnGetMark_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'marked_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnClearMark
metrics_reporter.mojom.PageMetricsHost_OnClearMark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics_reporter.mojom.PageMetricsHost.OnClearMark_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnUmaReportTime
metrics_reporter.mojom.PageMetricsHost_OnUmaReportTime_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics_reporter.mojom.PageMetricsHost.OnUmaReportTime_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
metrics_reporter.mojom.PageMetricsHostPtr = metrics_reporter.mojom.PageMetricsHostRemote;
metrics_reporter.mojom.PageMetricsHostRequest = metrics_reporter.mojom.PageMetricsHostPendingReceiver;


// Interface: PageMetrics
metrics_reporter.mojom.PageMetrics = {};

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

// ParamsSpec for OnGetMark
metrics_reporter.mojom.PageMetrics_OnGetMark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics_reporter.mojom.PageMetrics.OnGetMark_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

metrics_reporter.mojom.PageMetrics_OnGetMark_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics_reporter.mojom.PageMetrics.OnGetMark_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'marked_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnClearMark
metrics_reporter.mojom.PageMetrics_OnClearMark_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics_reporter.mojom.PageMetrics.OnClearMark_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
metrics_reporter.mojom.PageMetricsPtr = metrics_reporter.mojom.PageMetricsRemote;
metrics_reporter.mojom.PageMetricsRequest = metrics_reporter.mojom.PageMetricsPendingReceiver;

