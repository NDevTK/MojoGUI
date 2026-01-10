// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_stream_handle.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerStreamHandleSpec = { $: {} };
blink.mojom.ServiceWorkerStreamCallback = {};
blink.mojom.ServiceWorkerStreamCallback.$interfaceName = 'blink.mojom.ServiceWorkerStreamCallback';
blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec = { $: {} };

// Struct: ServiceWorkerStreamHandle
mojo.internal.Struct(
    blink.mojom.ServiceWorkerStreamHandleSpec, 'blink.mojom.ServiceWorkerStreamHandle', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('callback_receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerStreamCallbackSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ServiceWorkerStreamCallback
mojo.internal.Struct(
    blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec, 'blink.mojom.ServiceWorkerStreamCallback_OnCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec, 'blink.mojom.ServiceWorkerStreamCallback_OnAborted_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  onAborted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec,
      null,
      [],
      false);
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

blink.mojom.ServiceWorkerStreamCallbackReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ServiceWorkerStreamCallback_OnCompleted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onCompleted();
          break;
        }
        case 1: {
          const params = blink.mojom.ServiceWorkerStreamCallback_OnAborted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAborted();
          break;
        }
      }
    }});
  }
};

blink.mojom.ServiceWorkerStreamCallbackReceiver = blink.mojom.ServiceWorkerStreamCallbackReceiver;

blink.mojom.ServiceWorkerStreamCallbackPtr = blink.mojom.ServiceWorkerStreamCallbackRemote;
blink.mojom.ServiceWorkerStreamCallbackRequest = blink.mojom.ServiceWorkerStreamCallbackPendingReceiver;

