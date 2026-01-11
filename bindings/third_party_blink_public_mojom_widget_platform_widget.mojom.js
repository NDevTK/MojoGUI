// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/widget/platform_widget.mojom
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.cc = mojo.internal.bindings.cc || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.viz = mojo.internal.bindings.viz || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.blink.mojom.WidgetCompositor = {};
mojo.internal.bindings.blink.mojom.WidgetCompositor.$interfaceName = 'blink.mojom.WidgetCompositor';
mojo.internal.bindings.blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetHost = {};
mojo.internal.bindings.blink.mojom.WidgetHost.$interfaceName = 'blink.mojom.WidgetHost';
mojo.internal.bindings.blink.mojom.WidgetHost_SetCursor_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Widget = {};
mojo.internal.bindings.blink.mojom.Widget.$interfaceName = 'blink.mojom.Widget';
mojo.internal.bindings.blink.mojom.Widget_ForceRedraw_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Widget_ForceRedraw_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Widget_UpdateVisualProperties_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Widget_UpdateScreenRects_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Widget_UpdateScreenRects_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Widget_WasHidden_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Widget_WasShown_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RenderInputRouterClient = {};
mojo.internal.bindings.blink.mojom.RenderInputRouterClient.$interfaceName = 'blink.mojom.RenderInputRouterClient';
mojo.internal.bindings.blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec = { $: {} };

// Interface: WidgetCompositor
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec, 'blink.mojom.WidgetCompositor_VisualStateRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParamsSpec, 'blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.blink.mojom.WidgetCompositorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.WidgetCompositorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetCompositor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.WidgetCompositorPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.WidgetCompositorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  visualStateRequest() {
    return this.$.visualStateRequest();
  }
};

mojo.internal.bindings.blink.mojom.WidgetCompositorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WidgetCompositor', [
      { explicit: null },
    ]);
  }

  visualStateRequest() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.WidgetCompositor.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.WidgetCompositorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetCompositor',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.WidgetCompositorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WidgetCompositor', [
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
        
        // Try Method 0: VisualStateRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> VisualStateRequest (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.visualStateRequest');
          const result = this.impl.visualStateRequest();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] VisualStateRequest FAILED:', e));
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

mojo.internal.bindings.blink.mojom.WidgetCompositorReceiver = mojo.internal.bindings.blink.mojom.WidgetCompositorReceiver;

mojo.internal.bindings.blink.mojom.WidgetCompositorPtr = mojo.internal.bindings.blink.mojom.WidgetCompositorRemote;
mojo.internal.bindings.blink.mojom.WidgetCompositorRequest = mojo.internal.bindings.blink.mojom.WidgetCompositorPendingReceiver;


