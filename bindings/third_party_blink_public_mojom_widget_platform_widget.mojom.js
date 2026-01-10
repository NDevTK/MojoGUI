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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var viz = viz || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.WidgetCompositor = {};
blink.mojom.WidgetCompositor.$interfaceName = 'blink.mojom.WidgetCompositor';
blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec = { $: {} };
blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParamsSpec = { $: {} };
blink.mojom.WidgetHost = {};
blink.mojom.WidgetHost.$interfaceName = 'blink.mojom.WidgetHost';
blink.mojom.WidgetHost_SetCursor_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec = { $: {} };
blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec = { $: {} };
blink.mojom.Widget = {};
blink.mojom.Widget.$interfaceName = 'blink.mojom.Widget';
blink.mojom.Widget_ForceRedraw_ParamsSpec = { $: {} };
blink.mojom.Widget_ForceRedraw_ResponseParamsSpec = { $: {} };
blink.mojom.Widget_UpdateVisualProperties_ParamsSpec = { $: {} };
blink.mojom.Widget_UpdateScreenRects_ParamsSpec = { $: {} };
blink.mojom.Widget_UpdateScreenRects_ResponseParamsSpec = { $: {} };
blink.mojom.Widget_WasHidden_ParamsSpec = { $: {} };
blink.mojom.Widget_WasShown_ParamsSpec = { $: {} };
blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec = { $: {} };
blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec = { $: {} };
blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec = { $: {} };
blink.mojom.RenderInputRouterClient = {};
blink.mojom.RenderInputRouterClient.$interfaceName = 'blink.mojom.RenderInputRouterClient';
blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec = { $: {} };
blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec = { $: {} };
blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec = { $: {} };

// Interface: WidgetCompositor
mojo.internal.Struct(
    blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec, 'blink.mojom.WidgetCompositor_VisualStateRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParamsSpec, 'blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParams', [
    ],
    [[0, 8]]);

blink.mojom.WidgetCompositorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WidgetCompositorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetCompositor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WidgetCompositorPendingReceiver,
      handle);
    this.$ = new blink.mojom.WidgetCompositorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WidgetCompositorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WidgetCompositor', [
      { explicit: null },
    ]);
  }

  visualStateRequest() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec,
      blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParamsSpec,
      [],
      false);
  }

};

blink.mojom.WidgetCompositor.getRemote = function() {
  let remote = new blink.mojom.WidgetCompositorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetCompositor',
    'context');
  return remote.$;
};

