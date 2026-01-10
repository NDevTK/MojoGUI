// Auto-generated MojoJS binding
// Source: chromium_src/services/metrics/public/mojom/ukm_interface.mojom
// Module: ukm.mojom

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
var ukm = ukm || {};
ukm.mojom = ukm.mojom || {};

ukm.mojom.UkmEntrySpec = { $: {} };
ukm.mojom.UkmRecorderParametersSpec = { $: {} };
ukm.mojom.SingularUkmInterface = {};
ukm.mojom.SingularUkmInterface.$interfaceName = 'ukm.mojom.SingularUkmInterface';
ukm.mojom.SingularUkmInterface_Submit_ParamsSpec = { $: {} };
ukm.mojom.UkmRecorderClientInterface = {};
ukm.mojom.UkmRecorderClientInterface.$interfaceName = 'ukm.mojom.UkmRecorderClientInterface';
ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec = { $: {} };
ukm.mojom.UkmRecorderInterface = {};
ukm.mojom.UkmRecorderInterface.$interfaceName = 'ukm.mojom.UkmRecorderInterface';
ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec = { $: {} };
ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec = { $: {} };
ukm.mojom.UkmRecorderFactory = {};
ukm.mojom.UkmRecorderFactory.$interfaceName = 'ukm.mojom.UkmRecorderFactory';
ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec = { $: {} };

// Struct: UkmEntry
mojo.internal.Struct(
    ukm.mojom.UkmEntrySpec, 'ukm.mojom.UkmEntry', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('event_hash', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('metrics', 16, 0, mojo.internal.Map(mojo.internal.Uint64, mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UkmRecorderParameters
mojo.internal.Struct(
    ukm.mojom.UkmRecorderParametersSpec, 'ukm.mojom.UkmRecorderParameters', [
      mojo.internal.StructField('event_hash_bypass_list', 0, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('is_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SingularUkmInterface
mojo.internal.Struct(
    ukm.mojom.SingularUkmInterface_Submit_ParamsSpec, 'ukm.mojom.SingularUkmInterface_Submit_Params', [
      mojo.internal.StructField('entry', 0, 0, ukm.mojom.UkmEntrySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ukm.mojom.SingularUkmInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.SingularUkmInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.SingularUkmInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.SingularUkmInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.SingularUkmInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.SingularUkmInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SingularUkmInterface', [
      { explicit: null },
    ]);
  }

  submit(entry) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ukm.mojom.SingularUkmInterface_Submit_ParamsSpec,
      null,
      [entry],
      false);
  }

};

ukm.mojom.SingularUkmInterface.getRemote = function() {
  let remote = new ukm.mojom.SingularUkmInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.SingularUkmInterface',
    'context');
  return remote.$;
};

ukm.mojom.SingularUkmInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SingularUkmInterface', [
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
        
        // Try Method 0: Submit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ukm.mojom.SingularUkmInterface_Submit_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Submit (0)');
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
          const params = decoder.decodeStructInline(ukm.mojom.SingularUkmInterface_Submit_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submit');
          const result = this.impl.submit(params.entry);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ukm.mojom.SingularUkmInterfaceReceiver = ukm.mojom.SingularUkmInterfaceReceiver;

ukm.mojom.SingularUkmInterfacePtr = ukm.mojom.SingularUkmInterfaceRemote;
ukm.mojom.SingularUkmInterfaceRequest = ukm.mojom.SingularUkmInterfacePendingReceiver;


// Interface: UkmRecorderClientInterface
mojo.internal.Struct(
    ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec, 'ukm.mojom.UkmRecorderClientInterface_SetParameters_Params', [
      mojo.internal.StructField('params', 0, 0, ukm.mojom.UkmRecorderParametersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ukm.mojom.UkmRecorderClientInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.UkmRecorderClientInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderClientInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.UkmRecorderClientInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.UkmRecorderClientInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.UkmRecorderClientInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UkmRecorderClientInterface', [
      { explicit: null },
    ]);
  }

  setParameters(params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec,
      null,
      [params],
      false);
  }

};

ukm.mojom.UkmRecorderClientInterface.getRemote = function() {
  let remote = new ukm.mojom.UkmRecorderClientInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderClientInterface',
    'context');
  return remote.$;
};

ukm.mojom.UkmRecorderClientInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UkmRecorderClientInterface', [
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
        
        // Try Method 0: SetParameters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetParameters (0)');
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
          const params = decoder.decodeStructInline(ukm.mojom.UkmRecorderClientInterface_SetParameters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setParameters');
          const result = this.impl.setParameters(params.params);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ukm.mojom.UkmRecorderClientInterfaceReceiver = ukm.mojom.UkmRecorderClientInterfaceReceiver;

ukm.mojom.UkmRecorderClientInterfacePtr = ukm.mojom.UkmRecorderClientInterfaceRemote;
ukm.mojom.UkmRecorderClientInterfaceRequest = ukm.mojom.UkmRecorderClientInterfacePendingReceiver;


// Interface: UkmRecorderInterface
mojo.internal.Struct(
    ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec, 'ukm.mojom.UkmRecorderInterface_AddEntry_Params', [
      mojo.internal.StructField('entry', 0, 0, ukm.mojom.UkmEntrySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec, 'ukm.mojom.UkmRecorderInterface_UpdateSourceURL_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

ukm.mojom.UkmRecorderInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.UkmRecorderInterfaceRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.UkmRecorderInterfacePendingReceiver,
      handle);
    this.$ = new ukm.mojom.UkmRecorderInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.UkmRecorderInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UkmRecorderInterface', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  addEntry(entry) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec,
      null,
      [entry],
      false);
  }

  updateSourceURL(source_id, url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec,
      null,
      [source_id, url],
      false);
  }

};

ukm.mojom.UkmRecorderInterface.getRemote = function() {
  let remote = new ukm.mojom.UkmRecorderInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderInterface',
    'context');
  return remote.$;
};

