// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_stream_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ServiceWorkerStreamCallback
blink.mojom.ServiceWorkerStreamCallback = {};

blink.mojom.ServiceWorkerStreamCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerStreamCallbackRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerStreamCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerStreamCallbackPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerStreamCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerStreamCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCompleted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec,
      null,
      []);
  }

  onAborted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.ServiceWorkerStreamCallback.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerStreamCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerStreamCallback',
    'context');
  return remote.$;
};

// ParamsSpec for OnCompleted
blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerStreamCallback.OnCompleted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAborted
blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerStreamCallback.OnAborted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ServiceWorkerStreamCallbackPtr = blink.mojom.ServiceWorkerStreamCallbackRemote;
blink.mojom.ServiceWorkerStreamCallbackRequest = blink.mojom.ServiceWorkerStreamCallbackPendingReceiver;

