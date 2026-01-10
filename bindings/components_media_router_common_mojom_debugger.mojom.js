// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/debugger.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};
var mojo_base = mojo_base || {};

media_router.mojom.Debugger = {};
media_router.mojom.Debugger.$interfaceName = 'media_router.mojom.Debugger';
media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec = { $: {} };
media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParamsSpec = { $: {} };
media_router.mojom.Debugger_OnMirroringStats_ParamsSpec = { $: {} };
media_router.mojom.Debugger_BindReceiver_ParamsSpec = { $: {} };

// Interface: Debugger
mojo.internal.Struct(
    media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec, 'media_router.mojom.Debugger_ShouldFetchMirroringStats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParamsSpec, 'media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParams', [
      mojo.internal.StructField('should_fetch', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.Debugger_OnMirroringStats_ParamsSpec, 'media_router.mojom.Debugger_OnMirroringStats_Params', [
      mojo.internal.StructField('json_stats', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media_router.mojom.Debugger_BindReceiver_ParamsSpec, 'media_router.mojom.Debugger_BindReceiver_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_router.mojom.DebuggerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

media_router.mojom.DebuggerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media_router.mojom.DebuggerRemote = class {
  static get $interfaceName() {
    return 'media_router.mojom.Debugger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media_router.mojom.DebuggerPendingReceiver,
      handle);
    this.$ = new media_router.mojom.DebuggerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media_router.mojom.DebuggerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  shouldFetchMirroringStats() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec,
      media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParamsSpec,
      [],
      false);
  }

  onMirroringStats(json_stats) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media_router.mojom.Debugger_OnMirroringStats_ParamsSpec,
      null,
      [json_stats],
      false);
  }

  bindReceiver(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media_router.mojom.Debugger_BindReceiver_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

media_router.mojom.Debugger.getRemote = function() {
  let remote = new media_router.mojom.DebuggerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media_router.mojom.Debugger',
    'context');
  return remote.$;
};

media_router.mojom.DebuggerReceiver = class {
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
        
        // Try Method 0: ShouldFetchMirroringStats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldFetchMirroringStats (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnMirroringStats
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_router.mojom.Debugger_OnMirroringStats_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMirroringStats (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: BindReceiver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media_router.mojom.Debugger_BindReceiver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindReceiver (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(media_router.mojom.Debugger_ShouldFetchMirroringStats_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.shouldFetchMirroringStats');
          const result = this.impl.shouldFetchMirroringStats();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media_router.mojom.Debugger_ShouldFetchMirroringStats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_router.mojom.Debugger_OnMirroringStats_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMirroringStats');
          const result = this.impl.onMirroringStats(params.json_stats);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media_router.mojom.Debugger_BindReceiver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindReceiver');
          const result = this.impl.bindReceiver(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media_router.mojom.DebuggerReceiver = media_router.mojom.DebuggerReceiver;

media_router.mojom.DebuggerPtr = media_router.mojom.DebuggerRemote;
media_router.mojom.DebuggerRequest = media_router.mojom.DebuggerPendingReceiver;