ukm.mojom.UkmRecorderInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UkmRecorderInterface', [
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
        
        // Try Method 0: AddEntry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddEntry (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateSourceURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateSourceURL (1)');
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
          const params = decoder.decodeStructInline(ukm.mojom.UkmRecorderInterface_AddEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addEntry');
          const result = this.impl.addEntry(params.entry);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ukm.mojom.UkmRecorderInterface_UpdateSourceURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateSourceURL');
          const result = this.impl.updateSourceURL(params.source_id, params.url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ukm.mojom.UkmRecorderInterfaceReceiver = ukm.mojom.UkmRecorderInterfaceReceiver;

ukm.mojom.UkmRecorderInterfacePtr = ukm.mojom.UkmRecorderInterfaceRemote;
ukm.mojom.UkmRecorderInterfaceRequest = ukm.mojom.UkmRecorderInterfacePendingReceiver;


// Interface: UkmRecorderFactory
mojo.internal.Struct(
    ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec, 'ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(ukm.mojom.UkmRecorderInterfaceSpec), null, false, 0, undefined),
      mojo.internal.StructField('client_remote', 8, 0, mojo.internal.InterfaceProxy(ukm.mojom.UkmRecorderClientInterfaceSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

ukm.mojom.UkmRecorderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ukm.mojom.UkmRecorderFactoryRemote = class {
  static get $interfaceName() {
    return 'ukm.mojom.UkmRecorderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ukm.mojom.UkmRecorderFactoryPendingReceiver,
      handle);
    this.$ = new ukm.mojom.UkmRecorderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ukm.mojom.UkmRecorderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UkmRecorderFactory', [
      { explicit: null },
    ]);
  }

  createUkmRecorder(receiver, client_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec,
      null,
      [receiver, client_remote],
      false);
  }

};

ukm.mojom.UkmRecorderFactory.getRemote = function() {
  let remote = new ukm.mojom.UkmRecorderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ukm.mojom.UkmRecorderFactory',
    'context');
  return remote.$;
};

ukm.mojom.UkmRecorderFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UkmRecorderFactory', [
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
        
        // Try Method 0: CreateUkmRecorder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateUkmRecorder (0)');
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
          const params = decoder.decodeStructInline(ukm.mojom.UkmRecorderFactory_CreateUkmRecorder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createUkmRecorder');
          const result = this.impl.createUkmRecorder(params.receiver, params.client_remote);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ukm.mojom.UkmRecorderFactoryReceiver = ukm.mojom.UkmRecorderFactoryReceiver;

ukm.mojom.UkmRecorderFactoryPtr = ukm.mojom.UkmRecorderFactoryRemote;
ukm.mojom.UkmRecorderFactoryRequest = ukm.mojom.UkmRecorderFactoryPendingReceiver;

