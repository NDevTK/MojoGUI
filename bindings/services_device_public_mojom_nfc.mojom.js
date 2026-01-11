// Auto-generated MojoJS binding
 // Source: chromium_src/services/device/public/mojom/nfc.mojom
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

mojo.internal.bindings.device.mojom.NDEFErrorTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.NDEFRecordTypeCategorySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.NSRawTypeNameFormatSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.device.mojom.NDEFErrorSpec = { $: {} };
mojo.internal.bindings.device.mojom.NDEFRecordSpec = { $: {} };
mojo.internal.bindings.device.mojom.NDEFMessageSpec = { $: {} };
mojo.internal.bindings.device.mojom.NDEFRawRecordSpec = { $: {} };
mojo.internal.bindings.device.mojom.NDEFRawMessageSpec = { $: {} };
mojo.internal.bindings.device.mojom.NDEFWriteOptionsSpec = { $: {} };
mojo.internal.bindings.device.mojom.NFC = {};
mojo.internal.bindings.device.mojom.NFC.$interfaceName = 'device.mojom.NFC';
mojo.internal.bindings.device.mojom.NFC_SetClient_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.NFC_Push_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.NFC_Push_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.NFC_CancelPush_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.NFC_MakeReadOnly_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.NFC_MakeReadOnly_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.NFC_CancelMakeReadOnly_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.NFC_Watch_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.NFC_Watch_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.NFC_CancelWatch_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.NFCClient = {};
mojo.internal.bindings.device.mojom.NFCClient.$interfaceName = 'device.mojom.NFCClient';
mojo.internal.bindings.device.mojom.NFCClient_OnWatch_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.NFCClient_OnError_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.RawNFCClient = {};
mojo.internal.bindings.device.mojom.RawNFCClient.$interfaceName = 'device.mojom.RawNFCClient';
mojo.internal.bindings.device.mojom.RawNFCClient_OnWatch_ParamsSpec = { $: {} };
mojo.internal.bindings.device.mojom.RawNFCClient_OnError_ParamsSpec = { $: {} };

// Enum: NDEFErrorType
mojo.internal.bindings.device.mojom.NDEFErrorType = {
  NOT_ALLOWED: 0,
  NOT_SUPPORTED: 1,
  NOT_READABLE: 2,
  INVALID_MESSAGE: 3,
  OPERATION_CANCELLED: 4,
  IO_ERROR: 5,
};

// Enum: NDEFRecordTypeCategory
mojo.internal.bindings.device.mojom.NDEFRecordTypeCategory = {
  kStandardized: 0,
  kExternal: 1,
  kLocal: 2,
};

// Enum: NSRawTypeNameFormat
mojo.internal.bindings.device.mojom.NSRawTypeNameFormat = {
  kAbsoluteURI: 0,
  kEmpty: 1,
  kMedia: 2,
  kExternal: 3,
  kWellKnown: 4,
  kUnchanged: 5,
  kUnknown: 6,
};

