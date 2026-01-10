// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/remote_frame.mojom
// Module: blink.mojom

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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var cc = cc || {};
var mojo_base = mojo_base || {};
var network = network || {};
var viz = viz || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};

blink.mojom.RemoteMainFrameInterfacesSpec = { $: {} };
blink.mojom.RemoteFrameInterfacesFromRendererSpec = { $: {} };
blink.mojom.RemoteFrameInterfacesFromBrowserSpec = { $: {} };
blink.mojom.CreateRemoteChildParamsSpec = { $: {} };
blink.mojom.OpenURLParamsSpec = { $: {} };
blink.mojom.NavigationStateKeepAliveHandle = {};
blink.mojom.NavigationStateKeepAliveHandle.$interfaceName = 'blink.mojom.NavigationStateKeepAliveHandle';
blink.mojom.RemoteFrameHost = {};
blink.mojom.RemoteFrameHost.$interfaceName = 'blink.mojom.RemoteFrameHost';
blink.mojom.RemoteFrameHost_SetInheritedEffectiveTouchAction_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_UpdateRenderThrottlingStatus_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_VisibilityChanged_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_DidFocusFrame_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_CheckCompleted_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_CapturePaintPreviewOfCrossProcessSubframe_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_SetIsInert_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_DidChangeOpener_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_AdvanceFocus_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_RouteMessageEvent_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_PrintCrossProcessSubframe_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_Detach_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_UpdateViewportIntersection_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_SynchronizeVisualProperties_ParamsSpec = { $: {} };
blink.mojom.RemoteFrameHost_OpenURL_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame = {};
blink.mojom.RemoteFrame.$interfaceName = 'blink.mojom.RemoteFrame';
blink.mojom.RemoteFrame_WillEnterFullscreen_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_EnforceInsecureNavigationsSet_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_SetFrameOwnerProperties_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_EnforceInsecureRequestPolicy_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_SetReplicatedOrigin_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_SetReplicatedIsAdFrame_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_SetReplicatedName_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_DispatchLoadEventForFrameOwner_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_SetNeedsOcclusionTracking_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_Collapse_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_Focus_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_SetHadStickyUserActivationBeforeNavigation_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_BubbleLogicalScroll_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_UpdateUserActivationState_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_SetEmbeddingToken_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_SetPageFocus_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_RenderFallbackContent_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_AddResourceTimingFromChild_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_ScrollRectToVisible_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_DidStartLoading_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_DidStopLoading_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_IntrinsicSizingInfoOfChildChanged_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_DidSetFramePolicyHeaders_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_DidUpdateFramePolicy_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_UpdateOpener_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_DetachAndDispose_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_EnableAutoResize_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_DisableAutoResize_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_DidUpdateVisualProperties_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_SetFrameSinkId_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_ChildProcessGone_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_CreateRemoteChild_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_CreateRemoteChildren_ParamsSpec = { $: {} };
blink.mojom.RemoteFrame_ForwardFencedFrameEventToEmbedder_ParamsSpec = { $: {} };
blink.mojom.RemoteMainFrame = {};
blink.mojom.RemoteMainFrame.$interfaceName = 'blink.mojom.RemoteMainFrame';
blink.mojom.RemoteMainFrame_UpdateTextAutosizerPageInfo_ParamsSpec = { $: {} };
blink.mojom.RemoteMainFrameHost = {};
blink.mojom.RemoteMainFrameHost.$interfaceName = 'blink.mojom.RemoteMainFrameHost';
blink.mojom.RemoteMainFrameHost_FocusPage_ParamsSpec = { $: {} };
blink.mojom.RemoteMainFrameHost_TakeFocus_ParamsSpec = { $: {} };
blink.mojom.RemoteMainFrameHost_UpdateTargetURL_ParamsSpec = { $: {} };
blink.mojom.RemoteMainFrameHost_UpdateTargetURL_ResponseParamsSpec = { $: {} };
blink.mojom.RemoteMainFrameHost_RouteCloseEvent_ParamsSpec = { $: {} };

