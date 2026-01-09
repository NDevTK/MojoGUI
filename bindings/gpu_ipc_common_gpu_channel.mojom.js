// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_channel.mojom
// Module: gpu.mojom

'use strict';

// Module namespace
var gpu = gpu || {};
gpu.mojom = gpu.mojom || {};


// Enum: ContextType
gpu.mojom.ContextType = {
};

// Enum: ContextColorSpace
gpu.mojom.ContextColorSpace = {
};

// Enum: SchedulingPriority
gpu.mojom.SchedulingPriority = {
};

// Struct: RasterCreationAttribs
gpu.mojom.RasterCreationAttribs = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: GLESCreationAttribs
gpu.mojom.GLESCreationAttribs = class {
  constructor(values = {}) {
    this.kOpenGLES2 = values.kOpenGLES2 !== undefined ? values.kOpenGLES2 : false;
  }
};

// Struct: WebGPUCreationAttribs
gpu.mojom.WebGPUCreationAttribs = class {
  constructor(values = {}) {
  }
};

// Struct: CreateCommandBufferParams
gpu.mojom.CreateCommandBufferParams = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: CommandBufferState
gpu.mojom.CommandBufferState = class {
  constructor(values = {}) {
    this.set_get_buffer_count = values.set_get_buffer_count !== undefined ? values.set_get_buffer_count : 0;
  }
};

// Struct: DeferredRequest
gpu.mojom.DeferredRequest = class {
  constructor(values = {}) {
    this.release_count = values.release_count !== undefined ? values.release_count : 0;
  }
};

// Struct: DeferredCommandBufferRequest
gpu.mojom.DeferredCommandBufferRequest = class {
  constructor(values = {}) {
    this.params = values.params !== undefined ? values.params : 0;
  }
};

// Struct: AsyncFlushParams
gpu.mojom.AsyncFlushParams = class {
  constructor(values = {}) {
    this.sync_token_fences = values.sync_token_fences !== undefined ? values.sync_token_fences : 0;
  }
};

// Struct: SharedImageInfo
gpu.mojom.SharedImageInfo = class {
  constructor(values = {}) {
    this.debug_label = values.debug_label !== undefined ? values.debug_label : "";
  }
};

// Struct: CreateSharedImageParams
gpu.mojom.CreateSharedImageParams = class {
  constructor(values = {}) {
    this.pool_id = values.pool_id !== undefined ? values.pool_id : null;
  }
};

// Struct: CreateSharedImageWithDataParams
gpu.mojom.CreateSharedImageWithDataParams = class {
  constructor(values = {}) {
    this.pixel_data_size = values.pixel_data_size !== undefined ? values.pixel_data_size : 0;
    this.memory = values.memory !== undefined ? values.memory : null;
    this.done_with_shm = values.done_with_shm !== undefined ? values.done_with_shm : false;
  }
};

// Struct: CreateSharedImageWithBufferParams
gpu.mojom.CreateSharedImageWithBufferParams = class {
  constructor(values = {}) {
    this.pool_id = values.pool_id !== undefined ? values.pool_id : null;
  }
};

// Struct: UpdateSharedImageParams
gpu.mojom.UpdateSharedImageParams = class {
  constructor(values = {}) {
    this.in_fence_handle = values.in_fence_handle !== undefined ? values.in_fence_handle : null;
  }
};

// Struct: AddReferenceToSharedImageParams
gpu.mojom.AddReferenceToSharedImageParams = class {
  constructor(values = {}) {
    this.mailbox = values.mailbox !== undefined ? values.mailbox : null;
  }
};

// Struct: CopyToGpuMemoryBufferParams
gpu.mojom.CopyToGpuMemoryBufferParams = class {
  constructor(values = {}) {
    this.mailbox = values.mailbox !== undefined ? values.mailbox : null;
  }
};

// Struct: RegisterDxgiFenceParams
gpu.mojom.RegisterDxgiFenceParams = class {
  constructor(values = {}) {
    this.fence_handle = values.fence_handle !== undefined ? values.fence_handle : null;
  }
};

