// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/tracing_service.mojom
// Module: tracing.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};
var sandbox = sandbox || {};

tracing.mojom.ClientInfoSpec = { $: {} };
tracing.mojom.TracingService = {};
tracing.mojom.TracingService.$interfaceName = 'tracing.mojom.TracingService';
tracing.mojom.TracingService_Initialize_ParamsSpec = { $: {} };
tracing.mojom.TracingService_AddClient_ParamsSpec = { $: {} };
tracing.mojom.TracingService_BindConsumerHost_ParamsSpec = { $: {} };

tracing.mojom.kTracingSandbox = sandbox.mojom.Sandbox.kUtility;

tracing.mojom.kTracingSandbox = sandbox.mojom.Sandbox.kService;

// Struct: ClientInfo
mojo.internal.Struct(
    tracing.mojom.ClientInfoSpec, 'tracing.mojom.ClientInfo', [
      mojo.internal.StructField('process', 0, 0, mojo.internal.InterfaceProxy(tracing.mojom.TracedProcessRemote), null, false, 0, undefined),
      mojo.internal.StructField('pid', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TracingService
mojo.internal.Struct(
    tracing.mojom.TracingService_Initialize_ParamsSpec, 'tracing.mojom.TracingService_Initialize_Params', [
      mojo.internal.StructField('clients', 0, 0, mojo.internal.Array(tracing.mojom.ClientInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.TracingService_AddClient_ParamsSpec, 'tracing.mojom.TracingService_AddClient_Params', [
      mojo.internal.StructField('client', 0, 0, tracing.mojom.ClientInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.TracingService_BindConsumerHost_ParamsSpec, 'tracing.mojom.TracingService_BindConsumerHost_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(tracing.mojom.ConsumerHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

tracing.mojom.TracingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.TracingServiceRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.TracingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.TracingServicePendingReceiver,
      handle);
    this.$ = new tracing.mojom.TracingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize(clients) {
    return this.$.initialize(clients);
  }
  addClient(client) {
    return this.$.addClient(client);
  }
  bindConsumerHost(receiver) {
    return this.$.bindConsumerHost(receiver);
  }
};

tracing.mojom.TracingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TracingService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize(clients) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tracing.mojom.TracingService_Initialize_ParamsSpec,
      null,
      [clients],
      false);
  }

  addClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      tracing.mojom.TracingService_AddClient_ParamsSpec,
      null,
      [client],
      false);
  }

  bindConsumerHost(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      tracing.mojom.TracingService_BindConsumerHost_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

tracing.mojom.TracingService.getRemote = function() {
  let remote = new tracing.mojom.TracingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.TracingService',
    'context');
  return remote.$;
};

tracing.mojom.TracingServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TracingService', [
      { explicit: null },
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
             decoder.decodeStructInline(tracing.mojom.TracingService_Initialize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingService_AddClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracingService_BindConsumerHost_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingService_Initialize_ParamsSpec.$.structSpec);
          const result = this.impl.initialize(params.clients);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingService_AddClient_ParamsSpec.$.structSpec);
          const result = this.impl.addClient(params.client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracingService_BindConsumerHost_ParamsSpec.$.structSpec);
          const result = this.impl.bindConsumerHost(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

tracing.mojom.TracingServiceReceiver = tracing.mojom.TracingServiceReceiver;

tracing.mojom.TracingServicePtr = tracing.mojom.TracingServiceRemote;
tracing.mojom.TracingServiceRequest = tracing.mojom.TracingServicePendingReceiver;

