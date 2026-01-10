// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/histogram_fetcher.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};

metrics.mojom.UmaChildPingStatusSpec = { $: mojo.internal.Enum() };
metrics.mojom.UmaPingCallSourceSpec = { $: mojo.internal.Enum() };
metrics.mojom.ChildHistogramFetcherFactory = {};
metrics.mojom.ChildHistogramFetcherFactory.$interfaceName = 'metrics.mojom.ChildHistogramFetcherFactory';
metrics.mojom.ChildHistogramFetcherFactory_CreateFetcher_ParamsSpec = { $: {} };
metrics.mojom.ChildHistogramFetcher = {};
metrics.mojom.ChildHistogramFetcher.$interfaceName = 'metrics.mojom.ChildHistogramFetcher';
metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ParamsSpec = { $: {} };
metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ResponseParamsSpec = { $: {} };
metrics.mojom.ChildHistogramFetcher_Ping_ParamsSpec = { $: {} };
metrics.mojom.ChildHistogramFetcher_Ping_ResponseParamsSpec = { $: {} };

// Enum: UmaChildPingStatus
metrics.mojom.UmaChildPingStatus = {
  BROWSER_SENT_IPC: 0,
  CHILD_RECEIVED_IPC: 1,
  BROWSER_REPLY_CALLBACK: 2,
};

// Enum: UmaPingCallSource
metrics.mojom.UmaPingCallSource = {
  PERIODIC: 0,
  SHARED_MEMORY_SET_UP: 1,
};

// Interface: ChildHistogramFetcherFactory
mojo.internal.Struct(
    metrics.mojom.ChildHistogramFetcherFactory_CreateFetcher_ParamsSpec, 'metrics.mojom.ChildHistogramFetcherFactory_CreateFetcher_Params', [
      mojo.internal.StructField('shared_memory', 0, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec, null, true, 0, undefined),
      mojo.internal.StructField('child_histogram_fetcher', 8, 0, mojo.internal.InterfaceRequest(metrics.mojom.ChildHistogramFetcherRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

metrics.mojom.ChildHistogramFetcherFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.mojom.ChildHistogramFetcherFactoryRemote = class {
  static get $interfaceName() {
    return 'metrics.mojom.ChildHistogramFetcherFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.mojom.ChildHistogramFetcherFactoryPendingReceiver,
      handle);
    this.$ = new metrics.mojom.ChildHistogramFetcherFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.mojom.ChildHistogramFetcherFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createFetcher(shared_memory, child_histogram_fetcher) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.mojom.ChildHistogramFetcherFactory_CreateFetcher_ParamsSpec,
      null,
      [shared_memory, child_histogram_fetcher]);
  }

};

metrics.mojom.ChildHistogramFetcherFactory.getRemote = function() {
  let remote = new metrics.mojom.ChildHistogramFetcherFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.mojom.ChildHistogramFetcherFactory',
    'context');
  return remote.$;
};

metrics.mojom.ChildHistogramFetcherFactoryPtr = metrics.mojom.ChildHistogramFetcherFactoryRemote;
metrics.mojom.ChildHistogramFetcherFactoryRequest = metrics.mojom.ChildHistogramFetcherFactoryPendingReceiver;


// Interface: ChildHistogramFetcher
mojo.internal.Struct(
    metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ParamsSpec, 'metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ResponseParamsSpec, 'metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ResponseParams', [
      mojo.internal.StructField('deltas', 0, 0, mojo.internal.Array(mojo_base.mojom.ByteStringSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    metrics.mojom.ChildHistogramFetcher_Ping_ParamsSpec, 'metrics.mojom.ChildHistogramFetcher_Ping_Params', [
      mojo.internal.StructField('call_source', 0, 0, metrics.mojom.UmaPingCallSourceSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    metrics.mojom.ChildHistogramFetcher_Ping_ResponseParamsSpec, 'metrics.mojom.ChildHistogramFetcher_Ping_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

metrics.mojom.ChildHistogramFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.mojom.ChildHistogramFetcherRemote = class {
  static get $interfaceName() {
    return 'metrics.mojom.ChildHistogramFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.mojom.ChildHistogramFetcherPendingReceiver,
      handle);
    this.$ = new metrics.mojom.ChildHistogramFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.mojom.ChildHistogramFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getChildNonPersistentHistogramData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ParamsSpec,
      metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ResponseParamsSpec,
      []);
  }

  ping(call_source) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      metrics.mojom.ChildHistogramFetcher_Ping_ParamsSpec,
      metrics.mojom.ChildHistogramFetcher_Ping_ResponseParamsSpec,
      [call_source]);
  }

};

metrics.mojom.ChildHistogramFetcher.getRemote = function() {
  let remote = new metrics.mojom.ChildHistogramFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.mojom.ChildHistogramFetcher',
    'context');
  return remote.$;
};

metrics.mojom.ChildHistogramFetcherPtr = metrics.mojom.ChildHistogramFetcherRemote;
metrics.mojom.ChildHistogramFetcherRequest = metrics.mojom.ChildHistogramFetcherPendingReceiver;

