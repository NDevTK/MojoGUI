// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_audio_forwarder.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.SpeechRecognitionAudioForwarder = {};
media.mojom.SpeechRecognitionAudioForwarder.$interfaceName = 'media.mojom.SpeechRecognitionAudioForwarder';
media.mojom.SpeechRecognitionAudioForwarder_AddAudioFromRenderer_ParamsSpec = { $: {} };

// Interface: SpeechRecognitionAudioForwarder
mojo.internal.Struct(
    media.mojom.SpeechRecognitionAudioForwarder_AddAudioFromRenderer_ParamsSpec, 'media.mojom.SpeechRecognitionAudioForwarder_AddAudioFromRenderer_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.AudioDataS16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionAudioForwarderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionAudioForwarderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionAudioForwarder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionAudioForwarderPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionAudioForwarderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addAudioFromRenderer(buffer) {
    return this.$.addAudioFromRenderer(buffer);
  }
};

media.mojom.SpeechRecognitionAudioForwarderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionAudioForwarder', [
      { explicit: 1 },
    ]);
  }

  addAudioFromRenderer(buffer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.SpeechRecognitionAudioForwarder_AddAudioFromRenderer_ParamsSpec,
      null,
      [buffer],
      false);
  }

};

media.mojom.SpeechRecognitionAudioForwarder.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionAudioForwarderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionAudioForwarder',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionAudioForwarderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechRecognitionAudioForwarder', [
      { explicit: 1 },
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
             decoder.decodeStructInline(media.mojom.SpeechRecognitionAudioForwarder_AddAudioFromRenderer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionAudioForwarder_AddAudioFromRenderer_ParamsSpec.$.structSpec);
          const result = this.impl.addAudioFromRenderer(params.buffer);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.SpeechRecognitionAudioForwarderReceiver = media.mojom.SpeechRecognitionAudioForwarderReceiver;

media.mojom.SpeechRecognitionAudioForwarderPtr = media.mojom.SpeechRecognitionAudioForwarderRemote;
media.mojom.SpeechRecognitionAudioForwarderRequest = media.mojom.SpeechRecognitionAudioForwarderPendingReceiver;

