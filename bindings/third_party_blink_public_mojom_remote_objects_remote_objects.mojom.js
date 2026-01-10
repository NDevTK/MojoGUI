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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.SingletonJavaScriptValueSpec = { $: mojo.internal.Enum() };
blink.mojom.RemoteArrayTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.RemoteInvocationErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.RemoteInvocationArgumentSpec = { $: {} };
blink.mojom.RemoteInvocationResultValueSpec = { $: {} };
blink.mojom.RemoteTypedArraySpec = { $: {} };
blink.mojom.RemoteInvocationResultSpec = { $: {} };
blink.mojom.RemoteObjectHost = {};
blink.mojom.RemoteObjectHost.$interfaceName = 'blink.mojom.RemoteObjectHost';
blink.mojom.RemoteObjectHost_GetObject_ParamsSpec = { $: {} };
blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec = { $: {} };
blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec = { $: {} };
blink.mojom.RemoteObject = {};
blink.mojom.RemoteObject.$interfaceName = 'blink.mojom.RemoteObject';
blink.mojom.RemoteObject_HasMethod_ParamsSpec = { $: {} };
blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec = { $: {} };
blink.mojom.RemoteObject_GetMethods_ParamsSpec = { $: {} };
blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec = { $: {} };
blink.mojom.RemoteObject_InvokeMethod_ParamsSpec = { $: {} };
blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec = { $: {} };
blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec = { $: {} };
blink.mojom.RemoteObjectGatewayFactory = {};
blink.mojom.RemoteObjectGatewayFactory.$interfaceName = 'blink.mojom.RemoteObjectGatewayFactory';
blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec = { $: {} };
blink.mojom.RemoteObjectGateway = {};
blink.mojom.RemoteObjectGateway.$interfaceName = 'blink.mojom.RemoteObjectGateway';
blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec = { $: {} };
blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec = { $: {} };

// Enum: SingletonJavaScriptValue
blink.mojom.SingletonJavaScriptValue = {
  kNull: 0,
  kUndefined: 1,
};