// Struct: RemoteMainFrameInterfaces
mojo.internal.Struct(
    blink.mojom.RemoteMainFrameInterfacesSpec, 'blink.mojom.RemoteMainFrameInterfaces', [
      mojo.internal.StructField('main_frame_host', 0, 0, pending_associated_remote<blink.mojom.RemoteMainFrameHost>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('main_frame', 8, 0, pending_associated_receiver<blink.mojom.RemoteMainFrame>Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RemoteFrameInterfacesFromRenderer
mojo.internal.Struct(
    blink.mojom.RemoteFrameInterfacesFromRendererSpec, 'blink.mojom.RemoteFrameInterfacesFromRenderer', [
      mojo.internal.StructField('frame', 0, 0, pending_associated_remote<blink.mojom.RemoteFrame>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_host_receiver', 8, 0, pending_associated_receiver<blink.mojom.RemoteFrameHost>Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RemoteFrameInterfacesFromBrowser
mojo.internal.Struct(
    blink.mojom.RemoteFrameInterfacesFromBrowserSpec, 'blink.mojom.RemoteFrameInterfacesFromBrowser', [
      mojo.internal.StructField('frame_receiver', 0, 0, pending_associated_receiver<blink.mojom.RemoteFrame>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_host', 8, 0, pending_associated_remote<blink.mojom.RemoteFrameHost>Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CreateRemoteChildParams
mojo.internal.Struct(
    blink.mojom.CreateRemoteChildParamsSpec, 'blink.mojom.CreateRemoteChildParams', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('opener_frame_token', 8, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tree_scope_type', 16, 0, blink.mojom.TreeScopeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('replication_state', 24, 0, blink.mojom.FrameReplicationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('owner_properties', 32, 0, blink.mojom.FrameOwnerPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_frame_token', 40, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_interfaces', 48, 0, blink.mojom.RemoteFrameInterfacesFromBrowserSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('child_params', 56, 0, mojo.internal.Array(blink.mojom.CreateRemoteChildParamsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_loading', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: OpenURLParams
mojo.internal.Struct(
    blink.mojom.OpenURLParamsSpec, 'blink.mojom.OpenURLParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initiator_origin', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initiator_base_url', 16, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('actual_navigation_start', 24, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initiator_frame_token', 32, 0, blink.mojom.LocalFrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('post_body', 40, 0, network.mojom.URLRequestBodySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('extra_headers', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('referrer', 56, 0, blink.mojom.ReferrerSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('disposition', 64, 0, ui.mojom.WindowOpenDispositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('triggering_event_info', 72, 0, blink.mojom.TriggeringEventInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob_url_token', 80, 0, mojo.internal.InterfaceProxy(blink.mojom.BlobURLTokenRemote), null, true, 0, undefined),
      mojo.internal.StructField('href_translate', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('impression', 96, 0, blink.mojom.ImpressionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('download_policy', 104, 0, blink.mojom.NavigationDownloadPolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_location', 112, 0, network.mojom.SourceLocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initiator_navigation_state_keep_alive_handle', 120, 0, mojo.internal.InterfaceProxy(blink.mojom.NavigationStateKeepAliveHandleRemote), null, true, 0, undefined),
      mojo.internal.StructField('initiator_activation_and_ad_status', 128, 0, blink.mojom.NavigationInitiatorActivationAndAdStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('storage_access_api_status', 136, 0, network.mojom.StorageAccessApiStatusSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('is_form_submission', 144, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_replace_current_entry', 144, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 144, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_unfenced_top_navigation', 144, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_container_initiated', 144, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_rel_opener', 144, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 160]]);

// Interface: NavigationStateKeepAliveHandle
blink.mojom.NavigationStateKeepAliveHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.NavigationStateKeepAliveHandleRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.NavigationStateKeepAliveHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.NavigationStateKeepAliveHandlePendingReceiver,
      handle);
    this.$ = new blink.mojom.NavigationStateKeepAliveHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.NavigationStateKeepAliveHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NavigationStateKeepAliveHandle', [
    ]);
  }

};

blink.mojom.NavigationStateKeepAliveHandle.getRemote = function() {
  let remote = new blink.mojom.NavigationStateKeepAliveHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.NavigationStateKeepAliveHandle',
    'context');
  return remote.$;
};

blink.mojom.NavigationStateKeepAliveHandleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NavigationStateKeepAliveHandle', [
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
        
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.NavigationStateKeepAliveHandleReceiver = blink.mojom.NavigationStateKeepAliveHandleReceiver;

blink.mojom.NavigationStateKeepAliveHandlePtr = blink.mojom.NavigationStateKeepAliveHandleRemote;
blink.mojom.NavigationStateKeepAliveHandleRequest = blink.mojom.NavigationStateKeepAliveHandlePendingReceiver;


// Interface: RemoteFrameHost
mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_SetInheritedEffectiveTouchAction_ParamsSpec, 'blink.mojom.RemoteFrameHost_SetInheritedEffectiveTouchAction_Params', [
      mojo.internal.StructField('touch_action', 0, 0, cc.mojom.TouchActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_UpdateRenderThrottlingStatus_ParamsSpec, 'blink.mojom.RemoteFrameHost_UpdateRenderThrottlingStatus_Params', [
      mojo.internal.StructField('is_throttled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('subtree_throttled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('display_locked', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_VisibilityChanged_ParamsSpec, 'blink.mojom.RemoteFrameHost_VisibilityChanged_Params', [
      mojo.internal.StructField('visibility', 0, 0, blink.mojom.FrameVisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_DidFocusFrame_ParamsSpec, 'blink.mojom.RemoteFrameHost_DidFocusFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_CheckCompleted_ParamsSpec, 'blink.mojom.RemoteFrameHost_CheckCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_CapturePaintPreviewOfCrossProcessSubframe_ParamsSpec, 'blink.mojom.RemoteFrameHost_CapturePaintPreviewOfCrossProcessSubframe_Params', [
      mojo.internal.StructField('clip_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('guid', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_SetIsInert_ParamsSpec, 'blink.mojom.RemoteFrameHost_SetIsInert_Params', [
      mojo.internal.StructField('inert', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_DidChangeOpener_ParamsSpec, 'blink.mojom.RemoteFrameHost_DidChangeOpener_Params', [
      mojo.internal.StructField('opener_frame', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_AdvanceFocus_ParamsSpec, 'blink.mojom.RemoteFrameHost_AdvanceFocus_Params', [
      mojo.internal.StructField('focus_type', 0, 0, blink.mojom.FocusTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_frame_token', 8, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_RouteMessageEvent_ParamsSpec, 'blink.mojom.RemoteFrameHost_RouteMessageEvent_Params', [
      mojo.internal.StructField('source_frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('source_origin', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_origin', 16, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('message', 24, 0, blink.mojom.TransferableMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_PrintCrossProcessSubframe_ParamsSpec, 'blink.mojom.RemoteFrameHost_PrintCrossProcessSubframe_Params', [
      mojo.internal.StructField('frame_content_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_cookie', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_Detach_ParamsSpec, 'blink.mojom.RemoteFrameHost_Detach_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_UpdateViewportIntersection_ParamsSpec, 'blink.mojom.RemoteFrameHost_UpdateViewportIntersection_Params', [
      mojo.internal.StructField('intersection_state', 0, 0, blink.mojom.ViewportIntersectionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visual_properties', 8, 0, blink.mojom.FrameVisualPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_SynchronizeVisualProperties_ParamsSpec, 'blink.mojom.RemoteFrameHost_SynchronizeVisualProperties_Params', [
      mojo.internal.StructField('properties', 0, 0, blink.mojom.FrameVisualPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrameHost_OpenURL_ParamsSpec, 'blink.mojom.RemoteFrameHost_OpenURL_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.OpenURLParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.RemoteFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteFrameHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteFrameHost', [
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

  setInheritedEffectiveTouchAction(touch_action) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RemoteFrameHost_SetInheritedEffectiveTouchAction_ParamsSpec,
      null,
      [touch_action],
      false);
  }

  updateRenderThrottlingStatus(is_throttled, subtree_throttled, display_locked) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.RemoteFrameHost_UpdateRenderThrottlingStatus_ParamsSpec,
      null,
      [is_throttled, subtree_throttled, display_locked],
      false);
  }

  visibilityChanged(visibility) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.RemoteFrameHost_VisibilityChanged_ParamsSpec,
      null,
      [visibility],
      false);
  }

  didFocusFrame() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.RemoteFrameHost_DidFocusFrame_ParamsSpec,
      null,
      [],
      false);
  }

  checkCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.RemoteFrameHost_CheckCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  capturePaintPreviewOfCrossProcessSubframe(clip_rect, guid) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.RemoteFrameHost_CapturePaintPreviewOfCrossProcessSubframe_ParamsSpec,
      null,
      [clip_rect, guid],
      false);
  }

  setIsInert(inert) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.RemoteFrameHost_SetIsInert_ParamsSpec,
      null,
      [inert],
      false);
  }

  didChangeOpener(opener_frame) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.RemoteFrameHost_DidChangeOpener_ParamsSpec,
      null,
      [opener_frame],
      false);
  }

  advanceFocus(focus_type, source_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.RemoteFrameHost_AdvanceFocus_ParamsSpec,
      null,
      [focus_type, source_frame_token],
      false);
  }

  routeMessageEvent(source_frame_token, source_origin, target_origin, message) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.RemoteFrameHost_RouteMessageEvent_ParamsSpec,
      null,
      [source_frame_token, source_origin, target_origin, message],
      false);
  }

  printCrossProcessSubframe(frame_content_rect, document_cookie) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.RemoteFrameHost_PrintCrossProcessSubframe_ParamsSpec,
      null,
      [frame_content_rect, document_cookie],
      false);
  }

  detach() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.RemoteFrameHost_Detach_ParamsSpec,
      null,
      [],
      false);
  }

  updateViewportIntersection(intersection_state, visual_properties) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.RemoteFrameHost_UpdateViewportIntersection_ParamsSpec,
      null,
      [intersection_state, visual_properties],
      false);
  }

  synchronizeVisualProperties(properties) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      blink.mojom.RemoteFrameHost_SynchronizeVisualProperties_ParamsSpec,
      null,
      [properties],
      false);
  }

  openURL(params) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      blink.mojom.RemoteFrameHost_OpenURL_ParamsSpec,
      null,
      [params],
      false);
  }

};

blink.mojom.RemoteFrameHost.getRemote = function() {
  let remote = new blink.mojom.RemoteFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteFrameHost',
    'context');
  return remote.$;
};

blink.mojom.RemoteFrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteFrameHost', [
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
        
        // Try Method 0: SetInheritedEffectiveTouchAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_SetInheritedEffectiveTouchAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInheritedEffectiveTouchAction (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateRenderThrottlingStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_UpdateRenderThrottlingStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRenderThrottlingStatus (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: VisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_VisibilityChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> VisibilityChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DidFocusFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_DidFocusFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidFocusFrame (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: CheckCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_CheckCompleted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckCompleted (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CapturePaintPreviewOfCrossProcessSubframe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_CapturePaintPreviewOfCrossProcessSubframe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CapturePaintPreviewOfCrossProcessSubframe (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetIsInert
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_SetIsInert_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsInert (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DidChangeOpener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_DidChangeOpener_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidChangeOpener (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: AdvanceFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_AdvanceFocus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AdvanceFocus (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RouteMessageEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_RouteMessageEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RouteMessageEvent (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: PrintCrossProcessSubframe
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_PrintCrossProcessSubframe_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PrintCrossProcessSubframe (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: Detach
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_Detach_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Detach (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: UpdateViewportIntersection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_UpdateViewportIntersection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateViewportIntersection (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SynchronizeVisualProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_SynchronizeVisualProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SynchronizeVisualProperties (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: OpenURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrameHost_OpenURL_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenURL (14)');
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
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_SetInheritedEffectiveTouchAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInheritedEffectiveTouchAction');
          const result = this.impl.setInheritedEffectiveTouchAction(params.touch_action);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_UpdateRenderThrottlingStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateRenderThrottlingStatus');
          const result = this.impl.updateRenderThrottlingStatus(params.is_throttled, params.subtree_throttled, params.display_locked);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_VisibilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.visibilityChanged');
          const result = this.impl.visibilityChanged(params.visibility);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_DidFocusFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didFocusFrame');
          const result = this.impl.didFocusFrame();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_CheckCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.checkCompleted');
          const result = this.impl.checkCompleted();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_CapturePaintPreviewOfCrossProcessSubframe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.capturePaintPreviewOfCrossProcessSubframe');
          const result = this.impl.capturePaintPreviewOfCrossProcessSubframe(params.clip_rect, params.guid);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_SetIsInert_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsInert');
          const result = this.impl.setIsInert(params.inert);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_DidChangeOpener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeOpener');
          const result = this.impl.didChangeOpener(params.opener_frame);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_AdvanceFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.advanceFocus');
          const result = this.impl.advanceFocus(params.focus_type, params.source_frame_token);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_RouteMessageEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.routeMessageEvent');
          const result = this.impl.routeMessageEvent(params.source_frame_token, params.source_origin, params.target_origin, params.message);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_PrintCrossProcessSubframe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.printCrossProcessSubframe');
          const result = this.impl.printCrossProcessSubframe(params.frame_content_rect, params.document_cookie);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_Detach_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detach');
          const result = this.impl.detach();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_UpdateViewportIntersection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateViewportIntersection');
          const result = this.impl.updateViewportIntersection(params.intersection_state, params.visual_properties);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_SynchronizeVisualProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.synchronizeVisualProperties');
          const result = this.impl.synchronizeVisualProperties(params.properties);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrameHost_OpenURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openURL');
          const result = this.impl.openURL(params.params);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.RemoteFrameHostReceiver = blink.mojom.RemoteFrameHostReceiver;

blink.mojom.RemoteFrameHostPtr = blink.mojom.RemoteFrameHostRemote;
blink.mojom.RemoteFrameHostRequest = blink.mojom.RemoteFrameHostPendingReceiver;


// Interface: RemoteFrame
mojo.internal.Struct(
    blink.mojom.RemoteFrame_WillEnterFullscreen_ParamsSpec, 'blink.mojom.RemoteFrame_WillEnterFullscreen_Params', [
      mojo.internal.StructField('options', 0, 0, blink.mojom.FullscreenOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_EnforceInsecureNavigationsSet_ParamsSpec, 'blink.mojom.RemoteFrame_EnforceInsecureNavigationsSet_Params', [
      mojo.internal.StructField('set', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_SetFrameOwnerProperties_ParamsSpec, 'blink.mojom.RemoteFrame_SetFrameOwnerProperties_Params', [
      mojo.internal.StructField('properties', 0, 0, blink.mojom.FrameOwnerPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_EnforceInsecureRequestPolicy_ParamsSpec, 'blink.mojom.RemoteFrame_EnforceInsecureRequestPolicy_Params', [
      mojo.internal.StructField('policy', 0, 0, blink.mojom.InsecureRequestPolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_SetReplicatedOrigin_ParamsSpec, 'blink.mojom.RemoteFrame_SetReplicatedOrigin_Params', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_potentially_trustworthy_unique_origin', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_SetReplicatedIsAdFrame_ParamsSpec, 'blink.mojom.RemoteFrame_SetReplicatedIsAdFrame_Params', [
      mojo.internal.StructField('is_ad_frame', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_SetReplicatedName_ParamsSpec, 'blink.mojom.RemoteFrame_SetReplicatedName_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('unique_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_DispatchLoadEventForFrameOwner_ParamsSpec, 'blink.mojom.RemoteFrame_DispatchLoadEventForFrameOwner_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_SetNeedsOcclusionTracking_ParamsSpec, 'blink.mojom.RemoteFrame_SetNeedsOcclusionTracking_Params', [
      mojo.internal.StructField('needs_tracking', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_Collapse_ParamsSpec, 'blink.mojom.RemoteFrame_Collapse_Params', [
      mojo.internal.StructField('collapsed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_Focus_ParamsSpec, 'blink.mojom.RemoteFrame_Focus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_SetHadStickyUserActivationBeforeNavigation_ParamsSpec, 'blink.mojom.RemoteFrame_SetHadStickyUserActivationBeforeNavigation_Params', [
      mojo.internal.StructField('has_gesture', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_BubbleLogicalScroll_ParamsSpec, 'blink.mojom.RemoteFrame_BubbleLogicalScroll_Params', [
      mojo.internal.StructField('direction', 0, 0, blink.mojom.ScrollDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('granularity', 8, 0, ui.mojom.ScrollGranularitySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_UpdateUserActivationState_ParamsSpec, 'blink.mojom.RemoteFrame_UpdateUserActivationState_Params', [
      mojo.internal.StructField('state_update_type', 0, 0, blink.mojom.UserActivationUpdateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('notification_type', 8, 0, blink.mojom.UserActivationNotificationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_SetEmbeddingToken_ParamsSpec, 'blink.mojom.RemoteFrame_SetEmbeddingToken_Params', [
      mojo.internal.StructField('embedding_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_SetPageFocus_ParamsSpec, 'blink.mojom.RemoteFrame_SetPageFocus_Params', [
      mojo.internal.StructField('is_focused', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_RenderFallbackContent_ParamsSpec, 'blink.mojom.RemoteFrame_RenderFallbackContent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_AddResourceTimingFromChild_ParamsSpec, 'blink.mojom.RemoteFrame_AddResourceTimingFromChild_Params', [
      mojo.internal.StructField('timing', 0, 0, blink.mojom.ResourceTimingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_ScrollRectToVisible_ParamsSpec, 'blink.mojom.RemoteFrame_ScrollRectToVisible_Params', [
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, blink.mojom.ScrollIntoViewParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_DidStartLoading_ParamsSpec, 'blink.mojom.RemoteFrame_DidStartLoading_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_DidStopLoading_ParamsSpec, 'blink.mojom.RemoteFrame_DidStopLoading_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_IntrinsicSizingInfoOfChildChanged_ParamsSpec, 'blink.mojom.RemoteFrame_IntrinsicSizingInfoOfChildChanged_Params', [
      mojo.internal.StructField('sizing_info', 0, 0, blink.mojom.IntrinsicSizingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_DidSetFramePolicyHeaders_ParamsSpec, 'blink.mojom.RemoteFrame_DidSetFramePolicyHeaders_Params', [
      mojo.internal.StructField('sandbox_flags', 0, 0, network.mojom.WebSandboxFlagsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('parsed_permissions_policy', 8, 0, mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_DidUpdateFramePolicy_ParamsSpec, 'blink.mojom.RemoteFrame_DidUpdateFramePolicy_Params', [
      mojo.internal.StructField('frame_policy', 0, 0, blink.mojom.FramePolicySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_UpdateOpener_ParamsSpec, 'blink.mojom.RemoteFrame_UpdateOpener_Params', [
      mojo.internal.StructField('opener_frame_token', 0, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_DetachAndDispose_ParamsSpec, 'blink.mojom.RemoteFrame_DetachAndDispose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_EnableAutoResize_ParamsSpec, 'blink.mojom.RemoteFrame_EnableAutoResize_Params', [
      mojo.internal.StructField('min_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_DisableAutoResize_ParamsSpec, 'blink.mojom.RemoteFrame_DisableAutoResize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_DidUpdateVisualProperties_ParamsSpec, 'blink.mojom.RemoteFrame_DidUpdateVisualProperties_Params', [
      mojo.internal.StructField('metadata', 0, 0, cc.mojom.RenderFrameMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_SetFrameSinkId_ParamsSpec, 'blink.mojom.RemoteFrame_SetFrameSinkId_Params', [
      mojo.internal.StructField('frame_sink_id', 0, 0, viz.mojom.FrameSinkIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allow_paint_holding', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_ChildProcessGone_ParamsSpec, 'blink.mojom.RemoteFrame_ChildProcessGone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_CreateRemoteChild_ParamsSpec, 'blink.mojom.RemoteFrame_CreateRemoteChild_Params', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('opener_frame_token', 8, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tree_scope_type', 16, 0, blink.mojom.TreeScopeTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('replication_state', 24, 0, blink.mojom.FrameReplicationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('owner_properties', 32, 0, blink.mojom.FrameOwnerPropertiesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_frame_token', 40, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_frame_interfaces', 48, 0, blink.mojom.RemoteFrameInterfacesFromBrowserSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_loading', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_CreateRemoteChildren_ParamsSpec, 'blink.mojom.RemoteFrame_CreateRemoteChildren_Params', [
      mojo.internal.StructField('params', 0, 0, mojo.internal.Array(blink.mojom.CreateRemoteChildParamsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('navigation_metrics_token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteFrame_ForwardFencedFrameEventToEmbedder_ParamsSpec, 'blink.mojom.RemoteFrame_ForwardFencedFrameEventToEmbedder_Params', [
      mojo.internal.StructField('event_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.RemoteFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteFrameRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteFramePendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteFrame', [
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

  willEnterFullscreen(options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RemoteFrame_WillEnterFullscreen_ParamsSpec,
      null,
      [options],
      false);
  }

  enforceInsecureNavigationsSet(set) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.RemoteFrame_EnforceInsecureNavigationsSet_ParamsSpec,
      null,
      [set],
      false);
  }

  setFrameOwnerProperties(properties) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.RemoteFrame_SetFrameOwnerProperties_ParamsSpec,
      null,
      [properties],
      false);
  }

  enforceInsecureRequestPolicy(policy) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.RemoteFrame_EnforceInsecureRequestPolicy_ParamsSpec,
      null,
      [policy],
      false);
  }

  setReplicatedOrigin(origin, is_potentially_trustworthy_unique_origin) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.RemoteFrame_SetReplicatedOrigin_ParamsSpec,
      null,
      [origin, is_potentially_trustworthy_unique_origin],
      false);
  }

  setReplicatedIsAdFrame(is_ad_frame) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.RemoteFrame_SetReplicatedIsAdFrame_ParamsSpec,
      null,
      [is_ad_frame],
      false);
  }

  setReplicatedName(name, unique_name) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.RemoteFrame_SetReplicatedName_ParamsSpec,
      null,
      [name, unique_name],
      false);
  }

  dispatchLoadEventForFrameOwner() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.RemoteFrame_DispatchLoadEventForFrameOwner_ParamsSpec,
      null,
      [],
      false);
  }

  setNeedsOcclusionTracking(needs_tracking) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.RemoteFrame_SetNeedsOcclusionTracking_ParamsSpec,
      null,
      [needs_tracking],
      false);
  }

  collapse(collapsed) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.RemoteFrame_Collapse_ParamsSpec,
      null,
      [collapsed],
      false);
  }

  focus() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.RemoteFrame_Focus_ParamsSpec,
      null,
      [],
      false);
  }

  setHadStickyUserActivationBeforeNavigation(has_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.RemoteFrame_SetHadStickyUserActivationBeforeNavigation_ParamsSpec,
      null,
      [has_gesture],
      false);
  }

  bubbleLogicalScroll(direction, granularity) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.RemoteFrame_BubbleLogicalScroll_ParamsSpec,
      null,
      [direction, granularity],
      false);
  }

  updateUserActivationState(state_update_type, notification_type) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      blink.mojom.RemoteFrame_UpdateUserActivationState_ParamsSpec,
      null,
      [state_update_type, notification_type],
      false);
  }

  setEmbeddingToken(embedding_token) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      blink.mojom.RemoteFrame_SetEmbeddingToken_ParamsSpec,
      null,
      [embedding_token],
      false);
  }

  setPageFocus(is_focused) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      blink.mojom.RemoteFrame_SetPageFocus_ParamsSpec,
      null,
      [is_focused],
      false);
  }

  renderFallbackContent() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      blink.mojom.RemoteFrame_RenderFallbackContent_ParamsSpec,
      null,
      [],
      false);
  }

  addResourceTimingFromChild(timing) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      blink.mojom.RemoteFrame_AddResourceTimingFromChild_ParamsSpec,
      null,
      [timing],
      false);
  }

  scrollRectToVisible(rect, params) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      blink.mojom.RemoteFrame_ScrollRectToVisible_ParamsSpec,
      null,
      [rect, params],
      false);
  }

  didStartLoading() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      blink.mojom.RemoteFrame_DidStartLoading_ParamsSpec,
      null,
      [],
      false);
  }

  didStopLoading() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      blink.mojom.RemoteFrame_DidStopLoading_ParamsSpec,
      null,
      [],
      false);
  }

  intrinsicSizingInfoOfChildChanged(sizing_info) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      blink.mojom.RemoteFrame_IntrinsicSizingInfoOfChildChanged_ParamsSpec,
      null,
      [sizing_info],
      false);
  }

  didSetFramePolicyHeaders(sandbox_flags, parsed_permissions_policy) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      blink.mojom.RemoteFrame_DidSetFramePolicyHeaders_ParamsSpec,
      null,
      [sandbox_flags, parsed_permissions_policy],
      false);
  }

  didUpdateFramePolicy(frame_policy) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      blink.mojom.RemoteFrame_DidUpdateFramePolicy_ParamsSpec,
      null,
      [frame_policy],
      false);
  }

  updateOpener(opener_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      blink.mojom.RemoteFrame_UpdateOpener_ParamsSpec,
      null,
      [opener_frame_token],
      false);
  }

  detachAndDispose() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      blink.mojom.RemoteFrame_DetachAndDispose_ParamsSpec,
      null,
      [],
      false);
  }

  enableAutoResize(min_size, max_size) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      blink.mojom.RemoteFrame_EnableAutoResize_ParamsSpec,
      null,
      [min_size, max_size],
      false);
  }

  disableAutoResize() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      blink.mojom.RemoteFrame_DisableAutoResize_ParamsSpec,
      null,
      [],
      false);
  }

  didUpdateVisualProperties(metadata) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      blink.mojom.RemoteFrame_DidUpdateVisualProperties_ParamsSpec,
      null,
      [metadata],
      false);
  }

  setFrameSinkId(frame_sink_id, allow_paint_holding) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      blink.mojom.RemoteFrame_SetFrameSinkId_ParamsSpec,
      null,
      [frame_sink_id, allow_paint_holding],
      false);
  }

  childProcessGone() {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      blink.mojom.RemoteFrame_ChildProcessGone_ParamsSpec,
      null,
      [],
      false);
  }

  createRemoteChild(token, opener_frame_token, tree_scope_type, replication_state, owner_properties, is_loading, devtools_frame_token, remote_frame_interfaces) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      blink.mojom.RemoteFrame_CreateRemoteChild_ParamsSpec,
      null,
      [token, opener_frame_token, tree_scope_type, replication_state, owner_properties, is_loading, devtools_frame_token, remote_frame_interfaces],
      false);
  }

  createRemoteChildren(params, navigation_metrics_token) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      blink.mojom.RemoteFrame_CreateRemoteChildren_ParamsSpec,
      null,
      [params, navigation_metrics_token],
      false);
  }

  forwardFencedFrameEventToEmbedder(event_type) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      blink.mojom.RemoteFrame_ForwardFencedFrameEventToEmbedder_ParamsSpec,
      null,
      [event_type],
      false);
  }

};

