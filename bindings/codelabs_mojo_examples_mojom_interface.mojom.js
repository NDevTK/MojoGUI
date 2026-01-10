// Auto-generated MojoJS binding
// Source: chromium_src/codelabs/mojo_examples/mojom/interface.mojom
// Module: codelabs.mojom

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
var codelabs = codelabs || {};
codelabs.mojom = codelabs.mojom || {};

codelabs.mojom.ObjectA = {};
codelabs.mojom.ObjectA.$interfaceName = 'codelabs.mojom.ObjectA';
codelabs.mojom.ObjectA_DoA_ParamsSpec = { $: {} };
codelabs.mojom.ObjectB = {};
codelabs.mojom.ObjectB.$interfaceName = 'codelabs.mojom.ObjectB';
codelabs.mojom.ObjectB_DoB_ParamsSpec = { $: {} };
codelabs.mojom.AssociatedProcess = {};
codelabs.mojom.AssociatedProcess.$interfaceName = 'codelabs.mojom.AssociatedProcess';
codelabs.mojom.AssociatedProcess_SetProcess_ParamsSpec = { $: {} };
codelabs.mojom.GenericInterface = {};
codelabs.mojom.GenericInterface.$interfaceName = 'codelabs.mojom.GenericInterface';
codelabs.mojom.Process = {};
codelabs.mojom.Process.$interfaceName = 'codelabs.mojom.Process';
codelabs.mojom.Process_SayHello_ParamsSpec = { $: {} };
codelabs.mojom.Process_GetAssociatedInterface_ParamsSpec = { $: {} };

// Interface: ObjectA
mojo.internal.Struct(
    codelabs.mojom.ObjectA_DoA_ParamsSpec, 'codelabs.mojom.ObjectA_DoA_Params', [
    ],
    [[0, 8]]);

codelabs.mojom.ObjectAPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.ObjectARemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.ObjectA';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.ObjectAPendingReceiver,
      handle);
    this.$ = new codelabs.mojom.ObjectARemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.ObjectARemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ObjectA', [
      { explicit: null },
    ]);
  }

  doA() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      codelabs.mojom.ObjectA_DoA_ParamsSpec,
      null,
      [],
      false);
  }

};

codelabs.mojom.ObjectA.getRemote = function() {
  let remote = new codelabs.mojom.ObjectARemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.ObjectA',
    'context');
  return remote.$;
};

codelabs.mojom.ObjectAReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ObjectA', [
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
        
        // Try Method 0: DoA
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(codelabs.mojom.ObjectA_DoA_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoA (0)');
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
          const params = decoder.decodeStructInline(codelabs.mojom.ObjectA_DoA_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.doA');
          const result = this.impl.doA();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

codelabs.mojom.ObjectAReceiver = codelabs.mojom.ObjectAReceiver;

codelabs.mojom.ObjectAPtr = codelabs.mojom.ObjectARemote;
codelabs.mojom.ObjectARequest = codelabs.mojom.ObjectAPendingReceiver;


// Interface: ObjectB
mojo.internal.Struct(
    codelabs.mojom.ObjectB_DoB_ParamsSpec, 'codelabs.mojom.ObjectB_DoB_Params', [
    ],
    [[0, 8]]);

codelabs.mojom.ObjectBPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.ObjectBRemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.ObjectB';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.ObjectBPendingReceiver,
      handle);
    this.$ = new codelabs.mojom.ObjectBRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.ObjectBRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ObjectB', [
      { explicit: null },
    ]);
  }

  doB() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      codelabs.mojom.ObjectB_DoB_ParamsSpec,
      null,
      [],
      false);
  }

};

codelabs.mojom.ObjectB.getRemote = function() {
  let remote = new codelabs.mojom.ObjectBRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.ObjectB',
    'context');
  return remote.$;
};