blink.mojom.WidgetCompositorReceiver = class {
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
             decoder.decodeStructInline(blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.WidgetCompositor_VisualStateRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.visualStateRequest');
          const result = this.impl.visualStateRequest();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WidgetCompositor_VisualStateRequest_ResponseParamsSpec);
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

blink.mojom.WidgetCompositorReceiver = blink.mojom.WidgetCompositorReceiver;

blink.mojom.WidgetCompositorPtr = blink.mojom.WidgetCompositorRemote;
blink.mojom.WidgetCompositorRequest = blink.mojom.WidgetCompositorPendingReceiver;


// Interface: WidgetHost
mojo.internal.Struct(
    blink.mojom.WidgetHost_SetCursor_ParamsSpec, 'blink.mojom.WidgetHost_SetCursor_Params', [
      mojo.internal.StructField('cursor', 0, 0, ui.mojom.CursorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec, 'blink.mojom.WidgetHost_UpdateTooltipUnderCursor_Params', [
      mojo.internal.StructField('tooltip_text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_direction_hint', 8, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec, 'blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_Params', [
      mojo.internal.StructField('tooltip_text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_direction_hint', 8, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec, 'blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec, 'blink.mojom.WidgetHost_TextInputStateChanged_Params', [
      mojo.internal.StructField('state', 0, 0, ui.mojom.TextInputStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec, 'blink.mojom.WidgetHost_SelectionBoundsChanged_Params', [
      mojo.internal.StructField('anchor_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_dir', 8, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('focus_rect', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('focus_dir', 24, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounding_box_rect', 32, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_anchor_first', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec, 'blink.mojom.WidgetHost_CreateFrameSink_Params', [
      mojo.internal.StructField('compositor_frame_sink_receiver', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.CompositorFrameSinkRemote), null, false, 0, undefined),
      mojo.internal.StructField('compositor_frame_sink_client', 8, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositorFrameSinkClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('render_input_router_client', 16, 0, mojo.internal.InterfaceProxy(blink.mojom.RenderInputRouterClientRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec, 'blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_Params', [
      mojo.internal.StructField('render_frame_metadata_observer_client_receiver', 0, 0, mojo.internal.InterfaceRequest(cc.mojom.RenderFrameMetadataObserverClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('render_frame_metadata_observer', 8, 0, mojo.internal.InterfaceProxy(cc.mojom.RenderFrameMetadataObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.WidgetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WidgetHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WidgetHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.WidgetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WidgetHostRemoteCallHandler = class {
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

  setCursor(cursor) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WidgetHost_SetCursor_ParamsSpec,
      null,
      [cursor],
      false);
  }

  updateTooltipUnderCursor(tooltip_text, text_direction_hint) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec,
      null,
      [tooltip_text, text_direction_hint],
      false);
  }

  updateTooltipFromKeyboard(tooltip_text, text_direction_hint, bounds) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec,
      null,
      [tooltip_text, text_direction_hint, bounds],
      false);
  }

  clearKeyboardTriggeredTooltip() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec,
      null,
      [],
      false);
  }

  textInputStateChanged(state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec,
      null,
      [state],
      false);
  }

  selectionBoundsChanged(anchor_rect, anchor_dir, focus_rect, focus_dir, bounding_box_rect, is_anchor_first) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec,
      null,
      [anchor_rect, anchor_dir, focus_rect, focus_dir, bounding_box_rect, is_anchor_first],
      false);
  }

  createFrameSink(compositor_frame_sink_receiver, compositor_frame_sink_client, render_input_router_client) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec,
      null,
      [compositor_frame_sink_receiver, compositor_frame_sink_client, render_input_router_client],
      false);
  }

  registerRenderFrameMetadataObserver(render_frame_metadata_observer_client_receiver, render_frame_metadata_observer) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec,
      null,
      [render_frame_metadata_observer_client_receiver, render_frame_metadata_observer],
      false);
  }

};

blink.mojom.WidgetHost.getRemote = function() {
  let remote = new blink.mojom.WidgetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetHost',
    'context');
  return remote.$;
};

blink.mojom.WidgetHostReceiver = class {
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
             decoder.decodeStructInline(blink.mojom.WidgetHost_SetCursor_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.WidgetHost_SetCursor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCursor');
          const result = this.impl.setCursor(params.cursor);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetHost_UpdateTooltipUnderCursor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTooltipUnderCursor');
          const result = this.impl.updateTooltipUnderCursor(params.tooltip_text, params.text_direction_hint);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetHost_UpdateTooltipFromKeyboard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTooltipFromKeyboard');
          const result = this.impl.updateTooltipFromKeyboard(params.tooltip_text, params.text_direction_hint, params.bounds);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetHost_ClearKeyboardTriggeredTooltip_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearKeyboardTriggeredTooltip');
          const result = this.impl.clearKeyboardTriggeredTooltip();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetHost_TextInputStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.textInputStateChanged');
          const result = this.impl.textInputStateChanged(params.state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetHost_SelectionBoundsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectionBoundsChanged');
          const result = this.impl.selectionBoundsChanged(params.anchor_rect, params.anchor_dir, params.focus_rect, params.focus_dir, params.bounding_box_rect, params.is_anchor_first);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetHost_CreateFrameSink_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createFrameSink');
          const result = this.impl.createFrameSink(params.compositor_frame_sink_receiver, params.compositor_frame_sink_client, params.render_input_router_client);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetHost_RegisterRenderFrameMetadataObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerRenderFrameMetadataObserver');
          const result = this.impl.registerRenderFrameMetadataObserver(params.render_frame_metadata_observer_client_receiver, params.render_frame_metadata_observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.WidgetHostReceiver = blink.mojom.WidgetHostReceiver;

blink.mojom.WidgetHostPtr = blink.mojom.WidgetHostRemote;
blink.mojom.WidgetHostRequest = blink.mojom.WidgetHostPendingReceiver;


// Interface: Widget
mojo.internal.Struct(
    blink.mojom.Widget_ForceRedraw_ParamsSpec, 'blink.mojom.Widget_ForceRedraw_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Widget_ForceRedraw_ResponseParamsSpec, 'blink.mojom.Widget_ForceRedraw_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Widget_UpdateVisualProperties_ParamsSpec, 'blink.mojom.Widget_UpdateVisualProperties_Params', [
      mojo.internal.StructField('visual_properties', 0, 0, blink.mojom.VisualPropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Widget_UpdateScreenRects_ParamsSpec, 'blink.mojom.Widget_UpdateScreenRects_Params', [
      mojo.internal.StructField('widget_screen_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('window_screen_rect', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.Widget_UpdateScreenRects_ResponseParamsSpec, 'blink.mojom.Widget_UpdateScreenRects_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Widget_WasHidden_ParamsSpec, 'blink.mojom.Widget_WasHidden_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Widget_WasShown_ParamsSpec, 'blink.mojom.Widget_WasShown_Params', [
      mojo.internal.StructField('record_tab_switch_time_request', 0, 0, blink.mojom.RecordContentToVisibleTimeRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('was_evicted', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec, 'blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_Params', [
      mojo.internal.StructField('visible_time_request', 0, 0, blink.mojom.RecordContentToVisibleTimeRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec, 'blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec, 'blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_Params', [
      mojo.internal.StructField('browser_client', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.RenderInputRouterClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.WidgetPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WidgetRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.Widget';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WidgetPendingReceiver,
      handle);
    this.$ = new blink.mojom.WidgetRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WidgetRemoteCallHandler = class {
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
      blink.mojom.Widget_ForceRedraw_ParamsSpec,
      blink.mojom.Widget_ForceRedraw_ResponseParamsSpec,
      [],
      false);
  }

  updateVisualProperties(visual_properties) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.Widget_UpdateVisualProperties_ParamsSpec,
      null,
      [visual_properties],
      false);
  }

  updateScreenRects(widget_screen_rect, window_screen_rect) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.Widget_UpdateScreenRects_ParamsSpec,
      blink.mojom.Widget_UpdateScreenRects_ResponseParamsSpec,
      [widget_screen_rect, window_screen_rect],
      false);
  }

  wasHidden() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.Widget_WasHidden_ParamsSpec,
      null,
      [],
      false);
  }

  wasShown(was_evicted, record_tab_switch_time_request) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.Widget_WasShown_ParamsSpec,
      null,
      [was_evicted, record_tab_switch_time_request],
      false);
  }

  requestSuccessfulPresentationTimeForNextFrame(visible_time_request) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec,
      null,
      [visible_time_request],
      false);
  }

  cancelSuccessfulPresentationTimeRequest() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec,
      null,
      [],
      false);
  }

  setupBrowserRenderInputRouterConnections(browser_client) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec,
      null,
      [browser_client],
      false);
  }

};

blink.mojom.Widget.getRemote = function() {
  let remote = new blink.mojom.WidgetRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.Widget',
    'context');
  return remote.$;
};

blink.mojom.WidgetReceiver = class {
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
             decoder.decodeStructInline(blink.mojom.Widget_ForceRedraw_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.Widget_UpdateVisualProperties_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.Widget_UpdateScreenRects_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.Widget_WasHidden_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.Widget_WasShown_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.Widget_ForceRedraw_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceRedraw');
          const result = this.impl.forceRedraw();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.Widget_ForceRedraw_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Widget_UpdateVisualProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateVisualProperties');
          const result = this.impl.updateVisualProperties(params.visual_properties);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Widget_UpdateScreenRects_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateScreenRects');
          const result = this.impl.updateScreenRects(params.widget_screen_rect, params.window_screen_rect);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.Widget_UpdateScreenRects_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Widget_WasHidden_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.wasHidden');
          const result = this.impl.wasHidden();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Widget_WasShown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.wasShown');
          const result = this.impl.wasShown(params.was_evicted, params.record_tab_switch_time_request);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Widget_RequestSuccessfulPresentationTimeForNextFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestSuccessfulPresentationTimeForNextFrame');
          const result = this.impl.requestSuccessfulPresentationTimeForNextFrame(params.visible_time_request);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Widget_CancelSuccessfulPresentationTimeRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelSuccessfulPresentationTimeRequest');
          const result = this.impl.cancelSuccessfulPresentationTimeRequest();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.Widget_SetupBrowserRenderInputRouterConnections_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setupBrowserRenderInputRouterConnections');
          const result = this.impl.setupBrowserRenderInputRouterConnections(params.browser_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.WidgetReceiver = blink.mojom.WidgetReceiver;

blink.mojom.WidgetPtr = blink.mojom.WidgetRemote;
blink.mojom.WidgetRequest = blink.mojom.WidgetPendingReceiver;


// Interface: RenderInputRouterClient
mojo.internal.Struct(
    blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec, 'blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_Params', [
      mojo.internal.StructField('request', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.WidgetInputHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.WidgetInputHandlerHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('from_viz', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec, 'blink.mojom.RenderInputRouterClient_ShowContextMenu_Params', [
      mojo.internal.StructField('source_type', 0, 0, ui.mojom.MenuSourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('location', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec, 'blink.mojom.RenderInputRouterClient_BindInputTargetClient_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceRequest(viz.mojom.InputTargetClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.RenderInputRouterClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RenderInputRouterClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RenderInputRouterClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RenderInputRouterClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.RenderInputRouterClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RenderInputRouterClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RenderInputRouterClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getWidgetInputHandler(request, host, from_viz) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec,
      null,
      [request, host, from_viz],
      false);
  }

  showContextMenu(source_type, location) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec,
      null,
      [source_type, location],
      false);
  }

  bindInputTargetClient(host) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec,
      null,
      [host],
      false);
  }

};

blink.mojom.RenderInputRouterClient.getRemote = function() {
  let remote = new blink.mojom.RenderInputRouterClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RenderInputRouterClient',
    'context');
  return remote.$;
};

blink.mojom.RenderInputRouterClientReceiver = class {
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
             decoder.decodeStructInline(blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.RenderInputRouterClient_GetWidgetInputHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWidgetInputHandler');
          const result = this.impl.getWidgetInputHandler(params.request, params.host, params.from_viz);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RenderInputRouterClient_ShowContextMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showContextMenu');
          const result = this.impl.showContextMenu(params.source_type, params.location);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RenderInputRouterClient_BindInputTargetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindInputTargetClient');
          const result = this.impl.bindInputTargetClient(params.host);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.RenderInputRouterClientReceiver = blink.mojom.RenderInputRouterClientReceiver;

blink.mojom.RenderInputRouterClientPtr = blink.mojom.RenderInputRouterClientRemote;
blink.mojom.RenderInputRouterClientRequest = blink.mojom.RenderInputRouterClientPendingReceiver;

