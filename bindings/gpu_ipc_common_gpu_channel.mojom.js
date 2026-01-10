// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_channel.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};
var mojo_base = mojo_base || {};
var viz = viz || {};
var skia = skia || {};
var gfx = gfx || {};
var gl = gl || {};
var url = url || {};

gpu.mojom.ContextTypeSpec = { $: mojo.internal.Enum() };
gpu.mojom.ContextColorSpaceSpec = { $: mojo.internal.Enum() };
gpu.mojom.SchedulingPrioritySpec = { $: mojo.internal.Enum() };
gpu.mojom.ContextCreationAttribsSpec = { $: {} };
gpu.mojom.DeferredRequestParamsSpec = { $: {} };
gpu.mojom.DeferredCommandBufferRequestParamsSpec = { $: {} };
gpu.mojom.DeferredSharedImageRequestSpec = { $: {} };
gpu.mojom.RasterCreationAttribsSpec = { $: {} };
gpu.mojom.GLESCreationAttribsSpec = { $: {} };
gpu.mojom.WebGPUCreationAttribsSpec = { $: {} };
gpu.mojom.CreateCommandBufferParamsSpec = { $: {} };
gpu.mojom.CommandBufferStateSpec = { $: {} };
gpu.mojom.DeferredRequestSpec = { $: {} };
gpu.mojom.DeferredCommandBufferRequestSpec = { $: {} };
gpu.mojom.AsyncFlushParamsSpec = { $: {} };
gpu.mojom.SharedImageInfoSpec = { $: {} };
gpu.mojom.CreateSharedImageParamsSpec = { $: {} };
gpu.mojom.CreateSharedImageWithDataParamsSpec = { $: {} };
gpu.mojom.CreateSharedImageWithBufferParamsSpec = { $: {} };
gpu.mojom.UpdateSharedImageParamsSpec = { $: {} };
gpu.mojom.AddReferenceToSharedImageParamsSpec = { $: {} };
gpu.mojom.CopyToGpuMemoryBufferParamsSpec = { $: {} };
gpu.mojom.RegisterDxgiFenceParamsSpec = { $: {} };
gpu.mojom.UpdateDxgiFenceParamsSpec = { $: {} };
gpu.mojom.UnregisterDxgiFenceParamsSpec = { $: {} };
gpu.mojom.CreateSharedImagePoolParamsSpec = { $: {} };
gpu.mojom.DestroySharedImagePoolParamsSpec = { $: {} };
gpu.mojom.GpuChannel = {};
gpu.mojom.GpuChannel.$interfaceName = 'gpu.mojom.GpuChannel';
gpu.mojom.GpuChannel_CrashForTesting_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_TerminateForTesting_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_GetChannelToken_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_GetChannelToken_ResponseParamsSpec = { $: {} };
gpu.mojom.GpuChannel_Flush_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_Flush_ResponseParamsSpec = { $: {} };
gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ResponseParamsSpec = { $: {} };
gpu.mojom.GpuChannel_CreateCommandBuffer_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_CreateCommandBuffer_ResponseParamsSpec = { $: {} };
gpu.mojom.GpuChannel_DestroyCommandBuffer_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_DestroyCommandBuffer_ResponseParamsSpec = { $: {} };
gpu.mojom.GpuChannel_FlushDeferredRequests_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ResponseParamsSpec = { $: {} };
gpu.mojom.GpuChannel_CreateDCOMPTexture_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_CreateDCOMPTexture_ResponseParamsSpec = { $: {} };
gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ResponseParamsSpec = { $: {} };
gpu.mojom.GpuChannel_WaitForTokenInRange_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_WaitForTokenInRange_ResponseParamsSpec = { $: {} };
gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ResponseParamsSpec = { $: {} };
gpu.mojom.GpuChannel_RegisterSysmemBufferCollection_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParamsSpec = { $: {} };
gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ParamsSpec = { $: {} };
gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParamsSpec = { $: {} };
gpu.mojom.CommandBuffer = {};
gpu.mojom.CommandBuffer.$interfaceName = 'gpu.mojom.CommandBuffer';
gpu.mojom.CommandBuffer_SetGetBuffer_ParamsSpec = { $: {} };
gpu.mojom.CommandBuffer_RegisterTransferBuffer_ParamsSpec = { $: {} };
gpu.mojom.CommandBuffer_CreateGpuFenceFromHandle_ParamsSpec = { $: {} };
gpu.mojom.CommandBuffer_GetGpuFenceHandle_ParamsSpec = { $: {} };
gpu.mojom.CommandBuffer_GetGpuFenceHandle_ResponseParamsSpec = { $: {} };
gpu.mojom.CommandBuffer_SignalSyncToken_ParamsSpec = { $: {} };
gpu.mojom.CommandBuffer_SignalQuery_ParamsSpec = { $: {} };
gpu.mojom.CommandBufferClient = {};
gpu.mojom.CommandBufferClient.$interfaceName = 'gpu.mojom.CommandBufferClient';
gpu.mojom.CommandBufferClient_OnConsoleMessage_ParamsSpec = { $: {} };
gpu.mojom.CommandBufferClient_OnGpuSwitched_ParamsSpec = { $: {} };
gpu.mojom.CommandBufferClient_OnDestroyed_ParamsSpec = { $: {} };
gpu.mojom.CommandBufferClient_OnReturnData_ParamsSpec = { $: {} };
gpu.mojom.CommandBufferClient_OnSignalAck_ParamsSpec = { $: {} };
gpu.mojom.DCOMPTexture = {};
gpu.mojom.DCOMPTexture.$interfaceName = 'gpu.mojom.DCOMPTexture';
gpu.mojom.DCOMPTexture_StartListening_ParamsSpec = { $: {} };
gpu.mojom.DCOMPTexture_SetTextureSize_ParamsSpec = { $: {} };
gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ParamsSpec = { $: {} };
gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParamsSpec = { $: {} };
gpu.mojom.DCOMPTextureClient = {};
gpu.mojom.DCOMPTextureClient.$interfaceName = 'gpu.mojom.DCOMPTextureClient';
gpu.mojom.DCOMPTextureClient_OnSharedImageMailboxBound_ParamsSpec = { $: {} };
gpu.mojom.DCOMPTextureClient_OnOutputRectChange_ParamsSpec = { $: {} };
gpu.mojom.OverlayStateObserver = {};
gpu.mojom.OverlayStateObserver.$interfaceName = 'gpu.mojom.OverlayStateObserver';
gpu.mojom.OverlayStateObserver_OnStateChanged_ParamsSpec = { $: {} };

