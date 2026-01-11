// Auto-generated MojoJS binding
 // Source: chromium_src/mojo/public/tools/fuzzers/fuzz.mojom
 // Module: fuzz.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.fuzz = mojo.internal.bindings.fuzz || {};
mojo.internal.bindings.fuzz.mojom = mojo.internal.bindings.fuzz.mojom || {};

mojo.internal.bindings.fuzz.mojom.FuzzEnumSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.fuzz.mojom.FuzzUnionSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzDummyStructSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzStructSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzDummyInterface = {};
mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfaceSpec = { $ : {} };
mojo.internal.bindings.fuzz.mojom.FuzzDummyInterface.$interfaceName = 'fuzz.mojom.FuzzDummyInterface';
mojo.internal.bindings.fuzz.mojom.FuzzDummyInterface_Ping_ParamsSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzInterface = {};
mojo.internal.bindings.fuzz.mojom.FuzzInterfaceSpec = { $ : {} };
mojo.internal.bindings.fuzz.mojom.FuzzInterface.$interfaceName = 'fuzz.mojom.FuzzInterface';
mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasic_ParamsSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicResp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsResp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec = { $: {} };

// Enum: FuzzEnum
mojo.internal.bindings.fuzz.mojom.FuzzEnum = {
  FUZZ_VALUE0: 0,
  FUZZ_VALUE1: 1,
  FUZZ_VALUE2: 2,
};

