// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_logger.mojom
// Module: chromeos.cfm.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  onNotifyState(state) {
    return this.$.onNotifyState(state);
  }
};

chromeos.cfm.mojom.LoggerStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LoggerStateObserver', [
      { explicit: 0 },
    ]);
  }

  onNotifyState(state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('LoggerStateObserver', [
      { explicit: 0 },
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
             decoder.decodeStructInline(chromeos.cfm.mojom.LoggerStateObserver_OnNotifyState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.LoggerStateObserver_OnNotifyState_ParamsSpec.$.structSpec);
          const result = this.impl.onNotifyState(params.state);
          break;
        }
      }
      } catch (err) {}
    });
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
      mojo.internal.StructField('pending_observer', 0, 0, mojo.internal.InterfaceProxy(chromeos.cfm.mojom.LoggerStateObserverRemote), null, false, 0, undefined),
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
  enqueue(record, priority) {
    return this.$.enqueue(record, priority);
  }
  addStateObserver(pending_observer) {
    return this.$.addStateObserver(pending_observer);
  }
};

chromeos.cfm.mojom.MeetDevicesLoggerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MeetDevicesLogger', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  enqueue(record, priority) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ParamsSpec,
      chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ResponseParamsSpec,
      [record, priority],
      false);
  }

  addStateObserver(pending_observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('MeetDevicesLogger', [
      { explicit: 0 },
      { explicit: 1 },
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
             decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesLogger_AddStateObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(chromeos.cfm.mojom.MeetDevicesLogger_AddStateObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addStateObserver(params.pending_observer);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

chromeos.cfm.mojom.MeetDevicesLoggerReceiver = chromeos.cfm.mojom.MeetDevicesLoggerReceiver;

chromeos.cfm.mojom.MeetDevicesLoggerPtr = chromeos.cfm.mojom.MeetDevicesLoggerRemote;
chromeos.cfm.mojom.MeetDevicesLoggerRequest = chromeos.cfm.mojom.MeetDevicesLoggerPendingReceiver;