codelabs.mojom.ObjectBReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ObjectB', [
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
        
        // Try Method 0: DoB
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(codelabs.mojom.ObjectB_DoB_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoB (0)');
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
          const params = decoder.decodeStructInline(codelabs.mojom.ObjectB_DoB_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.doB');
          const result = this.impl.doB();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

codelabs.mojom.ObjectBReceiver = codelabs.mojom.ObjectBReceiver;

codelabs.mojom.ObjectBPtr = codelabs.mojom.ObjectBRemote;
codelabs.mojom.ObjectBRequest = codelabs.mojom.ObjectBPendingReceiver;


// Interface: AssociatedProcess
mojo.internal.Struct(
    codelabs.mojom.AssociatedProcess_SetProcess_ParamsSpec, 'codelabs.mojom.AssociatedProcess_SetProcess_Params', [
      mojo.internal.StructField('process', 0, 0, mojo.internal.InterfaceRequest(codelabs.mojom.ProcessSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

codelabs.mojom.AssociatedProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.AssociatedProcessRemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.AssociatedProcess';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.AssociatedProcessPendingReceiver,
      handle);
    this.$ = new codelabs.mojom.AssociatedProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.AssociatedProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AssociatedProcess', [
      { explicit: null },
    ]);
  }

  setProcess(process) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      codelabs.mojom.AssociatedProcess_SetProcess_ParamsSpec,
      null,
      [process],
      false);
  }

};

codelabs.mojom.AssociatedProcess.getRemote = function() {
  let remote = new codelabs.mojom.AssociatedProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.AssociatedProcess',
    'context');
  return remote.$;
};

codelabs.mojom.AssociatedProcessReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AssociatedProcess', [
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
        
        // Try Method 0: SetProcess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(codelabs.mojom.AssociatedProcess_SetProcess_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProcess (0)');
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
          const params = decoder.decodeStructInline(codelabs.mojom.AssociatedProcess_SetProcess_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProcess');
          const result = this.impl.setProcess(params.process);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

codelabs.mojom.AssociatedProcessReceiver = codelabs.mojom.AssociatedProcessReceiver;

codelabs.mojom.AssociatedProcessPtr = codelabs.mojom.AssociatedProcessRemote;
codelabs.mojom.AssociatedProcessRequest = codelabs.mojom.AssociatedProcessPendingReceiver;


// Interface: GenericInterface
codelabs.mojom.GenericInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.GenericInterfaceRemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.GenericInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.GenericInterfacePendingReceiver,
      handle);
    this.$ = new codelabs.mojom.GenericInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.GenericInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GenericInterface', [
    ]);
  }

};

codelabs.mojom.GenericInterface.getRemote = function() {
  let remote = new codelabs.mojom.GenericInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.GenericInterface',
    'context');
  return remote.$;
};

codelabs.mojom.GenericInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GenericInterface', [
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

codelabs.mojom.GenericInterfaceReceiver = codelabs.mojom.GenericInterfaceReceiver;

codelabs.mojom.GenericInterfacePtr = codelabs.mojom.GenericInterfaceRemote;
codelabs.mojom.GenericInterfaceRequest = codelabs.mojom.GenericInterfacePendingReceiver;


// Interface: Process
mojo.internal.Struct(
    codelabs.mojom.Process_SayHello_ParamsSpec, 'codelabs.mojom.Process_SayHello_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    codelabs.mojom.Process_GetAssociatedInterface_ParamsSpec, 'codelabs.mojom.Process_GetAssociatedInterface_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

codelabs.mojom.ProcessPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

codelabs.mojom.ProcessRemote = class {
  static get $interfaceName() {
    return 'codelabs.mojom.Process';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      codelabs.mojom.ProcessPendingReceiver,
      handle);
    this.$ = new codelabs.mojom.ProcessRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

codelabs.mojom.ProcessRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Process', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  sayHello() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      codelabs.mojom.Process_SayHello_ParamsSpec,
      null,
      [],
      false);
  }

  getAssociatedInterface(name, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      codelabs.mojom.Process_GetAssociatedInterface_ParamsSpec,
      null,
      [name, receiver],
      false);
  }

};

codelabs.mojom.Process.getRemote = function() {
  let remote = new codelabs.mojom.ProcessRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'codelabs.mojom.Process',
    'context');
  return remote.$;
};

codelabs.mojom.ProcessReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Process', [
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
        
        // Try Method 0: SayHello
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(codelabs.mojom.Process_SayHello_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SayHello (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetAssociatedInterface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(codelabs.mojom.Process_GetAssociatedInterface_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAssociatedInterface (1)');
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
          const params = decoder.decodeStructInline(codelabs.mojom.Process_SayHello_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sayHello');
          const result = this.impl.sayHello();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(codelabs.mojom.Process_GetAssociatedInterface_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAssociatedInterface');
          const result = this.impl.getAssociatedInterface(params.name, params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

codelabs.mojom.ProcessReceiver = codelabs.mojom.ProcessReceiver;

codelabs.mojom.ProcessPtr = codelabs.mojom.ProcessRemote;
codelabs.mojom.ProcessRequest = codelabs.mojom.ProcessPendingReceiver;

