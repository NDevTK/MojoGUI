// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_object.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  postMessageToServiceWorker(message) {
    return this.$.postMessageToServiceWorker(message);
  }
  terminateForTesting() {
    return this.$.terminateForTesting();
  }
};

blink.mojom.ServiceWorkerObjectHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerObjectHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  postMessageToServiceWorker(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec,
      null,
      [message],
      false);
  }

  terminateForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerObjectHost', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerObjectHost_PostMessageToServiceWorker_ParamsSpec.$.structSpec);
          const result = this.impl.postMessageToServiceWorker(params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerObjectHost_TerminateForTesting_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
  stateChanged(state) {
    return this.$.stateChanged(state);
  }
};

blink.mojom.ServiceWorkerObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerObject', [
      { explicit: null },
    ]);
  }

  stateChanged(state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerObject', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerObject_StateChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerObject_StateChanged_ParamsSpec.$.structSpec);
          const result = this.impl.stateChanged(params.state);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ServiceWorkerObjectReceiver = blink.mojom.ServiceWorkerObjectReceiver;

blink.mojom.ServiceWorkerObjectPtr = blink.mojom.ServiceWorkerObjectRemote;
blink.mojom.ServiceWorkerObjectRequest = blink.mojom.ServiceWorkerObjectPendingReceiver;

