// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/metrics_reporter/metrics_reporter.mojom
// Module: metrics_reporter.mojom

'use strict';

// Module namespace
var metrics_reporter = metrics_reporter || {};
metrics_reporter.mojom = metrics_reporter.mojom || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(metrics_reporter.mojom.PageMetricsSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    metrics_reporter.mojom.PageMetricsHost_OnGetMark_ParamsSpec, 'metrics_reporter.mojom.PageMetricsHost_OnGetMark_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    metrics_reporter.mojom.PageMetricsHost_OnGetMark_ResponseParamsSpec, 'metrics_reporter.mojom.PageMetricsHost_OnGetMark_ResponseParams', [
      mojo.internal.StructField('marked_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('time', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
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
      [page],
      false);
  }

  onGetMark(name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      metrics_reporter.mojom.PageMetricsHost_OnGetMark_ParamsSpec,
      metrics_reporter.mojom.PageMetricsHost_OnGetMark_ResponseParamsSpec,
      [name],
      false);
  }

  onClearMark(name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      metrics_reporter.mojom.PageMetricsHost_OnClearMark_ParamsSpec,
      null,
      [name],
      false);
  }

  onUmaReportTime(name, time) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      metrics_reporter.mojom.PageMetricsHost_OnUmaReportTime_ParamsSpec,
      null,
      [name, time],
      false);
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

metrics_reporter.mojom.PageMetricsHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(metrics_reporter.mojom.PageMetricsHost_OnPageRemoteCreated_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onPageRemoteCreated');
          const result = this.impl.onPageRemoteCreated(params.page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(metrics_reporter.mojom.PageMetricsHost_OnGetMark_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onGetMark');
          const result = this.impl.onGetMark(params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, metrics_reporter.mojom.PageMetricsHost_OnGetMark_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(metrics_reporter.mojom.PageMetricsHost_OnClearMark_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onClearMark');
          const result = this.impl.onClearMark(params.name);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(metrics_reporter.mojom.PageMetricsHost_OnUmaReportTime_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onUmaReportTime');
          const result = this.impl.onUmaReportTime(params.name, params.time);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

metrics_reporter.mojom.PageMetricsHostReceiver = metrics_reporter.mojom.PageMetricsHostReceiver;

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
      mojo.internal.StructField('marked_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
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
      [name],
      false);
  }

  onClearMark(name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      metrics_reporter.mojom.PageMetrics_OnClearMark_ParamsSpec,
      null,
      [name],
      false);
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

metrics_reporter.mojom.PageMetricsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(metrics_reporter.mojom.PageMetrics_OnGetMark_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onGetMark');
          const result = this.impl.onGetMark(params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, metrics_reporter.mojom.PageMetrics_OnGetMark_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(metrics_reporter.mojom.PageMetrics_OnClearMark_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onClearMark');
          const result = this.impl.onClearMark(params.name);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

metrics_reporter.mojom.PageMetricsReceiver = metrics_reporter.mojom.PageMetricsReceiver;

metrics_reporter.mojom.PageMetricsPtr = metrics_reporter.mojom.PageMetricsRemote;
metrics_reporter.mojom.PageMetricsRequest = metrics_reporter.mojom.PageMetricsPendingReceiver;

