// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/tts.mojom
// Module: arc.mojom

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.TtsEventTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.TtsUtteranceSpec = { $: {} };
arc.mojom.TtsVoiceSpec = { $: {} };
arc.mojom.TtsHost = {};
arc.mojom.TtsHost.$interfaceName = 'arc.mojom.TtsHost';
arc.mojom.TtsHost_OnVoicesChanged_ParamsSpec = { $: {} };
arc.mojom.TtsHost_OnTtsEvent_ParamsSpec = { $: {} };
arc.mojom.TtsInstance = {};
arc.mojom.TtsInstance.$interfaceName = 'arc.mojom.TtsInstance';
arc.mojom.TtsInstance_Init_ParamsSpec = { $: {} };
arc.mojom.TtsInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.TtsInstance_Speak_ParamsSpec = { $: {} };
arc.mojom.TtsInstance_Stop_ParamsSpec = { $: {} };
arc.mojom.TtsInstance_RefreshVoices_ParamsSpec = { $: {} };

// Enum: TtsEventType
arc.mojom.TtsEventType = {
  START: 0,
  END: 1,
  INTERRUPTED: 2,
  ERROR: 3,
  WORD: 4,
};

// Struct: TtsUtterance
mojo.internal.Struct(
    arc.mojom.TtsUtteranceSpec, 'arc.mojom.TtsUtterance', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('rate', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('pitch', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('utteranceId', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('voice_id', 28, 0, mojo.internal.Uint32, 0, false, 2, undefined),
    ],
    [[0, 40], [2, 40]]);

// Struct: TtsVoice
mojo.internal.Struct(
    arc.mojom.TtsVoiceSpec, 'arc.mojom.TtsVoice', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('locale', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_network_connection_required', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: TtsHost
mojo.internal.Struct(
    arc.mojom.TtsHost_OnVoicesChanged_ParamsSpec, 'arc.mojom.TtsHost_OnVoicesChanged_Params', [
      mojo.internal.StructField('voices', 0, 0, mojo.internal.Array(arc.mojom.TtsVoiceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TtsHost_OnTtsEvent_ParamsSpec, 'arc.mojom.TtsHost_OnTtsEvent_Params', [
      mojo.internal.StructField('event_type', 0, 0, arc.mojom.TtsEventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_msg', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('utteranceId', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('char_index', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('length', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

arc.mojom.TtsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.TtsHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TtsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.TtsHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.TtsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onVoicesChanged(voices) {
    return this.$.onVoicesChanged(voices);
  }
  onTtsEvent(utteranceId, event_type, char_index, length, error_msg) {
    return this.$.onTtsEvent(utteranceId, event_type, char_index, length, error_msg);
  }
};

arc.mojom.TtsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TtsHost', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  onVoicesChanged(voices) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.TtsHost_OnVoicesChanged_ParamsSpec,
      null,
      [voices],
      false);
  }

  onTtsEvent(utteranceId, event_type, char_index, length, error_msg) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.TtsHost_OnTtsEvent_ParamsSpec,
      null,
      [utteranceId, event_type, char_index, length, error_msg],
      false);
  }

};

arc.mojom.TtsHost.getRemote = function() {
  let remote = new arc.mojom.TtsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TtsHost',
    'context');
  return remote.$;
};

arc.mojom.TtsHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TtsHost', [
      { explicit: 1 },
      { explicit: 2 },
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
             decoder.decodeStructInline(arc.mojom.TtsHost_OnVoicesChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.TtsHost_OnTtsEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TtsHost_OnVoicesChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onVoicesChanged(params.voices);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TtsHost_OnTtsEvent_ParamsSpec.$.structSpec);
          const result = this.impl.onTtsEvent(params.utteranceId, params.event_type, params.char_index, params.length, params.error_msg);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.TtsHostReceiver = arc.mojom.TtsHostReceiver;

arc.mojom.TtsHostPtr = arc.mojom.TtsHostRemote;
arc.mojom.TtsHostRequest = arc.mojom.TtsHostPendingReceiver;


// Interface: TtsInstance
mojo.internal.Struct(
    arc.mojom.TtsInstance_Init_ParamsSpec, 'arc.mojom.TtsInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.TtsHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TtsInstance_Init_ResponseParamsSpec, 'arc.mojom.TtsInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.TtsInstance_Speak_ParamsSpec, 'arc.mojom.TtsInstance_Speak_Params', [
      mojo.internal.StructField('utterance', 0, 0, arc.mojom.TtsUtteranceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TtsInstance_Stop_ParamsSpec, 'arc.mojom.TtsInstance_Stop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.TtsInstance_RefreshVoices_ParamsSpec, 'arc.mojom.TtsInstance_RefreshVoices_Params', [
    ],
    [[0, 8]]);

arc.mojom.TtsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.TtsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TtsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.TtsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.TtsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(host_remote) {
    return this.$.init(host_remote);
  }
  speak(utterance) {
    return this.$.speak(utterance);
  }
  stop() {
    return this.$.stop();
  }
  refreshVoices() {
    return this.$.refreshVoices();
  }
};

arc.mojom.TtsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TtsInstance', [
      { explicit: 3 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 4 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.TtsInstance_Init_ParamsSpec,
      arc.mojom.TtsInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  speak(utterance) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.TtsInstance_Speak_ParamsSpec,
      null,
      [utterance],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.TtsInstance_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  refreshVoices() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.TtsInstance_RefreshVoices_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.TtsInstance.getRemote = function() {
  let remote = new arc.mojom.TtsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TtsInstance',
    'context');
  return remote.$;
};

arc.mojom.TtsInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TtsInstance', [
      { explicit: 3 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 4 },
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
             decoder.decodeStructInline(arc.mojom.TtsInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.TtsInstance_Speak_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.TtsInstance_Stop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.TtsInstance_RefreshVoices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TtsInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.TtsInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TtsInstance_Speak_ParamsSpec.$.structSpec);
          const result = this.impl.speak(params.utterance);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TtsInstance_Stop_ParamsSpec.$.structSpec);
          const result = this.impl.stop();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TtsInstance_RefreshVoices_ParamsSpec.$.structSpec);
          const result = this.impl.refreshVoices();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.TtsInstanceReceiver = arc.mojom.TtsInstanceReceiver;

arc.mojom.TtsInstancePtr = arc.mojom.TtsInstanceRemote;
arc.mojom.TtsInstanceRequest = arc.mojom.TtsInstancePendingReceiver;

