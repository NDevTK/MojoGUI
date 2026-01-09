// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/private_aggregation/private_aggregation_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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

// Interface: PrivateAggregationHost
blink.mojom.PrivateAggregationHost = {};

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
};

blink.mojom.PrivateAggregationHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  contributeToHistogram(contributions) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PrivateAggregationHost_ContributeToHistogram_ParamsSpec,
      null,
      [contributions]);
  }

  contributeToHistogramOnEvent(error_event, contributions) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PrivateAggregationHost_ContributeToHistogramOnEvent_ParamsSpec,
      null,
      [error_event, contributions]);
  }

  enableDebugMode(debug_key) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PrivateAggregationHost_EnableDebugMode_ParamsSpec,
      null,
      [debug_key]);
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

// ParamsSpec for ContributeToHistogram
blink.mojom.PrivateAggregationHost_ContributeToHistogram_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PrivateAggregationHost.ContributeToHistogram_Params',
      packedSize: 16,
      fields: [
        { name: 'contributions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ContributeToHistogramOnEvent
blink.mojom.PrivateAggregationHost_ContributeToHistogramOnEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PrivateAggregationHost.ContributeToHistogramOnEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'error_event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'contributions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableDebugMode
blink.mojom.PrivateAggregationHost_EnableDebugMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PrivateAggregationHost.EnableDebugMode_Params',
      packedSize: 16,
      fields: [
        { name: 'debug_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PrivateAggregationHostPtr = blink.mojom.PrivateAggregationHostRemote;
blink.mojom.PrivateAggregationHostRequest = blink.mojom.PrivateAggregationHostPendingReceiver;

