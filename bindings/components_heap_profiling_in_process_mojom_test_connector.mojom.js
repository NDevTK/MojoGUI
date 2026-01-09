// Auto-generated MojoJS binding
// Source: chromium_src/components/heap_profiling/in_process/mojom/test_connector.mojom
// Module: heap_profiling.mojom

'use strict';

// Module namespace
var heap_profiling = heap_profiling || {};
heap_profiling.mojom = heap_profiling.mojom || {};


// Interface: TestConnector
heap_profiling.mojom.TestConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

heap_profiling.mojom.TestConnectorRemote = class {
  static get $interfaceName() {
    return 'heap_profiling.mojom.TestConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      heap_profiling.mojom.TestConnectorPendingReceiver,
      handle);
    this.$ = new heap_profiling.mojom.TestConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

heap_profiling.mojom.TestConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectSnapshotController(controller) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      heap_profiling.mojom.TestConnector_ConnectSnapshotController_ParamsSpec.$,
      null,
      [controller]);
  }

  connectProfileCollector(collector) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      heap_profiling.mojom.TestConnector_ConnectProfileCollector_ParamsSpec.$,
      null,
      [collector]);
  }

  disconnect() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      heap_profiling.mojom.TestConnector_Disconnect_ParamsSpec.$,
      null,
      []);
  }

};

heap_profiling.mojom.TestConnector.getRemote = function() {
  let remote = new heap_profiling.mojom.TestConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'heap_profiling.mojom.TestConnector',
    'context');
  return remote.$;
}};

// ParamsSpec for ConnectSnapshotController
heap_profiling.mojom.TestConnector_ConnectSnapshotController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.TestConnector.ConnectSnapshotController_Params',
      packedSize: 16,
      fields: [
        { name: 'controller', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ConnectProfileCollector
heap_profiling.mojom.TestConnector_ConnectProfileCollector_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.TestConnector.ConnectProfileCollector_Params',
      packedSize: 16,
      fields: [
        { name: 'collector', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Disconnect
heap_profiling.mojom.TestConnector_Disconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'heap_profiling.mojom.TestConnector.Disconnect_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
heap_profiling.mojom.TestConnectorPtr = heap_profiling.mojom.TestConnectorRemote;
heap_profiling.mojom.TestConnectorRequest = heap_profiling.mojom.TestConnectorPendingReceiver;

