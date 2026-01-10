// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/speech_recognizer.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.AvailabilityStatusSpec = { $: mojo.internal.Enum() };
media.mojom.StartSpeechRecognitionRequestParamsSpec = { $: {} };
media.mojom.SpeechRecognizer = {};
media.mojom.SpeechRecognizer.$interfaceName = 'media.mojom.SpeechRecognizer';
media.mojom.SpeechRecognizer_Start_ParamsSpec = { $: {} };
media.mojom.OnDeviceSpeechRecognition = {};
media.mojom.OnDeviceSpeechRecognition.$interfaceName = 'media.mojom.OnDeviceSpeechRecognition';
media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec = { $: {} };
media.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec = { $: {} };
media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec = { $: {} };
media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSession = {};
media.mojom.SpeechRecognitionSession.$interfaceName = 'media.mojom.SpeechRecognitionSession';
media.mojom.SpeechRecognitionSession_Abort_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient = {};
media.mojom.SpeechRecognitionSessionClient.$interfaceName = 'media.mojom.SpeechRecognitionSessionClient';
media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec = { $: {} };
media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec = { $: {} };

// Enum: AvailabilityStatus
media.mojom.AvailabilityStatus = {
  kUnavailable: 0,
  kDownloadable: 1,
  kDownloading: 2,
  kAvailable: 3,
};

// Struct: StartSpeechRecognitionRequestParams
mojo.internal.Struct(
    media.mojom.StartSpeechRecognitionRequestParamsSpec, 'media.mojom.StartSpeechRecognitionRequestParams', [
      mojo.internal.StructField('session_receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionSessionSpec), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(media.mojom.SpeechRecognitionSessionClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('language', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('grammars', 24, 0, mojo.internal.Array(media.mojom.SpeechRecognitionGrammarSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('recognition_context', 32, 0, media.mojom.SpeechRecognitionRecognitionContextSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('audio_forwarder', 40, 0, mojo.internal.InterfaceRequest(media.mojom.SpeechRecognitionAudioForwarderRemote), null, true, 0, undefined),
      mojo.internal.StructField('max_hypotheses', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('channel_count', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('sample_rate', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('continuous', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('interim_results', 60, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('on_device', 60, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_cloud_fallback', 60, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: SpeechRecognizer
mojo.internal.Struct(
    media.mojom.SpeechRecognizer_Start_ParamsSpec, 'media.mojom.SpeechRecognizer_Start_Params', [
      mojo.internal.StructField('params', 0, 0, media.mojom.StartSpeechRecognitionRequestParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognizerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognizerRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognizer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognizerPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognizerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognizerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognizer_Start_ParamsSpec,
      null,
      [params],
      false);
  }

};

media.mojom.SpeechRecognizer.getRemote = function() {
  let remote = new media.mojom.SpeechRecognizerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognizer',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognizerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: Start
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognizer_Start_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognizer_Start_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start(params.params);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognizerReceiver = media.mojom.SpeechRecognizerReceiver;

media.mojom.SpeechRecognizerPtr = media.mojom.SpeechRecognizerRemote;
media.mojom.SpeechRecognizerRequest = media.mojom.SpeechRecognizerPendingReceiver;


// Interface: OnDeviceSpeechRecognition
mojo.internal.Struct(
    media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec, 'media.mojom.OnDeviceSpeechRecognition_Available_Params', [
      mojo.internal.StructField('languages', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec, 'media.mojom.OnDeviceSpeechRecognition_Available_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, media.mojom.AvailabilityStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec, 'media.mojom.OnDeviceSpeechRecognition_Install_Params', [
      mojo.internal.StructField('languages', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec, 'media.mojom.OnDeviceSpeechRecognition_Install_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.OnDeviceSpeechRecognitionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.OnDeviceSpeechRecognitionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.OnDeviceSpeechRecognition';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.OnDeviceSpeechRecognitionPendingReceiver,
      handle);
    this.$ = new media.mojom.OnDeviceSpeechRecognitionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.OnDeviceSpeechRecognitionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  available(languages) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec,
      media.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec,
      [languages],
      false);
  }

  install(languages) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec,
      media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec,
      [languages],
      false);
  }

};

media.mojom.OnDeviceSpeechRecognition.getRemote = function() {
  let remote = new media.mojom.OnDeviceSpeechRecognitionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.OnDeviceSpeechRecognition',
    'context');
  return remote.$;
};

media.mojom.OnDeviceSpeechRecognitionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: Available
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Available (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Install
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Install (1)');
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
          const params = decoder.decodeStructInline(media.mojom.OnDeviceSpeechRecognition_Available_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.available');
          const result = this.impl.available(params.languages);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.OnDeviceSpeechRecognition_Available_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.OnDeviceSpeechRecognition_Install_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.install');
          const result = this.impl.install(params.languages);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.OnDeviceSpeechRecognition_Install_ResponseParamsSpec);
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

media.mojom.OnDeviceSpeechRecognitionReceiver = media.mojom.OnDeviceSpeechRecognitionReceiver;

media.mojom.OnDeviceSpeechRecognitionPtr = media.mojom.OnDeviceSpeechRecognitionRemote;
media.mojom.OnDeviceSpeechRecognitionRequest = media.mojom.OnDeviceSpeechRecognitionPendingReceiver;


// Interface: SpeechRecognitionSession
mojo.internal.Struct(
    media.mojom.SpeechRecognitionSession_Abort_ParamsSpec, 'media.mojom.SpeechRecognitionSession_Abort_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec, 'media.mojom.SpeechRecognitionSession_StopCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec, 'media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_Params', [
      mojo.internal.StructField('recognition_context', 0, 0, media.mojom.SpeechRecognitionRecognitionContextSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.SpeechRecognitionSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionSessionRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionSessionPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  abort() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognitionSession_Abort_ParamsSpec,
      null,
      [],
      false);
  }

  stopCapture() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec,
      null,
      [],
      false);
  }

  updateRecognitionContext(recognition_context) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec,
      null,
      [recognition_context],
      false);
  }

};

media.mojom.SpeechRecognitionSession.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionSession',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: Abort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSession_Abort_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Abort (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StopCapture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopCapture (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateRecognitionContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRecognitionContext (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSession_Abort_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.abort');
          const result = this.impl.abort();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSession_StopCapture_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.stopCapture');
          const result = this.impl.stopCapture();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSession_UpdateRecognitionContext_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.updateRecognitionContext');
          const result = this.impl.updateRecognitionContext(params.recognition_context);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionSessionReceiver = media.mojom.SpeechRecognitionSessionReceiver;

media.mojom.SpeechRecognitionSessionPtr = media.mojom.SpeechRecognitionSessionRemote;
media.mojom.SpeechRecognitionSessionRequest = media.mojom.SpeechRecognitionSessionPendingReceiver;


// Interface: SpeechRecognitionSessionClient
mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_Params', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(media.mojom.WebSpeechRecognitionResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_Params', [
      mojo.internal.StructField('error', 0, 0, media.mojom.SpeechRecognitionErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_Started_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_AudioStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_SoundStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_SoundEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_AudioEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec, 'media.mojom.SpeechRecognitionSessionClient_Ended_Params', [
    ],
    [[0, 8]]);

media.mojom.SpeechRecognitionSessionClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.SpeechRecognitionSessionClientRemote = class {
  static get $interfaceName() {
    return 'media.mojom.SpeechRecognitionSessionClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.SpeechRecognitionSessionClientPendingReceiver,
      handle);
    this.$ = new media.mojom.SpeechRecognitionSessionClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.SpeechRecognitionSessionClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resultRetrieved(results) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec,
      null,
      [results],
      false);
  }

  errorOccurred(error) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec,
      null,
      [error],
      false);
  }

  started() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec,
      null,
      [],
      false);
  }

  audioStarted() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec,
      null,
      [],
      false);
  }

  soundStarted() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec,
      null,
      [],
      false);
  }

  soundEnded() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec,
      null,
      [],
      false);
  }

  audioEnded() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec,
      null,
      [],
      false);
  }

  ended() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec,
      null,
      [],
      false);
  }

};

