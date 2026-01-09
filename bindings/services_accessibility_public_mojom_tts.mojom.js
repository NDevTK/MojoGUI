// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/tts.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Enum: TtsEventType
ax.mojom.TtsEventType = {
  kStart: 0,
  kEnd: 1,
  kWord: 2,
  kSentence: 3,
  kMarker: 4,
  kInterrupted: 5,
  kCancelled: 6,
  kError: 7,
  kPause: 8,
  kResume: 9,
};

// Enum: TtsError
ax.mojom.TtsError = {
  kNoError: 0,
  kErrorExtensionIdMismatch: 1,
  kErrorInvalidLang: 2,
  kErrorInvalidPitch: 3,
  kErrorInvalidRate: 4,
  kErrorInvalidVolume: 5,
  kErrorMissingPauseOrResume: 6,
  kErrorUndeclaredEventType: 7,
  kErrorUtteranceTooLong: 8,
};

// Interface: TtsUtteranceClient
ax.mojom.TtsUtteranceClient = {};

ax.mojom.TtsUtteranceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.TtsUtteranceClientRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.TtsUtteranceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.TtsUtteranceClientPendingReceiver,
      handle);
    this.$ = new ax.mojom.TtsUtteranceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.TtsUtteranceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.TtsUtteranceClient_OnEvent_ParamsSpec.$,
      null,
      [event]);
  }

};

ax.mojom.TtsUtteranceClient.getRemote = function() {
  let remote = new ax.mojom.TtsUtteranceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.TtsUtteranceClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnEvent
ax.mojom.TtsUtteranceClient_OnEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.TtsUtteranceClient.OnEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ax.mojom.TtsUtteranceClientPtr = ax.mojom.TtsUtteranceClientRemote;
ax.mojom.TtsUtteranceClientRequest = ax.mojom.TtsUtteranceClientPendingReceiver;


// Interface: Tts
ax.mojom.Tts = {};

ax.mojom.TtsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.TtsRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.Tts';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.TtsPendingReceiver,
      handle);
    this.$ = new ax.mojom.TtsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.TtsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  speak(utterance, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.Tts_Speak_ParamsSpec.$,
      ax.mojom.Tts_Speak_ResponseParamsSpec.$,
      [utterance, options]);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.Tts_Stop_ParamsSpec.$,
      null,
      []);
  }

  pause() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.Tts_Pause_ParamsSpec.$,
      null,
      []);
  }

  resume() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ax.mojom.Tts_Resume_ParamsSpec.$,
      null,
      []);
  }

  isSpeaking() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ax.mojom.Tts_IsSpeaking_ParamsSpec.$,
      ax.mojom.Tts_IsSpeaking_ResponseParamsSpec.$,
      []);
  }

  getVoices() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ax.mojom.Tts_GetVoices_ParamsSpec.$,
      ax.mojom.Tts_GetVoices_ResponseParamsSpec.$,
      []);
  }

};

ax.mojom.Tts.getRemote = function() {
  let remote = new ax.mojom.TtsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.Tts',
    'context');
  return remote.$;
};

// ParamsSpec for Speak
ax.mojom.Tts_Speak_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.Speak_Params',
      packedSize: 24,
      fields: [
        { name: 'utterance', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ax.mojom.Tts_Speak_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.Speak_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Stop
ax.mojom.Tts_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Pause
ax.mojom.Tts_Pause_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.Pause_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Resume
ax.mojom.Tts_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsSpeaking
ax.mojom.Tts_IsSpeaking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.IsSpeaking_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ax.mojom.Tts_IsSpeaking_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.IsSpeaking_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'speaking', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetVoices
ax.mojom.Tts_GetVoices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.GetVoices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ax.mojom.Tts_GetVoices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.GetVoices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'voices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ax.mojom.TtsPtr = ax.mojom.TtsRemote;
ax.mojom.TtsRequest = ax.mojom.TtsPendingReceiver;

