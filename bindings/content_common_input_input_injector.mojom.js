// Auto-generated MojoJS binding
// Source: chromium_src/content/common/input/input_injector.mojom
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
var content = content || {};
content.mojom = content.mojom || {};
var gfx = gfx || {};
var ui = ui || {};
var mojo_base = mojo_base || {};

content.mojom.GestureSourceTypeSpec = { $: mojo.internal.Enum() };
content.mojom.PointerActionTypeSpec = { $: mojo.internal.Enum() };
content.mojom.SyntheticButtonSpec = { $: mojo.internal.Enum() };
content.mojom.InputEventPatternSpec = { $: mojo.internal.Enum() };
content.mojom.SyntheticSmoothDragSpec = { $: {} };
content.mojom.SyntheticSmoothScrollSpec = { $: {} };
content.mojom.SyntheticPinchSpec = { $: {} };
content.mojom.SyntheticTapSpec = { $: {} };
content.mojom.SyntheticPointerActionParamsSpec = { $: {} };
content.mojom.SyntheticPointerActionSpec = { $: {} };
content.mojom.InputInjector = {};
content.mojom.InputInjector.$interfaceName = 'content.mojom.InputInjector';
content.mojom.InputInjector_QueueSyntheticSmoothDrag_ParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticSmoothDrag_ResponseParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticSmoothScroll_ParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticSmoothScroll_ResponseParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticPinch_ParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticPinch_ResponseParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticTap_ParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticTap_ResponseParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticPointerAction_ParamsSpec = { $: {} };
content.mojom.InputInjector_QueueSyntheticPointerAction_ResponseParamsSpec = { $: {} };

// Enum: GestureSourceType
content.mojom.GestureSourceType = {
  kDefaultInput: 0,
  kTouchInput: 1,
  kMouseInput: 2,
  kTouchpadInput: 2,
  kPenInput: 3,
  kGestureSourceTypeMax: 3,
};

// Enum: PointerActionType
content.mojom.PointerActionType = {
  kNotInitialized: 0,
  kPress: 1,
  kMove: 2,
  kRelease: 3,
  kCancel: 4,
  kLeave: 5,
  kIdle: 6,
};

// Enum: SyntheticButton
content.mojom.SyntheticButton = {
  kNoButton: 0,
  kLeft: 1,
  kMiddle: 2,
  kRight: 3,
  kBack: 4,
  kForward: 5,
};

// Enum: InputEventPattern
content.mojom.InputEventPattern = {
  kDefaultPattern: 0,
  kOnePerVsync: 1,
  kTwoPerVsync: 2,
  kEveryOtherVsync: 3,
};