media.mojom.SpeechRecognitionSessionClient.getRemote = function() {
  let remote = new media.mojom.SpeechRecognitionSessionClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.SpeechRecognitionSessionClient',
    'context');
  return remote.$;
};

media.mojom.SpeechRecognitionSessionClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
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
        
        // Try Method 0: ResultRetrieved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResultRetrieved (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ErrorOccurred
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ErrorOccurred (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Started
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Started (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AudioStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AudioStarted (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SoundStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SoundStarted (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SoundEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SoundEnded (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AudioEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AudioEnded (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Ended
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Ended (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_ResultRetrieved_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.resultRetrieved');
          const result = this.impl.resultRetrieved(params.results);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_ErrorOccurred_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.errorOccurred');
          const result = this.impl.errorOccurred(params.error);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_Started_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.started');
          const result = this.impl.started();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_AudioStarted_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.audioStarted');
          const result = this.impl.audioStarted();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_SoundStarted_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.soundStarted');
          const result = this.impl.soundStarted();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_SoundEnded_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.soundEnded');
          const result = this.impl.soundEnded();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_AudioEnded_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.audioEnded');
          const result = this.impl.audioEnded();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.SpeechRecognitionSessionClient_Ended_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.ended');
          const result = this.impl.ended();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.SpeechRecognitionSessionClientReceiver = media.mojom.SpeechRecognitionSessionClientReceiver;

media.mojom.SpeechRecognitionSessionClientPtr = media.mojom.SpeechRecognitionSessionClientRemote;
media.mojom.SpeechRecognitionSessionClientRequest = media.mojom.SpeechRecognitionSessionClientPendingReceiver;

