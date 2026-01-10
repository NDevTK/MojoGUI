// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/tts.mojom
// Module: arc.mojom

'use strict';

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
};

arc.mojom.TtsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVoicesChanged(voices) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.TtsHost_OnVoicesChanged_ParamsSpec,
      null,
      [voices],
      false);
  }

  onTtsEvent(utteranceId, event_type, char_index, length, error_msg) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
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
    this.ordinalMap.set(1, 0); // Default ordinal 1 -> Index 0
    this.ordinalMap.set(2, 1); // Default ordinal 2 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnVoicesChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.TtsHost_OnVoicesChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVoicesChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnTtsEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.TtsHost_OnTtsEvent_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTtsEvent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TtsHost_OnVoicesChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onVoicesChanged');
          const result = this.impl.onVoicesChanged(params.voices);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TtsHost_OnTtsEvent_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onTtsEvent');
          const result = this.impl.onTtsEvent(params.utteranceId, params.event_type, params.char_index, params.length, params.error_msg);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.TtsHostReceiver = arc.mojom.TtsHostReceiver;

arc.mojom.TtsHostPtr = arc.mojom.TtsHostRemote;
arc.mojom.TtsHostRequest = arc.mojom.TtsHostPendingReceiver;


// Interface: TtsInstance
mojo.internal.Struct(
    arc.mojom.TtsInstance_Init_ParamsSpec, 'arc.mojom.TtsInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.TtsHostSpec), null, false, 0, undefined),
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
};

arc.mojom.TtsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.TtsInstance_Init_ParamsSpec,
      arc.mojom.TtsInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  speak(utterance) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.TtsInstance_Speak_ParamsSpec,
      null,
      [utterance],
      false);
  }

  stop() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.TtsInstance_Stop_ParamsSpec,
      null,
      [],
      false);
  }

  refreshVoices() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
    this.ordinalMap.set(3, 0); // Default ordinal 3 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(4, 3); // Default ordinal 4 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.TtsInstance_Init_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Speak
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.TtsInstance_Speak_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Speak (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.TtsInstance_Stop_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RefreshVoices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.TtsInstance_RefreshVoices_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshVoices (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TtsInstance_Init_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.init');
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
          const params = decoder.decodeStructInline(arc.mojom.TtsInstance_Speak_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.speak');
          const result = this.impl.speak(params.utterance);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TtsInstance_Stop_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.TtsInstance_RefreshVoices_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.refreshVoices');
          const result = this.impl.refreshVoices();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.TtsInstanceReceiver = arc.mojom.TtsInstanceReceiver;

arc.mojom.TtsInstancePtr = arc.mojom.TtsInstanceRemote;
arc.mojom.TtsInstanceRequest = arc.mojom.TtsInstancePendingReceiver;

