// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/speech_recognition.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};

ax.mojom.SpeechRecognitionTypeSpec = { $: mojo.internal.Enum() };
ax.mojom.ObserverOrErrorSpec = { $: {} };
ax.mojom.SpeechRecognitionResultEventSpec = { $: {} };
ax.mojom.SpeechRecognitionErrorEventSpec = { $: {} };
ax.mojom.StartOptionsSpec = { $: {} };
ax.mojom.StopOptionsSpec = { $: {} };
ax.mojom.SpeechRecognitionStartInfoSpec = { $: {} };
ax.mojom.SpeechRecognitionEventObserver = {};
ax.mojom.SpeechRecognitionEventObserver.$interfaceName = 'ax.mojom.SpeechRecognitionEventObserver';
ax.mojom.SpeechRecognitionEventObserver_OnStop_ParamsSpec = { $: {} };
ax.mojom.SpeechRecognitionEventObserver_OnResult_ParamsSpec = { $: {} };
ax.mojom.SpeechRecognitionEventObserver_OnError_ParamsSpec = { $: {} };
ax.mojom.SpeechRecognition = {};
ax.mojom.SpeechRecognition.$interfaceName = 'ax.mojom.SpeechRecognition';
ax.mojom.SpeechRecognition_Start_ParamsSpec = { $: {} };
ax.mojom.SpeechRecognition_Start_ResponseParamsSpec = { $: {} };
ax.mojom.SpeechRecognition_Stop_ParamsSpec = { $: {} };
ax.mojom.SpeechRecognition_Stop_ResponseParamsSpec = { $: {} };

// Enum: SpeechRecognitionType
ax.mojom.SpeechRecognitionType = {
  kOnDevice: 0,
  kNetwork: 1,
};

