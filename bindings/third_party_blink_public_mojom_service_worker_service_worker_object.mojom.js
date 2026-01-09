// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_object.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ServiceWorkerObjectHost
blink.mojom.ServiceWorkerObjectHost = {};

blink.mojom.ServiceWorkerObjectHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerObjectHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerObjectHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerObjectHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerObjectHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerObjectHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  postMessageToServiceWorker(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec,
      null,
      [message]);
  }

  terminateForTesting() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.ServiceWorkerObjectHost.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerObjectHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerObjectHost',
    'context');
  return remote.$;
};

// ParamsSpec for PostMessageToServiceWorker
blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerObjectHost.PostMessageToServiceWorker_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TerminateForTesting
blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerObjectHost.TerminateForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ServiceWorkerObjectHostPtr = blink.mojom.ServiceWorkerObjectHostRemote;
blink.mojom.ServiceWorkerObjectHostRequest = blink.mojom.ServiceWorkerObjectHostPendingReceiver;


// Interface: ServiceWorkerObject
blink.mojom.ServiceWorkerObject = {};

blink.mojom.ServiceWorkerObjectPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerObjectRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerObject';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerObjectPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerObjectRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  stateChanged(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerObject_StateChanged_ParamsSpec,
      null,
      [state]);
  }

};

blink.mojom.ServiceWorkerObject.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerObjectRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerObject',
    'context');
  return remote.$;
};

// ParamsSpec for StateChanged
blink.mojom.ServiceWorkerObject_StateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerObject.StateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ServiceWorkerObjectPtr = blink.mojom.ServiceWorkerObjectRemote;
blink.mojom.ServiceWorkerObjectRequest = blink.mojom.ServiceWorkerObjectPendingReceiver;

