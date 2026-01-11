// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/video_encode_accelerator.mojom
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

mojo.internal.bindings.arc.mojom.VideoFrameStorageTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.ErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.ResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.BitrateSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeProfileSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ConstantBitrateSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VariableBitrateSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorConfigSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator = {};
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator.$interfaceName = 'arc.mojom.VideoEncodeAccelerator';
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Encode_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Flush_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeClient = {};
mojo.internal.bindings.arc.mojom.VideoEncodeClient.$interfaceName = 'arc.mojom.VideoEncodeClient';
mojo.internal.bindings.arc.mojom.VideoEncodeClient_RequireBitstreamBuffers_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.VideoEncodeClient_NotifyError_ParamsSpec = { $: {} };

// Enum: VideoFrameStorageType
mojo.internal.bindings.arc.mojom.VideoFrameStorageType = {
  SHMEM: 0,
  DMABUF: 1,
};

// Enum: Error
mojo.internal.bindings.arc.mojom.Error = {
  kIllegalStateError: 0,
  kInvalidArgumentError: 1,
  kPlatformFailureError: 2,
  kErrorMax: 2,
};

// Enum: Result
mojo.internal.bindings.arc.mojom.Result = {
  kSuccess: 0,
  kIllegalStateError: 1,
  kInvalidArgumentError: 2,
  kPlatformFailureError: 3,
  kInsufficientResourcesError: 4,
};

// Union: Bitrate
mojo.internal.Union(
    mojo.internal.bindings.arc.mojom.BitrateSpec, 'arc.mojom.Bitrate', {
      'arg_constant': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.arc.mojom.ConstantBitrateSpec.$,
        'nullable': false,
      },
      'arg_variable': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.arc.mojom.VariableBitrateSpec.$,
        'nullable': false,
      },
    });

