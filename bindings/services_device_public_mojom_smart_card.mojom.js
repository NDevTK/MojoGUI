// Auto-generated MojoJS binding
 // Source: chromium_src/services/device/public/mojom/smart_card.mojom
 // Module: device.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.device = mojo.internal.bindings.device || {};
mojo.internal.bindings.device.mojom = mojo.internal.bindings.device.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.device.mojom.SmartCardSuccessSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.SmartCardErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.SmartCardShareModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.SmartCardProtocolSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.SmartCardDispositionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.SmartCardConnectionStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.SmartCardResultSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardStatusChangeResultSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardListReadersResultSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardCreateContextResultSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnectResultSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardDataResultSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardStatusResultSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardTransactionResultSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardReaderStateFlagsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardReaderStateInSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardReaderStateOutSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardProtocolsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardStatusSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnectSuccessSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardTransaction = {};
mojo.internal.bindings.device.mojom.SmartCardTransaction.$interfaceName = 'device.mojom.SmartCardTransaction';
mojo.internal.bindings.device.mojom.SmartCardTransaction_EndTransaction_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardTransaction_EndTransaction_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection = {};
mojo.internal.bindings.device.mojom.SmartCardConnection.$interfaceName = 'device.mojom.SmartCardConnection';
mojo.internal.bindings.device.mojom.SmartCardConnection_Disconnect_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection_Disconnect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection_Transmit_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection_Transmit_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection_Control_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection_Control_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection_GetAttrib_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection_GetAttrib_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection_SetAttrib_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection_SetAttrib_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection_Status_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection_Status_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection_BeginTransaction_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnection_BeginTransaction_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardConnectionWatcher = {};
mojo.internal.bindings.device.mojom.SmartCardConnectionWatcher.$interfaceName = 'device.mojom.SmartCardConnectionWatcher';
mojo.internal.bindings.device.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardContext = {};
mojo.internal.bindings.device.mojom.SmartCardContext.$interfaceName = 'device.mojom.SmartCardContext';
mojo.internal.bindings.device.mojom.SmartCardContext_ListReaders_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardContext_ListReaders_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardContext_GetStatusChange_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardContext_GetStatusChange_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardContext_Cancel_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardContext_Cancel_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardContext_Connect_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardContext_Connect_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardContextFactory = {};
mojo.internal.bindings.device.mojom.SmartCardContextFactory.$interfaceName = 'device.mojom.SmartCardContextFactory';
mojo.internal.bindings.device.mojom.SmartCardContextFactory_CreateContext_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.SmartCardContextFactory_CreateContext_ResponseParamsSpec = { $: {} };

// Enum: SmartCardSuccess
mojo.internal.bindings.device.mojom.SmartCardSuccess = {
  kOk: 0,
};

