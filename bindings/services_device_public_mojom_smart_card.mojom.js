// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/smart_card.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};
var mojo_base = mojo_base || {};

device.mojom.SmartCardSuccessSpec = { $: mojo.internal.Enum() };
device.mojom.SmartCardErrorSpec = { $: mojo.internal.Enum() };
device.mojom.SmartCardShareModeSpec = { $: mojo.internal.Enum() };
device.mojom.SmartCardProtocolSpec = { $: mojo.internal.Enum() };
device.mojom.SmartCardDispositionSpec = { $: mojo.internal.Enum() };
device.mojom.SmartCardConnectionStateSpec = { $: mojo.internal.Enum() };
device.mojom.SmartCardResultSpec = { $: {} };
device.mojom.SmartCardStatusChangeResultSpec = { $: {} };
device.mojom.SmartCardListReadersResultSpec = { $: {} };
device.mojom.SmartCardCreateContextResultSpec = { $: {} };
device.mojom.SmartCardConnectResultSpec = { $: {} };
device.mojom.SmartCardDataResultSpec = { $: {} };
device.mojom.SmartCardStatusResultSpec = { $: {} };
device.mojom.SmartCardTransactionResultSpec = { $: {} };
device.mojom.SmartCardReaderStateFlagsSpec = { $: {} };
device.mojom.SmartCardReaderStateInSpec = { $: {} };
device.mojom.SmartCardReaderStateOutSpec = { $: {} };
device.mojom.SmartCardProtocolsSpec = { $: {} };
device.mojom.SmartCardStatusSpec = { $: {} };
device.mojom.SmartCardConnectSuccessSpec = { $: {} };
device.mojom.SmartCardTransaction = {};
device.mojom.SmartCardTransaction.$interfaceName = 'device.mojom.SmartCardTransaction';
device.mojom.SmartCardTransaction_EndTransaction_ParamsSpec = { $: {} };
device.mojom.SmartCardTransaction_EndTransaction_ResponseParamsSpec = { $: {} };
device.mojom.SmartCardConnection = {};
device.mojom.SmartCardConnection.$interfaceName = 'device.mojom.SmartCardConnection';
device.mojom.SmartCardConnection_Disconnect_ParamsSpec = { $: {} };
device.mojom.SmartCardConnection_Disconnect_ResponseParamsSpec = { $: {} };
device.mojom.SmartCardConnection_Transmit_ParamsSpec = { $: {} };
device.mojom.SmartCardConnection_Transmit_ResponseParamsSpec = { $: {} };
device.mojom.SmartCardConnection_Control_ParamsSpec = { $: {} };
device.mojom.SmartCardConnection_Control_ResponseParamsSpec = { $: {} };
device.mojom.SmartCardConnection_GetAttrib_ParamsSpec = { $: {} };
device.mojom.SmartCardConnection_GetAttrib_ResponseParamsSpec = { $: {} };
device.mojom.SmartCardConnection_SetAttrib_ParamsSpec = { $: {} };
device.mojom.SmartCardConnection_SetAttrib_ResponseParamsSpec = { $: {} };
device.mojom.SmartCardConnection_Status_ParamsSpec = { $: {} };
device.mojom.SmartCardConnection_Status_ResponseParamsSpec = { $: {} };
device.mojom.SmartCardConnection_BeginTransaction_ParamsSpec = { $: {} };
device.mojom.SmartCardConnection_BeginTransaction_ResponseParamsSpec = { $: {} };
device.mojom.SmartCardConnectionWatcher = {};
device.mojom.SmartCardConnectionWatcher.$interfaceName = 'device.mojom.SmartCardConnectionWatcher';
device.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_ParamsSpec = { $: {} };
device.mojom.SmartCardContext = {};
device.mojom.SmartCardContext.$interfaceName = 'device.mojom.SmartCardContext';
device.mojom.SmartCardContext_ListReaders_ParamsSpec = { $: {} };
device.mojom.SmartCardContext_ListReaders_ResponseParamsSpec = { $: {} };
device.mojom.SmartCardContext_GetStatusChange_ParamsSpec = { $: {} };
device.mojom.SmartCardContext_GetStatusChange_ResponseParamsSpec = { $: {} };
device.mojom.SmartCardContext_Cancel_ParamsSpec = { $: {} };
device.mojom.SmartCardContext_Cancel_ResponseParamsSpec = { $: {} };
device.mojom.SmartCardContext_Connect_ParamsSpec = { $: {} };
device.mojom.SmartCardContext_Connect_ResponseParamsSpec = { $: {} };
device.mojom.SmartCardContextFactory = {};
device.mojom.SmartCardContextFactory.$interfaceName = 'device.mojom.SmartCardContextFactory';
device.mojom.SmartCardContextFactory_CreateContext_ParamsSpec = { $: {} };
device.mojom.SmartCardContextFactory_CreateContext_ResponseParamsSpec = { $: {} };

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

