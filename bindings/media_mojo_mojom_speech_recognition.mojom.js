// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

media.mojom.ConfidenceLevelSpec = { $: mojo.internal.Enum() };
media.mojom.AsrSwitchResultSpec = { $: mojo.internal.Enum() };
media.mojom.SpeechRecognitionModeSpec = { $: mojo.internal.Enum() };
media.mojom.RecognizerClientTypeSpec = { $: mojo.internal.Enum() };
media.mojom.HypothesisPartsSpec = { $: {} };
media.mojom.MediaTimestampRangeSpec = { $: {} };
media.mojom.TimingInformationSpec = { $: {} };
media.mojom.SpeechRecognitionResultSpec = { $: {} };
media.mojom.LanguageIdentificationEventSpec = { $: {} };
media.mojom.SpeechRecognitionOptionsSpec = { $: {} };
media.mojom.SpeechRecognitionContext = {};
media.mojom.SpeechRecognitionContext.$interfaceName = 'media.mojom.SpeechRecognitionContext';
media.mojom.SpeechRecognitionContext_BindRecognizer_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionContext_BindRecognizer_ResponseParamsSpec = { $: {} };
media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizer = {};
media.mojom.SpeechRecognitionRecognizer.$interfaceName = 'media.mojom.SpeechRecognitionRecognizer';
media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizer_MarkDone_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizerClient = {};
media.mojom.SpeechRecognitionRecognizerClient.$interfaceName = 'media.mojom.SpeechRecognitionRecognizerClient';
media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ResponseParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionBrowserObserver = {};
media.mojom.SpeechRecognitionBrowserObserver.$interfaceName = 'media.mojom.SpeechRecognitionBrowserObserver';
media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSurface = {};
media.mojom.SpeechRecognitionSurface.$interfaceName = 'media.mojom.SpeechRecognitionSurface';
media.mojom.SpeechRecognitionSurface_Activate_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSurface_GetBounds_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSurface_GetBounds_ResponseParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSurfaceClient = {};
media.mojom.SpeechRecognitionSurfaceClient.$interfaceName = 'media.mojom.SpeechRecognitionSurfaceClient';
media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionClientBrowserInterface = {};
media.mojom.SpeechRecognitionClientBrowserInterface.$interfaceName = 'media.mojom.SpeechRecognitionClientBrowserInterface';
media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_ParamsSpec = { $: {} };

// Enum: ConfidenceLevel
media.mojom.ConfidenceLevel = {
  kUnknown: 0,
  kNotConfident: 1,
  kConfident: 2,
  kHighlyConfident: 3,
};

// Enum: AsrSwitchResult
media.mojom.AsrSwitchResult = {
  kDefaultNoSwitch: 0,
  kSwitchSucceeded: 1,
  kSwitchFailed: 2,
  kSwitchSkipedNoLp: 3,
};

// Enum: SpeechRecognitionMode
media.mojom.SpeechRecognitionMode = {
  kUnknown: 0,
  kIme: 1,
  kCaption: 2,
};

// Enum: RecognizerClientType
media.mojom.RecognizerClientType = {
  kUnknown: 0,
  kDictation: 1,
  kLiveCaption: 2,
  kProjector: 3,
  kCastModerator: 4,
  MinVersion: 4,
};

