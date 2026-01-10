// Auto-generated MojoJS binding
// Source: chromium_src/components/on_device_translation/public/mojom/translator.mojom
// Module: on_device_translation.mojom

'use strict';

// Module namespace
var on_device_translation = on_device_translation || {};
on_device_translation.mojom = on_device_translation.mojom || {};

on_device_translation.mojom.Translator = {};
on_device_translation.mojom.Translator.$interfaceName = 'on_device_translation.mojom.Translator';
on_device_translation.mojom.Translator_Translate_ParamsSpec = { $: {} };
on_device_translation.mojom.Translator_Translate_ResponseParamsSpec = { $: {} };
on_device_translation.mojom.Translator_SplitSentences_ParamsSpec = { $: {} };
on_device_translation.mojom.Translator_SplitSentences_ResponseParamsSpec = { $: {} };

// Interface: Translator
mojo.internal.Struct(
    on_device_translation.mojom.Translator_Translate_ParamsSpec, 'on_device_translation.mojom.Translator_Translate_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_translation.mojom.Translator_Translate_ResponseParamsSpec, 'on_device_translation.mojom.Translator_Translate_ResponseParams', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_translation.mojom.Translator_SplitSentences_ParamsSpec, 'on_device_translation.mojom.Translator_SplitSentences_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    on_device_translation.mojom.Translator_SplitSentences_ResponseParamsSpec, 'on_device_translation.mojom.Translator_SplitSentences_ResponseParams', [
      mojo.internal.StructField('sentences', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

on_device_translation.mojom.TranslatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

on_device_translation.mojom.TranslatorRemote = class {
  static get $interfaceName() {
    return 'on_device_translation.mojom.Translator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      on_device_translation.mojom.TranslatorPendingReceiver,
      handle);
    this.$ = new on_device_translation.mojom.TranslatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

on_device_translation.mojom.TranslatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  translate(input) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      on_device_translation.mojom.Translator_Translate_ParamsSpec,
      on_device_translation.mojom.Translator_Translate_ResponseParamsSpec,
      [input],
      false);
  }

  splitSentences(input) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      on_device_translation.mojom.Translator_SplitSentences_ParamsSpec,
      on_device_translation.mojom.Translator_SplitSentences_ResponseParamsSpec,
      [input],
      false);
  }

};

on_device_translation.mojom.Translator.getRemote = function() {
  let remote = new on_device_translation.mojom.TranslatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'on_device_translation.mojom.Translator',
    'context');
  return remote.$;
};

on_device_translation.mojom.TranslatorReceiver = class {
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
        
        // Try Method 0: Translate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(on_device_translation.mojom.Translator_Translate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Translate (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SplitSentences
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(on_device_translation.mojom.Translator_SplitSentences_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SplitSentences (1)');
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
          const params = decoder.decodeStruct(on_device_translation.mojom.Translator_Translate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.translate');
          const result = this.impl.translate(params.input);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_translation.mojom.Translator_Translate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(on_device_translation.mojom.Translator_SplitSentences_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.splitSentences');
          const result = this.impl.splitSentences(params.input);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, on_device_translation.mojom.Translator_SplitSentences_ResponseParamsSpec);
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

on_device_translation.mojom.TranslatorReceiver = on_device_translation.mojom.TranslatorReceiver;

on_device_translation.mojom.TranslatorPtr = on_device_translation.mojom.TranslatorRemote;
on_device_translation.mojom.TranslatorRequest = on_device_translation.mojom.TranslatorPendingReceiver;

