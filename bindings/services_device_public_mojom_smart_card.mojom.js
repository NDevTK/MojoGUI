// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/smart_card.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: SmartCardSuccess
device.mojom.SmartCardSuccess = {
  kOk: 0,
};

// Enum: SmartCardError
device.mojom.SmartCardError = {
  kRemovedCard: 0,
  kResetCard: 1,
  kUnpoweredCard: 2,
  kUnresponsiveCard: 3,
  kUnsupportedCard: 4,
  kReaderUnavailable: 5,
  kSharingViolation: 6,
  kNotTransacted: 7,
  kNoSmartcard: 8,
  kProtoMismatch: 9,
  kSystemCancelled: 10,
  kNotReady: 11,
  kCancelled: 12,
  kInsufficientBuffer: 13,
  kInvalidHandle: 14,
  kInvalidParameter: 15,
  kInvalidValue: 16,
  kNoMemory: 17,
  kTimeout: 18,
  kUnknownReader: 19,
  kUnsupportedFeature: 20,
  kNoReadersAvailable: 21,
  kServiceStopped: 22,
  kNoService: 23,
  kCommError: 24,
  kInternalError: 25,
  kUnknownError: 26,
  kServerTooBusy: 27,
  kUnexpected: 28,
  kShutdown: 29,
  kUnknown: 30,
  kPermissionDenied: 31,
};

// Enum: SmartCardShareMode
device.mojom.SmartCardShareMode = {
  kShared: 0,
  kExclusive: 1,
  kDirect: 2,
};

// Enum: SmartCardProtocol
device.mojom.SmartCardProtocol = {
  kUndefined: 0,
  kT0: 1,
  kT1: 2,
  kRaw: 3,
};

// Enum: SmartCardDisposition
device.mojom.SmartCardDisposition = {
  kLeave: 0,
  kReset: 1,
  kUnpower: 2,
  kEject: 3,
};

// Enum: SmartCardConnectionState
device.mojom.SmartCardConnectionState = {
  kAbsent: 0,
  kPresent: 1,
  kSwallowed: 2,
  kPowered: 3,
  kNegotiable: 4,
  kSpecific: 5,
};

