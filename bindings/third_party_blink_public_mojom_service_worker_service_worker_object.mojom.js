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

blink.mojom.ServiceWorkerObjectInfoSpec = { $: {} };
blink.mojom.ServiceWorkerObjectHost = {};
blink.mojom.ServiceWorkerObjectHost.$interfaceName = 'blink.mojom.ServiceWorkerObjectHost';
blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerObject = {};
blink.mojom.ServiceWorkerObject.$interfaceName = 'blink.mojom.ServiceWorkerObject';
blink.mojom.ServiceWorkerObject_StateChanged_ParamsSpec = { $: {} };

// Struct: ServiceWorkerObjectInfo
mojo.internal.Struct(
    blink.mojom.ServiceWorkerObjectInfoSpec, 'blink.mojom.ServiceWorkerObjectInfo', [
      mojo.internal.StructField('version_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('state', 32, 0, blink.mojom.ServiceWorkerStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('host_remote', 16, 0, mojo.internal.AssociatedInterfaceProxy(blink.mojom.ServiceWorkerObjectHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('receiver', 24, 0, mojo.internal.AssociatedInterfaceRequest(blink.mojom.ServiceWorkerObjectRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: ServiceWorkerObjectHost
mojo.internal.Struct(
    blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec, 'blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_Params', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.TransferableMessageSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec, 'blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ResponseParamsSpec, 'blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

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
      blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ResponseParamsSpec,
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

blink.mojom.ServiceWorkerObjectHostPtr = blink.mojom.ServiceWorkerObjectHostRemote;
blink.mojom.ServiceWorkerObjectHostRequest = blink.mojom.ServiceWorkerObjectHostPendingReceiver;


// Interface: ServiceWorkerObject
mojo.internal.Struct(
    blink.mojom.ServiceWorkerObject_StateChanged_ParamsSpec, 'blink.mojom.ServiceWorkerObject_StateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.ServiceWorkerStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

blink.mojom.ServiceWorkerObjectPtr = blink.mojom.ServiceWorkerObjectRemote;
blink.mojom.ServiceWorkerObjectRequest = blink.mojom.ServiceWorkerObjectPendingReceiver;