// Struct: SyntheticSmoothDrag
mojo.internal.Struct(
    content.mojom.SyntheticSmoothDragSpec, 'content.mojom.SyntheticSmoothDrag', [
      mojo.internal.StructField('gesture_source_type', 0, 0, content.mojom.GestureSourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start_point', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('distances', 16, 0, mojo.internal.Array(gfx.mojom.Vector2dFSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('input_event_pattern', 24, 0, content.mojom.InputEventPatternSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('speed_in_pixels_s', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('vsync_offset_ms', 36, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SyntheticSmoothScroll
mojo.internal.Struct(
    content.mojom.SyntheticSmoothScrollSpec, 'content.mojom.SyntheticSmoothScroll', [
      mojo.internal.StructField('gesture_source_type', 0, 0, content.mojom.GestureSourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('distances', 16, 0, mojo.internal.Array(gfx.mojom.Vector2dFSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('granularity', 24, 0, ui.mojom.ScrollGranularitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_event_pattern', 32, 0, content.mojom.InputEventPatternSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('speed_in_pixels_s', 40, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('fling_velocity_x', 44, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('fling_velocity_y', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('modifiers', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('vsync_offset_ms', 56, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('prevent_fling', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: SyntheticPinch
mojo.internal.Struct(
    content.mojom.SyntheticPinchSpec, 'content.mojom.SyntheticPinch', [
      mojo.internal.StructField('anchor', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input_event_pattern', 8, 0, content.mojom.InputEventPatternSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scale_factor', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('relative_pointer_speed_in_pixels_s', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('vsync_offset_ms', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SyntheticTap
mojo.internal.Struct(
    content.mojom.SyntheticTapSpec, 'content.mojom.SyntheticTap', [
      mojo.internal.StructField('gesture_source_type', 0, 0, content.mojom.GestureSourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duration_ms', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SyntheticPointerActionParams
mojo.internal.Struct(
    content.mojom.SyntheticPointerActionParamsSpec, 'content.mojom.SyntheticPointerActionParams', [
      mojo.internal.StructField('pointer_action_type', 0, 0, content.mojom.PointerActionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('position', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('button', 16, 0, content.mojom.SyntheticButtonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 24, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duration', 32, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pointer_id', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('key_modifiers', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('width', 48, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('height', 52, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('rotation_angle', 56, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('force', 60, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tangential_pressure', 64, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tilt_x', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('tilt_y', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: SyntheticPointerAction
mojo.internal.Struct(
    content.mojom.SyntheticPointerActionSpec, 'content.mojom.SyntheticPointerAction', [
      mojo.internal.StructField('gesture_source_type', 0, 0, content.mojom.GestureSourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('params', 8, 0, mojo.internal.Array(mojo.internal.Array(content.mojom.SyntheticPointerActionParamsSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: InputInjector
mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticSmoothDrag_ParamsSpec, 'content.mojom.InputInjector_QueueSyntheticSmoothDrag_Params', [
      mojo.internal.StructField('drag', 0, 0, content.mojom.SyntheticSmoothDragSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticSmoothDrag_ResponseParamsSpec, 'content.mojom.InputInjector_QueueSyntheticSmoothDrag_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticSmoothScroll_ParamsSpec, 'content.mojom.InputInjector_QueueSyntheticSmoothScroll_Params', [
      mojo.internal.StructField('scroll', 0, 0, content.mojom.SyntheticSmoothScrollSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticSmoothScroll_ResponseParamsSpec, 'content.mojom.InputInjector_QueueSyntheticSmoothScroll_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticPinch_ParamsSpec, 'content.mojom.InputInjector_QueueSyntheticPinch_Params', [
      mojo.internal.StructField('pinch', 0, 0, content.mojom.SyntheticPinchSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticPinch_ResponseParamsSpec, 'content.mojom.InputInjector_QueueSyntheticPinch_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticTap_ParamsSpec, 'content.mojom.InputInjector_QueueSyntheticTap_Params', [
      mojo.internal.StructField('tap', 0, 0, content.mojom.SyntheticTapSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticTap_ResponseParamsSpec, 'content.mojom.InputInjector_QueueSyntheticTap_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticPointerAction_ParamsSpec, 'content.mojom.InputInjector_QueueSyntheticPointerAction_Params', [
      mojo.internal.StructField('pointer_action', 0, 0, content.mojom.SyntheticPointerActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.InputInjector_QueueSyntheticPointerAction_ResponseParamsSpec, 'content.mojom.InputInjector_QueueSyntheticPointerAction_ResponseParams', [
    ],
    [[0, 8]]);

content.mojom.InputInjectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.InputInjectorRemote = class {
  static get $interfaceName() {
    return 'content.mojom.InputInjector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.InputInjectorPendingReceiver,
      handle);
    this.$ = new content.mojom.InputInjectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  queueSyntheticSmoothDrag(drag) {
    return this.$.queueSyntheticSmoothDrag(drag);
  }
  queueSyntheticSmoothScroll(scroll) {
    return this.$.queueSyntheticSmoothScroll(scroll);
  }
  queueSyntheticPinch(pinch) {
    return this.$.queueSyntheticPinch(pinch);
  }
  queueSyntheticTap(tap) {
    return this.$.queueSyntheticTap(tap);
  }
  queueSyntheticPointerAction(pointer_action) {
    return this.$.queueSyntheticPointerAction(pointer_action);
  }
};

content.mojom.InputInjectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputInjector', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  queueSyntheticSmoothDrag(drag) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.InputInjector_QueueSyntheticSmoothDrag_ParamsSpec,
      content.mojom.InputInjector_QueueSyntheticSmoothDrag_ResponseParamsSpec,
      [drag],
      false);
  }

  queueSyntheticSmoothScroll(scroll) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.InputInjector_QueueSyntheticSmoothScroll_ParamsSpec,
      content.mojom.InputInjector_QueueSyntheticSmoothScroll_ResponseParamsSpec,
      [scroll],
      false);
  }

  queueSyntheticPinch(pinch) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.InputInjector_QueueSyntheticPinch_ParamsSpec,
      content.mojom.InputInjector_QueueSyntheticPinch_ResponseParamsSpec,
      [pinch],
      false);
  }

  queueSyntheticTap(tap) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.mojom.InputInjector_QueueSyntheticTap_ParamsSpec,
      content.mojom.InputInjector_QueueSyntheticTap_ResponseParamsSpec,
      [tap],
      false);
  }

  queueSyntheticPointerAction(pointer_action) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      content.mojom.InputInjector_QueueSyntheticPointerAction_ParamsSpec,
      content.mojom.InputInjector_QueueSyntheticPointerAction_ResponseParamsSpec,
      [pointer_action],
      false);
  }

};

content.mojom.InputInjector.getRemote = function() {
  let remote = new content.mojom.InputInjectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.InputInjector',
    'context');
  return remote.$;
};

content.mojom.InputInjectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputInjector', [
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
        
        // Try Method 0: QueueSyntheticSmoothDrag
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.InputInjector_QueueSyntheticSmoothDrag_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueSyntheticSmoothDrag (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: QueueSyntheticSmoothScroll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.InputInjector_QueueSyntheticSmoothScroll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueSyntheticSmoothScroll (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: QueueSyntheticPinch
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.InputInjector_QueueSyntheticPinch_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueSyntheticPinch (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: QueueSyntheticTap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.InputInjector_QueueSyntheticTap_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueSyntheticTap (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: QueueSyntheticPointerAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.InputInjector_QueueSyntheticPointerAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> QueueSyntheticPointerAction (4)');
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
          const params = decoder.decodeStructInline(content.mojom.InputInjector_QueueSyntheticSmoothDrag_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueSyntheticSmoothDrag');
          const result = this.impl.queueSyntheticSmoothDrag(params.drag);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.InputInjector_QueueSyntheticSmoothDrag_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] QueueSyntheticSmoothDrag FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.InputInjector_QueueSyntheticSmoothScroll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueSyntheticSmoothScroll');
          const result = this.impl.queueSyntheticSmoothScroll(params.scroll);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.InputInjector_QueueSyntheticSmoothScroll_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] QueueSyntheticSmoothScroll FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.InputInjector_QueueSyntheticPinch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueSyntheticPinch');
          const result = this.impl.queueSyntheticPinch(params.pinch);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.InputInjector_QueueSyntheticPinch_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] QueueSyntheticPinch FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.InputInjector_QueueSyntheticTap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueSyntheticTap');
          const result = this.impl.queueSyntheticTap(params.tap);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.InputInjector_QueueSyntheticTap_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] QueueSyntheticTap FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.InputInjector_QueueSyntheticPointerAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueSyntheticPointerAction');
          const result = this.impl.queueSyntheticPointerAction(params.pointer_action);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.InputInjector_QueueSyntheticPointerAction_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] QueueSyntheticPointerAction FAILED:', e));
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

content.mojom.InputInjectorReceiver = content.mojom.InputInjectorReceiver;

content.mojom.InputInjectorPtr = content.mojom.InputInjectorRemote;
content.mojom.InputInjectorRequest = content.mojom.InputInjectorPendingReceiver;

