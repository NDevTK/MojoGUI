// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/on_device_translation/translator.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  translate(input, pending_responder) {
    return this.$.translate(input, pending_responder);
  }
  translateStreaming(input, pending_responder) {
    return this.$.translateStreaming(input, pending_responder);
  }
};

blink.mojom.TranslatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Translator', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  translate(input, pending_responder) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.Translator_Translate_ParamsSpec,
      null,
      [input, pending_responder],
      false);
  }

  translateStreaming(input, pending_responder) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
             decoder.decodeStructInline(blink.mojom.Translator_Translate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.Translator_TranslateStreaming_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Translator_Translate_ParamsSpec.$.structSpec);
          const result = this.impl.translate(params.input, params.pending_responder);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Translator_TranslateStreaming_ParamsSpec.$.structSpec);
          const result = this.impl.translateStreaming(params.input, params.pending_responder);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.TranslatorReceiver = blink.mojom.TranslatorReceiver;

blink.mojom.TranslatorPtr = blink.mojom.TranslatorRemote;
blink.mojom.TranslatorRequest = blink.mojom.TranslatorPendingReceiver;