// Struct: SmartCardReaderStateFlags
device.mojom.SmartCardReaderStateFlagsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardReaderStateFlags',
      packedSize: 16,
      fields: [
        { name: 'unpowered', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SmartCardReaderStateIn
device.mojom.SmartCardReaderStateInSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardReaderStateIn',
      packedSize: 16,
      fields: [
        { name: 'current_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SmartCardReaderStateOut
device.mojom.SmartCardReaderStateOutSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardReaderStateOut',
      packedSize: 16,
      fields: [
        { name: 'answer_to_reset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SmartCardProtocols
device.mojom.SmartCardProtocolsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardProtocols',
      packedSize: 16,
      fields: [
        { name: 'raw', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SmartCardStatus
device.mojom.SmartCardStatusSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardStatus',
      packedSize: 16,
      fields: [
        { name: 'answer_to_reset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SmartCardConnectSuccess
device.mojom.SmartCardConnectSuccessSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnectSuccess',
      packedSize: 16,
      fields: [
        { name: 'active_protocol', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: SmartCardTransaction
device.mojom.SmartCardTransaction = {};

device.mojom.SmartCardTransactionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SmartCardTransactionRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardTransaction';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SmartCardTransactionPendingReceiver,
      handle);
    this.$ = new device.mojom.SmartCardTransactionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.SmartCardTransactionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  endTransaction(disposition) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.SmartCardTransaction_EndTransaction_ParamsSpec,
      device.mojom.SmartCardTransaction_EndTransaction_ResponseParamsSpec,
      [disposition]);
  }

};

device.mojom.SmartCardTransaction.getRemote = function() {
  let remote = new device.mojom.SmartCardTransactionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardTransaction',
    'context');
  return remote.$;
};

// ParamsSpec for EndTransaction
device.mojom.SmartCardTransaction_EndTransaction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardTransaction.EndTransaction_Params',
      packedSize: 16,
      fields: [
        { name: 'disposition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SmartCardTransaction_EndTransaction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardTransaction.EndTransaction_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.SmartCardTransactionPtr = device.mojom.SmartCardTransactionRemote;
device.mojom.SmartCardTransactionRequest = device.mojom.SmartCardTransactionPendingReceiver;


// Interface: SmartCardConnection
device.mojom.SmartCardConnection = {};

device.mojom.SmartCardConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SmartCardConnectionRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SmartCardConnectionPendingReceiver,
      handle);
    this.$ = new device.mojom.SmartCardConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.SmartCardConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  disconnect(disposition) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.SmartCardConnection_Disconnect_ParamsSpec,
      device.mojom.SmartCardConnection_Disconnect_ResponseParamsSpec,
      [disposition]);
  }

  transmit(protocol, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SmartCardConnection_Transmit_ParamsSpec,
      device.mojom.SmartCardConnection_Transmit_ResponseParamsSpec,
      [protocol, data]);
  }

  control(control_code, data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.SmartCardConnection_Control_ParamsSpec,
      device.mojom.SmartCardConnection_Control_ResponseParamsSpec,
      [control_code, data]);
  }

  getAttrib(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.SmartCardConnection_GetAttrib_ParamsSpec,
      device.mojom.SmartCardConnection_GetAttrib_ResponseParamsSpec,
      [id]);
  }

  setAttrib(id, data) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.SmartCardConnection_SetAttrib_ParamsSpec,
      device.mojom.SmartCardConnection_SetAttrib_ResponseParamsSpec,
      [id, data]);
  }

  status() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.SmartCardConnection_Status_ParamsSpec,
      device.mojom.SmartCardConnection_Status_ResponseParamsSpec,
      []);
  }

  beginTransaction() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.SmartCardConnection_BeginTransaction_ParamsSpec,
      device.mojom.SmartCardConnection_BeginTransaction_ResponseParamsSpec,
      []);
  }

};

device.mojom.SmartCardConnection.getRemote = function() {
  let remote = new device.mojom.SmartCardConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardConnection',
    'context');
  return remote.$;
};

// ParamsSpec for Disconnect
device.mojom.SmartCardConnection_Disconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Disconnect_Params',
      packedSize: 16,
      fields: [
        { name: 'disposition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SmartCardConnection_Disconnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Disconnect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Transmit
device.mojom.SmartCardConnection_Transmit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Transmit_Params',
      packedSize: 24,
      fields: [
        { name: 'protocol', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SmartCardConnection_Transmit_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Transmit_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Control
device.mojom.SmartCardConnection_Control_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Control_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'control_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SmartCardConnection_Control_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Control_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAttrib
device.mojom.SmartCardConnection_GetAttrib_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.GetAttrib_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SmartCardConnection_GetAttrib_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.GetAttrib_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAttrib
device.mojom.SmartCardConnection_SetAttrib_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.SetAttrib_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SmartCardConnection_SetAttrib_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.SetAttrib_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Status
device.mojom.SmartCardConnection_Status_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Status_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SmartCardConnection_Status_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Status_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BeginTransaction
device.mojom.SmartCardConnection_BeginTransaction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.BeginTransaction_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SmartCardConnection_BeginTransaction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.BeginTransaction_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.SmartCardConnectionPtr = device.mojom.SmartCardConnectionRemote;
device.mojom.SmartCardConnectionRequest = device.mojom.SmartCardConnectionPendingReceiver;


// Interface: SmartCardConnectionWatcher
device.mojom.SmartCardConnectionWatcher = {};

device.mojom.SmartCardConnectionWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SmartCardConnectionWatcherRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardConnectionWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SmartCardConnectionWatcherPendingReceiver,
      handle);
    this.$ = new device.mojom.SmartCardConnectionWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.SmartCardConnectionWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyConnectionUsed() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_ParamsSpec,
      null,
      []);
  }

};

