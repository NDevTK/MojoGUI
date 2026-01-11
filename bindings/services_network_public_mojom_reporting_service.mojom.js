// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/reporting_service.mojom
// Module: network.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var url = url || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('body', 40, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 48, 0, network.mojom.ReportingApiReportStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('depth', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('attempts', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ReportingApiEndpoint
mojo.internal.Struct(
    network.mojom.ReportingApiEndpointSpec, 'network.mojom.ReportingApiEndpoint', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('network_anonymization_key', 24, 0, network.mojom.NetworkAnonymizationKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reporting_source', 32, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('attempted_uploads', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('successful_uploads', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('attempted_reports', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('successful_reports', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('priority', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('weight', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
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
  onReportAdded(report) {
    return this.$.onReportAdded(report);
  }
  onReportUpdated(report) {
    return this.$.onReportUpdated(report);
  }
  onEndpointsUpdatedForOrigin(endpoints) {
    return this.$.onEndpointsUpdatedForOrigin(endpoints);
  }
};

network.mojom.ReportingApiObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ReportingApiObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onReportAdded(report) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      network.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec,
      null,
      [report],
      false);
  }

  onReportUpdated(report) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      network.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec,
      null,
      [report],
      false);
  }

  onEndpointsUpdatedForOrigin(endpoints) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec,
      null,
      [endpoints],
      false);
  }

};

network.mojom.ReportingApiObserver.getRemote = function() {
  let remote = new network.mojom.ReportingApiObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.ReportingApiObserver',
    'context');
  return remote.$;
};

network.mojom.ReportingApiObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ReportingApiObserver', [
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
             decoder.decodeStructInline(network.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ReportingApiObserver_OnReportAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onReportAdded(params.report);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ReportingApiObserver_OnReportUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onReportUpdated(params.report);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(network.mojom.ReportingApiObserver_OnEndpointsUpdatedForOrigin_ParamsSpec.$.structSpec);
          const result = this.impl.onEndpointsUpdatedForOrigin(params.endpoints);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

network.mojom.ReportingApiObserverReceiver = network.mojom.ReportingApiObserverReceiver;

network.mojom.ReportingApiObserverPtr = network.mojom.ReportingApiObserverRemote;
network.mojom.ReportingApiObserverRequest = network.mojom.ReportingApiObserverPendingReceiver;

