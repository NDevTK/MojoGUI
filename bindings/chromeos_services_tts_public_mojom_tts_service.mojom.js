// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/tts/public/mojom/tts_service.mojom
// Module: chromeos.tts.mojom

'use strict';

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
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.tts.mojom.GoogleTtsStreamSpec), null, false, 0, undefined),
      mojo.internal.StructField('stream_factory', 8, 0, mojo.internal.InterfaceProxy(media.mojom.AudioStreamFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec, 'chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.tts.mojom.PlaybackTtsStreamSpec), null, false, 0, undefined),
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
};

chromeos.tts.mojom.TtsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindGoogleTtsStream(receiver, stream_factory) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec,
      null,
      [receiver, stream_factory],
      false);
  }

  bindPlaybackTtsStream(receiver, stream_factory, desired_audio_parameters) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindGoogleTtsStream(params.receiver, params.stream_factory);
          break;
        }
        case 1: {
          const params = chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec.$.decode(message.payload);
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
      mojo.internal.StructField('event_observer', 0, 0, mojo.internal.InterfaceRequest(chromeos.tts.mojom.TtsEventObserverSpec), null, false, 0, undefined),
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
};

chromeos.tts.mojom.GoogleTtsStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  installVoice(voice_name, voice_bytes) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec,
      chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ResponseParamsSpec,
      [voice_name, voice_bytes],
      false);
  }

  selectVoice(voice_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec,
      chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParamsSpec,
      [voice_name],
      false);
  }

  speak(text_jspb, speaker_params_jspb) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec,
      chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParamsSpec,
      [text_jspb, speaker_params_jspb],
      false);
  }

  stop() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  setVolume(volume) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec,
      null,
      [volume],
      false);
  }

  pause() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec.$.decode(message.payload);
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
          const params = chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec.$.decode(message.payload);
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
          const params = chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec.$.decode(message.payload);
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
          const params = chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stop();
          break;
        }
        case 4: {
          const params = chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setVolume(params.volume);
          break;
        }
        case 5: {
          const params = chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec.$.decode(message.payload);
          const result = this.impl.pause();
          break;
        }
        case 6: {
          const params = chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resume();
          break;
        }
      }
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
      mojo.internal.StructField('event_observer', 0, 0, mojo.internal.InterfaceRequest(chromeos.tts.mojom.TtsEventObserverSpec), null, false, 0, undefined),
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
};

chromeos.tts.mojom.PlaybackTtsStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  play() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec,
      chromeos.tts.mojom.PlaybackTtsStream_Play_ResponseParamsSpec,
      [],
      false);
  }

  sendAudioBuffer(frames_buffer, char_index, last_buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec,
      null,
      [frames_buffer, char_index, last_buffer],
      false);
  }

  stop() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  setVolume(volume) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec,
      null,
      [volume],
      false);
  }

  pause() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec.$.decode(message.payload);
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
          const params = chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendAudioBuffer(params.frames_buffer, params.char_index, params.last_buffer);
          break;
        }
        case 2: {
          const params = chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stop();
          break;
        }
        case 3: {
          const params = chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setVolume(params.volume);
          break;
        }
        case 4: {
          const params = chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec.$.decode(message.payload);
          const result = this.impl.pause();
          break;
        }
        case 5: {
          const params = chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resume();
          break;
        }
      }
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
};

chromeos.tts.mojom.TtsEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStart() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec,
      null,
      [],
      false);
  }

  onTimepoint(char_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec,
      null,
      [char_index],
      false);
  }

  onEnd() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec,
      null,
      [],
      false);
  }

  onError() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStart();
          break;
        }
        case 1: {
          const params = chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onTimepoint(params.char_index);
          break;
        }
        case 2: {
          const params = chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onEnd();
          break;
        }
        case 3: {
          const params = chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onError();
          break;
        }
      }
    }});
  }
};

chromeos.tts.mojom.TtsEventObserverReceiver = chromeos.tts.mojom.TtsEventObserverReceiver;

chromeos.tts.mojom.TtsEventObserverPtr = chromeos.tts.mojom.TtsEventObserverRemote;
chromeos.tts.mojom.TtsEventObserverRequest = chromeos.tts.mojom.TtsEventObserverPendingReceiver;

