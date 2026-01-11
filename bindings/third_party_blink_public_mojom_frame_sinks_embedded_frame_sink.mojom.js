// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/frame_sinks/embedded_frame_sink.mojom
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
mojo.internal.bindings.viz = mojo.internal.bindings.viz || {};

mojo.internal.bindings.blink.mojom.SurfaceEmbedder = {};
mojo.internal.bindings.blink.mojom.SurfaceEmbedder.$interfaceName = 'blink.mojom.SurfaceEmbedder';
mojo.internal.bindings.blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SurfaceEmbedder_OnOpacityChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClient = {};
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClient.$interfaceName = 'blink.mojom.EmbeddedFrameSinkClient';
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClient_BindSurfaceEmbedder_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider = {};
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider.$interfaceName = 'blink.mojom.EmbeddedFrameSinkProvider';
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_ParamsSpec = { $: {} };

// Interface: SurfaceEmbedder
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_ParamsSpec, 'blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_Params', [
      mojo.internal.StructField('arg_local_surface_id', 0, 0, mojo.internal.bindings.viz.mojom.LocalSurfaceIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SurfaceEmbedder_OnOpacityChanged_ParamsSpec, 'blink.mojom.SurfaceEmbedder_OnOpacityChanged_Params', [
      mojo.internal.StructField('arg_is_opaque', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.SurfaceEmbedderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.SurfaceEmbedderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SurfaceEmbedder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.SurfaceEmbedderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.SurfaceEmbedderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setLocalSurfaceId(arg_local_surface_id) {
    return this.$.setLocalSurfaceId(arg_local_surface_id);
  }
  onOpacityChanged(arg_is_opaque) {
    return this.$.onOpacityChanged(arg_is_opaque);
  }
};

mojo.internal.bindings.blink.mojom.SurfaceEmbedderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SurfaceEmbedder', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setLocalSurfaceId(arg_local_surface_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_ParamsSpec,
      null,
      [arg_local_surface_id],
      false);
  }

  onOpacityChanged(arg_is_opaque) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.SurfaceEmbedder_OnOpacityChanged_ParamsSpec,
      null,
      [arg_is_opaque],
      false);
  }

};

mojo.internal.bindings.blink.mojom.SurfaceEmbedder.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.SurfaceEmbedderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SurfaceEmbedder',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.SurfaceEmbedderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SurfaceEmbedder', [
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
        
        // Try Method 0: SetLocalSurfaceId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLocalSurfaceId (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnOpacityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SurfaceEmbedder_OnOpacityChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOpacityChanged (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SurfaceEmbedder_SetLocalSurfaceId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLocalSurfaceId');
          const result = this.impl.setLocalSurfaceId(params.arg_local_surface_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.SurfaceEmbedder_OnOpacityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOpacityChanged');
          const result = this.impl.onOpacityChanged(params.arg_is_opaque);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.SurfaceEmbedderReceiver = mojo.internal.bindings.blink.mojom.SurfaceEmbedderReceiver;

mojo.internal.bindings.blink.mojom.SurfaceEmbedderPtr = mojo.internal.bindings.blink.mojom.SurfaceEmbedderRemote;
mojo.internal.bindings.blink.mojom.SurfaceEmbedderRequest = mojo.internal.bindings.blink.mojom.SurfaceEmbedderPendingReceiver;


// Interface: EmbeddedFrameSinkClient
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClient_BindSurfaceEmbedder_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkClient_BindSurfaceEmbedder_Params', [
      mojo.internal.StructField('arg_embedder', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.SurfaceEmbedderSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EmbeddedFrameSinkClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindSurfaceEmbedder(arg_embedder) {
    return this.$.bindSurfaceEmbedder(arg_embedder);
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EmbeddedFrameSinkClient', [
      { explicit: null },
    ]);
  }

  bindSurfaceEmbedder(arg_embedder) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClient_BindSurfaceEmbedder_ParamsSpec,
      null,
      [arg_embedder],
      false);
  }

};

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClient.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EmbeddedFrameSinkClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EmbeddedFrameSinkClient', [
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
        
        // Try Method 0: BindSurfaceEmbedder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClient_BindSurfaceEmbedder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSurfaceEmbedder (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClient_BindSurfaceEmbedder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindSurfaceEmbedder');
          const result = this.impl.bindSurfaceEmbedder(params.arg_embedder);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientReceiver = mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientReceiver;

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientPtr = mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientRemote;
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientRequest = mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientPendingReceiver;


