// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_logger.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};


// Enum: EnqueuePriority
chromeos.cfm.mojom.EnqueuePriority = {
  kHigh: 0,
  kMedium: 1,
  kLow: 2,
};
chromeos.cfm.mojom.EnqueuePrioritySpec = { $: mojo.internal.Enum() };

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
chromeos.cfm.mojom.LoggerErrorCodeSpec = { $: mojo.internal.Enum() };

// Enum: LoggerState
chromeos.cfm.mojom.LoggerState = {
  kDisabled: 0,
  kReadyForRequests: 1,
  kUninitialized: 2,
};
chromeos.cfm.mojom.LoggerStateSpec = { $: mojo.internal.Enum() };

// Struct: LoggerStatus
chromeos.cfm.mojom.LoggerStatusSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.LoggerStatus',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: chromeos.cfm.mojom.LoggerErrorCodeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: LoggerStateObserver
chromeos.cfm.mojom.LoggerStateObserver = {};

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
      [state]);
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

// ParamsSpec for OnNotifyState
chromeos.cfm.mojom.LoggerStateObserver_OnNotifyState_ParamsSpec = {
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
chromeos.cfm.mojom.LoggerStateObserverPtr = chromeos.cfm.mojom.LoggerStateObserverRemote;
chromeos.cfm.mojom.LoggerStateObserverRequest = chromeos.cfm.mojom.LoggerStateObserverPendingReceiver;


// Interface: MeetDevicesLogger
chromeos.cfm.mojom.MeetDevicesLogger = {};

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
      [record, priority]);
  }

  addStateObserver(pending_observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cfm.mojom.MeetDevicesLogger_AddStateObserver_ParamsSpec,
      null,
      [pending_observer]);
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

// ParamsSpec for Enqueue
chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ParamsSpec = {
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

chromeos.cfm.mojom.MeetDevicesLogger_Enqueue_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: chromeos.cfm.mojom.LoggerStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddStateObserver
chromeos.cfm.mojom.MeetDevicesLogger_AddStateObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.MeetDevicesLogger.AddStateObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'pending_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.cfm.mojom.MeetDevicesLoggerPtr = chromeos.cfm.mojom.MeetDevicesLoggerRemote;
chromeos.cfm.mojom.MeetDevicesLoggerRequest = chromeos.cfm.mojom.MeetDevicesLoggerPendingReceiver;

