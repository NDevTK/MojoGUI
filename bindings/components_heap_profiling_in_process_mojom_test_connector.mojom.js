// Auto-generated MojoJS binding
// Source: chromium_src/components/heap_profiling/in_process/mojom/test_connector.mojom
// Module: heap_profiling.mojom

'use strict';

// Module namespace
var heap_profiling = heap_profiling || {};
heap_profiling.mojom = heap_profiling.mojom || {};
var metrics = metrics || {};

heap_profiling.mojom.TestConnector = {};
heap_profiling.mojom.TestConnector.$interfaceName = 'heap_profiling.mojom.TestConnector';
heap_profiling.mojom.TestConnector_ConnectSnapshotController_ParamsSpec = { $: {} };
heap_profiling.mojom.TestConnector_ConnectSnapshotController_ResponseParamsSpec = { $: {} };
heap_profiling.mojom.TestConnector_ConnectProfileCollector_ParamsSpec = { $: {} };
heap_profiling.mojom.TestConnector_ConnectProfileCollector_ResponseParamsSpec = { $: {} };
heap_profiling.mojom.TestConnector_Disconnect_ParamsSpec = { $: {} };

// Interface: TestConnector
mojo.internal.Struct(
    heap_profiling.mojom.TestConnector_ConnectSnapshotController_ParamsSpec, 'heap_profiling.mojom.TestConnector_ConnectSnapshotController_Params', [
      mojo.internal.StructField('controller', 0, 0, mojo.internal.InterfaceRequest(heap_profiling.mojom.SnapshotControllerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    heap_profiling.mojom.TestConnector_ConnectSnapshotController_ResponseParamsSpec, 'heap_profiling.mojom.TestConnector_ConnectSnapshotController_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    heap_profiling.mojom.TestConnector_ConnectProfileCollector_ParamsSpec, 'heap_profiling.mojom.TestConnector_ConnectProfileCollector_Params', [
      mojo.internal.StructField('collector', 0, 0, mojo.internal.InterfaceProxy(metrics.mojom.CallStackProfileCollectorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    heap_profiling.mojom.TestConnector_ConnectProfileCollector_ResponseParamsSpec, 'heap_profiling.mojom.TestConnector_ConnectProfileCollector_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    heap_profiling.mojom.TestConnector_Disconnect_ParamsSpec, 'heap_profiling.mojom.TestConnector_Disconnect_Params', [
    ],
    [[0, 8]]);

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
      heap_profiling.mojom.TestConnector_ConnectSnapshotController_ParamsSpec,
      heap_profiling.mojom.TestConnector_ConnectSnapshotController_ResponseParamsSpec,
      [controller],
      false);
  }

  connectProfileCollector(collector) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      heap_profiling.mojom.TestConnector_ConnectProfileCollector_ParamsSpec,
      heap_profiling.mojom.TestConnector_ConnectProfileCollector_ResponseParamsSpec,
      [collector],
      false);
  }

  disconnect() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      heap_profiling.mojom.TestConnector_Disconnect_ParamsSpec,
      null,
      [],
      false);
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
};

heap_profiling.mojom.TestConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = heap_profiling.mojom.TestConnector_ConnectSnapshotController_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connectSnapshotController(params.controller);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, heap_profiling.mojom.TestConnector_ConnectSnapshotController_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = heap_profiling.mojom.TestConnector_ConnectProfileCollector_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connectProfileCollector(params.collector);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, heap_profiling.mojom.TestConnector_ConnectProfileCollector_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = heap_profiling.mojom.TestConnector_Disconnect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.disconnect();
          break;
        }
      }
    });
  }
};

heap_profiling.mojom.TestConnectorReceiver = heap_profiling.mojom.TestConnectorReceiver;

heap_profiling.mojom.TestConnectorPtr = heap_profiling.mojom.TestConnectorRemote;
heap_profiling.mojom.TestConnectorRequest = heap_profiling.mojom.TestConnectorPendingReceiver;

