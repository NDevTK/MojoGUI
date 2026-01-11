// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/tts/public/mojom/tts_service.mojom
// Module: chromeos.tts.mojom

// Module namespace
var chromeos = chromeos || {};
chromeos.tts = chromeos.tts || {};
chromeos.tts.mojom = chromeos.tts.mojom || {};
var media = media || {};
var sandbox = sandbox || {};

chromeos.tts.mojom.AudioParametersSpec = { $: {} };
chromeos.tts.mojom.TtsService = {};
chromeos.tts.mojom.TtsService.$interfaceName = 'chromeos.tts.mojom.TtsService';
chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec = { $: {} };
chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec = { $: {} };
chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ResponseParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream = {};
chromeos.tts.mojom.GoogleTtsStream.$interfaceName = 'chromeos.tts.mojom.GoogleTtsStream';
chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ResponseParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec = { $: {} };
chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream = {};
chromeos.tts.mojom.PlaybackTtsStream.$interfaceName = 'chromeos.tts.mojom.PlaybackTtsStream';
chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream_Play_ResponseParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec = { $: {} };
chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec = { $: {} };
chromeos.tts.mojom.TtsEventObserver = {};
chromeos.tts.mojom.TtsEventObserver.$interfaceName = 'chromeos.tts.mojom.TtsEventObserver';
chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec = { $: {} };
chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec = { $: {} };
chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec = { $: {} };
chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec = { $: {} };

// Struct: AudioParameters
mojo.internal.Struct(
    chromeos.tts.mojom.AudioParametersSpec, 'chromeos.tts.mojom.AudioParameters', [
      mojo.internal.StructField('sample_rate', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('buffer_size', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: TtsService
mojo.internal.Struct(
    chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec, 'chromeos.tts.mojom.TtsService_BindGoogleTtsStream_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.tts.mojom.GoogleTtsStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('stream_factory', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec, 'chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.tts.mojom.PlaybackTtsStreamRemote), null, false, 0, undefined),
      mojo.internal.StructField('stream_factory', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('desired_audio_parameters', 16, 0, chromeos.tts.mojom.AudioParametersSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ResponseParamsSpec, 'chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ResponseParams', [
      mojo.internal.StructField('audio_parameters', 0, 0, chromeos.tts.mojom.AudioParametersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.tts.mojom.TtsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.tts.mojom.TtsServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.tts.mojom.TtsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.tts.mojom.TtsServicePendingReceiver,
      handle);
    this.$ = new chromeos.tts.mojom.TtsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindGoogleTtsStream(receiver, stream_factory) {
    return this.$.bindGoogleTtsStream(receiver, stream_factory);
  }
  bindPlaybackTtsStream(receiver, stream_factory, desired_audio_parameters) {
    return this.$.bindPlaybackTtsStream(receiver, stream_factory, desired_audio_parameters);
  }
};

chromeos.tts.mojom.TtsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TtsService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindGoogleTtsStream(receiver, stream_factory) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec,
      null,
      [receiver, stream_factory],
      false);
  }

  bindPlaybackTtsStream(receiver, stream_factory, desired_audio_parameters) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec,
      chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ResponseParamsSpec,
      [receiver, stream_factory, desired_audio_parameters],
      false);
  }

};

chromeos.tts.mojom.TtsService.getRemote = function() {
  let remote = new chromeos.tts.mojom.TtsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.tts.mojom.TtsService',
    'context');
  return remote.$;
};

chromeos.tts.mojom.TtsServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TtsService', [
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
             decoder.decodeStructInline(chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec.$.structSpec);
          const result = this.impl.bindGoogleTtsStream(params.receiver, params.stream_factory);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec.$.structSpec);
          const result = this.impl.bindPlaybackTtsStream(params.receiver, params.stream_factory, params.desired_audio_parameters);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ResponseParamsSpec);
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

chromeos.tts.mojom.TtsServiceReceiver = chromeos.tts.mojom.TtsServiceReceiver;

chromeos.tts.mojom.TtsServicePtr = chromeos.tts.mojom.TtsServiceRemote;
chromeos.tts.mojom.TtsServiceRequest = chromeos.tts.mojom.TtsServicePendingReceiver;


