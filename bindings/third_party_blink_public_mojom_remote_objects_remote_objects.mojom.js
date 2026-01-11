// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/remote_objects/remote_objects.mojom
 // Module: blink.mojom

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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.blink.mojom.SingletonJavaScriptValueSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.RemoteArrayTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.RemoteInvocationErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.RemoteInvocationArgumentSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteInvocationResultValueSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteTypedArraySpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteInvocationResultSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteObjectHost = {};
mojo.internal.bindings.blink.mojom.RemoteObjectHost.$interfaceName = 'blink.mojom.RemoteObjectHost';
mojo.internal.bindings.blink.mojom.RemoteObjectHost_GetObject_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteObject = {};
mojo.internal.bindings.blink.mojom.RemoteObject.$interfaceName = 'blink.mojom.RemoteObject';
mojo.internal.bindings.blink.mojom.RemoteObject_HasMethod_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteObject_GetMethods_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteObject_InvokeMethod_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactory = {};
mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactory.$interfaceName = 'blink.mojom.RemoteObjectGatewayFactory';
mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteObjectGateway = {};
mojo.internal.bindings.blink.mojom.RemoteObjectGateway.$interfaceName = 'blink.mojom.RemoteObjectGateway';
mojo.internal.bindings.blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec = { $: {} };

// Enum: SingletonJavaScriptValue
mojo.internal.bindings.blink.mojom.SingletonJavaScriptValue = {
  kNull: 0,
  kUndefined: 1,
};

// Enum: RemoteArrayType
mojo.internal.bindings.blink.mojom.RemoteArrayType = {
  kInt8Array: 1,
  kUint8Array: 2,
  kInt16Array: 3,
  kUint16Array: 4,
  kInt32Array: 5,
  kUint32Array: 6,
  kFloat32Array: 7,
  kFloat64Array: 8,
};

// Enum: RemoteInvocationError
mojo.internal.bindings.blink.mojom.RemoteInvocationError = {
  OK: 0,
  METHOD_NOT_FOUND: 1,
  OBJECT_GET_CLASS_BLOCKED: 2,
  EXCEPTION_THROWN: 3,
  NON_ASSIGNABLE_TYPES: 4,
};

// Union: RemoteInvocationArgument
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.RemoteInvocationArgumentSpec, 'blink.mojom.RemoteInvocationArgument', {
      'arg_number_value': {
        'ordinal': 0,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'arg_boolean_value': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_string_value': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo_base.mojom.String16Spec.$,
        'nullable': false,
      },
      'arg_singleton_value': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.internal.bindings.blink.mojom.SingletonJavaScriptValueSpec.$,
        'nullable': false,
      },
      'arg_array_value': {
        'ordinal': 4,
        'type': mojo.internal.Array(mojo.internal.bindings.blink.mojom.RemoteInvocationArgumentSpec.$, false),
        'nullable': false,
      },
      'arg_typed_array_value': {
        'ordinal': 5,
        'type': mojo.internal.bindings.mojo.internal.bindings.blink.mojom.RemoteTypedArraySpec.$,
        'nullable': false,
      },
      'arg_object_id_value': {
        'ordinal': 6,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: RemoteInvocationResultValue
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.RemoteInvocationResultValueSpec, 'blink.mojom.RemoteInvocationResultValue', {
      'arg_number_value': {
        'ordinal': 0,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'arg_boolean_value': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_string_value': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo_base.mojom.String16Spec.$,
        'nullable': false,
      },
      'arg_singleton_value': {
        'ordinal': 3,
        'type': mojo.internal.bindings.mojo.internal.bindings.blink.mojom.SingletonJavaScriptValueSpec.$,
        'nullable': false,
      },
      'arg_object_id': {
        'ordinal': 4,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Struct: RemoteTypedArray
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteTypedArraySpec, 'blink.mojom.RemoteTypedArray', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.RemoteArrayTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer', 8, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RemoteInvocationResult
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteInvocationResultSpec, 'blink.mojom.RemoteInvocationResult', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.RemoteInvocationErrorSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.blink.mojom.RemoteInvocationResultValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: RemoteObjectHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteObjectHost_GetObject_ParamsSpec, 'blink.mojom.RemoteObjectHost_GetObject_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.RemoteObjectSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_object_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec, 'blink.mojom.RemoteObjectHost_AcquireObject_Params', [
      mojo.internal.StructField('arg_object_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec, 'blink.mojom.RemoteObjectHost_ReleaseObject_Params', [
      mojo.internal.StructField('arg_object_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.RemoteObjectHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.RemoteObjectHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteObjectHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.RemoteObjectHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.RemoteObjectHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getObject(arg_object_id, arg_receiver) {
    return this.$.getObject(arg_object_id, arg_receiver);
  }
  acquireObject(arg_object_id) {
    return this.$.acquireObject(arg_object_id);
  }
  releaseObject(arg_object_id) {
    return this.$.releaseObject(arg_object_id);
  }
};

mojo.internal.bindings.blink.mojom.RemoteObjectHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteObjectHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getObject(arg_object_id, arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.RemoteObjectHost_GetObject_ParamsSpec,
      null,
      [arg_object_id, arg_receiver],
      false);
  }

  acquireObject(arg_object_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec,
      null,
      [arg_object_id],
      false);
  }

  releaseObject(arg_object_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec,
      null,
      [arg_object_id],
      false);
  }

};