// Enum: SmartCardError
mojo.internal.bindings.device.mojom.SmartCardError = {
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
mojo.internal.bindings.device.mojom.SmartCardShareMode = {
  kShared: 0,
  kExclusive: 1,
  kDirect: 2,
};

// Enum: SmartCardProtocol
mojo.internal.bindings.device.mojom.SmartCardProtocol = {
  kUndefined: 0,
  kT0: 1,
  kT1: 2,
  kRaw: 3,
};

// Enum: SmartCardDisposition
mojo.internal.bindings.device.mojom.SmartCardDisposition = {
  kLeave: 0,
  kReset: 1,
  kUnpower: 2,
  kEject: 3,
};

// Enum: SmartCardConnectionState
mojo.internal.bindings.device.mojom.SmartCardConnectionState = {
  kAbsent: 0,
  kPresent: 1,
  kSwallowed: 2,
  kPowered: 3,
  kNegotiable: 4,
  kSpecific: 5,
};

// Union: SmartCardResult
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.SmartCardResultSpec, 'device.mojom.SmartCardResult', {
      'arg_success': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardSuccessSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardStatusChangeResult
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.SmartCardStatusChangeResultSpec, 'device.mojom.SmartCardStatusChangeResult', {
      'arg_reader_states': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardReaderStateOutSpec.$, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardListReadersResult
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.SmartCardListReadersResultSpec, 'device.mojom.SmartCardListReadersResult', {
      'arg_readers': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.String, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardCreateContextResult
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.SmartCardCreateContextResultSpec, 'device.mojom.SmartCardCreateContextResult', {
      'arg_context': {
        'ordinal': 0,
        'type': mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.SmartCardContextSpec),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardConnectResult
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.SmartCardConnectResultSpec, 'device.mojom.SmartCardConnectResult', {
      'arg_success': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardConnectSuccessSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardDataResult
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.SmartCardDataResultSpec, 'device.mojom.SmartCardDataResult', {
      'arg_data': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardStatusResult
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.SmartCardStatusResultSpec, 'device.mojom.SmartCardStatusResult', {
      'arg_status': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardStatusSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Union: SmartCardTransactionResult
mojo.internal.Union(
    mojo.internal.bindings.device.mojom.SmartCardTransactionResultSpec, 'device.mojom.SmartCardTransactionResult', {
      'arg_transaction': {
        'ordinal': 0,
        'type': mojo.internal.Pointer,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: SmartCardReaderStateFlags
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardReaderStateFlagsSpec, 'device.mojom.SmartCardReaderStateFlags', [
      mojo.internal.StructField('arg_unaware', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ignore', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_changed', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_unknown', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_unavailable', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_empty', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_present', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_exclusive', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_inuse', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_mute', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_unpowered', 1, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SmartCardReaderStateIn
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardReaderStateInSpec, 'device.mojom.SmartCardReaderStateIn', [
      mojo.internal.StructField('arg_reader', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_current_state', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardReaderStateFlagsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_current_count', 16, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SmartCardReaderStateOut
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardReaderStateOutSpec, 'device.mojom.SmartCardReaderStateOut', [
      mojo.internal.StructField('arg_reader', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_state', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardReaderStateFlagsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_answer_to_reset', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_event_count', 24, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SmartCardProtocols
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardProtocolsSpec, 'device.mojom.SmartCardProtocols', [
      mojo.internal.StructField('arg_t0', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_t1', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_raw', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SmartCardStatus
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardStatusSpec, 'device.mojom.SmartCardStatus', [
      mojo.internal.StructField('arg_reader_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardConnectionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_protocol', 16, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardProtocolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_answer_to_reset', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SmartCardConnectSuccess
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnectSuccessSpec, 'device.mojom.SmartCardConnectSuccess', [
      mojo.internal.StructField('arg_connection', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.SmartCardConnectionSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_active_protocol', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardProtocolSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SmartCardTransaction
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardTransaction_EndTransaction_ParamsSpec, 'device.mojom.SmartCardTransaction_EndTransaction_Params', [
      mojo.internal.StructField('arg_disposition', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardDispositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardTransaction_EndTransaction_ResponseParamsSpec, 'device.mojom.SmartCardTransaction_EndTransaction_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.SmartCardResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.SmartCardTransactionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.SmartCardTransactionRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardTransaction';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.SmartCardTransactionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.SmartCardTransactionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  endTransaction(arg_disposition) {
    return this.$.endTransaction(arg_disposition);
  }
};

mojo.internal.bindings.device.mojom.SmartCardTransactionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SmartCardTransaction', [
      { explicit: null },
    ]);
  }

  endTransaction(arg_disposition) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardTransaction_EndTransaction_ParamsSpec,
      mojo.internal.bindings.device.mojom.SmartCardTransaction_EndTransaction_ResponseParamsSpec,
      [arg_disposition],
      false);
  }

};

mojo.internal.bindings.device.mojom.SmartCardTransaction.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.SmartCardTransactionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardTransaction',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.SmartCardTransactionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SmartCardTransaction', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: EndTransaction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardTransaction_EndTransaction_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardTransaction_EndTransaction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.endTransaction');
          const result = this.impl.endTransaction(params.arg_disposition);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SmartCardTransaction_EndTransaction_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EndTransaction FAILED:', e));
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

mojo.internal.bindings.device.mojom.SmartCardTransactionReceiver = mojo.internal.bindings.device.mojom.SmartCardTransactionReceiver;

mojo.internal.bindings.device.mojom.SmartCardTransactionPtr = mojo.internal.bindings.device.mojom.SmartCardTransactionRemote;
mojo.internal.bindings.device.mojom.SmartCardTransactionRequest = mojo.internal.bindings.device.mojom.SmartCardTransactionPendingReceiver;


// Interface: SmartCardConnection
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_Disconnect_ParamsSpec, 'device.mojom.SmartCardConnection_Disconnect_Params', [
      mojo.internal.StructField('arg_disposition', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardDispositionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_Disconnect_ResponseParamsSpec, 'device.mojom.SmartCardConnection_Disconnect_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.SmartCardResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_Transmit_ParamsSpec, 'device.mojom.SmartCardConnection_Transmit_Params', [
      mojo.internal.StructField('arg_protocol', 0, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardProtocolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_Transmit_ResponseParamsSpec, 'device.mojom.SmartCardConnection_Transmit_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.SmartCardDataResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_Control_ParamsSpec, 'device.mojom.SmartCardConnection_Control_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_control_code', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_Control_ResponseParamsSpec, 'device.mojom.SmartCardConnection_Control_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.SmartCardDataResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_GetAttrib_ParamsSpec, 'device.mojom.SmartCardConnection_GetAttrib_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_GetAttrib_ResponseParamsSpec, 'device.mojom.SmartCardConnection_GetAttrib_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.SmartCardDataResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_SetAttrib_ParamsSpec, 'device.mojom.SmartCardConnection_SetAttrib_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_SetAttrib_ResponseParamsSpec, 'device.mojom.SmartCardConnection_SetAttrib_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.SmartCardResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_Status_ParamsSpec, 'device.mojom.SmartCardConnection_Status_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_Status_ResponseParamsSpec, 'device.mojom.SmartCardConnection_Status_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.SmartCardStatusResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_BeginTransaction_ParamsSpec, 'device.mojom.SmartCardConnection_BeginTransaction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnection_BeginTransaction_ResponseParamsSpec, 'device.mojom.SmartCardConnection_BeginTransaction_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.SmartCardTransactionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.SmartCardConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.SmartCardConnectionRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.SmartCardConnectionPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.SmartCardConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  disconnect(arg_disposition) {
    return this.$.disconnect(arg_disposition);
  }
  transmit(arg_protocol, arg_data) {
    return this.$.transmit(arg_protocol, arg_data);
  }
  control(arg_control_code, arg_data) {
    return this.$.control(arg_control_code, arg_data);
  }
  getAttrib(arg_id) {
    return this.$.getAttrib(arg_id);
  }
  setAttrib(arg_id, arg_data) {
    return this.$.setAttrib(arg_id, arg_data);
  }
  status() {
    return this.$.status();
  }
  beginTransaction() {
    return this.$.beginTransaction();
  }
};

mojo.internal.bindings.device.mojom.SmartCardConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SmartCardConnection', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  disconnect(arg_disposition) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardConnection_Disconnect_ParamsSpec,
      mojo.internal.bindings.device.mojom.SmartCardConnection_Disconnect_ResponseParamsSpec,
      [arg_disposition],
      false);
  }

  transmit(arg_protocol, arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardConnection_Transmit_ParamsSpec,
      mojo.internal.bindings.device.mojom.SmartCardConnection_Transmit_ResponseParamsSpec,
      [arg_protocol, arg_data],
      false);
  }

  control(arg_control_code, arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardConnection_Control_ParamsSpec,
      mojo.internal.bindings.device.mojom.SmartCardConnection_Control_ResponseParamsSpec,
      [arg_control_code, arg_data],
      false);
  }

  getAttrib(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardConnection_GetAttrib_ParamsSpec,
      mojo.internal.bindings.device.mojom.SmartCardConnection_GetAttrib_ResponseParamsSpec,
      [arg_id],
      false);
  }

  setAttrib(arg_id, arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardConnection_SetAttrib_ParamsSpec,
      mojo.internal.bindings.device.mojom.SmartCardConnection_SetAttrib_ResponseParamsSpec,
      [arg_id, arg_data],
      false);
  }

  status() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardConnection_Status_ParamsSpec,
      mojo.internal.bindings.device.mojom.SmartCardConnection_Status_ResponseParamsSpec,
      [],
      false);
  }

  beginTransaction() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardConnection_BeginTransaction_ParamsSpec,
      mojo.internal.bindings.device.mojom.SmartCardConnection_BeginTransaction_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.device.mojom.SmartCardConnection.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.SmartCardConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardConnection',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.SmartCardConnectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SmartCardConnection', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: Disconnect
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_Disconnect_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_Transmit_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_Control_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_GetAttrib_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_SetAttrib_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_Status_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_BeginTransaction_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_Disconnect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnect');
          const result = this.impl.disconnect(params.arg_disposition);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SmartCardConnection_Disconnect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Disconnect FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_Transmit_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.transmit');
          const result = this.impl.transmit(params.arg_protocol, params.arg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SmartCardConnection_Transmit_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Transmit FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_Control_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.control');
          const result = this.impl.control(params.arg_control_code, params.arg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SmartCardConnection_Control_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Control FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_GetAttrib_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAttrib');
          const result = this.impl.getAttrib(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SmartCardConnection_GetAttrib_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAttrib FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_SetAttrib_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAttrib');
          const result = this.impl.setAttrib(params.arg_id, params.arg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SmartCardConnection_SetAttrib_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetAttrib FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_Status_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.status');
          const result = this.impl.status();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SmartCardConnection_Status_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Status FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnection_BeginTransaction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.beginTransaction');
          const result = this.impl.beginTransaction();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SmartCardConnection_BeginTransaction_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] BeginTransaction FAILED:', e));
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

mojo.internal.bindings.device.mojom.SmartCardConnectionReceiver = mojo.internal.bindings.device.mojom.SmartCardConnectionReceiver;

mojo.internal.bindings.device.mojom.SmartCardConnectionPtr = mojo.internal.bindings.device.mojom.SmartCardConnectionRemote;
mojo.internal.bindings.device.mojom.SmartCardConnectionRequest = mojo.internal.bindings.device.mojom.SmartCardConnectionPendingReceiver;


// Interface: SmartCardConnectionWatcher
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_ParamsSpec, 'device.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardConnectionWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  notifyConnectionUsed() {
    return this.$.notifyConnectionUsed();
  }
};

mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SmartCardConnectionWatcher', [
      { explicit: null },
    ]);
  }

  notifyConnectionUsed() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.device.mojom.SmartCardConnectionWatcher.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardConnectionWatcher',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SmartCardConnectionWatcher', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: NotifyConnectionUsed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardConnectionWatcher_NotifyConnectionUsed_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherReceiver = mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherReceiver;

mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherPtr = mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherRemote;
mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherRequest = mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherPendingReceiver;


// Interface: SmartCardContext
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardContext_ListReaders_ParamsSpec, 'device.mojom.SmartCardContext_ListReaders_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardContext_ListReaders_ResponseParamsSpec, 'device.mojom.SmartCardContext_ListReaders_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.SmartCardListReadersResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardContext_GetStatusChange_ParamsSpec, 'device.mojom.SmartCardContext_GetStatusChange_Params', [
      mojo.internal.StructField('arg_timeout', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reader_states', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardReaderStateInSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardContext_GetStatusChange_ResponseParamsSpec, 'device.mojom.SmartCardContext_GetStatusChange_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.SmartCardStatusChangeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardContext_Cancel_ParamsSpec, 'device.mojom.SmartCardContext_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardContext_Cancel_ResponseParamsSpec, 'device.mojom.SmartCardContext_Cancel_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.SmartCardResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardContext_Connect_ParamsSpec, 'device.mojom.SmartCardContext_Connect_Params', [
      mojo.internal.StructField('arg_reader', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_share_mode', 8, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardShareModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_preferred_protocols', 16, 0, mojo.internal.bindings.mojo.internal.bindings.device.mojom.SmartCardProtocolsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_connection_watcher', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.SmartCardConnectionWatcherSpec), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardContext_Connect_ResponseParamsSpec, 'device.mojom.SmartCardContext_Connect_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.SmartCardConnectResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.SmartCardContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.SmartCardContextRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.SmartCardContextPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.SmartCardContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  listReaders() {
    return this.$.listReaders();
  }
  getStatusChange(arg_timeout, arg_reader_states) {
    return this.$.getStatusChange(arg_timeout, arg_reader_states);
  }
  cancel() {
    return this.$.cancel();
  }
  connect(arg_reader, arg_share_mode, arg_preferred_protocols, arg_connection_watcher) {
    return this.$.connect(arg_reader, arg_share_mode, arg_preferred_protocols, arg_connection_watcher);
  }
};

mojo.internal.bindings.device.mojom.SmartCardContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SmartCardContext', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  listReaders() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardContext_ListReaders_ParamsSpec,
      mojo.internal.bindings.device.mojom.SmartCardContext_ListReaders_ResponseParamsSpec,
      [],
      false);
  }

  getStatusChange(arg_timeout, arg_reader_states) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardContext_GetStatusChange_ParamsSpec,
      mojo.internal.bindings.device.mojom.SmartCardContext_GetStatusChange_ResponseParamsSpec,
      [arg_timeout, arg_reader_states],
      false);
  }

  cancel() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardContext_Cancel_ParamsSpec,
      mojo.internal.bindings.device.mojom.SmartCardContext_Cancel_ResponseParamsSpec,
      [],
      false);
  }

  connect(arg_reader, arg_share_mode, arg_preferred_protocols, arg_connection_watcher) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardContext_Connect_ParamsSpec,
      mojo.internal.bindings.device.mojom.SmartCardContext_Connect_ResponseParamsSpec,
      [arg_reader, arg_share_mode, arg_preferred_protocols, arg_connection_watcher],
      false);
  }

};

mojo.internal.bindings.device.mojom.SmartCardContext.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.SmartCardContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardContext',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.SmartCardContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SmartCardContext', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: ListReaders
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardContext_ListReaders_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardContext_GetStatusChange_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardContext_Cancel_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardContext_Connect_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardContext_ListReaders_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listReaders');
          const result = this.impl.listReaders();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SmartCardContext_ListReaders_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ListReaders FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardContext_GetStatusChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStatusChange');
          const result = this.impl.getStatusChange(params.arg_timeout, params.arg_reader_states);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SmartCardContext_GetStatusChange_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetStatusChange FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardContext_Cancel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SmartCardContext_Cancel_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Cancel FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardContext_Connect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connect');
          const result = this.impl.connect(params.arg_reader, params.arg_share_mode, params.arg_preferred_protocols, params.arg_connection_watcher);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SmartCardContext_Connect_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Connect FAILED:', e));
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

mojo.internal.bindings.device.mojom.SmartCardContextReceiver = mojo.internal.bindings.device.mojom.SmartCardContextReceiver;

mojo.internal.bindings.device.mojom.SmartCardContextPtr = mojo.internal.bindings.device.mojom.SmartCardContextRemote;
mojo.internal.bindings.device.mojom.SmartCardContextRequest = mojo.internal.bindings.device.mojom.SmartCardContextPendingReceiver;


// Interface: SmartCardContextFactory
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardContextFactory_CreateContext_ParamsSpec, 'device.mojom.SmartCardContextFactory_CreateContext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.SmartCardContextFactory_CreateContext_ResponseParamsSpec, 'device.mojom.SmartCardContextFactory_CreateContext_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.device.mojom.SmartCardCreateContextResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.SmartCardContextFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.SmartCardContextFactoryRemote = class {
  static get $interfaceName() {
    return 'device.mojom.SmartCardContextFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.SmartCardContextFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.SmartCardContextFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createContext() {
    return this.$.createContext();
  }
};

mojo.internal.bindings.device.mojom.SmartCardContextFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SmartCardContextFactory', [
      { explicit: null },
    ]);
  }

  createContext() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.SmartCardContextFactory_CreateContext_ParamsSpec,
      mojo.internal.bindings.device.mojom.SmartCardContextFactory_CreateContext_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.device.mojom.SmartCardContextFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.SmartCardContextFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.SmartCardContextFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.SmartCardContextFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SmartCardContextFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        
        // Try Method 0: CreateContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardContextFactory_CreateContext_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.SmartCardContextFactory_CreateContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createContext');
          const result = this.impl.createContext();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.SmartCardContextFactory_CreateContext_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateContext FAILED:', e));
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

mojo.internal.bindings.device.mojom.SmartCardContextFactoryReceiver = mojo.internal.bindings.device.mojom.SmartCardContextFactoryReceiver;

mojo.internal.bindings.device.mojom.SmartCardContextFactoryPtr = mojo.internal.bindings.device.mojom.SmartCardContextFactoryRemote;
mojo.internal.bindings.device.mojom.SmartCardContextFactoryRequest = mojo.internal.bindings.device.mojom.SmartCardContextFactoryPendingReceiver;