blink.mojom.RemoteFrame.getRemote = function() {
  let remote = new blink.mojom.RemoteFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteFrame',
    'context');
  return remote.$;
};

blink.mojom.RemoteFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteFrame', [
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
        
        // Try Method 0: WillEnterFullscreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_WillEnterFullscreen_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WillEnterFullscreen (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EnforceInsecureNavigationsSet
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_EnforceInsecureNavigationsSet_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnforceInsecureNavigationsSet (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetFrameOwnerProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_SetFrameOwnerProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFrameOwnerProperties (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: EnforceInsecureRequestPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_EnforceInsecureRequestPolicy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnforceInsecureRequestPolicy (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetReplicatedOrigin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_SetReplicatedOrigin_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetReplicatedOrigin (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetReplicatedIsAdFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_SetReplicatedIsAdFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetReplicatedIsAdFrame (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetReplicatedName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_SetReplicatedName_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetReplicatedName (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: DispatchLoadEventForFrameOwner
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_DispatchLoadEventForFrameOwner_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchLoadEventForFrameOwner (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetNeedsOcclusionTracking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_SetNeedsOcclusionTracking_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNeedsOcclusionTracking (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: Collapse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_Collapse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Collapse (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Focus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_Focus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Focus (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetHadStickyUserActivationBeforeNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_SetHadStickyUserActivationBeforeNavigation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHadStickyUserActivationBeforeNavigation (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: BubbleLogicalScroll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_BubbleLogicalScroll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BubbleLogicalScroll (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: UpdateUserActivationState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_UpdateUserActivationState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUserActivationState (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetEmbeddingToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_SetEmbeddingToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEmbeddingToken (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetPageFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_SetPageFocus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPageFocus (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: RenderFallbackContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_RenderFallbackContent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenderFallbackContent (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: AddResourceTimingFromChild
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_AddResourceTimingFromChild_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddResourceTimingFromChild (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: ScrollRectToVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_ScrollRectToVisible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScrollRectToVisible (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: DidStartLoading
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_DidStartLoading_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidStartLoading (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: DidStopLoading
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_DidStopLoading_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidStopLoading (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: IntrinsicSizingInfoOfChildChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_IntrinsicSizingInfoOfChildChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IntrinsicSizingInfoOfChildChanged (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: DidSetFramePolicyHeaders
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_DidSetFramePolicyHeaders_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidSetFramePolicyHeaders (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: DidUpdateFramePolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_DidUpdateFramePolicy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidUpdateFramePolicy (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: UpdateOpener
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_UpdateOpener_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateOpener (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: DetachAndDispose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_DetachAndDispose_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DetachAndDispose (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: EnableAutoResize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_EnableAutoResize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableAutoResize (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: DisableAutoResize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_DisableAutoResize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableAutoResize (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: DidUpdateVisualProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_DidUpdateVisualProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidUpdateVisualProperties (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: SetFrameSinkId
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_SetFrameSinkId_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFrameSinkId (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: ChildProcessGone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_ChildProcessGone_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ChildProcessGone (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: CreateRemoteChild
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_CreateRemoteChild_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRemoteChild (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: CreateRemoteChildren
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_CreateRemoteChildren_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRemoteChildren (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: ForwardFencedFrameEventToEmbedder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteFrame_ForwardFencedFrameEventToEmbedder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForwardFencedFrameEventToEmbedder (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_WillEnterFullscreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.willEnterFullscreen');
          const result = this.impl.willEnterFullscreen(params.options);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_EnforceInsecureNavigationsSet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enforceInsecureNavigationsSet');
          const result = this.impl.enforceInsecureNavigationsSet(params.set);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_SetFrameOwnerProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFrameOwnerProperties');
          const result = this.impl.setFrameOwnerProperties(params.properties);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_EnforceInsecureRequestPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enforceInsecureRequestPolicy');
          const result = this.impl.enforceInsecureRequestPolicy(params.policy);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_SetReplicatedOrigin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setReplicatedOrigin');
          const result = this.impl.setReplicatedOrigin(params.origin, params.is_potentially_trustworthy_unique_origin);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_SetReplicatedIsAdFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setReplicatedIsAdFrame');
          const result = this.impl.setReplicatedIsAdFrame(params.is_ad_frame);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_SetReplicatedName_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setReplicatedName');
          const result = this.impl.setReplicatedName(params.name, params.unique_name);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_DispatchLoadEventForFrameOwner_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchLoadEventForFrameOwner');
          const result = this.impl.dispatchLoadEventForFrameOwner();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_SetNeedsOcclusionTracking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNeedsOcclusionTracking');
          const result = this.impl.setNeedsOcclusionTracking(params.needs_tracking);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_Collapse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.collapse');
          const result = this.impl.collapse(params.collapsed);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_Focus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focus');
          const result = this.impl.focus();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_SetHadStickyUserActivationBeforeNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHadStickyUserActivationBeforeNavigation');
          const result = this.impl.setHadStickyUserActivationBeforeNavigation(params.has_gesture);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_BubbleLogicalScroll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bubbleLogicalScroll');
          const result = this.impl.bubbleLogicalScroll(params.direction, params.granularity);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_UpdateUserActivationState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateUserActivationState');
          const result = this.impl.updateUserActivationState(params.state_update_type, params.notification_type);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_SetEmbeddingToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEmbeddingToken');
          const result = this.impl.setEmbeddingToken(params.embedding_token);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_SetPageFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPageFocus');
          const result = this.impl.setPageFocus(params.is_focused);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_RenderFallbackContent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renderFallbackContent');
          const result = this.impl.renderFallbackContent();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_AddResourceTimingFromChild_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addResourceTimingFromChild');
          const result = this.impl.addResourceTimingFromChild(params.timing);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_ScrollRectToVisible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scrollRectToVisible');
          const result = this.impl.scrollRectToVisible(params.rect, params.params);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_DidStartLoading_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didStartLoading');
          const result = this.impl.didStartLoading();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_DidStopLoading_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didStopLoading');
          const result = this.impl.didStopLoading();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_IntrinsicSizingInfoOfChildChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.intrinsicSizingInfoOfChildChanged');
          const result = this.impl.intrinsicSizingInfoOfChildChanged(params.sizing_info);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_DidSetFramePolicyHeaders_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didSetFramePolicyHeaders');
          const result = this.impl.didSetFramePolicyHeaders(params.sandbox_flags, params.parsed_permissions_policy);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_DidUpdateFramePolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didUpdateFramePolicy');
          const result = this.impl.didUpdateFramePolicy(params.frame_policy);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_UpdateOpener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateOpener');
          const result = this.impl.updateOpener(params.opener_frame_token);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_DetachAndDispose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detachAndDispose');
          const result = this.impl.detachAndDispose();
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_EnableAutoResize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableAutoResize');
          const result = this.impl.enableAutoResize(params.min_size, params.max_size);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_DisableAutoResize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableAutoResize');
          const result = this.impl.disableAutoResize();
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_DidUpdateVisualProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didUpdateVisualProperties');
          const result = this.impl.didUpdateVisualProperties(params.metadata);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_SetFrameSinkId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFrameSinkId');
          const result = this.impl.setFrameSinkId(params.frame_sink_id, params.allow_paint_holding);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_ChildProcessGone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.childProcessGone');
          const result = this.impl.childProcessGone();
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_CreateRemoteChild_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRemoteChild');
          const result = this.impl.createRemoteChild(params.token, params.opener_frame_token, params.tree_scope_type, params.replication_state, params.owner_properties, params.is_loading, params.devtools_frame_token, params.remote_frame_interfaces);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_CreateRemoteChildren_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRemoteChildren');
          const result = this.impl.createRemoteChildren(params.params, params.navigation_metrics_token);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteFrame_ForwardFencedFrameEventToEmbedder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forwardFencedFrameEventToEmbedder');
          const result = this.impl.forwardFencedFrameEventToEmbedder(params.event_type);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.RemoteFrameReceiver = blink.mojom.RemoteFrameReceiver;

blink.mojom.RemoteFramePtr = blink.mojom.RemoteFrameRemote;
blink.mojom.RemoteFrameRequest = blink.mojom.RemoteFramePendingReceiver;


// Interface: RemoteMainFrame
mojo.internal.Struct(
    blink.mojom.RemoteMainFrame_UpdateTextAutosizerPageInfo_ParamsSpec, 'blink.mojom.RemoteMainFrame_UpdateTextAutosizerPageInfo_Params', [
      mojo.internal.StructField('page_info', 0, 0, blink.mojom.TextAutosizerPageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.RemoteMainFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteMainFrameRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteMainFrame';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteMainFramePendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteMainFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteMainFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteMainFrame', [
      { explicit: null },
    ]);
  }

  updateTextAutosizerPageInfo(page_info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RemoteMainFrame_UpdateTextAutosizerPageInfo_ParamsSpec,
      null,
      [page_info],
      false);
  }

};

blink.mojom.RemoteMainFrame.getRemote = function() {
  let remote = new blink.mojom.RemoteMainFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteMainFrame',
    'context');
  return remote.$;
};

blink.mojom.RemoteMainFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteMainFrame', [
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
        
        // Try Method 0: UpdateTextAutosizerPageInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteMainFrame_UpdateTextAutosizerPageInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTextAutosizerPageInfo (0)');
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
          const params = decoder.decodeStructInline(blink.mojom.RemoteMainFrame_UpdateTextAutosizerPageInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTextAutosizerPageInfo');
          const result = this.impl.updateTextAutosizerPageInfo(params.page_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.RemoteMainFrameReceiver = blink.mojom.RemoteMainFrameReceiver;

blink.mojom.RemoteMainFramePtr = blink.mojom.RemoteMainFrameRemote;
blink.mojom.RemoteMainFrameRequest = blink.mojom.RemoteMainFramePendingReceiver;


// Interface: RemoteMainFrameHost
mojo.internal.Struct(
    blink.mojom.RemoteMainFrameHost_FocusPage_ParamsSpec, 'blink.mojom.RemoteMainFrameHost_FocusPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteMainFrameHost_TakeFocus_ParamsSpec, 'blink.mojom.RemoteMainFrameHost_TakeFocus_Params', [
      mojo.internal.StructField('reverse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteMainFrameHost_UpdateTargetURL_ParamsSpec, 'blink.mojom.RemoteMainFrameHost_UpdateTargetURL_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteMainFrameHost_UpdateTargetURL_ResponseParamsSpec, 'blink.mojom.RemoteMainFrameHost_UpdateTargetURL_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteMainFrameHost_RouteCloseEvent_ParamsSpec, 'blink.mojom.RemoteMainFrameHost_RouteCloseEvent_Params', [
    ],
    [[0, 8]]);

blink.mojom.RemoteMainFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteMainFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteMainFrameHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteMainFrameHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteMainFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteMainFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteMainFrameHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  focusPage() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RemoteMainFrameHost_FocusPage_ParamsSpec,
      null,
      [],
      false);
  }

  takeFocus(reverse) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.RemoteMainFrameHost_TakeFocus_ParamsSpec,
      null,
      [reverse],
      false);
  }

  updateTargetURL(url) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.RemoteMainFrameHost_UpdateTargetURL_ParamsSpec,
      blink.mojom.RemoteMainFrameHost_UpdateTargetURL_ResponseParamsSpec,
      [url],
      false);
  }

  routeCloseEvent() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.RemoteMainFrameHost_RouteCloseEvent_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.RemoteMainFrameHost.getRemote = function() {
  let remote = new blink.mojom.RemoteMainFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteMainFrameHost',
    'context');
  return remote.$;
};

blink.mojom.RemoteMainFrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteMainFrameHost', [
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
        
        // Try Method 0: FocusPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteMainFrameHost_FocusPage_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FocusPage (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: TakeFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteMainFrameHost_TakeFocus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TakeFocus (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateTargetURL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteMainFrameHost_UpdateTargetURL_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTargetURL (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: RouteCloseEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteMainFrameHost_RouteCloseEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RouteCloseEvent (3)');
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
          const params = decoder.decodeStructInline(blink.mojom.RemoteMainFrameHost_FocusPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusPage');
          const result = this.impl.focusPage();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteMainFrameHost_TakeFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.takeFocus');
          const result = this.impl.takeFocus(params.reverse);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteMainFrameHost_UpdateTargetURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTargetURL');
          const result = this.impl.updateTargetURL(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.RemoteMainFrameHost_UpdateTargetURL_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteMainFrameHost_RouteCloseEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.routeCloseEvent');
          const result = this.impl.routeCloseEvent();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.RemoteMainFrameHostReceiver = blink.mojom.RemoteMainFrameHostReceiver;

blink.mojom.RemoteMainFrameHostPtr = blink.mojom.RemoteMainFrameHostRemote;
blink.mojom.RemoteMainFrameHostRequest = blink.mojom.RemoteMainFrameHostPendingReceiver;

