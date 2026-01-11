// Auto-generated MojoJS binding
 // Source: chromium_src/services/video_capture/public/mojom/virtual_device.mojom
 // Module: video_capture.mojom

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
 

 mojo.internal.bindings.video_capture = mojo.internal.bindings.video_capture || {};
mojo.internal.bindings.video_capture.mojom = mojo.internal.bindings.video_capture.mojom || {};
mojo.internal.bindings.media = mojo.internal.bindings.media || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice = {};
mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice.$interfaceName = 'video_capture.mojom.SharedMemoryVirtualDevice';
mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice = {};
mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice.$interfaceName = 'video_capture.mojom.TextureVirtualDevice';
mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec = { $: {} };
mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec = { $: {} };
mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec = { $: {} };
mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice = {};
mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice.$interfaceName = 'video_capture.mojom.GpuMemoryBufferVirtualDevice';
mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec = { $: {} };
mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec = { $: {} };
mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec = { $: {} };

// Interface: SharedMemoryVirtualDevice
mojo.internal.Struct(
    mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec, 'video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_Params', [
      mojo.internal.StructField('arg_dimension', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pixel_format', 8, 0, mojo.internal.bindings.media.mojom.VideoCapturePixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_strides', 16, 0, mojo.internal.bindings.media.mojom.PlaneStridesSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ResponseParamsSpec, 'video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ResponseParams', [
      mojo.internal.StructField('arg_buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec, 'video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_Params', [
      mojo.internal.StructField('arg_frame_info', 0, 0, mojo.internal.bindings.media.mojom.VideoFrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDeviceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.SharedMemoryVirtualDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestFrameBuffer(arg_dimension, arg_pixel_format, arg_strides) {
    return this.$.requestFrameBuffer(arg_dimension, arg_pixel_format, arg_strides);
  }
  onFrameReadyInBuffer(arg_buffer_id, arg_frame_info) {
    return this.$.onFrameReadyInBuffer(arg_buffer_id, arg_frame_info);
  }
};

mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SharedMemoryVirtualDevice', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestFrameBuffer(arg_dimension, arg_pixel_format, arg_strides) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec,
      mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ResponseParamsSpec,
      [arg_dimension, arg_pixel_format, arg_strides],
      false);
  }

  onFrameReadyInBuffer(arg_buffer_id, arg_frame_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [arg_buffer_id, arg_frame_info],
      false);
  }

};

mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice.getRemote = function() {
  let remote = new mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.SharedMemoryVirtualDevice',
    'context');
  return remote.$;
};

mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SharedMemoryVirtualDevice', [
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
        
        // Try Method 0: RequestFrameBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestFrameBuffer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnFrameReadyInBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameReadyInBuffer (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestFrameBuffer');
          const result = this.impl.requestFrameBuffer(params.arg_dimension, params.arg_pixel_format, params.arg_strides);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_RequestFrameBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestFrameBuffer FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevice_OnFrameReadyInBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameReadyInBuffer');
          const result = this.impl.onFrameReadyInBuffer(params.arg_buffer_id, params.arg_frame_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDeviceReceiver = mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDeviceReceiver;

mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevicePtr = mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDeviceRemote;
mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDeviceRequest = mojo.internal.bindings.video_capture.mojom.SharedMemoryVirtualDevicePendingReceiver;


// Interface: TextureVirtualDevice
mojo.internal.Struct(
    mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec, 'video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_Params', [
      mojo.internal.StructField('arg_shared_image_handle', 0, 0, mojo.internal.bindings.media.mojom.SharedImageBufferHandleSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec, 'video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_Params', [
      mojo.internal.StructField('arg_frame_access_handler', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.video_capture.mojom.VideoFrameAccessHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec, 'video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_Params', [
      mojo.internal.StructField('arg_frame_info', 0, 0, mojo.internal.bindings.media.mojom.VideoFrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec, 'video_capture.mojom.TextureVirtualDevice_OnBufferRetired_Params', [
      mojo.internal.StructField('arg_buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.video_capture.mojom.TextureVirtualDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.video_capture.mojom.TextureVirtualDeviceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.TextureVirtualDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.video_capture.mojom.TextureVirtualDevicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.video_capture.mojom.TextureVirtualDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onNewSharedImageBufferHandle(arg_buffer_id, arg_shared_image_handle) {
    return this.$.onNewSharedImageBufferHandle(arg_buffer_id, arg_shared_image_handle);
  }
  onFrameAccessHandlerReady(arg_frame_access_handler) {
    return this.$.onFrameAccessHandlerReady(arg_frame_access_handler);
  }
  onFrameReadyInBuffer(arg_buffer_id, arg_frame_info) {
    return this.$.onFrameReadyInBuffer(arg_buffer_id, arg_frame_info);
  }
  onBufferRetired(arg_buffer_id) {
    return this.$.onBufferRetired(arg_buffer_id);
  }
};

mojo.internal.bindings.video_capture.mojom.TextureVirtualDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TextureVirtualDevice', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onNewSharedImageBufferHandle(arg_buffer_id, arg_shared_image_handle) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec,
      null,
      [arg_buffer_id, arg_shared_image_handle],
      false);
  }

  onFrameAccessHandlerReady(arg_frame_access_handler) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec,
      null,
      [arg_frame_access_handler],
      false);
  }

  onFrameReadyInBuffer(arg_buffer_id, arg_frame_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [arg_buffer_id, arg_frame_info],
      false);
  }

  onBufferRetired(arg_buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec,
      null,
      [arg_buffer_id],
      false);
  }

};

mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice.getRemote = function() {
  let remote = new mojo.internal.bindings.video_capture.mojom.TextureVirtualDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.TextureVirtualDevice',
    'context');
  return remote.$;
};

