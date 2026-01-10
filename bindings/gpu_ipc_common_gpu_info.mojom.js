// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_info.mojom
// Module: gpu.mojom

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
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};
var gl = gl || {};

gpu.mojom.SkiaBackendTypeSpec = { $: mojo.internal.Enum() };
gpu.mojom.VideoCodecProfileSpec = { $: mojo.internal.Enum() };
gpu.mojom.ImageDecodeAcceleratorTypeSpec = { $: mojo.internal.Enum() };
gpu.mojom.ImageDecodeAcceleratorSubsamplingSpec = { $: mojo.internal.Enum() };
gpu.mojom.OverlaySupportSpec = { $: mojo.internal.Enum() };
gpu.mojom.GpuDeviceSpec = { $: {} };
gpu.mojom.VideoDecodeAcceleratorSupportedProfileSpec = { $: {} };
gpu.mojom.VideoDecodeAcceleratorCapabilitiesSpec = { $: {} };
gpu.mojom.VideoEncodeAcceleratorSupportedProfileSpec = { $: {} };
gpu.mojom.ImageDecodeAcceleratorSupportedProfileSpec = { $: {} };
gpu.mojom.OverlayInfoSpec = { $: {} };
gpu.mojom.GpuInfoSpec = { $: {} };

// Enum: SkiaBackendType
gpu.mojom.SkiaBackendType = {
  kUnknown: 0,
  kNone: 1,
  kGaneshGL: 2,
  kGaneshVulkan: 3,
  kGraphiteDawnVulkan: 4,
  kGraphiteDawnMetal: 5,
  kGraphiteDawnD3D11: 6,
  kGraphiteDawnD3D12: 7,
  kGraphiteMetal: 8,
};

// Enum: VideoCodecProfile
gpu.mojom.VideoCodecProfile = {
  VIDEO_CODEC_PROFILE_UNKNOWN: -1,
  H264PROFILE_BASELINE: 0,
  H264PROFILE_MAIN: 1,
  H264PROFILE_EXTENDED: 2,
  H264PROFILE_HIGH: 3,
  H264PROFILE_HIGH10PROFILE: 4,
  H264PROFILE_HIGH422PROFILE: 5,
  H264PROFILE_HIGH444PREDICTIVEPROFILE: 6,
  H264PROFILE_SCALABLEBASELINE: 7,
  H264PROFILE_SCALABLEHIGH: 8,
  H264PROFILE_STEREOHIGH: 9,
  H264PROFILE_MULTIVIEWHIGH: 10,
  VP8PROFILE_ANY: 11,
  VP9PROFILE_PROFILE0: 12,
  VP9PROFILE_PROFILE1: 13,
  VP9PROFILE_PROFILE2: 14,
  VP9PROFILE_PROFILE3: 15,
  HEVCPROFILE_MAIN: 16,
  HEVCPROFILE_MAIN10: 17,
  HEVCPROFILE_MAIN_STILL_PICTURE: 18,
  DOLBYVISION_PROFILE0: 19,
  DOLBYVISION_PROFILE5: 21,
  DOLBYVISION_PROFILE7: 22,
  THEORAPROFILE_ANY: 23,
  AV1PROFILE_PROFILE_MAIN: 24,
  AV1PROFILE_PROFILE_HIGH: 25,
  AV1PROFILE_PROFILE_PRO: 26,
  DOLBYVISION_PROFILE8: 27,
  DOLBYVISION_PROFILE9: 28,
  HEVCPROFILE_REXT: 29,
  HEVCPROFILE_HIGH_THROUGHPUT: 30,
  HEVCPROFILE_MULTIVIEW_MAIN: 31,
  HEVCPROFILE_SCALABLE_MAIN: 32,
  HEVCPROFILE_3D_MAIN: 33,
  HEVCPROFILE_SCREEN_EXTENDED: 34,
  HEVCPROFILE_SCALABLE_REXT: 35,
  HEVCPROFILE_HIGH_THROUGHPUT_SCREEN_EXTENDED: 36,
  VVCPROFILE_MAIN10: 37,
  VVCPROFILE_MAIN12: 38,
  VVCPROFILE_MAIN12_INTRA: 39,
  VVCPROIFLE_MULTILAYER_MAIN10: 40,
  VVCPROFILE_MAIN10_444: 41,
  VVCPROFILE_MAIN12_444: 42,
  VVCPROFILE_MAIN16_444: 43,
  VVCPROFILE_MAIN12_444_INTRA: 44,
  VVCPROFILE_MAIN16_444_INTRA: 45,
  VVCPROFILE_MULTILAYER_MAIN10_444: 46,
  VVCPROFILE_MAIN10_STILL_PICTURE: 47,
  VVCPROFILE_MAIN12_STILL_PICTURE: 48,
  VVCPROFILE_MAIN10_444_STILL_PICTURE: 49,
  VVCPROFILE_MAIN12_444_STILL_PICTURE: 50,
  VVCPROFILE_MAIN16_444_STILL_PICTURE: 51,
};

// Enum: ImageDecodeAcceleratorType
gpu.mojom.ImageDecodeAcceleratorType = {
  kJpeg: 0,
  kWebP: 1,
  kUnknown: 2,
};

