// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/hyphenation/hyphenation.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.Hyphenation = {};
blink.mojom.Hyphenation.$interfaceName = 'blink.mojom.Hyphenation';
blink.mojom.Hyphenation_OpenDictionary_ParamsSpec = { $: {} };
blink.mojom.Hyphenation_OpenDictionary_ResponseParamsSpec = { $: {} };

// Interface: Hyphenation
mojo.internal.Struct(
    blink.mojom.Hyphenation_OpenDictionary_ParamsSpec, 'blink.mojom.Hyphenation_OpenDictionary_Params', [
      mojo.internal.StructField('locale', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Hyphenation_OpenDictionary_ResponseParamsSpec, 'blink.mojom.Hyphenation_OpenDictionary_ResponseParams', [
      mojo.internal.StructField('hyphenation_dictionary_handle', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.HyphenationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.HyphenationRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.Hyphenation';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.HyphenationPendingReceiver,
      handle);
    this.$ = new blink.mojom.HyphenationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.HyphenationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openDictionary(locale) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.Hyphenation_OpenDictionary_ParamsSpec,
      blink.mojom.Hyphenation_OpenDictionary_ResponseParamsSpec,
      [locale],
      false);
  }

};

blink.mojom.Hyphenation.getRemote = function() {
  let remote = new blink.mojom.HyphenationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.Hyphenation',
    'context');
  return remote.$;
};

blink.mojom.HyphenationReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: OpenDictionary
        try {
             decoder.decodeStruct(blink.mojom.Hyphenation_OpenDictionary_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDictionary (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.Hyphenation_OpenDictionary_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openDictionary');
          const result = this.impl.openDictionary(params.locale);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.Hyphenation_OpenDictionary_ResponseParamsSpec);
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

blink.mojom.HyphenationReceiver = blink.mojom.HyphenationReceiver;

blink.mojom.HyphenationPtr = blink.mojom.HyphenationRemote;
blink.mojom.HyphenationRequest = blink.mojom.HyphenationPendingReceiver;

