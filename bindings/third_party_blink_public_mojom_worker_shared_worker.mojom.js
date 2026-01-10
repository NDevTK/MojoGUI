// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};


// Interface: SharedWorker
blink.mojom.mojom.SharedWorker = {};

blink.mojom.mojom.SharedWorkerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.SharedWorkerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedWorker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.SharedWorkerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.SharedWorkerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.SharedWorkerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(connection_id, message_port) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.SharedWorker_Connect_ParamsSpec,
      null,
      [connection_id, message_port]);
  }

  terminate() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.SharedWorker_Terminate_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.SharedWorker.getRemote = function() {
  let remote = new blink.mojom.mojom.SharedWorkerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedWorker',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
blink.mojom.mojom.SharedWorker_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorker.Connect_Params',
      packedSize: 24,
      fields: [
        { name: 'connection_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'message_port', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.MessagePortDescriptorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Terminate
blink.mojom.mojom.SharedWorker_Terminate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorker.Terminate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.SharedWorkerPtr = blink.mojom.mojom.SharedWorkerRemote;
blink.mojom.mojom.SharedWorkerRequest = blink.mojom.mojom.SharedWorkerPendingReceiver;

