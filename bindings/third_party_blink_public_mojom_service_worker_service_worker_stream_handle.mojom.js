// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_stream_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ServiceWorkerStreamHandle
blink.mojom.mojom.ServiceWorkerStreamHandleSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerStreamHandle',
      packedSize: 24,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'callback_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerStreamCallbackRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ServiceWorkerStreamCallback
blink.mojom.mojom.ServiceWorkerStreamCallback = {};

blink.mojom.mojom.ServiceWorkerStreamCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ServiceWorkerStreamCallbackRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerStreamCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ServiceWorkerStreamCallbackPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ServiceWorkerStreamCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ServiceWorkerStreamCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCompleted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec,
      null,
      []);
  }

  onAborted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.ServiceWorkerStreamCallback.getRemote = function() {
  let remote = new blink.mojom.mojom.ServiceWorkerStreamCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerStreamCallback',
    'context');
  return remote.$;
};

// ParamsSpec for OnCompleted
blink.mojom.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerStreamCallback.OnCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnAborted
blink.mojom.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerStreamCallback.OnAborted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ServiceWorkerStreamCallbackPtr = blink.mojom.mojom.ServiceWorkerStreamCallbackRemote;
blink.mojom.mojom.ServiceWorkerStreamCallbackRequest = blink.mojom.mojom.ServiceWorkerStreamCallbackPendingReceiver;

