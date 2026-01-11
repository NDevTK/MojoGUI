// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_decode_accelerator.mojom
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};

mojo.internal.bindings.arc.mojom.ResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.BitstreamBufferSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PictureSpec = { $: {} };
mojo.internal.bindings.arc.mojom.PictureBufferFormatSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorConfigSpec = { $: {} };
mojo.internal.bindings.arc.mojom.BufferModifierSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator = {};
mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator.$interfaceName = 'arc.mojom.VideoDecodeAccelerator';
mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Initialize_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Initialize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Decode_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_AssignPictureBuffers_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_ImportBufferForPicture_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_ReusePictureBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Reset_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Reset_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Flush_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Flush_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeClient = {};
mojo.internal.bindings.arc.mojom.VideoDecodeClient.$interfaceName = 'arc.mojom.VideoDecodeClient';
mojo.internal.bindings.arc.mojom.VideoDecodeClient_PictureReady_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeClient_NotifyEndOfBitstreamBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeClient_NotifyError_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoDecodeClient_ProvidePictureBuffers_ParamsSpec = { $: {} };

// Enum: Result
mojo.internal.bindings.arc.mojom.Result = {
  SUCCESS: 0,
  ILLEGAL_STATE: 1,
  INVALID_ARGUMENT: 2,
  UNREADABLE_INPUT: 3,
  PLATFORM_FAILURE: 4,
  INSUFFICIENT_RESOURCES: 5,
  CANCELLED: 6,
};

