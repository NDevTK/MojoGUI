// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_logger.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.cfm.mojom = chromeos.cfm.cfm.mojom || {};


// Enum: EnqueuePriority
chromeos.cfm.cfm.mojom.mojom.EnqueuePriority = {
  kHigh: 0,
  kMedium: 1,
  kLow: 2,
};
chromeos.cfm.cfm.mojom.mojom.EnqueuePrioritySpec = { $: mojo.internal.Enum() };

// Enum: LoggerErrorCode
chromeos.cfm.cfm.mojom.mojom.LoggerErrorCode = {
  kOk: 0,
  kCancelled: 1,
  kUnknown: 2,
  kInvalidArgument: 3,
  kDeadlineExceeded: 4,
  kNotFound: 5,
  kAlreadyExists: 6,
  kPermissionDenied: 7,
  kUnauthenticated: 8,
  kResourceExhausted: 9,
  kFailedPrecondition: 10,
  kAborted: 11,
  kOutOfRange: 12,
  kUnimplemented: 13,
  kInternal: 14,
  kUnavailable: 15,
  kDataloss: 16,
};
chromeos.cfm.cfm.mojom.mojom.LoggerErrorCodeSpec = { $: mojo.internal.Enum() };

// Enum: LoggerState
chromeos.cfm.cfm.mojom.mojom.LoggerState = {
  kDisabled: 0,
  kReadyForRequests: 1,
  kUninitialized: 2,
};
chromeos.cfm.cfm.mojom.mojom.LoggerStateSpec = { $: mojo.internal.Enum() };

// Struct: LoggerStatus
chromeos.cfm.cfm.mojom.mojom.LoggerStatusSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.LoggerStatus',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 8, packedBitOffset: 0, type: chromeos.cfm.mojom.LoggerErrorCodeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: LoggerStateObserver
chromeos.cfm.cfm.mojom.mojom.LoggerStateObserver = {};

chromeos.cfm.cfm.mojom.mojom.LoggerStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.cfm.mojom.mojom.LoggerStateObserverRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.LoggerStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.cfm.mojom.mojom.LoggerStateObserverPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.cfm.mojom.mojom.LoggerStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.cfm.mojom.mojom.LoggerStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNotifyState(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.LoggerStateObserver_OnNotifyState_ParamsSpec,
      null,
      [state]);
  }

};

chromeos.cfm.cfm.mojom.mojom.LoggerStateObserver.getRemote = function() {
  let remote = new chromeos.cfm.cfm.mojom.mojom.LoggerStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.LoggerStateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnNotifyState
chromeos.cfm.cfm.mojom.mojom.LoggerStateObserver_OnNotifyState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.LoggerStateObserver.OnNotifyState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: chromeos.cfm.mojom.LoggerStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.cfm.cfm.mojom.mojom.LoggerStateObserverPtr = chromeos.cfm.cfm.mojom.mojom.LoggerStateObserverRemote;
chromeos.cfm.cfm.mojom.mojom.LoggerStateObserverRequest = chromeos.cfm.cfm.mojom.mojom.LoggerStateObserverPendingReceiver;


// Interface: MeetDevicesLogger
chromeos.cfm.cfm.mojom.mojom.MeetDevicesLogger = {};

chromeos.cfm.cfm.mojom.mojom.MeetDevicesLoggerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.cfm.mojom.mojom.MeetDevicesLoggerRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.MeetDevicesLogger';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.cfm.mojom.mojom.MeetDevicesLoggerPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.cfm.mojom.mojom.MeetDevicesLoggerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.cfm.mojom.mojom.MeetDevicesLoggerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  enqueue(record, priority) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.MeetDevicesLogger_Enqueue_ParamsSpec,
      chromeos.cfm.cfm.mojom.mojom.MeetDevicesLogger_Enqueue_ResponseParamsSpec,
      [record, priority]);
  }

  addStateObserver(pending_observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.MeetDevicesLogger_AddStateObserver_ParamsSpec,
      null,
      [pending_observer]);
  }

};

chromeos.cfm.cfm.mojom.mojom.MeetDevicesLogger.getRemote = function() {
  let remote = new chromeos.cfm.cfm.mojom.mojom.MeetDevicesLoggerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.MeetDevicesLogger',
    'context');
  return remote.$;
};

// ParamsSpec for Enqueue
chromeos.cfm.cfm.mojom.mojom.MeetDevicesLogger_Enqueue_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesLogger.Enqueue_Params',
      packedSize: 24,
      fields: [
        { name: 'record', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'priority', packedOffset: 8, packedBitOffset: 0, type: chromeos.cfm.mojom.EnqueuePrioritySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.cfm.cfm.mojom.mojom.MeetDevicesLogger_Enqueue_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesLogger.Enqueue_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: chromeos.cfm.mojom.LoggerStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddStateObserver
chromeos.cfm.cfm.mojom.mojom.MeetDevicesLogger_AddStateObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesLogger.AddStateObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'pending_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.cfm.mojom.LoggerStateObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.cfm.cfm.mojom.mojom.MeetDevicesLoggerPtr = chromeos.cfm.cfm.mojom.mojom.MeetDevicesLoggerRemote;
chromeos.cfm.cfm.mojom.mojom.MeetDevicesLoggerRequest = chromeos.cfm.cfm.mojom.mojom.MeetDevicesLoggerPendingReceiver;

