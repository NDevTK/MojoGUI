// Auto-generated MojoJS binding
// Source: chromium_src/components/heap_profiling/in_process/mojom/test_connector.mojom
// Module: heap_profiling.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  connectSnapshotController(controller) {
    return this.$.connectSnapshotController(controller);
  }
  connectProfileCollector(collector) {
    return this.$.connectProfileCollector(collector);
  }
  disconnect() {
    return this.$.disconnect();
  }
};

heap_profiling.mojom.TestConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TestConnector', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  connectSnapshotController(controller) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      heap_profiling.mojom.TestConnector_ConnectSnapshotController_ParamsSpec,
      heap_profiling.mojom.TestConnector_ConnectSnapshotController_ResponseParamsSpec,
      [controller],
      false);
  }

  connectProfileCollector(collector) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      heap_profiling.mojom.TestConnector_ConnectProfileCollector_ParamsSpec,
      heap_profiling.mojom.TestConnector_ConnectProfileCollector_ResponseParamsSpec,
      [collector],
      false);
  }

  disconnect() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TestConnector', [
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
             decoder.decodeStructInline(heap_profiling.mojom.TestConnector_ConnectSnapshotController_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(heap_profiling.mojom.TestConnector_ConnectProfileCollector_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(heap_profiling.mojom.TestConnector_Disconnect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(heap_profiling.mojom.TestConnector_ConnectSnapshotController_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(heap_profiling.mojom.TestConnector_ConnectProfileCollector_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(heap_profiling.mojom.TestConnector_Disconnect_ParamsSpec.$.structSpec);
          const result = this.impl.disconnect();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

heap_profiling.mojom.TestConnectorReceiver = heap_profiling.mojom.TestConnectorReceiver;

heap_profiling.mojom.TestConnectorPtr = heap_profiling.mojom.TestConnectorRemote;
heap_profiling.mojom.TestConnectorRequest = heap_profiling.mojom.TestConnectorPendingReceiver;

