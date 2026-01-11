// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/experiences/arc/mojom/ime.mojom
 // Module: arc.mojom

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
 

 mojo.internal.bindings.arc = mojo.internal.bindings.arc || {};
mojo.internal.bindings.arc.mojom = mojo.internal.bindings.arc.mojom || {};

mojo.internal.bindings.arc.mojom.TextInputTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.SegmentStyleSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.CursorCoordinateSpaceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.arc.mojom.CompositionSegmentSpec = { $: {} };
mojo.internal.bindings.arc.mojom.KeyEventDataSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeHost = {};
mojo.internal.bindings.arc.mojom.ImeHost.$interfaceName = 'arc.mojom.ImeHost';
mojo.internal.bindings.arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeHost_OnCancelComposition_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeHost_SendKeyEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeHost_SendKeyEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeInstance = {};
mojo.internal.bindings.arc.mojom.ImeInstance.$interfaceName = 'arc.mojom.ImeInstance';
mojo.internal.bindings.arc.mojom.ImeInstance_Init_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeInstance_Init_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeInstance_SetCompositionText_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeInstance_SetSelectionText_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeInstance_InsertText_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec = { $: {} };
mojo.internal.bindings.arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec = { $: {} };

mojo.internal.bindings.arc.mojom.TEXT_INPUT_FLAG_NONE = 0;

mojo.internal.bindings.arc.mojom.TEXT_INPUT_FLAG_AUTOCAPITALIZE_NONE = 64;

mojo.internal.bindings.arc.mojom.TEXT_INPUT_FLAG_AUTOCAPITALIZE_CHARACTERS = 128;

mojo.internal.bindings.arc.mojom.TEXT_INPUT_FLAG_AUTOCAPITALIZE_WORDS = 256;

mojo.internal.bindings.arc.mojom.TEXT_INPUT_FLAG_AUTOCAPITALIZE_SENTENCES = 512;

// Enum: TextInputType
mojo.internal.bindings.arc.mojom.TextInputType = {
  NONE: 0,
  TEXT: 1,
  PASSWORD: 2,
  SEARCH: 3,
  EMAIL: 4,
  NUMBER: 5,
  TELEPHONE: 6,
  URL: 7,
  DATE: 8,
  TIME: 9,
  DATETIME: 10,
  ANDROID_NULL: 11,
};

// Enum: SegmentStyle
mojo.internal.bindings.arc.mojom.SegmentStyle = {
  DEFAULT: 0,
  EMPHASIZED: 1,
  NONE: 2,
};

// Enum: CursorCoordinateSpace
mojo.internal.bindings.arc.mojom.CursorCoordinateSpace = {
  SCREEN: 0,
  DISPLAY: 1,
  NOTIFICATION: 2,
};

// Struct: CompositionSegment
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.CompositionSegmentSpec, 'arc.mojom.CompositionSegment', [
      mojo.internal.StructField('arg_start_offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_offset', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_emphasized', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_style', 16, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.SegmentStyleSpec.$, null, false, 18, undefined),
    ],
    [[0, 24], [18, 32]]);

// Struct: KeyEventData
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.KeyEventDataSpec, 'arc.mojom.KeyEventData', [
      mojo.internal.StructField('arg_key_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pressed', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_shift_down', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_control_down', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_alt_down', 4, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_capslock_on', 4, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_scan_code', 8, 0, mojo.internal.Uint32, 0, false, 16, undefined),
      mojo.internal.StructField('arg_is_alt_gr_down', 12, 0, mojo.internal.Bool, false, false, 20, undefined),
      mojo.internal.StructField('arg_is_repeat', 12, 1, mojo.internal.Bool, false, false, 23, undefined),
    ],
    [[0, 16], [16, 24], [20, 24], [23, 24]]);

