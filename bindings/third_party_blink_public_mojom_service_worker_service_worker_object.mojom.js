// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_object.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};


// Struct: ServiceWorkerObjectInfo
blink.mojom.mojom.ServiceWorkerObjectInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerObjectInfo',
      packedSize: 48,
      fields: [
        { name: 'version_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.ServiceWorkerStateSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'host_remote', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.ServiceWorkerObjectHostRemote), nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(blink.mojom.ServiceWorkerObjectRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: ServiceWorkerObjectHost
blink.mojom.mojom.ServiceWorkerObjectHost = {};

blink.mojom.mojom.ServiceWorkerObjectHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ServiceWorkerObjectHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerObjectHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ServiceWorkerObjectHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ServiceWorkerObjectHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ServiceWorkerObjectHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  postMessageToServiceWorker(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec,
      null,
      [message]);
  }

  terminateForTesting() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.ServiceWorkerObjectHost.getRemote = function() {
  let remote = new blink.mojom.mojom.ServiceWorkerObjectHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerObjectHost',
    'context');
  return remote.$;
};

// ParamsSpec for PostMessageToServiceWorker
blink.mojom.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerObjectHost.PostMessageToServiceWorker_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.TransferableMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for TerminateForTesting
blink.mojom.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerObjectHost.TerminateForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ServiceWorkerObjectHostPtr = blink.mojom.mojom.ServiceWorkerObjectHostRemote;
blink.mojom.mojom.ServiceWorkerObjectHostRequest = blink.mojom.mojom.ServiceWorkerObjectHostPendingReceiver;


// Interface: ServiceWorkerObject
blink.mojom.mojom.ServiceWorkerObject = {};

blink.mojom.mojom.ServiceWorkerObjectPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ServiceWorkerObjectRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerObject';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ServiceWorkerObjectPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ServiceWorkerObjectRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ServiceWorkerObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  stateChanged(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ServiceWorkerObject_StateChanged_ParamsSpec,
      null,
      [state]);
  }

};

blink.mojom.mojom.ServiceWorkerObject.getRemote = function() {
  let remote = new blink.mojom.mojom.ServiceWorkerObjectRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerObject',
    'context');
  return remote.$;
};

// ParamsSpec for StateChanged
blink.mojom.mojom.ServiceWorkerObject_StateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerObject.StateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ServiceWorkerObjectPtr = blink.mojom.mojom.ServiceWorkerObjectRemote;
blink.mojom.mojom.ServiceWorkerObjectRequest = blink.mojom.mojom.ServiceWorkerObjectPendingReceiver;

