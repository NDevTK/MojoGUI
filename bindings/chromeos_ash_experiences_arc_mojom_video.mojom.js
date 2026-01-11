// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/video.mojom
// Module: arc.mojom

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
var arc = arc || {};
arc.mojom = arc.mojom || {};
var chromeos = chromeos || {};
var sandbox = sandbox || {};

arc.mojom.VideoHost = {};
arc.mojom.VideoHost.$interfaceName = 'arc.mojom.VideoHost';
arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ParamsSpec = { $: {} };
arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ResponseParamsSpec = { $: {} };
arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ParamsSpec = { $: {} };
arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ResponseParamsSpec = { $: {} };
arc.mojom.VideoInstance = {};
arc.mojom.VideoInstance.$interfaceName = 'arc.mojom.VideoInstance';
arc.mojom.VideoInstance_Init_ParamsSpec = { $: {} };
arc.mojom.VideoInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.VideoAcceleratorFactory = {};
arc.mojom.VideoAcceleratorFactory.$interfaceName = 'arc.mojom.VideoAcceleratorFactory';
arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_ParamsSpec = { $: {} };
arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec = { $: {} };
arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec = { $: {} };
arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_ParamsSpec = { $: {} };

// Interface: VideoHost
mojo.internal.Struct(
    arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ParamsSpec, 'arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ResponseParamsSpec, 'arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('channel_handle', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ParamsSpec, 'arc.mojom.VideoHost_CreateVideoAcceleratorFactory_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ResponseParamsSpec, 'arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ResponseParams', [
      mojo.internal.StructField('remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.VideoAcceleratorFactorySpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.VideoHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onBootstrapVideoAcceleratorFactory() {
    return this.$.onBootstrapVideoAcceleratorFactory();
  }
  createVideoAcceleratorFactory() {
    return this.$.createVideoAcceleratorFactory();
  }
};

arc.mojom.VideoHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoHost', [
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  onBootstrapVideoAcceleratorFactory() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ParamsSpec,
      arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ResponseParamsSpec,
      [],
      false);
  }

  createVideoAcceleratorFactory() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ParamsSpec,
      arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.VideoHost.getRemote = function() {
  let remote = new arc.mojom.VideoHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoHost',
    'context');
  return remote.$;
};