// Struct: HypothesisParts
mojo.internal.Struct(
    media.mojom.HypothesisPartsSpec, 'media.mojom.HypothesisParts', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('hypothesis_part_offset', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MediaTimestampRange
mojo.internal.Struct(
    media.mojom.MediaTimestampRangeSpec, 'media.mojom.MediaTimestampRange', [
      mojo.internal.StructField('start', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('end', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TimingInformation
mojo.internal.Struct(
    media.mojom.TimingInformationSpec, 'media.mojom.TimingInformation', [
      mojo.internal.StructField('audio_start_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('audio_end_time', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hypothesis_parts', 16, 0, mojo.internal.Array(media.mojom.HypothesisPartsSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('originating_media_timestamps', 24, 0, mojo.internal.Array(media.mojom.MediaTimestampRangeSpec.$, false), null, true, 11, undefined),
    ],
    [[0, 32], [11, 40]]);

// Struct: SpeechRecognitionResult
mojo.internal.Struct(
    media.mojom.SpeechRecognitionResultSpec, 'media.mojom.SpeechRecognitionResult', [
      mojo.internal.StructField('transcription', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timing_information', 8, 0, media.mojom.TimingInformationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_final', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: LanguageIdentificationEvent
mojo.internal.Struct(
    media.mojom.LanguageIdentificationEventSpec, 'media.mojom.LanguageIdentificationEvent', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('confidence_level', 8, 0, media.mojom.ConfidenceLevelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('asr_switch_result', 16, 0, media.mojom.AsrSwitchResultSpec.$, null, true, 1, undefined),
    ],
    [[0, 24], [1, 32]]);

// Struct: SpeechRecognitionOptions
mojo.internal.Struct(
    media.mojom.SpeechRecognitionOptionsSpec, 'media.mojom.SpeechRecognitionOptions', [
      mojo.internal.StructField('recognition_mode', 0, 0, media.mojom.SpeechRecognitionModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('language', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('enable_formatting', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('recognizer_client_type', 24, 0, media.mojom.RecognizerClientTypeSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('is_server_based', 32, 0, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('skip_continuously_empty_audio', 32, 1, mojo.internal.Bool, false, false, 4, undefined),
      mojo.internal.StructField('experiment_recognizer_routing_key', 40, 0, mojo.internal.String, null, true, 5, undefined),
      mojo.internal.StructField('channel_count', 48, 0, mojo.internal.Int32, 0, false, 6, undefined),
      mojo.internal.StructField('sample_rate', 52, 0, mojo.internal.Int32, 0, false, 6, undefined),
      mojo.internal.StructField('recognition_context', 56, 0, media.mojom.SpeechRecognitionRecognitionContextSpec.$, null, true, 8, undefined),
    ],
    [[0, 32], [1, 48], [4, 48], [5, 56], [6, 64], [8, 72]]);

// Interface: SpeechRecognitionContext
mojo.internal.Struct(
    media.mojom.SpeechRecognitionContext_BindRecognizer_ParamsSpec, 'media.mojom.SpeechRecognitionContext_BindRecognizer_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionRecognizerSpec), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionRecognizerClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, media.mojom.SpeechRecognitionOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionContext_BindRecognizer_ResponseParamsSpec, 'media.mojom.SpeechRecognitionContext_BindRecognizer_ResponseParams', [
      mojo.internal.StructField('is_multichannel_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_ParamsSpec, 'media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_Params', [
      mojo.internal.StructField('session_receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionSessionRemote), null, false, 0, undefined),
      mojo.internal.StructField('session_client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionSessionClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('audio_forwarder', 16, 0, mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionAudioForwarderRemote), null, false, 0, undefined),
      mojo.internal.StructField('options', 24, 0, media.mojom.SpeechRecognitionOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_count', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('continuous', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

media.mojom.SpeechRecognitionContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionContextRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionContextPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindRecognizer(receiver, client, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognitionContext_BindRecognizer_ParamsSpec,
      media.mojom.SpeechRecognitionContext_BindRecognizer_ResponseParamsSpec,
      [receiver, client, options],
      false);
  }

  bindWebSpeechRecognizer(session_receiver, session_client, audio_forwarder, channel_count, sample_rate, options, continuous) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_ParamsSpec,
      null,
      [session_receiver, session_client, audio_forwarder, channel_count, sample_rate, options, continuous],
      false);
  }

};

media.mojom.SpeechRecognitionContext.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionContext',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionContextReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionContext_BindRecognizer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindRecognizer');
          const result = this.impl.bindRecognizer(params.receiver, params.client, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.SpeechRecognitionContext_BindRecognizer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindWebSpeechRecognizer');
          const result = this.impl.bindWebSpeechRecognizer(params.session_receiver, params.session_client, params.audio_forwarder, params.channel_count, params.sample_rate, params.options, params.continuous);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionContextReceiver = media.mojom.SpeechRecognitionContextReceiver;

media.mojom.SpeechRecognitionContextPtr = media.mojom.SpeechRecognitionContextRemote;
media.mojom.SpeechRecognitionContextRequest = media.mojom.SpeechRecognitionContextPendingReceiver;


// Interface: SpeechRecognitionRecognizer
mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.AudioDataS16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_start_pts', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 10, undefined),
    ],
    [[0, 16], [10, 24]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizer_MarkDone_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizer_MarkDone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_Params', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_Params', [
      mojo.internal.StructField('mask_offensive_words', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_Params', [
      mojo.internal.StructField('recognition_context', 0, 0, media.mojom.SpeechRecognitionRecognitionContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionRecognizerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionRecognizerPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendAudioToSpeechRecognitionService(buffer, media_start_pts) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_ParamsSpec,
      null,
      [buffer, media_start_pts],
      false);
  }

  markDone() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionRecognizer_MarkDone_ParamsSpec,
      null,
      [],
      false);
  }

  onLanguageChanged(language) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_ParamsSpec,
      null,
      [language],
      false);
  }

  onMaskOffensiveWordsChanged(mask_offensive_words) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_ParamsSpec,
      null,
      [mask_offensive_words],
      false);
  }

  updateRecognitionContext(recognition_context) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_ParamsSpec,
      null,
      [recognition_context],
      false);
  }

};

media.mojom.SpeechRecognitionRecognizer.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionRecognizer',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionRecognizerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.sendAudioToSpeechRecognitionService');
          const result = this.impl.sendAudioToSpeechRecognitionService(params.buffer, params.media_start_pts);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionRecognizer_MarkDone_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.markDone');
          const result = this.impl.markDone();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onLanguageChanged');
          const result = this.impl.onLanguageChanged(params.language);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onMaskOffensiveWordsChanged');
          const result = this.impl.onMaskOffensiveWordsChanged(params.mask_offensive_words);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.updateRecognitionContext');
          const result = this.impl.updateRecognitionContext(params.recognition_context);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionRecognizerReceiver = media.mojom.SpeechRecognitionRecognizerReceiver;

media.mojom.SpeechRecognitionRecognizerPtr = media.mojom.SpeechRecognitionRecognizerRemote;
media.mojom.SpeechRecognitionRecognizerRequest = media.mojom.SpeechRecognitionRecognizerPendingReceiver;


// Interface: SpeechRecognitionRecognizerClient
mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_Params', [
      mojo.internal.StructField('result', 0, 0, media.mojom.SpeechRecognitionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ResponseParamsSpec, 'media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ResponseParams', [
      mojo.internal.StructField('continue_recognition', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_ParamsSpec, 'media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_Params', [
      mojo.internal.StructField('event', 0, 0, media.mojom.LanguageIdentificationEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionRecognizerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionRecognizerClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionRecognizerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionRecognizerClientPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionRecognizerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionRecognizerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSpeechRecognitionRecognitionEvent(result) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ParamsSpec,
      media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ResponseParamsSpec,
      [result],
      false);
  }

  onSpeechRecognitionStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_ParamsSpec,
      null,
      [],
      false);
  }

  onSpeechRecognitionError() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_ParamsSpec,
      null,
      [],
      false);
  }

  onLanguageIdentificationEvent(event) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_ParamsSpec,
      null,
      [event],
      false);
  }

};

media.mojom.SpeechRecognitionRecognizerClient.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionRecognizerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionRecognizerClient',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionRecognizerClientReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onSpeechRecognitionRecognitionEvent');
          const result = this.impl.onSpeechRecognitionRecognitionEvent(params.result);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onSpeechRecognitionStopped');
          const result = this.impl.onSpeechRecognitionStopped();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onSpeechRecognitionError');
          const result = this.impl.onSpeechRecognitionError();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onLanguageIdentificationEvent');
          const result = this.impl.onLanguageIdentificationEvent(params.event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionRecognizerClientReceiver = media.mojom.SpeechRecognitionRecognizerClientReceiver;

media.mojom.SpeechRecognitionRecognizerClientPtr = media.mojom.SpeechRecognitionRecognizerClientRemote;
media.mojom.SpeechRecognitionRecognizerClientRequest = media.mojom.SpeechRecognitionRecognizerClientPendingReceiver;


// Interface: SpeechRecognitionBrowserObserver
mojo.internal.Struct(
    media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_ParamsSpec, 'media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_Params', [
      mojo.internal.StructField('is_speech_recognition_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_ParamsSpec, 'media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_Params', [
      mojo.internal.StructField('language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_ParamsSpec, 'media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_Params', [
      mojo.internal.StructField('mask_offensive_words', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionBrowserObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionBrowserObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionBrowserObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionBrowserObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionBrowserObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionBrowserObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  speechRecognitionAvailabilityChanged(is_speech_recognition_available) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_ParamsSpec,
      null,
      [is_speech_recognition_available],
      false);
  }

  speechRecognitionLanguageChanged(language) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_ParamsSpec,
      null,
      [language],
      false);
  }

  speechRecognitionMaskOffensiveWordsChanged(mask_offensive_words) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_ParamsSpec,
      null,
      [mask_offensive_words],
      false);
  }

};

media.mojom.SpeechRecognitionBrowserObserver.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionBrowserObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionBrowserObserver',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionBrowserObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.speechRecognitionAvailabilityChanged');
          const result = this.impl.speechRecognitionAvailabilityChanged(params.is_speech_recognition_available);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.speechRecognitionLanguageChanged');
          const result = this.impl.speechRecognitionLanguageChanged(params.language);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.speechRecognitionMaskOffensiveWordsChanged');
          const result = this.impl.speechRecognitionMaskOffensiveWordsChanged(params.mask_offensive_words);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionBrowserObserverReceiver = media.mojom.SpeechRecognitionBrowserObserverReceiver;

media.mojom.SpeechRecognitionBrowserObserverPtr = media.mojom.SpeechRecognitionBrowserObserverRemote;
media.mojom.SpeechRecognitionBrowserObserverRequest = media.mojom.SpeechRecognitionBrowserObserverPendingReceiver;


// Interface: SpeechRecognitionSurface
mojo.internal.Struct(
    media.mojom.SpeechRecognitionSurface_Activate_ParamsSpec, 'media.mojom.SpeechRecognitionSurface_Activate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSurface_GetBounds_ParamsSpec, 'media.mojom.SpeechRecognitionSurface_GetBounds_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSurface_GetBounds_ResponseParamsSpec, 'media.mojom.SpeechRecognitionSurface_GetBounds_ResponseParams', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionSurfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionSurfaceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionSurface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionSurfacePendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionSurfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionSurfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  activate() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognitionSurface_Activate_ParamsSpec,
      null,
      [],
      false);
  }

  getBounds() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionSurface_GetBounds_ParamsSpec,
      media.mojom.SpeechRecognitionSurface_GetBounds_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.SpeechRecognitionSurface.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionSurfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionSurface',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionSurfaceReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionSurface_Activate_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.activate');
          const result = this.impl.activate();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionSurface_GetBounds_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getBounds');
          const result = this.impl.getBounds();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.SpeechRecognitionSurface_GetBounds_ResponseParamsSpec);
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

