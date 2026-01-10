// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/histogram_fetcher.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};


// Enum: UmaChildPingStatus
metrics.mojom.mojom.UmaChildPingStatus = {
  BROWSER_SENT_IPC: 0,
  CHILD_RECEIVED_IPC: 1,
  BROWSER_REPLY_CALLBACK: 2,
};
metrics.mojom.mojom.UmaChildPingStatusSpec = { $: mojo.internal.Enum() };

// Enum: UmaPingCallSource
metrics.mojom.mojom.UmaPingCallSource = {
  PERIODIC: 0,
  SHARED_MEMORY_SET_UP: 1,
};
metrics.mojom.mojom.UmaPingCallSourceSpec = { $: mojo.internal.Enum() };

// Interface: ChildHistogramFetcherFactory
metrics.mojom.mojom.ChildHistogramFetcherFactory = {};

metrics.mojom.mojom.ChildHistogramFetcherFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.mojom.mojom.ChildHistogramFetcherFactoryRemote = class {
  static get $interfaceName() {
    return 'metrics.mojom.ChildHistogramFetcherFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.mojom.mojom.ChildHistogramFetcherFactoryPendingReceiver,
      handle);
    this.$ = new metrics.mojom.mojom.ChildHistogramFetcherFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.mojom.mojom.ChildHistogramFetcherFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createFetcher(shared_memory, child_histogram_fetcher) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.mojom.mojom.ChildHistogramFetcherFactory_CreateFetcher_ParamsSpec,
      null,
      [shared_memory, child_histogram_fetcher]);
  }

};

metrics.mojom.mojom.ChildHistogramFetcherFactory.getRemote = function() {
  let remote = new metrics.mojom.mojom.ChildHistogramFetcherFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.mojom.ChildHistogramFetcherFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateFetcher
metrics.mojom.mojom.ChildHistogramFetcherFactory_CreateFetcher_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.ChildHistogramFetcherFactory.CreateFetcher_Params',
      packedSize: 24,
      fields: [
        { name: 'shared_memory', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: true, minVersion: 0 },
        { name: 'child_histogram_fetcher', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(metrics.mojom.ChildHistogramFetcherRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
metrics.mojom.mojom.ChildHistogramFetcherFactoryPtr = metrics.mojom.mojom.ChildHistogramFetcherFactoryRemote;
metrics.mojom.mojom.ChildHistogramFetcherFactoryRequest = metrics.mojom.mojom.ChildHistogramFetcherFactoryPendingReceiver;


// Interface: ChildHistogramFetcher
metrics.mojom.mojom.ChildHistogramFetcher = {};

metrics.mojom.mojom.ChildHistogramFetcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.mojom.mojom.ChildHistogramFetcherRemote = class {
  static get $interfaceName() {
    return 'metrics.mojom.ChildHistogramFetcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.mojom.mojom.ChildHistogramFetcherPendingReceiver,
      handle);
    this.$ = new metrics.mojom.mojom.ChildHistogramFetcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.mojom.mojom.ChildHistogramFetcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getChildNonPersistentHistogramData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      metrics.mojom.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ParamsSpec,
      metrics.mojom.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ResponseParamsSpec,
      []);
  }

  ping(call_source) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      metrics.mojom.mojom.ChildHistogramFetcher_Ping_ParamsSpec,
      null,
      [call_source]);
  }

};

metrics.mojom.mojom.ChildHistogramFetcher.getRemote = function() {
  let remote = new metrics.mojom.mojom.ChildHistogramFetcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.mojom.ChildHistogramFetcher',
    'context');
  return remote.$;
};

// ParamsSpec for GetChildNonPersistentHistogramData
metrics.mojom.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.ChildHistogramFetcher.GetChildNonPersistentHistogramData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

metrics.mojom.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.ChildHistogramFetcher.GetChildNonPersistentHistogramData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'deltas', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.ByteStringSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Ping
metrics.mojom.mojom.ChildHistogramFetcher_Ping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.ChildHistogramFetcher.Ping_Params',
      packedSize: 16,
      fields: [
        { name: 'call_source', packedOffset: 0, packedBitOffset: 0, type: metrics.mojom.UmaPingCallSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
metrics.mojom.mojom.ChildHistogramFetcherPtr = metrics.mojom.mojom.ChildHistogramFetcherRemote;
metrics.mojom.mojom.ChildHistogramFetcherRequest = metrics.mojom.mojom.ChildHistogramFetcherPendingReceiver;

