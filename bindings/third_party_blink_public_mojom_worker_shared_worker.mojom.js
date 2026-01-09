// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SharedWorker
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
      blink.mojom.SharedWorker_Connect_ParamsSpec.$,
      null,
      [connection_id, message_port]);
  }

  terminate() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SharedWorker_Terminate_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for Connect
blink.mojom.SharedWorker_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorker.Connect_Params',
      packedSize: 24,
      fields: [
        { name: 'connection_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'message_port', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Terminate
blink.mojom.SharedWorker_Terminate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedWorker.Terminate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SharedWorkerPtr = blink.mojom.SharedWorkerRemote;
blink.mojom.SharedWorkerRequest = blink.mojom.SharedWorkerPendingReceiver;