// Enum: ContextType
gpu.mojom.ContextType = {
  kWebGL1: 0,
  kWebGL2: 1,
  kOpenGLES2: 2,
  kOpenGLES3: 3,
  kOpenGLES31ForTesting: 4,
};

// Enum: ContextColorSpace
gpu.mojom.ContextColorSpace = {
  kUnspecified: 0,
  kSRGB: 1,
  kDisplayP3: 2,
};

// Enum: SchedulingPriority
gpu.mojom.SchedulingPriority = {
  kHigh: 0,
  kNormal: 1,
  kLow: 2,
};

// Union: ContextCreationAttribs
mojo.internal.Union(
    gpu.mojom.ContextCreationAttribsSpec, 'gpu.mojom.ContextCreationAttribs', {
      'gles': {
        'ordinal': 0,
        'type': gpu.mojom.GLESCreationAttribsSpec.$,
        'nullable': false,
      },
      'raster': {
        'ordinal': 1,
        'type': gpu.mojom.RasterCreationAttribsSpec.$,
        'nullable': false,
      },
      'webgpu': {
        'ordinal': 2,
        'type': gpu.mojom.WebGPUCreationAttribsSpec.$,
        'nullable': false,
      },
    });

// Union: DeferredRequestParams
mojo.internal.Union(
    gpu.mojom.DeferredRequestParamsSpec, 'gpu.mojom.DeferredRequestParams', {
      'command_buffer_request': {
        'ordinal': 0,
        'type': gpu.mojom.DeferredCommandBufferRequestSpec.$,
        'nullable': false,
      },
      'shared_image_request': {
        'ordinal': 1,
        'type': gpu.mojom.DeferredSharedImageRequestSpec.$,
        'nullable': false,
      },
      'destroy_dcomp_texture': {
        'ordinal': 2,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: DeferredCommandBufferRequestParams
mojo.internal.Union(
    gpu.mojom.DeferredCommandBufferRequestParamsSpec, 'gpu.mojom.DeferredCommandBufferRequestParams', {
      'async_flush': {
        'ordinal': 0,
        'type': gpu.mojom.AsyncFlushParamsSpec.$,
        'nullable': false,
      },
      'destroy_transfer_buffer': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: DeferredSharedImageRequest
mojo.internal.Union(
    gpu.mojom.DeferredSharedImageRequestSpec, 'gpu.mojom.DeferredSharedImageRequest', {
      'nop': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'create_shared_image': {
        'ordinal': 1,
        'type': gpu.mojom.CreateSharedImageParamsSpec.$,
        'nullable': false,
      },
      'create_shared_image_with_data': {
        'ordinal': 2,
        'type': gpu.mojom.CreateSharedImageWithDataParamsSpec.$,
        'nullable': false,
      },
      'create_shared_image_with_buffer': {
        'ordinal': 3,
        'type': gpu.mojom.CreateSharedImageWithBufferParamsSpec.$,
        'nullable': false,
      },
      'register_upload_buffer': {
        'ordinal': 4,
        'type': mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$,
        'nullable': false,
      },
      'update_shared_image': {
        'ordinal': 5,
        'type': gpu.mojom.UpdateSharedImageParamsSpec.$,
        'nullable': false,
      },
      'copy_to_gpu_memory_buffer': {
        'ordinal': 6,
        'type': gpu.mojom.CopyToGpuMemoryBufferParamsSpec.$,
        'nullable': false,
      },
      'destroy_shared_image': {
        'ordinal': 7,
        'type': gpu.mojom.MailboxSpec.$,
        'nullable': false,
      },
      'add_reference_to_shared_image': {
        'ordinal': 8,
        'type': gpu.mojom.AddReferenceToSharedImageParamsSpec.$,
        'nullable': false,
      },
      'register_dxgi_fence': {
        'ordinal': 9,
        'type': gpu.mojom.RegisterDxgiFenceParamsSpec.$,
        'nullable': false,
      },
      'update_dxgi_fence': {
        'ordinal': 10,
        'type': gpu.mojom.UpdateDxgiFenceParamsSpec.$,
        'nullable': false,
      },
      'unregister_dxgi_fence': {
        'ordinal': 11,
        'type': gpu.mojom.UnregisterDxgiFenceParamsSpec.$,
        'nullable': false,
      },
      'create_shared_image_pool': {
        'ordinal': 12,
        'type': gpu.mojom.CreateSharedImagePoolParamsSpec.$,
        'nullable': false,
      },
      'destroy_shared_image_pool': {
        'ordinal': 13,
        'type': gpu.mojom.DestroySharedImagePoolParamsSpec.$,
        'nullable': false,
      },
    });

// Struct: RasterCreationAttribs
mojo.internal.Struct(
    gpu.mojom.RasterCreationAttribsSpec, 'gpu.mojom.RasterCreationAttribs', [
      mojo.internal.StructField('lose_context_when_out_of_memory', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GLESCreationAttribs
mojo.internal.Struct(
    gpu.mojom.GLESCreationAttribsSpec, 'gpu.mojom.GLESCreationAttribs', [
      mojo.internal.StructField('gpu_preference', 0, 0, gl.mojom.GpuPreferenceSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('context_type', 8, 0, gpu.mojom.ContextTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('fail_if_major_perf_caveat', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('lose_context_when_out_of_memory', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WebGPUCreationAttribs
mojo.internal.Struct(
    gpu.mojom.WebGPUCreationAttribsSpec, 'gpu.mojom.WebGPUCreationAttribs', [
    ],
    [[0, 8]]);

// Struct: CreateCommandBufferParams
mojo.internal.Struct(
    gpu.mojom.CreateCommandBufferParamsSpec, 'gpu.mojom.CreateCommandBufferParams', [
      mojo.internal.StructField('stream_priority', 0, 0, gpu.mojom.SchedulingPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attribs', 8, 0, gpu.mojom.ContextCreationAttribsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('active_url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stream_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: CommandBufferState
mojo.internal.Struct(
    gpu.mojom.CommandBufferStateSpec, 'gpu.mojom.CommandBufferState', [
      mojo.internal.StructField('release_count', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo_base.mojom.ErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('context_lost_reason', 16, 0, viz.mojom.ContextLostReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('get_offset', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('token', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('generation', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('set_get_buffer_count', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DeferredRequest
mojo.internal.Struct(
    gpu.mojom.DeferredRequestSpec, 'gpu.mojom.DeferredRequest', [
      mojo.internal.StructField('params', 0, 0, gpu.mojom.DeferredRequestParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sync_token_fences', 8, 0, mojo.internal.Array(gpu.mojom.SyncTokenSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('release_count', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeferredCommandBufferRequest
mojo.internal.Struct(
    gpu.mojom.DeferredCommandBufferRequestSpec, 'gpu.mojom.DeferredCommandBufferRequest', [
      mojo.internal.StructField('params', 0, 0, gpu.mojom.DeferredCommandBufferRequestParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('routing_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AsyncFlushParams
mojo.internal.Struct(
    gpu.mojom.AsyncFlushParamsSpec, 'gpu.mojom.AsyncFlushParams', [
      mojo.internal.StructField('sync_token_fences', 0, 0, mojo.internal.Array(gpu.mojom.SyncTokenSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('put_offset', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('flush_id', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SharedImageInfo
mojo.internal.Struct(
    gpu.mojom.SharedImageInfoSpec, 'gpu.mojom.SharedImageInfo', [
      mojo.internal.StructField('meta', 0, 0, gpu.mojom.SharedImageMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('debug_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CreateSharedImageParams
mojo.internal.Struct(
    gpu.mojom.CreateSharedImageParamsSpec, 'gpu.mojom.CreateSharedImageParams', [
      mojo.internal.StructField('mailbox', 0, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('si_info', 8, 0, gpu.mojom.SharedImageInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pool_id', 16, 0, gpu.mojom.SharedImagePoolIdSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CreateSharedImageWithDataParams
mojo.internal.Struct(
    gpu.mojom.CreateSharedImageWithDataParamsSpec, 'gpu.mojom.CreateSharedImageWithDataParams', [
      mojo.internal.StructField('mailbox', 0, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('si_info', 8, 0, gpu.mojom.SharedImageInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pixel_data_offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pixel_data_size', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('done_with_shm', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CreateSharedImageWithBufferParams
mojo.internal.Struct(
    gpu.mojom.CreateSharedImageWithBufferParamsSpec, 'gpu.mojom.CreateSharedImageWithBufferParams', [
      mojo.internal.StructField('mailbox', 0, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('si_info', 8, 0, gpu.mojom.SharedImageInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_handle', 16, 0, gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pool_id', 24, 0, gpu.mojom.SharedImagePoolIdSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: UpdateSharedImageParams
mojo.internal.Struct(
    gpu.mojom.UpdateSharedImageParamsSpec, 'gpu.mojom.UpdateSharedImageParams', [
      mojo.internal.StructField('mailbox', 0, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('in_fence_handle', 8, 0, gfx.mojom.GpuFenceHandleSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AddReferenceToSharedImageParams
mojo.internal.Struct(
    gpu.mojom.AddReferenceToSharedImageParamsSpec, 'gpu.mojom.AddReferenceToSharedImageParams', [
      mojo.internal.StructField('mailbox', 0, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CopyToGpuMemoryBufferParams
mojo.internal.Struct(
    gpu.mojom.CopyToGpuMemoryBufferParamsSpec, 'gpu.mojom.CopyToGpuMemoryBufferParams', [
      mojo.internal.StructField('mailbox', 0, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: RegisterDxgiFenceParams
mojo.internal.Struct(
    gpu.mojom.RegisterDxgiFenceParamsSpec, 'gpu.mojom.RegisterDxgiFenceParams', [
      mojo.internal.StructField('mailbox', 0, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dxgi_token', 8, 0, gfx.mojom.DXGIHandleTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fence_handle', 16, 0, gfx.mojom.GpuFenceHandleSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UpdateDxgiFenceParams
mojo.internal.Struct(
    gpu.mojom.UpdateDxgiFenceParamsSpec, 'gpu.mojom.UpdateDxgiFenceParams', [
      mojo.internal.StructField('mailbox', 0, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dxgi_token', 8, 0, gfx.mojom.DXGIHandleTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fence_value', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UnregisterDxgiFenceParams
mojo.internal.Struct(
    gpu.mojom.UnregisterDxgiFenceParamsSpec, 'gpu.mojom.UnregisterDxgiFenceParams', [
      mojo.internal.StructField('mailbox', 0, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dxgi_token', 8, 0, gfx.mojom.DXGIHandleTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CreateSharedImagePoolParams
mojo.internal.Struct(
    gpu.mojom.CreateSharedImagePoolParamsSpec, 'gpu.mojom.CreateSharedImagePoolParams', [
      mojo.internal.StructField('pool_id', 0, 0, gpu.mojom.SharedImagePoolIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('client_remote', 8, 0, mojo.internal.InterfaceProxy(gpu.mojom.SharedImagePoolClientInterfaceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DestroySharedImagePoolParams
mojo.internal.Struct(
    gpu.mojom.DestroySharedImagePoolParamsSpec, 'gpu.mojom.DestroySharedImagePoolParams', [
      mojo.internal.StructField('pool_id', 0, 0, gpu.mojom.SharedImagePoolIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: GpuChannel
mojo.internal.Struct(
    gpu.mojom.GpuChannel_CrashForTesting_ParamsSpec, 'gpu.mojom.GpuChannel_CrashForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_TerminateForTesting_ParamsSpec, 'gpu.mojom.GpuChannel_TerminateForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_GetChannelToken_ParamsSpec, 'gpu.mojom.GpuChannel_GetChannelToken_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_GetChannelToken_ResponseParamsSpec, 'gpu.mojom.GpuChannel_GetChannelToken_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_Flush_ParamsSpec, 'gpu.mojom.GpuChannel_Flush_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_Flush_ResponseParamsSpec, 'gpu.mojom.GpuChannel_Flush_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ParamsSpec, 'gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ResponseParamsSpec, 'gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ResponseParams', [
      mojo.internal.StructField('version_buffer', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_CreateCommandBuffer_ParamsSpec, 'gpu.mojom.GpuChannel_CreateCommandBuffer_Params', [
      mojo.internal.StructField('params', 0, 0, gpu.mojom.CreateCommandBufferParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_state', 8, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('client', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('routing_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_CreateCommandBuffer_ResponseParamsSpec, 'gpu.mojom.GpuChannel_CreateCommandBuffer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, gpu.mojom.ContextResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capabilties', 8, 0, gpu.mojom.CapabilitiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gl_capabilities', 16, 0, gpu.mojom.GLCapabilitiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_DestroyCommandBuffer_ParamsSpec, 'gpu.mojom.GpuChannel_DestroyCommandBuffer_Params', [
      mojo.internal.StructField('routing_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_DestroyCommandBuffer_ResponseParamsSpec, 'gpu.mojom.GpuChannel_DestroyCommandBuffer_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_FlushDeferredRequests_ParamsSpec, 'gpu.mojom.GpuChannel_FlushDeferredRequests_Params', [
      mojo.internal.StructField('requests', 0, 0, mojo.internal.Array(gpu.mojom.DeferredRequestSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('flushed_deferred_message_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ParamsSpec, 'gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('format', 8, 0, viz.mojom.SharedImageFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_usage', 16, 0, gfx.mojom.BufferUsageSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ResponseParamsSpec, 'gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ResponseParams', [
      mojo.internal.StructField('buffer_handle', 0, 0, gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_CreateDCOMPTexture_ParamsSpec, 'gpu.mojom.GpuChannel_CreateDCOMPTexture_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('route_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_CreateDCOMPTexture_ResponseParamsSpec, 'gpu.mojom.GpuChannel_CreateDCOMPTexture_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ParamsSpec, 'gpu.mojom.GpuChannel_RegisterOverlayStateObserver_Params', [
      mojo.internal.StructField('promotion_hint_observer', 0, 0, mojo.internal.InterfaceProxy(gpu.mojom.OverlayStateObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('mailbox', 8, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ResponseParamsSpec, 'gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_WaitForTokenInRange_ParamsSpec, 'gpu.mojom.GpuChannel_WaitForTokenInRange_Params', [
      mojo.internal.StructField('routing_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('start', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_WaitForTokenInRange_ResponseParamsSpec, 'gpu.mojom.GpuChannel_WaitForTokenInRange_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, gpu.mojom.CommandBufferStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ParamsSpec, 'gpu.mojom.GpuChannel_WaitForGetOffsetInRange_Params', [
      mojo.internal.StructField('routing_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('set_get_buffer_count', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('start', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ResponseParamsSpec, 'gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, gpu.mojom.CommandBufferStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_RegisterSysmemBufferCollection_ParamsSpec, 'gpu.mojom.GpuChannel_RegisterSysmemBufferCollection_Params', [
      mojo.internal.StructField('service_handle', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('sysmem_token', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('format', 16, 0, viz.mojom.SharedImageFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('usage', 24, 0, gfx.mojom.BufferUsageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('register_with_image_pipe', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ParamsSpec, 'gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_Params', [
      mojo.internal.StructField('mailbox', 0, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sync_token_dependencies', 8, 0, mojo.internal.Array(gpu.mojom.SyncTokenSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('release_count', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParamsSpec, 'gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ParamsSpec, 'gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_Params', [
      mojo.internal.StructField('buffer_handle', 0, 0, gfx.mojom.GpuMemoryBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('shared_memory', 8, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParamsSpec, 'gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  terminateForTesting() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gpu.mojom.GpuChannel_TerminateForTesting_ParamsSpec,
      null,
      [],
      false);
  }

  getChannelToken() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      gpu.mojom.GpuChannel_GetChannelToken_ParamsSpec,
      gpu.mojom.GpuChannel_GetChannelToken_ResponseParamsSpec,
      [],
      false);
  }

  flush() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      gpu.mojom.GpuChannel_Flush_ParamsSpec,
      gpu.mojom.GpuChannel_Flush_ResponseParamsSpec,
      [],
      false);
  }

  getSharedMemoryForFlushId() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ParamsSpec,
      gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ResponseParamsSpec,
      [],
      false);
  }

  createCommandBuffer(params, routing_id, shared_state, receiver, client) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      gpu.mojom.GpuChannel_CreateCommandBuffer_ParamsSpec,
      gpu.mojom.GpuChannel_CreateCommandBuffer_ResponseParamsSpec,
      [params, routing_id, shared_state, receiver, client],
      false);
  }

  destroyCommandBuffer(routing_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      gpu.mojom.GpuChannel_DestroyCommandBuffer_ParamsSpec,
      gpu.mojom.GpuChannel_DestroyCommandBuffer_ResponseParamsSpec,
      [routing_id],
      false);
  }

  flushDeferredRequests(requests, flushed_deferred_message_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      gpu.mojom.GpuChannel_FlushDeferredRequests_ParamsSpec,
      null,
      [requests, flushed_deferred_message_id],
      false);
  }

  createGpuMemoryBuffer(size, format, buffer_usage) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ParamsSpec,
      gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ResponseParamsSpec,
      [size, format, buffer_usage],
      false);
  }

  createDCOMPTexture(route_id, receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      gpu.mojom.GpuChannel_CreateDCOMPTexture_ParamsSpec,
      gpu.mojom.GpuChannel_CreateDCOMPTexture_ResponseParamsSpec,
      [route_id, receiver],
      false);
  }

  registerOverlayStateObserver(promotion_hint_observer, mailbox) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ParamsSpec,
      gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ResponseParamsSpec,
      [promotion_hint_observer, mailbox],
      false);
  }

  waitForTokenInRange(routing_id, start, end) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      gpu.mojom.GpuChannel_WaitForTokenInRange_ParamsSpec,
      gpu.mojom.GpuChannel_WaitForTokenInRange_ResponseParamsSpec,
      [routing_id, start, end],
      false);
  }

  waitForGetOffsetInRange(routing_id, set_get_buffer_count, start, end) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ParamsSpec,
      gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ResponseParamsSpec,
      [routing_id, set_get_buffer_count, start, end],
      false);
  }

  registerSysmemBufferCollection(service_handle, sysmem_token, format, usage, register_with_image_pipe) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      gpu.mojom.GpuChannel_RegisterSysmemBufferCollection_ParamsSpec,
      null,
      [service_handle, sysmem_token, format, usage, register_with_image_pipe],
      false);
  }

  copyToGpuMemoryBufferAsync(mailbox, sync_token_dependencies, release_count) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ParamsSpec,
      gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParamsSpec,
      [mailbox, sync_token_dependencies, release_count],
      false);
  }

  copyNativeGmbToSharedMemoryAsync(buffer_handle, shared_memory) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ParamsSpec,
      gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParamsSpec,
      [buffer_handle, shared_memory],
      false);
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

gpu.mojom.GpuChannelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = gpu.mojom.GpuChannel_CrashForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.crashForTesting();
          break;
        }
        case 1: {
          const params = gpu.mojom.GpuChannel_TerminateForTesting_ParamsSpec.$.decode(message.payload);
          const result = this.impl.terminateForTesting();
          break;
        }
        case 2: {
          const params = gpu.mojom.GpuChannel_GetChannelToken_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getChannelToken();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.GpuChannel_GetChannelToken_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 3: {
          const params = gpu.mojom.GpuChannel_Flush_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flush();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.GpuChannel_Flush_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getSharedMemoryForFlushId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 5: {
          const params = gpu.mojom.GpuChannel_CreateCommandBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createCommandBuffer(params.params, params.routing_id, params.shared_state, params.receiver, params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.GpuChannel_CreateCommandBuffer_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 6: {
          const params = gpu.mojom.GpuChannel_DestroyCommandBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.destroyCommandBuffer(params.routing_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.GpuChannel_DestroyCommandBuffer_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 7: {
          const params = gpu.mojom.GpuChannel_FlushDeferredRequests_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flushDeferredRequests(params.requests, params.flushed_deferred_message_id);
          break;
        }
        case 8: {
          const params = gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createGpuMemoryBuffer(params.size, params.format, params.buffer_usage);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 9: {
          const params = gpu.mojom.GpuChannel_CreateDCOMPTexture_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createDCOMPTexture(params.route_id, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.GpuChannel_CreateDCOMPTexture_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 10: {
          const params = gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerOverlayStateObserver(params.promotion_hint_observer, params.mailbox);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 11: {
          const params = gpu.mojom.GpuChannel_WaitForTokenInRange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.waitForTokenInRange(params.routing_id, params.start, params.end);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.GpuChannel_WaitForTokenInRange_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 12: {
          const params = gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.waitForGetOffsetInRange(params.routing_id, params.set_get_buffer_count, params.start, params.end);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 13: {
          const params = gpu.mojom.GpuChannel_RegisterSysmemBufferCollection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerSysmemBufferCollection(params.service_handle, params.sysmem_token, params.format, params.usage, params.register_with_image_pipe);
          break;
        }
        case 14: {
          const params = gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ParamsSpec.$.decode(message.payload);
          const result = this.impl.copyToGpuMemoryBufferAsync(params.mailbox, params.sync_token_dependencies, params.release_count);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 15: {
          const params = gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ParamsSpec.$.decode(message.payload);
          const result = this.impl.copyNativeGmbToSharedMemoryAsync(params.buffer_handle, params.shared_memory);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

gpu.mojom.GpuChannelReceiver = gpu.mojom.GpuChannelReceiver;

gpu.mojom.GpuChannelPtr = gpu.mojom.GpuChannelRemote;
gpu.mojom.GpuChannelRequest = gpu.mojom.GpuChannelPendingReceiver;


// Interface: CommandBuffer
mojo.internal.Struct(
    gpu.mojom.CommandBuffer_SetGetBuffer_ParamsSpec, 'gpu.mojom.CommandBuffer_SetGetBuffer_Params', [
      mojo.internal.StructField('shm_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.CommandBuffer_RegisterTransferBuffer_ParamsSpec, 'gpu.mojom.CommandBuffer_RegisterTransferBuffer_Params', [
      mojo.internal.StructField('buffer', 0, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    gpu.mojom.CommandBuffer_CreateGpuFenceFromHandle_ParamsSpec, 'gpu.mojom.CommandBuffer_CreateGpuFenceFromHandle_Params', [
      mojo.internal.StructField('fence_handle', 0, 0, gfx.mojom.GpuFenceHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('gpu_fence_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    gpu.mojom.CommandBuffer_GetGpuFenceHandle_ParamsSpec, 'gpu.mojom.CommandBuffer_GetGpuFenceHandle_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.CommandBuffer_GetGpuFenceHandle_ResponseParamsSpec, 'gpu.mojom.CommandBuffer_GetGpuFenceHandle_ResponseParams', [
      mojo.internal.StructField('fence_handle', 0, 0, gfx.mojom.GpuFenceHandleSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.CommandBuffer_SignalSyncToken_ParamsSpec, 'gpu.mojom.CommandBuffer_SignalSyncToken_Params', [
      mojo.internal.StructField('sync_token', 0, 0, gpu.mojom.SyncTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signal_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    gpu.mojom.CommandBuffer_SignalQuery_ParamsSpec, 'gpu.mojom.CommandBuffer_SignalQuery_Params', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('signal_id', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [shm_id],
      false);
  }

  registerTransferBuffer(id, buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gpu.mojom.CommandBuffer_RegisterTransferBuffer_ParamsSpec,
      null,
      [id, buffer],
      false);
  }

  createGpuFenceFromHandle(gpu_fence_id, fence_handle) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      gpu.mojom.CommandBuffer_CreateGpuFenceFromHandle_ParamsSpec,
      null,
      [gpu_fence_id, fence_handle],
      false);
  }

  getGpuFenceHandle(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      gpu.mojom.CommandBuffer_GetGpuFenceHandle_ParamsSpec,
      gpu.mojom.CommandBuffer_GetGpuFenceHandle_ResponseParamsSpec,
      [id],
      false);
  }

  signalSyncToken(sync_token, signal_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      gpu.mojom.CommandBuffer_SignalSyncToken_ParamsSpec,
      null,
      [sync_token, signal_id],
      false);
  }

  signalQuery(query, signal_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      gpu.mojom.CommandBuffer_SignalQuery_ParamsSpec,
      null,
      [query, signal_id],
      false);
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

gpu.mojom.CommandBufferReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = gpu.mojom.CommandBuffer_SetGetBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setGetBuffer(params.shm_id);
          break;
        }
        case 1: {
          const params = gpu.mojom.CommandBuffer_RegisterTransferBuffer_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerTransferBuffer(params.id, params.buffer);
          break;
        }
        case 2: {
          const params = gpu.mojom.CommandBuffer_CreateGpuFenceFromHandle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createGpuFenceFromHandle(params.gpu_fence_id, params.fence_handle);
          break;
        }
        case 3: {
          const params = gpu.mojom.CommandBuffer_GetGpuFenceHandle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getGpuFenceHandle(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.CommandBuffer_GetGpuFenceHandle_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 4: {
          const params = gpu.mojom.CommandBuffer_SignalSyncToken_ParamsSpec.$.decode(message.payload);
          const result = this.impl.signalSyncToken(params.sync_token, params.signal_id);
          break;
        }
        case 5: {
          const params = gpu.mojom.CommandBuffer_SignalQuery_ParamsSpec.$.decode(message.payload);
          const result = this.impl.signalQuery(params.query, params.signal_id);
          break;
        }
      }
    });
  }
};

gpu.mojom.CommandBufferReceiver = gpu.mojom.CommandBufferReceiver;

gpu.mojom.CommandBufferPtr = gpu.mojom.CommandBufferRemote;
gpu.mojom.CommandBufferRequest = gpu.mojom.CommandBufferPendingReceiver;


// Interface: CommandBufferClient
mojo.internal.Struct(
    gpu.mojom.CommandBufferClient_OnConsoleMessage_ParamsSpec, 'gpu.mojom.CommandBufferClient_OnConsoleMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.CommandBufferClient_OnGpuSwitched_ParamsSpec, 'gpu.mojom.CommandBufferClient_OnGpuSwitched_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    gpu.mojom.CommandBufferClient_OnDestroyed_ParamsSpec, 'gpu.mojom.CommandBufferClient_OnDestroyed_Params', [
      mojo.internal.StructField('reason', 0, 0, viz.mojom.ContextLostReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo_base.mojom.ErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    gpu.mojom.CommandBufferClient_OnReturnData_ParamsSpec, 'gpu.mojom.CommandBufferClient_OnReturnData_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.CommandBufferClient_OnSignalAck_ParamsSpec, 'gpu.mojom.CommandBufferClient_OnSignalAck_Params', [
      mojo.internal.StructField('state', 0, 0, gpu.mojom.CommandBufferStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('signal_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [message],
      false);
  }

  onGpuSwitched() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gpu.mojom.CommandBufferClient_OnGpuSwitched_ParamsSpec,
      null,
      [],
      false);
  }

  onDestroyed(reason, error) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      gpu.mojom.CommandBufferClient_OnDestroyed_ParamsSpec,
      null,
      [reason, error],
      false);
  }

  onReturnData(data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      gpu.mojom.CommandBufferClient_OnReturnData_ParamsSpec,
      null,
      [data],
      false);
  }

  onSignalAck(signal_id, state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      gpu.mojom.CommandBufferClient_OnSignalAck_ParamsSpec,
      null,
      [signal_id, state],
      false);
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

gpu.mojom.CommandBufferClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = gpu.mojom.CommandBufferClient_OnConsoleMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onConsoleMessage(params.message);
          break;
        }
        case 1: {
          const params = gpu.mojom.CommandBufferClient_OnGpuSwitched_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onGpuSwitched();
          break;
        }
        case 2: {
          const params = gpu.mojom.CommandBufferClient_OnDestroyed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDestroyed(params.reason, params.error);
          break;
        }
        case 3: {
          const params = gpu.mojom.CommandBufferClient_OnReturnData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReturnData(params.data);
          break;
        }
        case 4: {
          const params = gpu.mojom.CommandBufferClient_OnSignalAck_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSignalAck(params.signal_id, params.state);
          break;
        }
      }
    });
  }
};

gpu.mojom.CommandBufferClientReceiver = gpu.mojom.CommandBufferClientReceiver;

gpu.mojom.CommandBufferClientPtr = gpu.mojom.CommandBufferClientRemote;
gpu.mojom.CommandBufferClientRequest = gpu.mojom.CommandBufferClientPendingReceiver;


// Interface: DCOMPTexture
mojo.internal.Struct(
    gpu.mojom.DCOMPTexture_StartListening_ParamsSpec, 'gpu.mojom.DCOMPTexture_StartListening_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.DCOMPTexture_SetTextureSize_ParamsSpec, 'gpu.mojom.DCOMPTexture_SetTextureSize_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ParamsSpec, 'gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParamsSpec, 'gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [client],
      false);
  }

  setTextureSize(size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gpu.mojom.DCOMPTexture_SetTextureSize_ParamsSpec,
      null,
      [size],
      false);
  }

  setDCOMPSurfaceHandle(token) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ParamsSpec,
      gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParamsSpec,
      [token],
      false);
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

gpu.mojom.DCOMPTextureReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = gpu.mojom.DCOMPTexture_StartListening_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startListening(params.client);
          break;
        }
        case 1: {
          const params = gpu.mojom.DCOMPTexture_SetTextureSize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTextureSize(params.size);
          break;
        }
        case 2: {
          const params = gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDCOMPSurfaceHandle(params.token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

gpu.mojom.DCOMPTextureReceiver = gpu.mojom.DCOMPTextureReceiver;

gpu.mojom.DCOMPTexturePtr = gpu.mojom.DCOMPTextureRemote;
gpu.mojom.DCOMPTextureRequest = gpu.mojom.DCOMPTexturePendingReceiver;


// Interface: DCOMPTextureClient
mojo.internal.Struct(
    gpu.mojom.DCOMPTextureClient_OnSharedImageMailboxBound_ParamsSpec, 'gpu.mojom.DCOMPTextureClient_OnSharedImageMailboxBound_Params', [
      mojo.internal.StructField('mailbox', 0, 0, gpu.mojom.MailboxSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    gpu.mojom.DCOMPTextureClient_OnOutputRectChange_ParamsSpec, 'gpu.mojom.DCOMPTextureClient_OnOutputRectChange_Params', [
      mojo.internal.StructField('output_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [mailbox],
      false);
  }

  onOutputRectChange(output_rect) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      gpu.mojom.DCOMPTextureClient_OnOutputRectChange_ParamsSpec,
      null,
      [output_rect],
      false);
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

gpu.mojom.DCOMPTextureClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = gpu.mojom.DCOMPTextureClient_OnSharedImageMailboxBound_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSharedImageMailboxBound(params.mailbox);
          break;
        }
        case 1: {
          const params = gpu.mojom.DCOMPTextureClient_OnOutputRectChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onOutputRectChange(params.output_rect);
          break;
        }
      }
    });
  }
};

gpu.mojom.DCOMPTextureClientReceiver = gpu.mojom.DCOMPTextureClientReceiver;

gpu.mojom.DCOMPTextureClientPtr = gpu.mojom.DCOMPTextureClientRemote;
gpu.mojom.DCOMPTextureClientRequest = gpu.mojom.DCOMPTextureClientPendingReceiver;


// Interface: OverlayStateObserver
mojo.internal.Struct(
    gpu.mojom.OverlayStateObserver_OnStateChanged_ParamsSpec, 'gpu.mojom.OverlayStateObserver_OnStateChanged_Params', [
      mojo.internal.StructField('promoted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [promoted],
      false);
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

gpu.mojom.OverlayStateObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = gpu.mojom.OverlayStateObserver_OnStateChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStateChanged(params.promoted);
          break;
        }
      }
    });
  }
};

gpu.mojom.OverlayStateObserverReceiver = gpu.mojom.OverlayStateObserverReceiver;

gpu.mojom.OverlayStateObserverPtr = gpu.mojom.OverlayStateObserverRemote;
gpu.mojom.OverlayStateObserverRequest = gpu.mojom.OverlayStateObserverPendingReceiver;

