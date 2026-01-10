// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/smart_card.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: SmartCardSuccess
device.mojom.mojom.SmartCardSuccess = {
  kOk: 0,
};
device.mojom.mojom.SmartCardSuccessSpec = { $: mojo.internal.Enum() };

// Enum: SmartCardError
device.mojom.mojom.SmartCardError = {
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
device.mojom.mojom.SmartCardErrorSpec = { $: mojo.internal.Enum() };

// Enum: SmartCardShareMode
device.mojom.mojom.SmartCardShareMode = {
  kShared: 0,
  kExclusive: 1,
  kDirect: 2,
};
device.mojom.mojom.SmartCardShareModeSpec = { $: mojo.internal.Enum() };

// Enum: SmartCardProtocol
device.mojom.mojom.SmartCardProtocol = {
  kUndefined: 0,
  kT0: 1,
  kT1: 2,
  kRaw: 3,
};
device.mojom.mojom.SmartCardProtocolSpec = { $: mojo.internal.Enum() };

// Enum: SmartCardDisposition
device.mojom.mojom.SmartCardDisposition = {
  kLeave: 0,
  kReset: 1,
  kUnpower: 2,
  kEject: 3,
};
device.mojom.mojom.SmartCardDispositionSpec = { $: mojo.internal.Enum() };

// Enum: SmartCardConnectionState
device.mojom.mojom.SmartCardConnectionState = {
  kAbsent: 0,
  kPresent: 1,
  kSwallowed: 2,
  kPowered: 3,
  kNegotiable: 4,
  kSpecific: 5,
};
device.mojom.mojom.SmartCardConnectionStateSpec = { $: mojo.internal.Enum() };

// Union: SmartCardResult
device.mojom.mojom.SmartCardResultSpec = { $: mojo.internal.Union(
    'device.mojom.SmartCardResult', {
      'success': {
        'ordinal': 0,
        'type': device.mojom.SmartCardSuccessSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec,
      }},
    })
};

// Union: SmartCardStatusChangeResult
device.mojom.mojom.SmartCardStatusChangeResultSpec = { $: mojo.internal.Union(
    'device.mojom.SmartCardStatusChangeResult', {
      'reader_states': {
        'ordinal': 0,
        'type': mojo.internal.Array(device.mojom.SmartCardReaderStateOutSpec, false),
      }},
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec,
      }},
    })
};

// Union: SmartCardListReadersResult
device.mojom.mojom.SmartCardListReadersResultSpec = { $: mojo.internal.Union(
    'device.mojom.SmartCardListReadersResult', {
      'readers': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.String, false),
      }},
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec,
      }},
    })
};

// Union: SmartCardCreateContextResult
device.mojom.mojom.SmartCardCreateContextResultSpec = { $: mojo.internal.Union(
    'device.mojom.SmartCardCreateContextResult', {
      'context': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceProxy(device.mojom.SmartCardContextRemote),
      }},
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec,
      }},
    })
};

// Union: SmartCardConnectResult
device.mojom.mojom.SmartCardConnectResultSpec = { $: mojo.internal.Union(
    'device.mojom.SmartCardConnectResult', {
      'success': {
        'ordinal': 0,
        'type': device.mojom.SmartCardConnectSuccessSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec,
      }},
    })
};

// Union: SmartCardDataResult
device.mojom.mojom.SmartCardDataResultSpec = { $: mojo.internal.Union(
    'device.mojom.SmartCardDataResult', {
      'data': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec,
      }},
    })
};

// Union: SmartCardStatusResult
device.mojom.mojom.SmartCardStatusResultSpec = { $: mojo.internal.Union(
    'device.mojom.SmartCardStatusResult', {
      'status': {
        'ordinal': 0,
        'type': device.mojom.SmartCardStatusSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec,
      }},
    })
};

// Union: SmartCardTransactionResult
device.mojom.mojom.SmartCardTransactionResultSpec = { $: mojo.internal.Union(
    'device.mojom.SmartCardTransactionResult', {
      'transaction': {
        'ordinal': 0,
        'type': mojo.internal.AssociatedInterfaceProxy(device.mojom.SmartCardTransactionRemote),
      }},
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec,
      }},
    })
};