// Interface: GoogleTtsStream
mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_InstallVoice_Params', [
      mojo.internal.StructField('voice_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('voice_bytes', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ResponseParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_SelectVoice_Params', [
      mojo.internal.StructField('voice_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_Speak_Params', [
      mojo.internal.StructField('text_jspb', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('speaker_params_jspb', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParams', [
      mojo.internal.StructField('event_observer', 0, 0, mojo.internal.InterfaceRequest(chromeos.tts.mojom.TtsEventObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_SetVolume_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_Pause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec, 'chromeos.tts.mojom.GoogleTtsStream_Resume_Params', [
    ],
    [[0, 8]]);

chromeos.tts.mojom.GoogleTtsStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.tts.mojom.GoogleTtsStreamRemote = class {
  static get $interfaceName() {
    return 'chromeos.tts.mojom.GoogleTtsStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.tts.mojom.GoogleTtsStreamPendingReceiver,
      handle);
    this.$ = new chromeos.tts.mojom.GoogleTtsStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  installVoice(voice_name, voice_bytes) {
    return this.$.installVoice(voice_name, voice_bytes);
  }
  selectVoice(voice_name) {
    return this.$.selectVoice(voice_name);
  }
  speak(text_jspb, speaker_params_jspb) {
    return this.$.speak(text_jspb, speaker_params_jspb);
  }
  stop() {
    return this.$.stop();
  }
  setVolume(volume) {
    return this.$.setVolume(volume);
  }
  pause() {
    return this.$.pause();
  }
  resume() {
    return this.$.resume();
  }
};

chromeos.tts.mojom.GoogleTtsStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GoogleTtsStream', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  installVoice(voice_name, voice_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec,
      chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ResponseParamsSpec,
      [voice_name, voice_bytes],
      false);
  }

  selectVoice(voice_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec,
      chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParamsSpec,
      [voice_name],
      false);
  }

  speak(text_jspb, speaker_params_jspb) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec,
      chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParamsSpec,
      [text_jspb, speaker_params_jspb],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  setVolume(volume) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec,
      null,
      [volume],
      false);
  }

  pause() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec,
      null,
      [],
      false);
  }

};

chromeos.tts.mojom.GoogleTtsStream.getRemote = function() {
  let remote = new chromeos.tts.mojom.GoogleTtsStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.tts.mojom.GoogleTtsStream',
    'context');
  return remote.$;
};

chromeos.tts.mojom.GoogleTtsStreamReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GoogleTtsStream', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec.$.structSpec);
          const result = this.impl.installVoice(params.voice_name, params.voice_bytes);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec.$.structSpec);
          const result = this.impl.selectVoice(params.voice_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec.$.structSpec);
          const result = this.impl.speak(params.text_jspb, params.speaker_params_jspb);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec.$.structSpec);
          const result = this.impl.stop();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec.$.structSpec);
          const result = this.impl.setVolume(params.volume);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec.$.structSpec);
          const result = this.impl.pause();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec.$.structSpec);
          const result = this.impl.resume();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.tts.mojom.GoogleTtsStreamReceiver = chromeos.tts.mojom.GoogleTtsStreamReceiver;

chromeos.tts.mojom.GoogleTtsStreamPtr = chromeos.tts.mojom.GoogleTtsStreamRemote;
chromeos.tts.mojom.GoogleTtsStreamRequest = chromeos.tts.mojom.GoogleTtsStreamPendingReceiver;


// Interface: PlaybackTtsStream
mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_Play_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_Play_ResponseParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_Play_ResponseParams', [
      mojo.internal.StructField('event_observer', 0, 0, mojo.internal.InterfaceRequest(chromeos.tts.mojom.TtsEventObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_Params', [
      mojo.internal.StructField('frames_buffer', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('char_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('last_buffer', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_SetVolume_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_Pause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec, 'chromeos.tts.mojom.PlaybackTtsStream_Resume_Params', [
    ],
    [[0, 8]]);

chromeos.tts.mojom.PlaybackTtsStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.tts.mojom.PlaybackTtsStreamRemote = class {
  static get $interfaceName() {
    return 'chromeos.tts.mojom.PlaybackTtsStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.tts.mojom.PlaybackTtsStreamPendingReceiver,
      handle);
    this.$ = new chromeos.tts.mojom.PlaybackTtsStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  play() {
    return this.$.play();
  }
  sendAudioBuffer(frames_buffer, char_index, last_buffer) {
    return this.$.sendAudioBuffer(frames_buffer, char_index, last_buffer);
  }
  stop() {
    return this.$.stop();
  }
  setVolume(volume) {
    return this.$.setVolume(volume);
  }
  pause() {
    return this.$.pause();
  }
  resume() {
    return this.$.resume();
  }
};

chromeos.tts.mojom.PlaybackTtsStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PlaybackTtsStream', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  play() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec,
      chromeos.tts.mojom.PlaybackTtsStream_Play_ResponseParamsSpec,
      [],
      false);
  }

  sendAudioBuffer(frames_buffer, char_index, last_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec,
      null,
      [frames_buffer, char_index, last_buffer],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  setVolume(volume) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec,
      null,
      [volume],
      false);
  }

  pause() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec,
      null,
      [],
      false);
  }

};

