// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/public/mojom/histogram_fetcher.mojom
// Module: metrics.mojom

'use strict';

// Module namespace
var metrics = metrics || {};
metrics.mojom = metrics.mojom || {};


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
metrics.mojom.ChildHistogramFetcherFactory = {};

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
      null,
      [shared_memory, child_histogram_fetcher],
      undefined,
      undefined
    );
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

// ParamsSpec for CreateFetcher
metrics.mojom.ChildHistogramFetcherFactory_CreateFetcher_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.ChildHistogramFetcherFactory.CreateFetcher_Params',
      packedSize: 24,
      fields: [
        { name: 'shared_memory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'child_histogram_fetcher', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
metrics.mojom.ChildHistogramFetcherFactoryPtr = metrics.mojom.ChildHistogramFetcherFactoryRemote;
metrics.mojom.ChildHistogramFetcherFactoryRequest = metrics.mojom.ChildHistogramFetcherFactoryPendingReceiver;


// Interface: ChildHistogramFetcher
metrics.mojom.ChildHistogramFetcher = {};

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
      metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  ping(call_source) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      metrics.mojom.ChildHistogramFetcher_Ping_ParamsSpec,
      null,
      null,
      [call_source],
      undefined,
      undefined
    );
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

// ParamsSpec for GetChildNonPersistentHistogramData
metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ParamsSpec = {
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

metrics.mojom.ChildHistogramFetcher_GetChildNonPersistentHistogramData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.ChildHistogramFetcher.GetChildNonPersistentHistogramData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'deltas', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Ping
metrics.mojom.ChildHistogramFetcher_Ping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'metrics.mojom.ChildHistogramFetcher.Ping_Params',
      packedSize: 16,
      fields: [
        { name: 'call_source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
metrics.mojom.ChildHistogramFetcherPtr = metrics.mojom.ChildHistogramFetcherRemote;
metrics.mojom.ChildHistogramFetcherRequest = metrics.mojom.ChildHistogramFetcherPendingReceiver;

