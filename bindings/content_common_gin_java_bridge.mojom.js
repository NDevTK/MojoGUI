// Auto-generated MojoJS binding
// Source: chromium_src/content/common/gin_java_bridge.mojom
// Module: content.mojom

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
var content = content || {};
content.mojom = content.mojom || {};
var origin_matcher = origin_matcher || {};
var mojo_base = mojo_base || {};

content.mojom.GinJavaBridgeErrorSpec = { $: mojo.internal.Enum() };
content.mojom.GinJavaBridge = {};
content.mojom.GinJavaBridge.$interfaceName = 'content.mojom.GinJavaBridge';
content.mojom.GinJavaBridge_AddNamedObject_ParamsSpec = { $: {} };
content.mojom.GinJavaBridge_RemoveNamedObject_ParamsSpec = { $: {} };
content.mojom.GinJavaBridge_SetHost_ParamsSpec = { $: {} };
content.mojom.GinJavaBridgeRemoteObject = {};
content.mojom.GinJavaBridgeRemoteObject.$interfaceName = 'content.mojom.GinJavaBridgeRemoteObject';
content.mojom.GinJavaBridgeRemoteObject_GetMethods_ParamsSpec = { $: {} };
content.mojom.GinJavaBridgeRemoteObject_GetMethods_ResponseParamsSpec = { $: {} };
content.mojom.GinJavaBridgeRemoteObject_HasMethod_ParamsSpec = { $: {} };
content.mojom.GinJavaBridgeRemoteObject_HasMethod_ResponseParamsSpec = { $: {} };
content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ParamsSpec = { $: {} };
content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ResponseParamsSpec = { $: {} };
content.mojom.GinJavaBridgeHost = {};
content.mojom.GinJavaBridgeHost.$interfaceName = 'content.mojom.GinJavaBridgeHost';
content.mojom.GinJavaBridgeHost_GetObject_ParamsSpec = { $: {} };
content.mojom.GinJavaBridgeHost_ObjectWrapperDeleted_ParamsSpec = { $: {} };

// Enum: GinJavaBridgeError
content.mojom.GinJavaBridgeError = {
  kGinJavaBridgeNoError: 0,
  kGinJavaBridgeUnknownObjectId: 1,
  kGinJavaBridgeObjectIsGone: 2,
  kGinJavaBridgeMethodNotFound: 3,
  kGinJavaBridgeAccessToObjectGetClassIsBlocked: 4,
  kGinJavaBridgeJavaExceptionRaised: 5,
  kGinJavaBridgeNonAssignableTypes: 6,
  kGinJavaBridgeRenderFrameDeleted: 7,
};

// Interface: GinJavaBridge
mojo.internal.Struct(
    content.mojom.GinJavaBridge_AddNamedObject_ParamsSpec, 'content.mojom.GinJavaBridge_AddNamedObject_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('origin_matcher', 8, 0, origin_matcher.mojom.OriginMatcherSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('object_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridge_RemoveNamedObject_ParamsSpec, 'content.mojom.GinJavaBridge_RemoveNamedObject_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridge_SetHost_ParamsSpec, 'content.mojom.GinJavaBridge_SetHost_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceProxy(content.mojom.GinJavaBridgeHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.GinJavaBridgePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.GinJavaBridgeRemote = class {
  static get $interfaceName() {
    return 'content.mojom.GinJavaBridge';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.GinJavaBridgePendingReceiver,
      handle);
    this.$ = new content.mojom.GinJavaBridgeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addNamedObject(name, object_id, origin_matcher) {
    return this.$.addNamedObject(name, object_id, origin_matcher);
  }
  removeNamedObject(name) {
    return this.$.removeNamedObject(name);
  }
  setHost(host) {
    return this.$.setHost(host);
  }
};

content.mojom.GinJavaBridgeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GinJavaBridge', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addNamedObject(name, object_id, origin_matcher) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.GinJavaBridge_AddNamedObject_ParamsSpec,
      null,
      [name, object_id, origin_matcher],
      false);
  }

  removeNamedObject(name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.GinJavaBridge_RemoveNamedObject_ParamsSpec,
      null,
      [name],
      false);
  }

  setHost(host) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.GinJavaBridge_SetHost_ParamsSpec,
      null,
      [host],
      false);
  }

};

