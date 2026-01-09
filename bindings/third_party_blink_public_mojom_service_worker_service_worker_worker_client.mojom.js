// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_worker_client.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ServiceWorkerWorkerClient
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
      blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec.$,
      null,
      [mode]);
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
}};

// ParamsSpec for OnControllerChanged
blink.mojom.ServiceWorkerWorkerClient_OnControllerChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerWorkerClient.OnControllerChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
blink.mojom.ServiceWorkerWorkerClientPtr = blink.mojom.ServiceWorkerWorkerClientRemote;
blink.mojom.ServiceWorkerWorkerClientRequest = blink.mojom.ServiceWorkerWorkerClientPendingReceiver;