// Union: FuzzUnion
mojo.internal.Union(
    mojo.internal.bindings.fuzz.mojom.FuzzUnionSpec, 'fuzz.mojom.FuzzUnion', {
      'arg_fuzz_bool': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_fuzz_int8': {
        'ordinal': 1,
        'type': mojo.internal.Int8,
        'nullable': false,
      },
      'arg_fuzz_uint8': {
        'ordinal': 2,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'arg_fuzz_int16': {
        'ordinal': 3,
        'type': mojo.internal.Int16,
        'nullable': false,
      },
      'arg_fuzz_uint16': {
        'ordinal': 4,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'arg_fuzz_int32': {
        'ordinal': 5,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'arg_fuzz_uint32': {
        'ordinal': 6,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_fuzz_int64': {
        'ordinal': 7,
        'type': mojo.internal.Int64,
        'nullable': false,
      },
      'arg_fuzz_uint64': {
        'ordinal': 8,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_fuzz_float': {
        'ordinal': 9,
        'type': mojo.internal.Float,
        'nullable': false,
      },
      'arg_fuzz_double': {
        'ordinal': 10,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'arg_fuzz_string': {
        'ordinal': 11,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_fuzz_bool_array': {
        'ordinal': 12,
        'type': mojo.internal.Array(mojo.internal.Bool, false),
        'nullable': false,
      },
      'arg_fuzz_primitive_array': {
        'ordinal': 13,
        'type': mojo.internal.Array(mojo.internal.Int8, false),
        'nullable': false,
      },
      'arg_fuzz_struct_array': {
        'ordinal': 14,
        'type': mojo.internal.Array(mojo.internal.bindings.fuzz.mojom.FuzzDummyStructSpec.$, false),
        'nullable': false,
      },
      'arg_fuzz_primitive_map': {
        'ordinal': 15,
        'type': mojo.internal.Map(mojo.internal.String, mojo.internal.Int8, false),
        'nullable': false,
      },
      'arg_fuzz_array_map': {
        'ordinal': 16,
        'type': mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false),
        'nullable': false,
      },
      'arg_fuzz_struct_map': {
        'ordinal': 17,
        'type': mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.fuzz.mojom.FuzzDummyStructSpec.$, false),
        'nullable': false,
      },
      'arg_fuzz_union_map': {
        'ordinal': 18,
        'type': mojo.internal.Map(mojo.internal.bindings.fuzz.mojom.FuzzEnumSpec.$, mojo.internal.bindings.fuzz.mojom.FuzzUnionSpec.$, false),
        'nullable': false,
      },
      'arg_fuzz_complex': {
        'ordinal': 19,
        'type': mojo.internal.Array(mojo.internal.Map(mojo.internal.bindings.fuzz.mojom.FuzzEnumSpec.$, mojo.internal.Map(mojo.internal.Int8, mojo.internal.Array(mojo.internal.bindings.fuzz.mojom.FuzzUnionSpec.$, false), false), false), false),
        'nullable': true,
      },
    });

// Struct: FuzzDummyStruct
mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzDummyStructSpec, 'fuzz.mojom.FuzzDummyStruct', [
      mojo.internal.StructField('arg_dummy', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FuzzStruct
mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzStructSpec, 'fuzz.mojom.FuzzStruct', [
      mojo.internal.StructField('arg_fuzz_int64', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_uint64', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_double', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_string', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_bool_array', 32, 0, mojo.internal.Array(mojo.internal.Bool, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_primitive_array', 40, 0, mojo.internal.Array(mojo.internal.Int8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_primitive_map', 48, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Int8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_array_map', 56, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_union_map', 64, 0, mojo.internal.Map(mojo.internal.bindings.fuzz.mojom.FuzzEnumSpec.$, mojo.internal.bindings.fuzz.mojom.FuzzUnionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_union_array', 72, 0, mojo.internal.Array(mojo.internal.bindings.fuzz.mojom.FuzzUnionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_struct_array', 80, 0, mojo.internal.Array(mojo.internal.bindings.fuzz.mojom.FuzzStructSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_nullable_array', 88, 0, mojo.internal.Array(mojo.internal.Int8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_fuzz_complex', 96, 0, mojo.internal.Array(mojo.internal.Map(mojo.internal.bindings.fuzz.mojom.FuzzEnumSpec.$, mojo.internal.Map(mojo.internal.Int8, mojo.internal.Array(mojo.internal.bindings.fuzz.mojom.FuzzStructSpec.$, false), false), false), false), null, true, 0, undefined),
      mojo.internal.StructField('arg_fuzz_int32', 104, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_uint32', 108, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_float', 112, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_int16', 116, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_uint16', 118, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_bool', 120, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_int8', 121, 0, mojo.internal.Int8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fuzz_uint8', 122, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 136]]);

// Interface: FuzzDummyInterface
mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzDummyInterface_Ping_ParamsSpec, 'fuzz.mojom.FuzzDummyInterface_Ping_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfaceRemote = class {
  static get $interfaceName() {
    return 'fuzz.mojom.FuzzDummyInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfacePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  ping() {
    return this.$.ping();
  }
};

mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('fuzz.mojom.FuzzDummyInterface', [
      { explicit: null },
    ]);
  }

  ping() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.fuzz.mojom.FuzzDummyInterface_Ping_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.fuzz.mojom.FuzzDummyInterface.getRemote = function() {
  let remote = new mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'fuzz.mojom.FuzzDummyInterface',
    'context');
  return remote.$;
};

mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('fuzz.mojom.FuzzDummyInterface', [
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
        
        // Try Method 0: Ping
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzDummyInterface_Ping_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Ping (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzDummyInterface_Ping_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.ping');
          const result = this.impl.ping();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfaceReceiver = mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfaceReceiver;

mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfacePtr = mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfaceRemote;
mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfaceRequest = mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfacePendingReceiver;


// Interface: FuzzInterface
mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasic_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasic_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasicResp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicResp_ResponseParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasicResp_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ResponseParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgs_Params', [
      mojo.internal.StructField('arg_a', 0, 0, mojo.internal.bindings.fuzz.mojom.FuzzStructSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_b', 8, 0, mojo.internal.bindings.fuzz.mojom.FuzzStructSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgsResp_Params', [
      mojo.internal.StructField('arg_a', 0, 0, mojo.internal.bindings.fuzz.mojom.FuzzStructSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_b', 8, 0, mojo.internal.bindings.fuzz.mojom.FuzzStructSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsResp_ResponseParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgsResp_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_Params', [
      mojo.internal.StructField('arg_a', 0, 0, mojo.internal.bindings.fuzz.mojom.FuzzStructSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_b', 8, 0, mojo.internal.bindings.fuzz.mojom.FuzzStructSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ResponseParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzAssociated_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.fuzz.mojom.FuzzDummyInterfaceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.fuzz.mojom.FuzzInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.fuzz.mojom.FuzzInterfaceRemote = class {
  static get $interfaceName() {
    return 'fuzz.mojom.FuzzInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.fuzz.mojom.FuzzInterfacePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.fuzz.mojom.FuzzInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  fuzzBasic() {
    return this.$.fuzzBasic();
  }
  fuzzBasicResp() {
    return this.$.fuzzBasicResp();
  }
  fuzzBasicSyncResp() {
    return this.$.fuzzBasicSyncResp();
  }
  fuzzArgs(arg_a, arg_b) {
    return this.$.fuzzArgs(arg_a, arg_b);
  }
  fuzzArgsResp(arg_a, arg_b) {
    return this.$.fuzzArgsResp(arg_a, arg_b);
  }
  fuzzArgsSyncResp(arg_a, arg_b) {
    return this.$.fuzzArgsSyncResp(arg_a, arg_b);
  }
  fuzzAssociated(arg_receiver) {
    return this.$.fuzzAssociated(arg_receiver);
  }
};

mojo.internal.bindings.fuzz.mojom.FuzzInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('fuzz.mojom.FuzzInterface', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  fuzzBasic() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasic_ParamsSpec,
      null,
      [],
      false);
  }

  fuzzBasicResp() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec,
      mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicResp_ResponseParamsSpec,
      [],
      false);
  }

  fuzzBasicSyncResp() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec,
      mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ResponseParamsSpec,
      [],
      false);
  }

  fuzzArgs(arg_a, arg_b) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec,
      null,
      [arg_a, arg_b],
      false);
  }

  fuzzArgsResp(arg_a, arg_b) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec,
      mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsResp_ResponseParamsSpec,
      [arg_a, arg_b],
      false);
  }

  fuzzArgsSyncResp(arg_a, arg_b) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec,
      mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ResponseParamsSpec,
      [arg_a, arg_b],
      false);
  }

  fuzzAssociated(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

};

mojo.internal.bindings.fuzz.mojom.FuzzInterface.getRemote = function() {
  let remote = new mojo.internal.bindings.fuzz.mojom.FuzzInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'fuzz.mojom.FuzzInterface',
    'context');
  return remote.$;
};