// Struct: SmartCardReaderStateFlags
device.mojom.mojom.SmartCardReaderStateFlagsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardReaderStateFlags',
      packedSize: 16,
      fields: [
        { name: 'unaware', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'ignore', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'changed', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'unknown', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'unavailable', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'empty', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'present', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'exclusive', packedOffset: 0, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'inuse', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'mute', packedOffset: 1, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'unpowered', packedOffset: 1, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SmartCardReaderStateIn
device.mojom.mojom.SmartCardReaderStateInSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardReaderStateIn',
      packedSize: 32,
      fields: [
        { name: 'reader', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'current_state', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SmartCardReaderStateFlagsSpec, nullable: false, minVersion: 0 },
        { name: 'current_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SmartCardReaderStateOut
device.mojom.mojom.SmartCardReaderStateOutSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardReaderStateOut',
      packedSize: 40,
      fields: [
        { name: 'reader', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'event_state', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SmartCardReaderStateFlagsSpec, nullable: false, minVersion: 0 },
        { name: 'event_count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'answer_to_reset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: SmartCardProtocols
device.mojom.mojom.SmartCardProtocolsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardProtocols',
      packedSize: 16,
      fields: [
        { name: 't0', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 't1', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'raw', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SmartCardStatus
device.mojom.mojom.SmartCardStatusSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardStatus',
      packedSize: 32,
      fields: [
        { name: 'reader_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 16, packedBitOffset: 0, type: device.mojom.SmartCardConnectionStateSpec, nullable: false, minVersion: 0 },
        { name: 'protocol', packedOffset: 20, packedBitOffset: 0, type: device.mojom.SmartCardProtocolSpec, nullable: false, minVersion: 0 },
        { name: 'answer_to_reset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SmartCardConnectSuccess
device.mojom.mojom.SmartCardConnectSuccessSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnectSuccess',
      packedSize: 24,
      fields: [
        { name: 'connection', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(device.mojom.SmartCardConnectionRemote), nullable: false, minVersion: 0 },
        { name: 'active_protocol', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SmartCardProtocolSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: SmartCardTransaction
device.mojom.mojom.SmartCardTransaction = {};

device.mojom.mojom.SmartCardTransactionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.SmartCardTransactionRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardTransaction';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.SmartCardTransactionPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.SmartCardTransactionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.SmartCardTransactionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  endTransaction(disposition) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.SmartCardTransaction_EndTransaction_ParamsSpec,
      device.mojom.mojom.SmartCardTransaction_EndTransaction_ResponseParamsSpec,
      [disposition]);
  }

};

device.mojom.mojom.SmartCardTransaction.getRemote = function() {
  let remote = new device.mojom.mojom.SmartCardTransactionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardTransaction',
    'context');
  return remote.$;
};

// ParamsSpec for EndTransaction
device.mojom.mojom.SmartCardTransaction_EndTransaction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardTransaction.EndTransaction_Params',
      packedSize: 16,
      fields: [
        { name: 'disposition', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardDispositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.mojom.SmartCardTransaction_EndTransaction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardTransaction.EndTransaction_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.SmartCardTransactionPtr = device.mojom.mojom.SmartCardTransactionRemote;
device.mojom.mojom.SmartCardTransactionRequest = device.mojom.mojom.SmartCardTransactionPendingReceiver;


// Interface: SmartCardConnection
device.mojom.mojom.SmartCardConnection = {};

device.mojom.mojom.SmartCardConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.SmartCardConnectionRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.SmartCardConnectionPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.SmartCardConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.SmartCardConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  disconnect(disposition) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.SmartCardConnection_Disconnect_ParamsSpec,
      device.mojom.mojom.SmartCardConnection_Disconnect_ResponseParamsSpec,
      [disposition]);
  }

  transmit(protocol, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.SmartCardConnection_Transmit_ParamsSpec,
      device.mojom.mojom.SmartCardConnection_Transmit_ResponseParamsSpec,
      [protocol, data]);
  }

  control(control_code, data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.SmartCardConnection_Control_ParamsSpec,
      device.mojom.mojom.SmartCardConnection_Control_ResponseParamsSpec,
      [control_code, data]);
  }

  getAttrib(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.mojom.SmartCardConnection_GetAttrib_ParamsSpec,
      device.mojom.mojom.SmartCardConnection_GetAttrib_ResponseParamsSpec,
      [id]);
  }

  setAttrib(id, data) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.mojom.SmartCardConnection_SetAttrib_ParamsSpec,
      device.mojom.mojom.SmartCardConnection_SetAttrib_ResponseParamsSpec,
      [id, data]);
  }

  status() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.mojom.SmartCardConnection_Status_ParamsSpec,
      device.mojom.mojom.SmartCardConnection_Status_ResponseParamsSpec,
      []);
  }

  beginTransaction() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.mojom.SmartCardConnection_BeginTransaction_ParamsSpec,
      device.mojom.mojom.SmartCardConnection_BeginTransaction_ResponseParamsSpec,
      []);
  }

};