// Struct: UpdateDxgiFenceParams
gpu.mojom.UpdateDxgiFenceParams = class {
  constructor(values = {}) {
    this.fence_value = values.fence_value !== undefined ? values.fence_value : 0;
  }
};

// Struct: UnregisterDxgiFenceParams
gpu.mojom.UnregisterDxgiFenceParams = class {
  constructor(values = {}) {
    this.dxgi_token = values.dxgi_token !== undefined ? values.dxgi_token : null;
  }
};

// Struct: CreateSharedImagePoolParams
gpu.mojom.CreateSharedImagePoolParams = class {
  constructor(values = {}) {
    this.client_remote = values.client_remote !== undefined ? values.client_remote : 0;
  }
};

// Struct: DestroySharedImagePoolParams
gpu.mojom.DestroySharedImagePoolParams = class {
  constructor(values = {}) {
    this.pool_id = values.pool_id !== undefined ? values.pool_id : null;
  }
};

// Interface: GpuChannel
gpu.mojom.GpuChannelPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'gpu.mojom.GpuChannel';
  }

  crashForTesting() {
    // Method: CrashForTesting
    // Call: CrashForTesting()
  }

  terminateForTesting() {
    // Method: TerminateForTesting
    // Call: TerminateForTesting()
  }

  getChannelToken() {
    // Method: GetChannelToken
    return new Promise((resolve) => {
      // Call: GetChannelToken()
      resolve({});
    });
  }

  flush() {
    // Method: Flush
    // Call: Flush()
  }

  getSharedMemoryForFlushId() {
    // Method: GetSharedMemoryForFlushId
    return new Promise((resolve) => {
      // Call: GetSharedMemoryForFlushId()
      resolve({});
    });
  }

  createCommandBuffer(params, routing_id, shared_state, receiver, client) {
    // Method: CreateCommandBuffer
    return new Promise((resolve) => {
      // Call: CreateCommandBuffer(params, routing_id, shared_state, receiver, client)
      resolve({});
    });
  }

  destroyCommandBuffer(routing_id) {
    // Method: DestroyCommandBuffer
    // Call: DestroyCommandBuffer(routing_id)
  }

  flushDeferredRequests(requests, flushed_deferred_message_id) {
    // Method: FlushDeferredRequests
    // Call: FlushDeferredRequests(requests, flushed_deferred_message_id)
  }

  createGpuMemoryBuffer(size, format, buffer_usage) {
    // Method: CreateGpuMemoryBuffer
    return new Promise((resolve) => {
      // Call: CreateGpuMemoryBuffer(size, format, buffer_usage)
      resolve({});
    });
  }

  createDCOMPTexture(route_id, receiver) {
    // Method: CreateDCOMPTexture
    return new Promise((resolve) => {
      // Call: CreateDCOMPTexture(route_id, receiver)
      resolve({});
    });
  }

  registerOverlayStateObserver(promotion_hint_observer, mailbox) {
    // Method: RegisterOverlayStateObserver
    return new Promise((resolve) => {
      // Call: RegisterOverlayStateObserver(promotion_hint_observer, mailbox)
      resolve({});
    });
  }

  waitForTokenInRange(routing_id, start, end) {
    // Method: WaitForTokenInRange
    return new Promise((resolve) => {
      // Call: WaitForTokenInRange(routing_id, start, end)
      resolve({});
    });
  }

  waitForGetOffsetInRange(routing_id, set_get_buffer_count, start, end) {
    // Method: WaitForGetOffsetInRange
    return new Promise((resolve) => {
      // Call: WaitForGetOffsetInRange(routing_id, set_get_buffer_count, start, end)
      resolve({});
    });
  }

  registerSysmemBufferCollection(service_handle, sysmem_token, format, usage, register_with_image_pipe) {
    // Method: RegisterSysmemBufferCollection
    // Call: RegisterSysmemBufferCollection(service_handle, sysmem_token, format, usage, register_with_image_pipe)
  }

  copyToGpuMemoryBufferAsync(mailbox, sync_token_dependencies, release_count) {
    // Method: CopyToGpuMemoryBufferAsync
    return new Promise((resolve) => {
      // Call: CopyToGpuMemoryBufferAsync(mailbox, sync_token_dependencies, release_count)
      resolve({});
    });
  }

  copyNativeGmbToSharedMemoryAsync(buffer_handle, shared_memory) {
    // Method: CopyNativeGmbToSharedMemoryAsync
    return new Promise((resolve) => {
      // Call: CopyNativeGmbToSharedMemoryAsync(buffer_handle, shared_memory)
      resolve({});
    });
  }

};