media.mojom.SpeechRecognitionSurfaceReceiver = media.mojom.SpeechRecognitionSurfaceReceiver;

media.mojom.SpeechRecognitionSurfacePtr = media.mojom.SpeechRecognitionSurfaceRemote;
media.mojom.SpeechRecognitionSurfaceRequest = media.mojom.SpeechRecognitionSurfacePendingReceiver;


// Interface: SpeechRecognitionSurfaceClient
mojo.internal.Struct(
    media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_ParamsSpec, 'media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_ParamsSpec, 'media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_Params', [
    ],
    [[0, 8]]);

media.mojom.SpeechRecognitionSurfaceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionSurfaceClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionSurfaceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionSurfaceClientPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionSurfaceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionSurfaceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSessionEnded() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_ParamsSpec,
      null,
      [],
      false);
  }

  onFullscreenToggled() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_ParamsSpec,
      null,
      [],
      false);
  }

};

media.mojom.SpeechRecognitionSurfaceClient.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionSurfaceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionSurfaceClient',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionSurfaceClientReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onSessionEnded');
          const result = this.impl.onSessionEnded();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onFullscreenToggled');
          const result = this.impl.onFullscreenToggled();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionSurfaceClientReceiver = media.mojom.SpeechRecognitionSurfaceClientReceiver;

