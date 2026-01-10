// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognition.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: ConfidenceLevel
media.mojom.ConfidenceLevel = {
  kUnknown: 0,
  kNotConfident: 1,
  kConfident: 2,
  kHighlyConfident: 3,
};
media.mojom.ConfidenceLevelSpec = { $: mojo.internal.Enum() };

// Enum: AsrSwitchResult
media.mojom.AsrSwitchResult = {
  kDefaultNoSwitch: 0,
  kSwitchSucceeded: 1,
  kSwitchFailed: 2,
  kSwitchSkipedNoLp: 3,
};
media.mojom.AsrSwitchResultSpec = { $: mojo.internal.Enum() };

// Enum: SpeechRecognitionMode
media.mojom.SpeechRecognitionMode = {
  kUnknown: 0,
  kIme: 1,
  kCaption: 2,
};
media.mojom.SpeechRecognitionModeSpec = { $: mojo.internal.Enum() };

// Enum: RecognizerClientType
media.mojom.RecognizerClientType = {
  kUnknown: 0,
  kDictation: 1,
  kLiveCaption: 2,
  kProjector: 3,
  kCastModerator: 4,
};
media.mojom.RecognizerClientTypeSpec = { $: mojo.internal.Enum() };

// Struct: HypothesisParts
media.mojom.HypothesisPartsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.HypothesisParts',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'hypothesis_part_offset', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MediaTimestampRange
media.mojom.MediaTimestampRangeSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaTimestampRange',
      packedSize: 24,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TimingInformation
media.mojom.TimingInformationSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.TimingInformation',
      packedSize: 40,
      fields: [
        { name: 'audio_start_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'audio_end_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'hypothesis_parts', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.HypothesisPartsSpec, false), nullable: true, minVersion: 0 },
        { name: 'originating_media_timestamps', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.MediaTimestampRangeSpec, false), nullable: true, minVersion: 11 },
      ],
      versions: [{version: 0, packedSize: 32}, {version: 11, packedSize: 40}]
    }
  }
};

// Struct: SpeechRecognitionResult
media.mojom.SpeechRecognitionResultSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionResult',
      packedSize: 32,
      fields: [
        { name: 'transcription', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_final', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'timing_information', packedOffset: 8, packedBitOffset: 0, type: media.mojom.TimingInformationSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: LanguageIdentificationEvent
media.mojom.LanguageIdentificationEventSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.LanguageIdentificationEvent',
      packedSize: 24,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'confidence_level', packedOffset: 8, packedBitOffset: 0, type: media.mojom.ConfidenceLevelSpec, nullable: false, minVersion: 0 },
        { name: 'asr_switch_result', packedOffset: 12, packedBitOffset: 0, type: media.mojom.AsrSwitchResultSpec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 1, packedSize: 24}]
    }
  }
};

// Struct: SpeechRecognitionOptions
media.mojom.SpeechRecognitionOptionsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionOptions',
      packedSize: 56,
      fields: [
        { name: 'recognition_mode', packedOffset: 8, packedBitOffset: 0, type: media.mojom.SpeechRecognitionModeSpec, nullable: false, minVersion: 0 },
        { name: 'enable_formatting', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_server_based', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
        { name: 'recognizer_client_type', packedOffset: 16, packedBitOffset: 0, type: media.mojom.RecognizerClientTypeSpec, nullable: false, minVersion: 1 },
        { name: 'skip_continuously_empty_audio', packedOffset: 12, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 4 },
        { name: 'experiment_recognizer_routing_key', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 5 },
        { name: 'channel_count', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 6 },
        { name: 'sample_rate', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 6 },
        { name: 'recognition_context', packedOffset: 40, packedBitOffset: 0, type: media.mojom.SpeechRecognitionRecognitionContextSpec, nullable: true, minVersion: 8 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 1, packedSize: 32}, {version: 4, packedSize: 32}, {version: 5, packedSize: 40}, {version: 6, packedSize: 48}, {version: 8, packedSize: 56}]
    }
  }
};

// Interface: SpeechRecognitionContext
media.mojom.SpeechRecognitionContext = {};

