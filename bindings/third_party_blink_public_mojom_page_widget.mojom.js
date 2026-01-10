// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/widget.mojom
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
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.DeviceEmulationCacheBehaviorSpec = { $: mojo.internal.Enum() };
blink.mojom.ProximateCharacterRangeBoundsSpec = { $: {} };
blink.mojom.StylusWritingFocusResultSpec = { $: {} };
blink.mojom.FrameWidget = {};
blink.mojom.FrameWidget.$interfaceName = 'blink.mojom.FrameWidget';
blink.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragTargetDragEnter_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragTargetDragOver_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragTargetDragOver_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragTargetDrop_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragTargetDrop_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragSourceEndedAt_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_OnStartStylusWriting_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_SetTextDirection_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_SetActive_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_GetStringAtPoint_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_GetStringAtPoint_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_SetViewportIntersection_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost = {};
blink.mojom.FrameWidgetHost.$interfaceName = 'blink.mojom.FrameWidgetHost';
blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec = { $: {} };
blink.mojom.PopupWidgetHost = {};
blink.mojom.PopupWidgetHost.$interfaceName = 'blink.mojom.PopupWidgetHost';
blink.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec = { $: {} };
blink.mojom.PopupWidgetHost_ShowPopup_ParamsSpec = { $: {} };
blink.mojom.PopupWidgetHost_ShowPopup_ResponseParamsSpec = { $: {} };
blink.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec = { $: {} };
blink.mojom.PopupWidgetHost_SetPopupBounds_ResponseParamsSpec = { $: {} };

// Enum: DeviceEmulationCacheBehavior
blink.mojom.DeviceEmulationCacheBehavior = {
  kClearCache: 0,
  kKeepCache: 1,
};

