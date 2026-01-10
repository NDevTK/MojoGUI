// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/private_aggregation/private_aggregation_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Enum: PrivateAggregationErrorEvent
blink.mojom.mojom.PrivateAggregationErrorEvent = {
  kReportSuccess: 0,
  kTooManyContributions: 1,
  kEmptyReportDropped: 2,
  kPendingReportLimitReached: 3,
  kInsufficientBudget: 4,
  kContributionTimeoutReached: 5,
  kAlreadyTriggeredExternalError: 6,
};
blink.mojom.mojom.PrivateAggregationErrorEventSpec = { $: mojo.internal.Enum() };

// Struct: DebugKey
blink.mojom.mojom.DebugKeySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DebugKey',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DebugModeDetails
blink.mojom.mojom.DebugModeDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DebugModeDetails',
      packedSize: 24,
      fields: [
        { name: 'is_enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'debug_key', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DebugKeySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: PrivateAggregationHost
blink.mojom.mojom.PrivateAggregationHost = {};

blink.mojom.mojom.PrivateAggregationHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.PrivateAggregationHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PrivateAggregationHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.PrivateAggregationHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.PrivateAggregationHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.PrivateAggregationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  contributeToHistogram(contributions) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.PrivateAggregationHost_ContributeToHistogram_ParamsSpec,
      null,
      [contributions]);
  }

  contributeToHistogramOnEvent(error_event, contributions) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.PrivateAggregationHost_ContributeToHistogramOnEvent_ParamsSpec,
      null,
      [error_event, contributions]);
  }

  enableDebugMode(debug_key) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.PrivateAggregationHost_EnableDebugMode_ParamsSpec,
      null,
      [debug_key]);
  }

};

blink.mojom.mojom.PrivateAggregationHost.getRemote = function() {
  let remote = new blink.mojom.mojom.PrivateAggregationHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PrivateAggregationHost',
    'context');
  return remote.$;
};

// ParamsSpec for ContributeToHistogram
blink.mojom.mojom.PrivateAggregationHost_ContributeToHistogram_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PrivateAggregationHost.ContributeToHistogram_Params',
      packedSize: 16,
      fields: [
        { name: 'contributions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AggregatableReportHistogramContributionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ContributeToHistogramOnEvent
blink.mojom.mojom.PrivateAggregationHost_ContributeToHistogramOnEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PrivateAggregationHost.ContributeToHistogramOnEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'error_event', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PrivateAggregationErrorEventSpec, nullable: false, minVersion: 0 },
        { name: 'contributions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.AggregatableReportHistogramContributionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EnableDebugMode
blink.mojom.mojom.PrivateAggregationHost_EnableDebugMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PrivateAggregationHost.EnableDebugMode_Params',
      packedSize: 16,
      fields: [
        { name: 'debug_key', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DebugKeySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.PrivateAggregationHostPtr = blink.mojom.mojom.PrivateAggregationHostRemote;
blink.mojom.mojom.PrivateAggregationHostRequest = blink.mojom.mojom.PrivateAggregationHostPendingReceiver;