media.mojom.SpeechRecognitionContext_BindRecognizer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionContext_BindRecognizer_Params',
      packedSize: 32,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionRecognizerRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionRecognizerClientRemote), nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: media.mojom.SpeechRecognitionOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_Params',
      packedSize: 56,
      fields: [
        { name: 'session_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionSessionRemote), nullable: false, minVersion: 0 },
        { name: 'session_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionSessionClientRemote), nullable: false, minVersion: 0 },
        { name: 'audio_forwarder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionAudioForwarderRemote), nullable: false, minVersion: 0 },
        { name: 'channel_count', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sample_rate', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 24, packedBitOffset: 0, type: media.mojom.SpeechRecognitionOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'continuous', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

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
      [receiver, client, options]);
  }

  bindWebSpeechRecognizer(session_receiver, session_client, audio_forwarder, channel_count, sample_rate, options, continuous) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_ParamsSpec,
      null,
      [session_receiver, session_client, audio_forwarder, channel_count, sample_rate, options, continuous]);
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

// ParamsSpec for BindRecognizer
media.mojom.SpeechRecognitionContext_BindRecognizer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionContext.BindRecognizer_Params',
      packedSize: 32,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionRecognizerRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionRecognizerClientRemote), nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: media.mojom.SpeechRecognitionOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

media.mojom.SpeechRecognitionContext_BindRecognizer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionContext.BindRecognizer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_multichannel_supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindWebSpeechRecognizer
media.mojom.SpeechRecognitionContext_BindWebSpeechRecognizer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionContext.BindWebSpeechRecognizer_Params',
      packedSize: 56,
      fields: [
        { name: 'session_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionSessionRemote), nullable: false, minVersion: 0 },
        { name: 'session_client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionSessionClientRemote), nullable: false, minVersion: 0 },
        { name: 'audio_forwarder', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionAudioForwarderRemote), nullable: false, minVersion: 0 },
        { name: 'channel_count', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'sample_rate', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 24, packedBitOffset: 0, type: media.mojom.SpeechRecognitionOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'continuous', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Legacy compatibility
media.mojom.SpeechRecognitionContextPtr = media.mojom.SpeechRecognitionContextRemote;
media.mojom.SpeechRecognitionContextRequest = media.mojom.SpeechRecognitionContextPendingReceiver;


// Interface: SpeechRecognitionRecognizer
media.mojom.SpeechRecognitionRecognizer = {};

media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioDataS16Spec, nullable: false, minVersion: 0 },
        { name: 'media_start_pts', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 10 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 10, packedSize: 24}]
    }
  }
};

media.mojom.SpeechRecognitionRecognizer_MarkDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizer_MarkDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'mask_offensive_words', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_Params',
      packedSize: 16,
      fields: [
        { name: 'recognition_context', packedOffset: 0, packedBitOffset: 0, type: media.mojom.SpeechRecognitionRecognitionContextSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [buffer, media_start_pts]);
  }

  markDone() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionRecognizer_MarkDone_ParamsSpec,
      null,
      []);
  }

  onLanguageChanged(language) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_ParamsSpec,
      null,
      [language]);
  }

  onMaskOffensiveWordsChanged(mask_offensive_words) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_ParamsSpec,
      null,
      [mask_offensive_words]);
  }

  updateRecognitionContext(recognition_context) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_ParamsSpec,
      null,
      [recognition_context]);
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

// ParamsSpec for SendAudioToSpeechRecognitionService
media.mojom.SpeechRecognitionRecognizer_SendAudioToSpeechRecognitionService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizer.SendAudioToSpeechRecognitionService_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioDataS16Spec, nullable: false, minVersion: 0 },
        { name: 'media_start_pts', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 10 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 10, packedSize: 24}]
    }
  }
};

// ParamsSpec for MarkDone
media.mojom.SpeechRecognitionRecognizer_MarkDone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizer.MarkDone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnLanguageChanged
media.mojom.SpeechRecognitionRecognizer_OnLanguageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizer.OnLanguageChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMaskOffensiveWordsChanged
media.mojom.SpeechRecognitionRecognizer_OnMaskOffensiveWordsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizer.OnMaskOffensiveWordsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'mask_offensive_words', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateRecognitionContext
media.mojom.SpeechRecognitionRecognizer_UpdateRecognitionContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizer.UpdateRecognitionContext_Params',
      packedSize: 16,
      fields: [
        { name: 'recognition_context', packedOffset: 0, packedBitOffset: 0, type: media.mojom.SpeechRecognitionRecognitionContextSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.SpeechRecognitionRecognizerPtr = media.mojom.SpeechRecognitionRecognizerRemote;
media.mojom.SpeechRecognitionRecognizerRequest = media.mojom.SpeechRecognitionRecognizerPendingReceiver;


// Interface: SpeechRecognitionRecognizerClient
media.mojom.SpeechRecognitionRecognizerClient = {};

media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: media.mojom.SpeechRecognitionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: media.mojom.LanguageIdentificationEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [result]);
  }

  onSpeechRecognitionStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_ParamsSpec,
      null,
      []);
  }

  onSpeechRecognitionError() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_ParamsSpec,
      null,
      []);
  }

  onLanguageIdentificationEvent(event) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_ParamsSpec,
      null,
      [event]);
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

