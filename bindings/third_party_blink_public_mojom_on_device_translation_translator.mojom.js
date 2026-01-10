// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/on_device_translation/translator.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.Translator = {};
blink.mojom.Translator.$interfaceName = 'blink.mojom.Translator';
blink.mojom.Translator_Translate_ParamsSpec = { $: {} };
blink.mojom.Translator_TranslateStreaming_ParamsSpec = { $: {} };

// Interface: Translator
mojo.internal.Struct(
    blink.mojom.Translator_Translate_ParamsSpec, 'blink.mojom.Translator_Translate_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pending_responder', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.Translator_TranslateStreaming_ParamsSpec, 'blink.mojom.Translator_TranslateStreaming_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pending_responder', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.ModelStreamingResponderRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.TranslatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.TranslatorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.Translator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.TranslatorPendingReceiver,
      handle);
    this.$ = new blink.mojom.TranslatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.TranslatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  translate(input, pending_responder) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.Translator_Translate_ParamsSpec,
      null,
      [input, pending_responder],
      false);
  }

  translateStreaming(input, pending_responder) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.Translator_TranslateStreaming_ParamsSpec,
      null,
      [input, pending_responder],
      false);
  }

};

blink.mojom.Translator.getRemote = function() {
  let remote = new blink.mojom.TranslatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.Translator',
    'context');
  return remote.$;
};

blink.mojom.TranslatorReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Translate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Translator_Translate_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Translate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: TranslateStreaming
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Translator_TranslateStreaming_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TranslateStreaming (1)');
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
          const params = decoder.decodeStructInline(blink.mojom.Translator_Translate_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.translate');
          const result = this.impl.translate(params.input, params.pending_responder);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Translator_TranslateStreaming_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.translateStreaming');
          const result = this.impl.translateStreaming(params.input, params.pending_responder);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.TranslatorReceiver = blink.mojom.TranslatorReceiver;

blink.mojom.TranslatorPtr = blink.mojom.TranslatorRemote;
blink.mojom.TranslatorRequest = blink.mojom.TranslatorPendingReceiver;

