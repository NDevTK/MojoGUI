// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/metrics_reporter/metrics_reporter.mojom
// Module: metrics_reporter.mojom

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
  onPageRemoteCreated(page) {
    return this.$.onPageRemoteCreated(page);
  }
  onGetMark(name) {
    return this.$.onGetMark(name);
  }
  onClearMark(name) {
    return this.$.onClearMark(name);
  }
  onUmaReportTime(name, time) {
    return this.$.onUmaReportTime(name, time);
  }
};

metrics_reporter.mojom.PageMetricsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageMetricsHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPageRemoteCreated(page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      metrics_reporter.mojom.PageMetricsHost_OnPageRemoteCreated_ParamsSpec,
      null,
      [page],
      false);
  }

  onGetMark(name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      metrics_reporter.mojom.PageMetricsHost_OnGetMark_ParamsSpec,
      metrics_reporter.mojom.PageMetricsHost_OnGetMark_ResponseParamsSpec,
      [name],
      false);
  }

  onClearMark(name) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      metrics_reporter.mojom.PageMetricsHost_OnClearMark_ParamsSpec,
      null,
      [name],
      false);
  }

  onUmaReportTime(name, time) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageMetricsHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(metrics_reporter.mojom.PageMetricsHost_OnPageRemoteCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(metrics_reporter.mojom.PageMetricsHost_OnGetMark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(metrics_reporter.mojom.PageMetricsHost_OnClearMark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(metrics_reporter.mojom.PageMetricsHost_OnUmaReportTime_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(metrics_reporter.mojom.PageMetricsHost_OnPageRemoteCreated_ParamsSpec.$.structSpec);
          const result = this.impl.onPageRemoteCreated(params.page);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(metrics_reporter.mojom.PageMetricsHost_OnGetMark_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(metrics_reporter.mojom.PageMetricsHost_OnClearMark_ParamsSpec.$.structSpec);
          const result = this.impl.onClearMark(params.name);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(metrics_reporter.mojom.PageMetricsHost_OnUmaReportTime_ParamsSpec.$.structSpec);
          const result = this.impl.onUmaReportTime(params.name, params.time);
          break;
        }
      }
      } catch (err) {}
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
  onGetMark(name) {
    return this.$.onGetMark(name);
  }
  onClearMark(name) {
    return this.$.onClearMark(name);
  }
};

metrics_reporter.mojom.PageMetricsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageMetrics', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onGetMark(name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      metrics_reporter.mojom.PageMetrics_OnGetMark_ParamsSpec,
      metrics_reporter.mojom.PageMetrics_OnGetMark_ResponseParamsSpec,
      [name],
      false);
  }

  onClearMark(name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('PageMetrics', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(metrics_reporter.mojom.PageMetrics_OnGetMark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(metrics_reporter.mojom.PageMetrics_OnClearMark_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(metrics_reporter.mojom.PageMetrics_OnGetMark_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(metrics_reporter.mojom.PageMetrics_OnClearMark_ParamsSpec.$.structSpec);
          const result = this.impl.onClearMark(params.name);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

metrics_reporter.mojom.PageMetricsReceiver = metrics_reporter.mojom.PageMetricsReceiver;

metrics_reporter.mojom.PageMetricsPtr = metrics_reporter.mojom.PageMetricsRemote;
metrics_reporter.mojom.PageMetricsRequest = metrics_reporter.mojom.PageMetricsPendingReceiver;

