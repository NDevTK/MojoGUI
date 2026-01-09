// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/speech/speech_synthesis.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SpeechSynthesisErrorCode
blink.mojom.SpeechSynthesisErrorCode = {
  kCancelled: 0,
  kInterrupted: 1,
  kErrorOccurred: 2,
  kNoError: 3,
};

// Interface: SpeechSynthesisVoiceListObserver
blink.mojom.SpeechSynthesisVoiceListObserver = {};

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
      null,
      [voice_list],
      undefined,
      undefined
    );
  }

};

blink.mojom.SpeechSynthesisVoiceListObserver.getRemote = function() {
  let remote = new blink.mojom.SpeechSynthesisVoiceListObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SpeechSynthesisVoiceListObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnSetVoiceList
blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisVoiceListObserver.OnSetVoiceList_Params',
      packedSize: 16,
      fields: [
        { name: 'voice_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.SpeechSynthesisVoiceListObserverPtr = blink.mojom.SpeechSynthesisVoiceListObserverRemote;
blink.mojom.SpeechSynthesisVoiceListObserverRequest = blink.mojom.SpeechSynthesisVoiceListObserverPendingReceiver;


// Interface: SpeechSynthesisClient
blink.mojom.SpeechSynthesisClient = {};

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
      null,
      [],
      undefined,
      undefined
    );
  }

  onFinishedSpeaking(error_code) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec,
      null,
      null,
      [error_code],
      undefined,
      undefined
    );
  }

  onPausedSpeaking() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onResumedSpeaking() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onEncounteredWordBoundary(char_index, char_length) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec,
      null,
      null,
      [char_index, char_length],
      undefined,
      undefined
    );
  }

  onEncounteredSentenceBoundary(char_index, char_length) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec,
      null,
      null,
      [char_index, char_length],
      undefined,
      undefined
    );
  }

  onEncounteredSpeakingError() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

blink.mojom.SpeechSynthesisClient.getRemote = function() {
  let remote = new blink.mojom.SpeechSynthesisClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SpeechSynthesisClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnStartedSpeaking
blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec = {
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
blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisClient.OnFinishedSpeaking_Params',
      packedSize: 16,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPausedSpeaking
blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec = {
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
blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec = {
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
blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisClient.OnEncounteredWordBoundary_Params',
      packedSize: 24,
      fields: [
        { name: 'char_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'char_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnEncounteredSentenceBoundary
blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesisClient.OnEncounteredSentenceBoundary_Params',
      packedSize: 24,
      fields: [
        { name: 'char_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'char_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnEncounteredSpeakingError
blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec = {
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
blink.mojom.SpeechSynthesisClientPtr = blink.mojom.SpeechSynthesisClientRemote;
blink.mojom.SpeechSynthesisClientRequest = blink.mojom.SpeechSynthesisClientPendingReceiver;


// Interface: SpeechSynthesis
blink.mojom.SpeechSynthesis = {};

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
      null,
      [observer],
      undefined,
      undefined
    );
  }

  speak(utterance, client) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SpeechSynthesis_Speak_ParamsSpec,
      null,
      null,
      [utterance, client],
      undefined,
      undefined
    );
  }

  pause() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SpeechSynthesis_Pause_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  resume() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SpeechSynthesis_Resume_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  cancel() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SpeechSynthesis_Cancel_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

blink.mojom.SpeechSynthesis.getRemote = function() {
  let remote = new blink.mojom.SpeechSynthesisRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SpeechSynthesis',
    'context');
  return remote.$;
};

// ParamsSpec for AddVoiceListObserver
blink.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesis.AddVoiceListObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Speak
blink.mojom.SpeechSynthesis_Speak_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SpeechSynthesis.Speak_Params',
      packedSize: 24,
      fields: [
        { name: 'utterance', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Pause
blink.mojom.SpeechSynthesis_Pause_ParamsSpec = {
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
blink.mojom.SpeechSynthesis_Resume_ParamsSpec = {
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
blink.mojom.SpeechSynthesis_Cancel_ParamsSpec = {
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
blink.mojom.SpeechSynthesisPtr = blink.mojom.SpeechSynthesisRemote;
blink.mojom.SpeechSynthesisRequest = blink.mojom.SpeechSynthesisPendingReceiver;

