// Auto-generated MojoJS binding
 // Source: chromium_src/services/viz/privileged/mojom/compositing/frame_sink_manager.mojom
 // Module: viz.mojom

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
 

 mojo.internal.bindings.viz = mojo.internal.bindings.viz || {};
mojo.internal.bindings.viz.mojom = mojo.internal.bindings.viz.mojom || {};
mojo.internal.bindings.gpu = mojo.internal.bindings.gpu || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.input = mojo.internal.bindings.input || {};

mojo.internal.bindings.viz.mojom.RootCompositorFrameSinkParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.CompositorDisplayLinkParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager = {};
mojo.internal.bindings.viz.mojom.FrameSinkManager.$interfaceName = 'viz.mojom.FrameSinkManager';
mojo.internal.bindings.viz.mojom.FrameSinkManager_RegisterFrameSinkId_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_Throttle_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictBackBuffer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManagerClient = {};
mojo.internal.bindings.viz.mojom.FrameSinkManagerClient.$interfaceName = 'viz.mojom.FrameSinkManagerClient';
mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec = { $: {} };
mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistry = {};
mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistry.$interfaceName = 'viz.mojom.RendererInputRouterDelegateRegistry';
mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_ParamsSpec = { $: {} };

// Struct: RootCompositorFrameSinkParams
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.RootCompositorFrameSinkParamsSpec, 'viz.mojom.RootCompositorFrameSinkParams', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_widget', 8, 0, mojo.internal.bindings.gpu.mojom.SurfaceHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_renderer_settings', 16, 0, mojo.internal.bindings.viz.mojom.RendererSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_compositor_frame_sink', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_compositor_frame_sink_client', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_display_private', 40, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_client', 48, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.DisplayClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_external_begin_frame_controller', 56, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('arg_external_begin_frame_controller_client', 64, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('arg_refresh_rate', 72, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_gpu_compositing', 76, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_send_swap_size_notifications', 76, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_frame_rate_limit', 76, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_create_input_receiver', 76, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: CompositorDisplayLinkParams
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.CompositorDisplayLinkParamsSpec, 'viz.mojom.CompositorDisplayLinkParams', [
      mojo.internal.StructField('arg_external_begin_frame_controller', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.ExternalBeginFrameControllerRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_external_begin_frame_controller_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.ExternalBeginFrameControllerClientRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FrameSinkManager
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_RegisterFrameSinkId_ParamsSpec, 'viz.mojom.FrameSinkManager_RegisterFrameSinkId_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_report_activation', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec, 'viz.mojom.FrameSinkManager_InvalidateFrameSinkId_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParamsSpec, 'viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec, 'viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_debug_label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.mojo.internal.bindings.viz.mojom.RootCompositorFrameSinkParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.mojo.internal.bindings.viz.mojom.CompositorDisplayLinkParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateFrameSinkBundle_Params', [
      mojo.internal.StructField('arg_bundle_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkBundleIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.FrameSinkBundleRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.FrameSinkBundleClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateCompositorFrameSink_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bundle_id', 8, 0, mojo.internal.bindings.viz.mojom.FrameSinkBundleIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_compositor_frame_sink', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_compositor_frame_sink_client', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_config', 32, 0, mojo.internal.bindings.input.mojom.RenderInputRouterConfigSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec, 'viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParamsSpec, 'viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec, 'viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_Params', [
      mojo.internal.StructField('arg_parent_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_child_frame_sink_id', 8, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec, 'viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_Params', [
      mojo.internal.StructField('arg_parent_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_child_frame_sink_id', 8, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec, 'viz.mojom.FrameSinkManager_AddVideoDetectorObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.VideoDetectorObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateVideoCapturer_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.FrameSinkVideoCapturerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_capture_version_source', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec, 'viz.mojom.FrameSinkManager_EvictSurfaces_Params', [
      mojo.internal.StructField('arg_surface_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.SurfaceIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_Throttle_ParamsSpec, 'viz.mojom.FrameSinkManager_Throttle_Params', [
      mojo.internal.StructField('arg_frame_sink_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_interval', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec, 'viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_Params', [
      mojo.internal.StructField('arg_interval', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec, 'viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec, 'viz.mojom.FrameSinkManager_RequestCopyOfOutput_Params', [
      mojo.internal.StructField('arg_surface_id', 0, 0, mojo.internal.bindings.viz.mojom.SurfaceIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request', 8, 0, mojo.internal.bindings.viz.mojom.CopyOutputRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_capture_exact_surface_id', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec, 'viz.mojom.FrameSinkManager_CacheBackBuffer_Params', [
      mojo.internal.StructField('arg_root_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cache_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec, 'viz.mojom.FrameSinkManager_EvictBackBuffer_Params', [
      mojo.internal.StructField('arg_cache_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictBackBuffer_ResponseParamsSpec, 'viz.mojom.FrameSinkManager_EvictBackBuffer_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec, 'viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_Params', [
      mojo.internal.StructField('arg_debug_settings', 0, 0, mojo.internal.bindings.viz.mojom.DebugRendererSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec, 'viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_Params', [
      mojo.internal.StructField('arg_transition_token', 0, 0, mojo.internal.bindings.blink.mojom.ViewTransitionTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec, 'viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.FrameSinksMetricsRecorderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec, 'viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.FrameSinkManagerTestApiRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec, 'viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistrySpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec, 'viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_Params', [
      mojo.internal.StructField('arg_render_input_routers', 0, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_blocked', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec, 'viz.mojom.FrameSinkManager_RequestInputBack_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.viz.mojom.FrameSinkManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkManagerRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.viz.mojom.FrameSinkManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.viz.mojom.FrameSinkManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  registerFrameSinkId(arg_frame_sink_id, arg_report_activation) {
    return this.$.registerFrameSinkId(arg_frame_sink_id, arg_report_activation);
  }
  invalidateFrameSinkId(arg_frame_sink_id) {
    return this.$.invalidateFrameSinkId(arg_frame_sink_id);
  }
  setFrameSinkDebugLabel(arg_frame_sink_id, arg_debug_label) {
    return this.$.setFrameSinkDebugLabel(arg_frame_sink_id, arg_debug_label);
  }
  createRootCompositorFrameSink(arg_params) {
    return this.$.createRootCompositorFrameSink(arg_params);
  }
  createCompositorDisplayLink(arg_params) {
    return this.$.createCompositorDisplayLink(arg_params);
  }
  createFrameSinkBundle(arg_bundle_id, arg_receiver, arg_client) {
    return this.$.createFrameSinkBundle(arg_bundle_id, arg_receiver, arg_client);
  }
  createCompositorFrameSink(arg_frame_sink_id, arg_bundle_id, arg_compositor_frame_sink, arg_compositor_frame_sink_client, arg_config) {
    return this.$.createCompositorFrameSink(arg_frame_sink_id, arg_bundle_id, arg_compositor_frame_sink, arg_compositor_frame_sink_client, arg_config);
  }
  destroyCompositorFrameSink(arg_frame_sink_id) {
    return this.$.destroyCompositorFrameSink(arg_frame_sink_id);
  }
  registerFrameSinkHierarchy(arg_parent_frame_sink_id, arg_child_frame_sink_id) {
    return this.$.registerFrameSinkHierarchy(arg_parent_frame_sink_id, arg_child_frame_sink_id);
  }
  unregisterFrameSinkHierarchy(arg_parent_frame_sink_id, arg_child_frame_sink_id) {
    return this.$.unregisterFrameSinkHierarchy(arg_parent_frame_sink_id, arg_child_frame_sink_id);
  }
  addVideoDetectorObserver(arg_observer) {
    return this.$.addVideoDetectorObserver(arg_observer);
  }
  createVideoCapturer(arg_receiver, arg_capture_version_source) {
    return this.$.createVideoCapturer(arg_receiver, arg_capture_version_source);
  }
  evictSurfaces(arg_surface_ids) {
    return this.$.evictSurfaces(arg_surface_ids);
  }
  throttle(arg_frame_sink_ids, arg_interval) {
    return this.$.throttle(arg_frame_sink_ids, arg_interval);
  }
  startThrottlingAllFrameSinks(arg_interval) {
    return this.$.startThrottlingAllFrameSinks(arg_interval);
  }
  stopThrottlingAllFrameSinks() {
    return this.$.stopThrottlingAllFrameSinks();
  }
  requestCopyOfOutput(arg_surface_id, arg_request, arg_capture_exact_surface_id) {
    return this.$.requestCopyOfOutput(arg_surface_id, arg_request, arg_capture_exact_surface_id);
  }
  cacheBackBuffer(arg_cache_id, arg_root_frame_sink_id) {
    return this.$.cacheBackBuffer(arg_cache_id, arg_root_frame_sink_id);
  }
  evictBackBuffer(arg_cache_id) {
    return this.$.evictBackBuffer(arg_cache_id);
  }
  updateDebugRendererSettings(arg_debug_settings) {
    return this.$.updateDebugRendererSettings(arg_debug_settings);
  }
  clearUnclaimedViewTransitionResources(arg_transition_token) {
    return this.$.clearUnclaimedViewTransitionResources(arg_transition_token);
  }
  createMetricsRecorderForTest(arg_receiver) {
    return this.$.createMetricsRecorderForTest(arg_receiver);
  }
  enableFrameSinkManagerTestApi(arg_receiver) {
    return this.$.enableFrameSinkManagerTestApi(arg_receiver);
  }
  setupRendererInputRouterDelegateRegistry(arg_receiver) {
    return this.$.setupRendererInputRouterDelegateRegistry(arg_receiver);
  }
  notifyRendererBlockStateChanged(arg_blocked, arg_render_input_routers) {
    return this.$.notifyRendererBlockStateChanged(arg_blocked, arg_render_input_routers);
  }
  requestInputBack() {
    return this.$.requestInputBack();
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameSinkManager', [
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

  registerFrameSinkId(arg_frame_sink_id, arg_report_activation) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_RegisterFrameSinkId_ParamsSpec,
      null,
      [arg_frame_sink_id, arg_report_activation],
      false);
  }

  invalidateFrameSinkId(arg_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec,
      mojo.internal.bindings.viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParamsSpec,
      [arg_frame_sink_id],
      false);
  }

  setFrameSinkDebugLabel(arg_frame_sink_id, arg_debug_label) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec,
      null,
      [arg_frame_sink_id, arg_debug_label],
      false);
  }

  createRootCompositorFrameSink(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  createCompositorDisplayLink(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  createFrameSinkBundle(arg_bundle_id, arg_receiver, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec,
      null,
      [arg_bundle_id, arg_receiver, arg_client],
      false);
  }

  createCompositorFrameSink(arg_frame_sink_id, arg_bundle_id, arg_compositor_frame_sink, arg_compositor_frame_sink_client, arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec,
      null,
      [arg_frame_sink_id, arg_bundle_id, arg_compositor_frame_sink, arg_compositor_frame_sink_client, arg_config],
      false);
  }

  destroyCompositorFrameSink(arg_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec,
      mojo.internal.bindings.viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParamsSpec,
      [arg_frame_sink_id],
      false);
  }

  registerFrameSinkHierarchy(arg_parent_frame_sink_id, arg_child_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec,
      null,
      [arg_parent_frame_sink_id, arg_child_frame_sink_id],
      false);
  }

  unregisterFrameSinkHierarchy(arg_parent_frame_sink_id, arg_child_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec,
      null,
      [arg_parent_frame_sink_id, arg_child_frame_sink_id],
      false);
  }

  addVideoDetectorObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  createVideoCapturer(arg_receiver, arg_capture_version_source) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec,
      null,
      [arg_receiver, arg_capture_version_source],
      false);
  }

  evictSurfaces(arg_surface_ids) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec,
      null,
      [arg_surface_ids],
      false);
  }

  throttle(arg_frame_sink_ids, arg_interval) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_Throttle_ParamsSpec,
      null,
      [arg_frame_sink_ids, arg_interval],
      false);
  }

  startThrottlingAllFrameSinks(arg_interval) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec,
      null,
      [arg_interval],
      false);
  }

  stopThrottlingAllFrameSinks() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec,
      null,
      [],
      false);
  }

  requestCopyOfOutput(arg_surface_id, arg_request, arg_capture_exact_surface_id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec,
      null,
      [arg_surface_id, arg_request, arg_capture_exact_surface_id],
      false);
  }

  cacheBackBuffer(arg_cache_id, arg_root_frame_sink_id) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec,
      null,
      [arg_cache_id, arg_root_frame_sink_id],
      false);
  }

  evictBackBuffer(arg_cache_id) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec,
      mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictBackBuffer_ResponseParamsSpec,
      [arg_cache_id],
      false);
  }

  updateDebugRendererSettings(arg_debug_settings) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec,
      null,
      [arg_debug_settings],
      false);
  }

  clearUnclaimedViewTransitionResources(arg_transition_token) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec,
      null,
      [arg_transition_token],
      false);
  }

  createMetricsRecorderForTest(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  enableFrameSinkManagerTestApi(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  setupRendererInputRouterDelegateRegistry(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  notifyRendererBlockStateChanged(arg_blocked, arg_render_input_routers) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec,
      null,
      [arg_blocked, arg_render_input_routers],
      false);
  }

  requestInputBack() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.viz.mojom.FrameSinkManager.getRemote = function() {
  let remote = new mojo.internal.bindings.viz.mojom.FrameSinkManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.viz.mojom.FrameSinkManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameSinkManager', [
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
        
        // Try Method 0: RegisterFrameSinkId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_RegisterFrameSinkId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterFrameSinkId (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: InvalidateFrameSinkId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InvalidateFrameSinkId (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetFrameSinkDebugLabel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFrameSinkDebugLabel (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CreateRootCompositorFrameSink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRootCompositorFrameSink (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CreateCompositorDisplayLink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCompositorDisplayLink (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CreateFrameSinkBundle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateFrameSinkBundle (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CreateCompositorFrameSink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateCompositorFrameSink (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DestroyCompositorFrameSink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DestroyCompositorFrameSink (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RegisterFrameSinkHierarchy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterFrameSinkHierarchy (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: UnregisterFrameSinkHierarchy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnregisterFrameSinkHierarchy (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: AddVideoDetectorObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddVideoDetectorObserver (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: CreateVideoCapturer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateVideoCapturer (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: EvictSurfaces
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EvictSurfaces (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: Throttle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_Throttle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Throttle (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: StartThrottlingAllFrameSinks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartThrottlingAllFrameSinks (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: StopThrottlingAllFrameSinks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopThrottlingAllFrameSinks (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: RequestCopyOfOutput
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestCopyOfOutput (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: CacheBackBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CacheBackBuffer (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: EvictBackBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EvictBackBuffer (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: UpdateDebugRendererSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateDebugRendererSettings (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: ClearUnclaimedViewTransitionResources
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearUnclaimedViewTransitionResources (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: CreateMetricsRecorderForTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateMetricsRecorderForTest (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: EnableFrameSinkManagerTestApi
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableFrameSinkManagerTestApi (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: SetupRendererInputRouterDelegateRegistry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetupRendererInputRouterDelegateRegistry (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: NotifyRendererBlockStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyRendererBlockStateChanged (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: RequestInputBack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestInputBack (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_RegisterFrameSinkId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerFrameSinkId');
          const result = this.impl.registerFrameSinkId(params.arg_frame_sink_id, params.arg_report_activation);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.invalidateFrameSinkId');
          const result = this.impl.invalidateFrameSinkId(params.arg_frame_sink_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.viz.mojom.FrameSinkManager_InvalidateFrameSinkId_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InvalidateFrameSinkId FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_SetFrameSinkDebugLabel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFrameSinkDebugLabel');
          const result = this.impl.setFrameSinkDebugLabel(params.arg_frame_sink_id, params.arg_debug_label);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateRootCompositorFrameSink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRootCompositorFrameSink');
          const result = this.impl.createRootCompositorFrameSink(params.arg_params);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateCompositorDisplayLink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCompositorDisplayLink');
          const result = this.impl.createCompositorDisplayLink(params.arg_params);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateFrameSinkBundle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createFrameSinkBundle');
          const result = this.impl.createFrameSinkBundle(params.arg_bundle_id, params.arg_receiver, params.arg_client);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateCompositorFrameSink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createCompositorFrameSink');
          const result = this.impl.createCompositorFrameSink(params.arg_frame_sink_id, params.arg_bundle_id, params.arg_compositor_frame_sink, params.arg_compositor_frame_sink_client, params.arg_config);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.destroyCompositorFrameSink');
          const result = this.impl.destroyCompositorFrameSink(params.arg_frame_sink_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.viz.mojom.FrameSinkManager_DestroyCompositorFrameSink_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DestroyCompositorFrameSink FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_RegisterFrameSinkHierarchy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerFrameSinkHierarchy');
          const result = this.impl.registerFrameSinkHierarchy(params.arg_parent_frame_sink_id, params.arg_child_frame_sink_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_UnregisterFrameSinkHierarchy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unregisterFrameSinkHierarchy');
          const result = this.impl.unregisterFrameSinkHierarchy(params.arg_parent_frame_sink_id, params.arg_child_frame_sink_id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_AddVideoDetectorObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addVideoDetectorObserver');
          const result = this.impl.addVideoDetectorObserver(params.arg_observer);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateVideoCapturer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createVideoCapturer');
          const result = this.impl.createVideoCapturer(params.arg_receiver, params.arg_capture_version_source);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictSurfaces_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.evictSurfaces');
          const result = this.impl.evictSurfaces(params.arg_surface_ids);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_Throttle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.throttle');
          const result = this.impl.throttle(params.arg_frame_sink_ids, params.arg_interval);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_StartThrottlingAllFrameSinks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startThrottlingAllFrameSinks');
          const result = this.impl.startThrottlingAllFrameSinks(params.arg_interval);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_StopThrottlingAllFrameSinks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopThrottlingAllFrameSinks');
          const result = this.impl.stopThrottlingAllFrameSinks();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_RequestCopyOfOutput_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestCopyOfOutput');
          const result = this.impl.requestCopyOfOutput(params.arg_surface_id, params.arg_request, params.arg_capture_exact_surface_id);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CacheBackBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cacheBackBuffer');
          const result = this.impl.cacheBackBuffer(params.arg_cache_id, params.arg_root_frame_sink_id);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictBackBuffer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.evictBackBuffer');
          const result = this.impl.evictBackBuffer(params.arg_cache_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.viz.mojom.FrameSinkManager_EvictBackBuffer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EvictBackBuffer FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_UpdateDebugRendererSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateDebugRendererSettings');
          const result = this.impl.updateDebugRendererSettings(params.arg_debug_settings);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_ClearUnclaimedViewTransitionResources_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearUnclaimedViewTransitionResources');
          const result = this.impl.clearUnclaimedViewTransitionResources(params.arg_transition_token);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_CreateMetricsRecorderForTest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createMetricsRecorderForTest');
          const result = this.impl.createMetricsRecorderForTest(params.arg_receiver);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_EnableFrameSinkManagerTestApi_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableFrameSinkManagerTestApi');
          const result = this.impl.enableFrameSinkManagerTestApi(params.arg_receiver);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_SetupRendererInputRouterDelegateRegistry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setupRendererInputRouterDelegateRegistry');
          const result = this.impl.setupRendererInputRouterDelegateRegistry(params.arg_receiver);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_NotifyRendererBlockStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyRendererBlockStateChanged');
          const result = this.impl.notifyRendererBlockStateChanged(params.arg_blocked, params.arg_render_input_routers);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManager_RequestInputBack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestInputBack');
          const result = this.impl.requestInputBack();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkManagerReceiver = mojo.internal.bindings.viz.mojom.FrameSinkManagerReceiver;

mojo.internal.bindings.viz.mojom.FrameSinkManagerPtr = mojo.internal.bindings.viz.mojom.FrameSinkManagerRemote;
mojo.internal.bindings.viz.mojom.FrameSinkManagerRequest = mojo.internal.bindings.viz.mojom.FrameSinkManagerPendingReceiver;


// Interface: FrameSinkManagerClient
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_Params', [
      mojo.internal.StructField('arg_surface_info', 0, 0, mojo.internal.bindings.viz.mojom.SurfaceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_hit_test_data', 8, 0, mojo.internal.Array(mojo.internal.bindings.viz.mojom.AggregatedHitTestRegionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_Params', [
      mojo.internal.StructField('arg_frame_sink_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_activation_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_token', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_Params', [
      mojo.internal.StructField('arg_thread_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ResponseParamsSpec, 'viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ResponseParams', [
      mojo.internal.StructField('arg_passed_verification', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_Params', [
      mojo.internal.StructField('arg_destination_token', 0, 0, mojo.internal.bindings.blink.mojom.SameDocNavigationScreenshotDestinationTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_copy_output_result', 8, 0, mojo.internal.bindings.viz.mojom.CopyOutputResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_Params', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec, 'viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_Params', [
      mojo.internal.StructField('arg_transition_token', 0, 0, mojo.internal.bindings.blink.mojom.ViewTransitionTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.viz.mojom.FrameSinkManagerClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkManagerClientRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.FrameSinkManagerClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.viz.mojom.FrameSinkManagerClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.viz.mojom.FrameSinkManagerClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFirstSurfaceActivation(arg_surface_info) {
    return this.$.onFirstSurfaceActivation(arg_surface_info);
  }
  onAggregatedHitTestRegionListUpdated(arg_frame_sink_id, arg_hit_test_data) {
    return this.$.onAggregatedHitTestRegionListUpdated(arg_frame_sink_id, arg_hit_test_data);
  }
  onFrameTokenChanged(arg_frame_sink_id, arg_frame_token, arg_activation_time) {
    return this.$.onFrameTokenChanged(arg_frame_sink_id, arg_frame_token, arg_activation_time);
  }
  verifyThreadIdsDoNotBelongToHost(arg_thread_ids) {
    return this.$.verifyThreadIdsDoNotBelongToHost(arg_thread_ids);
  }
  onScreenshotCaptured(arg_destination_token, arg_copy_output_result) {
    return this.$.onScreenshotCaptured(arg_destination_token, arg_copy_output_result);
  }
  onVizTouchStateAvailable(arg_region) {
    return this.$.onVizTouchStateAvailable(arg_region);
  }
  onViewTransitionResourcesCaptured(arg_transition_token) {
    return this.$.onViewTransitionResourcesCaptured(arg_transition_token);
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkManagerClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameSinkManagerClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onFirstSurfaceActivation(arg_surface_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec,
      null,
      [arg_surface_info],
      false);
  }

  onAggregatedHitTestRegionListUpdated(arg_frame_sink_id, arg_hit_test_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec,
      null,
      [arg_frame_sink_id, arg_hit_test_data],
      false);
  }

  onFrameTokenChanged(arg_frame_sink_id, arg_frame_token, arg_activation_time) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec,
      null,
      [arg_frame_sink_id, arg_frame_token, arg_activation_time],
      false);
  }

  verifyThreadIdsDoNotBelongToHost(arg_thread_ids) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec,
      mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ResponseParamsSpec,
      [arg_thread_ids],
      false);
  }

  onScreenshotCaptured(arg_destination_token, arg_copy_output_result) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec,
      null,
      [arg_destination_token, arg_copy_output_result],
      false);
  }

  onVizTouchStateAvailable(arg_region) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec,
      null,
      [arg_region],
      false);
  }

  onViewTransitionResourcesCaptured(arg_transition_token) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec,
      null,
      [arg_transition_token],
      false);
  }

};

mojo.internal.bindings.viz.mojom.FrameSinkManagerClient.getRemote = function() {
  let remote = new mojo.internal.bindings.viz.mojom.FrameSinkManagerClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.FrameSinkManagerClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.viz.mojom.FrameSinkManagerClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameSinkManagerClient', [
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
        
        // Try Method 0: OnFirstSurfaceActivation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFirstSurfaceActivation (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnAggregatedHitTestRegionListUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAggregatedHitTestRegionListUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnFrameTokenChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameTokenChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: VerifyThreadIdsDoNotBelongToHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> VerifyThreadIdsDoNotBelongToHost (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnScreenshotCaptured
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScreenshotCaptured (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnVizTouchStateAvailable
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVizTouchStateAvailable (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnViewTransitionResourcesCaptured
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnViewTransitionResourcesCaptured (6)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnFirstSurfaceActivation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFirstSurfaceActivation');
          const result = this.impl.onFirstSurfaceActivation(params.arg_surface_info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnAggregatedHitTestRegionListUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAggregatedHitTestRegionListUpdated');
          const result = this.impl.onAggregatedHitTestRegionListUpdated(params.arg_frame_sink_id, params.arg_hit_test_data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnFrameTokenChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameTokenChanged');
          const result = this.impl.onFrameTokenChanged(params.arg_frame_sink_id, params.arg_frame_token, params.arg_activation_time);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.verifyThreadIdsDoNotBelongToHost');
          const result = this.impl.verifyThreadIdsDoNotBelongToHost(params.arg_thread_ids);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_VerifyThreadIdsDoNotBelongToHost_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] VerifyThreadIdsDoNotBelongToHost FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnScreenshotCaptured_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScreenshotCaptured');
          const result = this.impl.onScreenshotCaptured(params.arg_destination_token, params.arg_copy_output_result);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnVizTouchStateAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVizTouchStateAvailable');
          const result = this.impl.onVizTouchStateAvailable(params.arg_region);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.FrameSinkManagerClient_OnViewTransitionResourcesCaptured_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onViewTransitionResourcesCaptured');
          const result = this.impl.onViewTransitionResourcesCaptured(params.arg_transition_token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.viz.mojom.FrameSinkManagerClientReceiver = mojo.internal.bindings.viz.mojom.FrameSinkManagerClientReceiver;

mojo.internal.bindings.viz.mojom.FrameSinkManagerClientPtr = mojo.internal.bindings.viz.mojom.FrameSinkManagerClientRemote;
mojo.internal.bindings.viz.mojom.FrameSinkManagerClientRequest = mojo.internal.bindings.viz.mojom.FrameSinkManagerClientPendingReceiver;


// Interface: RendererInputRouterDelegateRegistry
mojo.internal.Struct(
    mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_ParamsSpec, 'viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_rir_delegate_client_remote', 8, 0, mojo.internal.bindings.pending_associated_remote<input.mojom.RenderInputRouterDelegateClient>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_rir_delegate_receiver', 16, 0, mojo.internal.bindings.pending_associated_receiver<input.mojom.RenderInputRouterDelegate>Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistryRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.RendererInputRouterDelegateRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setupRenderInputRouterDelegateConnection(arg_id, arg_rir_delegate_client_remote, arg_rir_delegate_receiver) {
    return this.$.setupRenderInputRouterDelegateConnection(arg_id, arg_rir_delegate_client_remote, arg_rir_delegate_receiver);
  }
};

mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RendererInputRouterDelegateRegistry', [
      { explicit: null },
    ]);
  }

  setupRenderInputRouterDelegateConnection(arg_id, arg_rir_delegate_client_remote, arg_rir_delegate_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_ParamsSpec,
      null,
      [arg_id, arg_rir_delegate_client_remote, arg_rir_delegate_receiver],
      false);
  }

};

mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistry.getRemote = function() {
  let remote = new mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.RendererInputRouterDelegateRegistry',
    'context');
  return remote.$;
};

mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RendererInputRouterDelegateRegistry', [
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
        
        // Try Method 0: SetupRenderInputRouterDelegateConnection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetupRenderInputRouterDelegateConnection (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistry_SetupRenderInputRouterDelegateConnection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setupRenderInputRouterDelegateConnection');
          const result = this.impl.setupRenderInputRouterDelegateConnection(params.arg_id, params.arg_rir_delegate_client_remote, params.arg_rir_delegate_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistryReceiver = mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistryReceiver;

mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistryPtr = mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistryRemote;
mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistryRequest = mojo.internal.bindings.viz.mojom.RendererInputRouterDelegateRegistryPendingReceiver;