// Interface: ImeHost
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec, 'arc.mojom.ImeHost_OnTextInputTypeChanged_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.TextInputTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_personalized_learning_allowed', 8, 0, mojo.internal.Bool, false, false, 10, undefined),
      mojo.internal.StructField('arg_flags', 12, 0, mojo.internal.Int32, 0, false, 11, undefined),
    ],
    [[0, 16], [10, 24], [11, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec, 'arc.mojom.ImeHost_OnCursorRectChanged_Params', [
      mojo.internal.StructField('arg_rect', 0, 0, mojo.internal.bindings.arc.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_coordinateSpace', 8, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.CursorCoordinateSpaceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeHost_OnCancelComposition_ParamsSpec, 'arc.mojom.ImeHost_OnCancelComposition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec, 'arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec, 'arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_Params', [
      mojo.internal.StructField('arg_rect', 0, 0, mojo.internal.bindings.arc.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_range', 8, 0, mojo.internal.bindings.arc.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_in_range', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_selection_range', 24, 0, mojo.internal.bindings.arc.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_coordinateSpace', 32, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.CursorCoordinateSpaceSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeHost_SendKeyEvent_ParamsSpec, 'arc.mojom.ImeHost_SendKeyEvent_Params', [
      mojo.internal.StructField('arg_key_event_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.arc.mojom.KeyEventDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeHost_SendKeyEvent_ResponseParamsSpec, 'arc.mojom.ImeHost_SendKeyEvent_ResponseParams', [
      mojo.internal.StructField('arg_is_consumed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.ImeHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.ImeHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ImeHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.ImeHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.ImeHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTextInputTypeChanged(arg_type, arg_is_personalized_learning_allowed, arg_flags) {
    return this.$.onTextInputTypeChanged(arg_type, arg_is_personalized_learning_allowed, arg_flags);
  }
  onCursorRectChanged(arg_rect, arg_coordinateSpace) {
    return this.$.onCursorRectChanged(arg_rect, arg_coordinateSpace);
  }
  onCancelComposition() {
    return this.$.onCancelComposition();
  }
  showVirtualKeyboardIfEnabled() {
    return this.$.showVirtualKeyboardIfEnabled();
  }
  onCursorRectChangedWithSurroundingText(arg_rect, arg_text_range, arg_text_in_range, arg_selection_range, arg_coordinateSpace) {
    return this.$.onCursorRectChangedWithSurroundingText(arg_rect, arg_text_range, arg_text_in_range, arg_selection_range, arg_coordinateSpace);
  }
  sendKeyEvent(arg_key_event_data) {
    return this.$.sendKeyEvent(arg_key_event_data);
  }
};

mojo.internal.bindings.arc.mojom.ImeHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImeHost', [
      { explicit: 0 },
      { explicit: 8 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 9 },
      { explicit: 7 },
    ]);
  }

  onTextInputTypeChanged(arg_type, arg_is_personalized_learning_allowed, arg_flags) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec,
      null,
      [arg_type, arg_is_personalized_learning_allowed, arg_flags],
      false);
  }

  onCursorRectChanged(arg_rect, arg_coordinateSpace) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec,
      null,
      [arg_rect, arg_coordinateSpace],
      false);
  }

  onCancelComposition() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeHost_OnCancelComposition_ParamsSpec,
      null,
      [],
      false);
  }

  showVirtualKeyboardIfEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec,
      null,
      [],
      false);
  }

  onCursorRectChangedWithSurroundingText(arg_rect, arg_text_range, arg_text_in_range, arg_selection_range, arg_coordinateSpace) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec,
      null,
      [arg_rect, arg_text_range, arg_text_in_range, arg_selection_range, arg_coordinateSpace],
      false);
  }

  sendKeyEvent(arg_key_event_data) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeHost_SendKeyEvent_ParamsSpec,
      mojo.internal.bindings.arc.mojom.ImeHost_SendKeyEvent_ResponseParamsSpec,
      [arg_key_event_data],
      false);
  }

};