device.mojom.mojom.SmartCardConnection.getRemote = function() {
  let remote = new device.mojom.mojom.SmartCardConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardConnection',
    'context');
  return remote.$;
};

// ParamsSpec for Disconnect
device.mojom.mojom.SmartCardConnection_Disconnect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Disconnect_Params',
      packedSize: 16,
      fields: [
        { name: 'disposition', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardDispositionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.mojom.SmartCardConnection_Disconnect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Disconnect_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Transmit
device.mojom.mojom.SmartCardConnection_Transmit_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Transmit_Params',
      packedSize: 24,
      fields: [
        { name: 'protocol', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SmartCardProtocolSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

device.mojom.mojom.SmartCardConnection_Transmit_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Transmit_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardDataResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Control
device.mojom.mojom.SmartCardConnection_Control_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Control_Params',
      packedSize: 24,
      fields: [
        { name: 'control_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

device.mojom.mojom.SmartCardConnection_Control_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Control_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardDataResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetAttrib
device.mojom.mojom.SmartCardConnection_GetAttrib_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.GetAttrib_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.mojom.SmartCardConnection_GetAttrib_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.GetAttrib_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardDataResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetAttrib
device.mojom.mojom.SmartCardConnection_SetAttrib_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.SetAttrib_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

device.mojom.mojom.SmartCardConnection_SetAttrib_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.SetAttrib_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Status
device.mojom.mojom.SmartCardConnection_Status_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Status_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.mojom.SmartCardConnection_Status_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.Status_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardStatusResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BeginTransaction
device.mojom.mojom.SmartCardConnection_BeginTransaction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.BeginTransaction_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.mojom.SmartCardConnection_BeginTransaction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnection.BeginTransaction_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardTransactionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.SmartCardConnectionPtr = device.mojom.mojom.SmartCardConnectionRemote;
device.mojom.mojom.SmartCardConnectionRequest = device.mojom.mojom.SmartCardConnectionPendingReceiver;


// Interface: SmartCardConnectionWatcher
device.mojom.mojom.SmartCardConnectionWatcher = {};

device.mojom.mojom.SmartCardConnectionWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.SmartCardConnectionWatcherRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardConnectionWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.SmartCardConnectionWatcherPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.SmartCardConnectionWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.SmartCardConnectionWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyConnectionUsed() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_ParamsSpec,
      null,
      []);
  }

};

device.mojom.mojom.SmartCardConnectionWatcher.getRemote = function() {
  let remote = new device.mojom.mojom.SmartCardConnectionWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardConnectionWatcher',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyConnectionUsed
device.mojom.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardConnectionWatcher.NotifyConnectionUsed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.SmartCardConnectionWatcherPtr = device.mojom.mojom.SmartCardConnectionWatcherRemote;
device.mojom.mojom.SmartCardConnectionWatcherRequest = device.mojom.mojom.SmartCardConnectionWatcherPendingReceiver;


// Interface: SmartCardContext
device.mojom.mojom.SmartCardContext = {};

device.mojom.mojom.SmartCardContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.SmartCardContextRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.SmartCardContextPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.SmartCardContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.SmartCardContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  listReaders() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.SmartCardContext_ListReaders_ParamsSpec,
      device.mojom.mojom.SmartCardContext_ListReaders_ResponseParamsSpec,
      []);
  }

  getStatusChange(timeout, reader_states) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.mojom.SmartCardContext_GetStatusChange_ParamsSpec,
      device.mojom.mojom.SmartCardContext_GetStatusChange_ResponseParamsSpec,
      [timeout, reader_states]);
  }

  cancel() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.mojom.SmartCardContext_Cancel_ParamsSpec,
      device.mojom.mojom.SmartCardContext_Cancel_ResponseParamsSpec,
      []);
  }

  connect(reader, share_mode, preferred_protocols, connection_watcher) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.mojom.SmartCardContext_Connect_ParamsSpec,
      device.mojom.mojom.SmartCardContext_Connect_ResponseParamsSpec,
      [reader, share_mode, preferred_protocols, connection_watcher]);
  }

};

