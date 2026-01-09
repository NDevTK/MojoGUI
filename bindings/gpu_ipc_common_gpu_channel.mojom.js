// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_channel.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


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

// Struct: RasterCreationAttribs
gpu.mojom.RasterCreationAttribsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.RasterCreationAttribs',
      packedSize: 16,
      fields: [
        { name: 'lose_context_when_out_of_memory', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GLESCreationAttribs
gpu.mojom.GLESCreationAttribsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GLESCreationAttribs',
      packedSize: 32,
      fields: [
        { name: 'gpu_preference', packedOffset: 8, packedBitOffset: 0, type: gl.mojom.GpuPreferenceSpec, nullable: false },
        { name: 'fail_if_major_perf_caveat', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'lose_context_when_out_of_memory', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'context_type', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.ContextTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'stream_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'stream_priority', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SchedulingPrioritySpec, nullable: false },
        { name: 'attribs', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.ContextCreationAttribsSpec, nullable: false },
        { name: 'active_url', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'label', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'get_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'token', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'release_count', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'error', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.ErrorSpec, nullable: false },
        { name: 'context_lost_reason', packedOffset: 32, packedBitOffset: 0, type: gpu.mojom.ContextLostReasonSpec, nullable: false },
        { name: 'generation', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'set_get_buffer_count', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeferredRequest
gpu.mojom.DeferredRequestSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DeferredRequest',
      packedSize: 32,
      fields: [
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.DeferredRequestParamsSpec, nullable: false },
        { name: 'sync_token_fences', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'release_count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeferredCommandBufferRequest
gpu.mojom.DeferredCommandBufferRequestSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DeferredCommandBufferRequest',
      packedSize: 24,
      fields: [
        { name: 'routing_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'params', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.DeferredCommandBufferRequestParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'put_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'flush_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'sync_token_fences', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'meta', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SharedImageMetadataSpec, nullable: false },
        { name: 'debug_label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false },
        { name: 'si_info', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SharedImageInfoSpec, nullable: false },
        { name: 'pool_id', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.SharedImagePoolIdSpec, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false },
        { name: 'si_info', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SharedImageInfoSpec, nullable: false },
        { name: 'pixel_data_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'pixel_data_size', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'done_with_shm', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false },
        { name: 'si_info', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.SharedImageInfoSpec, nullable: false },
        { name: 'buffer_handle', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: false },
        { name: 'pool_id', packedOffset: 32, packedBitOffset: 0, type: gpu.mojom.SharedImagePoolIdSpec, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false },
        { name: 'in_fence_handle', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false },
        { name: 'dxgi_token', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.DXGIHandleTokenSpec, nullable: false },
        { name: 'fence_handle', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false },
        { name: 'dxgi_token', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.DXGIHandleTokenSpec, nullable: false },
        { name: 'fence_value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false },
        { name: 'dxgi_token', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.DXGIHandleTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'pool_id', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SharedImagePoolIdSpec, nullable: false },
        { name: 'client_remote', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'pool_id', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SharedImagePoolIdSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: GpuChannel
gpu.mojom.GpuChannel = {};

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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

gpu.mojom.GpuChannel_GetChannelToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.GetChannelToken_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.GetSharedMemoryForFlushId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'version_buffer', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateCommandBuffer
gpu.mojom.GpuChannel_CreateCommandBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CreateCommandBuffer_Params',
      packedSize: 40,
      fields: [
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.CreateCommandBufferParamsSpec, nullable: false },
        { name: 'routing_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'shared_state', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false },
        { name: 'receiver', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
        { name: 'client', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

gpu.mojom.GpuChannel_CreateCommandBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CreateCommandBuffer_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.ContextResultSpec, nullable: false },
        { name: 'capabilties', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.CapabilitiesSpec, nullable: false },
        { name: 'gl_capabilities', packedOffset: 24, packedBitOffset: 0, type: gpu.mojom.GLCapabilitiesSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'routing_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'requests', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'flushed_deferred_message_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateGpuMemoryBuffer
gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CreateGpuMemoryBuffer_Params',
      packedSize: 32,
      fields: [
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
        { name: 'format', packedOffset: 16, packedBitOffset: 0, type: viz.mojom.SharedImageFormatSpec, nullable: false },
        { name: 'buffer_usage', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.BufferUsageSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CreateGpuMemoryBuffer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'buffer_handle', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateDCOMPTexture
gpu.mojom.GpuChannel_CreateDCOMPTexture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CreateDCOMPTexture_Params',
      packedSize: 16,
      fields: [
        { name: 'route_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'receiver', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

gpu.mojom.GpuChannel_CreateDCOMPTexture_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CreateDCOMPTexture_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'promotion_hint_observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'mailbox', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.RegisterOverlayStateObserver_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'routing_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'start', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'end', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

gpu.mojom.GpuChannel_WaitForTokenInRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.WaitForTokenInRange_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.CommandBufferStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'routing_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'set_get_buffer_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'start', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'end', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.WaitForGetOffsetInRange_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.CommandBufferStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'service_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'sysmem_token', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'format', packedOffset: 24, packedBitOffset: 0, type: viz.mojom.SharedImageFormatSpec, nullable: false },
        { name: 'usage', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.BufferUsageSpec, nullable: false },
        { name: 'register_with_image_pipe', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false },
        { name: 'sync_token_dependencies', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'release_count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CopyToGpuMemoryBufferAsync_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'buffer_handle', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.GpuMemoryBufferHandleSpec, nullable: false },
        { name: 'shared_memory', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.GpuChannel.CopyNativeGmbToSharedMemoryAsync_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
gpu.mojom.GpuChannelPtr = gpu.mojom.GpuChannelRemote;
gpu.mojom.GpuChannelRequest = gpu.mojom.GpuChannelPendingReceiver;


// Interface: CommandBuffer
gpu.mojom.CommandBuffer = {};

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
        { name: 'shm_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'buffer', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UnsafeSharedMemoryRegionSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'gpu_fence_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'fence_handle', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

gpu.mojom.CommandBuffer_GetGpuFenceHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.CommandBuffer.GetGpuFenceHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'fence_handle', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.GpuFenceHandleSpec, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'sync_token', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.SyncTokenSpec, nullable: false },
        { name: 'signal_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'query', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'signal_id', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
gpu.mojom.CommandBufferPtr = gpu.mojom.CommandBufferRemote;
gpu.mojom.CommandBufferRequest = gpu.mojom.CommandBufferPendingReceiver;


// Interface: CommandBufferClient
gpu.mojom.CommandBufferClient = {};

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
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
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
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.ContextLostReasonSpec, nullable: false },
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.ErrorSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'signal_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'state', packedOffset: 16, packedBitOffset: 0, type: gpu.mojom.CommandBufferStateSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
gpu.mojom.CommandBufferClientPtr = gpu.mojom.CommandBufferClientRemote;
gpu.mojom.CommandBufferClientRequest = gpu.mojom.CommandBufferClientPendingReceiver;


// Interface: DCOMPTexture
gpu.mojom.DCOMPTexture = {};

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
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'gpu.mojom.DCOMPTexture.SetDCOMPSurfaceHandle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
gpu.mojom.DCOMPTexturePtr = gpu.mojom.DCOMPTextureRemote;
gpu.mojom.DCOMPTextureRequest = gpu.mojom.DCOMPTexturePendingReceiver;


// Interface: DCOMPTextureClient
gpu.mojom.DCOMPTextureClient = {};

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
        { name: 'mailbox', packedOffset: 8, packedBitOffset: 0, type: gpu.mojom.MailboxSpec, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'output_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
gpu.mojom.DCOMPTextureClientPtr = gpu.mojom.DCOMPTextureClientRemote;
gpu.mojom.DCOMPTextureClientRequest = gpu.mojom.DCOMPTextureClientPendingReceiver;


// Interface: OverlayStateObserver
gpu.mojom.OverlayStateObserver = {};

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
        { name: 'promoted', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
gpu.mojom.OverlayStateObserverPtr = gpu.mojom.OverlayStateObserverRemote;
gpu.mojom.OverlayStateObserverRequest = gpu.mojom.OverlayStateObserverPendingReceiver;

