// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/private_aggregation/private_aggregation_host.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.PrivateAggregationErrorEventSpec = { $: mojo.internal.Enum() };
blink.mojom.DebugKeySpec = { $: {} };
blink.mojom.DebugModeDetailsSpec = { $: {} };
blink.mojom.PrivateAggregationHost = {};
blink.mojom.PrivateAggregationHost.$interfaceName = 'blink.mojom.PrivateAggregationHost';
blink.mojom.PrivateAggregationHost_ContributeToHistogram_ParamsSpec = { $: {} };
blink.mojom.PrivateAggregationHost_ContributeToHistogramOnEvent_ParamsSpec = { $: {} };
blink.mojom.PrivateAggregationHost_EnableDebugMode_ParamsSpec = { $: {} };

// Enum: PrivateAggregationErrorEvent
blink.mojom.PrivateAggregationErrorEvent = {
  kReportSuccess: 0,
  kTooManyContributions: 1,
  kEmptyReportDropped: 2,
  kPendingReportLimitReached: 3,
  kInsufficientBudget: 4,
  kContributionTimeoutReached: 5,
  kAlreadyTriggeredExternalError: 6,
};

// Struct: DebugKey
mojo.internal.Struct(
    blink.mojom.DebugKeySpec, 'blink.mojom.DebugKey', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DebugModeDetails
mojo.internal.Struct(
    blink.mojom.DebugModeDetailsSpec, 'blink.mojom.DebugModeDetails', [
      mojo.internal.StructField('debug_key', 0, 0, blink.mojom.DebugKeySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PrivateAggregationHost
mojo.internal.Struct(
    blink.mojom.PrivateAggregationHost_ContributeToHistogram_ParamsSpec, 'blink.mojom.PrivateAggregationHost_ContributeToHistogram_Params', [
      mojo.internal.StructField('contributions', 0, 0, mojo.internal.Array(blink.mojom.AggregatableReportHistogramContributionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PrivateAggregationHost_ContributeToHistogramOnEvent_ParamsSpec, 'blink.mojom.PrivateAggregationHost_ContributeToHistogramOnEvent_Params', [
      mojo.internal.StructField('error_event', 0, 0, blink.mojom.PrivateAggregationErrorEventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('contributions', 8, 0, mojo.internal.Array(blink.mojom.AggregatableReportHistogramContributionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PrivateAggregationHost_EnableDebugMode_ParamsSpec, 'blink.mojom.PrivateAggregationHost_EnableDebugMode_Params', [
      mojo.internal.StructField('debug_key', 0, 0, blink.mojom.DebugKeySpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.PrivateAggregationHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PrivateAggregationHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PrivateAggregationHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PrivateAggregationHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.PrivateAggregationHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  contributeToHistogram(contributions) {
    return this.$.contributeToHistogram(contributions);
  }
  contributeToHistogramOnEvent(error_event, contributions) {
    return this.$.contributeToHistogramOnEvent(error_event, contributions);
  }
  enableDebugMode(debug_key) {
    return this.$.enableDebugMode(debug_key);
  }
};

blink.mojom.PrivateAggregationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrivateAggregationHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  contributeToHistogram(contributions) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.PrivateAggregationHost_ContributeToHistogram_ParamsSpec,
      null,
      [contributions],
      false);
  }

  contributeToHistogramOnEvent(error_event, contributions) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.PrivateAggregationHost_ContributeToHistogramOnEvent_ParamsSpec,
      null,
      [error_event, contributions],
      false);
  }

  enableDebugMode(debug_key) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.PrivateAggregationHost_EnableDebugMode_ParamsSpec,
      null,
      [debug_key],
      false);
  }

};

blink.mojom.PrivateAggregationHost.getRemote = function() {
  let remote = new blink.mojom.PrivateAggregationHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PrivateAggregationHost',
    'context');
  return remote.$;
};

blink.mojom.PrivateAggregationHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrivateAggregationHost', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(blink.mojom.PrivateAggregationHost_ContributeToHistogram_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PrivateAggregationHost_ContributeToHistogramOnEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PrivateAggregationHost_EnableDebugMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PrivateAggregationHost_ContributeToHistogram_ParamsSpec.$.structSpec);
          const result = this.impl.contributeToHistogram(params.contributions);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PrivateAggregationHost_ContributeToHistogramOnEvent_ParamsSpec.$.structSpec);
          const result = this.impl.contributeToHistogramOnEvent(params.error_event, params.contributions);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PrivateAggregationHost_EnableDebugMode_ParamsSpec.$.structSpec);
          const result = this.impl.enableDebugMode(params.debug_key);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.PrivateAggregationHostReceiver = blink.mojom.PrivateAggregationHostReceiver;

blink.mojom.PrivateAggregationHostPtr = blink.mojom.PrivateAggregationHostRemote;
blink.mojom.PrivateAggregationHostRequest = blink.mojom.PrivateAggregationHostPendingReceiver;

