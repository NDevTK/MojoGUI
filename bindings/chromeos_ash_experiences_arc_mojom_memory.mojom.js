// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/memory.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ReclaimTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.ReclaimRequestSpec = { $: {} };
arc.mojom.ReclaimResultSpec = { $: {} };
arc.mojom.MemoryInstance = {};
arc.mojom.MemoryInstance.$interfaceName = 'arc.mojom.MemoryInstance';
arc.mojom.MemoryInstance_DropCaches_ParamsSpec = { $: {} };
arc.mojom.MemoryInstance_DropCaches_ResponseParamsSpec = { $: {} };
arc.mojom.MemoryInstance_Reclaim_ParamsSpec = { $: {} };
arc.mojom.MemoryInstance_Reclaim_ResponseParamsSpec = { $: {} };

// Enum: ReclaimType
arc.mojom.ReclaimType = {
  ANON: 0,
  ALL: 1,
};

// Struct: ReclaimRequest
mojo.internal.Struct(
    arc.mojom.ReclaimRequestSpec, 'arc.mojom.ReclaimRequest', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.ReclaimTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ReclaimResult
mojo.internal.Struct(
    arc.mojom.ReclaimResultSpec, 'arc.mojom.ReclaimResult', [
      mojo.internal.StructField('reclaimed', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('unreclaimed', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: MemoryInstance
mojo.internal.Struct(
    arc.mojom.MemoryInstance_DropCaches_ParamsSpec, 'arc.mojom.MemoryInstance_DropCaches_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.MemoryInstance_DropCaches_ResponseParamsSpec, 'arc.mojom.MemoryInstance_DropCaches_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MemoryInstance_Reclaim_ParamsSpec, 'arc.mojom.MemoryInstance_Reclaim_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.ReclaimRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MemoryInstance_Reclaim_ResponseParamsSpec, 'arc.mojom.MemoryInstance_Reclaim_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, arc.mojom.ReclaimResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.MemoryInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MemoryInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MemoryInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MemoryInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.MemoryInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MemoryInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dropCaches() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.MemoryInstance_DropCaches_ParamsSpec,
      arc.mojom.MemoryInstance_DropCaches_ResponseParamsSpec,
      [],
      false);
  }

  reclaim(request) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.MemoryInstance_Reclaim_ParamsSpec,
      arc.mojom.MemoryInstance_Reclaim_ResponseParamsSpec,
      [request],
      false);
  }

};

arc.mojom.MemoryInstance.getRemote = function() {
  let remote = new arc.mojom.MemoryInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MemoryInstance',
    'context');
  return remote.$;
};

arc.mojom.MemoryInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(3, 1); // Default ordinal 3 -> Index 1
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DropCaches
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.MemoryInstance_DropCaches_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DropCaches (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Reclaim
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.MemoryInstance_Reclaim_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Reclaim (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.MemoryInstance_DropCaches_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dropCaches');
          const result = this.impl.dropCaches();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.MemoryInstance_DropCaches_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.MemoryInstance_Reclaim_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.reclaim');
          const result = this.impl.reclaim(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.MemoryInstance_Reclaim_ResponseParamsSpec);
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

arc.mojom.MemoryInstanceReceiver = arc.mojom.MemoryInstanceReceiver;

arc.mojom.MemoryInstancePtr = arc.mojom.MemoryInstanceRemote;
arc.mojom.MemoryInstanceRequest = arc.mojom.MemoryInstancePendingReceiver;

