// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_logger.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};

chromeos.cfm.mojom.EnqueuePrioritySpec = { $: mojo.internal.Enum() };
chromeos.cfm.mojom.LoggerErrorCodeSpec = { $: mojo.internal.Enum() };
chromeos.cfm.mojom.LoggerStateSpec = { $: mojo.internal.Enum() };
chromeos.cfm.mojom.LoggerStatusSpec = { $: {} };
chromeos.cfm.mojom.LoggerStateObserver = {};
chromeos.cfm.mojom.LoggerStateObserver.$interfaceName = 'chromeos.cfm.mojom.LoggerStateObserver';
chromeos.cfm.mojom.LoggerStateObserver_OnNotifyState_ParamsSpec = { $: {} };
chromeos.cfm.mojom.MeetDevicesLogger = {};
chromeos.cfm.mojom.MeetDevicesLogger.$interfaceName = 'chromeos.cfm.mojom.MeetDevicesLogger';
chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ParamsSpec = { $: {} };
chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ResponseParamsSpec = { $: {} };
chromeos.cfm.mojom.MeetDevicesLogger_AddStateObserver_ParamsSpec = { $: {} };

// Enum: EnqueuePriority
chromeos.cfm.mojom.EnqueuePriority = {
  kHigh: 0,
  kMedium: 1,
  kLow: 2,
};

// Enum: LoggerErrorCode
chromeos.cfm.mojom.LoggerErrorCode = {
  kOk: 0,
  kCancelled: 1,
  kUnknown: 2,
  kInvalidArgument: 3,
  kDeadlineExceeded: 4,
  kNotFound: 5,
  kAlreadyExists: 6,
  kPermissionDenied: 7,
  kUnauthenticated: 16,
  kResourceExhausted: 8,
  kFailedPrecondition: 9,
  kAborted: 10,
  kOutOfRange: 11,
  kUnimplemented: 12,
  kInternal: 13,
  kUnavailable: 14,
  kDataloss: 15,
};

// Enum: LoggerState
chromeos.cfm.mojom.LoggerState = {
  kDisabled: 0,
  kReadyForRequests: 1,
  kUninitialized: 2,
};

// Struct: LoggerStatus
mojo.internal.Struct(
    chromeos.cfm.mojom.LoggerStatusSpec, 'chromeos.cfm.mojom.LoggerStatus', [
      mojo.internal.StructField('code', 0, 0, chromeos.cfm.mojom.LoggerErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: LoggerStateObserver
mojo.internal.Struct(
    chromeos.cfm.mojom.LoggerStateObserver_OnNotifyState_ParamsSpec, 'chromeos.cfm.mojom.LoggerStateObserver_OnNotifyState_Params', [
      mojo.internal.StructField('state', 0, 0, chromeos.cfm.mojom.LoggerStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.cfm.mojom.LoggerStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.mojom.LoggerStateObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.LoggerStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.mojom.LoggerStateObserverPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.mojom.LoggerStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.mojom.LoggerStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNotifyState(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.mojom.LoggerStateObserver_OnNotifyState_ParamsSpec,
      null,
      [state],
      false);
  }

};

chromeos.cfm.mojom.LoggerStateObserver.getRemote = function() {
  let remote = new chromeos.cfm.mojom.LoggerStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.LoggerStateObserver',
    'context');
  return remote.$;
};

chromeos.cfm.mojom.LoggerStateObserverReceiver = class {
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
        
        // Try Method 0: OnNotifyState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cfm.mojom.LoggerStateObserver_OnNotifyState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNotifyState (0)');
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
          const params = decoder.decodeStruct(chromeos.cfm.mojom.LoggerStateObserver_OnNotifyState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNotifyState');
          const result = this.impl.onNotifyState(params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.cfm.mojom.LoggerStateObserverReceiver = chromeos.cfm.mojom.LoggerStateObserverReceiver;

chromeos.cfm.mojom.LoggerStateObserverPtr = chromeos.cfm.mojom.LoggerStateObserverRemote;
chromeos.cfm.mojom.LoggerStateObserverRequest = chromeos.cfm.mojom.LoggerStateObserverPendingReceiver;


// Interface: MeetDevicesLogger
mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ParamsSpec, 'chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_Params', [
      mojo.internal.StructField('record', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('priority', 8, 0, chromeos.cfm.mojom.EnqueuePrioritySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ResponseParamsSpec, 'chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, chromeos.cfm.mojom.LoggerStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.MeetDevicesLogger_AddStateObserver_ParamsSpec, 'chromeos.cfm.mojom.MeetDevicesLogger_AddStateObserver_Params', [
      mojo.internal.StructField('pending_observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.cfm.mojom.LoggerStateObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.cfm.mojom.MeetDevicesLoggerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.mojom.MeetDevicesLoggerRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.MeetDevicesLogger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.mojom.MeetDevicesLoggerPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.mojom.MeetDevicesLoggerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.mojom.MeetDevicesLoggerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enqueue(record, priority) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ParamsSpec,
      chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ResponseParamsSpec,
      [record, priority],
      false);
  }

  addStateObserver(pending_observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cfm.mojom.MeetDevicesLogger_AddStateObserver_ParamsSpec,
      null,
      [pending_observer],
      false);
  }

};

chromeos.cfm.mojom.MeetDevicesLogger.getRemote = function() {
  let remote = new chromeos.cfm.mojom.MeetDevicesLoggerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.MeetDevicesLogger',
    'context');
  return remote.$;
};

chromeos.cfm.mojom.MeetDevicesLoggerReceiver = class {
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
        
        // Try Method 0: Enqueue
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Enqueue (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddStateObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cfm.mojom.MeetDevicesLogger_AddStateObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddStateObserver (1)');
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
          const params = decoder.decodeStruct(chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enqueue');
          const result = this.impl.enqueue(params.record, params.priority);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cfm.mojom.MeetDevicesLogger_AddStateObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addStateObserver');
          const result = this.impl.addStateObserver(params.pending_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromeos.cfm.mojom.MeetDevicesLoggerReceiver = chromeos.cfm.mojom.MeetDevicesLoggerReceiver;

chromeos.cfm.mojom.MeetDevicesLoggerPtr = chromeos.cfm.mojom.MeetDevicesLoggerRemote;
chromeos.cfm.mojom.MeetDevicesLoggerRequest = chromeos.cfm.mojom.MeetDevicesLoggerPendingReceiver;