arc.mojom.VideoHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoHost', [
      { explicit: 1 },
      { explicit: 2 },
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
        
        // Try Method 0: OnBootstrapVideoAcceleratorFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBootstrapVideoAcceleratorFactory (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateVideoAcceleratorFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateVideoAcceleratorFactory (1)');
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
          const params = decoder.decodeStructInline(arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBootstrapVideoAcceleratorFactory');
          const result = this.impl.onBootstrapVideoAcceleratorFactory();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoHost_OnBootstrapVideoAcceleratorFactory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnBootstrapVideoAcceleratorFactory FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createVideoAcceleratorFactory');
          const result = this.impl.createVideoAcceleratorFactory();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoHost_CreateVideoAcceleratorFactory_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateVideoAcceleratorFactory FAILED:', e));
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

arc.mojom.VideoHostReceiver = arc.mojom.VideoHostReceiver;

arc.mojom.VideoHostPtr = arc.mojom.VideoHostRemote;
arc.mojom.VideoHostRequest = arc.mojom.VideoHostPendingReceiver;


// Interface: VideoInstance
mojo.internal.Struct(
    arc.mojom.VideoInstance_Init_ParamsSpec, 'arc.mojom.VideoInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.VideoHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoInstance_Init_ResponseParamsSpec, 'arc.mojom.VideoInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.VideoInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(host_remote) {
    return this.$.init(host_remote);
  }
};

arc.mojom.VideoInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoInstance', [
      { explicit: 1 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.VideoInstance_Init_ParamsSpec,
      arc.mojom.VideoInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.VideoInstance.getRemote = function() {
  let remote = new arc.mojom.VideoInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoInstance',
    'context');
  return remote.$;
};

arc.mojom.VideoInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoInstance', [
      { explicit: 1 },
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
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
          const params = decoder.decodeStructInline(arc.mojom.VideoInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VideoInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
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

arc.mojom.VideoInstanceReceiver = arc.mojom.VideoInstanceReceiver;

arc.mojom.VideoInstancePtr = arc.mojom.VideoInstanceRemote;
arc.mojom.VideoInstanceRequest = arc.mojom.VideoInstancePendingReceiver;


// Interface: VideoAcceleratorFactory
mojo.internal.Struct(
    arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_ParamsSpec, 'arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_Params', [
      mojo.internal.StructField('video_encoder', 0, 0, mojo.internal.InterfaceRequest(arc.mojom.VideoEncodeAcceleratorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec, 'arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_Params', [
      mojo.internal.StructField('video_decoder', 0, 0, mojo.internal.InterfaceRequest(arc.mojom.VideoDecodeAcceleratorRemote), null, false, 0, undefined),
      mojo.internal.StructField('protected_buffer_manager', 8, 0, mojo.internal.InterfaceProxy(arc.mojom.ProtectedBufferManagerRemote), null, true, 8, undefined),
      mojo.internal.StructField('browser_cdm_factory', 16, 0, mojo.internal.InterfaceProxy(chromeos.cdm.mojom.BrowserCdmFactoryRemote), null, true, 10, undefined),
    ],
    [[0, 16], [8, 24], [10, 32]]);

mojo.internal.Struct(
    arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec, 'arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_Params', [
      mojo.internal.StructField('video_decoder', 0, 0, mojo.internal.InterfaceRequest(arc.mojom.VideoDecoderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_ParamsSpec, 'arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_Params', [
      mojo.internal.StructField('video_protected_buffer_allocator', 0, 0, mojo.internal.InterfaceRequest(arc.mojom.VideoProtectedBufferAllocatorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.VideoAcceleratorFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VideoAcceleratorFactoryRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoAcceleratorFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VideoAcceleratorFactoryPendingReceiver,
      handle);
    this.$ = new arc.mojom.VideoAcceleratorFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createEncodeAccelerator(video_encoder) {
    return this.$.createEncodeAccelerator(video_encoder);
  }
  createDecodeAccelerator(video_decoder, protected_buffer_manager, browser_cdm_factory) {
    return this.$.createDecodeAccelerator(video_decoder, protected_buffer_manager, browser_cdm_factory);
  }
  createVideoDecoder(video_decoder) {
    return this.$.createVideoDecoder(video_decoder);
  }
  createProtectedBufferAllocator(video_protected_buffer_allocator) {
    return this.$.createProtectedBufferAllocator(video_protected_buffer_allocator);
  }
};

arc.mojom.VideoAcceleratorFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoAcceleratorFactory', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 3 },
    ]);
  }

  createEncodeAccelerator(video_encoder) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_ParamsSpec,
      null,
      [video_encoder],
      false);
  }

  createDecodeAccelerator(video_decoder, protected_buffer_manager, browser_cdm_factory) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec,
      null,
      [video_decoder, protected_buffer_manager, browser_cdm_factory],
      false);
  }

  createVideoDecoder(video_decoder) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec,
      null,
      [video_decoder],
      false);
  }

  createProtectedBufferAllocator(video_protected_buffer_allocator) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_ParamsSpec,
      null,
      [video_protected_buffer_allocator],
      false);
  }

};

arc.mojom.VideoAcceleratorFactory.getRemote = function() {
  let remote = new arc.mojom.VideoAcceleratorFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoAcceleratorFactory',
    'context');
  return remote.$;
};

arc.mojom.VideoAcceleratorFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoAcceleratorFactory', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 4 },
      { explicit: 3 },
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
        
        // Try Method 0: CreateEncodeAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateEncodeAccelerator (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateDecodeAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateDecodeAccelerator (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateVideoDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateVideoDecoder (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateProtectedBufferAllocator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateProtectedBufferAllocator (3)');
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
          const params = decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateEncodeAccelerator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createEncodeAccelerator');
          const result = this.impl.createEncodeAccelerator(params.video_encoder);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateDecodeAccelerator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createDecodeAccelerator');
          const result = this.impl.createDecodeAccelerator(params.video_decoder, params.protected_buffer_manager, params.browser_cdm_factory);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateVideoDecoder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createVideoDecoder');
          const result = this.impl.createVideoDecoder(params.video_decoder);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VideoAcceleratorFactory_CreateProtectedBufferAllocator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createProtectedBufferAllocator');
          const result = this.impl.createProtectedBufferAllocator(params.video_protected_buffer_allocator);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.VideoAcceleratorFactoryReceiver = arc.mojom.VideoAcceleratorFactoryReceiver;

arc.mojom.VideoAcceleratorFactoryPtr = arc.mojom.VideoAcceleratorFactoryRemote;
arc.mojom.VideoAcceleratorFactoryRequest = arc.mojom.VideoAcceleratorFactoryPendingReceiver;

