// Auto-generated MojoJS binding
 // Source: chromium_src/content/common/frame.mojom
 // Module: content.mojom

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
 

 mojo.internal.bindings.content = mojo.internal.bindings.content || {};
mojo.internal.bindings.content.mojom = mojo.internal.bindings.content.mojom || {};
mojo.internal.bindings.cc = mojo.internal.bindings.cc || {};
mojo.internal.bindings.IPC = mojo.internal.bindings.IPC || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.service_manager = mojo.internal.bindings.service_manager || {};
mojo.internal.bindings.viz = mojo.internal.bindings.viz || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.ax = mojo.internal.bindings.ax || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.content.mojom.ViewWidgetTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.content.mojom.ChildFrameOwnerElementTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.content.mojom.FrameDeleteIntentionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.content.mojom.CreateNewWindowStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.content.mojom.CreateMainFrameUnionSpec = { $: {} };
mojo.internal.bindings.content.mojom.CreateViewParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.CreateLocalMainFrameParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.CreateProvisionalLocalMainFrameParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.CreateRemoteMainFrameParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.CreateFrameWidgetParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.CreateFrameParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.SnapshotAccessibilityTreeParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.CreateNewWindowParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.CreateNewWindowReplySpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandler = {};
mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandler.$interfaceName = 'content.mojom.FrameHTMLSerializerHandler';
mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.Frame = {};
mojo.internal.bindings.content.mojom.Frame.$interfaceName = 'content.mojom.Frame';
mojo.internal.bindings.content.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.Frame_Unload_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.Frame_Delete_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.Frame_UndoCommitNavigation_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.Frame_GetInterfaceProvider_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameBindingsControl = {};
mojo.internal.bindings.content.mojom.FrameBindingsControl.$interfaceName = 'content.mojom.FrameBindingsControl';
mojo.internal.bindings.content.mojom.FrameBindingsControl_AllowBindings_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameBindingsControl_BindWebUI_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.NavigationRendererCancellationListener = {};
mojo.internal.bindings.content.mojom.NavigationRendererCancellationListener.$interfaceName = 'content.mojom.NavigationRendererCancellationListener';
mojo.internal.bindings.content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost = {};
mojo.internal.bindings.content.mojom.FrameHost.$interfaceName = 'content.mojom.FrameHost';
mojo.internal.bindings.content.mojom.FrameHost_CreateNewWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_CreateChildFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_BeginNavigation_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_ResourceLoadComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_DidChangeName_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_UpdateEncoding_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_UpdateState_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_OpenURL_ParamsSpec = { $: {} };
mojo.internal.bindings.content.mojom.FrameHost_DidStopLoading_ParamsSpec = { $: {} };

// Enum: ViewWidgetType
mojo.internal.bindings.content.mojom.ViewWidgetType = {
  kTopLevel: 0,
  kGuestView: 1,
  kFencedFrame: 2,
};

// Enum: ChildFrameOwnerElementType
mojo.internal.bindings.content.mojom.ChildFrameOwnerElementType = {
  kIframe: 0,
  kObject: 1,
  kEmbed: 2,
  kFrame: 3,
};

// Enum: FrameDeleteIntention
mojo.internal.bindings.content.mojom.FrameDeleteIntention = {
  kNotMainFrame: 0,
  kSpeculativeMainFrameForShutdown: 1,
  kSpeculativeMainFrameForNavigationCancelled: 2,
};

// Enum: CreateNewWindowStatus
mojo.internal.bindings.content.mojom.CreateNewWindowStatus = {
  kBlocked: 0,
  kIgnore: 1,
  kReuse: 2,
  kSuccess: 3,
};

// Union: CreateMainFrameUnion
mojo.internal.Union(
    mojo.internal.bindings.content.mojom.CreateMainFrameUnionSpec, 'content.mojom.CreateMainFrameUnion', {
      'arg_local_params': {
        'ordinal': 0,
        'type': mojo.internal.bindings.content.mojom.CreateLocalMainFrameParamsSpec.$,
        'nullable': false,
      },
      'arg_provisional_local_params': {
        'ordinal': 1,
        'type': mojo.internal.bindings.content.mojom.CreateProvisionalLocalMainFrameParamsSpec.$,
        'nullable': false,
      },
      'arg_remote_params': {
        'ordinal': 2,
        'type': mojo.internal.bindings.content.mojom.CreateRemoteMainFrameParamsSpec.$,
        'nullable': false,
      },
    });

// Struct: CreateViewParams
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.CreateViewParamsSpec, 'content.mojom.CreateViewParams', [
      mojo.internal.StructField('arg_renderer_preferences', 0, 0, mojo.internal.bindings.blink.mojom.RendererPreferencesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_web_preferences', 8, 0, mojo.internal.bindings.blink.mojom.WebPreferencesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_storage_namespace_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_opener_frame_token', 24, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_replication_state', 32, 0, mojo.internal.bindings.blink.mojom.FrameReplicationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_main_frame_token', 40, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_main_frame', 48, 0, mojo.internal.bindings.content.mojom.CreateMainFrameUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_prerender_param', 56, 0, mojo.internal.bindings.blink.mojom.PrerenderParamSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 64, 0, mojo.internal.bindings.content.mojom.ViewWidgetTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_fenced_frame_mode', 72, 0, mojo.internal.bindings.blink.mojom.DeprecatedFencedFrameModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_outermost_origin', 80, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_blink_page_broadcast', 88, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.PageBroadcastRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_base_background_color', 96, 0, mojo.internal.bindings.skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_color_provider_colors', 104, 0, mojo.internal.bindings.blink.mojom.ColorProviderColorMapsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_browsing_context_group_token', 112, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_attribution_support', 120, 0, mojo.internal.bindings.network.mojom.AttributionSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_navigation_metrics_token', 128, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_history_index', 136, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('arg_history_length', 140, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_hidden', 144, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_never_composited', 144, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_window_was_opened_by_another_window', 144, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 160]]);

