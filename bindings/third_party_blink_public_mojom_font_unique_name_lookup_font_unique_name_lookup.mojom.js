// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/font_unique_name_lookup/font_unique_name_lookup.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.FontUniqueNameLookup = {};
blink.mojom.FontUniqueNameLookup.$interfaceName = 'blink.mojom.FontUniqueNameLookup';
blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ParamsSpec = { $: {} };
blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ResponseParamsSpec = { $: {} };
blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ParamsSpec = { $: {} };
blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParamsSpec = { $: {} };

// Interface: FontUniqueNameLookup
mojo.internal.Struct(
    blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ParamsSpec, 'blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ResponseParamsSpec, 'blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ResponseParams', [
      mojo.internal.StructField('font_lookup_table', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('sync_available', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ParamsSpec, 'blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParamsSpec, 'blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParams', [
      mojo.internal.StructField('font_lookup_table', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FontUniqueNameLookupPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FontUniqueNameLookupRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FontUniqueNameLookup';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FontUniqueNameLookupPendingReceiver,
      handle);
    this.$ = new blink.mojom.FontUniqueNameLookupRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FontUniqueNameLookupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUniqueNameLookupTableIfAvailable() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ParamsSpec,
      blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ResponseParamsSpec,
      [],
      false);
  }

  getUniqueNameLookupTable() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ParamsSpec,
      blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.FontUniqueNameLookup.getRemote = function() {
  let remote = new blink.mojom.FontUniqueNameLookupRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FontUniqueNameLookup',
    'context');
  return remote.$;
};

blink.mojom.FontUniqueNameLookupReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: GetUniqueNameLookupTableIfAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUniqueNameLookupTableIfAvailable (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetUniqueNameLookupTable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUniqueNameLookupTable (1)');
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
          const params = decoder.decodeStruct(blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUniqueNameLookupTableIfAvailable');
          const result = this.impl.getUniqueNameLookupTableIfAvailable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTableIfAvailable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUniqueNameLookupTable');
          const result = this.impl.getUniqueNameLookupTable();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FontUniqueNameLookup_GetUniqueNameLookupTable_ResponseParamsSpec);
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

blink.mojom.FontUniqueNameLookupReceiver = blink.mojom.FontUniqueNameLookupReceiver;

blink.mojom.FontUniqueNameLookupPtr = blink.mojom.FontUniqueNameLookupRemote;
blink.mojom.FontUniqueNameLookupRequest = blink.mojom.FontUniqueNameLookupPendingReceiver;

