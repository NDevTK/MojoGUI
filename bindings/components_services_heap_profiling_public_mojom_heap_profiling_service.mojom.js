// Auto-generated MojoJS binding
// Source: chromium_src/components/services/heap_profiling/public/mojom/heap_profiling_service.mojom
// Module: heap_profiling.mojom

// Module namespace
var heap_profiling = heap_profiling || {};
heap_profiling.mojom = heap_profiling.mojom || {};
var mojo_base = mojo_base || {};

heap_profiling.mojom.ProcessTypeSpec = { $: mojo.internal.Enum() };
heap_profiling.mojom.ProfilingService = {};
heap_profiling.mojom.ProfilingService.$interfaceName = 'heap_profiling.mojom.ProfilingService';
heap_profiling.mojom.ProfilingService_AddProfilingClient_ParamsSpec = { $: {} };
heap_profiling.mojom.ProfilingService_AddProfilingClient_ResponseParamsSpec = { $: {} };
heap_profiling.mojom.ProfilingService_GetProfiledPids_ParamsSpec = { $: {} };
heap_profiling.mojom.ProfilingService_GetProfiledPids_ResponseParamsSpec = { $: {} };

// Enum: ProcessType
heap_profiling.mojom.ProcessType = {
  OTHER: 0,
  BROWSER: 1,
  RENDERER: 2,
  GPU: 3,
  LAST: 3,
};

// Interface: ProfilingService
mojo.internal.Struct(
    heap_profiling.mojom.ProfilingService_AddProfilingClient_ParamsSpec, 'heap_profiling.mojom.ProfilingService_AddProfilingClient_Params', [
      mojo.internal.StructField('pid', 0, 0, mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(heap_profiling.mojom.ProfilingClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('process_type', 16, 0, heap_profiling.mojom.ProcessTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('params', 24, 0, heap_profiling.mojom.ProfilingParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    heap_profiling.mojom.ProfilingService_AddProfilingClient_ResponseParamsSpec, 'heap_profiling.mojom.ProfilingService_AddProfilingClient_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    heap_profiling.mojom.ProfilingService_GetProfiledPids_ParamsSpec, 'heap_profiling.mojom.ProfilingService_GetProfiledPids_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    heap_profiling.mojom.ProfilingService_GetProfiledPids_ResponseParamsSpec, 'heap_profiling.mojom.ProfilingService_GetProfiledPids_ResponseParams', [
      mojo.internal.StructField('pids', 0, 0, mojo.internal.Array(mojo_base.mojom.ProcessIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

heap_profiling.mojom.ProfilingServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

heap_profiling.mojom.ProfilingServiceRemote = class {
  static get $interfaceName() {
    return 'heap_profiling.mojom.ProfilingService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      heap_profiling.mojom.ProfilingServicePendingReceiver,
      handle);
    this.$ = new heap_profiling.mojom.ProfilingServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addProfilingClient(pid, client, process_type, params) {
    return this.$.addProfilingClient(pid, client, process_type, params);
  }
  getProfiledPids() {
    return this.$.getProfiledPids();
  }
};

heap_profiling.mojom.ProfilingServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProfilingService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  addProfilingClient(pid, client, process_type, params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      heap_profiling.mojom.ProfilingService_AddProfilingClient_ParamsSpec,
      heap_profiling.mojom.ProfilingService_AddProfilingClient_ResponseParamsSpec,
      [pid, client, process_type, params],
      false);
  }

  getProfiledPids() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      heap_profiling.mojom.ProfilingService_GetProfiledPids_ParamsSpec,
      heap_profiling.mojom.ProfilingService_GetProfiledPids_ResponseParamsSpec,
      [],
      false);
  }

};

heap_profiling.mojom.ProfilingService.getRemote = function() {
  let remote = new heap_profiling.mojom.ProfilingServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'heap_profiling.mojom.ProfilingService',
    'context');
  return remote.$;
};

heap_profiling.mojom.ProfilingServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProfilingService', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(heap_profiling.mojom.ProfilingService_AddProfilingClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(heap_profiling.mojom.ProfilingService_GetProfiledPids_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(heap_profiling.mojom.ProfilingService_AddProfilingClient_ParamsSpec.$.structSpec);
          const result = this.impl.addProfilingClient(params.pid, params.client, params.process_type, params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, heap_profiling.mojom.ProfilingService_AddProfilingClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(heap_profiling.mojom.ProfilingService_GetProfiledPids_ParamsSpec.$.structSpec);
          const result = this.impl.getProfiledPids();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, heap_profiling.mojom.ProfilingService_GetProfiledPids_ResponseParamsSpec);
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

heap_profiling.mojom.ProfilingServiceReceiver = heap_profiling.mojom.ProfilingServiceReceiver;

heap_profiling.mojom.ProfilingServicePtr = heap_profiling.mojom.ProfilingServiceRemote;
heap_profiling.mojom.ProfilingServiceRequest = heap_profiling.mojom.ProfilingServicePendingReceiver;

