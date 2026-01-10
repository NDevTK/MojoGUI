// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_running_status_callback.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerRunningStatusCallback = {};
blink.mojom.ServiceWorkerRunningStatusCallback.$interfaceName = 'blink.mojom.ServiceWorkerRunningStatusCallback';
blink.mojom.ServiceWorkerRunningStatusCallback_OnStatusChanged_ParamsSpec = { $: {} };

// Interface: ServiceWorkerRunningStatusCallback
mojo.internal.Struct(
    blink.mojom.ServiceWorkerRunningStatusCallback_OnStatusChanged_ParamsSpec, 'blink.mojom.ServiceWorkerRunningStatusCallback_OnStatusChanged_Params', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.ServiceWorkerEmbeddedWorkerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ServiceWorkerRunningStatusCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerRunningStatusCallbackRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerRunningStatusCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerRunningStatusCallbackPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerRunningStatusCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerRunningStatusCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStatusChanged(status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerRunningStatusCallback_OnStatusChanged_ParamsSpec,
      null,
      [status],
      false);
  }

};

blink.mojom.ServiceWorkerRunningStatusCallback.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerRunningStatusCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerRunningStatusCallback',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerRunningStatusCallbackReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ServiceWorkerRunningStatusCallback_OnStatusChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStatusChanged(params.status);
          break;
        }
      }
    }});
  }
};

blink.mojom.ServiceWorkerRunningStatusCallbackReceiver = blink.mojom.ServiceWorkerRunningStatusCallbackReceiver;

blink.mojom.ServiceWorkerRunningStatusCallbackPtr = blink.mojom.ServiceWorkerRunningStatusCallbackRemote;
blink.mojom.ServiceWorkerRunningStatusCallbackRequest = blink.mojom.ServiceWorkerRunningStatusCallbackPendingReceiver;