// ParamsSpec for OnSpeechRecognitionRecognitionEvent
media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizerClient.OnSpeechRecognitionRecognitionEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: media.mojom.SpeechRecognitionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionRecognitionEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizerClient.OnSpeechRecognitionRecognitionEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'continue_recognition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSpeechRecognitionStopped
media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizerClient.OnSpeechRecognitionStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnSpeechRecognitionError
media.mojom.SpeechRecognitionRecognizerClient_OnSpeechRecognitionError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizerClient.OnSpeechRecognitionError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnLanguageIdentificationEvent
media.mojom.SpeechRecognitionRecognizerClient_OnLanguageIdentificationEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionRecognizerClient.OnLanguageIdentificationEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: media.mojom.LanguageIdentificationEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.SpeechRecognitionRecognizerClientPtr = media.mojom.SpeechRecognitionRecognizerClientRemote;
media.mojom.SpeechRecognitionRecognizerClientRequest = media.mojom.SpeechRecognitionRecognizerClientPendingReceiver;


// Interface: SpeechRecognitionBrowserObserver
media.mojom.SpeechRecognitionBrowserObserver = {};

media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_speech_recognition_available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'mask_offensive_words', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [is_speech_recognition_available]);
  }

  speechRecognitionLanguageChanged(language) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_ParamsSpec,
      null,
      [language]);
  }

  speechRecognitionMaskOffensiveWordsChanged(mask_offensive_words) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_ParamsSpec,
      null,
      [mask_offensive_words]);
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

// ParamsSpec for SpeechRecognitionAvailabilityChanged
media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionAvailabilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionBrowserObserver.SpeechRecognitionAvailabilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_speech_recognition_available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SpeechRecognitionLanguageChanged
media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionLanguageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionBrowserObserver.SpeechRecognitionLanguageChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'language', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SpeechRecognitionMaskOffensiveWordsChanged
media.mojom.SpeechRecognitionBrowserObserver_SpeechRecognitionMaskOffensiveWordsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionBrowserObserver.SpeechRecognitionMaskOffensiveWordsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'mask_offensive_words', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.SpeechRecognitionBrowserObserverPtr = media.mojom.SpeechRecognitionBrowserObserverRemote;
media.mojom.SpeechRecognitionBrowserObserverRequest = media.mojom.SpeechRecognitionBrowserObserverPendingReceiver;


// Interface: SpeechRecognitionSurface
media.mojom.SpeechRecognitionSurface = {};

media.mojom.SpeechRecognitionSurface_Activate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSurface_Activate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.SpeechRecognitionSurface_GetBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSurface_GetBounds_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      []);
  }

  getBounds() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionSurface_GetBounds_ParamsSpec,
      media.mojom.SpeechRecognitionSurface_GetBounds_ResponseParamsSpec,
      []);
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

// ParamsSpec for Activate
media.mojom.SpeechRecognitionSurface_Activate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSurface.Activate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetBounds
media.mojom.SpeechRecognitionSurface_GetBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSurface.GetBounds_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.SpeechRecognitionSurface_GetBounds_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSurface.GetBounds_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.SpeechRecognitionSurfacePtr = media.mojom.SpeechRecognitionSurfaceRemote;
media.mojom.SpeechRecognitionSurfaceRequest = media.mojom.SpeechRecognitionSurfacePendingReceiver;


// Interface: SpeechRecognitionSurfaceClient
media.mojom.SpeechRecognitionSurfaceClient = {};

media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      []);
  }

  onFullscreenToggled() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnSessionEnded
media.mojom.SpeechRecognitionSurfaceClient_OnSessionEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSurfaceClient.OnSessionEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnFullscreenToggled
media.mojom.SpeechRecognitionSurfaceClient_OnFullscreenToggled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionSurfaceClient.OnFullscreenToggled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
media.mojom.SpeechRecognitionSurfaceClientPtr = media.mojom.SpeechRecognitionSurfaceClientRemote;
media.mojom.SpeechRecognitionSurfaceClientRequest = media.mojom.SpeechRecognitionSurfaceClientPendingReceiver;


// Interface: SpeechRecognitionClientBrowserInterface
media.mojom.SpeechRecognitionClientBrowserInterface = {};

media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionBrowserObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionBrowserObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [observer]);
  }

  rEMOVED_1() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_ParamsSpec,
      null,
      []);
  }

  rEMOVED_2(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_ParamsSpec,
      null,
      [observer]);
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

// ParamsSpec for BindSpeechRecognitionBrowserObserver
media.mojom.SpeechRecognitionClientBrowserInterface_BindSpeechRecognitionBrowserObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionClientBrowserInterface.BindSpeechRecognitionBrowserObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionBrowserObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for REMOVED_1
media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_1_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionClientBrowserInterface.REMOVED_1_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for REMOVED_2
media.mojom.SpeechRecognitionClientBrowserInterface_REMOVED_2_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.SpeechRecognitionClientBrowserInterface.REMOVED_2_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionBrowserObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.SpeechRecognitionClientBrowserInterfacePtr = media.mojom.SpeechRecognitionClientBrowserInterfaceRemote;
media.mojom.SpeechRecognitionClientBrowserInterfaceRequest = media.mojom.SpeechRecognitionClientBrowserInterfacePendingReceiver;