// Struct: BitstreamBuffer
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.BitstreamBufferSpec, 'arc.mojom.BitstreamBuffer', [
      mojo.internal.StructField('arg_bitstream_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_handle_fd', 4, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bytes_used', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Picture
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PictureSpec, 'arc.mojom.Picture', [
      mojo.internal.StructField('arg_crop_rect', 0, 0, mojo.internal.bindings.arc.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_picture_buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bitstream_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PictureBufferFormat
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.PictureBufferFormatSpec, 'arc.mojom.PictureBufferFormat', [
      mojo.internal.StructField('arg_coded_size', 0, 0, mojo.internal.bindings.arc.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_min_num_buffers', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoDecodeAcceleratorConfig
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorConfigSpec, 'arc.mojom.VideoDecodeAcceleratorConfig', [
      mojo.internal.StructField('arg_profile', 0, 0, mojo.internal.bindings.arc.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_secure_mode', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BufferModifier
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.BufferModifierSpec, 'arc.mojom.BufferModifier', [
      mojo.internal.StructField('arg_val', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: VideoDecodeAccelerator
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Initialize_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Initialize_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.VideoDecodeClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Initialize_ResponseParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Initialize_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Decode_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Decode_Params', [
      mojo.internal.StructField('arg_bitstream_buffer', 0, 0, mojo.internal.bindings.arc.mojom.BitstreamBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_AssignPictureBuffers_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_AssignPictureBuffers_Params', [
      mojo.internal.StructField('arg_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_ImportBufferForPicture_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_ImportBufferForPicture_Params', [
      mojo.internal.StructField('arg_format', 0, 0, mojo.internal.bindings.arc.mojom.HalPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_planes', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.VideoFramePlaneSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_picture_buffer_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_handle_fd', 20, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('arg_modifier', 24, 0, mojo.internal.bindings.arc.mojom.BufferModifierSpec.$, null, true, 4, undefined),
    ],
    [[0, 32], [4, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_ReusePictureBuffer_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_ReusePictureBuffer_Params', [
      mojo.internal.StructField('arg_picture_buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Reset_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Reset_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Reset_ResponseParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Reset_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Flush_ParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Flush_ResponseParamsSpec, 'arc.mojom.VideoDecodeAccelerator_Flush_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.arc.mojom.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoDecodeAccelerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initialize(arg_config, arg_client) {
    return this.$.initialize(arg_config, arg_client);
  }
  decode(arg_bitstream_buffer) {
    return this.$.decode(arg_bitstream_buffer);
  }
  assignPictureBuffers(arg_count) {
    return this.$.assignPictureBuffers(arg_count);
  }
  importBufferForPicture(arg_picture_buffer_id, arg_format, arg_handle_fd, arg_planes, arg_modifier) {
    return this.$.importBufferForPicture(arg_picture_buffer_id, arg_format, arg_handle_fd, arg_planes, arg_modifier);
  }
  reusePictureBuffer(arg_picture_buffer_id) {
    return this.$.reusePictureBuffer(arg_picture_buffer_id);
  }
  reset() {
    return this.$.reset();
  }
  flush() {
    return this.$.flush();
  }
};

mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoDecodeAccelerator', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 9 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
    ]);
  }

  initialize(arg_config, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Initialize_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Initialize_ResponseParamsSpec,
      [arg_config, arg_client],
      false);
  }

  decode(arg_bitstream_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Decode_ParamsSpec,
      null,
      [arg_bitstream_buffer],
      false);
  }

  assignPictureBuffers(arg_count) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_AssignPictureBuffers_ParamsSpec,
      null,
      [arg_count],
      false);
  }

  importBufferForPicture(arg_picture_buffer_id, arg_format, arg_handle_fd, arg_planes, arg_modifier) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_ImportBufferForPicture_ParamsSpec,
      null,
      [arg_picture_buffer_id, arg_format, arg_handle_fd, arg_planes, arg_modifier],
      false);
  }

  reusePictureBuffer(arg_picture_buffer_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_ReusePictureBuffer_ParamsSpec,
      null,
      [arg_picture_buffer_id],
      false);
  }

  reset() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Reset_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Reset_ResponseParamsSpec,
      [],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Flush_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Flush_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoDecodeAccelerator',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoDecodeAccelerator', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 9 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
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
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Initialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Decode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Decode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Decode (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AssignPictureBuffers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_AssignPictureBuffers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AssignPictureBuffers (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ImportBufferForPicture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_ImportBufferForPicture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImportBufferForPicture (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ReusePictureBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_ReusePictureBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReusePictureBuffer (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Reset
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Reset_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Reset (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Flush_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (6)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_config, params.arg_client);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Initialize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Initialize FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Decode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.decode');
          const result = this.impl.decode(params.arg_bitstream_buffer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_AssignPictureBuffers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.assignPictureBuffers');
          const result = this.impl.assignPictureBuffers(params.arg_count);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_ImportBufferForPicture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.importBufferForPicture');
          const result = this.impl.importBufferForPicture(params.arg_picture_buffer_id, params.arg_format, params.arg_handle_fd, params.arg_planes, params.arg_modifier);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_ReusePictureBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reusePictureBuffer');
          const result = this.impl.reusePictureBuffer(params.arg_picture_buffer_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Reset_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reset');
          const result = this.impl.reset();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Reset_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Reset FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Flush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VideoDecodeAccelerator_Flush_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Flush FAILED:', e));
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

mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorReceiver = mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorReceiver;

mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorPtr = mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorRemote;
mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorRequest = mojo.internal.bindings.arc.mojom.VideoDecodeAcceleratorPendingReceiver;


// Interface: VideoDecodeClient
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeClient_PictureReady_ParamsSpec, 'arc.mojom.VideoDecodeClient_PictureReady_Params', [
      mojo.internal.StructField('arg_picture', 0, 0, mojo.internal.bindings.arc.mojom.PictureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeClient_NotifyEndOfBitstreamBuffer_ParamsSpec, 'arc.mojom.VideoDecodeClient_NotifyEndOfBitstreamBuffer_Params', [
      mojo.internal.StructField('arg_bitstream_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeClient_NotifyError_ParamsSpec, 'arc.mojom.VideoDecodeClient_NotifyError_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.VideoDecodeAccelerator.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoDecodeClient_ProvidePictureBuffers_ParamsSpec, 'arc.mojom.VideoDecodeClient_ProvidePictureBuffers_Params', [
      mojo.internal.StructField('arg_format', 0, 0, mojo.internal.bindings.arc.mojom.PictureBufferFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visible_rect', 8, 0, mojo.internal.bindings.arc.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.arc.mojom.VideoDecodeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.VideoDecodeClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoDecodeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.VideoDecodeClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.VideoDecodeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  pictureReady(arg_picture) {
    return this.$.pictureReady(arg_picture);
  }
  notifyEndOfBitstreamBuffer(arg_bitstream_id) {
    return this.$.notifyEndOfBitstreamBuffer(arg_bitstream_id);
  }
  notifyError(arg_error) {
    return this.$.notifyError(arg_error);
  }
  providePictureBuffers(arg_format, arg_visible_rect) {
    return this.$.providePictureBuffers(arg_format, arg_visible_rect);
  }
};

mojo.internal.bindings.arc.mojom.VideoDecodeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoDecodeClient', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 5 },
    ]);
  }

  pictureReady(arg_picture) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecodeClient_PictureReady_ParamsSpec,
      null,
      [arg_picture],
      false);
  }

  notifyEndOfBitstreamBuffer(arg_bitstream_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecodeClient_NotifyEndOfBitstreamBuffer_ParamsSpec,
      null,
      [arg_bitstream_id],
      false);
  }

  notifyError(arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecodeClient_NotifyError_ParamsSpec,
      null,
      [arg_error],
      false);
  }

  providePictureBuffers(arg_format, arg_visible_rect) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoDecodeClient_ProvidePictureBuffers_ParamsSpec,
      null,
      [arg_format, arg_visible_rect],
      false);
  }

};

mojo.internal.bindings.arc.mojom.VideoDecodeClient.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.VideoDecodeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoDecodeClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.VideoDecodeClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoDecodeClient', [
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 5 },
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
        
        // Try Method 0: PictureReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeClient_PictureReady_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PictureReady (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NotifyEndOfBitstreamBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeClient_NotifyEndOfBitstreamBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyEndOfBitstreamBuffer (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: NotifyError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeClient_NotifyError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyError (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ProvidePictureBuffers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeClient_ProvidePictureBuffers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProvidePictureBuffers (3)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeClient_PictureReady_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pictureReady');
          const result = this.impl.pictureReady(params.arg_picture);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeClient_NotifyEndOfBitstreamBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyEndOfBitstreamBuffer');
          const result = this.impl.notifyEndOfBitstreamBuffer(params.arg_bitstream_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeClient_NotifyError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyError');
          const result = this.impl.notifyError(params.arg_error);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoDecodeClient_ProvidePictureBuffers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.providePictureBuffers');
          const result = this.impl.providePictureBuffers(params.arg_format, params.arg_visible_rect);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.VideoDecodeClientReceiver = mojo.internal.bindings.arc.mojom.VideoDecodeClientReceiver;

mojo.internal.bindings.arc.mojom.VideoDecodeClientPtr = mojo.internal.bindings.arc.mojom.VideoDecodeClientRemote;
mojo.internal.bindings.arc.mojom.VideoDecodeClientRequest = mojo.internal.bindings.arc.mojom.VideoDecodeClientPendingReceiver;

