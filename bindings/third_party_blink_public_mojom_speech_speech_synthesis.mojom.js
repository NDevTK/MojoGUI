// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/speech/speech_synthesis.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


blink.mojom.mojom.kSpeechSynthesisDefaultRate = 1.0;

blink.mojom.mojom.kSpeechSynthesisDefaultPitch = 1.0;

blink.mojom.mojom.kSpeechSynthesisDefaultVolume = 1.0;

blink.mojom.mojom.kSpeechSynthesisDoublePrefNotSet = -1.0;

// Enum: SpeechSynthesisErrorCode
blink.mojom.mojom.SpeechSynthesisErrorCode = {
  kCancelled: 0,
  kInterrupted: 1,
  kErrorOccurred: 2,
  kNoError: 3,
};
blink.mojom.mojom.SpeechSynthesisErrorCodeSpec = { $: mojo.internal.Enum() };

// Struct: SpeechSynthesisUtterance
blink.mojom.mojom.SpeechSynthesisUtteranceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisUtterance',
      packedSize: 56,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'lang', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'voice', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'volume', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'rate', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'pitch', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: SpeechSynthesisVoice
blink.mojom.mojom.SpeechSynthesisVoiceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisVoice',
      packedSize: 40,
      fields: [
        { name: 'voice_uri', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'lang', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_local_service', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_default', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: SpeechSynthesisVoiceListObserver
blink.mojom.mojom.SpeechSynthesisVoiceListObserver = {};

blink.mojom.mojom.SpeechSynthesisVoiceListObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.SpeechSynthesisVoiceListObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SpeechSynthesisVoiceListObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.SpeechSynthesisVoiceListObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.SpeechSynthesisVoiceListObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.SpeechSynthesisVoiceListObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSetVoiceList(voice_list) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec,
      null,
      [voice_list]);
  }

};

blink.mojom.mojom.SpeechSynthesisVoiceListObserver.getRemote = function() {
  let remote = new blink.mojom.mojom.SpeechSynthesisVoiceListObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SpeechSynthesisVoiceListObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnSetVoiceList
blink.mojom.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisVoiceListObserver.OnSetVoiceList_Params',
      packedSize: 16,
      fields: [
        { name: 'voice_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SpeechSynthesisVoiceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.SpeechSynthesisVoiceListObserverPtr = blink.mojom.mojom.SpeechSynthesisVoiceListObserverRemote;
blink.mojom.mojom.SpeechSynthesisVoiceListObserverRequest = blink.mojom.mojom.SpeechSynthesisVoiceListObserverPendingReceiver;


// Interface: SpeechSynthesisClient
blink.mojom.mojom.SpeechSynthesisClient = {};

blink.mojom.mojom.SpeechSynthesisClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.SpeechSynthesisClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SpeechSynthesisClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.SpeechSynthesisClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.SpeechSynthesisClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.SpeechSynthesisClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStartedSpeaking() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec,
      null,
      []);
  }

  onFinishedSpeaking(error_code) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec,
      null,
      [error_code]);
  }

  onPausedSpeaking() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec,
      null,
      []);
  }

  onResumedSpeaking() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec,
      null,
      []);
  }

  onEncounteredWordBoundary(char_index, char_length) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec,
      null,
      [char_index, char_length]);
  }

  onEncounteredSentenceBoundary(char_index, char_length) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec,
      null,
      [char_index, char_length]);
  }

  onEncounteredSpeakingError() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.SpeechSynthesisClient.getRemote = function() {
  let remote = new blink.mojom.mojom.SpeechSynthesisClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SpeechSynthesisClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnStartedSpeaking
blink.mojom.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisClient.OnStartedSpeaking_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnFinishedSpeaking
blink.mojom.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisClient.OnFinishedSpeaking_Params',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SpeechSynthesisErrorCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPausedSpeaking
blink.mojom.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisClient.OnPausedSpeaking_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnResumedSpeaking
blink.mojom.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisClient.OnResumedSpeaking_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnEncounteredWordBoundary
blink.mojom.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisClient.OnEncounteredWordBoundary_Params',
      packedSize: 16,
      fields: [
        { name: 'char_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'char_length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnEncounteredSentenceBoundary
blink.mojom.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisClient.OnEncounteredSentenceBoundary_Params',
      packedSize: 16,
      fields: [
        { name: 'char_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'char_length', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnEncounteredSpeakingError
blink.mojom.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisClient.OnEncounteredSpeakingError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.SpeechSynthesisClientPtr = blink.mojom.mojom.SpeechSynthesisClientRemote;
blink.mojom.mojom.SpeechSynthesisClientRequest = blink.mojom.mojom.SpeechSynthesisClientPendingReceiver;


// Interface: SpeechSynthesis
blink.mojom.mojom.SpeechSynthesis = {};

blink.mojom.mojom.SpeechSynthesisPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.SpeechSynthesisRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SpeechSynthesis';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.SpeechSynthesisPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.SpeechSynthesisRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.SpeechSynthesisRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addVoiceListObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec,
      null,
      [observer]);
  }

  speak(utterance, client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.SpeechSynthesis_Speak_ParamsSpec,
      null,
      [utterance, client]);
  }

  pause() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.SpeechSynthesis_Pause_ParamsSpec,
      null,
      []);
  }

  resume() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.SpeechSynthesis_Resume_ParamsSpec,
      null,
      []);
  }

  cancel() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.SpeechSynthesis_Cancel_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.SpeechSynthesis.getRemote = function() {
  let remote = new blink.mojom.mojom.SpeechSynthesisRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SpeechSynthesis',
    'context');
  return remote.$;
};

// ParamsSpec for AddVoiceListObserver
blink.mojom.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesis.AddVoiceListObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Speak
blink.mojom.mojom.SpeechSynthesis_Speak_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesis.Speak_Params',
      packedSize: 24,
      fields: [
        { name: 'utterance', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SpeechSynthesisUtteranceSpec, nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Pause
blink.mojom.mojom.SpeechSynthesis_Pause_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesis.Pause_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Resume
blink.mojom.mojom.SpeechSynthesis_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesis.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Cancel
blink.mojom.mojom.SpeechSynthesis_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesis.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.SpeechSynthesisPtr = blink.mojom.mojom.SpeechSynthesisRemote;
blink.mojom.mojom.SpeechSynthesisRequest = blink.mojom.mojom.SpeechSynthesisPendingReceiver;

