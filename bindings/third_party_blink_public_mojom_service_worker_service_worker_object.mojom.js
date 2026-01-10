// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_object.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
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
      mojo.internal.StructField('state', 8, 0, blink.mojom.ServiceWorkerStateSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host_remote', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: ServiceWorkerObjectHost
mojo.internal.Struct(
    blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec, 'blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_Params', [
      mojo.internal.StructField('message', 0, 0, blink.mojom.TransferableMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec, 'blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ResponseParamsSpec, 'blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ResponseParams', [
    ],
    [[0, 8]]);

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
      [message],
      false);
  }

  terminateForTesting() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec,
      blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ResponseParamsSpec,
      [],
      false);
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

blink.mojom.ServiceWorkerObjectHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec.$.decode(message.payload);
          const result = this.impl.postMessageToServiceWorker(params.message);
          break;
        }
        case 1: {
          const params = blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.terminateForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

blink.mojom.ServiceWorkerObjectHostReceiver = blink.mojom.ServiceWorkerObjectHostReceiver;

blink.mojom.ServiceWorkerObjectHostPtr = blink.mojom.ServiceWorkerObjectHostRemote;
blink.mojom.ServiceWorkerObjectHostRequest = blink.mojom.ServiceWorkerObjectHostPendingReceiver;


// Interface: ServiceWorkerObject
mojo.internal.Struct(
    blink.mojom.ServiceWorkerObject_StateChanged_ParamsSpec, 'blink.mojom.ServiceWorkerObject_StateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.ServiceWorkerStateSpec.$, null, false, 0, undefined),
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
      [state],
      false);
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

blink.mojom.ServiceWorkerObjectReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ServiceWorkerObject_StateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stateChanged(params.state);
          break;
        }
      }
    }});
  }
};

blink.mojom.ServiceWorkerObjectReceiver = blink.mojom.ServiceWorkerObjectReceiver;

blink.mojom.ServiceWorkerObjectPtr = blink.mojom.ServiceWorkerObjectRemote;
blink.mojom.ServiceWorkerObjectRequest = blink.mojom.ServiceWorkerObjectPendingReceiver;

