// Auto-generated MojoJS binding
 // Source: chromium_src/content/common/render_widget_host_ns_view.mojom
 // Module: remote_cocoa.mojom

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
 

 mojo.internal.bindings.remote_cocoa = mojo.internal.bindings.remote_cocoa || {};
mojo.internal.bindings.remote_cocoa.mojom = mojo.internal.bindings.remote_cocoa.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.display = mojo.internal.bindings.display || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.remote_cocoa.mojom.PopupMenuSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunner = {};
mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunner.$interfaceName = 'remote_cocoa.mojom.PopupMenuRunner';
mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunner_Hide_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView = {};
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView.$interfaceName = 'remote_cocoa.mojom.RenderWidgetHostNSView';
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_InitAsPopup_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetParentWebContentsNSView_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisableDisplay_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_MakeFirstResponder_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetBounds_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCALayerParams_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetBackgroundColor_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetVisible_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTooltipText_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTextInputState_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTextSelection_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCompositionRangeInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_CancelComposition_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetShowingContextMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayCursor_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLocked_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLockedUnacceleratedMovement_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlayForSelection_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlay_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_LockKeyboard_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_UnlockKeyboard_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_Destroy_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_GestureScrollEventAck_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DidOverscroll_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost = {};
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost.$interfaceName = 'remote_cocoa.mojom.RenderWidgetHostNSViewHost';
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RequestShutdown_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnFirstResponderChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowIsKeyChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnBoundsInWindowChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowFrameInScreenChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnScreenInfosChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_BeginKeyboardEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_EndKeyboardEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardKeyboardEventWithCommands_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessMouseEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessTouchEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessWheelEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardMouseEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardWheelEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_PinchEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SmartMagnifyEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeSetComposition_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCommitText_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeFinishComposingText_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCancelCompositionFromCocoa_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayAtPoint_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayFromRange_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ExecuteEditCommand_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Undo_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Redo_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Cut_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Copy_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_CopyToFindPboard_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_CenterSelection_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Paste_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_PasteAndMatchStyle_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SelectAll_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_StartSpeaking_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_StopSpeaking_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SetRemoteAccessibilityWindowToken_ParamsSpec = { $: {} };

// Struct: PopupMenu
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.PopupMenuSpec, 'remote_cocoa.mojom.PopupMenu', [
      mojo.internal.StructField('arg_items', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.MenuItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_item_font_size', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_receiver', 24, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_selected_item', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_right_aligned', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: PopupMenuRunner
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunner_Hide_ParamsSpec, 'remote_cocoa.mojom.PopupMenuRunner_Hide_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.PopupMenuRunner';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  hide() {
    return this.$.hide();
  }
};

mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PopupMenuRunner', [
      { explicit: null },
    ]);
  }

  hide() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunner_Hide_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunner.getRemote = function() {
  let remote = new mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.PopupMenuRunner',
    'context');
  return remote.$;
};

mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PopupMenuRunner', [
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
        
        // Try Method 0: Hide
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunner_Hide_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Hide (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunner_Hide_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hide');
          const result = this.impl.hide();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerReceiver = mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerReceiver;

mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerPtr = mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerRemote;
mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerRequest = mojo.internal.bindings.remote_cocoa.mojom.PopupMenuRunnerPendingReceiver;


// Interface: RenderWidgetHostNSView
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_InitAsPopup_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_InitAsPopup_Params', [
      mojo.internal.StructField('arg_content_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_popup_parent_ns_view_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetParentWebContentsNSView_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetParentWebContentsNSView_Params', [
      mojo.internal.StructField('arg_parent_ns_view_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisableDisplay_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_DisableDisplay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_MakeFirstResponder_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_MakeFirstResponder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetBounds_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetBounds_Params', [
      mojo.internal.StructField('arg_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCALayerParams_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetCALayerParams_Params', [
      mojo.internal.StructField('arg_ca_layer_params', 0, 0, mojo.internal.bindings.gfx.mojom.CALayerParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetBackgroundColor_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetBackgroundColor_Params', [
      mojo.internal.StructField('arg_color', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetVisible_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetVisible_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTooltipText_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetTooltipText_Params', [
      mojo.internal.StructField('arg_display_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTextInputState_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetTextInputState_Params', [
      mojo.internal.StructField('arg_text_input_type', 0, 0, mojo.internal.bindings.ui.mojom.TextInputTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_flags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTextSelection_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetTextSelection_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_range', 16, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCompositionRangeInfo_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetCompositionRangeInfo_Params', [
      mojo.internal.StructField('arg_range', 0, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_CancelComposition_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_CancelComposition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetShowingContextMenu_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetShowingContextMenu_Params', [
      mojo.internal.StructField('arg_showing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayCursor_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_DisplayCursor_Params', [
      mojo.internal.StructField('arg_cursor', 0, 0, mojo.internal.bindings.ui.mojom.CursorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLocked_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLocked_Params', [
      mojo.internal.StructField('arg_locked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLockedUnacceleratedMovement_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLockedUnacceleratedMovement_Params', [
      mojo.internal.StructField('arg_unaccelerated_movement', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlayForSelection_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlayForSelection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlay_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlay_Params', [
      mojo.internal.StructField('arg_attributed_string', 0, 0, mojo.internal.bindings.ui.mojom.AttributedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_baseline_point', 8, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_LockKeyboard_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_LockKeyboard_Params', [
      mojo.internal.StructField('arg_dom_codes', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_UnlockKeyboard_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_UnlockKeyboard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_Params', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_paths', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.blink.mojom.ShareErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_Destroy_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_Destroy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_GestureScrollEventAck_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_GestureScrollEventAck_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.blink.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_consumed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DidOverscroll_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_DidOverscroll_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.blink.mojom.DidOverscrollParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_Params', [
      mojo.internal.StructField('arg_menu', 0, 0, mojo.internal.bindings.mojo.internal.bindings.remote_cocoa.mojom.PopupMenuSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ResponseParams', [
      mojo.internal.StructField('arg_selected_item_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_selected_item_$flag', originalFieldName: 'arg_selected_item' }),
      mojo.internal.StructField('arg_selected_item_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_selected_item_$value', originalFieldName: 'arg_selected_item' }),
    ],
    [[0, 16]]);

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.RenderWidgetHostNSView';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  initAsPopup(arg_content_rect, arg_popup_parent_ns_view_id) {
    return this.$.initAsPopup(arg_content_rect, arg_popup_parent_ns_view_id);
  }
  setParentWebContentsNSView(arg_parent_ns_view_id) {
    return this.$.setParentWebContentsNSView(arg_parent_ns_view_id);
  }
  disableDisplay() {
    return this.$.disableDisplay();
  }
  makeFirstResponder() {
    return this.$.makeFirstResponder();
  }
  setBounds(arg_rect) {
    return this.$.setBounds(arg_rect);
  }
  setCALayerParams(arg_ca_layer_params) {
    return this.$.setCALayerParams(arg_ca_layer_params);
  }
  setBackgroundColor(arg_color) {
    return this.$.setBackgroundColor(arg_color);
  }
  setVisible(arg_visible) {
    return this.$.setVisible(arg_visible);
  }
  setTooltipText(arg_display_text) {
    return this.$.setTooltipText(arg_display_text);
  }
  setTextInputState(arg_text_input_type, arg_flags) {
    return this.$.setTextInputState(arg_text_input_type, arg_flags);
  }
  setTextSelection(arg_text, arg_offset, arg_range) {
    return this.$.setTextSelection(arg_text, arg_offset, arg_range);
  }
  setCompositionRangeInfo(arg_range) {
    return this.$.setCompositionRangeInfo(arg_range);
  }
  cancelComposition() {
    return this.$.cancelComposition();
  }
  setShowingContextMenu(arg_showing) {
    return this.$.setShowingContextMenu(arg_showing);
  }
  displayCursor(arg_cursor) {
    return this.$.displayCursor(arg_cursor);
  }
  setCursorLocked(arg_locked) {
    return this.$.setCursorLocked(arg_locked);
  }
  setCursorLockedUnacceleratedMovement(arg_unaccelerated_movement) {
    return this.$.setCursorLockedUnacceleratedMovement(arg_unaccelerated_movement);
  }
  showDictionaryOverlayForSelection() {
    return this.$.showDictionaryOverlayForSelection();
  }
  showDictionaryOverlay(arg_attributed_string, arg_baseline_point) {
    return this.$.showDictionaryOverlay(arg_attributed_string, arg_baseline_point);
  }
  lockKeyboard(arg_dom_codes) {
    return this.$.lockKeyboard(arg_dom_codes);
  }
  unlockKeyboard() {
    return this.$.unlockKeyboard();
  }
  showSharingServicePicker(arg_title, arg_text, arg_url, arg_file_paths) {
    return this.$.showSharingServicePicker(arg_title, arg_text, arg_url, arg_file_paths);
  }
  destroy() {
    return this.$.destroy();
  }
  gestureScrollEventAck(arg_event, arg_consumed) {
    return this.$.gestureScrollEventAck(arg_event, arg_consumed);
  }
  didOverscroll(arg_params) {
    return this.$.didOverscroll(arg_params);
  }
  displayPopupMenu(arg_menu) {
    return this.$.displayPopupMenu(arg_menu);
  }
};

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RenderWidgetHostNSView', [
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

  initAsPopup(arg_content_rect, arg_popup_parent_ns_view_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_InitAsPopup_ParamsSpec,
      null,
      [arg_content_rect, arg_popup_parent_ns_view_id],
      false);
  }

  setParentWebContentsNSView(arg_parent_ns_view_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetParentWebContentsNSView_ParamsSpec,
      null,
      [arg_parent_ns_view_id],
      false);
  }

  disableDisplay() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisableDisplay_ParamsSpec,
      null,
      [],
      false);
  }

  makeFirstResponder() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_MakeFirstResponder_ParamsSpec,
      null,
      [],
      false);
  }

  setBounds(arg_rect) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetBounds_ParamsSpec,
      null,
      [arg_rect],
      false);
  }

  setCALayerParams(arg_ca_layer_params) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCALayerParams_ParamsSpec,
      null,
      [arg_ca_layer_params],
      false);
  }

  setBackgroundColor(arg_color) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetBackgroundColor_ParamsSpec,
      null,
      [arg_color],
      false);
  }

  setVisible(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetVisible_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  setTooltipText(arg_display_text) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTooltipText_ParamsSpec,
      null,
      [arg_display_text],
      false);
  }

  setTextInputState(arg_text_input_type, arg_flags) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTextInputState_ParamsSpec,
      null,
      [arg_text_input_type, arg_flags],
      false);
  }

  setTextSelection(arg_text, arg_offset, arg_range) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTextSelection_ParamsSpec,
      null,
      [arg_text, arg_offset, arg_range],
      false);
  }

  setCompositionRangeInfo(arg_range) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCompositionRangeInfo_ParamsSpec,
      null,
      [arg_range],
      false);
  }

  cancelComposition() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_CancelComposition_ParamsSpec,
      null,
      [],
      false);
  }

  setShowingContextMenu(arg_showing) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetShowingContextMenu_ParamsSpec,
      null,
      [arg_showing],
      false);
  }

  displayCursor(arg_cursor) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayCursor_ParamsSpec,
      null,
      [arg_cursor],
      false);
  }

  setCursorLocked(arg_locked) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLocked_ParamsSpec,
      null,
      [arg_locked],
      false);
  }

  setCursorLockedUnacceleratedMovement(arg_unaccelerated_movement) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLockedUnacceleratedMovement_ParamsSpec,
      null,
      [arg_unaccelerated_movement],
      false);
  }

  showDictionaryOverlayForSelection() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlayForSelection_ParamsSpec,
      null,
      [],
      false);
  }

  showDictionaryOverlay(arg_attributed_string, arg_baseline_point) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlay_ParamsSpec,
      null,
      [arg_attributed_string, arg_baseline_point],
      false);
  }

  lockKeyboard(arg_dom_codes) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_LockKeyboard_ParamsSpec,
      null,
      [arg_dom_codes],
      false);
  }

  unlockKeyboard() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_UnlockKeyboard_ParamsSpec,
      null,
      [],
      false);
  }

  showSharingServicePicker(arg_title, arg_text, arg_url, arg_file_paths) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ResponseParamsSpec,
      [arg_title, arg_text, arg_url, arg_file_paths],
      false);
  }

  destroy() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_Destroy_ParamsSpec,
      null,
      [],
      false);
  }

  gestureScrollEventAck(arg_event, arg_consumed) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_GestureScrollEventAck_ParamsSpec,
      null,
      [arg_event, arg_consumed],
      false);
  }

  didOverscroll(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DidOverscroll_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  displayPopupMenu(arg_menu) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ResponseParamsSpec,
      [arg_menu],
      false);
  }

};

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView.getRemote = function() {
  let remote = new mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.RenderWidgetHostNSView',
    'context');
  return remote.$;
};

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RenderWidgetHostNSView', [
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
        
        // Try Method 0: InitAsPopup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_InitAsPopup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitAsPopup (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetParentWebContentsNSView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetParentWebContentsNSView_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetParentWebContentsNSView (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DisableDisplay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisableDisplay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableDisplay (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: MakeFirstResponder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_MakeFirstResponder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MakeFirstResponder (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetBounds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetBounds_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBounds (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetCALayerParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCALayerParams_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCALayerParams (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetBackgroundColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetBackgroundColor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundColor (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetVisible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVisible (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetTooltipText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTooltipText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTooltipText (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetTextInputState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTextInputState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTextInputState (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetTextSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTextSelection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTextSelection (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetCompositionRangeInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCompositionRangeInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCompositionRangeInfo (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: CancelComposition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_CancelComposition_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelComposition (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetShowingContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetShowingContextMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetShowingContextMenu (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: DisplayCursor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayCursor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayCursor (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetCursorLocked
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLocked_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCursorLocked (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetCursorLockedUnacceleratedMovement
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLockedUnacceleratedMovement_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCursorLockedUnacceleratedMovement (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: ShowDictionaryOverlayForSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlayForSelection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowDictionaryOverlayForSelection (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: ShowDictionaryOverlay
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlay_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowDictionaryOverlay (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: LockKeyboard
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_LockKeyboard_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LockKeyboard (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: UnlockKeyboard
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_UnlockKeyboard_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnlockKeyboard (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: ShowSharingServicePicker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowSharingServicePicker (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: Destroy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_Destroy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Destroy (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: GestureScrollEventAck
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_GestureScrollEventAck_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GestureScrollEventAck (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: DidOverscroll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DidOverscroll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidOverscroll (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: DisplayPopupMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayPopupMenu (25)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_InitAsPopup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initAsPopup');
          const result = this.impl.initAsPopup(params.arg_content_rect, params.arg_popup_parent_ns_view_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetParentWebContentsNSView_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setParentWebContentsNSView');
          const result = this.impl.setParentWebContentsNSView(params.arg_parent_ns_view_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisableDisplay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableDisplay');
          const result = this.impl.disableDisplay();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_MakeFirstResponder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.makeFirstResponder');
          const result = this.impl.makeFirstResponder();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetBounds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBounds');
          const result = this.impl.setBounds(params.arg_rect);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCALayerParams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCALayerParams');
          const result = this.impl.setCALayerParams(params.arg_ca_layer_params);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetBackgroundColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundColor');
          const result = this.impl.setBackgroundColor(params.arg_color);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetVisible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVisible');
          const result = this.impl.setVisible(params.arg_visible);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTooltipText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTooltipText');
          const result = this.impl.setTooltipText(params.arg_display_text);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTextInputState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTextInputState');
          const result = this.impl.setTextInputState(params.arg_text_input_type, params.arg_flags);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetTextSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTextSelection');
          const result = this.impl.setTextSelection(params.arg_text, params.arg_offset, params.arg_range);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCompositionRangeInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCompositionRangeInfo');
          const result = this.impl.setCompositionRangeInfo(params.arg_range);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_CancelComposition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelComposition');
          const result = this.impl.cancelComposition();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetShowingContextMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setShowingContextMenu');
          const result = this.impl.setShowingContextMenu(params.arg_showing);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayCursor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.displayCursor');
          const result = this.impl.displayCursor(params.arg_cursor);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLocked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCursorLocked');
          const result = this.impl.setCursorLocked(params.arg_locked);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLockedUnacceleratedMovement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCursorLockedUnacceleratedMovement');
          const result = this.impl.setCursorLockedUnacceleratedMovement(params.arg_unaccelerated_movement);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlayForSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showDictionaryOverlayForSelection');
          const result = this.impl.showDictionaryOverlayForSelection();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlay_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showDictionaryOverlay');
          const result = this.impl.showDictionaryOverlay(params.arg_attributed_string, params.arg_baseline_point);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_LockKeyboard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.lockKeyboard');
          const result = this.impl.lockKeyboard(params.arg_dom_codes);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_UnlockKeyboard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unlockKeyboard');
          const result = this.impl.unlockKeyboard();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showSharingServicePicker');
          const result = this.impl.showSharingServicePicker(params.arg_title, params.arg_text, params.arg_url, params.arg_file_paths);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShowSharingServicePicker FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_Destroy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.destroy');
          const result = this.impl.destroy();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_GestureScrollEventAck_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.gestureScrollEventAck');
          const result = this.impl.gestureScrollEventAck(params.arg_event, params.arg_consumed);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DidOverscroll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didOverscroll');
          const result = this.impl.didOverscroll(params.arg_params);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.displayPopupMenu');
          const result = this.impl.displayPopupMenu(params.arg_menu);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DisplayPopupMenu FAILED:', e));
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

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewReceiver = mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewReceiver;

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewPtr = mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewRemote;
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewRequest = mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewPendingReceiver;


// Interface: RenderWidgetHostNSViewHost
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ResponseParams', [
      mojo.internal.StructField('arg_is_for_main_frame', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RequestShutdown_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_RequestShutdown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnFirstResponderChanged_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnFirstResponderChanged_Params', [
      mojo.internal.StructField('arg_is_first_responder', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowIsKeyChanged_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowIsKeyChanged_Params', [
      mojo.internal.StructField('arg_is_key', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnBoundsInWindowChanged_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnBoundsInWindowChanged_Params', [
      mojo.internal.StructField('arg_view_bounds_in_window_dip', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_attached_to_window', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowFrameInScreenChanged_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowFrameInScreenChanged_Params', [
      mojo.internal.StructField('arg_window_frame_in_screen_dip', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnScreenInfosChanged_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnScreenInfosChanged_Params', [
      mojo.internal.StructField('arg_screen_infos', 0, 0, mojo.internal.bindings.display.mojom.ScreenInfosSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_BeginKeyboardEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_BeginKeyboardEvent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_EndKeyboardEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_EndKeyboardEvent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardKeyboardEventWithCommands_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardKeyboardEventWithCommands_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.blink.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_native_event_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_commands', 16, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.EditCommandSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_skip_if_unhandled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessMouseEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessMouseEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessTouchEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessTouchEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessWheelEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessWheelEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardMouseEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardMouseEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardWheelEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardWheelEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_PinchEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_PinchEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.blink.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_synthetically_injected', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SmartMagnifyEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SmartMagnifyEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeSetComposition_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeSetComposition_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ime_text_spans', 8, 0, mojo.internal.Array(mojo.internal.bindings.ui.mojom.ImeTextSpanSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_replacement_range', 16, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_selection_start', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_selection_end', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCommitText_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCommitText_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_replacement_range', 8, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeFinishComposingText_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeFinishComposingText_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCancelCompositionFromCocoa_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCancelCompositionFromCocoa_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayAtPoint_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayAtPoint_Params', [
      mojo.internal.StructField('arg_root_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayFromRange_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayFromRange_Params', [
      mojo.internal.StructField('arg_range', 0, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_Params', [
      mojo.internal.StructField('arg_root_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ResponseParams', [
      mojo.internal.StructField('arg_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_Params', [
      mojo.internal.StructField('arg_requested_range', 0, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ResponseParams', [
      mojo.internal.StructField('arg_out_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_out_actual_range', 8, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ExecuteEditCommand_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ExecuteEditCommand_Params', [
      mojo.internal.StructField('arg_command', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Undo_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_Undo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Redo_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_Redo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Cut_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_Cut_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Copy_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_Copy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_CopyToFindPboard_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_CopyToFindPboard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_CenterSelection_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_CenterSelection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Paste_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_Paste_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_PasteAndMatchStyle_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_PasteAndMatchStyle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SelectAll_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SelectAll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_StartSpeaking_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_StartSpeaking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_StopSpeaking_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_StopSpeaking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ResponseParams', [
      mojo.internal.StructField('arg_is_speaking', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ResponseParams', [
      mojo.internal.StructField('arg_host_pid', 0, 0, mojo.internal.bindings.mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_element_token', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SetRemoteAccessibilityWindowToken_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SetRemoteAccessibilityWindowToken_Params', [
      mojo.internal.StructField('arg_window_token', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHostRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.RenderWidgetHostNSViewHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  syncIsWidgetForMainFrame() {
    return this.$.syncIsWidgetForMainFrame();
  }
  requestShutdown() {
    return this.$.requestShutdown();
  }
  onFirstResponderChanged(arg_is_first_responder) {
    return this.$.onFirstResponderChanged(arg_is_first_responder);
  }
  onWindowIsKeyChanged(arg_is_key) {
    return this.$.onWindowIsKeyChanged(arg_is_key);
  }
  onBoundsInWindowChanged(arg_view_bounds_in_window_dip, arg_attached_to_window) {
    return this.$.onBoundsInWindowChanged(arg_view_bounds_in_window_dip, arg_attached_to_window);
  }
  onWindowFrameInScreenChanged(arg_window_frame_in_screen_dip) {
    return this.$.onWindowFrameInScreenChanged(arg_window_frame_in_screen_dip);
  }
  onScreenInfosChanged(arg_screen_infos) {
    return this.$.onScreenInfosChanged(arg_screen_infos);
  }
  beginKeyboardEvent() {
    return this.$.beginKeyboardEvent();
  }
  endKeyboardEvent() {
    return this.$.endKeyboardEvent();
  }
  forwardKeyboardEventWithCommands(arg_event, arg_native_event_data, arg_skip_if_unhandled, arg_commands) {
    return this.$.forwardKeyboardEventWithCommands(arg_event, arg_native_event_data, arg_skip_if_unhandled, arg_commands);
  }
  routeOrProcessMouseEvent(arg_event) {
    return this.$.routeOrProcessMouseEvent(arg_event);
  }
  routeOrProcessTouchEvent(arg_event) {
    return this.$.routeOrProcessTouchEvent(arg_event);
  }
  routeOrProcessWheelEvent(arg_event) {
    return this.$.routeOrProcessWheelEvent(arg_event);
  }
  forwardMouseEvent(arg_event) {
    return this.$.forwardMouseEvent(arg_event);
  }
  forwardWheelEvent(arg_event) {
    return this.$.forwardWheelEvent(arg_event);
  }
  pinchEvent(arg_event, arg_is_synthetically_injected) {
    return this.$.pinchEvent(arg_event, arg_is_synthetically_injected);
  }
  smartMagnifyEvent(arg_event) {
    return this.$.smartMagnifyEvent(arg_event);
  }
  imeSetComposition(arg_text, arg_ime_text_spans, arg_replacement_range, arg_selection_start, arg_selection_end) {
    return this.$.imeSetComposition(arg_text, arg_ime_text_spans, arg_replacement_range, arg_selection_start, arg_selection_end);
  }
  imeCommitText(arg_text, arg_replacement_range) {
    return this.$.imeCommitText(arg_text, arg_replacement_range);
  }
  imeFinishComposingText() {
    return this.$.imeFinishComposingText();
  }
  imeCancelCompositionFromCocoa() {
    return this.$.imeCancelCompositionFromCocoa();
  }
  lookUpDictionaryOverlayAtPoint(arg_root_point) {
    return this.$.lookUpDictionaryOverlayAtPoint(arg_root_point);
  }
  lookUpDictionaryOverlayFromRange(arg_range) {
    return this.$.lookUpDictionaryOverlayFromRange(arg_range);
  }
  syncGetCharacterIndexAtPoint(arg_root_point) {
    return this.$.syncGetCharacterIndexAtPoint(arg_root_point);
  }
  syncGetFirstRectForRange(arg_requested_range) {
    return this.$.syncGetFirstRectForRange(arg_requested_range);
  }
  executeEditCommand(arg_command) {
    return this.$.executeEditCommand(arg_command);
  }
  undo() {
    return this.$.undo();
  }
  redo() {
    return this.$.redo();
  }
  cut() {
    return this.$.cut();
  }
  copy() {
    return this.$.copy();
  }
  copyToFindPboard() {
    return this.$.copyToFindPboard();
  }
  centerSelection() {
    return this.$.centerSelection();
  }
  paste() {
    return this.$.paste();
  }
  pasteAndMatchStyle() {
    return this.$.pasteAndMatchStyle();
  }
  selectAll() {
    return this.$.selectAll();
  }
  startSpeaking() {
    return this.$.startSpeaking();
  }
  stopSpeaking() {
    return this.$.stopSpeaking();
  }
  syncIsSpeaking() {
    return this.$.syncIsSpeaking();
  }
  getRenderWidgetAccessibilityToken() {
    return this.$.getRenderWidgetAccessibilityToken();
  }
  setRemoteAccessibilityWindowToken(arg_window_token) {
    return this.$.setRemoteAccessibilityWindowToken(arg_window_token);
  }
};

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RenderWidgetHostNSViewHost', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  syncIsWidgetForMainFrame() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ResponseParamsSpec,
      [],
      false);
  }

  requestShutdown() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RequestShutdown_ParamsSpec,
      null,
      [],
      false);
  }

  onFirstResponderChanged(arg_is_first_responder) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnFirstResponderChanged_ParamsSpec,
      null,
      [arg_is_first_responder],
      false);
  }

  onWindowIsKeyChanged(arg_is_key) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowIsKeyChanged_ParamsSpec,
      null,
      [arg_is_key],
      false);
  }

  onBoundsInWindowChanged(arg_view_bounds_in_window_dip, arg_attached_to_window) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnBoundsInWindowChanged_ParamsSpec,
      null,
      [arg_view_bounds_in_window_dip, arg_attached_to_window],
      false);
  }

  onWindowFrameInScreenChanged(arg_window_frame_in_screen_dip) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowFrameInScreenChanged_ParamsSpec,
      null,
      [arg_window_frame_in_screen_dip],
      false);
  }

  onScreenInfosChanged(arg_screen_infos) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnScreenInfosChanged_ParamsSpec,
      null,
      [arg_screen_infos],
      false);
  }

  beginKeyboardEvent() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_BeginKeyboardEvent_ParamsSpec,
      null,
      [],
      false);
  }

  endKeyboardEvent() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_EndKeyboardEvent_ParamsSpec,
      null,
      [],
      false);
  }

  forwardKeyboardEventWithCommands(arg_event, arg_native_event_data, arg_skip_if_unhandled, arg_commands) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardKeyboardEventWithCommands_ParamsSpec,
      null,
      [arg_event, arg_native_event_data, arg_skip_if_unhandled, arg_commands],
      false);
  }

  routeOrProcessMouseEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessMouseEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  routeOrProcessTouchEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessTouchEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  routeOrProcessWheelEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessWheelEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  forwardMouseEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardMouseEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  forwardWheelEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardWheelEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  pinchEvent(arg_event, arg_is_synthetically_injected) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_PinchEvent_ParamsSpec,
      null,
      [arg_event, arg_is_synthetically_injected],
      false);
  }

  smartMagnifyEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SmartMagnifyEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  imeSetComposition(arg_text, arg_ime_text_spans, arg_replacement_range, arg_selection_start, arg_selection_end) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeSetComposition_ParamsSpec,
      null,
      [arg_text, arg_ime_text_spans, arg_replacement_range, arg_selection_start, arg_selection_end],
      false);
  }

  imeCommitText(arg_text, arg_replacement_range) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCommitText_ParamsSpec,
      null,
      [arg_text, arg_replacement_range],
      false);
  }

  imeFinishComposingText() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeFinishComposingText_ParamsSpec,
      null,
      [],
      false);
  }

  imeCancelCompositionFromCocoa() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCancelCompositionFromCocoa_ParamsSpec,
      null,
      [],
      false);
  }

  lookUpDictionaryOverlayAtPoint(arg_root_point) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayAtPoint_ParamsSpec,
      null,
      [arg_root_point],
      false);
  }

  lookUpDictionaryOverlayFromRange(arg_range) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayFromRange_ParamsSpec,
      null,
      [arg_range],
      false);
  }

  syncGetCharacterIndexAtPoint(arg_root_point) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ResponseParamsSpec,
      [arg_root_point],
      false);
  }

  syncGetFirstRectForRange(arg_requested_range) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ResponseParamsSpec,
      [arg_requested_range],
      false);
  }

  executeEditCommand(arg_command) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ExecuteEditCommand_ParamsSpec,
      null,
      [arg_command],
      false);
  }

  undo() {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Undo_ParamsSpec,
      null,
      [],
      false);
  }

  redo() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Redo_ParamsSpec,
      null,
      [],
      false);
  }

  cut() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Cut_ParamsSpec,
      null,
      [],
      false);
  }

  copy() {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Copy_ParamsSpec,
      null,
      [],
      false);
  }

  copyToFindPboard() {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_CopyToFindPboard_ParamsSpec,
      null,
      [],
      false);
  }

  centerSelection() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_CenterSelection_ParamsSpec,
      null,
      [],
      false);
  }

  paste() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Paste_ParamsSpec,
      null,
      [],
      false);
  }

  pasteAndMatchStyle() {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_PasteAndMatchStyle_ParamsSpec,
      null,
      [],
      false);
  }

  selectAll() {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SelectAll_ParamsSpec,
      null,
      [],
      false);
  }

  startSpeaking() {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_StartSpeaking_ParamsSpec,
      null,
      [],
      false);
  }

  stopSpeaking() {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_StopSpeaking_ParamsSpec,
      null,
      [],
      false);
  }

  syncIsSpeaking() {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ResponseParamsSpec,
      [],
      false);
  }

  getRenderWidgetAccessibilityToken() {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ResponseParamsSpec,
      [],
      false);
  }

  setRemoteAccessibilityWindowToken(arg_window_token) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SetRemoteAccessibilityWindowToken_ParamsSpec,
      null,
      [arg_window_token],
      false);
  }

};

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost.getRemote = function() {
  let remote = new mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.RenderWidgetHostNSViewHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RenderWidgetHostNSViewHost', [
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
        
        // Try Method 0: SyncIsWidgetForMainFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SyncIsWidgetForMainFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RequestShutdown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RequestShutdown_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestShutdown (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnFirstResponderChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnFirstResponderChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFirstResponderChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnWindowIsKeyChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowIsKeyChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowIsKeyChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnBoundsInWindowChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnBoundsInWindowChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBoundsInWindowChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnWindowFrameInScreenChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowFrameInScreenChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowFrameInScreenChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnScreenInfosChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnScreenInfosChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScreenInfosChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: BeginKeyboardEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_BeginKeyboardEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginKeyboardEvent (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: EndKeyboardEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_EndKeyboardEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EndKeyboardEvent (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ForwardKeyboardEventWithCommands
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardKeyboardEventWithCommands_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForwardKeyboardEventWithCommands (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RouteOrProcessMouseEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessMouseEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RouteOrProcessMouseEvent (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: RouteOrProcessTouchEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessTouchEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RouteOrProcessTouchEvent (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: RouteOrProcessWheelEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessWheelEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RouteOrProcessWheelEvent (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: ForwardMouseEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardMouseEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForwardMouseEvent (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: ForwardWheelEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardWheelEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForwardWheelEvent (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: PinchEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_PinchEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PinchEvent (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SmartMagnifyEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SmartMagnifyEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SmartMagnifyEvent (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: ImeSetComposition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeSetComposition_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImeSetComposition (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: ImeCommitText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCommitText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImeCommitText (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: ImeFinishComposingText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeFinishComposingText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImeFinishComposingText (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: ImeCancelCompositionFromCocoa
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCancelCompositionFromCocoa_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImeCancelCompositionFromCocoa (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: LookUpDictionaryOverlayAtPoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayAtPoint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LookUpDictionaryOverlayAtPoint (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: LookUpDictionaryOverlayFromRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayFromRange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LookUpDictionaryOverlayFromRange (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: SyncGetCharacterIndexAtPoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SyncGetCharacterIndexAtPoint (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: SyncGetFirstRectForRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SyncGetFirstRectForRange (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: ExecuteEditCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ExecuteEditCommand_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteEditCommand (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: Undo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Undo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Undo (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: Redo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Redo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Redo (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: Cut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Cut_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cut (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: Copy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Copy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Copy (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: CopyToFindPboard
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_CopyToFindPboard_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyToFindPboard (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: CenterSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_CenterSelection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CenterSelection (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: Paste
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Paste_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Paste (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: PasteAndMatchStyle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_PasteAndMatchStyle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasteAndMatchStyle (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: SelectAll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SelectAll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectAll (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: StartSpeaking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_StartSpeaking_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartSpeaking (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: StopSpeaking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_StopSpeaking_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopSpeaking (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: SyncIsSpeaking
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SyncIsSpeaking (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: GetRenderWidgetAccessibilityToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRenderWidgetAccessibilityToken (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: SetRemoteAccessibilityWindowToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SetRemoteAccessibilityWindowToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRemoteAccessibilityWindowToken (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.syncIsWidgetForMainFrame');
          const result = this.impl.syncIsWidgetForMainFrame();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SyncIsWidgetForMainFrame FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RequestShutdown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestShutdown');
          const result = this.impl.requestShutdown();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnFirstResponderChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFirstResponderChanged');
          const result = this.impl.onFirstResponderChanged(params.arg_is_first_responder);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowIsKeyChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowIsKeyChanged');
          const result = this.impl.onWindowIsKeyChanged(params.arg_is_key);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnBoundsInWindowChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBoundsInWindowChanged');
          const result = this.impl.onBoundsInWindowChanged(params.arg_view_bounds_in_window_dip, params.arg_attached_to_window);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowFrameInScreenChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowFrameInScreenChanged');
          const result = this.impl.onWindowFrameInScreenChanged(params.arg_window_frame_in_screen_dip);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnScreenInfosChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScreenInfosChanged');
          const result = this.impl.onScreenInfosChanged(params.arg_screen_infos);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_BeginKeyboardEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.beginKeyboardEvent');
          const result = this.impl.beginKeyboardEvent();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_EndKeyboardEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.endKeyboardEvent');
          const result = this.impl.endKeyboardEvent();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardKeyboardEventWithCommands_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forwardKeyboardEventWithCommands');
          const result = this.impl.forwardKeyboardEventWithCommands(params.arg_event, params.arg_native_event_data, params.arg_skip_if_unhandled, params.arg_commands);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessMouseEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.routeOrProcessMouseEvent');
          const result = this.impl.routeOrProcessMouseEvent(params.arg_event);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessTouchEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.routeOrProcessTouchEvent');
          const result = this.impl.routeOrProcessTouchEvent(params.arg_event);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessWheelEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.routeOrProcessWheelEvent');
          const result = this.impl.routeOrProcessWheelEvent(params.arg_event);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardMouseEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forwardMouseEvent');
          const result = this.impl.forwardMouseEvent(params.arg_event);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardWheelEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forwardWheelEvent');
          const result = this.impl.forwardWheelEvent(params.arg_event);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_PinchEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pinchEvent');
          const result = this.impl.pinchEvent(params.arg_event, params.arg_is_synthetically_injected);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SmartMagnifyEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.smartMagnifyEvent');
          const result = this.impl.smartMagnifyEvent(params.arg_event);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeSetComposition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeSetComposition');
          const result = this.impl.imeSetComposition(params.arg_text, params.arg_ime_text_spans, params.arg_replacement_range, params.arg_selection_start, params.arg_selection_end);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCommitText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeCommitText');
          const result = this.impl.imeCommitText(params.arg_text, params.arg_replacement_range);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeFinishComposingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeFinishComposingText');
          const result = this.impl.imeFinishComposingText();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCancelCompositionFromCocoa_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeCancelCompositionFromCocoa');
          const result = this.impl.imeCancelCompositionFromCocoa();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayAtPoint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.lookUpDictionaryOverlayAtPoint');
          const result = this.impl.lookUpDictionaryOverlayAtPoint(params.arg_root_point);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayFromRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.lookUpDictionaryOverlayFromRange');
          const result = this.impl.lookUpDictionaryOverlayFromRange(params.arg_range);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.syncGetCharacterIndexAtPoint');
          const result = this.impl.syncGetCharacterIndexAtPoint(params.arg_root_point);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SyncGetCharacterIndexAtPoint FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.syncGetFirstRectForRange');
          const result = this.impl.syncGetFirstRectForRange(params.arg_requested_range);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SyncGetFirstRectForRange FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_ExecuteEditCommand_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.executeEditCommand');
          const result = this.impl.executeEditCommand(params.arg_command);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Undo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undo');
          const result = this.impl.undo();
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Redo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.redo');
          const result = this.impl.redo();
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Cut_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cut');
          const result = this.impl.cut();
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Copy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copy');
          const result = this.impl.copy();
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_CopyToFindPboard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyToFindPboard');
          const result = this.impl.copyToFindPboard();
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_CenterSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.centerSelection');
          const result = this.impl.centerSelection();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_Paste_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.paste');
          const result = this.impl.paste();
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_PasteAndMatchStyle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pasteAndMatchStyle');
          const result = this.impl.pasteAndMatchStyle();
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SelectAll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectAll');
          const result = this.impl.selectAll();
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_StartSpeaking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startSpeaking');
          const result = this.impl.startSpeaking();
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_StopSpeaking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopSpeaking');
          const result = this.impl.stopSpeaking();
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.syncIsSpeaking');
          const result = this.impl.syncIsSpeaking();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SyncIsSpeaking FAILED:', e));
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRenderWidgetAccessibilityToken');
          const result = this.impl.getRenderWidgetAccessibilityToken();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetRenderWidgetAccessibilityToken FAILED:', e));
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHost_SetRemoteAccessibilityWindowToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRemoteAccessibilityWindowToken');
          const result = this.impl.setRemoteAccessibilityWindowToken(params.arg_window_token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHostReceiver = mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHostReceiver;

mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHostPtr = mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHostRemote;
mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHostRequest = mojo.internal.bindings.remote_cocoa.mojom.RenderWidgetHostNSViewHostPendingReceiver;