// Enum: ImageDecodeAcceleratorSubsampling
gpu.mojom.ImageDecodeAcceleratorSubsampling = {
  k420: 0,
  k422: 1,
  k444: 2,
};

// Enum: OverlaySupport
gpu.mojom.OverlaySupport = {
  NONE: 0,
  DIRECT: 1,
  SCALING: 2,
  SOFTWARE: 3,
};

// Struct: GpuDevice
mojo.internal.Struct(
    gpu.mojom.GpuDeviceSpec, 'gpu.mojom.GpuDevice', [
      mojo.internal.StructField('vendor_string', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_string', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('driver_vendor', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('driver_version', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('luid', 32, 0, gpu.mojom.LuidSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gpu_preference', 40, 0, gl.mojom.GpuPreferenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('vendor_id', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('device_id', 52, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('sub_sys_id', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('revision', 60, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('active', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: VideoDecodeAcceleratorSupportedProfile
mojo.internal.Struct(
    gpu.mojom.VideoDecodeAcceleratorSupportedProfileSpec, 'gpu.mojom.VideoDecodeAcceleratorSupportedProfile', [
      mojo.internal.StructField('profile', 0, 0, gpu.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_resolution', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_resolution', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('encrypted_only', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: VideoDecodeAcceleratorCapabilities
mojo.internal.Struct(
    gpu.mojom.VideoDecodeAcceleratorCapabilitiesSpec, 'gpu.mojom.VideoDecodeAcceleratorCapabilities', [
      mojo.internal.StructField('supported_profiles', 0, 0, mojo.internal.Array(gpu.mojom.VideoDecodeAcceleratorSupportedProfileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('flags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoEncodeAcceleratorSupportedProfile
mojo.internal.Struct(
    gpu.mojom.VideoEncodeAcceleratorSupportedProfileSpec, 'gpu.mojom.VideoEncodeAcceleratorSupportedProfile', [
      mojo.internal.StructField('profile', 0, 0, gpu.mojom.VideoCodecProfileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_resolution', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_resolution', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_framerate_numerator', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_framerate_denominator', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ImageDecodeAcceleratorSupportedProfile
mojo.internal.Struct(
    gpu.mojom.ImageDecodeAcceleratorSupportedProfileSpec, 'gpu.mojom.ImageDecodeAcceleratorSupportedProfile', [
      mojo.internal.StructField('image_type', 0, 0, gpu.mojom.ImageDecodeAcceleratorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('min_encoded_dimensions', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_encoded_dimensions', 16, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('subsamplings', 24, 0, mojo.internal.Array(gpu.mojom.ImageDecodeAcceleratorSubsamplingSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OverlayInfo
mojo.internal.Struct(
    gpu.mojom.OverlayInfoSpec, 'gpu.mojom.OverlayInfo', [
      mojo.internal.StructField('yuy2_overlay_support', 0, 0, gpu.mojom.OverlaySupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('nv12_overlay_support', 8, 0, gpu.mojom.OverlaySupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bgra8_overlay_support', 16, 0, gpu.mojom.OverlaySupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rgb10a2_overlay_support', 24, 0, gpu.mojom.OverlaySupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('p010_overlay_support', 32, 0, gpu.mojom.OverlaySupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('direct_composition', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_overlays', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: GpuInfo
mojo.internal.Struct(
    gpu.mojom.GpuInfoSpec, 'gpu.mojom.GpuInfo', [
      mojo.internal.StructField('initialization_time', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gpu', 8, 0, gpu.mojom.GpuDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('secondary_gpus', 16, 0, mojo.internal.Array(gpu.mojom.GpuDeviceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('npus', 24, 0, mojo.internal.Array(gpu.mojom.GpuDeviceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pixel_shader_version', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('vertex_shader_version', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('max_msaa_samples', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('machine_model_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('machine_model_version', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_type', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('skia_backend_type', 80, 0, gpu.mojom.SkiaBackendTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gl_version', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_vendor', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_renderer', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_extensions', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_ws_vendor', 120, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_ws_version', 128, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_ws_extensions', 136, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('gl_implementation_parts', 144, 0, gl.mojom.GLImplementationPartsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('direct_rendering_version', 152, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('overlay_info', 160, 0, gpu.mojom.OverlayInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('video_decode_accelerator_supported_profiles', 168, 0, mojo.internal.Array(gpu.mojom.VideoDecodeAcceleratorSupportedProfileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('video_encode_accelerator_supported_profiles', 176, 0, mojo.internal.Array(gpu.mojom.VideoEncodeAcceleratorSupportedProfileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('vulkan_info', 184, 0, gpu.mojom.VulkanInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('gl_reset_notification_strategy', 192, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('directml_feature_level', 196, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('d3d12_feature_level', 200, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('vulkan_version', 204, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('visibility_callback_call_count', 208, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('optimus', 212, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('amd_switchable', 212, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sandboxed', 212, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('in_process_gpu', 212, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('passthrough_cmd_decoder', 212, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('can_support_threaded_texture_mailbox', 212, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_image_d3d', 212, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('jpeg_decode_accelerator_supported', 212, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('subpixel_font_rendering', 213, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hardware_supports_vulkan', 213, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 224]]);
