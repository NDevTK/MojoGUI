// Auto-generated MojoJS binding
// Source: chromium_src/components/on_device_translation/public/mojom/translator.mojom
// Module: on_device_translation.mojom

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
  translate(input) {
    return this.$.translate(input);
  }
  splitSentences(input) {
    return this.$.splitSentences(input);
  }
};

on_device_translation.mojom.TranslatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Translator', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  translate(input) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      on_device_translation.mojom.Translator_Translate_ParamsSpec,
      on_device_translation.mojom.Translator_Translate_ResponseParamsSpec,
      [input],
      false);
  }

  splitSentences(input) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Translator', [
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
             decoder.decodeStructInline(on_device_translation.mojom.Translator_Translate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(on_device_translation.mojom.Translator_SplitSentences_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(on_device_translation.mojom.Translator_Translate_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(on_device_translation.mojom.Translator_SplitSentences_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

on_device_translation.mojom.TranslatorReceiver = on_device_translation.mojom.TranslatorReceiver;

on_device_translation.mojom.TranslatorPtr = on_device_translation.mojom.TranslatorRemote;
on_device_translation.mojom.TranslatorRequest = on_device_translation.mojom.TranslatorPendingReceiver;

