// Auto-generated MojoJS binding
// Source: chromium_src/services/tracing/public/mojom/traced_process.mojom
// Module: tracing.mojom

// Module namespace
var tracing = tracing || {};
tracing.mojom = tracing.mojom || {};

tracing.mojom.ConnectToTracingRequestSpec = { $: {} };
tracing.mojom.TracedProcess = {};
tracing.mojom.TracedProcess.$interfaceName = 'tracing.mojom.TracedProcess';
tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec = { $: {} };
tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParamsSpec = { $: {} };

// Struct: ConnectToTracingRequest
mojo.internal.Struct(
    tracing.mojom.ConnectToTracingRequestSpec, 'tracing.mojom.ConnectToTracingRequest', [
      mojo.internal.StructField('perfetto_service', 0, 0, mojo.internal.InterfaceProxy(tracing.mojom.PerfettoServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: TracedProcess
mojo.internal.Struct(
    tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec, 'tracing.mojom.TracedProcess_ConnectToTracingService_Params', [
      mojo.internal.StructField('request', 0, 0, tracing.mojom.ConnectToTracingRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParamsSpec, 'tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParams', [
    ],
    [[0, 8]]);

tracing.mojom.TracedProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tracing.mojom.TracedProcessRemote = class {
  static get $interfaceName() {
    return 'tracing.mojom.TracedProcess';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tracing.mojom.TracedProcessPendingReceiver,
      handle);
    this.$ = new tracing.mojom.TracedProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connectToTracingService(request) {
    return this.$.connectToTracingService(request);
  }
};

tracing.mojom.TracedProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TracedProcess', [
      { explicit: null },
    ]);
  }

  connectToTracingService(request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec,
      tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParamsSpec,
      [request],
      false);
  }

};

tracing.mojom.TracedProcess.getRemote = function() {
  let remote = new tracing.mojom.TracedProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tracing.mojom.TracedProcess',
    'context');
  return remote.$;
};

tracing.mojom.TracedProcessReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TracedProcess', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tracing.mojom.TracedProcess_ConnectToTracingService_ParamsSpec.$.structSpec);
          const result = this.impl.connectToTracingService(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, tracing.mojom.TracedProcess_ConnectToTracingService_ResponseParamsSpec);
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

tracing.mojom.TracedProcessReceiver = tracing.mojom.TracedProcessReceiver;

tracing.mojom.TracedProcessPtr = tracing.mojom.TracedProcessRemote;
tracing.mojom.TracedProcessRequest = tracing.mojom.TracedProcessPendingReceiver;