content.mojom.GinJavaBridge.getRemote = function() {
  let remote = new content.mojom.GinJavaBridgeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.GinJavaBridge',
    'context');
  return remote.$;
};

content.mojom.GinJavaBridgeReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GinJavaBridge', [
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
        
        // Try Method 0: AddNamedObject
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.GinJavaBridge_AddNamedObject_ParamsSpec);
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
             decoder.decodeStructInline(content.mojom.GinJavaBridge_RemoveNamedObject_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveNamedObject (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.GinJavaBridge_SetHost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHost (2)');
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
          const params = decoder.decodeStructInline(content.mojom.GinJavaBridge_AddNamedObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addNamedObject');
          const result = this.impl.addNamedObject(params.name, params.object_id, params.origin_matcher);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.GinJavaBridge_RemoveNamedObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeNamedObject');
          const result = this.impl.removeNamedObject(params.name);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.GinJavaBridge_SetHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHost');
          const result = this.impl.setHost(params.host);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.GinJavaBridgeReceiver = content.mojom.GinJavaBridgeReceiver;

content.mojom.GinJavaBridgePtr = content.mojom.GinJavaBridgeRemote;
content.mojom.GinJavaBridgeRequest = content.mojom.GinJavaBridgePendingReceiver;


// Interface: GinJavaBridgeRemoteObject
mojo.internal.Struct(
    content.mojom.GinJavaBridgeRemoteObject_GetMethods_ParamsSpec, 'content.mojom.GinJavaBridgeRemoteObject_GetMethods_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridgeRemoteObject_GetMethods_ResponseParamsSpec, 'content.mojom.GinJavaBridgeRemoteObject_GetMethods_ResponseParams', [
      mojo.internal.StructField('method_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridgeRemoteObject_HasMethod_ParamsSpec, 'content.mojom.GinJavaBridgeRemoteObject_HasMethod_Params', [
      mojo.internal.StructField('method_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridgeRemoteObject_HasMethod_ResponseParamsSpec, 'content.mojom.GinJavaBridgeRemoteObject_HasMethod_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ParamsSpec, 'content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_Params', [
      mojo.internal.StructField('method_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arguments', 8, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ResponseParamsSpec, 'content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, content.mojom.GinJavaBridgeErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

content.mojom.GinJavaBridgeRemoteObjectPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.GinJavaBridgeRemoteObjectRemote = class {
  static get $interfaceName() {
    return 'content.mojom.GinJavaBridgeRemoteObject';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.GinJavaBridgeRemoteObjectPendingReceiver,
      handle);
    this.$ = new content.mojom.GinJavaBridgeRemoteObjectRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getMethods() {
    return this.$.getMethods();
  }
  hasMethod(method_name) {
    return this.$.hasMethod(method_name);
  }
  invokeMethod(method_name, arguments) {
    return this.$.invokeMethod(method_name, arguments);
  }
};

content.mojom.GinJavaBridgeRemoteObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GinJavaBridgeRemoteObject', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getMethods() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.GinJavaBridgeRemoteObject_GetMethods_ParamsSpec,
      content.mojom.GinJavaBridgeRemoteObject_GetMethods_ResponseParamsSpec,
      [],
      false);
  }

  hasMethod(method_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.GinJavaBridgeRemoteObject_HasMethod_ParamsSpec,
      content.mojom.GinJavaBridgeRemoteObject_HasMethod_ResponseParamsSpec,
      [method_name],
      false);
  }

  invokeMethod(method_name, arguments) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ParamsSpec,
      content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ResponseParamsSpec,
      [method_name, arguments],
      false);
  }

};

content.mojom.GinJavaBridgeRemoteObject.getRemote = function() {
  let remote = new content.mojom.GinJavaBridgeRemoteObjectRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.GinJavaBridgeRemoteObject',
    'context');
  return remote.$;
};

content.mojom.GinJavaBridgeRemoteObjectReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GinJavaBridgeRemoteObject', [
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
        
        // Try Method 0: GetMethods
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.GinJavaBridgeRemoteObject_GetMethods_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMethods (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: HasMethod
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.GinJavaBridgeRemoteObject_HasMethod_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasMethod (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: InvokeMethod
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InvokeMethod (2)');
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
          const params = decoder.decodeStructInline(content.mojom.GinJavaBridgeRemoteObject_GetMethods_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getMethods');
          const result = this.impl.getMethods();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.GinJavaBridgeRemoteObject_GetMethods_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetMethods FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.GinJavaBridgeRemoteObject_HasMethod_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasMethod');
          const result = this.impl.hasMethod(params.method_name);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.GinJavaBridgeRemoteObject_HasMethod_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HasMethod FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.invokeMethod');
          const result = this.impl.invokeMethod(params.method_name, params.arguments);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InvokeMethod FAILED:', e));
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

content.mojom.GinJavaBridgeRemoteObjectReceiver = content.mojom.GinJavaBridgeRemoteObjectReceiver;

content.mojom.GinJavaBridgeRemoteObjectPtr = content.mojom.GinJavaBridgeRemoteObjectRemote;
content.mojom.GinJavaBridgeRemoteObjectRequest = content.mojom.GinJavaBridgeRemoteObjectPendingReceiver;


// Interface: GinJavaBridgeHost
mojo.internal.Struct(
    content.mojom.GinJavaBridgeHost_GetObject_ParamsSpec, 'content.mojom.GinJavaBridgeHost_GetObject_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(content.mojom.GinJavaBridgeRemoteObjectSpec), null, false, 0, undefined),
      mojo.internal.StructField('object_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridgeHost_ObjectWrapperDeleted_ParamsSpec, 'content.mojom.GinJavaBridgeHost_ObjectWrapperDeleted_Params', [
      mojo.internal.StructField('object_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.GinJavaBridgeHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.GinJavaBridgeHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.GinJavaBridgeHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.GinJavaBridgeHostPendingReceiver,
      handle);
    this.$ = new content.mojom.GinJavaBridgeHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getObject(object_id, receiver) {
    return this.$.getObject(object_id, receiver);
  }
  objectWrapperDeleted(object_id) {
    return this.$.objectWrapperDeleted(object_id);
  }
};

content.mojom.GinJavaBridgeHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GinJavaBridgeHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  getObject(object_id, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.GinJavaBridgeHost_GetObject_ParamsSpec,
      null,
      [object_id, receiver],
      false);
  }

  objectWrapperDeleted(object_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.GinJavaBridgeHost_ObjectWrapperDeleted_ParamsSpec,
      null,
      [object_id],
      false);
  }

};

content.mojom.GinJavaBridgeHost.getRemote = function() {
  let remote = new content.mojom.GinJavaBridgeHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.GinJavaBridgeHost',
    'context');
  return remote.$;
};

content.mojom.GinJavaBridgeHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GinJavaBridgeHost', [
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
             decoder.decodeStructInline(content.mojom.GinJavaBridgeHost_GetObject_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetObject (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ObjectWrapperDeleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.GinJavaBridgeHost_ObjectWrapperDeleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ObjectWrapperDeleted (1)');
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
          const params = decoder.decodeStructInline(content.mojom.GinJavaBridgeHost_GetObject_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getObject');
          const result = this.impl.getObject(params.object_id, params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.GinJavaBridgeHost_ObjectWrapperDeleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.objectWrapperDeleted');
          const result = this.impl.objectWrapperDeleted(params.object_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.GinJavaBridgeHostReceiver = content.mojom.GinJavaBridgeHostReceiver;

content.mojom.GinJavaBridgeHostPtr = content.mojom.GinJavaBridgeHostRemote;
content.mojom.GinJavaBridgeHostRequest = content.mojom.GinJavaBridgeHostPendingReceiver;