device.mojom.mojom.SmartCardContext.getRemote = function() {
  let remote = new device.mojom.mojom.SmartCardContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardContext',
    'context');
  return remote.$;
};

// ParamsSpec for ListReaders
device.mojom.mojom.SmartCardContext_ListReaders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.ListReaders_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.mojom.SmartCardContext_ListReaders_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.ListReaders_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardListReadersResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetStatusChange
device.mojom.mojom.SmartCardContext_GetStatusChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.GetStatusChange_Params',
      packedSize: 24,
      fields: [
        { name: 'timeout', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'reader_states', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(device.mojom.SmartCardReaderStateInSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

device.mojom.mojom.SmartCardContext_GetStatusChange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.GetStatusChange_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardStatusChangeResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Cancel
device.mojom.mojom.SmartCardContext_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.mojom.SmartCardContext_Cancel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.Cancel_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Connect
device.mojom.mojom.SmartCardContext_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.Connect_Params',
      packedSize: 40,
      fields: [
        { name: 'reader', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'share_mode', packedOffset: 24, packedBitOffset: 0, type: device.mojom.SmartCardShareModeSpec, nullable: false, minVersion: 0 },
        { name: 'preferred_protocols', packedOffset: 8, packedBitOffset: 0, type: device.mojom.SmartCardProtocolsSpec, nullable: false, minVersion: 0 },
        { name: 'connection_watcher', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(device.mojom.SmartCardConnectionWatcherRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

device.mojom.mojom.SmartCardContext_Connect_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContext.Connect_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardConnectResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.SmartCardContextPtr = device.mojom.mojom.SmartCardContextRemote;
device.mojom.mojom.SmartCardContextRequest = device.mojom.mojom.SmartCardContextPendingReceiver;


// Interface: SmartCardContextFactory
device.mojom.mojom.SmartCardContextFactory = {};

device.mojom.mojom.SmartCardContextFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.mojom.SmartCardContextFactoryRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardContextFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.mojom.SmartCardContextFactoryPendingReceiver,
      handle);
    this.$ = new device.mojom.mojom.SmartCardContextFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.mojom.SmartCardContextFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createContext() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.mojom.SmartCardContextFactory_CreateContext_ParamsSpec,
      device.mojom.mojom.SmartCardContextFactory_CreateContext_ResponseParamsSpec,
      []);
  }

};

device.mojom.mojom.SmartCardContextFactory.getRemote = function() {
  let remote = new device.mojom.mojom.SmartCardContextFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardContextFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateContext
device.mojom.mojom.SmartCardContextFactory_CreateContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContextFactory.CreateContext_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

device.mojom.mojom.SmartCardContextFactory_CreateContext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.SmartCardContextFactory.CreateContext_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.SmartCardCreateContextResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
device.mojom.mojom.SmartCardContextFactoryPtr = device.mojom.mojom.SmartCardContextFactoryRemote;
device.mojom.mojom.SmartCardContextFactoryRequest = device.mojom.mojom.SmartCardContextFactoryPendingReceiver;

