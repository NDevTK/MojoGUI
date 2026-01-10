// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_channel.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};
var skia = skia || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var url = url || {};


// Enum: ContextType
gpu.mojom.ContextType = {
  kWebGL1: 0,
  kWebGL2: 1,
  kOpenGLES2: 2,
  kOpenGLES3: 3,
  kOpenGLES31ForTesting: 4,
};
gpu.mojom.ContextTypeSpec = { $: mojo.internal.Enum() };

// Enum: ContextColorSpace
gpu.mojom.ContextColorSpace = {
  kUnspecified: 0,
  kSRGB: 1,
  kDisplayP3: 2,
};
gpu.mojom.ContextColorSpaceSpec = { $: mojo.internal.Enum() };

// Enum: SchedulingPriority
gpu.mojom.SchedulingPriority = {
  kHigh: 0,
  kNormal: 1,
  kLow: 2,
};
gpu.mojom.SchedulingPrioritySpec = { $: mojo.internal.Enum() };

// Union: ContextCreationAttribs
gpu.mojom.ContextCreationAttribsSpec = { $: mojo.internal.Union(
    'gpu.mojom.ContextCreationAttribs', {
      'gles': {
        'ordinal': 0,
        'type': gpu.mojom.GLESCreationAttribsSpec,
      }},
      'raster': {
        'ordinal': 1,
        'type': gpu.mojom.RasterCreationAttribsSpec,
      }},
      'webgpu': {
        'ordinal': 2,
        'type': gpu.mojom.WebGPUCreationAttribsSpec,
      }},
    })
};

// Union: DeferredRequestParams
gpu.mojom.DeferredRequestParamsSpec = { $: mojo.internal.Union(
    'gpu.mojom.DeferredRequestParams', {
      'command_buffer_request': {
        'ordinal': 0,
        'type': gpu.mojom.DeferredCommandBufferRequestSpec,
      }},
      'shared_image_request': {
        'ordinal': 1,
        'type': gpu.mojom.DeferredSharedImageRequestSpec,
      }},
      'destroy_dcomp_texture': {
        'ordinal': 2,
        'type': mojo.internal.Int32,
      }},
    })
};

// Union: DeferredCommandBufferRequestParams
gpu.mojom.DeferredCommandBufferRequestParamsSpec = { $: mojo.internal.Union(
    'gpu.mojom.DeferredCommandBufferRequestParams', {
      'async_flush': {
        'ordinal': 0,
        'type': gpu.mojom.AsyncFlushParamsSpec,
      }},
      'destroy_transfer_buffer': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
      }},
    })
};

// Union: DeferredSharedImageRequest
gpu.mojom.DeferredSharedImageRequestSpec = { $: mojo.internal.Union(
    'gpu.mojom.DeferredSharedImageRequest', {
      'nop': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'create_shared_image': {
        'ordinal': 1,
        'type': gpu.mojom.CreateSharedImageParamsSpec,
      }},
      'create_shared_image_with_data': {
        'ordinal': 2,
        'type': gpu.mojom.CreateSharedImageWithDataParamsSpec,
      }},
      'create_shared_image_with_buffer': {
        'ordinal': 3,
        'type': gpu.mojom.CreateSharedImageWithBufferParamsSpec,
      }},
      'register_upload_buffer': {
        'ordinal': 4,
        'type': mojo_base.mojom.ReadOnlySharedMemoryRegionSpec,
      }},
      'update_shared_image': {
        'ordinal': 5,
        'type': gpu.mojom.UpdateSharedImageParamsSpec,
      }},
      'copy_to_gpu_memory_buffer': {
        'ordinal': 6,
        'type': gpu.mojom.CopyToGpuMemoryBufferParamsSpec,
      }},
      'destroy_shared_image': {
        'ordinal': 7,
        'type': gpu.mojom.MailboxSpec,
      }},
      'add_reference_to_shared_image': {
        'ordinal': 8,
        'type': gpu.mojom.AddReferenceToSharedImageParamsSpec,
      }},
      'register_dxgi_fence': {
        'ordinal': 9,
        'type': gpu.mojom.RegisterDxgiFenceParamsSpec,
      }},
      'update_dxgi_fence': {
        'ordinal': 10,
        'type': gpu.mojom.UpdateDxgiFenceParamsSpec,
      }},
      'unregister_dxgi_fence': {
        'ordinal': 11,
        'type': gpu.mojom.UnregisterDxgiFenceParamsSpec,
      }},
      'create_shared_image_pool': {
        'ordinal': 12,
        'type': gpu.mojom.CreateSharedImagePoolParamsSpec,
      }},
      'destroy_shared_image_pool': {
        'ordinal': 13,
        'type': gpu.mojom.DestroySharedImagePoolParamsSpec,
      }},
    })
};