// Struct: VideoEncodeProfile
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeProfileSpec, 'arc.mojom.VideoEncodeProfile', [
      mojo.internal.StructField('arg_profile', 0, 0, mojo.internal.bindings.arc.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_resolution', 8, 0, mojo.internal.bindings.arc.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_framerate_numerator', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_framerate_denominator', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ConstantBitrate
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ConstantBitrateSpec, 'arc.mojom.ConstantBitrate', [
      mojo.internal.StructField('arg_target', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VariableBitrate
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VariableBitrateSpec, 'arc.mojom.VariableBitrate', [
      mojo.internal.StructField('arg_target', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_peak', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoEncodeAcceleratorConfig
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorConfigSpec, 'arc.mojom.VideoEncodeAcceleratorConfig', [
      mojo.internal.StructField('arg_input_format', 0, 0, mojo.internal.bindings.arc.mojom.VideoPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_visible_size', 8, 0, mojo.internal.bindings.arc.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_output_profile', 16, 0, mojo.internal.bindings.arc.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_initial_bitrate_deprecated', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_initial_framerate', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_initial_framerate_deprecated', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_h264_output_level', 33, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_h264_output_level', 34, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_storage_type', 40, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.VideoFrameStorageTypeSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('arg_bitrate', 48, 0, mojo.internal.bindings.arc.mojom.BitrateSpec.$, null, true, 5, undefined),
    ],
    [[0, 48], [1, 56], [5, 64]]);

// Interface: VideoEncodeAccelerator
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ResponseParamsSpec, 'arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ResponseParams', [
      mojo.internal.StructField('arg_profiles', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.arc.mojom.VideoEncodeProfileSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_Initialize_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.VideoEncodeClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec, 'arc.mojom.VideoEncodeAccelerator_Initialize_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Encode_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_Encode_Params', [
      mojo.internal.StructField('arg_format', 0, 0, mojo.internal.bindings.arc.mojom.VideoPixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_planes', 8, 0, mojo.internal.Array(mojo.internal.bindings.arc.mojom.VideoFramePlaneSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_frame_fd', 24, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('arg_force_keyframe', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec, 'arc.mojom.VideoEncodeAccelerator_Encode_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_Params', [
      mojo.internal.StructField('arg_shmem_fd', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ResponseParamsSpec, 'arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ResponseParams', [
      mojo.internal.StructField('arg_timestamp', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_payload_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_frame', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_Params', [
      mojo.internal.StructField('arg_bitrate', 0, 0, mojo.internal.bindings.arc.mojom.BitrateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_framerate', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_Params', [
      mojo.internal.StructField('arg_bitrate', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_framerate', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Flush_ParamsSpec, 'arc.mojom.VideoEncodeAccelerator_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec, 'arc.mojom.VideoEncodeAccelerator_Flush_ResponseParams', [
      mojo.internal.StructField('arg_flush_done', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoEncodeAccelerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getSupportedProfiles() {
    return this.$.getSupportedProfiles();
  }
  initialize(arg_config, arg_client) {
    return this.$.initialize(arg_config, arg_client);
  }
  encode(arg_format, arg_frame_fd, arg_planes, arg_timestamp, arg_force_keyframe) {
    return this.$.encode(arg_format, arg_frame_fd, arg_planes, arg_timestamp, arg_force_keyframe);
  }
  useBitstreamBuffer(arg_shmem_fd, arg_offset, arg_size) {
    return this.$.useBitstreamBuffer(arg_shmem_fd, arg_offset, arg_size);
  }
  requestEncodingParametersChange(arg_bitrate, arg_framerate) {
    return this.$.requestEncodingParametersChange(arg_bitrate, arg_framerate);
  }
  requestEncodingParametersChangeDeprecated(arg_bitrate, arg_framerate) {
    return this.$.requestEncodingParametersChangeDeprecated(arg_bitrate, arg_framerate);
  }
  flush() {
    return this.$.flush();
  }
};

mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAccelerator', [
      { explicit: 0 },
      { explicit: 9 },
      { explicit: 8 },
      { explicit: 3 },
      { explicit: 10 },
      { explicit: 4 },
      { explicit: 5 },
    ]);
  }

  getSupportedProfiles() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ResponseParamsSpec,
      [],
      false);
  }

  initialize(arg_config, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec,
      [arg_config, arg_client],
      false);
  }

  encode(arg_format, arg_frame_fd, arg_planes, arg_timestamp, arg_force_keyframe) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Encode_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec,
      [arg_format, arg_frame_fd, arg_planes, arg_timestamp, arg_force_keyframe],
      false);
  }

  useBitstreamBuffer(arg_shmem_fd, arg_offset, arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ResponseParamsSpec,
      [arg_shmem_fd, arg_offset, arg_size],
      false);
  }

  requestEncodingParametersChange(arg_bitrate, arg_framerate) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_ParamsSpec,
      null,
      [arg_bitrate, arg_framerate],
      false);
  }

  requestEncodingParametersChangeDeprecated(arg_bitrate, arg_framerate) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_ParamsSpec,
      null,
      [arg_bitrate, arg_framerate],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Flush_ParamsSpec,
      mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoEncodeAccelerator',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoEncodeAccelerator', [
      { explicit: 0 },
      { explicit: 9 },
      { explicit: 8 },
      { explicit: 3 },
      { explicit: 10 },
      { explicit: 4 },
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
        
        // Try Method 0: GetSupportedProfiles
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSupportedProfiles (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Encode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Encode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Encode (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: UseBitstreamBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UseBitstreamBuffer (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RequestEncodingParametersChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestEncodingParametersChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RequestEncodingParametersChangeDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestEncodingParametersChangeDeprecated (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Flush_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSupportedProfiles');
          const result = this.impl.getSupportedProfiles();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_GetSupportedProfiles_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSupportedProfiles FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Initialize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize(params.arg_config, params.arg_client);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Initialize_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Initialize FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Encode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.encode');
          const result = this.impl.encode(params.arg_format, params.arg_frame_fd, params.arg_planes, params.arg_timestamp, params.arg_force_keyframe);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Encode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Encode FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.useBitstreamBuffer');
          const result = this.impl.useBitstreamBuffer(params.arg_shmem_fd, params.arg_offset, params.arg_size);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_UseBitstreamBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UseBitstreamBuffer FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestEncodingParametersChange');
          const result = this.impl.requestEncodingParametersChange(params.arg_bitrate, params.arg_framerate);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_RequestEncodingParametersChangeDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestEncodingParametersChangeDeprecated');
          const result = this.impl.requestEncodingParametersChangeDeprecated(params.arg_bitrate, params.arg_framerate);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Flush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.VideoEncodeAccelerator_Flush_ResponseParamsSpec, header, rawHeader);
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

mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorReceiver = mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorReceiver;

mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorPtr = mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorRemote;
mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorRequest = mojo.internal.bindings.arc.mojom.VideoEncodeAcceleratorPendingReceiver;


// Interface: VideoEncodeClient
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeClient_RequireBitstreamBuffers_ParamsSpec, 'arc.mojom.VideoEncodeClient_RequireBitstreamBuffers_Params', [
      mojo.internal.StructField('arg_input_coded_size', 0, 0, mojo.internal.bindings.arc.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_output_buffer_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.VideoEncodeClient_NotifyError_ParamsSpec, 'arc.mojom.VideoEncodeClient_NotifyError_Params', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.VideoEncodeAccelerator.ErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.VideoEncodeClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.VideoEncodeClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VideoEncodeClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.VideoEncodeClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.VideoEncodeClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requireBitstreamBuffers(arg_input_count, arg_input_coded_size, arg_output_buffer_size) {
    return this.$.requireBitstreamBuffers(arg_input_count, arg_input_coded_size, arg_output_buffer_size);
  }
  notifyError(arg_error) {
    return this.$.notifyError(arg_error);
  }
};

mojo.internal.bindings.arc.mojom.VideoEncodeClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoEncodeClient', [
      { explicit: 0 },
      { explicit: 2 },
    ]);
  }

  requireBitstreamBuffers(arg_input_count, arg_input_coded_size, arg_output_buffer_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoEncodeClient_RequireBitstreamBuffers_ParamsSpec,
      null,
      [arg_input_count, arg_input_coded_size, arg_output_buffer_size],
      false);
  }

  notifyError(arg_error) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.VideoEncodeClient_NotifyError_ParamsSpec,
      null,
      [arg_error],
      false);
  }

};

mojo.internal.bindings.arc.mojom.VideoEncodeClient.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.VideoEncodeClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VideoEncodeClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.VideoEncodeClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoEncodeClient', [
      { explicit: 0 },
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
        
        // Try Method 0: RequireBitstreamBuffers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeClient_RequireBitstreamBuffers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequireBitstreamBuffers (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NotifyError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeClient_NotifyError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyError (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeClient_RequireBitstreamBuffers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requireBitstreamBuffers');
          const result = this.impl.requireBitstreamBuffers(params.arg_input_count, params.arg_input_coded_size, params.arg_output_buffer_size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.VideoEncodeClient_NotifyError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyError');
          const result = this.impl.notifyError(params.arg_error);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.VideoEncodeClientReceiver = mojo.internal.bindings.arc.mojom.VideoEncodeClientReceiver;

mojo.internal.bindings.arc.mojom.VideoEncodeClientPtr = mojo.internal.bindings.arc.mojom.VideoEncodeClientRemote;
mojo.internal.bindings.arc.mojom.VideoEncodeClientRequest = mojo.internal.bindings.arc.mojom.VideoEncodeClientPendingReceiver;