chromeos.tts.mojom.PlaybackTtsStream.getRemote = function() {
  let remote = new chromeos.tts.mojom.PlaybackTtsStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.tts.mojom.PlaybackTtsStream',
    'context');
  return remote.$;
};

chromeos.tts.mojom.PlaybackTtsStreamReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PlaybackTtsStream', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec.$.structSpec);
          const result = this.impl.play();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.tts.mojom.PlaybackTtsStream_Play_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec.$.structSpec);
          const result = this.impl.sendAudioBuffer(params.frames_buffer, params.char_index, params.last_buffer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec.$.structSpec);
          const result = this.impl.stop();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec.$.structSpec);
          const result = this.impl.setVolume(params.volume);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec.$.structSpec);
          const result = this.impl.pause();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec.$.structSpec);
          const result = this.impl.resume();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.tts.mojom.PlaybackTtsStreamReceiver = chromeos.tts.mojom.PlaybackTtsStreamReceiver;

chromeos.tts.mojom.PlaybackTtsStreamPtr = chromeos.tts.mojom.PlaybackTtsStreamRemote;
chromeos.tts.mojom.PlaybackTtsStreamRequest = chromeos.tts.mojom.PlaybackTtsStreamPendingReceiver;


// Interface: TtsEventObserver
mojo.internal.Struct(
    chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec, 'chromeos.tts.mojom.TtsEventObserver_OnStart_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec, 'chromeos.tts.mojom.TtsEventObserver_OnTimepoint_Params', [
      mojo.internal.StructField('char_index', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec, 'chromeos.tts.mojom.TtsEventObserver_OnEnd_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec, 'chromeos.tts.mojom.TtsEventObserver_OnError_Params', [
    ],
    [[0, 8]]);

chromeos.tts.mojom.TtsEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.tts.mojom.TtsEventObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.tts.mojom.TtsEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.tts.mojom.TtsEventObserverPendingReceiver,
      handle);
    this.$ = new chromeos.tts.mojom.TtsEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStart() {
    return this.$.onStart();
  }
  onTimepoint(char_index) {
    return this.$.onTimepoint(char_index);
  }
  onEnd() {
    return this.$.onEnd();
  }
  onError() {
    return this.$.onError();
  }
};

chromeos.tts.mojom.TtsEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TtsEventObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onStart() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec,
      null,
      [],
      false);
  }

  onTimepoint(char_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec,
      null,
      [char_index],
      false);
  }

  onEnd() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec,
      null,
      [],
      false);
  }

  onError() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec,
      null,
      [],
      false);
  }

};

chromeos.tts.mojom.TtsEventObserver.getRemote = function() {
  let remote = new chromeos.tts.mojom.TtsEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.tts.mojom.TtsEventObserver',
    'context');
  return remote.$;
};

chromeos.tts.mojom.TtsEventObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TtsEventObserver', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec.$.structSpec);
          const result = this.impl.onStart();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec.$.structSpec);
          const result = this.impl.onTimepoint(params.char_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec.$.structSpec);
          const result = this.impl.onEnd();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec.$.structSpec);
          const result = this.impl.onError();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromeos.tts.mojom.TtsEventObserverReceiver = chromeos.tts.mojom.TtsEventObserverReceiver;

chromeos.tts.mojom.TtsEventObserverPtr = chromeos.tts.mojom.TtsEventObserverRemote;
chromeos.tts.mojom.TtsEventObserverRequest = chromeos.tts.mojom.TtsEventObserverPendingReceiver;