// Struct: NDEFError
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NDEFErrorSpec, 'device.mojom.NDEFError', [
      mojo.internal.StructField('arg_error_type', 0, 0, mojo.internal.bindings.device.mojom.NDEFErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NDEFRecord
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NDEFRecordSpec, 'device.mojom.NDEFRecord', [
      mojo.internal.StructField('arg_category', 0, 0, mojo.internal.bindings.device.mojom.NDEFRecordTypeCategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_record_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_media_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_id', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_encoding', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_lang', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_data', 48, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_payload_message', 56, 0, mojo.internal.bindings.device.mojom.NDEFMessageSpec.$, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: NDEFMessage
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NDEFMessageSpec, 'device.mojom.NDEFMessage', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.NDEFRecordSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NDEFRawRecord
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NDEFRawRecordSpec, 'device.mojom.NDEFRawRecord', [
      mojo.internal.StructField('arg_identifier', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_payload', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_type_name_format', 24, 0, mojo.internal.bindings.device.mojom.NSRawTypeNameFormatSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: NDEFRawMessage
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NDEFRawMessageSpec, 'device.mojom.NDEFRawMessage', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.bindings.device.mojom.NDEFRawRecordSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NDEFWriteOptions
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NDEFWriteOptionsSpec, 'device.mojom.NDEFWriteOptions', [
      mojo.internal.StructField('arg_overwrite', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: NFC
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NFC_SetClient_ParamsSpec, 'device.mojom.NFC_SetClient_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.device.mojom.NFCClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NFC_Push_ParamsSpec, 'device.mojom.NFC_Push_Params', [
      mojo.internal.StructField('arg_message', 0, 0, mojo.internal.bindings.device.mojom.NDEFMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.device.mojom.NDEFWriteOptionsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NFC_Push_ResponseParamsSpec, 'device.mojom.NFC_Push_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.device.mojom.NDEFErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NFC_CancelPush_ParamsSpec, 'device.mojom.NFC_CancelPush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NFC_MakeReadOnly_ParamsSpec, 'device.mojom.NFC_MakeReadOnly_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NFC_MakeReadOnly_ResponseParamsSpec, 'device.mojom.NFC_MakeReadOnly_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.device.mojom.NDEFErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NFC_CancelMakeReadOnly_ParamsSpec, 'device.mojom.NFC_CancelMakeReadOnly_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NFC_Watch_ParamsSpec, 'device.mojom.NFC_Watch_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NFC_Watch_ResponseParamsSpec, 'device.mojom.NFC_Watch_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.device.mojom.NDEFErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NFC_CancelWatch_ParamsSpec, 'device.mojom.NFC_CancelWatch_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.NFCPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.NFCRemote = class {
  static get $interfaceName() {
    return 'device.mojom.NFC';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.NFCPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.NFCRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setClient(arg_client) {
    return this.$.setClient(arg_client);
  }
  push(arg_message, arg_options) {
    return this.$.push(arg_message, arg_options);
  }
  cancelPush() {
    return this.$.cancelPush();
  }
  makeReadOnly() {
    return this.$.makeReadOnly();
  }
  cancelMakeReadOnly() {
    return this.$.cancelMakeReadOnly();
  }
  watch(arg_id) {
    return this.$.watch(arg_id);
  }
  cancelWatch(arg_id) {
    return this.$.cancelWatch(arg_id);
  }
};

mojo.internal.bindings.device.mojom.NFCRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NFC', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setClient(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.NFC_SetClient_ParamsSpec,
      null,
      [arg_client],
      false);
  }

  push(arg_message, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.NFC_Push_ParamsSpec,
      mojo.internal.bindings.device.mojom.NFC_Push_ResponseParamsSpec,
      [arg_message, arg_options],
      false);
  }

  cancelPush() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.device.mojom.NFC_CancelPush_ParamsSpec,
      null,
      [],
      false);
  }

  makeReadOnly() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.device.mojom.NFC_MakeReadOnly_ParamsSpec,
      mojo.internal.bindings.device.mojom.NFC_MakeReadOnly_ResponseParamsSpec,
      [],
      false);
  }

  cancelMakeReadOnly() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.device.mojom.NFC_CancelMakeReadOnly_ParamsSpec,
      null,
      [],
      false);
  }

  watch(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.device.mojom.NFC_Watch_ParamsSpec,
      mojo.internal.bindings.device.mojom.NFC_Watch_ResponseParamsSpec,
      [arg_id],
      false);
  }

  cancelWatch(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.device.mojom.NFC_CancelWatch_ParamsSpec,
      null,
      [arg_id],
      false);
  }

};

