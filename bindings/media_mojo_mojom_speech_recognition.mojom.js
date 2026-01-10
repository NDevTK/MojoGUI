// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
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
      mojo.internal.StructField('is_final', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('timing_information', 16, 0, media.mojom.TimingInformationSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('enable_formatting', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('language', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('is_server_based', 24, 0, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('recognizer_client_type', 32, 0, media.mojom.RecognizerClientTypeSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('skip_continuously_empty_audio', 40, 0, mojo.internal.Bool, false, false, 4, undefined),
      mojo.internal.StructField('experiment_recognizer_routing_key', 48, 0, mojo.internal.String, null, true, 5, undefined),
      mojo.internal.StructField('channel_count', 56, 0, mojo.internal.Int32, 0, false, 6, undefined),
      mojo.internal.StructField('sample_rate', 60, 0, mojo.internal.Int32, 0, false, 6, undefined),
      mojo.internal.StructField('recognition_context', 64, 0, media.mojom.SpeechRecognitionRecognitionContextSpec.$, null, true, 8, undefined),
    ],
    [[0, 32], [1, 48], [4, 56], [5, 64], [6, 72], [8, 80]]);

// Interface: SpeechRecognitionContext
mojo.internal.Struct(
    media.mojom.SpeechRecognitionContext_BindRecognizer_ParamsSpec, 'media.mojom.SpeechRecognitionContext_BindRecognizer_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionRecognizerRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionRecognizerClientRemote), null, false, 0, undefined),
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
      mojo.internal.StructField('channel_count', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('options', 32, 0, media.mojom.SpeechRecognitionOptionsSpec.$, null, false, 0, undefined),
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

media.mojom.SpeechRecognitionSurfaceClientPtr = media.mojom.SpeechRecognitionSurfaceClientRemote;
media.mojom.SpeechRecognitionSurfaceClientRequest = media.mojom.SpeechRecognitionSurfaceClientPendingReceiver;


// Interface: SpeechRecognitionClientBrowserInterface
mojo.internal.Struct(
    media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_ParamsSpec, 'media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionBrowserObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_ParamsSpec, 'media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_ParamsSpec, 'media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionBrowserObserverRemote), null, false, 0, undefined),
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

media.mojom.SpeechRecognitionClientBrowserInterfacePtr = media.mojom.SpeechRecognitionClientBrowserInterfaceRemote;
media.mojom.SpeechRecognitionClientBrowserInterfaceRequest = media.mojom.SpeechRecognitionClientBrowserInterfacePendingReceiver;

