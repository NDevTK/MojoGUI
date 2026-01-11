// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/speech/speech_synthesis.mojom
// Module: blink.mojom

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
  onSetVoiceList(voice_list) {
    return this.$.onSetVoiceList(voice_list);
  }
};

blink.mojom.SpeechSynthesisVoiceListObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechSynthesisVoiceListObserver', [
      { explicit: null },
    ]);
  }

  onSetVoiceList(voice_list) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec,
      null,
      [voice_list],
      false);
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

blink.mojom.SpeechSynthesisVoiceListObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechSynthesisVoiceListObserver', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeechSynthesisVoiceListObserver_OnSetVoiceList_ParamsSpec.$.structSpec);
          const result = this.impl.onSetVoiceList(params.voice_list);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.SpeechSynthesisVoiceListObserverReceiver = blink.mojom.SpeechSynthesisVoiceListObserverReceiver;

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
  onStartedSpeaking() {
    return this.$.onStartedSpeaking();
  }
  onFinishedSpeaking(error_code) {
    return this.$.onFinishedSpeaking(error_code);
  }
  onPausedSpeaking() {
    return this.$.onPausedSpeaking();
  }
  onResumedSpeaking() {
    return this.$.onResumedSpeaking();
  }
  onEncounteredWordBoundary(char_index, char_length) {
    return this.$.onEncounteredWordBoundary(char_index, char_length);
  }
  onEncounteredSentenceBoundary(char_index, char_length) {
    return this.$.onEncounteredSentenceBoundary(char_index, char_length);
  }
  onEncounteredSpeakingError() {
    return this.$.onEncounteredSpeakingError();
  }
};

blink.mojom.SpeechSynthesisClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechSynthesisClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onStartedSpeaking() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec,
      null,
      [],
      false);
  }

  onFinishedSpeaking(error_code) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec,
      null,
      [error_code],
      false);
  }

  onPausedSpeaking() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec,
      null,
      [],
      false);
  }

  onResumedSpeaking() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec,
      null,
      [],
      false);
  }

  onEncounteredWordBoundary(char_index, char_length) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec,
      null,
      [char_index, char_length],
      false);
  }

  onEncounteredSentenceBoundary(char_index, char_length) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec,
      null,
      [char_index, char_length],
      false);
  }

  onEncounteredSpeakingError() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec,
      null,
      [],
      false);
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

blink.mojom.SpeechSynthesisClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechSynthesisClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnStartedSpeaking_ParamsSpec.$.structSpec);
          const result = this.impl.onStartedSpeaking();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnFinishedSpeaking_ParamsSpec.$.structSpec);
          const result = this.impl.onFinishedSpeaking(params.error_code);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnPausedSpeaking_ParamsSpec.$.structSpec);
          const result = this.impl.onPausedSpeaking();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnResumedSpeaking_ParamsSpec.$.structSpec);
          const result = this.impl.onResumedSpeaking();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnEncounteredWordBoundary_ParamsSpec.$.structSpec);
          const result = this.impl.onEncounteredWordBoundary(params.char_index, params.char_length);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnEncounteredSentenceBoundary_ParamsSpec.$.structSpec);
          const result = this.impl.onEncounteredSentenceBoundary(params.char_index, params.char_length);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeechSynthesisClient_OnEncounteredSpeakingError_ParamsSpec.$.structSpec);
          const result = this.impl.onEncounteredSpeakingError();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.SpeechSynthesisClientReceiver = blink.mojom.SpeechSynthesisClientReceiver;

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
  addVoiceListObserver(observer) {
    return this.$.addVoiceListObserver(observer);
  }
  speak(utterance, client) {
    return this.$.speak(utterance, client);
  }
  pause() {
    return this.$.pause();
  }
  resume() {
    return this.$.resume();
  }
  cancel() {
    return this.$.cancel();
  }
};

blink.mojom.SpeechSynthesisRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SpeechSynthesis', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addVoiceListObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  speak(utterance, client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.SpeechSynthesis_Speak_ParamsSpec,
      null,
      [utterance, client],
      false);
  }

  pause() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.SpeechSynthesis_Pause_ParamsSpec,
      null,
      [],
      false);
  }

  resume() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.SpeechSynthesis_Resume_ParamsSpec,
      null,
      [],
      false);
  }

  cancel() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.SpeechSynthesis_Cancel_ParamsSpec,
      null,
      [],
      false);
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

blink.mojom.SpeechSynthesisReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SpeechSynthesis', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeechSynthesis_Speak_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeechSynthesis_Pause_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeechSynthesis_Resume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SpeechSynthesis_Cancel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeechSynthesis_AddVoiceListObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addVoiceListObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeechSynthesis_Speak_ParamsSpec.$.structSpec);
          const result = this.impl.speak(params.utterance, params.client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeechSynthesis_Pause_ParamsSpec.$.structSpec);
          const result = this.impl.pause();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeechSynthesis_Resume_ParamsSpec.$.structSpec);
          const result = this.impl.resume();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SpeechSynthesis_Cancel_ParamsSpec.$.structSpec);
          const result = this.impl.cancel();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.SpeechSynthesisReceiver = blink.mojom.SpeechSynthesisReceiver;

blink.mojom.SpeechSynthesisPtr = blink.mojom.SpeechSynthesisRemote;
blink.mojom.SpeechSynthesisRequest = blink.mojom.SpeechSynthesisPendingReceiver;