device.mojom.SmartCardConnectionWatcher.getRemote = function() {
  let remote = new device.mojom.SmartCardConnectionWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardConnectionWatcher',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyConnectionUsed
device.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnectionWatcher.NotifyConnectionUsed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.SmartCardConnectionWatcherPtr = device.mojom.SmartCardConnectionWatcherRemote;
device.mojom.SmartCardConnectionWatcherRequest = device.mojom.SmartCardConnectionWatcherPendingReceiver;


// Interface: SmartCardContext
device.mojom.SmartCardContext = {};

device.mojom.SmartCardContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SmartCardContextRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SmartCardContextPendingReceiver,
      handle);
    this.$ = new device.mojom.SmartCardContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.SmartCardContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  listReaders() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.SmartCardContext_ListReaders_ParamsSpec,
      device.mojom.SmartCardContext_ListReaders_ResponseParamsSpec,
      []);
  }

  getStatusChange(timeout, reader_states) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SmartCardContext_GetStatusChange_ParamsSpec,
      device.mojom.SmartCardContext_GetStatusChange_ResponseParamsSpec,
      [timeout, reader_states]);
  }

  cancel() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.SmartCardContext_Cancel_ParamsSpec,
      device.mojom.SmartCardContext_Cancel_ResponseParamsSpec,
      []);
  }

  connect(reader, share_mode, preferred_protocols, connection_watcher) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.SmartCardContext_Connect_ParamsSpec,
      device.mojom.SmartCardContext_Connect_ResponseParamsSpec,
      [reader, share_mode, preferred_protocols, connection_watcher]);
  }

};

device.mojom.SmartCardContext.getRemote = function() {
  let remote = new device.mojom.SmartCardContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardContext',
    'context');
  return remote.$;
};

// ParamsSpec for ListReaders
device.mojom.SmartCardContext_ListReaders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.ListReaders_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SmartCardContext_ListReaders_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.ListReaders_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetStatusChange
device.mojom.SmartCardContext_GetStatusChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.GetStatusChange_Params',
      packedSize: 24,
      fields: [
        { name: 'timeout', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'reader_states', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SmartCardContext_GetStatusChange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.GetStatusChange_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Cancel
device.mojom.SmartCardContext_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SmartCardContext_Cancel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.Cancel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Connect
device.mojom.SmartCardContext_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.Connect_Params',
      packedSize: 40,
      fields: [
        { name: 'reader', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'share_mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'preferred_protocols', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'connection_watcher', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SmartCardContext_Connect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.Connect_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.SmartCardContextPtr = device.mojom.SmartCardContextRemote;
device.mojom.SmartCardContextRequest = device.mojom.SmartCardContextPendingReceiver;


// Interface: SmartCardContextFactory
device.mojom.SmartCardContextFactory = {};

device.mojom.SmartCardContextFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.SmartCardContextFactoryRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardContextFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.SmartCardContextFactoryPendingReceiver,
      handle);
    this.$ = new device.mojom.SmartCardContextFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.SmartCardContextFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createContext() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.SmartCardContextFactory_CreateContext_ParamsSpec,
      device.mojom.SmartCardContextFactory_CreateContext_ResponseParamsSpec,
      []);
  }

};

device.mojom.SmartCardContextFactory.getRemote = function() {
  let remote = new device.mojom.SmartCardContextFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardContextFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateContext
device.mojom.SmartCardContextFactory_CreateContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContextFactory.CreateContext_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device.mojom.SmartCardContextFactory_CreateContext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContextFactory.CreateContext_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device.mojom.SmartCardContextFactoryPtr = device.mojom.SmartCardContextFactoryRemote;
device.mojom.SmartCardContextFactoryRequest = device.mojom.SmartCardContextFactoryPendingReceiver;