// Struct: CreateLocalMainFrameParams
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.CreateLocalMainFrameParamsSpec, 'content.mojom.CreateLocalMainFrameParams', [
      mojo.internal.StructField('arg_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame', 8, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.content.mojom.FrameRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_interface_broker', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_associated_interface_provider_remote', 24, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.AssociatedInterfaceProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_document_token', 32, 0, mojo.internal.bindings.blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_container', 40, 0, mojo.internal.bindings.blink.mojom.PolicyContainerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_widget_params', 48, 0, mojo.internal.bindings.content.mojom.CreateFrameWidgetParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_subresource_loader_factories', 56, 0, mojo.internal.bindings.blink.mojom.URLLoaderFactoryBundleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_routing_id', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_on_initial_empty_document', 68, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: CreateProvisionalLocalMainFrameParams
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.CreateProvisionalLocalMainFrameParamsSpec, 'content.mojom.CreateProvisionalLocalMainFrameParams', [
      mojo.internal.StructField('arg_local_params', 0, 0, mojo.internal.bindings.content.mojom.CreateLocalMainFrameParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_previous_frame_token', 8, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CreateRemoteMainFrameParams
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.CreateRemoteMainFrameParamsSpec, 'content.mojom.CreateRemoteMainFrameParams', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.bindings.blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_interfaces', 8, 0, mojo.internal.bindings.blink.mojom.RemoteFrameInterfacesFromBrowserSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_main_frame_interfaces', 16, 0, mojo.internal.bindings.blink.mojom.RemoteMainFrameInterfacesSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CreateFrameWidgetParams
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.CreateFrameWidgetParamsSpec, 'content.mojom.CreateFrameWidgetParams', [
      mojo.internal.StructField('arg_frame_widget_host', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.FrameWidgetHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_widget', 8, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.FrameWidgetRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_widget_host', 16, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.WidgetHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_widget', 24, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.WidgetRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_visual_properties', 32, 0, mojo.internal.bindings.blink.mojom.VisualPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_routing_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: CreateFrameParams
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.CreateFrameParamsSpec, 'content.mojom.CreateFrameParams', [
      mojo.internal.StructField('arg_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_previous_frame_token', 8, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_opener_frame_token', 16, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_parent_frame_token', 24, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_previous_sibling_frame_token', 32, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_interface_broker', 40, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_tree_scope_type', 48, 0, mojo.internal.bindings.blink.mojom.TreeScopeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_replication_state', 56, 0, mojo.internal.bindings.blink.mojom.FrameReplicationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_frame_token', 64, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_owner_properties', 72, 0, mojo.internal.bindings.blink.mojom.FrameOwnerPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_widget_params', 80, 0, mojo.internal.bindings.content.mojom.CreateFrameWidgetParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_document_token', 88, 0, mojo.internal.bindings.blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_container', 96, 0, mojo.internal.bindings.blink.mojom.PolicyContainerSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_frame', 104, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.content.mojom.FrameRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_associated_interface_provider_remote', 112, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.AssociatedInterfaceProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_navigation_metrics_token', 120, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_routing_id', 128, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_on_initial_empty_document', 132, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_is_for_nested_main_frame', 132, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 144]]);

// Struct: SnapshotAccessibilityTreeParams
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.SnapshotAccessibilityTreeParamsSpec, 'content.mojom.SnapshotAccessibilityTreeParams', [
      mojo.internal.StructField('arg_max_nodes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_timeout', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ax_mode', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CreateNewWindowParams
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.CreateNewWindowParamsSpec, 'content.mojom.CreateNewWindowParams', [
      mojo.internal.StructField('arg_window_container_type', 0, 0, mojo.internal.bindings.content.mojom.WindowContainerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_storage_namespace_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_clone_from_session_storage_namespace_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_form_submission_post_data', 32, 0, mojo.internal.bindings.network.mojom.URLRequestBodySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_form_submission_post_content_type', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_disposition', 48, 0, mojo.internal.bindings.ui.mojom.WindowOpenDispositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_url', 56, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_referrer', 64, 0, mojo.internal.bindings.blink.mojom.ReferrerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_features', 72, 0, mojo.internal.bindings.blink.mojom.WindowFeaturesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_impression', 80, 0, mojo.internal.bindings.blink.mojom.ImpressionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_download_policy', 88, 0, mojo.internal.bindings.blink.mojom.NavigationDownloadPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pip_options', 96, 0, mojo.internal.bindings.blink.mojom.PictureInPictureWindowOptionsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_initiator_activation_and_ad_status', 104, 0, mojo.internal.bindings.blink.mojom.NavigationInitiatorActivationAndAdStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_remote', 112, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.content.mojom.FrameRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_page_broadcast_remote', 120, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.PageBroadcastRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_main_frame_interface_broker', 128, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_associated_interface_provider', 136, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.AssociatedInterfaceProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_widget_host', 144, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.WidgetHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_widget', 152, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.WidgetRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_widget_host', 160, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.FrameWidgetHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_widget', 168, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.FrameWidgetRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_allow_popup', 176, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_opener_suppressed', 176, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_form_submission', 176, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_consumes_user_activation', 176, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 192]]);

// Struct: CreateNewWindowReply
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.CreateNewWindowReplySpec, 'content.mojom.CreateNewWindowReply', [
      mojo.internal.StructField('arg_main_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_visual_properties', 8, 0, mojo.internal.bindings.blink.mojom.VisualPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cloned_session_storage_namespace_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_main_frame_token', 24, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_token', 32, 0, mojo.internal.bindings.blink.mojom.DocumentTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_container', 40, 0, mojo.internal.bindings.blink.mojom.PolicyContainerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_browsing_context_group_token', 48, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color_provider_colors', 56, 0, mojo.internal.bindings.blink.mojom.ColorProviderColorMapsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_widget_screen_rect', 64, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_window_screen_rect', 72, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_main_frame_route_id', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_widget_routing_id', 84, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_wait_for_debugger', 88, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 104]]);

// Interface: FrameHTMLSerializerHandler
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec, 'content.mojom.FrameHTMLSerializerHandler_DidReceiveData_Params', [
      mojo.internal.StructField('arg_data_buffer', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec, 'content.mojom.FrameHTMLSerializerHandler_Done_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FrameHTMLSerializerHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didReceiveData(arg_data_buffer) {
    return this.$.didReceiveData(arg_data_buffer);
  }
  done() {
    return this.$.done();
  }
};

mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameHTMLSerializerHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  didReceiveData(arg_data_buffer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec,
      null,
      [arg_data_buffer],
      false);
  }

  done() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FrameHTMLSerializerHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameHTMLSerializerHandler', [
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
        
        // Try Method 0: DidReceiveData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidReceiveData (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Done
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Done (1)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandler_DidReceiveData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didReceiveData');
          const result = this.impl.didReceiveData(params.arg_data_buffer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandler_Done_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.done');
          const result = this.impl.done();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerReceiver = mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerReceiver;

mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerPtr = mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerRemote;
mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerRequest = mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerPendingReceiver;


// Interface: Frame
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec, 'content.mojom.Frame_CommitSameDocumentNavigation_Params', [
      mojo.internal.StructField('arg_common_params', 0, 0, mojo.internal.bindings.blink.mojom.CommonNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_params', 8, 0, mojo.internal.bindings.blink.mojom.CommitNavigationParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec, 'content.mojom.Frame_CommitSameDocumentNavigation_ResponseParams', [
      mojo.internal.StructField('arg_commit_result', 0, 0, mojo.internal.bindings.blink.mojom.CommitResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec, 'content.mojom.Frame_UpdateSubresourceLoaderFactories_Params', [
      mojo.internal.StructField('arg_subresource_loader_factories', 0, 0, mojo.internal.bindings.blink.mojom.URLLoaderFactoryBundleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec, 'content.mojom.Frame_SetWantErrorMessageStackTrace_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.Frame_Unload_ParamsSpec, 'content.mojom.Frame_Unload_Params', [
      mojo.internal.StructField('arg_new_remote_frame_replication_state', 0, 0, mojo.internal.bindings.blink.mojom.FrameReplicationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_remote_frame_token', 8, 0, mojo.internal.bindings.blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_remote_frame_interfaces', 16, 0, mojo.internal.bindings.blink.mojom.RemoteFrameInterfacesFromBrowserSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_remote_main_frame_interfaces', 24, 0, mojo.internal.bindings.blink.mojom.RemoteMainFrameInterfacesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_frame_token', 32, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_loading', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.Frame_Delete_ParamsSpec, 'content.mojom.Frame_Delete_Params', [
      mojo.internal.StructField('arg_intention', 0, 0, mojo.internal.bindings.content.mojom.FrameDeleteIntentionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.Frame_UndoCommitNavigation_ParamsSpec, 'content.mojom.Frame_UndoCommitNavigation_Params', [
      mojo.internal.StructField('arg_new_remote_frame_replication_state', 0, 0, mojo.internal.bindings.blink.mojom.FrameReplicationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_remote_frame_token', 8, 0, mojo.internal.bindings.blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_remote_frame_interfaces', 16, 0, mojo.internal.bindings.blink.mojom.RemoteFrameInterfacesFromBrowserSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_remote_main_frame_interfaces', 24, 0, mojo.internal.bindings.blink.mojom.RemoteMainFrameInterfacesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_loading', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.Frame_GetInterfaceProvider_ParamsSpec, 'content.mojom.Frame_GetInterfaceProvider_Params', [
      mojo.internal.StructField('arg_interfaces', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.service_manager.mojom.InterfaceProviderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec, 'content.mojom.Frame_SnapshotAccessibilityTree_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.content.mojom.SnapshotAccessibilityTreeParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec, 'content.mojom.Frame_SnapshotAccessibilityTree_ResponseParams', [
      mojo.internal.StructField('arg_snapshot', 0, 0, mojo.internal.bindings.ax.mojom.AXTreeUpdateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec, 'content.mojom.Frame_GetSerializedHtmlWithLocalLinks_Params', [
      mojo.internal.StructField('arg_url_map', 0, 0, mojo.internal.Map(mojo.internal.bindings.url.mojom.UrlSpec.$, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_token_map', 8, 0, mojo.internal.Map(mojo.internal.bindings.blink.mojom.FrameTokenSpec.$, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_handler_remote', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.content.mojom.FrameHTMLSerializerHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_save_with_empty_url', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.bindings.content.mojom.FramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.content.mojom.FrameRemote = class {
  static get $interfaceName() {
    return 'content.mojom.Frame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.content.mojom.FramePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.content.mojom.FrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  commitSameDocumentNavigation(arg_common_params, arg_request_params) {
    return this.$.commitSameDocumentNavigation(arg_common_params, arg_request_params);
  }
  updateSubresourceLoaderFactories(arg_subresource_loader_factories) {
    return this.$.updateSubresourceLoaderFactories(arg_subresource_loader_factories);
  }
  setWantErrorMessageStackTrace() {
    return this.$.setWantErrorMessageStackTrace();
  }
  unload(arg_is_loading, arg_new_remote_frame_replication_state, arg_new_remote_frame_token, arg_new_remote_frame_interfaces, arg_new_remote_main_frame_interfaces, arg_devtools_frame_token) {
    return this.$.unload(arg_is_loading, arg_new_remote_frame_replication_state, arg_new_remote_frame_token, arg_new_remote_frame_interfaces, arg_new_remote_main_frame_interfaces, arg_devtools_frame_token);
  }
  delete(arg_intention) {
    return this.$.delete(arg_intention);
  }
  undoCommitNavigation(arg_is_loading, arg_new_remote_frame_replication_state, arg_new_remote_frame_token, arg_new_remote_frame_interfaces, arg_new_remote_main_frame_interfaces) {
    return this.$.undoCommitNavigation(arg_is_loading, arg_new_remote_frame_replication_state, arg_new_remote_frame_token, arg_new_remote_frame_interfaces, arg_new_remote_main_frame_interfaces);
  }
  getInterfaceProvider(arg_interfaces) {
    return this.$.getInterfaceProvider(arg_interfaces);
  }
  snapshotAccessibilityTree(arg_params) {
    return this.$.snapshotAccessibilityTree(arg_params);
  }
  getSerializedHtmlWithLocalLinks(arg_url_map, arg_frame_token_map, arg_save_with_empty_url, arg_handler_remote) {
    return this.$.getSerializedHtmlWithLocalLinks(arg_url_map, arg_frame_token_map, arg_save_with_empty_url, arg_handler_remote);
  }
};

mojo.internal.bindings.content.mojom.FrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Frame', [
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

  commitSameDocumentNavigation(arg_common_params, arg_request_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.content.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec,
      mojo.internal.bindings.content.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec,
      [arg_common_params, arg_request_params],
      false);
  }

  updateSubresourceLoaderFactories(arg_subresource_loader_factories) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.content.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec,
      null,
      [arg_subresource_loader_factories],
      false);
  }

  setWantErrorMessageStackTrace() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.content.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec,
      null,
      [],
      false);
  }

  unload(arg_is_loading, arg_new_remote_frame_replication_state, arg_new_remote_frame_token, arg_new_remote_frame_interfaces, arg_new_remote_main_frame_interfaces, arg_devtools_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.content.mojom.Frame_Unload_ParamsSpec,
      null,
      [arg_is_loading, arg_new_remote_frame_replication_state, arg_new_remote_frame_token, arg_new_remote_frame_interfaces, arg_new_remote_main_frame_interfaces, arg_devtools_frame_token],
      false);
  }

  delete(arg_intention) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.content.mojom.Frame_Delete_ParamsSpec,
      null,
      [arg_intention],
      false);
  }

  undoCommitNavigation(arg_is_loading, arg_new_remote_frame_replication_state, arg_new_remote_frame_token, arg_new_remote_frame_interfaces, arg_new_remote_main_frame_interfaces) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.content.mojom.Frame_UndoCommitNavigation_ParamsSpec,
      null,
      [arg_is_loading, arg_new_remote_frame_replication_state, arg_new_remote_frame_token, arg_new_remote_frame_interfaces, arg_new_remote_main_frame_interfaces],
      false);
  }

  getInterfaceProvider(arg_interfaces) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.content.mojom.Frame_GetInterfaceProvider_ParamsSpec,
      null,
      [arg_interfaces],
      false);
  }

  snapshotAccessibilityTree(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.content.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec,
      mojo.internal.bindings.content.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec,
      [arg_params],
      false);
  }

  getSerializedHtmlWithLocalLinks(arg_url_map, arg_frame_token_map, arg_save_with_empty_url, arg_handler_remote) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.content.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec,
      null,
      [arg_url_map, arg_frame_token_map, arg_save_with_empty_url, arg_handler_remote],
      false);
  }

};

mojo.internal.bindings.content.mojom.Frame.getRemote = function() {
  let remote = new mojo.internal.bindings.content.mojom.FrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.Frame',
    'context');
  return remote.$;
};

mojo.internal.bindings.content.mojom.FrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Frame', [
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
        
        // Try Method 0: CommitSameDocumentNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CommitSameDocumentNavigation (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateSubresourceLoaderFactories
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateSubresourceLoaderFactories (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetWantErrorMessageStackTrace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWantErrorMessageStackTrace (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: Unload
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_Unload_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Unload (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Delete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_Delete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Delete (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UndoCommitNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_UndoCommitNavigation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UndoCommitNavigation (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetInterfaceProvider
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_GetInterfaceProvider_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInterfaceProvider (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SnapshotAccessibilityTree
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SnapshotAccessibilityTree (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetSerializedHtmlWithLocalLinks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSerializedHtmlWithLocalLinks (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_CommitSameDocumentNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.commitSameDocumentNavigation');
          const result = this.impl.commitSameDocumentNavigation(params.arg_common_params, params.arg_request_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.Frame_CommitSameDocumentNavigation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CommitSameDocumentNavigation FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_UpdateSubresourceLoaderFactories_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateSubresourceLoaderFactories');
          const result = this.impl.updateSubresourceLoaderFactories(params.arg_subresource_loader_factories);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_SetWantErrorMessageStackTrace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWantErrorMessageStackTrace');
          const result = this.impl.setWantErrorMessageStackTrace();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_Unload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unload');
          const result = this.impl.unload(params.arg_is_loading, params.arg_new_remote_frame_replication_state, params.arg_new_remote_frame_token, params.arg_new_remote_frame_interfaces, params.arg_new_remote_main_frame_interfaces, params.arg_devtools_frame_token);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_Delete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.delete');
          const result = this.impl.delete(params.arg_intention);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_UndoCommitNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undoCommitNavigation');
          const result = this.impl.undoCommitNavigation(params.arg_is_loading, params.arg_new_remote_frame_replication_state, params.arg_new_remote_frame_token, params.arg_new_remote_frame_interfaces, params.arg_new_remote_main_frame_interfaces);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_GetInterfaceProvider_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getInterfaceProvider');
          const result = this.impl.getInterfaceProvider(params.arg_interfaces);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_SnapshotAccessibilityTree_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.snapshotAccessibilityTree');
          const result = this.impl.snapshotAccessibilityTree(params.arg_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.Frame_SnapshotAccessibilityTree_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SnapshotAccessibilityTree FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.Frame_GetSerializedHtmlWithLocalLinks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSerializedHtmlWithLocalLinks');
          const result = this.impl.getSerializedHtmlWithLocalLinks(params.arg_url_map, params.arg_frame_token_map, params.arg_save_with_empty_url, params.arg_handler_remote);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.content.mojom.FrameReceiver = mojo.internal.bindings.content.mojom.FrameReceiver;

mojo.internal.bindings.content.mojom.FramePtr = mojo.internal.bindings.content.mojom.FrameRemote;
mojo.internal.bindings.content.mojom.FrameRequest = mojo.internal.bindings.content.mojom.FramePendingReceiver;


// Interface: FrameBindingsControl
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameBindingsControl_AllowBindings_ParamsSpec, 'content.mojom.FrameBindingsControl_AllowBindings_Params', [
      mojo.internal.StructField('arg_enabled_bindings_flags', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec, 'content.mojom.FrameBindingsControl_EnableMojoJsBindings_Params', [
      mojo.internal.StructField('arg_features', 0, 0, mojo.internal.bindings.content.mojom.ExtraMojoJsFeaturesSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec, 'content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_Params', [
      mojo.internal.StructField('arg_broker', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameBindingsControl_BindWebUI_ParamsSpec, 'content.mojom.FrameBindingsControl_BindWebUI_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.content.mojom.WebUIRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_remote', 8, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.content.mojom.WebUIHostRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.content.mojom.FrameBindingsControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.content.mojom.FrameBindingsControlRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FrameBindingsControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.content.mojom.FrameBindingsControlPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.content.mojom.FrameBindingsControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  allowBindings(arg_enabled_bindings_flags) {
    return this.$.allowBindings(arg_enabled_bindings_flags);
  }
  enableMojoJsBindings(arg_features) {
    return this.$.enableMojoJsBindings(arg_features);
  }
  enableMojoJsBindingsWithBroker(arg_broker) {
    return this.$.enableMojoJsBindingsWithBroker(arg_broker);
  }
  bindWebUI(arg_receiver, arg_remote) {
    return this.$.bindWebUI(arg_receiver, arg_remote);
  }
};

mojo.internal.bindings.content.mojom.FrameBindingsControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameBindingsControl', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  allowBindings(arg_enabled_bindings_flags) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.content.mojom.FrameBindingsControl_AllowBindings_ParamsSpec,
      null,
      [arg_enabled_bindings_flags],
      false);
  }

  enableMojoJsBindings(arg_features) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.content.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec,
      null,
      [arg_features],
      false);
  }

  enableMojoJsBindingsWithBroker(arg_broker) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec,
      null,
      [arg_broker],
      false);
  }

  bindWebUI(arg_receiver, arg_remote) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.content.mojom.FrameBindingsControl_BindWebUI_ParamsSpec,
      null,
      [arg_receiver, arg_remote],
      false);
  }

};

mojo.internal.bindings.content.mojom.FrameBindingsControl.getRemote = function() {
  let remote = new mojo.internal.bindings.content.mojom.FrameBindingsControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FrameBindingsControl',
    'context');
  return remote.$;
};

mojo.internal.bindings.content.mojom.FrameBindingsControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameBindingsControl', [
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
        
        // Try Method 0: AllowBindings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameBindingsControl_AllowBindings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllowBindings (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EnableMojoJsBindings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableMojoJsBindings (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: EnableMojoJsBindingsWithBroker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableMojoJsBindingsWithBroker (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: BindWebUI
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameBindingsControl_BindWebUI_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindWebUI (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameBindingsControl_AllowBindings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.allowBindings');
          const result = this.impl.allowBindings(params.arg_enabled_bindings_flags);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameBindingsControl_EnableMojoJsBindings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableMojoJsBindings');
          const result = this.impl.enableMojoJsBindings(params.arg_features);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameBindingsControl_EnableMojoJsBindingsWithBroker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableMojoJsBindingsWithBroker');
          const result = this.impl.enableMojoJsBindingsWithBroker(params.arg_broker);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameBindingsControl_BindWebUI_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindWebUI');
          const result = this.impl.bindWebUI(params.arg_receiver, params.arg_remote);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.content.mojom.FrameBindingsControlReceiver = mojo.internal.bindings.content.mojom.FrameBindingsControlReceiver;

mojo.internal.bindings.content.mojom.FrameBindingsControlPtr = mojo.internal.bindings.content.mojom.FrameBindingsControlRemote;
mojo.internal.bindings.content.mojom.FrameBindingsControlRequest = mojo.internal.bindings.content.mojom.FrameBindingsControlPendingReceiver;


// Interface: NavigationRendererCancellationListener
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec, 'content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerRemote = class {
  static get $interfaceName() {
    return 'content.mojom.NavigationRendererCancellationListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  rendererCancellationWindowEnded() {
    return this.$.rendererCancellationWindowEnded();
  }
};

mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NavigationRendererCancellationListener', [
      { explicit: null },
    ]);
  }

  rendererCancellationWindowEnded() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.content.mojom.NavigationRendererCancellationListener.getRemote = function() {
  let remote = new mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.NavigationRendererCancellationListener',
    'context');
  return remote.$;
};

mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NavigationRendererCancellationListener', [
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
        
        // Try Method 0: RendererCancellationWindowEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RendererCancellationWindowEnded (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.NavigationRendererCancellationListener_RendererCancellationWindowEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rendererCancellationWindowEnded');
          const result = this.impl.rendererCancellationWindowEnded();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerReceiver = mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerReceiver;

mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerPtr = mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerRemote;
mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerRequest = mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerPendingReceiver;


// Interface: FrameHost
mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_CreateNewWindow_ParamsSpec, 'content.mojom.FrameHost_CreateNewWindow_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.content.mojom.CreateNewWindowParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec, 'content.mojom.FrameHost_CreateNewWindow_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.content.mojom.CreateNewWindowStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reply', 8, 0, mojo.internal.bindings.content.mojom.CreateNewWindowReplySpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_CreateChildFrame_ParamsSpec, 'content.mojom.FrameHost_CreateChildFrame_Params', [
      mojo.internal.StructField('arg_child_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame', 8, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.content.mojom.FrameRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_browser_interface_broker', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.BrowserInterfaceBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_container_bind_params', 24, 0, mojo.internal.bindings.blink.mojom.PolicyContainerBindParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_associated_interface_provider', 32, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.AssociatedInterfaceProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_scope', 40, 0, mojo.internal.bindings.blink.mojom.TreeScopeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_name', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_unique_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_policy', 64, 0, mojo.internal.bindings.blink.mojom.FramePolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_owner_properties', 72, 0, mojo.internal.bindings.blink.mojom.FrameOwnerPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_child_frame_owner_element_type', 80, 0, mojo.internal.bindings.content.mojom.ChildFrameOwnerElementTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_document_ukm_source_id', 88, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_created_by_script', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 112]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec, 'content.mojom.FrameHost_DidCommitProvisionalLoad_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.content.mojom.DidCommitProvisionalLoadParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_interface_params', 8, 0, mojo.internal.bindings.content.mojom.DidCommitProvisionalLoadInterfaceParamsSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec, 'content.mojom.FrameHost_DidCommitSameDocumentNavigation_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.content.mojom.DidCommitProvisionalLoadParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_same_document_params', 8, 0, mojo.internal.bindings.content.mojom.DidCommitSameDocumentNavigationParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec, 'content.mojom.FrameHost_DidOpenDocumentInputStream_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_BeginNavigation_ParamsSpec, 'content.mojom.FrameHost_BeginNavigation_Params', [
      mojo.internal.StructField('arg_common_params', 0, 0, mojo.internal.bindings.blink.mojom.CommonNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_begin_params', 8, 0, mojo.internal.bindings.blink.mojom.BeginNavigationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_blob_url_token', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.BlobURLTokenRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_navigation_client', 24, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.content.mojom.NavigationClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_initiator_navigation_state_keep_alive_handle', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.NavigationStateKeepAliveHandleRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_renderer_cancellation_listener', 40, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.content.mojom.NavigationRendererCancellationListenerSpec), null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec, 'content.mojom.FrameHost_SubresourceResponseStarted_Params', [
      mojo.internal.StructField('arg_final_response_url', 0, 0, mojo.internal.bindings.url.mojom.SchemeHostPortSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_cert_status', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_ResourceLoadComplete_ParamsSpec, 'content.mojom.FrameHost_ResourceLoadComplete_Params', [
      mojo.internal.StructField('arg_url_load_info', 0, 0, mojo.internal.bindings.blink.mojom.ResourceLoadInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_DidChangeName_ParamsSpec, 'content.mojom.FrameHost_DidChangeName_Params', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_unique_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec, 'content.mojom.FrameHost_CancelInitialHistoryLoad_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_UpdateEncoding_ParamsSpec, 'content.mojom.FrameHost_UpdateEncoding_Params', [
      mojo.internal.StructField('arg_encoding_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec, 'content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_UpdateState_ParamsSpec, 'content.mojom.FrameHost_UpdateState_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.blink.mojom.PageStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_OpenURL_ParamsSpec, 'content.mojom.FrameHost_OpenURL_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.blink.mojom.OpenURLParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.content.mojom.FrameHost_DidStopLoading_ParamsSpec, 'content.mojom.FrameHost_DidStopLoading_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.content.mojom.FrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.content.mojom.FrameHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.content.mojom.FrameHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.content.mojom.FrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createNewWindow(arg_params) {
    return this.$.createNewWindow(arg_params);
  }
  createChildFrame(arg_child_frame_token, arg_frame, arg_browser_interface_broker, arg_policy_container_bind_params, arg_associated_interface_provider, arg_scope, arg_frame_name, arg_frame_unique_name, arg_is_created_by_script, arg_frame_policy, arg_frame_owner_properties, arg_child_frame_owner_element_type, arg_document_ukm_source_id) {
    return this.$.createChildFrame(arg_child_frame_token, arg_frame, arg_browser_interface_broker, arg_policy_container_bind_params, arg_associated_interface_provider, arg_scope, arg_frame_name, arg_frame_unique_name, arg_is_created_by_script, arg_frame_policy, arg_frame_owner_properties, arg_child_frame_owner_element_type, arg_document_ukm_source_id);
  }
  didCommitProvisionalLoad(arg_params, arg_interface_params) {
    return this.$.didCommitProvisionalLoad(arg_params, arg_interface_params);
  }
  didCommitSameDocumentNavigation(arg_params, arg_same_document_params) {
    return this.$.didCommitSameDocumentNavigation(arg_params, arg_same_document_params);
  }
  didOpenDocumentInputStream(arg_url) {
    return this.$.didOpenDocumentInputStream(arg_url);
  }
  beginNavigation(arg_common_params, arg_begin_params, arg_blob_url_token, arg_navigation_client, arg_initiator_navigation_state_keep_alive_handle, arg_renderer_cancellation_listener) {
    return this.$.beginNavigation(arg_common_params, arg_begin_params, arg_blob_url_token, arg_navigation_client, arg_initiator_navigation_state_keep_alive_handle, arg_renderer_cancellation_listener);
  }
  subresourceResponseStarted(arg_final_response_url, arg_cert_status) {
    return this.$.subresourceResponseStarted(arg_final_response_url, arg_cert_status);
  }
  resourceLoadComplete(arg_url_load_info) {
    return this.$.resourceLoadComplete(arg_url_load_info);
  }
  didChangeName(arg_name, arg_unique_name) {
    return this.$.didChangeName(arg_name, arg_unique_name);
  }
  cancelInitialHistoryLoad() {
    return this.$.cancelInitialHistoryLoad();
  }
  updateEncoding(arg_encoding_name) {
    return this.$.updateEncoding(arg_encoding_name);
  }
  updateUserGestureCarryoverInfo() {
    return this.$.updateUserGestureCarryoverInfo();
  }
  updateState(arg_state) {
    return this.$.updateState(arg_state);
  }
  openURL(arg_params) {
    return this.$.openURL(arg_params);
  }
  didStopLoading() {
    return this.$.didStopLoading();
  }
};

mojo.internal.bindings.content.mojom.FrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameHost', [
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

  createNewWindow(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_CreateNewWindow_ParamsSpec,
      mojo.internal.bindings.content.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec,
      [arg_params],
      false);
  }

  createChildFrame(arg_child_frame_token, arg_frame, arg_browser_interface_broker, arg_policy_container_bind_params, arg_associated_interface_provider, arg_scope, arg_frame_name, arg_frame_unique_name, arg_is_created_by_script, arg_frame_policy, arg_frame_owner_properties, arg_child_frame_owner_element_type, arg_document_ukm_source_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_CreateChildFrame_ParamsSpec,
      null,
      [arg_child_frame_token, arg_frame, arg_browser_interface_broker, arg_policy_container_bind_params, arg_associated_interface_provider, arg_scope, arg_frame_name, arg_frame_unique_name, arg_is_created_by_script, arg_frame_policy, arg_frame_owner_properties, arg_child_frame_owner_element_type, arg_document_ukm_source_id],
      false);
  }

  didCommitProvisionalLoad(arg_params, arg_interface_params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec,
      null,
      [arg_params, arg_interface_params],
      false);
  }

  didCommitSameDocumentNavigation(arg_params, arg_same_document_params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec,
      null,
      [arg_params, arg_same_document_params],
      false);
  }

  didOpenDocumentInputStream(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  beginNavigation(arg_common_params, arg_begin_params, arg_blob_url_token, arg_navigation_client, arg_initiator_navigation_state_keep_alive_handle, arg_renderer_cancellation_listener) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_BeginNavigation_ParamsSpec,
      null,
      [arg_common_params, arg_begin_params, arg_blob_url_token, arg_navigation_client, arg_initiator_navigation_state_keep_alive_handle, arg_renderer_cancellation_listener],
      false);
  }

  subresourceResponseStarted(arg_final_response_url, arg_cert_status) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec,
      null,
      [arg_final_response_url, arg_cert_status],
      false);
  }

  resourceLoadComplete(arg_url_load_info) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_ResourceLoadComplete_ParamsSpec,
      null,
      [arg_url_load_info],
      false);
  }

  didChangeName(arg_name, arg_unique_name) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_DidChangeName_ParamsSpec,
      null,
      [arg_name, arg_unique_name],
      false);
  }

  cancelInitialHistoryLoad() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec,
      null,
      [],
      false);
  }

  updateEncoding(arg_encoding_name) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_UpdateEncoding_ParamsSpec,
      null,
      [arg_encoding_name],
      false);
  }

  updateUserGestureCarryoverInfo() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec,
      null,
      [],
      false);
  }

  updateState(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_UpdateState_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  openURL(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_OpenURL_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  didStopLoading() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.content.mojom.FrameHost_DidStopLoading_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.content.mojom.FrameHost.getRemote = function() {
  let remote = new mojo.internal.bindings.content.mojom.FrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FrameHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.content.mojom.FrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameHost', [
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
        
        // Try Method 0: CreateNewWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_CreateNewWindow_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNewWindow (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateChildFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_CreateChildFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateChildFrame (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DidCommitProvisionalLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCommitProvisionalLoad (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DidCommitSameDocumentNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCommitSameDocumentNavigation (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DidOpenDocumentInputStream
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidOpenDocumentInputStream (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: BeginNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_BeginNavigation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginNavigation (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SubresourceResponseStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubresourceResponseStarted (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ResourceLoadComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_ResourceLoadComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResourceLoadComplete (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DidChangeName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_DidChangeName_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeName (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: CancelInitialHistoryLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelInitialHistoryLoad (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: UpdateEncoding
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_UpdateEncoding_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateEncoding (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: UpdateUserGestureCarryoverInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUserGestureCarryoverInfo (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: UpdateState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_UpdateState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateState (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: OpenURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_OpenURL_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenURL (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: DidStopLoading
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_DidStopLoading_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidStopLoading (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_CreateNewWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createNewWindow');
          const result = this.impl.createNewWindow(params.arg_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.content.mojom.FrameHost_CreateNewWindow_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateNewWindow FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_CreateChildFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createChildFrame');
          const result = this.impl.createChildFrame(params.arg_child_frame_token, params.arg_frame, params.arg_browser_interface_broker, params.arg_policy_container_bind_params, params.arg_associated_interface_provider, params.arg_scope, params.arg_frame_name, params.arg_frame_unique_name, params.arg_is_created_by_script, params.arg_frame_policy, params.arg_frame_owner_properties, params.arg_child_frame_owner_element_type, params.arg_document_ukm_source_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_DidCommitProvisionalLoad_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didCommitProvisionalLoad');
          const result = this.impl.didCommitProvisionalLoad(params.arg_params, params.arg_interface_params);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_DidCommitSameDocumentNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didCommitSameDocumentNavigation');
          const result = this.impl.didCommitSameDocumentNavigation(params.arg_params, params.arg_same_document_params);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_DidOpenDocumentInputStream_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didOpenDocumentInputStream');
          const result = this.impl.didOpenDocumentInputStream(params.arg_url);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_BeginNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.beginNavigation');
          const result = this.impl.beginNavigation(params.arg_common_params, params.arg_begin_params, params.arg_blob_url_token, params.arg_navigation_client, params.arg_initiator_navigation_state_keep_alive_handle, params.arg_renderer_cancellation_listener);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_SubresourceResponseStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subresourceResponseStarted');
          const result = this.impl.subresourceResponseStarted(params.arg_final_response_url, params.arg_cert_status);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_ResourceLoadComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resourceLoadComplete');
          const result = this.impl.resourceLoadComplete(params.arg_url_load_info);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_DidChangeName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeName');
          const result = this.impl.didChangeName(params.arg_name, params.arg_unique_name);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_CancelInitialHistoryLoad_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelInitialHistoryLoad');
          const result = this.impl.cancelInitialHistoryLoad();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_UpdateEncoding_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateEncoding');
          const result = this.impl.updateEncoding(params.arg_encoding_name);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_UpdateUserGestureCarryoverInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateUserGestureCarryoverInfo');
          const result = this.impl.updateUserGestureCarryoverInfo();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_UpdateState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateState');
          const result = this.impl.updateState(params.arg_state);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_OpenURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openURL');
          const result = this.impl.openURL(params.arg_params);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.content.mojom.FrameHost_DidStopLoading_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didStopLoading');
          const result = this.impl.didStopLoading();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.content.mojom.FrameHostReceiver = mojo.internal.bindings.content.mojom.FrameHostReceiver;

mojo.internal.bindings.content.mojom.FrameHostPtr = mojo.internal.bindings.content.mojom.FrameHostRemote;
mojo.internal.bindings.content.mojom.FrameHostRequest = mojo.internal.bindings.content.mojom.FrameHostPendingReceiver;