media.mojom.SpeechRecognitionSurfaceClientPtr = media.mojom.SpeechRecognitionSurfaceClientRemote;
media.mojom.SpeechRecognitionSurfaceClientRequest = media.mojom.SpeechRecognitionSurfaceClientPendingReceiver;


// Interface: SpeechRecognitionClientBrowserInterface
mojo.internal.Struct(
    media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_ParamsSpec, 'media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionBrowserObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_ParamsSpec, 'media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_ParamsSpec, 'media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionBrowserObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionClientBrowserInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionClientBrowserInterfaceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionClientBrowserInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionClientBrowserInterfacePendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionClientBrowserInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionClientBrowserInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindSpeechRecognitionBrowserObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  rEMOVED_1() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_ParamsSpec,
      null,
      [],
      false);
  }

  rEMOVED_2(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_ParamsSpec,
      null,
      [observer],
      false);
  }

};

media.mojom.SpeechRecognitionClientBrowserInterface.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionClientBrowserInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionClientBrowserInterface',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionClientBrowserInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindSpeechRecognitionBrowserObserver');
          const result = this.impl.bindSpeechRecognitionBrowserObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_1');
          const result = this.impl.rEMOVED_1();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.rEMOVED_2');
          const result = this.impl.rEMOVED_2(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionClientBrowserInterfaceReceiver = media.mojom.SpeechRecognitionClientBrowserInterfaceReceiver;

media.mojom.SpeechRecognitionClientBrowserInterfacePtr = media.mojom.SpeechRecognitionClientBrowserInterfaceRemote;
media.mojom.SpeechRecognitionClientBrowserInterfaceRequest = media.mojom.SpeechRecognitionClientBrowserInterfacePendingReceiver;