// Struct: RasterCreationAttribs
gpu.mojom.RasterCreationAttribsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.RasterCreationAttribs',
      packedSize: 16,
      fields: [
        { name: 'lose_context_when_out_of_memory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: GLESCreationAttribs
gpu.mojom.GLESCreationAttribsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GLESCreationAttribs',
      packedSize: 24,
      fields: [
        { name: 'gpu_preference', packedOffset: 0, packedBitOffset: 0, type: gl.mojom.GpuPreferenceSpec, nullable: false, minVersion: 0 },
        { name: 'fail_if_major_perf_caveat', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'lose_context_when_out_of_memory', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'context_type', packedOffset: 4, packedBitOffset: 0, type: gpu.mojom.ContextTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: WebGPUCreationAttribs
gpu.mojom.WebGPUCreationAttribsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.WebGPUCreationAttribs',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: CreateCommandBufferParams
gpu.mojom.CreateCommandBufferParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CreateCommandBufferParams',
      packedSize: 48,
      fields: [
        { name: 'stream_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'stream_priority', packedOffset: 36, packedBitOffset: 0, type: gpu.mojom.SchedulingPrioritySpec, nullable: false, minVersion: 0 },
        { name: 'attribs', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.ContextCreationAttribsSpec, nullable: false, minVersion: 0 },
        { name: 'active_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: CommandBufferState
gpu.mojom.CommandBufferStateSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBufferState',
      packedSize: 48,
      fields: [
        { name: 'get_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'token', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'release_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.ErrorSpec, nullable: false, minVersion: 0 },
        { name: 'context_lost_reason', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.ContextLostReasonSpec, nullable: false, minVersion: 0 },
        { name: 'generation', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'set_get_buffer_count', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: DeferredRequest
gpu.mojom.DeferredRequestSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DeferredRequest',
      packedSize: 40,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.DeferredRequestParamsSpec, nullable: false, minVersion: 0 },
        { name: 'sync_token_fences', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.SyncTokenSpec, false), nullable: false, minVersion: 0 },
        { name: 'release_count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DeferredCommandBufferRequest
gpu.mojom.DeferredCommandBufferRequestSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DeferredCommandBufferRequest',
      packedSize: 32,
      fields: [
        { name: 'routing_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.DeferredCommandBufferRequestParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AsyncFlushParams
gpu.mojom.AsyncFlushParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.AsyncFlushParams',
      packedSize: 24,
      fields: [
        { name: 'put_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'flush_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'sync_token_fences', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.SyncTokenSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SharedImageInfo
gpu.mojom.SharedImageInfoSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.SharedImageInfo',
      packedSize: 24,
      fields: [
        { name: 'meta', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.SharedImageMetadataSpec, nullable: false, minVersion: 0 },
        { name: 'debug_label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CreateSharedImageParams
gpu.mojom.CreateSharedImageParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CreateSharedImageParams',
      packedSize: 32,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
        { name: 'si_info', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SharedImageInfoSpec, nullable: false, minVersion: 0 },
        { name: 'pool_id', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SharedImagePoolIdSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CreateSharedImageWithDataParams
gpu.mojom.CreateSharedImageWithDataParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CreateSharedImageWithDataParams',
      packedSize: 40,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
        { name: 'si_info', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SharedImageInfoSpec, nullable: false, minVersion: 0 },
        { name: 'pixel_data_offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pixel_data_size', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'done_with_shm', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: CreateSharedImageWithBufferParams
gpu.mojom.CreateSharedImageWithBufferParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CreateSharedImageWithBufferParams',
      packedSize: 40,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
        { name: 'si_info', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SharedImageInfoSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_handle', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: false, minVersion: 0 },
        { name: 'pool_id', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.SharedImagePoolIdSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: UpdateSharedImageParams
gpu.mojom.UpdateSharedImageParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.UpdateSharedImageParams',
      packedSize: 24,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
        { name: 'in_fence_handle', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AddReferenceToSharedImageParams
gpu.mojom.AddReferenceToSharedImageParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.AddReferenceToSharedImageParams',
      packedSize: 16,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CopyToGpuMemoryBufferParams
gpu.mojom.CopyToGpuMemoryBufferParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CopyToGpuMemoryBufferParams',
      packedSize: 16,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: RegisterDxgiFenceParams
gpu.mojom.RegisterDxgiFenceParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.RegisterDxgiFenceParams',
      packedSize: 32,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
        { name: 'dxgi_token', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.DXGIHandleTokenSpec, nullable: false, minVersion: 0 },
        { name: 'fence_handle', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: UpdateDxgiFenceParams
gpu.mojom.UpdateDxgiFenceParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.UpdateDxgiFenceParams',
      packedSize: 32,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
        { name: 'dxgi_token', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.DXGIHandleTokenSpec, nullable: false, minVersion: 0 },
        { name: 'fence_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: UnregisterDxgiFenceParams
gpu.mojom.UnregisterDxgiFenceParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.UnregisterDxgiFenceParams',
      packedSize: 24,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
        { name: 'dxgi_token', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.DXGIHandleTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CreateSharedImagePoolParams
gpu.mojom.CreateSharedImagePoolParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CreateSharedImagePoolParams',
      packedSize: 24,
      fields: [
        { name: 'pool_id', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.SharedImagePoolIdSpec, nullable: false, minVersion: 0 },
        { name: 'client_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(gpu.mojom.SharedImagePoolClientInterfaceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DestroySharedImagePoolParams
gpu.mojom.DestroySharedImagePoolParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DestroySharedImagePoolParams',
      packedSize: 16,
      fields: [
        { name: 'pool_id', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.SharedImagePoolIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: GpuChannel
gpu.mojom.GpuChannel = {};

gpu.mojom.GpuChannel_CrashForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_CrashForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

gpu.mojom.GpuChannel_TerminateForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_TerminateForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

gpu.mojom.GpuChannel_GetChannelToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_GetChannelToken_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

gpu.mojom.GpuChannel_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

gpu.mojom.GpuChannel_CreateCommandBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_CreateCommandBuffer_Params',
      packedSize: 48,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.CreateCommandBufferParamsSpec, nullable: false, minVersion: 0 },
        { name: 'routing_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'shared_state', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(gpu.mojom.CommandBufferRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(gpu.mojom.CommandBufferClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

gpu.mojom.GpuChannel_DestroyCommandBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_DestroyCommandBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'routing_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.GpuChannel_FlushDeferredRequests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_FlushDeferredRequests_Params',
      packedSize: 24,
      fields: [
        { name: 'requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.DeferredRequestSpec, false), nullable: false, minVersion: 0 },
        { name: 'flushed_deferred_message_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_Params',
      packedSize: 40,
      fields: [
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.SharedImageFormatSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_usage', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.BufferUsageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

gpu.mojom.GpuChannel_CreateDCOMPTexture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_CreateDCOMPTexture_Params',
      packedSize: 24,
      fields: [
        { name: 'route_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(gpu.mojom.DCOMPTextureRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_RegisterOverlayStateObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'promotion_hint_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(gpu.mojom.OverlayStateObserverRemote), nullable: false, minVersion: 0 },
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.GpuChannel_WaitForTokenInRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_WaitForTokenInRange_Params',
      packedSize: 24,
      fields: [
        { name: 'routing_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'start', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_WaitForGetOffsetInRange_Params',
      packedSize: 24,
      fields: [
        { name: 'routing_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'set_get_buffer_count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'start', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.GpuChannel_RegisterSysmemBufferCollection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_RegisterSysmemBufferCollection_Params',
      packedSize: 48,
      fields: [
        { name: 'service_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'sysmem_token', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.SharedImageFormatSpec, nullable: false, minVersion: 0 },
        { name: 'usage', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.BufferUsageSpec, nullable: false, minVersion: 0 },
        { name: 'register_with_image_pipe', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_Params',
      packedSize: 32,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
        { name: 'sync_token_dependencies', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.SyncTokenSpec, false), nullable: false, minVersion: 0 },
        { name: 'release_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: false, minVersion: 0 },
        { name: 'shared_memory', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.GpuChannelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gpu.mojom.GpuChannelRemote = class {
  static get $interfaceName() {
    return 'gpu.mojom.GpuChannel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gpu.mojom.GpuChannelPendingReceiver,
      handle);
    this.$ = new gpu.mojom.GpuChannelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gpu.mojom.GpuChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  crashForTesting() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gpu.mojom.GpuChannel_CrashForTesting_ParamsSpec,
      null,
      []);
  }

  terminateForTesting() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gpu.mojom.GpuChannel_TerminateForTesting_ParamsSpec,
      null,
      []);
  }

  getChannelToken() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      gpu.mojom.GpuChannel_GetChannelToken_ParamsSpec,
      gpu.mojom.GpuChannel_GetChannelToken_ResponseParamsSpec,
      []);
  }

  flush() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      gpu.mojom.GpuChannel_Flush_ParamsSpec,
      null,
      []);
  }

  getSharedMemoryForFlushId() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ParamsSpec,
      gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ResponseParamsSpec,
      []);
  }

  createCommandBuffer(params, routing_id, shared_state, receiver, client) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      gpu.mojom.GpuChannel_CreateCommandBuffer_ParamsSpec,
      gpu.mojom.GpuChannel_CreateCommandBuffer_ResponseParamsSpec,
      [params, routing_id, shared_state, receiver, client]);
  }

  destroyCommandBuffer(routing_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      gpu.mojom.GpuChannel_DestroyCommandBuffer_ParamsSpec,
      null,
      [routing_id]);
  }

  flushDeferredRequests(requests, flushed_deferred_message_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      gpu.mojom.GpuChannel_FlushDeferredRequests_ParamsSpec,
      null,
      [requests, flushed_deferred_message_id]);
  }

  createGpuMemoryBuffer(size, format, buffer_usage) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ParamsSpec,
      gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ResponseParamsSpec,
      [size, format, buffer_usage]);
  }

  createDCOMPTexture(route_id, receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      gpu.mojom.GpuChannel_CreateDCOMPTexture_ParamsSpec,
      gpu.mojom.GpuChannel_CreateDCOMPTexture_ResponseParamsSpec,
      [route_id, receiver]);
  }

  registerOverlayStateObserver(promotion_hint_observer, mailbox) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ParamsSpec,
      gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ResponseParamsSpec,
      [promotion_hint_observer, mailbox]);
  }

  waitForTokenInRange(routing_id, start, end) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      gpu.mojom.GpuChannel_WaitForTokenInRange_ParamsSpec,
      gpu.mojom.GpuChannel_WaitForTokenInRange_ResponseParamsSpec,
      [routing_id, start, end]);
  }

  waitForGetOffsetInRange(routing_id, set_get_buffer_count, start, end) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ParamsSpec,
      gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ResponseParamsSpec,
      [routing_id, set_get_buffer_count, start, end]);
  }

  registerSysmemBufferCollection(service_handle, sysmem_token, format, usage, register_with_image_pipe) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      gpu.mojom.GpuChannel_RegisterSysmemBufferCollection_ParamsSpec,
      null,
      [service_handle, sysmem_token, format, usage, register_with_image_pipe]);
  }

  copyToGpuMemoryBufferAsync(mailbox, sync_token_dependencies, release_count) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ParamsSpec,
      gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParamsSpec,
      [mailbox, sync_token_dependencies, release_count]);
  }

  copyNativeGmbToSharedMemoryAsync(buffer_handle, shared_memory) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ParamsSpec,
      gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParamsSpec,
      [buffer_handle, shared_memory]);
  }

};

gpu.mojom.GpuChannel.getRemote = function() {
  let remote = new gpu.mojom.GpuChannelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gpu.mojom.GpuChannel',
    'context');
  return remote.$;
};

// ParamsSpec for CrashForTesting
gpu.mojom.GpuChannel_CrashForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CrashForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for TerminateForTesting
gpu.mojom.GpuChannel_TerminateForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.TerminateForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetChannelToken
gpu.mojom.GpuChannel_GetChannelToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.GetChannelToken_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

gpu.mojom.GpuChannel_GetChannelToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.GetChannelToken_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Flush
gpu.mojom.GpuChannel_Flush_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.Flush_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetSharedMemoryForFlushId
gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.GetSharedMemoryForFlushId_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.GetSharedMemoryForFlushId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'version_buffer', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateCommandBuffer
gpu.mojom.GpuChannel_CreateCommandBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CreateCommandBuffer_Params',
      packedSize: 48,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.CreateCommandBufferParamsSpec, nullable: false, minVersion: 0 },
        { name: 'routing_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'shared_state', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(gpu.mojom.CommandBufferRemote), nullable: false, minVersion: 0 },
        { name: 'client', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(gpu.mojom.CommandBufferClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

gpu.mojom.GpuChannel_CreateCommandBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CreateCommandBuffer_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.ContextResultSpec, nullable: false, minVersion: 0 },
        { name: 'capabilties', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.CapabilitiesSpec, nullable: false, minVersion: 0 },
        { name: 'gl_capabilities', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.GLCapabilitiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for DestroyCommandBuffer
gpu.mojom.GpuChannel_DestroyCommandBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.DestroyCommandBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'routing_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FlushDeferredRequests
gpu.mojom.GpuChannel_FlushDeferredRequests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.FlushDeferredRequests_Params',
      packedSize: 24,
      fields: [
        { name: 'requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.DeferredRequestSpec, false), nullable: false, minVersion: 0 },
        { name: 'flushed_deferred_message_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateGpuMemoryBuffer
gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CreateGpuMemoryBuffer_Params',
      packedSize: 40,
      fields: [
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.SharedImageFormatSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_usage', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.BufferUsageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CreateGpuMemoryBuffer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateDCOMPTexture
gpu.mojom.GpuChannel_CreateDCOMPTexture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CreateDCOMPTexture_Params',
      packedSize: 24,
      fields: [
        { name: 'route_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(gpu.mojom.DCOMPTextureRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.GpuChannel_CreateDCOMPTexture_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CreateDCOMPTexture_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterOverlayStateObserver
gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.RegisterOverlayStateObserver_Params',
      packedSize: 24,
      fields: [
        { name: 'promotion_hint_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(gpu.mojom.OverlayStateObserverRemote), nullable: false, minVersion: 0 },
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.RegisterOverlayStateObserver_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WaitForTokenInRange
gpu.mojom.GpuChannel_WaitForTokenInRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.WaitForTokenInRange_Params',
      packedSize: 24,
      fields: [
        { name: 'routing_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'start', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.GpuChannel_WaitForTokenInRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.WaitForTokenInRange_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.CommandBufferStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for WaitForGetOffsetInRange
gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.WaitForGetOffsetInRange_Params',
      packedSize: 24,
      fields: [
        { name: 'routing_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'set_get_buffer_count', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'start', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.WaitForGetOffsetInRange_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.CommandBufferStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterSysmemBufferCollection
gpu.mojom.GpuChannel_RegisterSysmemBufferCollection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.RegisterSysmemBufferCollection_Params',
      packedSize: 48,
      fields: [
        { name: 'service_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'sysmem_token', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'format', packedOffset: 0, packedBitOffset: 0, type: viz.mojom.SharedImageFormatSpec, nullable: false, minVersion: 0 },
        { name: 'usage', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.BufferUsageSpec, nullable: false, minVersion: 0 },
        { name: 'register_with_image_pipe', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for CopyToGpuMemoryBufferAsync
gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CopyToGpuMemoryBufferAsync_Params',
      packedSize: 32,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
        { name: 'sync_token_dependencies', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gpu.mojom.SyncTokenSpec, false), nullable: false, minVersion: 0 },
        { name: 'release_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CopyToGpuMemoryBufferAsync_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CopyNativeGmbToSharedMemoryAsync
gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CopyNativeGmbToSharedMemoryAsync_Params',
      packedSize: 24,
      fields: [
        { name: 'buffer_handle', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: false, minVersion: 0 },
        { name: 'shared_memory', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CopyNativeGmbToSharedMemoryAsync_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
gpu.mojom.GpuChannelPtr = gpu.mojom.GpuChannelRemote;
gpu.mojom.GpuChannelRequest = gpu.mojom.GpuChannelPendingReceiver;


// Interface: CommandBuffer
gpu.mojom.CommandBuffer = {};

gpu.mojom.CommandBuffer_SetGetBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer_SetGetBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'shm_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.CommandBuffer_RegisterTransferBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer_RegisterTransferBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.CommandBuffer_CreateGpuFenceFromHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer_CreateGpuFenceFromHandle_Params',
      packedSize: 24,
      fields: [
        { name: 'gpu_fence_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'fence_handle', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.CommandBuffer_GetGpuFenceHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer_GetGpuFenceHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.CommandBuffer_SignalSyncToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer_SignalSyncToken_Params',
      packedSize: 24,
      fields: [
        { name: 'sync_token', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
        { name: 'signal_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.CommandBuffer_SignalQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer_SignalQuery_Params',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'signal_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.CommandBufferPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gpu.mojom.CommandBufferRemote = class {
  static get $interfaceName() {
    return 'gpu.mojom.CommandBuffer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gpu.mojom.CommandBufferPendingReceiver,
      handle);
    this.$ = new gpu.mojom.CommandBufferRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gpu.mojom.CommandBufferRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setGetBuffer(shm_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gpu.mojom.CommandBuffer_SetGetBuffer_ParamsSpec,
      null,
      [shm_id]);
  }

  registerTransferBuffer(id, buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gpu.mojom.CommandBuffer_RegisterTransferBuffer_ParamsSpec,
      null,
      [id, buffer]);
  }

  createGpuFenceFromHandle(gpu_fence_id, fence_handle) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      gpu.mojom.CommandBuffer_CreateGpuFenceFromHandle_ParamsSpec,
      null,
      [gpu_fence_id, fence_handle]);
  }

  getGpuFenceHandle(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      gpu.mojom.CommandBuffer_GetGpuFenceHandle_ParamsSpec,
      gpu.mojom.CommandBuffer_GetGpuFenceHandle_ResponseParamsSpec,
      [id]);
  }

  signalSyncToken(sync_token, signal_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      gpu.mojom.CommandBuffer_SignalSyncToken_ParamsSpec,
      null,
      [sync_token, signal_id]);
  }

  signalQuery(query, signal_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      gpu.mojom.CommandBuffer_SignalQuery_ParamsSpec,
      null,
      [query, signal_id]);
  }

};

gpu.mojom.CommandBuffer.getRemote = function() {
  let remote = new gpu.mojom.CommandBufferRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gpu.mojom.CommandBuffer',
    'context');
  return remote.$;
};

// ParamsSpec for SetGetBuffer
gpu.mojom.CommandBuffer_SetGetBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer.SetGetBuffer_Params',
      packedSize: 16,
      fields: [
        { name: 'shm_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterTransferBuffer
gpu.mojom.CommandBuffer_RegisterTransferBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer.RegisterTransferBuffer_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateGpuFenceFromHandle
gpu.mojom.CommandBuffer_CreateGpuFenceFromHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer.CreateGpuFenceFromHandle_Params',
      packedSize: 24,
      fields: [
        { name: 'gpu_fence_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'fence_handle', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetGpuFenceHandle
gpu.mojom.CommandBuffer_GetGpuFenceHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer.GetGpuFenceHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.CommandBuffer_GetGpuFenceHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer.GetGpuFenceHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'fence_handle', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SignalSyncToken
gpu.mojom.CommandBuffer_SignalSyncToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer.SignalSyncToken_Params',
      packedSize: 24,
      fields: [
        { name: 'sync_token', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false, minVersion: 0 },
        { name: 'signal_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SignalQuery
gpu.mojom.CommandBuffer_SignalQuery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer.SignalQuery_Params',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'signal_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
gpu.mojom.CommandBufferPtr = gpu.mojom.CommandBufferRemote;
gpu.mojom.CommandBufferRequest = gpu.mojom.CommandBufferPendingReceiver;


// Interface: CommandBufferClient
gpu.mojom.CommandBufferClient = {};

gpu.mojom.CommandBufferClient_OnConsoleMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBufferClient_OnConsoleMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.CommandBufferClient_OnGpuSwitched_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBufferClient_OnGpuSwitched_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

gpu.mojom.CommandBufferClient_OnDestroyed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBufferClient_OnDestroyed_Params',
      packedSize: 24,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.ContextLostReasonSpec, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.ErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.CommandBufferClient_OnReturnData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBufferClient_OnReturnData_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.CommandBufferClient_OnSignalAck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBufferClient_OnSignalAck_Params',
      packedSize: 24,
      fields: [
        { name: 'signal_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.CommandBufferStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

gpu.mojom.CommandBufferClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gpu.mojom.CommandBufferClientRemote = class {
  static get $interfaceName() {
    return 'gpu.mojom.CommandBufferClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gpu.mojom.CommandBufferClientPendingReceiver,
      handle);
    this.$ = new gpu.mojom.CommandBufferClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gpu.mojom.CommandBufferClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onConsoleMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gpu.mojom.CommandBufferClient_OnConsoleMessage_ParamsSpec,
      null,
      [message]);
  }

  onGpuSwitched() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gpu.mojom.CommandBufferClient_OnGpuSwitched_ParamsSpec,
      null,
      []);
  }

  onDestroyed(reason, error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      gpu.mojom.CommandBufferClient_OnDestroyed_ParamsSpec,
      null,
      [reason, error]);
  }

  onReturnData(data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      gpu.mojom.CommandBufferClient_OnReturnData_ParamsSpec,
      null,
      [data]);
  }

  onSignalAck(signal_id, state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      gpu.mojom.CommandBufferClient_OnSignalAck_ParamsSpec,
      null,
      [signal_id, state]);
  }

};

gpu.mojom.CommandBufferClient.getRemote = function() {
  let remote = new gpu.mojom.CommandBufferClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gpu.mojom.CommandBufferClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnConsoleMessage
gpu.mojom.CommandBufferClient_OnConsoleMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBufferClient.OnConsoleMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnGpuSwitched
gpu.mojom.CommandBufferClient_OnGpuSwitched_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBufferClient.OnGpuSwitched_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnDestroyed
gpu.mojom.CommandBufferClient_OnDestroyed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBufferClient.OnDestroyed_Params',
      packedSize: 24,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.ContextLostReasonSpec, nullable: false, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.ErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnReturnData
gpu.mojom.CommandBufferClient_OnReturnData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBufferClient.OnReturnData_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSignalAck
gpu.mojom.CommandBufferClient_OnSignalAck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBufferClient.OnSignalAck_Params',
      packedSize: 24,
      fields: [
        { name: 'signal_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.CommandBufferStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
gpu.mojom.CommandBufferClientPtr = gpu.mojom.CommandBufferClientRemote;
gpu.mojom.CommandBufferClientRequest = gpu.mojom.CommandBufferClientPendingReceiver;


// Interface: DCOMPTexture
gpu.mojom.DCOMPTexture = {};

gpu.mojom.DCOMPTexture_StartListening_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DCOMPTexture_StartListening_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(gpu.mojom.DCOMPTextureClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.DCOMPTexture_SetTextureSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DCOMPTexture_SetTextureSize_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.DCOMPTexturePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gpu.mojom.DCOMPTextureRemote = class {
  static get $interfaceName() {
    return 'gpu.mojom.DCOMPTexture';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gpu.mojom.DCOMPTexturePendingReceiver,
      handle);
    this.$ = new gpu.mojom.DCOMPTextureRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gpu.mojom.DCOMPTextureRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startListening(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gpu.mojom.DCOMPTexture_StartListening_ParamsSpec,
      null,
      [client]);
  }

  setTextureSize(size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gpu.mojom.DCOMPTexture_SetTextureSize_ParamsSpec,
      null,
      [size]);
  }

  setDCOMPSurfaceHandle(token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ParamsSpec,
      gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParamsSpec,
      [token]);
  }

};

gpu.mojom.DCOMPTexture.getRemote = function() {
  let remote = new gpu.mojom.DCOMPTextureRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gpu.mojom.DCOMPTexture',
    'context');
  return remote.$;
};

// ParamsSpec for StartListening
gpu.mojom.DCOMPTexture_StartListening_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DCOMPTexture.StartListening_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(gpu.mojom.DCOMPTextureClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTextureSize
gpu.mojom.DCOMPTexture_SetTextureSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DCOMPTexture.SetTextureSize_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDCOMPSurfaceHandle
gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DCOMPTexture.SetDCOMPSurfaceHandle_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DCOMPTexture.SetDCOMPSurfaceHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
gpu.mojom.DCOMPTexturePtr = gpu.mojom.DCOMPTextureRemote;
gpu.mojom.DCOMPTextureRequest = gpu.mojom.DCOMPTexturePendingReceiver;


// Interface: DCOMPTextureClient
gpu.mojom.DCOMPTextureClient = {};

gpu.mojom.DCOMPTextureClient_OnSharedImageMailboxBound_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DCOMPTextureClient_OnSharedImageMailboxBound_Params',
      packedSize: 16,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.DCOMPTextureClient_OnOutputRectChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DCOMPTextureClient_OnOutputRectChange_Params',
      packedSize: 16,
      fields: [
        { name: 'output_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.DCOMPTextureClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gpu.mojom.DCOMPTextureClientRemote = class {
  static get $interfaceName() {
    return 'gpu.mojom.DCOMPTextureClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gpu.mojom.DCOMPTextureClientPendingReceiver,
      handle);
    this.$ = new gpu.mojom.DCOMPTextureClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gpu.mojom.DCOMPTextureClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSharedImageMailboxBound(mailbox) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gpu.mojom.DCOMPTextureClient_OnSharedImageMailboxBound_ParamsSpec,
      null,
      [mailbox]);
  }

  onOutputRectChange(output_rect) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gpu.mojom.DCOMPTextureClient_OnOutputRectChange_ParamsSpec,
      null,
      [output_rect]);
  }

};

gpu.mojom.DCOMPTextureClient.getRemote = function() {
  let remote = new gpu.mojom.DCOMPTextureClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gpu.mojom.DCOMPTextureClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnSharedImageMailboxBound
gpu.mojom.DCOMPTextureClient_OnSharedImageMailboxBound_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DCOMPTextureClient.OnSharedImageMailboxBound_Params',
      packedSize: 16,
      fields: [
        { name: 'mailbox', packedOffset: 0, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnOutputRectChange
gpu.mojom.DCOMPTextureClient_OnOutputRectChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DCOMPTextureClient.OnOutputRectChange_Params',
      packedSize: 16,
      fields: [
        { name: 'output_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
gpu.mojom.DCOMPTextureClientPtr = gpu.mojom.DCOMPTextureClientRemote;
gpu.mojom.DCOMPTextureClientRequest = gpu.mojom.DCOMPTextureClientPendingReceiver;


// Interface: OverlayStateObserver
gpu.mojom.OverlayStateObserver = {};

gpu.mojom.OverlayStateObserver_OnStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.OverlayStateObserver_OnStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'promoted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

gpu.mojom.OverlayStateObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

gpu.mojom.OverlayStateObserverRemote = class {
  static get $interfaceName() {
    return 'gpu.mojom.OverlayStateObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      gpu.mojom.OverlayStateObserverPendingReceiver,
      handle);
    this.$ = new gpu.mojom.OverlayStateObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

gpu.mojom.OverlayStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStateChanged(promoted) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      gpu.mojom.OverlayStateObserver_OnStateChanged_ParamsSpec,
      null,
      [promoted]);
  }

};

gpu.mojom.OverlayStateObserver.getRemote = function() {
  let remote = new gpu.mojom.OverlayStateObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'gpu.mojom.OverlayStateObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnStateChanged
gpu.mojom.OverlayStateObserver_OnStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.OverlayStateObserver.OnStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'promoted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
gpu.mojom.OverlayStateObserverPtr = gpu.mojom.OverlayStateObserverRemote;
gpu.mojom.OverlayStateObserverRequest = gpu.mojom.OverlayStateObserverPendingReceiver;