// Enum: RemoteArrayType
blink.mojom.RemoteArrayType = {
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
blink.mojom.RemoteInvocationError = {
  OK: 0,
  METHOD_NOT_FOUND: 1,
  OBJECT_GET_CLASS_BLOCKED: 2,
  EXCEPTION_THROWN: 3,
  NON_ASSIGNABLE_TYPES: 4,
};

// Union: RemoteInvocationArgument
mojo.internal.Union(
    blink.mojom.RemoteInvocationArgumentSpec, 'blink.mojom.RemoteInvocationArgument', {
      'number_value': {
        'ordinal': 0,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'boolean_value': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'string_value': {
        'ordinal': 2,
        'type': mojo_base.mojom.String16Spec.$,
        'nullable': false,
      },
      'singleton_value': {
        'ordinal': 3,
        'type': blink.mojom.SingletonJavaScriptValueSpec.$,
        'nullable': false,
      },
      'array_value': {
        'ordinal': 4,
        'type': mojo.internal.Array(blink.mojom.RemoteInvocationArgumentSpec.$, false),
        'nullable': false,
      },
      'typed_array_value': {
        'ordinal': 5,
        'type': blink.mojom.RemoteTypedArraySpec.$,
        'nullable': false,
      },
      'object_id_value': {
        'ordinal': 6,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: RemoteInvocationResultValue
mojo.internal.Union(
    blink.mojom.RemoteInvocationResultValueSpec, 'blink.mojom.RemoteInvocationResultValue', {
      'number_value': {
        'ordinal': 0,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'boolean_value': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'string_value': {
        'ordinal': 2,
        'type': mojo_base.mojom.String16Spec.$,
        'nullable': false,
      },
      'singleton_value': {
        'ordinal': 3,
        'type': blink.mojom.SingletonJavaScriptValueSpec.$,
        'nullable': false,
      },
      'object_id': {
        'ordinal': 4,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Struct: RemoteTypedArray
mojo.internal.Struct(
    blink.mojom.RemoteTypedArraySpec, 'blink.mojom.RemoteTypedArray', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.RemoteArrayTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer', 8, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RemoteInvocationResult
mojo.internal.Struct(
    blink.mojom.RemoteInvocationResultSpec, 'blink.mojom.RemoteInvocationResult', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.RemoteInvocationErrorSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, blink.mojom.RemoteInvocationResultValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: RemoteObjectHost
mojo.internal.Struct(
    blink.mojom.RemoteObjectHost_GetObject_ParamsSpec, 'blink.mojom.RemoteObjectHost_GetObject_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.RemoteObjectSpec), null, false, 0, undefined),
      mojo.internal.StructField('object_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec, 'blink.mojom.RemoteObjectHost_AcquireObject_Params', [
      mojo.internal.StructField('object_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec, 'blink.mojom.RemoteObjectHost_ReleaseObject_Params', [
      mojo.internal.StructField('object_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.RemoteObjectHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteObjectHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteObjectHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteObjectHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteObjectHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteObjectHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteObjectHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getObject(object_id, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RemoteObjectHost_GetObject_ParamsSpec,
      null,
      [object_id, receiver],
      false);
  }

  acquireObject(object_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec,
      null,
      [object_id],
      false);
  }

  releaseObject(object_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec,
      null,
      [object_id],
      false);
  }

};

blink.mojom.RemoteObjectHost.getRemote = function() {
  let remote = new blink.mojom.RemoteObjectHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteObjectHost',
    'context');
  return remote.$;
};

blink.mojom.RemoteObjectHostReceiver = class {
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
             decoder.decodeStructInline(blink.mojom.RemoteObjectHost_GetObject_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.RemoteObjectHost_GetObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getObject');
          const result = this.impl.getObject(params.object_id, params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acquireObject');
          const result = this.impl.acquireObject(params.object_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.releaseObject');
          const result = this.impl.releaseObject(params.object_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.RemoteObjectHostReceiver = blink.mojom.RemoteObjectHostReceiver;

blink.mojom.RemoteObjectHostPtr = blink.mojom.RemoteObjectHostRemote;
blink.mojom.RemoteObjectHostRequest = blink.mojom.RemoteObjectHostPendingReceiver;


// Interface: RemoteObject
mojo.internal.Struct(
    blink.mojom.RemoteObject_HasMethod_ParamsSpec, 'blink.mojom.RemoteObject_HasMethod_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec, 'blink.mojom.RemoteObject_HasMethod_ResponseParams', [
      mojo.internal.StructField('method_exists', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteObject_GetMethods_ParamsSpec, 'blink.mojom.RemoteObject_GetMethods_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec, 'blink.mojom.RemoteObject_GetMethods_ResponseParams', [
      mojo.internal.StructField('method_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteObject_InvokeMethod_ParamsSpec, 'blink.mojom.RemoteObject_InvokeMethod_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arguments', 8, 0, mojo.internal.Array(blink.mojom.RemoteInvocationArgumentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec, 'blink.mojom.RemoteObject_InvokeMethod_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.RemoteInvocationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec, 'blink.mojom.RemoteObject_NotifyReleasedObject_Params', [
    ],
    [[0, 8]]);

blink.mojom.RemoteObjectPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteObjectRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteObject';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteObjectPendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteObjectRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteObject', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  hasMethod(name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RemoteObject_HasMethod_ParamsSpec,
      blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec,
      [name],
      false);
  }

  getMethods() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.RemoteObject_GetMethods_ParamsSpec,
      blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec,
      [],
      false);
  }

  invokeMethod(name, arguments) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.RemoteObject_InvokeMethod_ParamsSpec,
      blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec,
      [name, arguments],
      false);
  }

  notifyReleasedObject() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.RemoteObject.getRemote = function() {
  let remote = new blink.mojom.RemoteObjectRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteObject',
    'context');
  return remote.$;
};

blink.mojom.RemoteObjectReceiver = class {
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
             decoder.decodeStructInline(blink.mojom.RemoteObject_HasMethod_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.RemoteObject_GetMethods_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.RemoteObject_InvokeMethod_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.RemoteObject_HasMethod_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasMethod');
          const result = this.impl.hasMethod(params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObject_GetMethods_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMethods');
          const result = this.impl.getMethods();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObject_InvokeMethod_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.invokeMethod');
          const result = this.impl.invokeMethod(params.name, params.arguments);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec.$.structSpec);
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

blink.mojom.RemoteObjectReceiver = blink.mojom.RemoteObjectReceiver;

blink.mojom.RemoteObjectPtr = blink.mojom.RemoteObjectRemote;
blink.mojom.RemoteObjectRequest = blink.mojom.RemoteObjectPendingReceiver;


// Interface: RemoteObjectGatewayFactory
mojo.internal.Struct(
    blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec, 'blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.RemoteObjectHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('gateway', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.RemoteObjectGatewaySpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.RemoteObjectGatewayFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteObjectGatewayFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteObjectGatewayFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteObjectGatewayFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteObjectGatewayFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteObjectGatewayFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteObjectGatewayFactory', [
      { explicit: null },
    ]);
  }

  createRemoteObjectGateway(host, gateway) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec,
      null,
      [host, gateway],
      false);
  }

};

blink.mojom.RemoteObjectGatewayFactory.getRemote = function() {
  let remote = new blink.mojom.RemoteObjectGatewayFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteObjectGatewayFactory',
    'context');
  return remote.$;
};

blink.mojom.RemoteObjectGatewayFactoryReceiver = class {
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
             decoder.decodeStructInline(blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRemoteObjectGateway');
          const result = this.impl.createRemoteObjectGateway(params.host, params.gateway);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.RemoteObjectGatewayFactoryReceiver = blink.mojom.RemoteObjectGatewayFactoryReceiver;

blink.mojom.RemoteObjectGatewayFactoryPtr = blink.mojom.RemoteObjectGatewayFactoryRemote;
blink.mojom.RemoteObjectGatewayFactoryRequest = blink.mojom.RemoteObjectGatewayFactoryPendingReceiver;


// Interface: RemoteObjectGateway
mojo.internal.Struct(
    blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec, 'blink.mojom.RemoteObjectGateway_AddNamedObject_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('object_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec, 'blink.mojom.RemoteObjectGateway_RemoveNamedObject_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.RemoteObjectGatewayPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteObjectGatewayRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteObjectGateway';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteObjectGatewayPendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteObjectGatewayRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteObjectGatewayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteObjectGateway', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  addNamedObject(name, object_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec,
      null,
      [name, object_id],
      false);
  }

  removeNamedObject(name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec,
      null,
      [name],
      false);
  }

};

blink.mojom.RemoteObjectGateway.getRemote = function() {
  let remote = new blink.mojom.RemoteObjectGatewayRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteObjectGateway',
    'context');
  return remote.$;
};

blink.mojom.RemoteObjectGatewayReceiver = class {
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
             decoder.decodeStructInline(blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addNamedObject');
          const result = this.impl.addNamedObject(params.name, params.object_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeNamedObject');
          const result = this.impl.removeNamedObject(params.name);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.RemoteObjectGatewayReceiver = blink.mojom.RemoteObjectGatewayReceiver;

blink.mojom.RemoteObjectGatewayPtr = blink.mojom.RemoteObjectGatewayRemote;
blink.mojom.RemoteObjectGatewayRequest = blink.mojom.RemoteObjectGatewayPendingReceiver;

