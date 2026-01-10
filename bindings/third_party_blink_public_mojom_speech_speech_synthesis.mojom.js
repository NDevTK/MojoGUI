// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/speech/speech_synthesis.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SpeechSynthesisErrorCodeSpec = { $: mojo.internal.Enum() };
blink.mojom.SpeechSynthesisUtteranceSpec = { $: {} };
blink.mojom.SpeechSynthesisVoiceSpec = { $: {} };
blink.mojom.SpeechSynthesisVoiceListObserver = {};
blink.mojom.SpeechSynthesisVoiceListObserver.$interfaceName = 'blink.mojom.SpeechSynthesisVoiceListObserver';
blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec = { $: {} };
blink.mojom.SpeechSynthesisClient = {};
blink.mojom.SpeechSynthesisClient.$interfaceName = 'blink.mojom.SpeechSynthesisClient';
blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec = { $: {} };
blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec = { $: {} };
blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec = { $: {} };
blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec = { $: {} };
blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec = { $: {} };
blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec = { $: {} };
blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec = { $: {} };
blink.mojom.SpeechSynthesis = {};
blink.mojom.SpeechSynthesis.$interfaceName = 'blink.mojom.SpeechSynthesis';
blink.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec = { $: {} };
blink.mojom.SpeechSynthesis_Speak_ParamsSpec = { $: {} };
blink.mojom.SpeechSynthesis_Pause_ParamsSpec = { $: {} };
blink.mojom.SpeechSynthesis_Resume_ParamsSpec = { $: {} };
blink.mojom.SpeechSynthesis_Cancel_ParamsSpec = { $: {} };

blink.mojom.kSpeechSynthesisDefaultRate = 1.0;

blink.mojom.kSpeechSynthesisDefaultPitch = 1.0;

blink.mojom.kSpeechSynthesisDefaultVolume = 1.0;

blink.mojom.kSpeechSynthesisDoublePrefNotSet = -1.0;

// Enum: SpeechSynthesisErrorCode
blink.mojom.SpeechSynthesisErrorCode = {
  kCancelled: 0,
  kInterrupted: 1,
  kErrorOccurred: 2,
  kNoError: 3,
};

// Struct: SpeechSynthesisUtterance
mojo.internal.Struct(
    blink.mojom.SpeechSynthesisUtteranceSpec, 'blink.mojom.SpeechSynthesisUtterance', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lang', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('voice', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('volume', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('rate', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('pitch', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SpeechSynthesisVoice
mojo.internal.Struct(
    blink.mojom.SpeechSynthesisVoiceSpec, 'blink.mojom.SpeechSynthesisVoice', [
      mojo.internal.StructField('voice_uri', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('lang', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_local_service', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_default', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: SpeechSynthesisVoiceListObserver
mojo.internal.Struct(
    blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec, 'blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_Params', [
      mojo.internal.StructField('voice_list', 0, 0, mojo.internal.Array(blink.mojom.SpeechSynthesisVoiceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SpeechSynthesisVoiceListObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SpeechSynthesisVoiceListObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SpeechSynthesisVoiceListObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SpeechSynthesisVoiceListObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.SpeechSynthesisVoiceListObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SpeechSynthesisVoiceListObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSetVoiceList(voice_list) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec,
      null,
      [voice_list],
      false);
  }

};

blink.mojom.SpeechSynthesisVoiceListObserver.getRemote = function() {
  let remote = new blink.mojom.SpeechSynthesisVoiceListObserverRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.SpeechSynthesisVoiceListObserver',
    'context');
  return remote.$;
};

blink.mojom.SpeechSynthesisVoiceListObserverPtr = blink.mojom.SpeechSynthesisVoiceListObserverRemote;
blink.mojom.SpeechSynthesisVoiceListObserverRequest = blink.mojom.SpeechSynthesisVoiceListObserverPendingReceiver;


// Interface: SpeechSynthesisClient
mojo.internal.Struct(
    blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_Params', [
      mojo.internal.StructField('error_code', 0, 0, blink.mojom.SpeechSynthesisErrorCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_Params', [
      mojo.internal.StructField('char_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('char_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_Params', [
      mojo.internal.StructField('char_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('char_length', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec, 'blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_Params', [
    ],
    [[0, 8]]);

blink.mojom.SpeechSynthesisClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SpeechSynthesisClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SpeechSynthesisClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SpeechSynthesisClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.SpeechSynthesisClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SpeechSynthesisClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStartedSpeaking() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec,
      null,
      [],
      false);
  }

  onFinishedSpeaking(error_code) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec,
      null,
      [error_code],
      false);
  }

  onPausedSpeaking() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec,
      null,
      [],
      false);
  }

  onResumedSpeaking() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec,
      null,
      [],
      false);
  }

  onEncounteredWordBoundary(char_index, char_length) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec,
      null,
      [char_index, char_length],
      false);
  }

  onEncounteredSentenceBoundary(char_index, char_length) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec,
      null,
      [char_index, char_length],
      false);
  }

  onEncounteredSpeakingError() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.SpeechSynthesisClient.getRemote = function() {
  let remote = new blink.mojom.SpeechSynthesisClientRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.SpeechSynthesisClient',
    'context');
  return remote.$;
};

blink.mojom.SpeechSynthesisClientPtr = blink.mojom.SpeechSynthesisClientRemote;
blink.mojom.SpeechSynthesisClientRequest = blink.mojom.SpeechSynthesisClientPendingReceiver;


// Interface: SpeechSynthesis
mojo.internal.Struct(
    blink.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec, 'blink.mojom.SpeechSynthesis_AddVoiceListObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.SpeechSynthesisVoiceListObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SpeechSynthesis_Speak_ParamsSpec, 'blink.mojom.SpeechSynthesis_Speak_Params', [
      mojo.internal.StructField('utterance', 0, 0, blink.mojom.SpeechSynthesisUtteranceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.SpeechSynthesisClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SpeechSynthesis_Pause_ParamsSpec, 'blink.mojom.SpeechSynthesis_Pause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SpeechSynthesis_Resume_ParamsSpec, 'blink.mojom.SpeechSynthesis_Resume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SpeechSynthesis_Cancel_ParamsSpec, 'blink.mojom.SpeechSynthesis_Cancel_Params', [
    ],
    [[0, 8]]);

blink.mojom.SpeechSynthesisPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SpeechSynthesisRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SpeechSynthesis';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SpeechSynthesisPendingReceiver,
      handle);
    this.$ = new blink.mojom.SpeechSynthesisRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SpeechSynthesisRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addVoiceListObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  speak(utterance, client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SpeechSynthesis_Speak_ParamsSpec,
      null,
      [utterance, client],
      false);
  }

  pause() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SpeechSynthesis_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SpeechSynthesis_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  cancel() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SpeechSynthesis_Cancel_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.SpeechSynthesis.getRemote = function() {
  let remote = new blink.mojom.SpeechSynthesisRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.SpeechSynthesis',
    'context');
  return remote.$;
};

blink.mojom.SpeechSynthesisPtr = blink.mojom.SpeechSynthesisRemote;
blink.mojom.SpeechSynthesisRequest = blink.mojom.SpeechSynthesisPendingReceiver;