// Struct: ProximateCharacterRangeBounds
mojo.internal.Struct(
    blink.mojom.ProximateCharacterRangeBoundsSpec, 'blink.mojom.ProximateCharacterRangeBounds', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('widget_bounds_in_dips', 8, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StylusWritingFocusResult
mojo.internal.Struct(
    blink.mojom.StylusWritingFocusResultSpec, 'blink.mojom.StylusWritingFocusResult', [
      mojo.internal.StructField('focused_edit_bounds', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('caret_bounds', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('proximate_bounds', 16, 0, blink.mojom.ProximateCharacterRangeBoundsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FrameWidget
mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec, 'blink.mojom.FrameWidget_DragTargetDragEnter_Params', [
      mojo.internal.StructField('drag_data', 0, 0, blink.mojom.DragDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('point_in_viewport', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_point', 16, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('operations_allowed', 24, 0, blink.mojom.AllowedDragOperationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_modifiers', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDragEnter_ResponseParamsSpec, 'blink.mojom.FrameWidget_DragTargetDragEnter_ResponseParams', [
      mojo.internal.StructField('operation', 0, 0, ui.mojom.DragOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_is_handling_drag', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDragOver_ParamsSpec, 'blink.mojom.FrameWidget_DragTargetDragOver_Params', [
      mojo.internal.StructField('point_in_viewport', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_point', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('operations_allowed', 16, 0, blink.mojom.AllowedDragOperationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_modifiers', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDragOver_ResponseParamsSpec, 'blink.mojom.FrameWidget_DragTargetDragOver_ResponseParams', [
      mojo.internal.StructField('operation', 0, 0, ui.mojom.DragOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_is_handling_drag', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec, 'blink.mojom.FrameWidget_DragTargetDragLeave_Params', [
      mojo.internal.StructField('point_in_viewport', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_point', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDrop_ParamsSpec, 'blink.mojom.FrameWidget_DragTargetDrop_Params', [
      mojo.internal.StructField('drag_data', 0, 0, blink.mojom.DragDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('point_in_viewport', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_point', 16, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_modifiers', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDrop_ResponseParamsSpec, 'blink.mojom.FrameWidget_DragTargetDrop_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec, 'blink.mojom.FrameWidget_DragSourceEndedAt_Params', [
      mojo.internal.StructField('point_in_viewport', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_point', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('drag_operation', 16, 0, ui.mojom.DragOperationSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragSourceEndedAt_ResponseParamsSpec, 'blink.mojom.FrameWidget_DragSourceEndedAt_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec, 'blink.mojom.FrameWidget_DragSourceSystemDragEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec, 'blink.mojom.FrameWidget_OnStartStylusWriting_Params', [
      mojo.internal.StructField('focus_widget_rect_in_dips', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_OnStartStylusWriting_ResponseParamsSpec, 'blink.mojom.FrameWidget_OnStartStylusWriting_ResponseParams', [
      mojo.internal.StructField('focus_result', 0, 0, blink.mojom.StylusWritingFocusResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec, 'blink.mojom.FrameWidget_PassImeRenderWidgetHost_Params', [
      mojo.internal.StructField('remote', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.ImeRenderWidgetHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec, 'blink.mojom.FrameWidget_SetBackgroundOpaque_Params', [
      mojo.internal.StructField('opaque', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_SetTextDirection_ParamsSpec, 'blink.mojom.FrameWidget_SetTextDirection_Params', [
      mojo.internal.StructField('direction', 0, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_SetActive_ParamsSpec, 'blink.mojom.FrameWidget_SetActive_Params', [
      mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec, 'blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_Params', [
      mojo.internal.StructField('touch_action', 0, 0, cc.mojom.TouchActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec, 'blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_Params', [
      mojo.internal.StructField('is_throttled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('subtree_throttled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('display_locked', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec, 'blink.mojom.FrameWidget_SetIsInertForSubFrame_Params', [
      mojo.internal.StructField('inert', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_GetStringAtPoint_ParamsSpec, 'blink.mojom.FrameWidget_GetStringAtPoint_Params', [
      mojo.internal.StructField('point_in_local_root', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_GetStringAtPoint_ResponseParamsSpec, 'blink.mojom.FrameWidget_GetStringAtPoint_ResponseParams', [
      mojo.internal.StructField('string', 0, 0, ui.mojom.AttributedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('baseline_point', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec, 'blink.mojom.FrameWidget_EnableDeviceEmulation_Params', [
      mojo.internal.StructField('parameters', 0, 0, blink.mojom.DeviceEmulationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cache_behavior', 8, 0, blink.mojom.DeviceEmulationCacheBehaviorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec, 'blink.mojom.FrameWidget_DisableDeviceEmulation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec, 'blink.mojom.FrameWidget_BindWidgetCompositor_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.WidgetCompositorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_SetViewportIntersection_ParamsSpec, 'blink.mojom.FrameWidget_SetViewportIntersection_Params', [
      mojo.internal.StructField('intersection_state', 0, 0, blink.mojom.ViewportIntersectionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visual_properties', 8, 0, blink.mojom.VisualPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec, 'blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_Params', [
    ],
    [[0, 8]]);

blink.mojom.FrameWidgetPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FrameWidgetRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FrameWidget';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FrameWidgetPendingReceiver,
      handle);
    this.$ = new blink.mojom.FrameWidgetRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FrameWidgetRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameWidget', [
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

  dragTargetDragEnter(drag_data, point_in_viewport, screen_point, operations_allowed, key_modifiers) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec,
      blink.mojom.FrameWidget_DragTargetDragEnter_ResponseParamsSpec,
      [drag_data, point_in_viewport, screen_point, operations_allowed, key_modifiers],
      false);
  }

  dragTargetDragOver(point_in_viewport, screen_point, operations_allowed, key_modifiers) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.FrameWidget_DragTargetDragOver_ParamsSpec,
      blink.mojom.FrameWidget_DragTargetDragOver_ResponseParamsSpec,
      [point_in_viewport, screen_point, operations_allowed, key_modifiers],
      false);
  }

  dragTargetDragLeave(point_in_viewport, screen_point) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec,
      null,
      [point_in_viewport, screen_point],
      false);
  }

  dragTargetDrop(drag_data, point_in_viewport, screen_point, key_modifiers) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.FrameWidget_DragTargetDrop_ParamsSpec,
      blink.mojom.FrameWidget_DragTargetDrop_ResponseParamsSpec,
      [drag_data, point_in_viewport, screen_point, key_modifiers],
      false);
  }

  dragSourceEndedAt(point_in_viewport, screen_point, drag_operation) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec,
      blink.mojom.FrameWidget_DragSourceEndedAt_ResponseParamsSpec,
      [point_in_viewport, screen_point, drag_operation],
      false);
  }

  dragSourceSystemDragEnded() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec,
      null,
      [],
      false);
  }

  onStartStylusWriting(focus_widget_rect_in_dips) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec,
      blink.mojom.FrameWidget_OnStartStylusWriting_ResponseParamsSpec,
      [focus_widget_rect_in_dips],
      false);
  }

  passImeRenderWidgetHost(remote) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec,
      null,
      [remote],
      false);
  }

  setBackgroundOpaque(opaque) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec,
      null,
      [opaque],
      false);
  }

  setTextDirection(direction) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.FrameWidget_SetTextDirection_ParamsSpec,
      null,
      [direction],
      false);
  }

  setActive(active) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.FrameWidget_SetActive_ParamsSpec,
      null,
      [active],
      false);
  }

  setInheritedEffectiveTouchActionForSubFrame(touch_action) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec,
      null,
      [touch_action],
      false);
  }

  updateRenderThrottlingStatusForSubFrame(is_throttled, subtree_throttled, display_locked) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec,
      null,
      [is_throttled, subtree_throttled, display_locked],
      false);
  }

  setIsInertForSubFrame(inert) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      blink.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec,
      null,
      [inert],
      false);
  }

  getStringAtPoint(point_in_local_root) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      blink.mojom.FrameWidget_GetStringAtPoint_ParamsSpec,
      blink.mojom.FrameWidget_GetStringAtPoint_ResponseParamsSpec,
      [point_in_local_root],
      false);
  }

  enableDeviceEmulation(parameters, cache_behavior) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      blink.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec,
      null,
      [parameters, cache_behavior],
      false);
  }

  disableDeviceEmulation() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      blink.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec,
      null,
      [],
      false);
  }

  bindWidgetCompositor(host) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      blink.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec,
      null,
      [host],
      false);
  }

  setViewportIntersection(intersection_state, visual_properties) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      blink.mojom.FrameWidget_SetViewportIntersection_ParamsSpec,
      null,
      [intersection_state, visual_properties],
      false);
  }

  notifyClearedDisplayedGraphics() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.FrameWidget.getRemote = function() {
  let remote = new blink.mojom.FrameWidgetRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FrameWidget',
    'context');
  return remote.$;
};

blink.mojom.FrameWidgetReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameWidget', [
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
        
        // Try Method 0: DragTargetDragEnter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragTargetDragEnter (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DragTargetDragOver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_DragTargetDragOver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragTargetDragOver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DragTargetDragLeave
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragTargetDragLeave (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DragTargetDrop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_DragTargetDrop_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragTargetDrop (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DragSourceEndedAt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragSourceEndedAt (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DragSourceSystemDragEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragSourceSystemDragEnded (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnStartStylusWriting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStartStylusWriting (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: PassImeRenderWidgetHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PassImeRenderWidgetHost (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetBackgroundOpaque
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundOpaque (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetTextDirection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_SetTextDirection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTextDirection (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetActive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_SetActive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetActive (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetInheritedEffectiveTouchActionForSubFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInheritedEffectiveTouchActionForSubFrame (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: UpdateRenderThrottlingStatusForSubFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRenderThrottlingStatusForSubFrame (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetIsInertForSubFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsInertForSubFrame (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetStringAtPoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_GetStringAtPoint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStringAtPoint (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: EnableDeviceEmulation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableDeviceEmulation (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: DisableDeviceEmulation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableDeviceEmulation (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: BindWidgetCompositor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindWidgetCompositor (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SetViewportIntersection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_SetViewportIntersection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetViewportIntersection (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: NotifyClearedDisplayedGraphics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyClearedDisplayedGraphics (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dragTargetDragEnter');
          const result = this.impl.dragTargetDragEnter(params.drag_data, params.point_in_viewport, params.screen_point, params.operations_allowed, params.key_modifiers);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidget_DragTargetDragEnter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_DragTargetDragOver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dragTargetDragOver');
          const result = this.impl.dragTargetDragOver(params.point_in_viewport, params.screen_point, params.operations_allowed, params.key_modifiers);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidget_DragTargetDragOver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dragTargetDragLeave');
          const result = this.impl.dragTargetDragLeave(params.point_in_viewport, params.screen_point);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_DragTargetDrop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dragTargetDrop');
          const result = this.impl.dragTargetDrop(params.drag_data, params.point_in_viewport, params.screen_point, params.key_modifiers);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidget_DragTargetDrop_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dragSourceEndedAt');
          const result = this.impl.dragSourceEndedAt(params.point_in_viewport, params.screen_point, params.drag_operation);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidget_DragSourceEndedAt_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dragSourceSystemDragEnded');
          const result = this.impl.dragSourceSystemDragEnded();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStartStylusWriting');
          const result = this.impl.onStartStylusWriting(params.focus_widget_rect_in_dips);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidget_OnStartStylusWriting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.passImeRenderWidgetHost');
          const result = this.impl.passImeRenderWidgetHost(params.remote);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundOpaque');
          const result = this.impl.setBackgroundOpaque(params.opaque);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_SetTextDirection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTextDirection');
          const result = this.impl.setTextDirection(params.direction);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_SetActive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setActive');
          const result = this.impl.setActive(params.active);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInheritedEffectiveTouchActionForSubFrame');
          const result = this.impl.setInheritedEffectiveTouchActionForSubFrame(params.touch_action);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateRenderThrottlingStatusForSubFrame');
          const result = this.impl.updateRenderThrottlingStatusForSubFrame(params.is_throttled, params.subtree_throttled, params.display_locked);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIsInertForSubFrame');
          const result = this.impl.setIsInertForSubFrame(params.inert);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_GetStringAtPoint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStringAtPoint');
          const result = this.impl.getStringAtPoint(params.point_in_local_root);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidget_GetStringAtPoint_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableDeviceEmulation');
          const result = this.impl.enableDeviceEmulation(params.parameters, params.cache_behavior);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableDeviceEmulation');
          const result = this.impl.disableDeviceEmulation();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindWidgetCompositor');
          const result = this.impl.bindWidgetCompositor(params.host);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_SetViewportIntersection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setViewportIntersection');
          const result = this.impl.setViewportIntersection(params.intersection_state, params.visual_properties);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyClearedDisplayedGraphics');
          const result = this.impl.notifyClearedDisplayedGraphics();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.FrameWidgetReceiver = blink.mojom.FrameWidgetReceiver;

blink.mojom.FrameWidgetPtr = blink.mojom.FrameWidgetRemote;
blink.mojom.FrameWidgetRequest = blink.mojom.FrameWidgetPendingReceiver;


// Interface: FrameWidgetHost
mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec, 'blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_Params', [
      mojo.internal.StructField('tap_point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rect_to_zoom', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec, 'blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_Params', [
      mojo.internal.StructField('rect_to_zoom', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec, 'blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_Params', [
      mojo.internal.StructField('touch_event_consumers', 0, 0, blink.mojom.TouchEventConsumersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec, 'blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_Params', [
      mojo.internal.StructField('sizing_info', 0, 0, blink.mojom.IntrinsicSizingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec, 'blink.mojom.FrameWidgetHost_AutoscrollStart_Params', [
      mojo.internal.StructField('position', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec, 'blink.mojom.FrameWidgetHost_AutoscrollFling_Params', [
      mojo.internal.StructField('velocity', 0, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec, 'blink.mojom.FrameWidgetHost_AutoscrollEnd_Params', [
    ],
    [[0, 8]]);

blink.mojom.FrameWidgetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FrameWidgetHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FrameWidgetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FrameWidgetHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FrameWidgetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FrameWidgetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameWidgetHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  animateDoubleTapZoomInMainFrame(tap_point, rect_to_zoom) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec,
      null,
      [tap_point, rect_to_zoom],
      false);
  }

  zoomToFindInPageRectInMainFrame(rect_to_zoom) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec,
      null,
      [rect_to_zoom],
      false);
  }

  setHasTouchEventConsumers(touch_event_consumers) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec,
      null,
      [touch_event_consumers],
      false);
  }

  intrinsicSizingInfoChanged(sizing_info) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec,
      null,
      [sizing_info],
      false);
  }

  autoscrollStart(position) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec,
      null,
      [position],
      false);
  }

  autoscrollFling(velocity) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec,
      null,
      [velocity],
      false);
  }

  autoscrollEnd() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.FrameWidgetHost.getRemote = function() {
  let remote = new blink.mojom.FrameWidgetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FrameWidgetHost',
    'context');
  return remote.$;
};

blink.mojom.FrameWidgetHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameWidgetHost', [
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
        
        // Try Method 0: AnimateDoubleTapZoomInMainFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AnimateDoubleTapZoomInMainFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ZoomToFindInPageRectInMainFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ZoomToFindInPageRectInMainFrame (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetHasTouchEventConsumers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasTouchEventConsumers (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: IntrinsicSizingInfoChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IntrinsicSizingInfoChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AutoscrollStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AutoscrollStart (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: AutoscrollFling
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AutoscrollFling (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AutoscrollEnd
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AutoscrollEnd (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.animateDoubleTapZoomInMainFrame');
          const result = this.impl.animateDoubleTapZoomInMainFrame(params.tap_point, params.rect_to_zoom);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.zoomToFindInPageRectInMainFrame');
          const result = this.impl.zoomToFindInPageRectInMainFrame(params.rect_to_zoom);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHasTouchEventConsumers');
          const result = this.impl.setHasTouchEventConsumers(params.touch_event_consumers);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.intrinsicSizingInfoChanged');
          const result = this.impl.intrinsicSizingInfoChanged(params.sizing_info);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.autoscrollStart');
          const result = this.impl.autoscrollStart(params.position);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.autoscrollFling');
          const result = this.impl.autoscrollFling(params.velocity);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.autoscrollEnd');
          const result = this.impl.autoscrollEnd();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.FrameWidgetHostReceiver = blink.mojom.FrameWidgetHostReceiver;

blink.mojom.FrameWidgetHostPtr = blink.mojom.FrameWidgetHostRemote;
blink.mojom.FrameWidgetHostRequest = blink.mojom.FrameWidgetHostPendingReceiver;


// Interface: PopupWidgetHost
mojo.internal.Struct(
    blink.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec, 'blink.mojom.PopupWidgetHost_RequestClosePopup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PopupWidgetHost_ShowPopup_ParamsSpec, 'blink.mojom.PopupWidgetHost_ShowPopup_Params', [
      mojo.internal.StructField('initial_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_rect', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PopupWidgetHost_ShowPopup_ResponseParamsSpec, 'blink.mojom.PopupWidgetHost_ShowPopup_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec, 'blink.mojom.PopupWidgetHost_SetPopupBounds_Params', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PopupWidgetHost_SetPopupBounds_ResponseParamsSpec, 'blink.mojom.PopupWidgetHost_SetPopupBounds_ResponseParams', [
    ],
    [[0, 8]]);

blink.mojom.PopupWidgetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PopupWidgetHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PopupWidgetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PopupWidgetHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.PopupWidgetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PopupWidgetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PopupWidgetHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestClosePopup() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec,
      null,
      [],
      false);
  }

  showPopup(initial_rect, anchor_rect) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.PopupWidgetHost_ShowPopup_ParamsSpec,
      blink.mojom.PopupWidgetHost_ShowPopup_ResponseParamsSpec,
      [initial_rect, anchor_rect],
      false);
  }

  setPopupBounds(bounds) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec,
      blink.mojom.PopupWidgetHost_SetPopupBounds_ResponseParamsSpec,
      [bounds],
      false);
  }

};

blink.mojom.PopupWidgetHost.getRemote = function() {
  let remote = new blink.mojom.PopupWidgetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PopupWidgetHost',
    'context');
  return remote.$;
};

blink.mojom.PopupWidgetHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PopupWidgetHost', [
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
        
        // Try Method 0: RequestClosePopup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestClosePopup (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ShowPopup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PopupWidgetHost_ShowPopup_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPopup (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetPopupBounds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPopupBounds (2)');
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
          const params = decoder.decodeStructInline(blink.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestClosePopup');
          const result = this.impl.requestClosePopup();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PopupWidgetHost_ShowPopup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showPopup');
          const result = this.impl.showPopup(params.initial_rect, params.anchor_rect);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PopupWidgetHost_ShowPopup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPopupBounds');
          const result = this.impl.setPopupBounds(params.bounds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PopupWidgetHost_SetPopupBounds_ResponseParamsSpec);
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

blink.mojom.PopupWidgetHostReceiver = blink.mojom.PopupWidgetHostReceiver;

blink.mojom.PopupWidgetHostPtr = blink.mojom.PopupWidgetHostRemote;
blink.mojom.PopupWidgetHostRequest = blink.mojom.PopupWidgetHostPendingReceiver;