mojo.internal.bindings.blink.mojom.RemoteObjectHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.RemoteObjectHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteObjectHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.RemoteObjectHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteObjectHost', [
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
        
        // Try Method 0: GetObject
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObjectHost_GetObject_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetObject (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AcquireObject
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcquireObject (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReleaseObject
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReleaseObject (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObjectHost_GetObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getObject');
          const result = this.impl.getObject(params.arg_object_id, params.arg_receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acquireObject');
          const result = this.impl.acquireObject(params.arg_object_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.releaseObject');
          const result = this.impl.releaseObject(params.arg_object_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.RemoteObjectHostReceiver = mojo.internal.bindings.blink.mojom.RemoteObjectHostReceiver;

mojo.internal.bindings.blink.mojom.RemoteObjectHostPtr = mojo.internal.bindings.blink.mojom.RemoteObjectHostRemote;
mojo.internal.bindings.blink.mojom.RemoteObjectHostRequest = mojo.internal.bindings.blink.mojom.RemoteObjectHostPendingReceiver;


// Interface: RemoteObject
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteObject_HasMethod_ParamsSpec, 'blink.mojom.RemoteObject_HasMethod_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec, 'blink.mojom.RemoteObject_HasMethod_ResponseParams', [
      mojo.internal.StructField('arg_method_exists', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteObject_GetMethods_ParamsSpec, 'blink.mojom.RemoteObject_GetMethods_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec, 'blink.mojom.RemoteObject_GetMethods_ResponseParams', [
      mojo.internal.StructField('arg_method_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteObject_InvokeMethod_ParamsSpec, 'blink.mojom.RemoteObject_InvokeMethod_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_arguments', 8, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.RemoteInvocationArgumentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec, 'blink.mojom.RemoteObject_InvokeMethod_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.RemoteInvocationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec, 'blink.mojom.RemoteObject_NotifyReleasedObject_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.RemoteObjectPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.RemoteObjectRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteObject';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.RemoteObjectPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.RemoteObjectRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  hasMethod(arg_name) {
    return this.$.hasMethod(arg_name);
  }
  getMethods() {
    return this.$.getMethods();
  }
  invokeMethod(arg_name, arg_arguments) {
    return this.$.invokeMethod(arg_name, arg_arguments);
  }
  notifyReleasedObject() {
    return this.$.notifyReleasedObject();
  }
};

mojo.internal.bindings.blink.mojom.RemoteObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteObject', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  hasMethod(arg_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.RemoteObject_HasMethod_ParamsSpec,
      mojo.internal.bindings.blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec,
      [arg_name],
      false);
  }

  getMethods() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.RemoteObject_GetMethods_ParamsSpec,
      mojo.internal.bindings.blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec,
      [],
      false);
  }

  invokeMethod(arg_name, arg_arguments) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.RemoteObject_InvokeMethod_ParamsSpec,
      mojo.internal.bindings.blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec,
      [arg_name, arg_arguments],
      false);
  }

  notifyReleasedObject() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.RemoteObject.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.RemoteObjectRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteObject',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.RemoteObjectReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteObject', [
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
        
        // Try Method 0: HasMethod
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObject_HasMethod_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasMethod (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetMethods
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObject_GetMethods_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMethods (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: InvokeMethod
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObject_InvokeMethod_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InvokeMethod (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: NotifyReleasedObject
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyReleasedObject (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObject_HasMethod_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasMethod');
          const result = this.impl.hasMethod(params.arg_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HasMethod FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObject_GetMethods_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMethods');
          const result = this.impl.getMethods();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMethods FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObject_InvokeMethod_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.invokeMethod');
          const result = this.impl.invokeMethod(params.arg_name, params.arg_arguments);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InvokeMethod FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyReleasedObject');
          const result = this.impl.notifyReleasedObject();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.RemoteObjectReceiver = mojo.internal.bindings.blink.mojom.RemoteObjectReceiver;

mojo.internal.bindings.blink.mojom.RemoteObjectPtr = mojo.internal.bindings.blink.mojom.RemoteObjectRemote;
mojo.internal.bindings.blink.mojom.RemoteObjectRequest = mojo.internal.bindings.blink.mojom.RemoteObjectPendingReceiver;


// Interface: RemoteObjectGatewayFactory
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec, 'blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.RemoteObjectHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_gateway', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.RemoteObjectGatewaySpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteObjectGatewayFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createRemoteObjectGateway(arg_host, arg_gateway) {
    return this.$.createRemoteObjectGateway(arg_host, arg_gateway);
  }
};

mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteObjectGatewayFactory', [
      { explicit: null },
    ]);
  }

  createRemoteObjectGateway(arg_host, arg_gateway) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec,
      null,
      [arg_host, arg_gateway],
      false);
  }

};

mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteObjectGatewayFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteObjectGatewayFactory', [
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
        
        // Try Method 0: CreateRemoteObjectGateway
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRemoteObjectGateway (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRemoteObjectGateway');
          const result = this.impl.createRemoteObjectGateway(params.arg_host, params.arg_gateway);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactoryReceiver = mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactoryReceiver;

mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactoryPtr = mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactoryRemote;
mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactoryRequest = mojo.internal.bindings.blink.mojom.RemoteObjectGatewayFactoryPendingReceiver;


// Interface: RemoteObjectGateway
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec, 'blink.mojom.RemoteObjectGateway_AddNamedObject_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_object_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec, 'blink.mojom.RemoteObjectGateway_RemoveNamedObject_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.RemoteObjectGatewayPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.RemoteObjectGatewayRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteObjectGateway';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.RemoteObjectGatewayPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.RemoteObjectGatewayRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addNamedObject(arg_name, arg_object_id) {
    return this.$.addNamedObject(arg_name, arg_object_id);
  }
  removeNamedObject(arg_name) {
    return this.$.removeNamedObject(arg_name);
  }
};

mojo.internal.bindings.blink.mojom.RemoteObjectGatewayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteObjectGateway', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  addNamedObject(arg_name, arg_object_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec,
      null,
      [arg_name, arg_object_id],
      false);
  }

  removeNamedObject(arg_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec,
      null,
      [arg_name],
      false);
  }

};

mojo.internal.bindings.blink.mojom.RemoteObjectGateway.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.RemoteObjectGatewayRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteObjectGateway',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.RemoteObjectGatewayReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteObjectGateway', [
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
        
        // Try Method 0: AddNamedObject
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddNamedObject (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RemoveNamedObject
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveNamedObject (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addNamedObject');
          const result = this.impl.addNamedObject(params.arg_name, params.arg_object_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeNamedObject');
          const result = this.impl.removeNamedObject(params.arg_name);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.RemoteObjectGatewayReceiver = mojo.internal.bindings.blink.mojom.RemoteObjectGatewayReceiver;

mojo.internal.bindings.blink.mojom.RemoteObjectGatewayPtr = mojo.internal.bindings.blink.mojom.RemoteObjectGatewayRemote;
mojo.internal.bindings.blink.mojom.RemoteObjectGatewayRequest = mojo.internal.bindings.blink.mojom.RemoteObjectGatewayPendingReceiver;