// Interface: WidgetHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetHost_SetCursor_ParamsSpec, 'blink.mojom.WidgetHost_SetCursor_Params', [
      mojo.internal.StructField('arg_cursor', 0, 0, mojo.internal.bindings.ui.mojom.CursorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec, 'blink.mojom.WidgetHost_UpdateTooltipUnderCursor_Params', [
      mojo.internal.StructField('arg_tooltip_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_direction_hint', 8, 0, mojo.internal.bindings.mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec, 'blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_Params', [
      mojo.internal.StructField('arg_tooltip_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_direction_hint', 8, 0, mojo.internal.bindings.mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec, 'blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec, 'blink.mojom.WidgetHost_TextInputStateChanged_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ui.mojom.TextInputStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec, 'blink.mojom.WidgetHost_SelectionBoundsChanged_Params', [
      mojo.internal.StructField('arg_anchor_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_anchor_dir', 8, 0, mojo.internal.bindings.mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_focus_rect', 16, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_focus_dir', 24, 0, mojo.internal.bindings.mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounding_box_rect', 32, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_anchor_first', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec, 'blink.mojom.WidgetHost_CreateFrameSink_Params', [
      mojo.internal.StructField('arg_compositor_frame_sink_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_compositor_frame_sink_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_render_input_router_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.RenderInputRouterClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec, 'blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_Params', [
      mojo.internal.StructField('arg_render_frame_metadata_observer_client_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.cc.mojom.RenderFrameMetadataObserverClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_render_frame_metadata_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cc.mojom.RenderFrameMetadataObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.WidgetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.WidgetHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.WidgetHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.WidgetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setCursor(arg_cursor) {
    return this.$.setCursor(arg_cursor);
  }
  updateTooltipUnderCursor(arg_tooltip_text, arg_text_direction_hint) {
    return this.$.updateTooltipUnderCursor(arg_tooltip_text, arg_text_direction_hint);
  }
  updateTooltipFromKeyboard(arg_tooltip_text, arg_text_direction_hint, arg_bounds) {
    return this.$.updateTooltipFromKeyboard(arg_tooltip_text, arg_text_direction_hint, arg_bounds);
  }
  clearKeyboardTriggeredTooltip() {
    return this.$.clearKeyboardTriggeredTooltip();
  }
  textInputStateChanged(arg_state) {
    return this.$.textInputStateChanged(arg_state);
  }
  selectionBoundsChanged(arg_anchor_rect, arg_anchor_dir, arg_focus_rect, arg_focus_dir, arg_bounding_box_rect, arg_is_anchor_first) {
    return this.$.selectionBoundsChanged(arg_anchor_rect, arg_anchor_dir, arg_focus_rect, arg_focus_dir, arg_bounding_box_rect, arg_is_anchor_first);
  }
  createFrameSink(arg_compositor_frame_sink_receiver, arg_compositor_frame_sink_client, arg_render_input_router_client) {
    return this.$.createFrameSink(arg_compositor_frame_sink_receiver, arg_compositor_frame_sink_client, arg_render_input_router_client);
  }
  registerRenderFrameMetadataObserver(arg_render_frame_metadata_observer_client_receiver, arg_render_frame_metadata_observer) {
    return this.$.registerRenderFrameMetadataObserver(arg_render_frame_metadata_observer_client_receiver, arg_render_frame_metadata_observer);
  }
};

mojo.internal.bindings.blink.mojom.WidgetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WidgetHost', [
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

  setCursor(arg_cursor) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetHost_SetCursor_ParamsSpec,
      null,
      [arg_cursor],
      false);
  }

  updateTooltipUnderCursor(arg_tooltip_text, arg_text_direction_hint) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec,
      null,
      [arg_tooltip_text, arg_text_direction_hint],
      false);
  }

  updateTooltipFromKeyboard(arg_tooltip_text, arg_text_direction_hint, arg_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec,
      null,
      [arg_tooltip_text, arg_text_direction_hint, arg_bounds],
      false);
  }

  clearKeyboardTriggeredTooltip() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec,
      null,
      [],
      false);
  }

  textInputStateChanged(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  selectionBoundsChanged(arg_anchor_rect, arg_anchor_dir, arg_focus_rect, arg_focus_dir, arg_bounding_box_rect, arg_is_anchor_first) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec,
      null,
      [arg_anchor_rect, arg_anchor_dir, arg_focus_rect, arg_focus_dir, arg_bounding_box_rect, arg_is_anchor_first],
      false);
  }

  createFrameSink(arg_compositor_frame_sink_receiver, arg_compositor_frame_sink_client, arg_render_input_router_client) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec,
      null,
      [arg_compositor_frame_sink_receiver, arg_compositor_frame_sink_client, arg_render_input_router_client],
      false);
  }

  registerRenderFrameMetadataObserver(arg_render_frame_metadata_observer_client_receiver, arg_render_frame_metadata_observer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec,
      null,
      [arg_render_frame_metadata_observer_client_receiver, arg_render_frame_metadata_observer],
      false);
  }

};