gpu.mojom.GpuChannelRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CommandBuffer
gpu.mojom.CommandBufferPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'gpu.mojom.CommandBuffer';
  }

  setGetBuffer(shm_id) {
    // Method: SetGetBuffer
    // Call: SetGetBuffer(shm_id)
  }

  registerTransferBuffer(id, buffer) {
    // Method: RegisterTransferBuffer
    // Call: RegisterTransferBuffer(id, buffer)
  }

  createGpuFenceFromHandle(gpu_fence_id, fence_handle) {
    // Method: CreateGpuFenceFromHandle
    // Call: CreateGpuFenceFromHandle(gpu_fence_id, fence_handle)
  }

  getGpuFenceHandle(id) {
    // Method: GetGpuFenceHandle
    return new Promise((resolve) => {
      // Call: GetGpuFenceHandle(id)
      resolve({});
    });
  }

  signalSyncToken(sync_token, signal_id) {
    // Method: SignalSyncToken
    // Call: SignalSyncToken(sync_token, signal_id)
  }

  signalQuery(query, signal_id) {
    // Method: SignalQuery
    // Call: SignalQuery(query, signal_id)
  }

};

gpu.mojom.CommandBufferRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CommandBufferClient
gpu.mojom.CommandBufferClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'gpu.mojom.CommandBufferClient';
  }

  onConsoleMessage(message) {
    // Method: OnConsoleMessage
    // Call: OnConsoleMessage(message)
  }

  onGpuSwitched() {
    // Method: OnGpuSwitched
    // Call: OnGpuSwitched()
  }

  onDestroyed(reason, error) {
    // Method: OnDestroyed
    // Call: OnDestroyed(reason, error)
  }

  onReturnData(data) {
    // Method: OnReturnData
    // Call: OnReturnData(data)
  }

  onSignalAck(signal_id, state) {
    // Method: OnSignalAck
    // Call: OnSignalAck(signal_id, state)
  }

};

gpu.mojom.CommandBufferClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DCOMPTexture
gpu.mojom.DCOMPTexturePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'gpu.mojom.DCOMPTexture';
  }

  startListening(client) {
    // Method: StartListening
    // Call: StartListening(client)
  }

  setTextureSize(size) {
    // Method: SetTextureSize
    // Call: SetTextureSize(size)
  }

  setDCOMPSurfaceHandle(token) {
    // Method: SetDCOMPSurfaceHandle
    return new Promise((resolve) => {
      // Call: SetDCOMPSurfaceHandle(token)
      resolve({});
    });
  }

};

gpu.mojom.DCOMPTextureRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DCOMPTextureClient
gpu.mojom.DCOMPTextureClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'gpu.mojom.DCOMPTextureClient';
  }

  onSharedImageMailboxBound(mailbox) {
    // Method: OnSharedImageMailboxBound
    // Call: OnSharedImageMailboxBound(mailbox)
  }

  onOutputRectChange(output_rect) {
    // Method: OnOutputRectChange
    // Call: OnOutputRectChange(output_rect)
  }

};

gpu.mojom.DCOMPTextureClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: OverlayStateObserver
gpu.mojom.OverlayStateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'gpu.mojom.OverlayStateObserver';
  }

  onStateChanged(promoted) {
    // Method: OnStateChanged
    // Call: OnStateChanged(promoted)
  }

};

gpu.mojom.OverlayStateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