mojo.internal.bindings.video_capture.mojom.TextureVirtualDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TextureVirtualDevice', [
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
        
        // Try Method 0: OnNewSharedImageBufferHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewSharedImageBufferHandle (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnFrameAccessHandlerReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameAccessHandlerReady (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnFrameReadyInBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameReadyInBuffer (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnBufferRetired
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferRetired (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnNewSharedImageBufferHandle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewSharedImageBufferHandle');
          const result = this.impl.onNewSharedImageBufferHandle(params.arg_buffer_id, params.arg_shared_image_handle);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameAccessHandlerReady');
          const result = this.impl.onFrameAccessHandlerReady(params.arg_frame_access_handler);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnFrameReadyInBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameReadyInBuffer');
          const result = this.impl.onFrameReadyInBuffer(params.arg_buffer_id, params.arg_frame_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.TextureVirtualDevice_OnBufferRetired_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBufferRetired');
          const result = this.impl.onBufferRetired(params.arg_buffer_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.video_capture.mojom.TextureVirtualDeviceReceiver = mojo.internal.bindings.video_capture.mojom.TextureVirtualDeviceReceiver;

mojo.internal.bindings.video_capture.mojom.TextureVirtualDevicePtr = mojo.internal.bindings.video_capture.mojom.TextureVirtualDeviceRemote;
mojo.internal.bindings.video_capture.mojom.TextureVirtualDeviceRequest = mojo.internal.bindings.video_capture.mojom.TextureVirtualDevicePendingReceiver;


// Interface: GpuMemoryBufferVirtualDevice
mojo.internal.Struct(
    mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec, 'video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_Params', [
      mojo.internal.StructField('arg_gmb_handle', 0, 0, mojo.internal.bindings.gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec, 'video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_Params', [
      mojo.internal.StructField('arg_frame_access_handler', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.video_capture.mojom.VideoFrameAccessHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec, 'video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_Params', [
      mojo.internal.StructField('arg_frame_info', 0, 0, mojo.internal.bindings.media.mojom.VideoFrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec, 'video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_Params', [
      mojo.internal.StructField('arg_buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDeviceRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.GpuMemoryBufferVirtualDevice';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDeviceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onNewGpuMemoryBufferHandle(arg_buffer_id, arg_gmb_handle) {
    return this.$.onNewGpuMemoryBufferHandle(arg_buffer_id, arg_gmb_handle);
  }
  onFrameAccessHandlerReady(arg_frame_access_handler) {
    return this.$.onFrameAccessHandlerReady(arg_frame_access_handler);
  }
  onFrameReadyInBuffer(arg_buffer_id, arg_frame_info) {
    return this.$.onFrameReadyInBuffer(arg_buffer_id, arg_frame_info);
  }
  onBufferRetired(arg_buffer_id) {
    return this.$.onBufferRetired(arg_buffer_id);
  }
};

mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDeviceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GpuMemoryBufferVirtualDevice', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onNewGpuMemoryBufferHandle(arg_buffer_id, arg_gmb_handle) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec,
      null,
      [arg_buffer_id, arg_gmb_handle],
      false);
  }

  onFrameAccessHandlerReady(arg_frame_access_handler) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec,
      null,
      [arg_frame_access_handler],
      false);
  }

  onFrameReadyInBuffer(arg_buffer_id, arg_frame_info) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [arg_buffer_id, arg_frame_info],
      false);
  }

  onBufferRetired(arg_buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec,
      null,
      [arg_buffer_id],
      false);
  }

};

mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice.getRemote = function() {
  let remote = new mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDeviceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.GpuMemoryBufferVirtualDevice',
    'context');
  return remote.$;
};

mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDeviceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GpuMemoryBufferVirtualDevice', [
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
        
        // Try Method 0: OnNewGpuMemoryBufferHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewGpuMemoryBufferHandle (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnFrameAccessHandlerReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameAccessHandlerReady (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnFrameReadyInBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameReadyInBuffer (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnBufferRetired
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferRetired (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnNewGpuMemoryBufferHandle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onNewGpuMemoryBufferHandle');
          const result = this.impl.onNewGpuMemoryBufferHandle(params.arg_buffer_id, params.arg_gmb_handle);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameAccessHandlerReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameAccessHandlerReady');
          const result = this.impl.onFrameAccessHandlerReady(params.arg_frame_access_handler);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnFrameReadyInBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameReadyInBuffer');
          const result = this.impl.onFrameReadyInBuffer(params.arg_buffer_id, params.arg_frame_info);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevice_OnBufferRetired_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBufferRetired');
          const result = this.impl.onBufferRetired(params.arg_buffer_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDeviceReceiver = mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDeviceReceiver;

mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevicePtr = mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDeviceRemote;
mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDeviceRequest = mojo.internal.bindings.video_capture.mojom.GpuMemoryBufferVirtualDevicePendingReceiver;

