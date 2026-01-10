// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/prerender/prerender.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var gfx = gfx || {};
var url = url || {};

blink.mojom.PrerenderTriggerTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.PrerenderAttributesSpec = { $: {} };
blink.mojom.NoStatePrefetchProcessor = {};
blink.mojom.NoStatePrefetchProcessor.$interfaceName = 'blink.mojom.NoStatePrefetchProcessor';
blink.mojom.NoStatePrefetchProcessor_Start_ParamsSpec = { $: {} };
blink.mojom.NoStatePrefetchProcessor_Cancel_ParamsSpec = { $: {} };

// Enum: PrerenderTriggerType
blink.mojom.PrerenderTriggerType = {
  kLinkRelPrerender: 0,
  kLinkRelNext: 1,
};

// Struct: PrerenderAttributes
mojo.internal.Struct(
    blink.mojom.PrerenderAttributesSpec, 'blink.mojom.PrerenderAttributes', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trigger_type', 8, 0, blink.mojom.PrerenderTriggerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('referrer', 16, 0, blink.mojom.ReferrerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('view_size', 24, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: NoStatePrefetchProcessor
mojo.internal.Struct(
    blink.mojom.NoStatePrefetchProcessor_Start_ParamsSpec, 'blink.mojom.NoStatePrefetchProcessor_Start_Params', [
      mojo.internal.StructField('prerender_attribute', 0, 0, blink.mojom.PrerenderAttributesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.NoStatePrefetchProcessor_Cancel_ParamsSpec, 'blink.mojom.NoStatePrefetchProcessor_Cancel_Params', [
    ],
    [[0, 8]]);

blink.mojom.NoStatePrefetchProcessorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.NoStatePrefetchProcessorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.NoStatePrefetchProcessor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.NoStatePrefetchProcessorPendingReceiver,
      handle);
    this.$ = new blink.mojom.NoStatePrefetchProcessorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.NoStatePrefetchProcessorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(prerender_attribute) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.NoStatePrefetchProcessor_Start_ParamsSpec,
      null,
      [prerender_attribute],
      false);
  }

  cancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.NoStatePrefetchProcessor_Cancel_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.NoStatePrefetchProcessor.getRemote = function() {
  let remote = new blink.mojom.NoStatePrefetchProcessorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.NoStatePrefetchProcessor',
    'context');
  return remote.$;
};

blink.mojom.NoStatePrefetchProcessorReceiver = class {
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
        
        // Try Method 0: Start
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.NoStatePrefetchProcessor_Start_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.NoStatePrefetchProcessor_Cancel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
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
          const params = decoder.decodeStruct(blink.mojom.NoStatePrefetchProcessor_Start_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start(params.prerender_attribute);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.NoStatePrefetchProcessor_Cancel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.NoStatePrefetchProcessorReceiver = blink.mojom.NoStatePrefetchProcessorReceiver;

blink.mojom.NoStatePrefetchProcessorPtr = blink.mojom.NoStatePrefetchProcessorRemote;
blink.mojom.NoStatePrefetchProcessorRequest = blink.mojom.NoStatePrefetchProcessorPendingReceiver;

