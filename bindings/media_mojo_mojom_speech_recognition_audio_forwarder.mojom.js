// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_audio_forwarder.mojom
// Module: media.mojom

'use strict';

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
};

media.mojom.SpeechRecognitionAudioForwarderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addAudioFromRenderer(buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(1, 0); // Default ordinal 1 -> Index 0
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
        
        // Try Method 0: AddAudioFromRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.SpeechRecognitionAudioForwarder_AddAudioFromRenderer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddAudioFromRenderer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionAudioForwarder_AddAudioFromRenderer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addAudioFromRenderer');
          const result = this.impl.addAudioFromRenderer(params.buffer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionAudioForwarderReceiver = media.mojom.SpeechRecognitionAudioForwarderReceiver;

media.mojom.SpeechRecognitionAudioForwarderPtr = media.mojom.SpeechRecognitionAudioForwarderRemote;
media.mojom.SpeechRecognitionAudioForwarderRequest = media.mojom.SpeechRecognitionAudioForwarderPendingReceiver;

