// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.SharedWorkerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(connection_id, message_port) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SharedWorker_Connect_ParamsSpec,
      null,
      [connection_id, message_port],
      false);
  }

  terminate() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.SharedWorker_Connect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connect(params.connection_id, params.message_port);
          break;
        }
        case 1: {
          const params = blink.mojom.SharedWorker_Terminate_ParamsSpec.$.decode(message.payload);
          const result = this.impl.terminate();
          break;
        }
      }
    }});
  }
};

blink.mojom.SharedWorkerReceiver = blink.mojom.SharedWorkerReceiver;

blink.mojom.SharedWorkerPtr = blink.mojom.SharedWorkerRemote;
blink.mojom.SharedWorkerRequest = blink.mojom.SharedWorkerPendingReceiver;

