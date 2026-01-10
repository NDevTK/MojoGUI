// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/tts.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Enum: TtsEventType
ax.mojom.mojom.TtsEventType = {
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
ax.mojom.mojom.TtsEventTypeSpec = { $: mojo.internal.Enum() };

// Enum: TtsError
ax.mojom.mojom.TtsError = {
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
ax.mojom.mojom.TtsErrorSpec = { $: mojo.internal.Enum() };

// Struct: TtsVoice
ax.mojom.mojom.TtsVoiceSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.TtsVoice',
      packedSize: 48,
      fields: [
        { name: 'voice_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'lang', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'remote', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'engine_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'event_types', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.TtsEventTypeSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: TtsOptions
ax.mojom.mojom.TtsOptionsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.TtsOptions',
      packedSize: 64,
      fields: [
        { name: 'pitch', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'rate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'volume', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'enqueue', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'voice_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'engine_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'lang', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'on_event', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: TtsEvent
ax.mojom.mojom.TtsEventSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.TtsEvent',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.TtsEventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'char_index', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'error_message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'length', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_final', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TtsSpeakResult
ax.mojom.mojom.TtsSpeakResultSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.TtsSpeakResult',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.TtsErrorSpec, nullable: false, minVersion: 0 },
        { name: 'utterance_client', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: TtsUtteranceClient
ax.mojom.mojom.TtsUtteranceClient = {};

ax.mojom.mojom.TtsUtteranceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.mojom.TtsUtteranceClientRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.TtsUtteranceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.mojom.TtsUtteranceClientPendingReceiver,
      handle);
    this.$ = new ax.mojom.mojom.TtsUtteranceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.mojom.TtsUtteranceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.mojom.TtsUtteranceClient_OnEvent_ParamsSpec,
      null,
      [event]);
  }

};

ax.mojom.mojom.TtsUtteranceClient.getRemote = function() {
  let remote = new ax.mojom.mojom.TtsUtteranceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.TtsUtteranceClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnEvent
ax.mojom.mojom.TtsUtteranceClient_OnEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.TtsUtteranceClient.OnEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.TtsEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ax.mojom.mojom.TtsUtteranceClientPtr = ax.mojom.mojom.TtsUtteranceClientRemote;
ax.mojom.mojom.TtsUtteranceClientRequest = ax.mojom.mojom.TtsUtteranceClientPendingReceiver;


// Interface: Tts
ax.mojom.mojom.Tts = {};

ax.mojom.mojom.TtsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.mojom.TtsRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.Tts';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.mojom.TtsPendingReceiver,
      handle);
    this.$ = new ax.mojom.mojom.TtsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.mojom.TtsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  speak(utterance, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.mojom.Tts_Speak_ParamsSpec,
      ax.mojom.mojom.Tts_Speak_ResponseParamsSpec,
      [utterance, options]);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.mojom.Tts_Stop_ParamsSpec,
      null,
      []);
  }

  pause() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.mojom.Tts_Pause_ParamsSpec,
      null,
      []);
  }

  resume() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ax.mojom.mojom.Tts_Resume_ParamsSpec,
      null,
      []);
  }

  isSpeaking() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ax.mojom.mojom.Tts_IsSpeaking_ParamsSpec,
      ax.mojom.mojom.Tts_IsSpeaking_ResponseParamsSpec,
      []);
  }

  getVoices() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ax.mojom.mojom.Tts_GetVoices_ParamsSpec,
      ax.mojom.mojom.Tts_GetVoices_ResponseParamsSpec,
      []);
  }

};

ax.mojom.mojom.Tts.getRemote = function() {
  let remote = new ax.mojom.mojom.TtsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.Tts',
    'context');
  return remote.$;
};

// ParamsSpec for Speak
ax.mojom.mojom.Tts_Speak_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.Speak_Params',
      packedSize: 24,
      fields: [
        { name: 'utterance', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.TtsOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ax.mojom.mojom.Tts_Speak_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.Speak_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.TtsSpeakResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Stop
ax.mojom.mojom.Tts_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Pause
ax.mojom.mojom.Tts_Pause_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.Pause_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Resume
ax.mojom.mojom.Tts_Resume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.Resume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for IsSpeaking
ax.mojom.mojom.Tts_IsSpeaking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.IsSpeaking_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ax.mojom.mojom.Tts_IsSpeaking_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.IsSpeaking_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'speaking', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetVoices
ax.mojom.mojom.Tts_GetVoices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.GetVoices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ax.mojom.mojom.Tts_GetVoices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Tts.GetVoices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'voices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.TtsVoiceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ax.mojom.mojom.TtsPtr = ax.mojom.mojom.TtsRemote;
ax.mojom.mojom.TtsRequest = ax.mojom.mojom.TtsPendingReceiver;

