// Auto-generated MojoJS binding
 // Source: chromium_src/ui/events/mojom/event.mojom
 // Module: ui.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.ui.mojom = mojo.internal.bindings.ui.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.ui.mojom.GestureDataDetailsSpec = { $: {} };
mojo.internal.bindings.ui.mojom.KeyDataSpec = { $: {} };
mojo.internal.bindings.ui.mojom.LocationDataSpec = { $: {} };
mojo.internal.bindings.ui.mojom.GesturePinchDataSpec = { $: {} };
mojo.internal.bindings.ui.mojom.GestureSwipeDataSpec = { $: {} };
mojo.internal.bindings.ui.mojom.GestureDataSpec = { $: {} };
mojo.internal.bindings.ui.mojom.ScrollDataSpec = { $: {} };
mojo.internal.bindings.ui.mojom.PointerDetailsSpec = { $: {} };
mojo.internal.bindings.ui.mojom.MouseDataSpec = { $: {} };
mojo.internal.bindings.ui.mojom.TouchDataSpec = { $: {} };
mojo.internal.bindings.ui.mojom.EventSpec = { $: {} };

// Union: GestureDataDetails
mojo.internal.Union(
    mojo.internal.bindings.ui.mojom.GestureDataDetailsSpec, 'ui.mojom.GestureDataDetails', {
      'arg_pinch': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ui.mojom.GesturePinchDataSpec.$,
        'nullable': false,
      },
      'arg_swipe': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ui.mojom.GestureSwipeDataSpec.$,
        'nullable': false,
      },
    });

// Struct: KeyData
mojo.internal.Struct(
    mojo.internal.bindings.ui.mojom.KeyDataSpec, 'ui.mojom.KeyData', [
      mojo.internal.StructField('arg_key_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dom_code', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dom_key', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_char', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: LocationData
mojo.internal.Struct(
    mojo.internal.bindings.ui.mojom.LocationDataSpec, 'ui.mojom.LocationData', [
      mojo.internal.StructField('arg_relative_location', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_root_location', 8, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GesturePinchData
mojo.internal.Struct(
    mojo.internal.bindings.ui.mojom.GesturePinchDataSpec, 'ui.mojom.GesturePinchData', [
      mojo.internal.StructField('arg_scale', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GestureSwipeData
mojo.internal.Struct(
    mojo.internal.bindings.ui.mojom.GestureSwipeDataSpec, 'ui.mojom.GestureSwipeData', [
      mojo.internal.StructField('arg_left', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_right', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_up', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_down', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GestureData
mojo.internal.Struct(
    mojo.internal.bindings.ui.mojom.GestureDataSpec, 'ui.mojom.GestureData', [
      mojo.internal.StructField('arg_location', 0, 0, mojo.internal.bindings.ui.mojom.LocationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_type', 8, 0, mojo.internal.bindings.ui.mojom.GestureDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_details', 16, 0, mojo.internal.bindings.ui.mojom.GestureDataDetailsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ScrollData
mojo.internal.Struct(
    mojo.internal.bindings.ui.mojom.ScrollDataSpec, 'ui.mojom.ScrollData', [
      mojo.internal.StructField('arg_location', 0, 0, mojo.internal.bindings.ui.mojom.LocationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_momentum_phase', 8, 0, mojo.internal.bindings.ui.mojom.EventMomentumPhaseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_event_phase', 16, 0, mojo.internal.bindings.ui.mojom.ScrollEventPhaseSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_x_offset', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_y_offset', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_x_offset_ordinal', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_y_offset_ordinal', 36, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_finger_count', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PointerDetails
mojo.internal.Struct(
    mojo.internal.bindings.ui.mojom.PointerDetailsSpec, 'ui.mojom.PointerDetails', [
      mojo.internal.StructField('arg_pointer_type', 0, 0, mojo.internal.bindings.ui.mojom.EventPointerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_radius_x', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_radius_y', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_force', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tilt_x', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tilt_y', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tangential_pressure', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_twist', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_id', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_offset_x', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_offset_y', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: MouseData
mojo.internal.Struct(
    mojo.internal.bindings.ui.mojom.MouseDataSpec, 'ui.mojom.MouseData', [
      mojo.internal.StructField('arg_location', 0, 0, mojo.internal.bindings.ui.mojom.LocationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pointer_details', 8, 0, mojo.internal.bindings.ui.mojom.PointerDetailsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_wheel_offset', 16, 0, mojo.internal.bindings.gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tick_120ths', 24, 0, mojo.internal.bindings.gfx.mojom.Vector2dSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_changed_button_flags', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TouchData
mojo.internal.Struct(
    mojo.internal.bindings.ui.mojom.TouchDataSpec, 'ui.mojom.TouchData', [
      mojo.internal.StructField('arg_location', 0, 0, mojo.internal.bindings.ui.mojom.LocationDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pointer_details', 8, 0, mojo.internal.bindings.ui.mojom.PointerDetailsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_may_cause_scrolling', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hovering', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Event
mojo.internal.Struct(
    mojo.internal.bindings.ui.mojom.EventSpec, 'ui.mojom.Event', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.bindings.ui.mojom.EventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_time_stamp', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_latency', 16, 0, mojo.internal.bindings.ui.mojom.LatencyInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_data', 24, 0, mojo.internal.bindings.ui.mojom.KeyDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_gesture_data', 32, 0, mojo.internal.bindings.ui.mojom.GestureDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_scroll_data', 40, 0, mojo.internal.bindings.ui.mojom.ScrollDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_touch_data', 48, 0, mojo.internal.bindings.ui.mojom.TouchDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_mouse_data', 56, 0, mojo.internal.bindings.ui.mojom.MouseDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_properties', 64, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.Uint8, false), false), null, true, 0, undefined),
      mojo.internal.StructField('arg_flags', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 88]]);