// Union: ObserverOrError
mojo.internal.Union(
    ax.mojom.ObserverOrErrorSpec, 'ax.mojom.ObserverOrError', {
      'observer': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceRequest(ax.mojom.SpeechRecognitionEventObserverSpec),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: SpeechRecognitionResultEvent
mojo.internal.Struct(
    ax.mojom.SpeechRecognitionResultEventSpec, 'ax.mojom.SpeechRecognitionResultEvent', [
      mojo.internal.StructField('transcript', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_final', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SpeechRecognitionErrorEvent
mojo.internal.Struct(
    ax.mojom.SpeechRecognitionErrorEventSpec, 'ax.mojom.SpeechRecognitionErrorEvent', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: StartOptions
mojo.internal.Struct(
    ax.mojom.StartOptionsSpec, 'ax.mojom.StartOptions', [
      mojo.internal.StructField('type', 0, 0, ax.mojom.AssistiveTechnologyTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('locale', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('interim_results_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'interim_results_$value', originalFieldName: 'interim_results' }),
      mojo.internal.StructField('interim_results_$value', 16, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'interim_results_$flag', originalFieldName: 'interim_results' }),
    ],
    [[0, 32]]);

// Struct: StopOptions
mojo.internal.Struct(
    ax.mojom.StopOptionsSpec, 'ax.mojom.StopOptions', [
      mojo.internal.StructField('type', 0, 0, ax.mojom.AssistiveTechnologyTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SpeechRecognitionStartInfo
mojo.internal.Struct(
    ax.mojom.SpeechRecognitionStartInfoSpec, 'ax.mojom.SpeechRecognitionStartInfo', [
      mojo.internal.StructField('type', 0, 0, ax.mojom.SpeechRecognitionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer_or_error', 8, 0, ax.mojom.ObserverOrErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SpeechRecognitionEventObserver
mojo.internal.Struct(
    ax.mojom.SpeechRecognitionEventObserver_OnStop_ParamsSpec, 'ax.mojom.SpeechRecognitionEventObserver_OnStop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ax.mojom.SpeechRecognitionEventObserver_OnResult_ParamsSpec, 'ax.mojom.SpeechRecognitionEventObserver_OnResult_Params', [
      mojo.internal.StructField('event', 0, 0, ax.mojom.SpeechRecognitionResultEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.SpeechRecognitionEventObserver_OnError_ParamsSpec, 'ax.mojom.SpeechRecognitionEventObserver_OnError_Params', [
      mojo.internal.StructField('event', 0, 0, ax.mojom.SpeechRecognitionErrorEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ax.mojom.SpeechRecognitionEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.SpeechRecognitionEventObserverRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.SpeechRecognitionEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.SpeechRecognitionEventObserverPendingReceiver,
      handle);
    this.$ = new ax.mojom.SpeechRecognitionEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.SpeechRecognitionEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStop() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.SpeechRecognitionEventObserver_OnStop_ParamsSpec,
      null,
      [],
      false);
  }

  onResult(event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.SpeechRecognitionEventObserver_OnResult_ParamsSpec,
      null,
      [event],
      false);
  }

  onError(event) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.SpeechRecognitionEventObserver_OnError_ParamsSpec,
      null,
      [event],
      false);
  }

};

ax.mojom.SpeechRecognitionEventObserver.getRemote = function() {
  let remote = new ax.mojom.SpeechRecognitionEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.SpeechRecognitionEventObserver',
    'context');
  return remote.$;
};

ax.mojom.SpeechRecognitionEventObserverReceiver = class {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnStop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.SpeechRecognitionEventObserver_OnStop_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStop (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.SpeechRecognitionEventObserver_OnResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResult (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.SpeechRecognitionEventObserver_OnError_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (2)');
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
          const params = decoder.decodeStruct(ax.mojom.SpeechRecognitionEventObserver_OnStop_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onStop');
          const result = this.impl.onStop();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.SpeechRecognitionEventObserver_OnResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onResult');
          const result = this.impl.onResult(params.event);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.SpeechRecognitionEventObserver_OnError_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ax.mojom.SpeechRecognitionEventObserverReceiver = ax.mojom.SpeechRecognitionEventObserverReceiver;

ax.mojom.SpeechRecognitionEventObserverPtr = ax.mojom.SpeechRecognitionEventObserverRemote;
ax.mojom.SpeechRecognitionEventObserverRequest = ax.mojom.SpeechRecognitionEventObserverPendingReceiver;


// Interface: SpeechRecognition
mojo.internal.Struct(
    ax.mojom.SpeechRecognition_Start_ParamsSpec, 'ax.mojom.SpeechRecognition_Start_Params', [
      mojo.internal.StructField('options', 0, 0, ax.mojom.StartOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.SpeechRecognition_Start_ResponseParamsSpec, 'ax.mojom.SpeechRecognition_Start_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, ax.mojom.SpeechRecognitionStartInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.SpeechRecognition_Stop_ParamsSpec, 'ax.mojom.SpeechRecognition_Stop_Params', [
      mojo.internal.StructField('options', 0, 0, ax.mojom.StopOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.SpeechRecognition_Stop_ResponseParamsSpec, 'ax.mojom.SpeechRecognition_Stop_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

ax.mojom.SpeechRecognitionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.SpeechRecognitionRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.SpeechRecognition';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.SpeechRecognitionPendingReceiver,
      handle);
    this.$ = new ax.mojom.SpeechRecognitionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.SpeechRecognitionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.SpeechRecognition_Start_ParamsSpec,
      ax.mojom.SpeechRecognition_Start_ResponseParamsSpec,
      [options],
      false);
  }

  stop(options) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.SpeechRecognition_Stop_ParamsSpec,
      ax.mojom.SpeechRecognition_Stop_ResponseParamsSpec,
      [options],
      false);
  }

};

ax.mojom.SpeechRecognition.getRemote = function() {
  let remote = new ax.mojom.SpeechRecognitionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.SpeechRecognition',
    'context');
  return remote.$;
};

ax.mojom.SpeechRecognitionReceiver = class {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Start
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.SpeechRecognition_Start_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.SpeechRecognition_Stop_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (1)');
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
          const params = decoder.decodeStruct(ax.mojom.SpeechRecognition_Start_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ax.mojom.SpeechRecognition_Start_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.SpeechRecognition_Stop_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop(params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ax.mojom.SpeechRecognition_Stop_ResponseParamsSpec);
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

ax.mojom.SpeechRecognitionReceiver = ax.mojom.SpeechRecognitionReceiver;

ax.mojom.SpeechRecognitionPtr = ax.mojom.SpeechRecognitionRemote;
ax.mojom.SpeechRecognitionRequest = ax.mojom.SpeechRecognitionPendingReceiver;

