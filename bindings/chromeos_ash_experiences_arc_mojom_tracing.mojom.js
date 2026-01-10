// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/tracing.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.TracingInstance = {};
arc.mojom.TracingInstance.$interfaceName = 'arc.mojom.TracingInstance';
arc.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec = { $: {} };
arc.mojom.TracingInstance_QueryAvailableCategories_ResponseParamsSpec = { $: {} };
arc.mojom.TracingInstance_StartTracing_ParamsSpec = { $: {} };
arc.mojom.TracingInstance_StartTracing_ResponseParamsSpec = { $: {} };
arc.mojom.TracingInstance_StopTracing_ParamsSpec = { $: {} };
arc.mojom.TracingInstance_StopTracing_ResponseParamsSpec = { $: {} };

// Interface: TracingInstance
mojo.internal.Struct(
    arc.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec, 'arc.mojom.TracingInstance_QueryAvailableCategories_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.TracingInstance_QueryAvailableCategories_ResponseParamsSpec, 'arc.mojom.TracingInstance_QueryAvailableCategories_ResponseParams', [
      mojo.internal.StructField('categories', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TracingInstance_StartTracing_ParamsSpec, 'arc.mojom.TracingInstance_StartTracing_Params', [
      mojo.internal.StructField('categories', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('socket', 8, 0, mojo.internal.Handle, null, true, 1, undefined),
    ],
    [[0, 16], [1, 24]]);

mojo.internal.Struct(
    arc.mojom.TracingInstance_StartTracing_ResponseParamsSpec, 'arc.mojom.TracingInstance_StartTracing_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TracingInstance_StopTracing_ParamsSpec, 'arc.mojom.TracingInstance_StopTracing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.TracingInstance_StopTracing_ResponseParamsSpec, 'arc.mojom.TracingInstance_StopTracing_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.TracingInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.TracingInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TracingInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.TracingInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.TracingInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.TracingInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  queryAvailableCategories() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec,
      arc.mojom.TracingInstance_QueryAvailableCategories_ResponseParamsSpec,
      [],
      false);
  }

  startTracing(categories, socket) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.TracingInstance_StartTracing_ParamsSpec,
      arc.mojom.TracingInstance_StartTracing_ResponseParamsSpec,
      [categories, socket],
      false);
  }

  stopTracing() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.TracingInstance_StopTracing_ParamsSpec,
      arc.mojom.TracingInstance_StopTracing_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.TracingInstance.getRemote = function() {
  let remote = new arc.mojom.TracingInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TracingInstance',
    'context');
  return remote.$;
};

arc.mojom.TracingInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: QueryAvailableCategories
        try {
             decoder.decodeStruct(arc.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueryAvailableCategories (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: StartTracing
        try {
             decoder.decodeStruct(arc.mojom.TracingInstance_StartTracing_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartTracing (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: StopTracing
        try {
             decoder.decodeStruct(arc.mojom.TracingInstance_StopTracing_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopTracing (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.TracingInstance_QueryAvailableCategories_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.queryAvailableCategories');
          const result = this.impl.queryAvailableCategories();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TracingInstance_QueryAvailableCategories_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.TracingInstance_StartTracing_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.startTracing');
          const result = this.impl.startTracing(params.categories, params.socket);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TracingInstance_StartTracing_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.TracingInstance_StopTracing_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stopTracing');
          const result = this.impl.stopTracing();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TracingInstance_StopTracing_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.TracingInstanceReceiver = arc.mojom.TracingInstanceReceiver;

arc.mojom.TracingInstancePtr = arc.mojom.TracingInstanceRemote;
arc.mojom.TracingInstanceRequest = arc.mojom.TracingInstancePendingReceiver;