mojo.internal.bindings.fuzz.mojom.FuzzInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('fuzz.mojom.FuzzInterface', [
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
        
        // Try Method 0: FuzzBasic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasic_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzBasic (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FuzzBasicResp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzBasicResp (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: FuzzBasicSyncResp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzBasicSyncResp (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: FuzzArgs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzArgs (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: FuzzArgsResp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzArgsResp (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: FuzzArgsSyncResp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzArgsSyncResp (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: FuzzAssociated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzAssociated (6)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasic_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fuzzBasic');
          const result = this.impl.fuzzBasic();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fuzzBasicResp');
          const result = this.impl.fuzzBasicResp();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicResp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FuzzBasicResp FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fuzzBasicSyncResp');
          const result = this.impl.fuzzBasicSyncResp();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FuzzBasicSyncResp FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fuzzArgs');
          const result = this.impl.fuzzArgs(params.arg_a, params.arg_b);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fuzzArgsResp');
          const result = this.impl.fuzzArgsResp(params.arg_a, params.arg_b);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsResp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FuzzArgsResp FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fuzzArgsSyncResp');
          const result = this.impl.fuzzArgsSyncResp(params.arg_a, params.arg_b);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FuzzArgsSyncResp FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fuzzAssociated');
          const result = this.impl.fuzzAssociated(params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.fuzz.mojom.FuzzInterfaceReceiver = mojo.internal.bindings.fuzz.mojom.FuzzInterfaceReceiver;

mojo.internal.bindings.fuzz.mojom.FuzzInterfacePtr = mojo.internal.bindings.fuzz.mojom.FuzzInterfaceRemote;
mojo.internal.bindings.fuzz.mojom.FuzzInterfaceRequest = mojo.internal.bindings.fuzz.mojom.FuzzInterfacePendingReceiver;

