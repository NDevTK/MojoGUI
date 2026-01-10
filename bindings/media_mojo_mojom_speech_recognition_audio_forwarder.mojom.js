// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition_audio_forwarder.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: SpeechRecognitionAudioForwarder
media.mojom.SpeechRecognitionAudioForwarder = {};

media.mojom.SpeechRecognitionAudioForwarder_AddAudioFromRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionAudioForwarder_AddAudioFromRenderer_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioDataS16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [buffer]);
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

// ParamsSpec for AddAudioFromRenderer
media.mojom.SpeechRecognitionAudioForwarder_AddAudioFromRenderer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionAudioForwarder.AddAudioFromRenderer_Params',
      packedSize: 16,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioDataS16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.SpeechRecognitionAudioForwarderPtr = media.mojom.SpeechRecognitionAudioForwarderRemote;
media.mojom.SpeechRecognitionAudioForwarderRequest = media.mojom.SpeechRecognitionAudioForwarderPendingReceiver;

