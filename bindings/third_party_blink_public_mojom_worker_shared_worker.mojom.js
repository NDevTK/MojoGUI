// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SharedWorker = {};
blink.mojom.SharedWorker.$interfaceName = 'blink.mojom.SharedWorker';
blink.mojom.SharedWorker_Connect_ParamsSpec = { $: {} };
blink.mojom.SharedWorker_Terminate_ParamsSpec = { $: {} };

// Interface: SharedWorker
mojo.internal.Struct(
    blink.mojom.SharedWorker_Connect_ParamsSpec, 'blink.mojom.SharedWorker_Connect_Params', [
      mojo.internal.StructField('message_port', 0, 0, blink.mojom.MessagePortDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connection_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedWorker_Terminate_ParamsSpec, 'blink.mojom.SharedWorker_Terminate_Params', [
    ],
    [[0, 8]]);

blink.mojom.SharedWorkerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedWorkerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedWorker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedWorkerPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedWorkerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connect(connection_id, message_port) {
    return this.$.connect(connection_id, message_port);
  }
  terminate() {
    return this.$.terminate();
  }
};

blink.mojom.SharedWorkerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SharedWorker', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  connect(connection_id, message_port) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SharedWorker_Connect_ParamsSpec,
      null,
      [connection_id, message_port],
      false);
  }

  terminate() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.SharedWorker_Terminate_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.SharedWorker.getRemote = function() {
  let remote = new blink.mojom.SharedWorkerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedWorker',
    'context');
  return remote.$;
};

blink.mojom.SharedWorkerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SharedWorker', [
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
             decoder.decodeStructInline(blink.mojom.SharedWorker_Connect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedWorker_Terminate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedWorker_Connect_ParamsSpec.$.structSpec);
          const result = this.impl.connect(params.connection_id, params.message_port);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedWorker_Terminate_ParamsSpec.$.structSpec);
          const result = this.impl.terminate();
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.SharedWorkerReceiver = blink.mojom.SharedWorkerReceiver;

blink.mojom.SharedWorkerPtr = blink.mojom.SharedWorkerRemote;
blink.mojom.SharedWorkerRequest = blink.mojom.SharedWorkerPendingReceiver;

