// Auto-generated MojoJS binding
// Source: chromium_src/gpu/ipc/common/gpu_channel.mojom
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
  crashForTesting() {
    return this.$.crashForTesting();
  }
  terminateForTesting() {
    return this.$.terminateForTesting();
  }
  getChannelToken() {
    return this.$.getChannelToken();
  }
  flush() {
    return this.$.flush();
  }
  getSharedMemoryForFlushId() {
    return this.$.getSharedMemoryForFlushId();
  }
  createCommandBuffer(params, routing_id, shared_state, receiver, client) {
    return this.$.createCommandBuffer(params, routing_id, shared_state, receiver, client);
  }
  destroyCommandBuffer(routing_id) {
    return this.$.destroyCommandBuffer(routing_id);
  }
  flushDeferredRequests(requests, flushed_deferred_message_id) {
    return this.$.flushDeferredRequests(requests, flushed_deferred_message_id);
  }
  createGpuMemoryBuffer(size, format, buffer_usage) {
    return this.$.createGpuMemoryBuffer(size, format, buffer_usage);
  }
  createDCOMPTexture(route_id, receiver) {
    return this.$.createDCOMPTexture(route_id, receiver);
  }
  registerOverlayStateObserver(promotion_hint_observer, mailbox) {
    return this.$.registerOverlayStateObserver(promotion_hint_observer, mailbox);
  }
  waitForTokenInRange(routing_id, start, end) {
    return this.$.waitForTokenInRange(routing_id, start, end);
  }
  waitForGetOffsetInRange(routing_id, set_get_buffer_count, start, end) {
    return this.$.waitForGetOffsetInRange(routing_id, set_get_buffer_count, start, end);
  }
  registerSysmemBufferCollection(service_handle, sysmem_token, format, usage, register_with_image_pipe) {
    return this.$.registerSysmemBufferCollection(service_handle, sysmem_token, format, usage, register_with_image_pipe);
  }
  copyToGpuMemoryBufferAsync(mailbox, sync_token_dependencies, release_count) {
    return this.$.copyToGpuMemoryBufferAsync(mailbox, sync_token_dependencies, release_count);
  }
  copyNativeGmbToSharedMemoryAsync(buffer_handle, shared_memory) {
    return this.$.copyNativeGmbToSharedMemoryAsync(buffer_handle, shared_memory);
  }
};