mojo.internal.bindings.blink.mojom.WidgetHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.WidgetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.WidgetHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WidgetHost', [
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
        
        // Try Method 0: SetCursor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_SetCursor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCursor (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateTooltipUnderCursor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTooltipUnderCursor (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateTooltipFromKeyboard
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTooltipFromKeyboard (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ClearKeyboardTriggeredTooltip
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearKeyboardTriggeredTooltip (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: TextInputStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TextInputStateChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SelectionBoundsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectionBoundsChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CreateFrameSink
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateFrameSink (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RegisterRenderFrameMetadataObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterRenderFrameMetadataObserver (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_SetCursor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCursor');
          const result = this.impl.setCursor(params.arg_cursor);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTooltipUnderCursor');
          const result = this.impl.updateTooltipUnderCursor(params.arg_tooltip_text, params.arg_text_direction_hint);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTooltipFromKeyboard');
          const result = this.impl.updateTooltipFromKeyboard(params.arg_tooltip_text, params.arg_text_direction_hint, params.arg_bounds);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearKeyboardTriggeredTooltip');
          const result = this.impl.clearKeyboardTriggeredTooltip();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.textInputStateChanged');
          const result = this.impl.textInputStateChanged(params.arg_state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectionBoundsChanged');
          const result = this.impl.selectionBoundsChanged(params.arg_anchor_rect, params.arg_anchor_dir, params.arg_focus_rect, params.arg_focus_dir, params.arg_bounding_box_rect, params.arg_is_anchor_first);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createFrameSink');
          const result = this.impl.createFrameSink(params.arg_compositor_frame_sink_receiver, params.arg_compositor_frame_sink_client, params.arg_render_input_router_client);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerRenderFrameMetadataObserver');
          const result = this.impl.registerRenderFrameMetadataObserver(params.arg_render_frame_metadata_observer_client_receiver, params.arg_render_frame_metadata_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.WidgetHostReceiver = mojo.internal.bindings.blink.mojom.WidgetHostReceiver;

mojo.internal.bindings.blink.mojom.WidgetHostPtr = mojo.internal.bindings.blink.mojom.WidgetHostRemote;
mojo.internal.bindings.blink.mojom.WidgetHostRequest = mojo.internal.bindings.blink.mojom.WidgetHostPendingReceiver;


// Interface: Widget
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Widget_ForceRedraw_ParamsSpec, 'blink.mojom.Widget_ForceRedraw_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Widget_ForceRedraw_ResponseParamsSpec, 'blink.mojom.Widget_ForceRedraw_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Widget_UpdateVisualProperties_ParamsSpec, 'blink.mojom.Widget_UpdateVisualProperties_Params', [
      mojo.internal.StructField('arg_visual_properties', 0, 0, mojo.internal.bindings.blink.mojom.VisualPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Widget_UpdateScreenRects_ParamsSpec, 'blink.mojom.Widget_UpdateScreenRects_Params', [
      mojo.internal.StructField('arg_widget_screen_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_screen_rect', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Widget_UpdateScreenRects_ResponseParamsSpec, 'blink.mojom.Widget_UpdateScreenRects_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Widget_WasHidden_ParamsSpec, 'blink.mojom.Widget_WasHidden_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Widget_WasShown_ParamsSpec, 'blink.mojom.Widget_WasShown_Params', [
      mojo.internal.StructField('arg_record_tab_switch_time_request', 0, 0, mojo.internal.bindings.blink.mojom.RecordContentToVisibleTimeRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_was_evicted', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec, 'blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_Params', [
      mojo.internal.StructField('arg_visible_time_request', 0, 0, mojo.internal.bindings.blink.mojom.RecordContentToVisibleTimeRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec, 'blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec, 'blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_Params', [
      mojo.internal.StructField('arg_browser_client', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.RenderInputRouterClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.WidgetPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.WidgetRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.Widget';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.WidgetPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.WidgetRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  forceRedraw() {
    return this.$.forceRedraw();
  }
  updateVisualProperties(arg_visual_properties) {
    return this.$.updateVisualProperties(arg_visual_properties);
  }
  updateScreenRects(arg_widget_screen_rect, arg_window_screen_rect) {
    return this.$.updateScreenRects(arg_widget_screen_rect, arg_window_screen_rect);
  }
  wasHidden() {
    return this.$.wasHidden();
  }
  wasShown(arg_was_evicted, arg_record_tab_switch_time_request) {
    return this.$.wasShown(arg_was_evicted, arg_record_tab_switch_time_request);
  }
  requestSuccessfulPresentationTimeForNextFrame(arg_visible_time_request) {
    return this.$.requestSuccessfulPresentationTimeForNextFrame(arg_visible_time_request);
  }
  cancelSuccessfulPresentationTimeRequest() {
    return this.$.cancelSuccessfulPresentationTimeRequest();
  }
  setupBrowserRenderInputRouterConnections(arg_browser_client) {
    return this.$.setupBrowserRenderInputRouterConnections(arg_browser_client);
  }
};

mojo.internal.bindings.blink.mojom.WidgetRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Widget', [
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

  forceRedraw() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.Widget_ForceRedraw_ParamsSpec,
      mojo.internal.bindings.blink.mojom.Widget_ForceRedraw_ResponseParamsSpec,
      [],
      false);
  }

  updateVisualProperties(arg_visual_properties) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.Widget_UpdateVisualProperties_ParamsSpec,
      null,
      [arg_visual_properties],
      false);
  }

  updateScreenRects(arg_widget_screen_rect, arg_window_screen_rect) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.Widget_UpdateScreenRects_ParamsSpec,
      mojo.internal.bindings.blink.mojom.Widget_UpdateScreenRects_ResponseParamsSpec,
      [arg_widget_screen_rect, arg_window_screen_rect],
      false);
  }

  wasHidden() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.Widget_WasHidden_ParamsSpec,
      null,
      [],
      false);
  }

  wasShown(arg_was_evicted, arg_record_tab_switch_time_request) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.Widget_WasShown_ParamsSpec,
      null,
      [arg_was_evicted, arg_record_tab_switch_time_request],
      false);
  }

  requestSuccessfulPresentationTimeForNextFrame(arg_visible_time_request) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec,
      null,
      [arg_visible_time_request],
      false);
  }

  cancelSuccessfulPresentationTimeRequest() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec,
      null,
      [],
      false);
  }

  setupBrowserRenderInputRouterConnections(arg_browser_client) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec,
      null,
      [arg_browser_client],
      false);
  }

};

