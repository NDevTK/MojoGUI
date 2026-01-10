// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_worker_client.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.ServiceWorkerWorkerClient = {};
blink.mojom.ServiceWorkerWorkerClient.$interfaceName = 'blink.mojom.ServiceWorkerWorkerClient';
blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec = { $: {} };

// Interface: ServiceWorkerWorkerClient
mojo.internal.Struct(
    blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec, 'blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_Params', [
      mojo.internal.StructField('mode', 0, 0, blink.mojom.ControllerServiceWorkerModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ServiceWorkerWorkerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerWorkerClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerWorkerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerWorkerClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerWorkerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerWorkerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onControllerChanged(mode) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec,
      null,
      [mode],
      false);
  }

};

blink.mojom.ServiceWorkerWorkerClient.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerWorkerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerWorkerClient',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerWorkerClientReceiver = class {
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
          const params = blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onControllerChanged(params.mode);
          break;
        }
      }
    }});
  }
};

blink.mojom.ServiceWorkerWorkerClientReceiver = blink.mojom.ServiceWorkerWorkerClientReceiver;

blink.mojom.ServiceWorkerWorkerClientPtr = blink.mojom.ServiceWorkerWorkerClientRemote;
blink.mojom.ServiceWorkerWorkerClientRequest = blink.mojom.ServiceWorkerWorkerClientPendingReceiver;