// Interface: EmbeddedFrameSinkProvider
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_Params', [
      mojo.internal.StructField('arg_parent_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_sink_id', 8, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientSpec), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_Params', [
      mojo.internal.StructField('arg_bundle_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkBundleIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.FrameSinkBundleRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.FrameSinkBundleClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_sink', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bundle_id', 8, 0, mojo.internal.bindings.viz.mojom.FrameSinkBundleIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_sink', 24, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_Params', [
      mojo.internal.StructField('arg_parent_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_sink_id', 8, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_surface_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_sink', 32, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_embedder', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.SurfaceEmbedderSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_ParamsSpec, 'blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.EmbeddedFrameSinkProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProviderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  registerEmbeddedFrameSink(arg_parent_frame_sink_id, arg_frame_sink_id, arg_client) {
    return this.$.registerEmbeddedFrameSink(arg_parent_frame_sink_id, arg_frame_sink_id, arg_client);
  }
  registerEmbeddedFrameSinkBundle(arg_bundle_id, arg_receiver, arg_client) {
    return this.$.registerEmbeddedFrameSinkBundle(arg_bundle_id, arg_receiver, arg_client);
  }
  createCompositorFrameSink(arg_frame_sink_id, arg_client, arg_sink) {
    return this.$.createCompositorFrameSink(arg_frame_sink_id, arg_client, arg_sink);
  }
  createBundledCompositorFrameSink(arg_frame_sink_id, arg_bundle_id, arg_client, arg_sink) {
    return this.$.createBundledCompositorFrameSink(arg_frame_sink_id, arg_bundle_id, arg_client, arg_sink);
  }
  createSimpleCompositorFrameSink(arg_parent_frame_sink_id, arg_frame_sink_id, arg_surface_client, arg_client, arg_sink) {
    return this.$.createSimpleCompositorFrameSink(arg_parent_frame_sink_id, arg_frame_sink_id, arg_surface_client, arg_client, arg_sink);
  }
  connectToEmbedder(arg_frame_sink_id, arg_embedder) {
    return this.$.connectToEmbedder(arg_frame_sink_id, arg_embedder);
  }
  registerFrameSinkHierarchy(arg_frame_sink_id) {
    return this.$.registerFrameSinkHierarchy(arg_frame_sink_id);
  }
  unregisterFrameSinkHierarchy(arg_frame_sink_id) {
    return this.$.unregisterFrameSinkHierarchy(arg_frame_sink_id);
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EmbeddedFrameSinkProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  registerEmbeddedFrameSink(arg_parent_frame_sink_id, arg_frame_sink_id, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_ParamsSpec,
      null,
      [arg_parent_frame_sink_id, arg_frame_sink_id, arg_client],
      false);
  }

  registerEmbeddedFrameSinkBundle(arg_bundle_id, arg_receiver, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec,
      null,
      [arg_bundle_id, arg_receiver, arg_client],
      false);
  }

  createCompositorFrameSink(arg_frame_sink_id, arg_client, arg_sink) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec,
      null,
      [arg_frame_sink_id, arg_client, arg_sink],
      false);
  }

  createBundledCompositorFrameSink(arg_frame_sink_id, arg_bundle_id, arg_client, arg_sink) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec,
      null,
      [arg_frame_sink_id, arg_bundle_id, arg_client, arg_sink],
      false);
  }

  createSimpleCompositorFrameSink(arg_parent_frame_sink_id, arg_frame_sink_id, arg_surface_client, arg_client, arg_sink) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec,
      null,
      [arg_parent_frame_sink_id, arg_frame_sink_id, arg_surface_client, arg_client, arg_sink],
      false);
  }

  connectToEmbedder(arg_frame_sink_id, arg_embedder) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec,
      null,
      [arg_frame_sink_id, arg_embedder],
      false);
  }

  registerFrameSinkHierarchy(arg_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec,
      null,
      [arg_frame_sink_id],
      false);
  }

  unregisterFrameSinkHierarchy(arg_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_ParamsSpec,
      null,
      [arg_frame_sink_id],
      false);
  }

};

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.EmbeddedFrameSinkProvider',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EmbeddedFrameSinkProvider', [
      { explicit: null },
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
        
        // Try Method 0: RegisterEmbeddedFrameSink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterEmbeddedFrameSink (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RegisterEmbeddedFrameSinkBundle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterEmbeddedFrameSinkBundle (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateCompositorFrameSink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCompositorFrameSink (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateBundledCompositorFrameSink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateBundledCompositorFrameSink (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CreateSimpleCompositorFrameSink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSimpleCompositorFrameSink (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ConnectToEmbedder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectToEmbedder (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RegisterFrameSinkHierarchy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterFrameSinkHierarchy (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UnregisterFrameSinkHierarchy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnregisterFrameSinkHierarchy (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerEmbeddedFrameSink');
          const result = this.impl.registerEmbeddedFrameSink(params.arg_parent_frame_sink_id, params.arg_frame_sink_id, params.arg_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterEmbeddedFrameSinkBundle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerEmbeddedFrameSinkBundle');
          const result = this.impl.registerEmbeddedFrameSinkBundle(params.arg_bundle_id, params.arg_receiver, params.arg_client);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateCompositorFrameSink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCompositorFrameSink');
          const result = this.impl.createCompositorFrameSink(params.arg_frame_sink_id, params.arg_client, params.arg_sink);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateBundledCompositorFrameSink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createBundledCompositorFrameSink');
          const result = this.impl.createBundledCompositorFrameSink(params.arg_frame_sink_id, params.arg_bundle_id, params.arg_client, params.arg_sink);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_CreateSimpleCompositorFrameSink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSimpleCompositorFrameSink');
          const result = this.impl.createSimpleCompositorFrameSink(params.arg_parent_frame_sink_id, params.arg_frame_sink_id, params.arg_surface_client, params.arg_client, params.arg_sink);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_ConnectToEmbedder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectToEmbedder');
          const result = this.impl.connectToEmbedder(params.arg_frame_sink_id, params.arg_embedder);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_RegisterFrameSinkHierarchy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerFrameSinkHierarchy');
          const result = this.impl.registerFrameSinkHierarchy(params.arg_frame_sink_id);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProvider_UnregisterFrameSinkHierarchy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unregisterFrameSinkHierarchy');
          const result = this.impl.unregisterFrameSinkHierarchy(params.arg_frame_sink_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProviderReceiver = mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProviderReceiver;

mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProviderPtr = mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProviderRemote;
mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProviderRequest = mojo.internal.bindings.blink.mojom.EmbeddedFrameSinkProviderPendingReceiver;