mojo.internal.bindings.arc.mojom.ImeHost.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.ImeHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ImeHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.ImeHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImeHost', [
      { explicit: 0 },
      { explicit: 8 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 9 },
      { explicit: 7 },
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
        
        // Try Method 0: OnTextInputTypeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTextInputTypeChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnCursorRectChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCursorRectChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnCancelComposition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeHost_OnCancelComposition_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCancelComposition (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ShowVirtualKeyboardIfEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowVirtualKeyboardIfEnabled (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnCursorRectChangedWithSurroundingText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCursorRectChangedWithSurroundingText (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SendKeyEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeHost_SendKeyEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendKeyEvent (5)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTextInputTypeChanged');
          const result = this.impl.onTextInputTypeChanged(params.arg_type, params.arg_is_personalized_learning_allowed, params.arg_flags);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCursorRectChanged');
          const result = this.impl.onCursorRectChanged(params.arg_rect, params.arg_coordinateSpace);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeHost_OnCancelComposition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCancelComposition');
          const result = this.impl.onCancelComposition();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showVirtualKeyboardIfEnabled');
          const result = this.impl.showVirtualKeyboardIfEnabled();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCursorRectChangedWithSurroundingText');
          const result = this.impl.onCursorRectChangedWithSurroundingText(params.arg_rect, params.arg_text_range, params.arg_text_in_range, params.arg_selection_range, params.arg_coordinateSpace);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeHost_SendKeyEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendKeyEvent');
          const result = this.impl.sendKeyEvent(params.arg_key_event_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.ImeHost_SendKeyEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SendKeyEvent FAILED:', e));
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

mojo.internal.bindings.arc.mojom.ImeHostReceiver = mojo.internal.bindings.arc.mojom.ImeHostReceiver;

mojo.internal.bindings.arc.mojom.ImeHostPtr = mojo.internal.bindings.arc.mojom.ImeHostRemote;
mojo.internal.bindings.arc.mojom.ImeHostRequest = mojo.internal.bindings.arc.mojom.ImeHostPendingReceiver;


// Interface: ImeInstance
mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeInstance_Init_ParamsSpec, 'arc.mojom.ImeInstance_Init_Params', [
      mojo.internal.StructField('arg_host_remote', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.arc.mojom.ImeHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeInstance_Init_ResponseParamsSpec, 'arc.mojom.ImeInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeInstance_SetCompositionText_ParamsSpec, 'arc.mojom.ImeInstance_SetCompositionText_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_segments', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.arc.mojom.CompositionSegmentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_selection_range', 16, 0, mojo.internal.bindings.arc.mojom.RangeSpec.$, null, true, 21, undefined),
    ],
    [[0, 24], [21, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeInstance_SetSelectionText_ParamsSpec, 'arc.mojom.ImeInstance_SetSelectionText_Params', [
      mojo.internal.StructField('arg_selection', 0, 0, mojo.internal.bindings.arc.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec, 'arc.mojom.ImeInstance_ConfirmCompositionText_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeInstance_InsertText_ParamsSpec, 'arc.mojom.ImeInstance_InsertText_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_cursor_position', 8, 0, mojo.internal.Int32, 0, false, 17, undefined),
    ],
    [[0, 16], [17, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec, 'arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_Params', [
      mojo.internal.StructField('arg_new_bounds', 0, 0, mojo.internal.bindings.arc.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_available', 8, 0, mojo.internal.Bool, false, false, 7, undefined),
    ],
    [[0, 16], [7, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec, 'arc.mojom.ImeInstance_ExtendSelectionAndDelete_Params', [
      mojo.internal.StructField('arg_before', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_after', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec, 'arc.mojom.ImeInstance_SetComposingRegion_Params', [
      mojo.internal.StructField('arg_range', 0, 0, mojo.internal.bindings.arc.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.arc.mojom.ImeInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.arc.mojom.ImeInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ImeInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.arc.mojom.ImeInstancePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.arc.mojom.ImeInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  init(arg_host_remote) {
    return this.$.init(arg_host_remote);
  }
  setCompositionText(arg_text, arg_segments, arg_selection_range) {
    return this.$.setCompositionText(arg_text, arg_segments, arg_selection_range);
  }
  setSelectionText(arg_selection) {
    return this.$.setSelectionText(arg_selection);
  }
  confirmCompositionText() {
    return this.$.confirmCompositionText();
  }
  insertText(arg_text, arg_new_cursor_position) {
    return this.$.insertText(arg_text, arg_new_cursor_position);
  }
  onKeyboardAppearanceChanging(arg_new_bounds, arg_is_available) {
    return this.$.onKeyboardAppearanceChanging(arg_new_bounds, arg_is_available);
  }
  extendSelectionAndDelete(arg_before, arg_after) {
    return this.$.extendSelectionAndDelete(arg_before, arg_after);
  }
  setComposingRegion(arg_range) {
    return this.$.setComposingRegion(arg_range);
  }
};

mojo.internal.bindings.arc.mojom.ImeInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImeInstance', [
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 7 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 8 },
    ]);
  }

  init(arg_host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeInstance_Init_ParamsSpec,
      mojo.internal.bindings.arc.mojom.ImeInstance_Init_ResponseParamsSpec,
      [arg_host_remote],
      false);
  }

  setCompositionText(arg_text, arg_segments, arg_selection_range) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeInstance_SetCompositionText_ParamsSpec,
      null,
      [arg_text, arg_segments, arg_selection_range],
      false);
  }

  setSelectionText(arg_selection) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeInstance_SetSelectionText_ParamsSpec,
      null,
      [arg_selection],
      false);
  }

  confirmCompositionText() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec,
      null,
      [],
      false);
  }

  insertText(arg_text, arg_new_cursor_position) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeInstance_InsertText_ParamsSpec,
      null,
      [arg_text, arg_new_cursor_position],
      false);
  }

  onKeyboardAppearanceChanging(arg_new_bounds, arg_is_available) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec,
      null,
      [arg_new_bounds, arg_is_available],
      false);
  }

  extendSelectionAndDelete(arg_before, arg_after) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec,
      null,
      [arg_before, arg_after],
      false);
  }

  setComposingRegion(arg_range) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec,
      null,
      [arg_range],
      false);
  }

};

