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
        
        // Try Method 0: BindGoogleTtsStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindGoogleTtsStream (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: BindPlaybackTtsStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindPlaybackTtsStream (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(chromeos.tts.mojom.TtsService_BindGoogleTtsStream_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindGoogleTtsStream');
          const result = this.impl.bindGoogleTtsStream(params.receiver, params.stream_factory);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.tts.mojom.TtsService_BindPlaybackTtsStream_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindPlaybackTtsStream');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
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
        
        // Try Method 0: InstallVoice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallVoice (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: SelectVoice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectVoice (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: Speak
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Speak (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: SetVolume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVolume (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: Pause
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Pause (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_InstallVoice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.installVoice');
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
          const params = decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_SelectVoice_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.selectVoice');
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
          const params = decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_Speak_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.speak');
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
          const params = decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_Stop_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_SetVolume_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setVolume');
          const result = this.impl.setVolume(params.volume);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_Pause_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.pause');
          const result = this.impl.pause();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.tts.mojom.GoogleTtsStream_Resume_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
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
        
        // Try Method 0: Play
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Play (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: SendAudioBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendAudioBuffer (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: SetVolume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVolume (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: Pause
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Pause (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: Resume
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Resume (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(chromeos.tts.mojom.PlaybackTtsStream_Play_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.play');
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
          const params = decoder.decodeStruct(chromeos.tts.mojom.PlaybackTtsStream_SendAudioBuffer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendAudioBuffer');
          const result = this.impl.sendAudioBuffer(params.frames_buffer, params.char_index, params.last_buffer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.tts.mojom.PlaybackTtsStream_Stop_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.tts.mojom.PlaybackTtsStream_SetVolume_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setVolume');
          const result = this.impl.setVolume(params.volume);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.tts.mojom.PlaybackTtsStream_Pause_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.pause');
          const result = this.impl.pause();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.tts.mojom.PlaybackTtsStream_Resume_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: OnStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStart (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnTimepoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTimepoint (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: OnEnd
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEnd (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(chromeos.tts.mojom.TtsEventObserver_OnStart_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onStart');
          const result = this.impl.onStart();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.tts.mojom.TtsEventObserver_OnTimepoint_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTimepoint');
          const result = this.impl.onTimepoint(params.char_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.tts.mojom.TtsEventObserver_OnEnd_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onEnd');
          const result = this.impl.onEnd();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.tts.mojom.TtsEventObserver_OnError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.tts.mojom.TtsEventObserverReceiver = chromeos.tts.mojom.TtsEventObserverReceiver;

chromeos.tts.mojom.TtsEventObserverPtr = chromeos.tts.mojom.TtsEventObserverRemote;
chromeos.tts.mojom.TtsEventObserverRequest = chromeos.tts.mojom.TtsEventObserverPendingReceiver;

