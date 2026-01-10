// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/tts.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};

ax.mojom.TtsEventTypeSpec = { $: mojo.internal.Enum() };
ax.mojom.TtsErrorSpec = { $: mojo.internal.Enum() };
ax.mojom.TtsVoiceSpec = { $: {} };
ax.mojom.TtsOptionsSpec = { $: {} };
ax.mojom.TtsEventSpec = { $: {} };
ax.mojom.TtsSpeakResultSpec = { $: {} };
ax.mojom.TtsUtteranceClient = {};
ax.mojom.TtsUtteranceClient.$interfaceName = 'ax.mojom.TtsUtteranceClient';
ax.mojom.TtsUtteranceClient_OnEvent_ParamsSpec = { $: {} };
ax.mojom.Tts = {};
ax.mojom.Tts.$interfaceName = 'ax.mojom.Tts';
ax.mojom.Tts_Speak_ParamsSpec = { $: {} };
ax.mojom.Tts_Speak_ResponseParamsSpec = { $: {} };
ax.mojom.Tts_Stop_ParamsSpec = { $: {} };
ax.mojom.Tts_Pause_ParamsSpec = { $: {} };
ax.mojom.Tts_Resume_ParamsSpec = { $: {} };
ax.mojom.Tts_IsSpeaking_ParamsSpec = { $: {} };
ax.mojom.Tts_IsSpeaking_ResponseParamsSpec = { $: {} };
ax.mojom.Tts_GetVoices_ParamsSpec = { $: {} };
ax.mojom.Tts_GetVoices_ResponseParamsSpec = { $: {} };

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

// Struct: TtsVoice
mojo.internal.Struct(
    ax.mojom.TtsVoiceSpec, 'ax.mojom.TtsVoice', [
      mojo.internal.StructField('voice_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('lang', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('engine_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('event_types', 24, 0, mojo.internal.Array(ax.mojom.TtsEventTypeSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('remote', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TtsOptions
mojo.internal.Struct(
    ax.mojom.TtsOptionsSpec, 'ax.mojom.TtsOptions', [
      mojo.internal.StructField('pitch', 0, 0, mojo.internal.Double, 1.0, false, 0, undefined),
      mojo.internal.StructField('rate', 8, 0, mojo.internal.Double, 1.0, false, 0, undefined),
      mojo.internal.StructField('volume', 16, 0, mojo.internal.Double, 1.0, false, 0, undefined),
      mojo.internal.StructField('voice_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('engine_id', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('lang', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('enqueue', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('on_event', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: TtsEvent
mojo.internal.Struct(
    ax.mojom.TtsEventSpec, 'ax.mojom.TtsEvent', [
      mojo.internal.StructField('type', 0, 0, ax.mojom.TtsEventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('char_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('length', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_final', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TtsSpeakResult
mojo.internal.Struct(
    ax.mojom.TtsSpeakResultSpec, 'ax.mojom.TtsSpeakResult', [
      mojo.internal.StructField('error', 0, 0, ax.mojom.TtsErrorSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('utterance_client', 8, 0, mojo.internal.InterfaceRequest(ax.mojom.TtsUtteranceClientSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: TtsUtteranceClient
mojo.internal.Struct(
    ax.mojom.TtsUtteranceClient_OnEvent_ParamsSpec, 'ax.mojom.TtsUtteranceClient_OnEvent_Params', [
      mojo.internal.StructField('event', 0, 0, ax.mojom.TtsEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      ax.mojom.TtsUtteranceClient_OnEvent_ParamsSpec,
      null,
      [event],
      false);
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

ax.mojom.TtsUtteranceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = ax.mojom.TtsUtteranceClient_OnEvent_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onEvent');
          const result = this.impl.onEvent(params.event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ax.mojom.TtsUtteranceClientReceiver = ax.mojom.TtsUtteranceClientReceiver;

ax.mojom.TtsUtteranceClientPtr = ax.mojom.TtsUtteranceClientRemote;
ax.mojom.TtsUtteranceClientRequest = ax.mojom.TtsUtteranceClientPendingReceiver;


// Interface: Tts
mojo.internal.Struct(
    ax.mojom.Tts_Speak_ParamsSpec, 'ax.mojom.Tts_Speak_Params', [
      mojo.internal.StructField('utterance', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, ax.mojom.TtsOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ax.mojom.Tts_Speak_ResponseParamsSpec, 'ax.mojom.Tts_Speak_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ax.mojom.TtsSpeakResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.Tts_Stop_ParamsSpec, 'ax.mojom.Tts_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ax.mojom.Tts_Pause_ParamsSpec, 'ax.mojom.Tts_Pause_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ax.mojom.Tts_Resume_ParamsSpec, 'ax.mojom.Tts_Resume_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ax.mojom.Tts_IsSpeaking_ParamsSpec, 'ax.mojom.Tts_IsSpeaking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ax.mojom.Tts_IsSpeaking_ResponseParamsSpec, 'ax.mojom.Tts_IsSpeaking_ResponseParams', [
      mojo.internal.StructField('speaking', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.Tts_GetVoices_ParamsSpec, 'ax.mojom.Tts_GetVoices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ax.mojom.Tts_GetVoices_ResponseParamsSpec, 'ax.mojom.Tts_GetVoices_ResponseParams', [
      mojo.internal.StructField('voices', 0, 0, mojo.internal.Array(ax.mojom.TtsVoiceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      ax.mojom.Tts_Speak_ParamsSpec,
      ax.mojom.Tts_Speak_ResponseParamsSpec,
      [utterance, options],
      false);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.Tts_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  pause() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.Tts_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ax.mojom.Tts_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  isSpeaking() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ax.mojom.Tts_IsSpeaking_ParamsSpec,
      ax.mojom.Tts_IsSpeaking_ResponseParamsSpec,
      [],
      false);
  }

  getVoices() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ax.mojom.Tts_GetVoices_ParamsSpec,
      ax.mojom.Tts_GetVoices_ResponseParamsSpec,
      [],
      false);
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

ax.mojom.TtsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = ax.mojom.Tts_Speak_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.speak');
          const result = this.impl.speak(params.utterance, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ax.mojom.Tts_Speak_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ax.mojom.Tts_Stop_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          break;
        }
        case 2: {
          const params = ax.mojom.Tts_Pause_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.pause');
          const result = this.impl.pause();
          break;
        }
        case 3: {
          const params = ax.mojom.Tts_Resume_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.resume');
          const result = this.impl.resume();
          break;
        }
        case 4: {
          const params = ax.mojom.Tts_IsSpeaking_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.isSpeaking');
          const result = this.impl.isSpeaking();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ax.mojom.Tts_IsSpeaking_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = ax.mojom.Tts_GetVoices_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.getVoices');
          const result = this.impl.getVoices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ax.mojom.Tts_GetVoices_ResponseParamsSpec);
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

ax.mojom.TtsReceiver = ax.mojom.TtsReceiver;

ax.mojom.TtsPtr = ax.mojom.TtsRemote;
ax.mojom.TtsRequest = ax.mojom.TtsPendingReceiver;

