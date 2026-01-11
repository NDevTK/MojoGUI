// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/loader/navigation_predictor.mojom
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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.blink.mojom.AnchorElementUserInteractionEventForMLModelTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementClickSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementPointerDataOnHoverTimerFiredSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementEnteredViewportSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementLeftViewportSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementPointerOverSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementPointerOutSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementPointerEventForMLModelSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementPointerDownSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementPositionUpdateSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost = {};
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostSpec = { $ : {} };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost.$interfaceName = 'blink.mojom.AnchorElementMetricsHost';
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementClick_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportNewAnchorElements_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsEnteredViewport_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsLeftViewport_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsPositionUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOver_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOut_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDown_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDataOnHoverTimerFired_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ProcessPointerEventUsingMLModel_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ResponseParamsSpec = { $: {} };

// Enum: AnchorElementUserInteractionEventForMLModelType
mojo.internal.bindings.blink.mojom.AnchorElementUserInteractionEventForMLModelType = {
  kPointerOver: 0,
  kPointerOut: 1,
  kEnteredViewport: 2,
  kLeftViewport: 3,
  kUnknown: 4,
};

// Struct: AnchorElementMetrics
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementMetricsSpec, 'blink.mojom.AnchorElementMetrics', [
      mojo.internal.StructField('arg_target_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_viewport_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_anchor_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_ratio_area', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_ratio_distance_top_to_visible_top', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_ratio_distance_root_top', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_font_size_px', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_font_weight', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_in_iframe', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_contains_image', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_same_host', 40, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_url_incremented_by_one', 40, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_text_sibling', 40, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: AnchorElementClick
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementClickSpec, 'blink.mojom.AnchorElementClick', [
      mojo.internal.StructField('arg_target_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_navigation_start_to_click', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_anchor_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AnchorElementPointerDataOnHoverTimerFired
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementPointerDataOnHoverTimerFiredSpec, 'blink.mojom.AnchorElementPointerDataOnHoverTimerFired', [
      mojo.internal.StructField('arg_pointer_data', 0, 0, mojo.internal.bindings.blink.mojom.AnchorElementPointerDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementEnteredViewport
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementEnteredViewportSpec, 'blink.mojom.AnchorElementEnteredViewport', [
      mojo.internal.StructField('arg_navigation_start_to_entered_viewport', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementLeftViewport
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementLeftViewportSpec, 'blink.mojom.AnchorElementLeftViewport', [
      mojo.internal.StructField('arg_time_in_viewport', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementPointerOver
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementPointerOverSpec, 'blink.mojom.AnchorElementPointerOver', [
      mojo.internal.StructField('arg_navigation_start_to_pointer_over', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementPointerOut
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementPointerOutSpec, 'blink.mojom.AnchorElementPointerOut', [
      mojo.internal.StructField('arg_hover_dwell_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementPointerEventForMLModel
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementPointerEventForMLModelSpec, 'blink.mojom.AnchorElementPointerEventForMLModel', [
      mojo.internal.StructField('arg_user_interaction_event_type', 0, 0, mojo.internal.bindings.blink.mojom.AnchorElementUserInteractionEventForMLModelTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_mouse', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementPointerDown
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementPointerDownSpec, 'blink.mojom.AnchorElementPointerDown', [
      mojo.internal.StructField('arg_navigation_start_to_pointer_down', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_anchor_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnchorElementPositionUpdate
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementPositionUpdateSpec, 'blink.mojom.AnchorElementPositionUpdate', [
      mojo.internal.StructField('arg_anchor_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_vertical_position_ratio', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_distance_from_pointer_down_ratio_$value', 8, 0, mojo.internal.Float, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_distance_from_pointer_down_ratio_$flag', originalFieldName: 'arg_distance_from_pointer_down_ratio' }),
      mojo.internal.StructField('arg_distance_from_pointer_down_ratio_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_distance_from_pointer_down_ratio_$value', originalFieldName: 'arg_distance_from_pointer_down_ratio' }),
    ],
    [[0, 24]]);

// Interface: AnchorElementMetricsHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementClick_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementClick_Params', [
      mojo.internal.StructField('arg_clicked', 0, 0, mojo.internal.bindings.blink.mojom.AnchorElementClickSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportNewAnchorElements_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportNewAnchorElements_Params', [
      mojo.internal.StructField('arg_metrics', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.AnchorElementMetricsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_removed_elements', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsEnteredViewport_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsEnteredViewport_Params', [
      mojo.internal.StructField('arg_elements', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.AnchorElementEnteredViewportSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsLeftViewport_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsLeftViewport_Params', [
      mojo.internal.StructField('arg_elements', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.AnchorElementLeftViewportSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsPositionUpdate_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsPositionUpdate_Params', [
      mojo.internal.StructField('arg_elements', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.AnchorElementPositionUpdateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOver_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOver_Params', [
      mojo.internal.StructField('arg_pointer_over_event', 0, 0, mojo.internal.bindings.blink.mojom.AnchorElementPointerOverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOut_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOut_Params', [
      mojo.internal.StructField('arg_hover_event', 0, 0, mojo.internal.bindings.blink.mojom.AnchorElementPointerOutSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDown_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDown_Params', [
      mojo.internal.StructField('arg_pointer_down_event', 0, 0, mojo.internal.bindings.blink.mojom.AnchorElementPointerDownSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDataOnHoverTimerFired_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDataOnHoverTimerFired_Params', [
      mojo.internal.StructField('arg_pointer_data', 0, 0, mojo.internal.bindings.blink.mojom.AnchorElementPointerDataOnHoverTimerFiredSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ProcessPointerEventUsingMLModel_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ProcessPointerEventUsingMLModel_Params', [
      mojo.internal.StructField('arg_pointer_event', 0, 0, mojo.internal.bindings.blink.mojom.AnchorElementPointerEventForMLModelSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ResponseParamsSpec, 'blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ResponseParams', [
      mojo.internal.StructField('arg_should_skip_for_testing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AnchorElementMetricsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  reportAnchorElementClick(arg_clicked) {
    return this.$.reportAnchorElementClick(arg_clicked);
  }
  reportNewAnchorElements(arg_metrics, arg_removed_elements) {
    return this.$.reportNewAnchorElements(arg_metrics, arg_removed_elements);
  }
  reportAnchorElementsEnteredViewport(arg_elements) {
    return this.$.reportAnchorElementsEnteredViewport(arg_elements);
  }
  reportAnchorElementsLeftViewport(arg_elements) {
    return this.$.reportAnchorElementsLeftViewport(arg_elements);
  }
  reportAnchorElementsPositionUpdate(arg_elements) {
    return this.$.reportAnchorElementsPositionUpdate(arg_elements);
  }
  reportAnchorElementPointerOver(arg_pointer_over_event) {
    return this.$.reportAnchorElementPointerOver(arg_pointer_over_event);
  }
  reportAnchorElementPointerOut(arg_hover_event) {
    return this.$.reportAnchorElementPointerOut(arg_hover_event);
  }
  reportAnchorElementPointerDown(arg_pointer_down_event) {
    return this.$.reportAnchorElementPointerDown(arg_pointer_down_event);
  }
  reportAnchorElementPointerDataOnHoverTimerFired(arg_pointer_data) {
    return this.$.reportAnchorElementPointerDataOnHoverTimerFired(arg_pointer_data);
  }
  processPointerEventUsingMLModel(arg_pointer_event) {
    return this.$.processPointerEventUsingMLModel(arg_pointer_event);
  }
  shouldSkipUpdateDelays() {
    return this.$.shouldSkipUpdateDelays();
  }
};

mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.AnchorElementMetricsHost', [
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

  reportAnchorElementClick(arg_clicked) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementClick_ParamsSpec,
      null,
      [arg_clicked],
      false);
  }

  reportNewAnchorElements(arg_metrics, arg_removed_elements) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportNewAnchorElements_ParamsSpec,
      null,
      [arg_metrics, arg_removed_elements],
      false);
  }

  reportAnchorElementsEnteredViewport(arg_elements) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsEnteredViewport_ParamsSpec,
      null,
      [arg_elements],
      false);
  }

  reportAnchorElementsLeftViewport(arg_elements) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsLeftViewport_ParamsSpec,
      null,
      [arg_elements],
      false);
  }

  reportAnchorElementsPositionUpdate(arg_elements) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsPositionUpdate_ParamsSpec,
      null,
      [arg_elements],
      false);
  }

  reportAnchorElementPointerOver(arg_pointer_over_event) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOver_ParamsSpec,
      null,
      [arg_pointer_over_event],
      false);
  }

  reportAnchorElementPointerOut(arg_hover_event) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOut_ParamsSpec,
      null,
      [arg_hover_event],
      false);
  }

  reportAnchorElementPointerDown(arg_pointer_down_event) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDown_ParamsSpec,
      null,
      [arg_pointer_down_event],
      false);
  }

  reportAnchorElementPointerDataOnHoverTimerFired(arg_pointer_data) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDataOnHoverTimerFired_ParamsSpec,
      null,
      [arg_pointer_data],
      false);
  }

  processPointerEventUsingMLModel(arg_pointer_event) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ProcessPointerEventUsingMLModel_ParamsSpec,
      null,
      [arg_pointer_event],
      false);
  }

  shouldSkipUpdateDelays() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ParamsSpec,
      mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AnchorElementMetricsHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.AnchorElementMetricsHost', [
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
        
        // Try Method 0: ReportAnchorElementClick
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementClick_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAnchorElementClick (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ReportNewAnchorElements
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportNewAnchorElements_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportNewAnchorElements (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ReportAnchorElementsEnteredViewport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsEnteredViewport_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAnchorElementsEnteredViewport (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ReportAnchorElementsLeftViewport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsLeftViewport_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAnchorElementsLeftViewport (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ReportAnchorElementsPositionUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsPositionUpdate_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAnchorElementsPositionUpdate (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ReportAnchorElementPointerOver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOver_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAnchorElementPointerOver (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ReportAnchorElementPointerOut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOut_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAnchorElementPointerOut (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ReportAnchorElementPointerDown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDown_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAnchorElementPointerDown (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ReportAnchorElementPointerDataOnHoverTimerFired
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDataOnHoverTimerFired_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReportAnchorElementPointerDataOnHoverTimerFired (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ProcessPointerEventUsingMLModel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ProcessPointerEventUsingMLModel_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessPointerEventUsingMLModel (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: ShouldSkipUpdateDelays
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldSkipUpdateDelays (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementClick_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAnchorElementClick');
          const result = this.impl.reportAnchorElementClick(params.arg_clicked);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportNewAnchorElements_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportNewAnchorElements');
          const result = this.impl.reportNewAnchorElements(params.arg_metrics, params.arg_removed_elements);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsEnteredViewport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAnchorElementsEnteredViewport');
          const result = this.impl.reportAnchorElementsEnteredViewport(params.arg_elements);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsLeftViewport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAnchorElementsLeftViewport');
          const result = this.impl.reportAnchorElementsLeftViewport(params.arg_elements);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementsPositionUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAnchorElementsPositionUpdate');
          const result = this.impl.reportAnchorElementsPositionUpdate(params.arg_elements);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAnchorElementPointerOver');
          const result = this.impl.reportAnchorElementPointerOver(params.arg_pointer_over_event);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerOut_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAnchorElementPointerOut');
          const result = this.impl.reportAnchorElementPointerOut(params.arg_hover_event);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAnchorElementPointerDown');
          const result = this.impl.reportAnchorElementPointerDown(params.arg_pointer_down_event);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ReportAnchorElementPointerDataOnHoverTimerFired_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportAnchorElementPointerDataOnHoverTimerFired');
          const result = this.impl.reportAnchorElementPointerDataOnHoverTimerFired(params.arg_pointer_data);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ProcessPointerEventUsingMLModel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.processPointerEventUsingMLModel');
          const result = this.impl.processPointerEventUsingMLModel(params.arg_pointer_event);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldSkipUpdateDelays');
          const result = this.impl.shouldSkipUpdateDelays();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.AnchorElementMetricsHost_ShouldSkipUpdateDelays_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShouldSkipUpdateDelays FAILED:', e));
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

mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostReceiver = mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostReceiver;

mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostPtr = mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostRemote;
mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostRequest = mojo.internal.bindings.blink.mojom.AnchorElementMetricsHostPendingReceiver;

