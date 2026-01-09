// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/shared_image_capabilities.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Struct: SharedImageCapabilities
gpu.mojom.SharedImageCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.SharedImageCapabilities',
      packedSize: 32,
      fields: [
        { name: 'supports_scanout_shared_images_for_software_video_frames', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'texture_target_for_io_surfaces', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'supports_scanout_shared_images', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'supports_luminance_shared_images', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'supports_r16_shared_images', packedOffset: 16, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'supports_native_nv12_mappable_shared_images', packedOffset: 16, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'is_r16f_supported', packedOffset: 16, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_r8_shared_images', packedOffset: 16, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_webgpu_shared_images', packedOffset: 16, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_one_component_textures', packedOffset: 16, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false },
        { name: 'shared_image_d3d', packedOffset: 16, packedBitOffset: 8, type: mojo.internal.Bool, nullable: false },
        { name: 'shared_image_swap_chain', packedOffset: 16, packedBitOffset: 9, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
