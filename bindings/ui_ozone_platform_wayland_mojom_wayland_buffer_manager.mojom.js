// Auto-generated MojoJS binding
 // Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_buffer_manager.mojom
 // Module: ui.ozone.mojom

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
 

 mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.ui.ozone = mojo.internal.bindings.ui.ozone || {};
mojo.internal.bindings.ui.ozone.mojom = mojo.internal.bindings.ui.ozone.mojom || {};
mojo.internal.bindings.viz = mojo.internal.bindings.viz || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.wl = mojo.internal.bindings.wl || {};

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost = {};
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost.$interfaceName = 'ui.ozone.mojom.WaylandBufferManagerHost';
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu = {};
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu.$interfaceName = 'ui.ozone.mojom.WaylandBufferManagerGpu';
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_ParamsSpec = { $: {} };
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_ParamsSpec = { $: {} };

// Interface: WaylandBufferManagerHost
mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_Params', [
      mojo.internal.StructField('arg_buffer_manager_gpu_associated', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_Params', [
      mojo.internal.StructField('arg_dmabuf_fd', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_strides', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_offsets', 24, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_modifiers', 32, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_color_space', 40, 0, mojo.internal.bindings.gfx.mojom.ColorSpaceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hdr_metadata', 48, 0, mojo.internal.bindings.gfx.mojom.HDRMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_format', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_planes_count', 60, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_id', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_Params', [
      mojo.internal.StructField('arg_shm_fd', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_size', 16, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_Params', [
      mojo.internal.StructField('arg_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColor4fSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_Params', [
      mojo.internal.StructField('arg_buffer_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_Params', [
      mojo.internal.StructField('arg_widget', 0, 0, mojo.internal.bindings.gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.bindings.gfx.mojom.FrameDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_overlays', 16, 0, mojo.internal.Array(mojo.internal.bindings.wl.mojom.WaylandOverlayConfigSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostRemote = class {
  static get $interfaceName() {
    return 'ui.ozone.mojom.WaylandBufferManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setWaylandBufferManagerGpu(arg_buffer_manager_gpu_associated) {
    return this.$.setWaylandBufferManagerGpu(arg_buffer_manager_gpu_associated);
  }
  createDmabufBasedBuffer(arg_dmabuf_fd, arg_size, arg_strides, arg_offsets, arg_modifiers, arg_format, arg_planes_count, arg_color_space, arg_hdr_metadata, arg_buffer_id) {
    return this.$.createDmabufBasedBuffer(arg_dmabuf_fd, arg_size, arg_strides, arg_offsets, arg_modifiers, arg_format, arg_planes_count, arg_color_space, arg_hdr_metadata, arg_buffer_id);
  }
  createShmBasedBuffer(arg_shm_fd, arg_length, arg_size, arg_buffer_id) {
    return this.$.createShmBasedBuffer(arg_shm_fd, arg_length, arg_size, arg_buffer_id);
  }
  createSinglePixelBuffer(arg_color, arg_buffer_id) {
    return this.$.createSinglePixelBuffer(arg_color, arg_buffer_id);
  }
  destroyBuffer(arg_buffer_id) {
    return this.$.destroyBuffer(arg_buffer_id);
  }
  commitOverlays(arg_widget, arg_frame_id, arg_data, arg_overlays) {
    return this.$.commitOverlays(arg_widget, arg_frame_id, arg_data, arg_overlays);
  }
};

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WaylandBufferManagerHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setWaylandBufferManagerGpu(arg_buffer_manager_gpu_associated) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_ParamsSpec,
      null,
      [arg_buffer_manager_gpu_associated],
      false);
  }

  createDmabufBasedBuffer(arg_dmabuf_fd, arg_size, arg_strides, arg_offsets, arg_modifiers, arg_format, arg_planes_count, arg_color_space, arg_hdr_metadata, arg_buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_ParamsSpec,
      null,
      [arg_dmabuf_fd, arg_size, arg_strides, arg_offsets, arg_modifiers, arg_format, arg_planes_count, arg_color_space, arg_hdr_metadata, arg_buffer_id],
      false);
  }

  createShmBasedBuffer(arg_shm_fd, arg_length, arg_size, arg_buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_ParamsSpec,
      null,
      [arg_shm_fd, arg_length, arg_size, arg_buffer_id],
      false);
  }

  createSinglePixelBuffer(arg_color, arg_buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_ParamsSpec,
      null,
      [arg_color, arg_buffer_id],
      false);
  }

  destroyBuffer(arg_buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_ParamsSpec,
      null,
      [arg_buffer_id],
      false);
  }

  commitOverlays(arg_widget, arg_frame_id, arg_data, arg_overlays) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_ParamsSpec,
      null,
      [arg_widget, arg_frame_id, arg_data, arg_overlays],
      false);
  }

};

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost.getRemote = function() {
  let remote = new mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.ozone.mojom.WaylandBufferManagerHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WaylandBufferManagerHost', [
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
        
        // Try Method 0: SetWaylandBufferManagerGpu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWaylandBufferManagerGpu (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateDmabufBasedBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateDmabufBasedBuffer (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateShmBasedBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateShmBasedBuffer (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateSinglePixelBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSinglePixelBuffer (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DestroyBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DestroyBuffer (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CommitOverlays
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommitOverlays (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_SetWaylandBufferManagerGpu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWaylandBufferManagerGpu');
          const result = this.impl.setWaylandBufferManagerGpu(params.arg_buffer_manager_gpu_associated);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateDmabufBasedBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createDmabufBasedBuffer');
          const result = this.impl.createDmabufBasedBuffer(params.arg_dmabuf_fd, params.arg_size, params.arg_strides, params.arg_offsets, params.arg_modifiers, params.arg_format, params.arg_planes_count, params.arg_color_space, params.arg_hdr_metadata, params.arg_buffer_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateShmBasedBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createShmBasedBuffer');
          const result = this.impl.createShmBasedBuffer(params.arg_shm_fd, params.arg_length, params.arg_size, params.arg_buffer_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CreateSinglePixelBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSinglePixelBuffer');
          const result = this.impl.createSinglePixelBuffer(params.arg_color, params.arg_buffer_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_DestroyBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.destroyBuffer');
          const result = this.impl.destroyBuffer(params.arg_buffer_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHost_CommitOverlays_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.commitOverlays');
          const result = this.impl.commitOverlays(params.arg_widget, params.arg_frame_id, params.arg_data, params.arg_overlays);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostReceiver = mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostReceiver;

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostPtr = mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostRemote;
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostRequest = mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostPendingReceiver;


// Interface: WaylandBufferManagerGpu
mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_Params', [
      mojo.internal.StructField('arg_remote_host', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_shared_image_formats_with_modifiers', 8, 0, mojo.internal.Map(mojo.internal.bindings.viz.mojom.SharedImageFormatSpec.$, mojo.internal.Array(mojo.internal.Uint64, false), false), null, false, 0, undefined),
      mojo.internal.StructField('arg_supports_dma_buf', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_supports_viewporter', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_supports_acquire_fence', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_supports_overlays', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_supports_single_pixel_buffer', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_Params', [
      mojo.internal.StructField('arg_widget', 0, 0, mojo.internal.bindings.gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_swap_result', 8, 0, mojo.internal.bindings.gfx.mojom.SwapResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_release_fence_handle', 16, 0, mojo.internal.bindings.gfx.mojom.GpuFenceHandleSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_presentation_infos', 24, 0, mojo.internal.Array(mojo.internal.bindings.wl.mojom.WaylandPresentationInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_id', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_ParamsSpec, 'ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_Params', [
      mojo.internal.StructField('arg_widget', 0, 0, mojo.internal.bindings.gfx.mojom.AcceleratedWidgetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_presentation_infos', 8, 0, mojo.internal.Array(mojo.internal.bindings.wl.mojom.WaylandPresentationInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpuPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpuRemote = class {
  static get $interfaceName() {
    return 'ui.ozone.mojom.WaylandBufferManagerGpu';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpuPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpuRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize(arg_remote_host, arg_shared_image_formats_with_modifiers, arg_supports_dma_buf, arg_supports_viewporter, arg_supports_acquire_fence, arg_supports_overlays, arg_supports_single_pixel_buffer) {
    return this.$.initialize(arg_remote_host, arg_shared_image_formats_with_modifiers, arg_supports_dma_buf, arg_supports_viewporter, arg_supports_acquire_fence, arg_supports_overlays, arg_supports_single_pixel_buffer);
  }
  onSubmission(arg_widget, arg_frame_id, arg_swap_result, arg_release_fence_handle, arg_presentation_infos) {
    return this.$.onSubmission(arg_widget, arg_frame_id, arg_swap_result, arg_release_fence_handle, arg_presentation_infos);
  }
  onPresentation(arg_widget, arg_presentation_infos) {
    return this.$.onPresentation(arg_widget, arg_presentation_infos);
  }
};

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpuRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WaylandBufferManagerGpu', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  initialize(arg_remote_host, arg_shared_image_formats_with_modifiers, arg_supports_dma_buf, arg_supports_viewporter, arg_supports_acquire_fence, arg_supports_overlays, arg_supports_single_pixel_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_ParamsSpec,
      null,
      [arg_remote_host, arg_shared_image_formats_with_modifiers, arg_supports_dma_buf, arg_supports_viewporter, arg_supports_acquire_fence, arg_supports_overlays, arg_supports_single_pixel_buffer],
      false);
  }

  onSubmission(arg_widget, arg_frame_id, arg_swap_result, arg_release_fence_handle, arg_presentation_infos) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_ParamsSpec,
      null,
      [arg_widget, arg_frame_id, arg_swap_result, arg_release_fence_handle, arg_presentation_infos],
      false);
  }

  onPresentation(arg_widget, arg_presentation_infos) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_ParamsSpec,
      null,
      [arg_widget, arg_presentation_infos],
      false);
  }

};

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu.getRemote = function() {
  let remote = new mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpuRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ui.ozone.mojom.WaylandBufferManagerGpu',
    'context');
  return remote.$;
};

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpuReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WaylandBufferManagerGpu', [
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
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSubmission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSubmission (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnPresentation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPresentation (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_remote_host, params.arg_shared_image_formats_with_modifiers, params.arg_supports_dma_buf, params.arg_supports_viewporter, params.arg_supports_acquire_fence, params.arg_supports_overlays, params.arg_supports_single_pixel_buffer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_OnSubmission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSubmission');
          const result = this.impl.onSubmission(params.arg_widget, params.arg_frame_id, params.arg_swap_result, params.arg_release_fence_handle, params.arg_presentation_infos);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpu_OnPresentation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPresentation');
          const result = this.impl.onPresentation(params.arg_widget, params.arg_presentation_infos);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpuReceiver = mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpuReceiver;

mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpuPtr = mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpuRemote;
mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpuRequest = mojo.internal.bindings.ui.ozone.mojom.WaylandBufferManagerGpuPendingReceiver;