mojo.internal.bindings.device.mojom.NFC.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.NFCRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.NFC',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.NFCReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NFC', [
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
        
        // Try Method 0: SetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_SetClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Push
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_Push_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Push (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CancelPush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_CancelPush_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelPush (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: MakeReadOnly
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_MakeReadOnly_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MakeReadOnly (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CancelMakeReadOnly
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_CancelMakeReadOnly_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelMakeReadOnly (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Watch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_Watch_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Watch (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CancelWatch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_CancelWatch_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelWatch (6)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_SetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.arg_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_Push_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.push');
          const result = this.impl.push(params.arg_message, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.NFC_Push_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Push FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_CancelPush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelPush');
          const result = this.impl.cancelPush();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_MakeReadOnly_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.makeReadOnly');
          const result = this.impl.makeReadOnly();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.NFC_MakeReadOnly_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] MakeReadOnly FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_CancelMakeReadOnly_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelMakeReadOnly');
          const result = this.impl.cancelMakeReadOnly();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_Watch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.watch');
          const result = this.impl.watch(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.device.mojom.NFC_Watch_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Watch FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFC_CancelWatch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelWatch');
          const result = this.impl.cancelWatch(params.arg_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.NFCReceiver = mojo.internal.bindings.device.mojom.NFCReceiver;

mojo.internal.bindings.device.mojom.NFCPtr = mojo.internal.bindings.device.mojom.NFCRemote;
mojo.internal.bindings.device.mojom.NFCRequest = mojo.internal.bindings.device.mojom.NFCPendingReceiver;


// Interface: NFCClient
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NFCClient_OnWatch_ParamsSpec, 'device.mojom.NFCClient_OnWatch_Params', [
      mojo.internal.StructField('arg_watch_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_serial_number', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_message', 16, 0, mojo.internal.bindings.device.mojom.NDEFMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.NFCClient_OnError_ParamsSpec, 'device.mojom.NFCClient_OnError_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.device.mojom.NDEFErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.NFCClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.NFCClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.NFCClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.NFCClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.NFCClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onWatch(arg_watch_ids, arg_serial_number, arg_message) {
    return this.$.onWatch(arg_watch_ids, arg_serial_number, arg_message);
  }
  onError(arg_error) {
    return this.$.onError(arg_error);
  }
};

mojo.internal.bindings.device.mojom.NFCClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NFCClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onWatch(arg_watch_ids, arg_serial_number, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.NFCClient_OnWatch_ParamsSpec,
      null,
      [arg_watch_ids, arg_serial_number, arg_message],
      false);
  }

  onError(arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.NFCClient_OnError_ParamsSpec,
      null,
      [arg_error],
      false);
  }

};

mojo.internal.bindings.device.mojom.NFCClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.NFCClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.NFCClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.NFCClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NFCClient', [
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
        
        // Try Method 0: OnWatch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFCClient_OnWatch_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWatch (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFCClient_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFCClient_OnWatch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWatch');
          const result = this.impl.onWatch(params.arg_watch_ids, params.arg_serial_number, params.arg_message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.NFCClient_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.arg_error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.NFCClientReceiver = mojo.internal.bindings.device.mojom.NFCClientReceiver;

mojo.internal.bindings.device.mojom.NFCClientPtr = mojo.internal.bindings.device.mojom.NFCClientRemote;
mojo.internal.bindings.device.mojom.NFCClientRequest = mojo.internal.bindings.device.mojom.NFCClientPendingReceiver;


// Interface: RawNFCClient
mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.RawNFCClient_OnWatch_ParamsSpec, 'device.mojom.RawNFCClient_OnWatch_Params', [
      mojo.internal.StructField('arg_watch_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.bindings.device.mojom.NDEFRawMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.device.mojom.RawNFCClient_OnError_ParamsSpec, 'device.mojom.RawNFCClient_OnError_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.device.mojom.NDEFErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.device.mojom.RawNFCClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.device.mojom.RawNFCClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.RawNFCClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.device.mojom.RawNFCClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.device.mojom.RawNFCClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onWatch(arg_watch_ids, arg_message) {
    return this.$.onWatch(arg_watch_ids, arg_message);
  }
  onError(arg_error) {
    return this.$.onError(arg_error);
  }
};

mojo.internal.bindings.device.mojom.RawNFCClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RawNFCClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onWatch(arg_watch_ids, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.device.mojom.RawNFCClient_OnWatch_ParamsSpec,
      null,
      [arg_watch_ids, arg_message],
      false);
  }

  onError(arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.device.mojom.RawNFCClient_OnError_ParamsSpec,
      null,
      [arg_error],
      false);
  }

};

mojo.internal.bindings.device.mojom.RawNFCClient.getRemote = function() {
  let remote = new mojo.internal.bindings.device.mojom.RawNFCClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.RawNFCClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.device.mojom.RawNFCClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RawNFCClient', [
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
        
        // Try Method 0: OnWatch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.RawNFCClient_OnWatch_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWatch (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.device.mojom.RawNFCClient_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.RawNFCClient_OnWatch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWatch');
          const result = this.impl.onWatch(params.arg_watch_ids, params.arg_message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.device.mojom.RawNFCClient_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.arg_error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.device.mojom.RawNFCClientReceiver = mojo.internal.bindings.device.mojom.RawNFCClientReceiver;

mojo.internal.bindings.device.mojom.RawNFCClientPtr = mojo.internal.bindings.device.mojom.RawNFCClientRemote;
mojo.internal.bindings.device.mojom.RawNFCClientRequest = mojo.internal.bindings.device.mojom.RawNFCClientPendingReceiver;