gpu.mojom.GpuChannelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GpuChannel', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  crashForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      gpu.mojom.GpuChannel_CrashForTesting_ParamsSpec,
      null,
      [],
      false);
  }

  terminateForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      gpu.mojom.GpuChannel_TerminateForTesting_ParamsSpec,
      null,
      [],
      false);
  }

  getChannelToken() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      gpu.mojom.GpuChannel_GetChannelToken_ParamsSpec,
      gpu.mojom.GpuChannel_GetChannelToken_ResponseParamsSpec,
      [],
      false);
  }

  flush() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      gpu.mojom.GpuChannel_Flush_ParamsSpec,
      gpu.mojom.GpuChannel_Flush_ResponseParamsSpec,
      [],
      false);
  }

  getSharedMemoryForFlushId() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ParamsSpec,
      gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ResponseParamsSpec,
      [],
      false);
  }

  createCommandBuffer(params, routing_id, shared_state, receiver, client) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      gpu.mojom.GpuChannel_CreateCommandBuffer_ParamsSpec,
      gpu.mojom.GpuChannel_CreateCommandBuffer_ResponseParamsSpec,
      [params, routing_id, shared_state, receiver, client],
      false);
  }

  destroyCommandBuffer(routing_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      gpu.mojom.GpuChannel_DestroyCommandBuffer_ParamsSpec,
      gpu.mojom.GpuChannel_DestroyCommandBuffer_ResponseParamsSpec,
      [routing_id],
      false);
  }

  flushDeferredRequests(requests, flushed_deferred_message_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      gpu.mojom.GpuChannel_FlushDeferredRequests_ParamsSpec,
      null,
      [requests, flushed_deferred_message_id],
      false);
  }

  createGpuMemoryBuffer(size, format, buffer_usage) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ParamsSpec,
      gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ResponseParamsSpec,
      [size, format, buffer_usage],
      false);
  }

  createDCOMPTexture(route_id, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      gpu.mojom.GpuChannel_CreateDCOMPTexture_ParamsSpec,
      gpu.mojom.GpuChannel_CreateDCOMPTexture_ResponseParamsSpec,
      [route_id, receiver],
      false);
  }

  registerOverlayStateObserver(promotion_hint_observer, mailbox) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ParamsSpec,
      gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ResponseParamsSpec,
      [promotion_hint_observer, mailbox],
      false);
  }

  waitForTokenInRange(routing_id, start, end) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      gpu.mojom.GpuChannel_WaitForTokenInRange_ParamsSpec,
      gpu.mojom.GpuChannel_WaitForTokenInRange_ResponseParamsSpec,
      [routing_id, start, end],
      false);
  }

  waitForGetOffsetInRange(routing_id, set_get_buffer_count, start, end) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ParamsSpec,
      gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ResponseParamsSpec,
      [routing_id, set_get_buffer_count, start, end],
      false);
  }

  registerSysmemBufferCollection(service_handle, sysmem_token, format, usage, register_with_image_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      gpu.mojom.GpuChannel_RegisterSysmemBufferCollection_ParamsSpec,
      null,
      [service_handle, sysmem_token, format, usage, register_with_image_pipe],
      false);
  }

  copyToGpuMemoryBufferAsync(mailbox, sync_token_dependencies, release_count) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ParamsSpec,
      gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParamsSpec,
      [mailbox, sync_token_dependencies, release_count],
      false);
  }

  copyNativeGmbToSharedMemoryAsync(buffer_handle, shared_memory) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GpuChannel', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: CrashForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_CrashForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CrashForTesting (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: TerminateForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_TerminateForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TerminateForTesting (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetChannelToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_GetChannelToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetChannelToken (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Flush
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_Flush_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Flush (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetSharedMemoryForFlushId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSharedMemoryForFlushId (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CreateCommandBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_CreateCommandBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCommandBuffer (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DestroyCommandBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_DestroyCommandBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DestroyCommandBuffer (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: FlushDeferredRequests
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_FlushDeferredRequests_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FlushDeferredRequests (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: CreateGpuMemoryBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateGpuMemoryBuffer (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: CreateDCOMPTexture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_CreateDCOMPTexture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateDCOMPTexture (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RegisterOverlayStateObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterOverlayStateObserver (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: WaitForTokenInRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_WaitForTokenInRange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitForTokenInRange (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: WaitForGetOffsetInRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitForGetOffsetInRange (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: RegisterSysmemBufferCollection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_RegisterSysmemBufferCollection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterSysmemBufferCollection (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: CopyToGpuMemoryBufferAsync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyToGpuMemoryBufferAsync (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: CopyNativeGmbToSharedMemoryAsync
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyNativeGmbToSharedMemoryAsync (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
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
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_CrashForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.crashForTesting');
          const result = this.impl.crashForTesting();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_TerminateForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.terminateForTesting');
          const result = this.impl.terminateForTesting();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_GetChannelToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getChannelToken');
          const result = this.impl.getChannelToken();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.GpuChannel_GetChannelToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_Flush_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flush');
          const result = this.impl.flush();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.GpuChannel_Flush_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSharedMemoryForFlushId');
          const result = this.impl.getSharedMemoryForFlushId();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.GpuChannel_GetSharedMemoryForFlushId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_CreateCommandBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCommandBuffer');
          const result = this.impl.createCommandBuffer(params.params, params.routing_id, params.shared_state, params.receiver, params.client);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.GpuChannel_CreateCommandBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_DestroyCommandBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.destroyCommandBuffer');
          const result = this.impl.destroyCommandBuffer(params.routing_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.GpuChannel_DestroyCommandBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_FlushDeferredRequests_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushDeferredRequests');
          const result = this.impl.flushDeferredRequests(params.requests, params.flushed_deferred_message_id);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createGpuMemoryBuffer');
          const result = this.impl.createGpuMemoryBuffer(params.size, params.format, params.buffer_usage);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.GpuChannel_CreateGpuMemoryBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_CreateDCOMPTexture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createDCOMPTexture');
          const result = this.impl.createDCOMPTexture(params.route_id, params.receiver);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.GpuChannel_CreateDCOMPTexture_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerOverlayStateObserver');
          const result = this.impl.registerOverlayStateObserver(params.promotion_hint_observer, params.mailbox);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.GpuChannel_RegisterOverlayStateObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_WaitForTokenInRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitForTokenInRange');
          const result = this.impl.waitForTokenInRange(params.routing_id, params.start, params.end);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.GpuChannel_WaitForTokenInRange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitForGetOffsetInRange');
          const result = this.impl.waitForGetOffsetInRange(params.routing_id, params.set_get_buffer_count, params.start, params.end);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.GpuChannel_WaitForGetOffsetInRange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_RegisterSysmemBufferCollection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerSysmemBufferCollection');
          const result = this.impl.registerSysmemBufferCollection(params.service_handle, params.sysmem_token, params.format, params.usage, params.register_with_image_pipe);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyToGpuMemoryBufferAsync');
          const result = this.impl.copyToGpuMemoryBufferAsync(params.mailbox, params.sync_token_dependencies, params.release_count);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.GpuChannel_CopyToGpuMemoryBufferAsync_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyNativeGmbToSharedMemoryAsync');
          const result = this.impl.copyNativeGmbToSharedMemoryAsync(params.buffer_handle, params.shared_memory);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.GpuChannel_CopyNativeGmbToSharedMemoryAsync_ResponseParamsSpec);
               responder(response);
            });
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
  setGetBuffer(shm_id) {
    return this.$.setGetBuffer(shm_id);
  }
  registerTransferBuffer(id, buffer) {
    return this.$.registerTransferBuffer(id, buffer);
  }
  createGpuFenceFromHandle(gpu_fence_id, fence_handle) {
    return this.$.createGpuFenceFromHandle(gpu_fence_id, fence_handle);
  }
  getGpuFenceHandle(id) {
    return this.$.getGpuFenceHandle(id);
  }
  signalSyncToken(sync_token, signal_id) {
    return this.$.signalSyncToken(sync_token, signal_id);
  }
  signalQuery(query, signal_id) {
    return this.$.signalQuery(query, signal_id);
  }
};

gpu.mojom.CommandBufferRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CommandBuffer', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setGetBuffer(shm_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      gpu.mojom.CommandBuffer_SetGetBuffer_ParamsSpec,
      null,
      [shm_id],
      false);
  }

  registerTransferBuffer(id, buffer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      gpu.mojom.CommandBuffer_RegisterTransferBuffer_ParamsSpec,
      null,
      [id, buffer],
      false);
  }

  createGpuFenceFromHandle(gpu_fence_id, fence_handle) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      gpu.mojom.CommandBuffer_CreateGpuFenceFromHandle_ParamsSpec,
      null,
      [gpu_fence_id, fence_handle],
      false);
  }

  getGpuFenceHandle(id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      gpu.mojom.CommandBuffer_GetGpuFenceHandle_ParamsSpec,
      gpu.mojom.CommandBuffer_GetGpuFenceHandle_ResponseParamsSpec,
      [id],
      false);
  }

  signalSyncToken(sync_token, signal_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      gpu.mojom.CommandBuffer_SignalSyncToken_ParamsSpec,
      null,
      [sync_token, signal_id],
      false);
  }

  signalQuery(query, signal_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CommandBuffer', [
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: SetGetBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.CommandBuffer_SetGetBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetGetBuffer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RegisterTransferBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.CommandBuffer_RegisterTransferBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterTransferBuffer (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateGpuFenceFromHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.CommandBuffer_CreateGpuFenceFromHandle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateGpuFenceFromHandle (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetGpuFenceHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.CommandBuffer_GetGpuFenceHandle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetGpuFenceHandle (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SignalSyncToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.CommandBuffer_SignalSyncToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SignalSyncToken (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SignalQuery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.CommandBuffer_SignalQuery_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SignalQuery (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(gpu.mojom.CommandBuffer_SetGetBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setGetBuffer');
          const result = this.impl.setGetBuffer(params.shm_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.CommandBuffer_RegisterTransferBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerTransferBuffer');
          const result = this.impl.registerTransferBuffer(params.id, params.buffer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.CommandBuffer_CreateGpuFenceFromHandle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createGpuFenceFromHandle');
          const result = this.impl.createGpuFenceFromHandle(params.gpu_fence_id, params.fence_handle);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.CommandBuffer_GetGpuFenceHandle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getGpuFenceHandle');
          const result = this.impl.getGpuFenceHandle(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.CommandBuffer_GetGpuFenceHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.CommandBuffer_SignalSyncToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.signalSyncToken');
          const result = this.impl.signalSyncToken(params.sync_token, params.signal_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.CommandBuffer_SignalQuery_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.signalQuery');
          const result = this.impl.signalQuery(params.query, params.signal_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
  onConsoleMessage(message) {
    return this.$.onConsoleMessage(message);
  }
  onGpuSwitched() {
    return this.$.onGpuSwitched();
  }
  onDestroyed(reason, error) {
    return this.$.onDestroyed(reason, error);
  }
  onReturnData(data) {
    return this.$.onReturnData(data);
  }
  onSignalAck(signal_id, state) {
    return this.$.onSignalAck(signal_id, state);
  }
};

gpu.mojom.CommandBufferClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CommandBufferClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onConsoleMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      gpu.mojom.CommandBufferClient_OnConsoleMessage_ParamsSpec,
      null,
      [message],
      false);
  }

  onGpuSwitched() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      gpu.mojom.CommandBufferClient_OnGpuSwitched_ParamsSpec,
      null,
      [],
      false);
  }

  onDestroyed(reason, error) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      gpu.mojom.CommandBufferClient_OnDestroyed_ParamsSpec,
      null,
      [reason, error],
      false);
  }

  onReturnData(data) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      gpu.mojom.CommandBufferClient_OnReturnData_ParamsSpec,
      null,
      [data],
      false);
  }

  onSignalAck(signal_id, state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CommandBufferClient', [
      { explicit: null },
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
        
        // Try Method 0: OnConsoleMessage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.CommandBufferClient_OnConsoleMessage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnConsoleMessage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnGpuSwitched
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.CommandBufferClient_OnGpuSwitched_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGpuSwitched (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnDestroyed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.CommandBufferClient_OnDestroyed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDestroyed (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnReturnData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.CommandBufferClient_OnReturnData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnReturnData (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnSignalAck
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.CommandBufferClient_OnSignalAck_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSignalAck (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(gpu.mojom.CommandBufferClient_OnConsoleMessage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onConsoleMessage');
          const result = this.impl.onConsoleMessage(params.message);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.CommandBufferClient_OnGpuSwitched_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onGpuSwitched');
          const result = this.impl.onGpuSwitched();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.CommandBufferClient_OnDestroyed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDestroyed');
          const result = this.impl.onDestroyed(params.reason, params.error);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.CommandBufferClient_OnReturnData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReturnData');
          const result = this.impl.onReturnData(params.data);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.CommandBufferClient_OnSignalAck_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSignalAck');
          const result = this.impl.onSignalAck(params.signal_id, params.state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
  startListening(client) {
    return this.$.startListening(client);
  }
  setTextureSize(size) {
    return this.$.setTextureSize(size);
  }
  setDCOMPSurfaceHandle(token) {
    return this.$.setDCOMPSurfaceHandle(token);
  }
};

gpu.mojom.DCOMPTextureRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DCOMPTexture', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  startListening(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      gpu.mojom.DCOMPTexture_StartListening_ParamsSpec,
      null,
      [client],
      false);
  }

  setTextureSize(size) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      gpu.mojom.DCOMPTexture_SetTextureSize_ParamsSpec,
      null,
      [size],
      false);
  }

  setDCOMPSurfaceHandle(token) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DCOMPTexture', [
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
        
        // Try Method 0: StartListening
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.DCOMPTexture_StartListening_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartListening (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetTextureSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.DCOMPTexture_SetTextureSize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTextureSize (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetDCOMPSurfaceHandle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDCOMPSurfaceHandle (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(gpu.mojom.DCOMPTexture_StartListening_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startListening');
          const result = this.impl.startListening(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.DCOMPTexture_SetTextureSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTextureSize');
          const result = this.impl.setTextureSize(params.size);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDCOMPSurfaceHandle');
          const result = this.impl.setDCOMPSurfaceHandle(params.token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, gpu.mojom.DCOMPTexture_SetDCOMPSurfaceHandle_ResponseParamsSpec);
               responder(response);
            });
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
  onSharedImageMailboxBound(mailbox) {
    return this.$.onSharedImageMailboxBound(mailbox);
  }
  onOutputRectChange(output_rect) {
    return this.$.onOutputRectChange(output_rect);
  }
};

gpu.mojom.DCOMPTextureClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DCOMPTextureClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onSharedImageMailboxBound(mailbox) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      gpu.mojom.DCOMPTextureClient_OnSharedImageMailboxBound_ParamsSpec,
      null,
      [mailbox],
      false);
  }

  onOutputRectChange(output_rect) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DCOMPTextureClient', [
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
        
        // Try Method 0: OnSharedImageMailboxBound
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.DCOMPTextureClient_OnSharedImageMailboxBound_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSharedImageMailboxBound (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnOutputRectChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.DCOMPTextureClient_OnOutputRectChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnOutputRectChange (1)');
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
          const params = decoder.decodeStructInline(gpu.mojom.DCOMPTextureClient_OnSharedImageMailboxBound_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSharedImageMailboxBound');
          const result = this.impl.onSharedImageMailboxBound(params.mailbox);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(gpu.mojom.DCOMPTextureClient_OnOutputRectChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOutputRectChange');
          const result = this.impl.onOutputRectChange(params.output_rect);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
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
  onStateChanged(promoted) {
    return this.$.onStateChanged(promoted);
  }
};

gpu.mojom.OverlayStateObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OverlayStateObserver', [
      { explicit: null },
    ]);
  }

  onStateChanged(promoted) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OverlayStateObserver', [
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
        
        // Try Method 0: OnStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(gpu.mojom.OverlayStateObserver_OnStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStateChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(gpu.mojom.OverlayStateObserver_OnStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStateChanged');
          const result = this.impl.onStateChanged(params.promoted);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

gpu.mojom.OverlayStateObserverReceiver = gpu.mojom.OverlayStateObserverReceiver;

gpu.mojom.OverlayStateObserverPtr = gpu.mojom.OverlayStateObserverRemote;
gpu.mojom.OverlayStateObserverRequest = gpu.mojom.OverlayStateObserverPendingReceiver;

