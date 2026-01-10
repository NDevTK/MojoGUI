// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/dedicated_worker_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.DedicatedWorkerHost = {};
blink.mojom.DedicatedWorkerHost.$interfaceName = 'blink.mojom.DedicatedWorkerHost';

// Interface: DedicatedWorkerHost
blink.mojom.DedicatedWorkerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DedicatedWorkerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DedicatedWorkerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DedicatedWorkerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.DedicatedWorkerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DedicatedWorkerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

blink.mojom.DedicatedWorkerHost.getRemote = function() {
  let remote = new blink.mojom.DedicatedWorkerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DedicatedWorkerHost',
    'context');
  return remote.$;
};

blink.mojom.DedicatedWorkerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DedicatedWorkerHostReceiver = blink.mojom.DedicatedWorkerHostReceiver;

blink.mojom.DedicatedWorkerHostPtr = blink.mojom.DedicatedWorkerHostRemote;
blink.mojom.DedicatedWorkerHostRequest = blink.mojom.DedicatedWorkerHostPendingReceiver;

