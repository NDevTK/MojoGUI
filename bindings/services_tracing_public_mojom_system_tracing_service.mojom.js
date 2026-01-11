// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/system_tracing_service.mojom
// Module: tracing.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};
var mojo_base = mojo_base || {};

tracing.mojom.SystemTracingService = {};
tracing.mojom.SystemTracingService.$interfaceName = 'tracing.mojom.SystemTracingService';
tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec = { $: {} };
tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec = { $: {} };

// Interface: SystemTracingService
mojo.internal.Struct(
    tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec, 'tracing.mojom.SystemTracingService_OpenProducerSocket_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec, 'tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParams', [
      mojo.internal.StructField('traced_socket', 0, 0, mojo_base.mojom.FileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

tracing.mojom.SystemTracingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.SystemTracingServiceRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.SystemTracingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.SystemTracingServicePendingReceiver,
      handle);
    this.$ = new tracing.mojom.SystemTracingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  openProducerSocket() {
    return this.$.openProducerSocket();
  }
};

tracing.mojom.SystemTracingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SystemTracingService', [
      { explicit: null },
    ]);
  }

  openProducerSocket() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec,
      tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec,
      [],
      false);
  }

};

tracing.mojom.SystemTracingService.getRemote = function() {
  let remote = new tracing.mojom.SystemTracingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.SystemTracingService',
    'context');
  return remote.$;
};

tracing.mojom.SystemTracingServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SystemTracingService', [
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
             decoder.decodeStructInline(tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.SystemTracingService_OpenProducerSocket_ParamsSpec.$.structSpec);
          const result = this.impl.openProducerSocket();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tracing.mojom.SystemTracingService_OpenProducerSocket_ResponseParamsSpec);
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

tracing.mojom.SystemTracingServiceReceiver = tracing.mojom.SystemTracingServiceReceiver;

tracing.mojom.SystemTracingServicePtr = tracing.mojom.SystemTracingServiceRemote;
tracing.mojom.SystemTracingServiceRequest = tracing.mojom.SystemTracingServicePendingReceiver;

