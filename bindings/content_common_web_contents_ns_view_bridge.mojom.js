// Auto-generated MojoJS binding
 // Source: chromium_src/content/common/web_contents_ns_view_bridge.mojom
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
mojo.internal.bindings.content = mojo.internal.bindings.content || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.remote_cocoa.mojom.SelectionDirectionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remote_cocoa.mojom.VisibilitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remote_cocoa.mojom.DraggingInfoSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView = {};
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView.$interfaceName = 'remote_cocoa.mojom.WebContentsNSView';
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost = {};
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost.$interfaceName = 'remote_cocoa.mojom.WebContentsNSViewHost';
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec = { $: {} };

// Enum: SelectionDirection
mojo.internal.bindings.remote_cocoa.mojom.SelectionDirection = {
  kDirect: 0,
  kForward: 1,
  kReverse: 2,
};

// Enum: Visibility
mojo.internal.bindings.remote_cocoa.mojom.Visibility = {
  kVisible: 0,
  kOccluded: 1,
  kHidden: 2,
};

// Struct: DraggingInfo
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.DraggingInfoSpec, 'remote_cocoa.mojom.DraggingInfo', [
      mojo.internal.StructField('arg_location_in_view', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_location_in_screen', 8, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_operation_mask', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: WebContentsNSView
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_SetParentNSView_Params', [
      mojo.internal.StructField('arg_parent_ns_view_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_SetBounds_Params', [
      mojo.internal.StructField('arg_bounds_in_superview', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_SetVisible_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_TakeFocus_Params', [
      mojo.internal.StructField('arg_reverse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_StartDrag_Params', [
      mojo.internal.StructField('arg_drop_data', 0, 0, mojo.internal.bindings.content.mojom.DropDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image', 16, 0, mojo.internal.bindings.gfx.mojom.ImageSkiaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_image_offset', 24, 0, mojo.internal.bindings.gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_operation_mask', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_privileged', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSView_Destroy_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.WebContentsNSView';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setParentNSView(arg_parent_ns_view_id) {
    return this.$.setParentNSView(arg_parent_ns_view_id);
  }
  resetParentNSView() {
    return this.$.resetParentNSView();
  }
  setBounds(arg_bounds_in_superview) {
    return this.$.setBounds(arg_bounds_in_superview);
  }
  setVisible(arg_visible) {
    return this.$.setVisible(arg_visible);
  }
  makeFirstResponder() {
    return this.$.makeFirstResponder();
  }
  takeFocus(arg_reverse) {
    return this.$.takeFocus(arg_reverse);
  }
  startDrag(arg_drop_data, arg_source_origin, arg_operation_mask, arg_image, arg_image_offset, arg_is_privileged) {
    return this.$.startDrag(arg_drop_data, arg_source_origin, arg_operation_mask, arg_image, arg_image_offset, arg_is_privileged);
  }
  destroy() {
    return this.$.destroy();
  }
};

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebContentsNSView', [
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

  setParentNSView(arg_parent_ns_view_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec,
      null,
      [arg_parent_ns_view_id],
      false);
  }

  resetParentNSView() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec,
      null,
      [],
      false);
  }

  setBounds(arg_bounds_in_superview) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec,
      null,
      [arg_bounds_in_superview],
      false);
  }

  setVisible(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  makeFirstResponder() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec,
      null,
      [],
      false);
  }

  takeFocus(arg_reverse) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec,
      null,
      [arg_reverse],
      false);
  }

  startDrag(arg_drop_data, arg_source_origin, arg_operation_mask, arg_image, arg_image_offset, arg_is_privileged) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec,
      null,
      [arg_drop_data, arg_source_origin, arg_operation_mask, arg_image, arg_image_offset, arg_is_privileged],
      false);
  }

  destroy() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView.getRemote = function() {
  let remote = new mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.WebContentsNSView',
    'context');
  return remote.$;
};

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebContentsNSView', [
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
        
        // Try Method 0: SetParentNSView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetParentNSView (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ResetParentNSView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetParentNSView (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetBounds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBounds (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVisible (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: MakeFirstResponder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MakeFirstResponder (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: TakeFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TakeFocus (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: StartDrag
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDrag (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Destroy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Destroy (7)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetParentNSView_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setParentNSView');
          const result = this.impl.setParentNSView(params.arg_parent_ns_view_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_ResetParentNSView_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetParentNSView');
          const result = this.impl.resetParentNSView();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetBounds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBounds');
          const result = this.impl.setBounds(params.arg_bounds_in_superview);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_SetVisible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVisible');
          const result = this.impl.setVisible(params.arg_visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_MakeFirstResponder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.makeFirstResponder');
          const result = this.impl.makeFirstResponder();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_TakeFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.takeFocus');
          const result = this.impl.takeFocus(params.arg_reverse);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_StartDrag_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDrag');
          const result = this.impl.startDrag(params.arg_drop_data, params.arg_source_origin, params.arg_operation_mask, params.arg_image, params.arg_image_offset, params.arg_is_privileged);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSView_Destroy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.destroy');
          const result = this.impl.destroy();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewReceiver = mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewReceiver;

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewPtr = mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewRemote;
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewRequest = mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewPendingReceiver;


// Interface: WebContentsNSViewHost
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.ui.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_Params', [
      mojo.internal.StructField('arg_direction', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.SelectionDirectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_Params', [
      mojo.internal.StructField('arg_visibility', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.VisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_Params', [
      mojo.internal.StructField('arg_drop_data', 0, 0, mojo.internal.bindings.content.mojom.DropDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_Params', [
      mojo.internal.StructField('arg_dragging_info', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.DraggingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ResponseParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_Params', [
      mojo.internal.StructField('arg_dragging_info', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.DraggingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ResponseParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_Params', [
      mojo.internal.StructField('arg_dragging_info', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.DraggingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ResponseParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_Params', [
      mojo.internal.StructField('arg_file_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_drop_data', 8, 0, mojo.internal.bindings.content.mojom.DropDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_download_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_origin', 24, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ResponseParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ResponseParams', [
      mojo.internal.StructField('arg_file_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec, 'remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_Params', [
      mojo.internal.StructField('arg_local_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_screen_point', 8, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_drag_operation', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHostRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.WebContentsNSViewHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMouseEvent(arg_event) {
    return this.$.onMouseEvent(arg_event);
  }
  onBecameFirstResponder(arg_direction) {
    return this.$.onBecameFirstResponder(arg_direction);
  }
  onWindowVisibilityChanged(arg_visibility) {
    return this.$.onWindowVisibilityChanged(arg_visibility);
  }
  setDropData(arg_drop_data) {
    return this.$.setDropData(arg_drop_data);
  }
  draggingEntered(arg_dragging_info) {
    return this.$.draggingEntered(arg_dragging_info);
  }
  draggingExited() {
    return this.$.draggingExited();
  }
  draggingUpdated(arg_dragging_info) {
    return this.$.draggingUpdated(arg_dragging_info);
  }
  performDragOperation(arg_dragging_info) {
    return this.$.performDragOperation(arg_dragging_info);
  }
  dragPromisedFileTo(arg_file_path, arg_drop_data, arg_download_url, arg_source_origin) {
    return this.$.dragPromisedFileTo(arg_file_path, arg_drop_data, arg_download_url, arg_source_origin);
  }
  endDrag(arg_drag_operation, arg_local_point, arg_screen_point) {
    return this.$.endDrag(arg_drag_operation, arg_local_point, arg_screen_point);
  }
};

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebContentsNSViewHost', [
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

  onMouseEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  onBecameFirstResponder(arg_direction) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec,
      null,
      [arg_direction],
      false);
  }

  onWindowVisibilityChanged(arg_visibility) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec,
      null,
      [arg_visibility],
      false);
  }

  setDropData(arg_drop_data) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec,
      null,
      [arg_drop_data],
      false);
  }

  draggingEntered(arg_dragging_info) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ResponseParamsSpec,
      [arg_dragging_info],
      false);
  }

  draggingExited() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec,
      null,
      [],
      false);
  }

  draggingUpdated(arg_dragging_info) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ResponseParamsSpec,
      [arg_dragging_info],
      false);
  }

  performDragOperation(arg_dragging_info) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ResponseParamsSpec,
      [arg_dragging_info],
      false);
  }

  dragPromisedFileTo(arg_file_path, arg_drop_data, arg_download_url, arg_source_origin) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ResponseParamsSpec,
      [arg_file_path, arg_drop_data, arg_download_url, arg_source_origin],
      false);
  }

  endDrag(arg_drag_operation, arg_local_point, arg_screen_point) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec,
      null,
      [arg_drag_operation, arg_local_point, arg_screen_point],
      false);
  }

};

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost.getRemote = function() {
  let remote = new mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.WebContentsNSViewHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebContentsNSViewHost', [
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
        
        // Try Method 0: OnMouseEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMouseEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnBecameFirstResponder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBecameFirstResponder (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnWindowVisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowVisibilityChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetDropData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDropData (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DraggingEntered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DraggingEntered (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DraggingExited
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DraggingExited (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DraggingUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DraggingUpdated (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: PerformDragOperation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformDragOperation (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DragPromisedFileTo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragPromisedFileTo (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: EndDrag
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EndDrag (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnMouseEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMouseEvent');
          const result = this.impl.onMouseEvent(params.arg_event);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnBecameFirstResponder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBecameFirstResponder');
          const result = this.impl.onBecameFirstResponder(params.arg_direction);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_OnWindowVisibilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowVisibilityChanged');
          const result = this.impl.onWindowVisibilityChanged(params.arg_visibility);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_SetDropData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDropData');
          const result = this.impl.setDropData(params.arg_drop_data);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.draggingEntered');
          const result = this.impl.draggingEntered(params.arg_dragging_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingEntered_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DraggingEntered FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingExited_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.draggingExited');
          const result = this.impl.draggingExited();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.draggingUpdated');
          const result = this.impl.draggingUpdated(params.arg_dragging_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DraggingUpdated_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DraggingUpdated FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.performDragOperation');
          const result = this.impl.performDragOperation(params.arg_dragging_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_PerformDragOperation_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PerformDragOperation FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dragPromisedFileTo');
          const result = this.impl.dragPromisedFileTo(params.arg_file_path, params.arg_drop_data, params.arg_download_url, params.arg_source_origin);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_DragPromisedFileTo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DragPromisedFileTo FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHost_EndDrag_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.endDrag');
          const result = this.impl.endDrag(params.arg_drag_operation, params.arg_local_point, params.arg_screen_point);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHostReceiver = mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHostReceiver;

mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHostPtr = mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHostRemote;
mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHostRequest = mojo.internal.bindings.remote_cocoa.mojom.WebContentsNSViewHostPendingReceiver;

