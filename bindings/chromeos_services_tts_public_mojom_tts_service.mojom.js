// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/tts/public/mojom/tts_service.mojom
// Module: chromeos.tts.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.tts = chromeos.tts || {};
chromeos.tts.mojom = chromeos.tts.mojom || {};


// Interface: TtsService
chromeos.tts.mojom.TtsService = {};

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
      null,
      [receiver, stream_factory],
      undefined,
      undefined
    );
  }

  bindPlaybackTtsStream(receiver, stream_factory, desired_audio_parameters) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec,
      chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ResponseParamsSpec,
      chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ResponseParamsSpec,
      [receiver, stream_factory, desired_audio_parameters],
      undefined,
      undefined
    );
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

// ParamsSpec for BindGoogleTtsStream
chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.TtsService.BindGoogleTtsStream_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'stream_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BindPlaybackTtsStream
chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.TtsService.BindPlaybackTtsStream_Params',
      packedSize: 32,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'stream_factory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'desired_audio_parameters', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.TtsService.BindPlaybackTtsStream_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'audio_parameters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.tts.mojom.TtsServicePtr = chromeos.tts.mojom.TtsServiceRemote;
chromeos.tts.mojom.TtsServiceRequest = chromeos.tts.mojom.TtsServicePendingReceiver;


// Interface: GoogleTtsStream
chromeos.tts.mojom.GoogleTtsStream = {};

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
      chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ResponseParamsSpec,
      [voice_name, voice_bytes],
      undefined,
      undefined
    );
  }

  selectVoice(voice_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec,
      chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParamsSpec,
      chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParamsSpec,
      [voice_name],
      undefined,
      undefined
    );
  }

  speak(text_jspb, speaker_params_jspb) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec,
      chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParamsSpec,
      chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParamsSpec,
      [text_jspb, speaker_params_jspb],
      undefined,
      undefined
    );
  }

  stop() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setVolume(volume) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec,
      null,
      null,
      [volume],
      undefined,
      undefined
    );
  }

  pause() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  resume() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for InstallVoice
chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.GoogleTtsStream.InstallVoice_Params',
      packedSize: 24,
      fields: [
        { name: 'voice_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'voice_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.GoogleTtsStream.InstallVoice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SelectVoice
chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.GoogleTtsStream.SelectVoice_Params',
      packedSize: 16,
      fields: [
        { name: 'voice_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.GoogleTtsStream.SelectVoice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Speak
chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.GoogleTtsStream.Speak_Params',
      packedSize: 24,
      fields: [
        { name: 'text_jspb', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'speaker_params_jspb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.tts.mojom.GoogleTtsStream_Speak_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.GoogleTtsStream.Speak_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'event_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Stop
chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.GoogleTtsStream.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetVolume
chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.GoogleTtsStream.SetVolume_Params',
      packedSize: 16,
      fields: [
        { name: 'volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Pause
chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.GoogleTtsStream.Pause_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Resume
chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.GoogleTtsStream.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chromeos.tts.mojom.GoogleTtsStreamPtr = chromeos.tts.mojom.GoogleTtsStreamRemote;
chromeos.tts.mojom.GoogleTtsStreamRequest = chromeos.tts.mojom.GoogleTtsStreamPendingReceiver;


// Interface: PlaybackTtsStream
chromeos.tts.mojom.PlaybackTtsStream = {};

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
      chromeos.tts.mojom.PlaybackTtsStream_Play_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  sendAudioBuffer(frames_buffer, char_index, last_buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec,
      null,
      null,
      [frames_buffer, char_index, last_buffer],
      undefined,
      undefined
    );
  }

  stop() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  setVolume(volume) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec,
      null,
      null,
      [volume],
      undefined,
      undefined
    );
  }

  pause() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  resume() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for Play
chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.PlaybackTtsStream.Play_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.tts.mojom.PlaybackTtsStream_Play_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.PlaybackTtsStream.Play_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'event_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendAudioBuffer
chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.PlaybackTtsStream.SendAudioBuffer_Params',
      packedSize: 32,
      fields: [
        { name: 'frames_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'char_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'last_buffer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for Stop
chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.PlaybackTtsStream.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetVolume
chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.PlaybackTtsStream.SetVolume_Params',
      packedSize: 16,
      fields: [
        { name: 'volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Pause
chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.PlaybackTtsStream.Pause_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Resume
chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.PlaybackTtsStream.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chromeos.tts.mojom.PlaybackTtsStreamPtr = chromeos.tts.mojom.PlaybackTtsStreamRemote;
chromeos.tts.mojom.PlaybackTtsStreamRequest = chromeos.tts.mojom.PlaybackTtsStreamPendingReceiver;


// Interface: TtsEventObserver
chromeos.tts.mojom.TtsEventObserver = {};

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
      null,
      [],
      undefined,
      undefined
    );
  }

  onTimepoint(char_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec,
      null,
      null,
      [char_index],
      undefined,
      undefined
    );
  }

  onEnd() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onError() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for OnStart
chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.TtsEventObserver.OnStart_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnTimepoint
chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.TtsEventObserver.OnTimepoint_Params',
      packedSize: 16,
      fields: [
        { name: 'char_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnEnd
chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.TtsEventObserver.OnEnd_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnError
chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.tts.mojom.TtsEventObserver.OnError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chromeos.tts.mojom.TtsEventObserverPtr = chromeos.tts.mojom.TtsEventObserverRemote;
chromeos.tts.mojom.TtsEventObserverRequest = chromeos.tts.mojom.TtsEventObserverPendingReceiver;