mojo.internal.bindings.blink.mojom.Widget.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.WidgetRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.Widget',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.WidgetReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Widget', [
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
        
        // Try Method 0: ForceRedraw
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_ForceRedraw_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceRedraw (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UpdateVisualProperties
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_UpdateVisualProperties_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateVisualProperties (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateScreenRects
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_UpdateScreenRects_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateScreenRects (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: WasHidden
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_WasHidden_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WasHidden (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: WasShown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_WasShown_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WasShown (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RequestSuccessfulPresentationTimeForNextFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestSuccessfulPresentationTimeForNextFrame (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CancelSuccessfulPresentationTimeRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelSuccessfulPresentationTimeRequest (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetupBrowserRenderInputRouterConnections
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetupBrowserRenderInputRouterConnections (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_ForceRedraw_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceRedraw');
          const result = this.impl.forceRedraw();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.Widget_ForceRedraw_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ForceRedraw FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_UpdateVisualProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateVisualProperties');
          const result = this.impl.updateVisualProperties(params.arg_visual_properties);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_UpdateScreenRects_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateScreenRects');
          const result = this.impl.updateScreenRects(params.arg_widget_screen_rect, params.arg_window_screen_rect);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.Widget_UpdateScreenRects_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateScreenRects FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_WasHidden_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.wasHidden');
          const result = this.impl.wasHidden();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_WasShown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.wasShown');
          const result = this.impl.wasShown(params.arg_was_evicted, params.arg_record_tab_switch_time_request);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestSuccessfulPresentationTimeForNextFrame');
          const result = this.impl.requestSuccessfulPresentationTimeForNextFrame(params.arg_visible_time_request);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelSuccessfulPresentationTimeRequest');
          const result = this.impl.cancelSuccessfulPresentationTimeRequest();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setupBrowserRenderInputRouterConnections');
          const result = this.impl.setupBrowserRenderInputRouterConnections(params.arg_browser_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.WidgetReceiver = mojo.internal.bindings.blink.mojom.WidgetReceiver;

mojo.internal.bindings.blink.mojom.WidgetPtr = mojo.internal.bindings.blink.mojom.WidgetRemote;
mojo.internal.bindings.blink.mojom.WidgetRequest = mojo.internal.bindings.blink.mojom.WidgetPendingReceiver;


// Interface: RenderInputRouterClient
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec, 'blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.WidgetInputHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_host', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_from_viz', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec, 'blink.mojom.RenderInputRouterClient_ShowContextMenu_Params', [
      mojo.internal.StructField('arg_source_type', 0, 0, mojo.internal.bindings.ui.mojom.MenuSourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_location', 8, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec, 'blink.mojom.RenderInputRouterClient_BindInputTargetClient_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.viz.mojom.InputTargetClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.RenderInputRouterClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.RenderInputRouterClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RenderInputRouterClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.RenderInputRouterClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.RenderInputRouterClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getWidgetInputHandler(arg_request, arg_host, arg_from_viz) {
    return this.$.getWidgetInputHandler(arg_request, arg_host, arg_from_viz);
  }
  showContextMenu(arg_source_type, arg_location) {
    return this.$.showContextMenu(arg_source_type, arg_location);
  }
  bindInputTargetClient(arg_host) {
    return this.$.bindInputTargetClient(arg_host);
  }
};

mojo.internal.bindings.blink.mojom.RenderInputRouterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RenderInputRouterClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getWidgetInputHandler(arg_request, arg_host, arg_from_viz) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec,
      null,
      [arg_request, arg_host, arg_from_viz],
      false);
  }

  showContextMenu(arg_source_type, arg_location) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec,
      null,
      [arg_source_type, arg_location],
      false);
  }

  bindInputTargetClient(arg_host) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec,
      null,
      [arg_host],
      false);
  }

};

mojo.internal.bindings.blink.mojom.RenderInputRouterClient.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.RenderInputRouterClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RenderInputRouterClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.RenderInputRouterClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RenderInputRouterClient', [
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
        
        // Try Method 0: GetWidgetInputHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWidgetInputHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ShowContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowContextMenu (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindInputTargetClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindInputTargetClient (2)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWidgetInputHandler');
          const result = this.impl.getWidgetInputHandler(params.arg_request, params.arg_host, params.arg_from_viz);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showContextMenu');
          const result = this.impl.showContextMenu(params.arg_source_type, params.arg_location);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindInputTargetClient');
          const result = this.impl.bindInputTargetClient(params.arg_host);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.RenderInputRouterClientReceiver = mojo.internal.bindings.blink.mojom.RenderInputRouterClientReceiver;

mojo.internal.bindings.blink.mojom.RenderInputRouterClientPtr = mojo.internal.bindings.blink.mojom.RenderInputRouterClientRemote;
mojo.internal.bindings.blink.mojom.RenderInputRouterClientRequest = mojo.internal.bindings.blink.mojom.RenderInputRouterClientPendingReceiver;

