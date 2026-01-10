// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/shared_image_capabilities.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};

gpu.mojom.SharedImageCapabilitiesSpec = { $: {} };

// Struct: SharedImageCapabilities
mojo.internal.Struct(
    gpu.mojom.SharedImageCapabilitiesSpec, 'gpu.mojom.SharedImageCapabilities', [
      mojo.internal.StructField('supports_scanout_shared_images', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_scanout_shared_images_for_software_video_frames', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_luminance_shared_images', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_r16_shared_images', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('supports_native_nv12_mappable_shared_images', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_r16f_supported', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_r8_shared_images', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_webgpu_shared_images', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_one_component_textures', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_image_d3d', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('shared_image_swap_chain', 1, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('texture_target_for_io_surfaces', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);