// Union: SmartCardResult
mojo.internal.Union(
    device.mojom.SmartCardResultSpec, 'device.mojom.SmartCardResult', {
      'success': {
        'ordinal': 0,
        'type': device.mojom.SmartCardSuccessSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardStatusChangeResult
mojo.internal.Union(
    device.mojom.SmartCardStatusChangeResultSpec, 'device.mojom.SmartCardStatusChangeResult', {
      'reader_states': {
        'ordinal': 0,
        'type': mojo.internal.Array(device.mojom.SmartCardReaderStateOutSpec.$, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardListReadersResult
mojo.internal.Union(
    device.mojom.SmartCardListReadersResultSpec, 'device.mojom.SmartCardListReadersResult', {
      'readers': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.String, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardCreateContextResult
mojo.internal.Union(
    device.mojom.SmartCardCreateContextResultSpec, 'device.mojom.SmartCardCreateContextResult', {
      'context': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceProxy(device.mojom.SmartCardContextSpec),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardConnectResult
mojo.internal.Union(
    device.mojom.SmartCardConnectResultSpec, 'device.mojom.SmartCardConnectResult', {
      'success': {
        'ordinal': 0,
        'type': device.mojom.SmartCardConnectSuccessSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardDataResult
mojo.internal.Union(
    device.mojom.SmartCardDataResultSpec, 'device.mojom.SmartCardDataResult', {
      'data': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardStatusResult
mojo.internal.Union(
    device.mojom.SmartCardStatusResultSpec, 'device.mojom.SmartCardStatusResult', {
      'status': {
        'ordinal': 0,
        'type': device.mojom.SmartCardStatusSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardTransactionResult
mojo.internal.Union(
    device.mojom.SmartCardTransactionResultSpec, 'device.mojom.SmartCardTransactionResult', {
      'transaction': {
        'ordinal': 0,
        'type': mojo.internal.Pointer,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: SmartCardReaderStateFlags
mojo.internal.Struct(
    device.mojom.SmartCardReaderStateFlagsSpec, 'device.mojom.SmartCardReaderStateFlags', [
      mojo.internal.StructField('unaware', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('ignore', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('changed', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('unknown', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('unavailable', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('empty', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('present', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('exclusive', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('inuse', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('mute', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('unpowered', 1, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SmartCardReaderStateIn
mojo.internal.Struct(
    device.mojom.SmartCardReaderStateInSpec, 'device.mojom.SmartCardReaderStateIn', [
      mojo.internal.StructField('reader', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('current_state', 8, 0, device.mojom.SmartCardReaderStateFlagsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('current_count', 16, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SmartCardReaderStateOut
mojo.internal.Struct(
    device.mojom.SmartCardReaderStateOutSpec, 'device.mojom.SmartCardReaderStateOut', [
      mojo.internal.StructField('reader', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event_state', 8, 0, device.mojom.SmartCardReaderStateFlagsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('answer_to_reset', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('event_count', 24, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SmartCardProtocols
mojo.internal.Struct(
    device.mojom.SmartCardProtocolsSpec, 'device.mojom.SmartCardProtocols', [
      mojo.internal.StructField('t0', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('t1', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('raw', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SmartCardStatus
mojo.internal.Struct(
    device.mojom.SmartCardStatusSpec, 'device.mojom.SmartCardStatus', [
      mojo.internal.StructField('reader_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, device.mojom.SmartCardConnectionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('protocol', 16, 0, device.mojom.SmartCardProtocolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('answer_to_reset', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SmartCardConnectSuccess
mojo.internal.Struct(
    device.mojom.SmartCardConnectSuccessSpec, 'device.mojom.SmartCardConnectSuccess', [
      mojo.internal.StructField('connection', 0, 0, mojo.internal.InterfaceProxy(device.mojom.SmartCardConnectionSpec), null, false, 0, undefined),
      mojo.internal.StructField('active_protocol', 8, 0, device.mojom.SmartCardProtocolSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SmartCardTransaction
mojo.internal.Struct(
    device.mojom.SmartCardTransaction_EndTransaction_ParamsSpec, 'device.mojom.SmartCardTransaction_EndTransaction_Params', [
      mojo.internal.StructField('disposition', 0, 0, device.mojom.SmartCardDispositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SmartCardTransaction_EndTransaction_ResponseParamsSpec, 'device.mojom.SmartCardTransaction_EndTransaction_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [disposition],
      false);
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

device.mojom.SmartCardTransactionReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: EndTransaction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardTransaction_EndTransaction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EndTransaction (0)');
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
          const params = decoder.decodeStruct(device.mojom.SmartCardTransaction_EndTransaction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.endTransaction');
          const result = this.impl.endTransaction(params.disposition);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SmartCardTransaction_EndTransaction_ResponseParamsSpec);
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

device.mojom.SmartCardTransactionReceiver = device.mojom.SmartCardTransactionReceiver;

device.mojom.SmartCardTransactionPtr = device.mojom.SmartCardTransactionRemote;
device.mojom.SmartCardTransactionRequest = device.mojom.SmartCardTransactionPendingReceiver;


// Interface: SmartCardConnection
mojo.internal.Struct(
    device.mojom.SmartCardConnection_Disconnect_ParamsSpec, 'device.mojom.SmartCardConnection_Disconnect_Params', [
      mojo.internal.StructField('disposition', 0, 0, device.mojom.SmartCardDispositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SmartCardConnection_Disconnect_ResponseParamsSpec, 'device.mojom.SmartCardConnection_Disconnect_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SmartCardConnection_Transmit_ParamsSpec, 'device.mojom.SmartCardConnection_Transmit_Params', [
      mojo.internal.StructField('protocol', 0, 0, device.mojom.SmartCardProtocolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.SmartCardConnection_Transmit_ResponseParamsSpec, 'device.mojom.SmartCardConnection_Transmit_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardDataResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SmartCardConnection_Control_ParamsSpec, 'device.mojom.SmartCardConnection_Control_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('control_code', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.SmartCardConnection_Control_ResponseParamsSpec, 'device.mojom.SmartCardConnection_Control_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardDataResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SmartCardConnection_GetAttrib_ParamsSpec, 'device.mojom.SmartCardConnection_GetAttrib_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SmartCardConnection_GetAttrib_ResponseParamsSpec, 'device.mojom.SmartCardConnection_GetAttrib_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardDataResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SmartCardConnection_SetAttrib_ParamsSpec, 'device.mojom.SmartCardConnection_SetAttrib_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.SmartCardConnection_SetAttrib_ResponseParamsSpec, 'device.mojom.SmartCardConnection_SetAttrib_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SmartCardConnection_Status_ParamsSpec, 'device.mojom.SmartCardConnection_Status_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SmartCardConnection_Status_ResponseParamsSpec, 'device.mojom.SmartCardConnection_Status_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardStatusResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SmartCardConnection_BeginTransaction_ParamsSpec, 'device.mojom.SmartCardConnection_BeginTransaction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SmartCardConnection_BeginTransaction_ResponseParamsSpec, 'device.mojom.SmartCardConnection_BeginTransaction_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardTransactionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [disposition],
      false);
  }

  transmit(protocol, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SmartCardConnection_Transmit_ParamsSpec,
      device.mojom.SmartCardConnection_Transmit_ResponseParamsSpec,
      [protocol, data],
      false);
  }

  control(control_code, data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.SmartCardConnection_Control_ParamsSpec,
      device.mojom.SmartCardConnection_Control_ResponseParamsSpec,
      [control_code, data],
      false);
  }

  getAttrib(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.SmartCardConnection_GetAttrib_ParamsSpec,
      device.mojom.SmartCardConnection_GetAttrib_ResponseParamsSpec,
      [id],
      false);
  }

  setAttrib(id, data) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.SmartCardConnection_SetAttrib_ParamsSpec,
      device.mojom.SmartCardConnection_SetAttrib_ResponseParamsSpec,
      [id, data],
      false);
  }

  status() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device.mojom.SmartCardConnection_Status_ParamsSpec,
      device.mojom.SmartCardConnection_Status_ResponseParamsSpec,
      [],
      false);
  }

  beginTransaction() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device.mojom.SmartCardConnection_BeginTransaction_ParamsSpec,
      device.mojom.SmartCardConnection_BeginTransaction_ResponseParamsSpec,
      [],
      false);
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

device.mojom.SmartCardConnectionReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: Disconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardConnection_Disconnect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Disconnect (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Transmit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardConnection_Transmit_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Transmit (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Control
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardConnection_Control_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Control (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetAttrib
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardConnection_GetAttrib_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAttrib (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetAttrib
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardConnection_SetAttrib_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAttrib (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Status
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardConnection_Status_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Status (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: BeginTransaction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardConnection_BeginTransaction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginTransaction (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStruct(device.mojom.SmartCardConnection_Disconnect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disconnect');
          const result = this.impl.disconnect(params.disposition);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SmartCardConnection_Disconnect_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.SmartCardConnection_Transmit_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.transmit');
          const result = this.impl.transmit(params.protocol, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SmartCardConnection_Transmit_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.SmartCardConnection_Control_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.control');
          const result = this.impl.control(params.control_code, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SmartCardConnection_Control_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.SmartCardConnection_GetAttrib_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAttrib');
          const result = this.impl.getAttrib(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SmartCardConnection_GetAttrib_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.SmartCardConnection_SetAttrib_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAttrib');
          const result = this.impl.setAttrib(params.id, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SmartCardConnection_SetAttrib_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.SmartCardConnection_Status_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.status');
          const result = this.impl.status();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SmartCardConnection_Status_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.SmartCardConnection_BeginTransaction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.beginTransaction');
          const result = this.impl.beginTransaction();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SmartCardConnection_BeginTransaction_ResponseParamsSpec);
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

device.mojom.SmartCardConnectionReceiver = device.mojom.SmartCardConnectionReceiver;

device.mojom.SmartCardConnectionPtr = device.mojom.SmartCardConnectionRemote;
device.mojom.SmartCardConnectionRequest = device.mojom.SmartCardConnectionPendingReceiver;


// Interface: SmartCardConnectionWatcher
mojo.internal.Struct(
    device.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_ParamsSpec, 'device.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

device.mojom.SmartCardConnectionWatcherReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: NotifyConnectionUsed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyConnectionUsed (0)');
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
          const params = decoder.decodeStruct(device.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyConnectionUsed');
          const result = this.impl.notifyConnectionUsed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.SmartCardConnectionWatcherReceiver = device.mojom.SmartCardConnectionWatcherReceiver;

device.mojom.SmartCardConnectionWatcherPtr = device.mojom.SmartCardConnectionWatcherRemote;
device.mojom.SmartCardConnectionWatcherRequest = device.mojom.SmartCardConnectionWatcherPendingReceiver;


// Interface: SmartCardContext
mojo.internal.Struct(
    device.mojom.SmartCardContext_ListReaders_ParamsSpec, 'device.mojom.SmartCardContext_ListReaders_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SmartCardContext_ListReaders_ResponseParamsSpec, 'device.mojom.SmartCardContext_ListReaders_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardListReadersResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SmartCardContext_GetStatusChange_ParamsSpec, 'device.mojom.SmartCardContext_GetStatusChange_Params', [
      mojo.internal.StructField('timeout', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reader_states', 8, 0, mojo.internal.Array(device.mojom.SmartCardReaderStateInSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    device.mojom.SmartCardContext_GetStatusChange_ResponseParamsSpec, 'device.mojom.SmartCardContext_GetStatusChange_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardStatusChangeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SmartCardContext_Cancel_ParamsSpec, 'device.mojom.SmartCardContext_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SmartCardContext_Cancel_ResponseParamsSpec, 'device.mojom.SmartCardContext_Cancel_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.SmartCardContext_Connect_ParamsSpec, 'device.mojom.SmartCardContext_Connect_Params', [
      mojo.internal.StructField('reader', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('share_mode', 8, 0, device.mojom.SmartCardShareModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('preferred_protocols', 16, 0, device.mojom.SmartCardProtocolsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connection_watcher', 24, 0, mojo.internal.InterfaceProxy(device.mojom.SmartCardConnectionWatcherSpec), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    device.mojom.SmartCardContext_Connect_ResponseParamsSpec, 'device.mojom.SmartCardContext_Connect_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardConnectResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  getStatusChange(timeout, reader_states) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.SmartCardContext_GetStatusChange_ParamsSpec,
      device.mojom.SmartCardContext_GetStatusChange_ResponseParamsSpec,
      [timeout, reader_states],
      false);
  }

  cancel() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.SmartCardContext_Cancel_ParamsSpec,
      device.mojom.SmartCardContext_Cancel_ResponseParamsSpec,
      [],
      false);
  }

  connect(reader, share_mode, preferred_protocols, connection_watcher) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.SmartCardContext_Connect_ParamsSpec,
      device.mojom.SmartCardContext_Connect_ResponseParamsSpec,
      [reader, share_mode, preferred_protocols, connection_watcher],
      false);
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

device.mojom.SmartCardContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: ListReaders
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardContext_ListReaders_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ListReaders (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetStatusChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardContext_GetStatusChange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStatusChange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardContext_Cancel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Connect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardContext_Connect_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Connect (3)');
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
          const params = decoder.decodeStruct(device.mojom.SmartCardContext_ListReaders_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.listReaders');
          const result = this.impl.listReaders();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SmartCardContext_ListReaders_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.SmartCardContext_GetStatusChange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getStatusChange');
          const result = this.impl.getStatusChange(params.timeout, params.reader_states);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SmartCardContext_GetStatusChange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.SmartCardContext_Cancel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SmartCardContext_Cancel_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.SmartCardContext_Connect_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.reader, params.share_mode, params.preferred_protocols, params.connection_watcher);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SmartCardContext_Connect_ResponseParamsSpec);
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

device.mojom.SmartCardContextReceiver = device.mojom.SmartCardContextReceiver;

device.mojom.SmartCardContextPtr = device.mojom.SmartCardContextRemote;
device.mojom.SmartCardContextRequest = device.mojom.SmartCardContextPendingReceiver;


// Interface: SmartCardContextFactory
mojo.internal.Struct(
    device.mojom.SmartCardContextFactory_CreateContext_ParamsSpec, 'device.mojom.SmartCardContextFactory_CreateContext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.SmartCardContextFactory_CreateContext_ResponseParamsSpec, 'device.mojom.SmartCardContextFactory_CreateContext_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.SmartCardCreateContextResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
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

device.mojom.SmartCardContextFactoryReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: CreateContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.SmartCardContextFactory_CreateContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateContext (0)');
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
          const params = decoder.decodeStruct(device.mojom.SmartCardContextFactory_CreateContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createContext');
          const result = this.impl.createContext();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.SmartCardContextFactory_CreateContext_ResponseParamsSpec);
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

device.mojom.SmartCardContextFactoryReceiver = device.mojom.SmartCardContextFactoryReceiver;

device.mojom.SmartCardContextFactoryPtr = device.mojom.SmartCardContextFactoryRemote;
device.mojom.SmartCardContextFactoryRequest = device.mojom.SmartCardContextFactoryPendingReceiver;