mojo.internal.bindings.arc.mojom.ImeInstance.getRemote = function() {
  let remote = new mojo.internal.bindings.arc.mojom.ImeInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ImeInstance',
    'context');
  return remote.$;
};

mojo.internal.bindings.arc.mojom.ImeInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImeInstance', [
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 7 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 8 },
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
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetCompositionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_SetCompositionText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCompositionText (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetSelectionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_SetSelectionText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSelectionText (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ConfirmCompositionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfirmCompositionText (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: InsertText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_InsertText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InsertText (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnKeyboardAppearanceChanging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardAppearanceChanging (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ExtendSelectionAndDelete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtendSelectionAndDelete (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetComposingRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetComposingRegion (7)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.arg_host_remote);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.arc.mojom.ImeInstance_Init_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Init FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_SetCompositionText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCompositionText');
          const result = this.impl.setCompositionText(params.arg_text, params.arg_segments, params.arg_selection_range);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_SetSelectionText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSelectionText');
          const result = this.impl.setSelectionText(params.arg_selection);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.confirmCompositionText');
          const result = this.impl.confirmCompositionText();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_InsertText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.insertText');
          const result = this.impl.insertText(params.arg_text, params.arg_new_cursor_position);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardAppearanceChanging');
          const result = this.impl.onKeyboardAppearanceChanging(params.arg_new_bounds, params.arg_is_available);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.extendSelectionAndDelete');
          const result = this.impl.extendSelectionAndDelete(params.arg_before, params.arg_after);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setComposingRegion');
          const result = this.impl.setComposingRegion(params.arg_range);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.arc.mojom.ImeInstanceReceiver = mojo.internal.bindings.arc.mojom.ImeInstanceReceiver;

mojo.internal.bindings.arc.mojom.ImeInstancePtr = mojo.internal.bindings.arc.mojom.ImeInstanceRemote;
mojo.internal.bindings.arc.mojom.ImeInstanceRequest = mojo.internal.bindings.arc.mojom.ImeInstancePendingReceiver;

