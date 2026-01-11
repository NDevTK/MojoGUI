// Auto-generated MojoJS binding
 // Source: chromium_src/components/remote_cocoa/common/native_widget_ns_window_host.mojom
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
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.display = mojo.internal.bindings.display || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.remote_cocoa.mojom.HitTestResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remote_cocoa.mojom.ValidateUserInterfaceItemResultSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost = {};
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost.$interfaceName = 'remote_cocoa.mojom.NativeWidgetNSWindowHost';
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ResponseParamsSpec = { $: {} };

// Enum: HitTestResult
mojo.internal.bindings.remote_cocoa.mojom.HitTestResult = {
  kDraggableBackground: 0,
  kRootView: 1,
  kSubView: 2,
  kOther: 3,
};

// Struct: ValidateUserInterfaceItemResult
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.ValidateUserInterfaceItemResultSpec, 'remote_cocoa.mojom.ValidateUserInterfaceItemResult', [
      mojo.internal.StructField('arg_new_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_enable', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_if_has_no_key_equivalent', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_set_hidden_state', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_new_hidden_state', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_set_toggle_state', 8, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_new_toggle_state', 8, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: NativeWidgetNSWindowHost
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_Params', [
      mojo.internal.StructField('arg_is_space_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_Params', [
      mojo.internal.StructField('arg_new_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParams', [
      mojo.internal.StructField('arg_offset_y', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_Params', [
      mojo.internal.StructField('arg_is_first_responder', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_Params', [
      mojo.internal.StructField('arg_capture_is_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.ui.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.ui.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.ui.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.ui.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParams', [
      mojo.internal.StructField('arg_event_handled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.ui.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParams', [
      mojo.internal.StructField('arg_event_swallowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_event_handled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.ui.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_target_is_this_window', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParams', [
      mojo.internal.StructField('arg_event_handled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParams', [
      mojo.internal.StructField('arg_has_menu_controller', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_Params', [
      mojo.internal.StructField('arg_location_in_content', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParams', [
      mojo.internal.StructField('arg_hit_test_result', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.HitTestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_Params', [
      mojo.internal.StructField('arg_location_in_content', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParams', [
      mojo.internal.StructField('arg_new_tooltip_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParams', [
      mojo.internal.StructField('arg_widget_is_modal', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParams', [
      mojo.internal.StructField('arg_is_textual', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_Params', [
      mojo.internal.StructField('arg_window_bounds_in_screen_dips', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_content_bounds_in_screen_dips', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_Params', [
      mojo.internal.StructField('arg_target_fullscreen_state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_Params', [
      mojo.internal.StructField('arg_is_fullscreen', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_Params', [
      mojo.internal.StructField('arg_miniaturized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_Params', [
      mojo.internal.StructField('arg_zoomed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_Params', [
      mojo.internal.StructField('arg_display', 0, 0, mojo.internal.bindings.display.mojom.DisplaySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_Params', [
      mojo.internal.StructField('arg_is_key', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_content_first_responder', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_full_keyboard_access_enabled', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_Params', [
      mojo.internal.StructField('arg_is_revealed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_Params', [
      mojo.internal.StructField('arg_reveal_amount', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_Params', [
      mojo.internal.StructField('arg_menu_bar_height', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_Params', [
      mojo.internal.StructField('arg_button', 0, 0, mojo.internal.bindings.ui.mojom.DialogButtonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_Params', [
      mojo.internal.StructField('arg_button', 0, 0, mojo.internal.bindings.ui.mojom.DialogButtonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParams', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_button_exists', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_button_enabled', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_button_default', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParams', [
      mojo.internal.StructField('arg_buttons_exist', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParams', [
      mojo.internal.StructField('arg_should_show_window_title', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParams', [
      mojo.internal.StructField('arg_can_window_become_key', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParams', [
      mojo.internal.StructField('arg_always_render_as_key', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParams', [
      mojo.internal.StructField('arg_can_window_close', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParams', [
      mojo.internal.StructField('arg_titlebar_height', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_override_titlebar_height', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_Params', [
      mojo.internal.StructField('arg_window_token', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_view_token', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParams', [
      mojo.internal.StructField('arg_host_pid', 0, 0, mojo.internal.bindings.mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_element_token', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_Params', [
      mojo.internal.StructField('arg_command', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.ValidateUserInterfaceItemResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_Params', [
      mojo.internal.StructField('arg_window_open_disposition', 0, 0, mojo.internal.bindings.ui.mojom.WindowOpenDispositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_command', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_before_first_responder', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParams', [
      mojo.internal.StructField('arg_will_execute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_Params', [
      mojo.internal.StructField('arg_window_open_disposition', 0, 0, mojo.internal.bindings.ui.mojom.WindowOpenDispositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_command', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_before_first_responder', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ResponseParams', [
      mojo.internal.StructField('arg_was_executed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_Params', [
      mojo.internal.StructField('arg_accelerator', 0, 0, mojo.internal.bindings.ui.mojom.AcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_require_priority_handler', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ResponseParams', [
      mojo.internal.StructField('arg_was_handled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHostRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.NativeWidgetNSWindowHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onVisibilityChanged(arg_visible) {
    return this.$.onVisibilityChanged(arg_visible);
  }
  onSpaceActivationChanged(arg_is_space_active) {
    return this.$.onSpaceActivationChanged(arg_is_space_active);
  }
  onWindowNativeThemeChanged() {
    return this.$.onWindowNativeThemeChanged();
  }
  onViewSizeChanged(arg_new_size) {
    return this.$.onViewSizeChanged(arg_new_size);
  }
  getSheetOffsetY() {
    return this.$.getSheetOffsetY();
  }
  setKeyboardAccessible(arg_enabled) {
    return this.$.setKeyboardAccessible(arg_enabled);
  }
  onIsFirstResponderChanged(arg_is_first_responder) {
    return this.$.onIsFirstResponderChanged(arg_is_first_responder);
  }
  onMouseCaptureActiveChanged(arg_capture_is_active) {
    return this.$.onMouseCaptureActiveChanged(arg_capture_is_active);
  }
  onScrollEvent(arg_event) {
    return this.$.onScrollEvent(arg_event);
  }
  onMouseEvent(arg_event) {
    return this.$.onMouseEvent(arg_event);
  }
  onGestureEvent(arg_event) {
    return this.$.onGestureEvent(arg_event);
  }
  dispatchKeyEventRemote(arg_event) {
    return this.$.dispatchKeyEventRemote(arg_event);
  }
  dispatchKeyEventToMenuControllerRemote(arg_event) {
    return this.$.dispatchKeyEventToMenuControllerRemote(arg_event);
  }
  dispatchMonitorEvent(arg_event, arg_target_is_this_window) {
    return this.$.dispatchMonitorEvent(arg_event, arg_target_is_this_window);
  }
  getHasMenuController() {
    return this.$.getHasMenuController();
  }
  getHitTestResult(arg_location_in_content) {
    return this.$.getHitTestResult(arg_location_in_content);
  }
  getTooltipTextAt(arg_location_in_content) {
    return this.$.getTooltipTextAt(arg_location_in_content);
  }
  getWidgetIsModal() {
    return this.$.getWidgetIsModal();
  }
  getIsFocusedViewTextual() {
    return this.$.getIsFocusedViewTextual();
  }
  onWindowGeometryChanged(arg_window_bounds_in_screen_dips, arg_content_bounds_in_screen_dips) {
    return this.$.onWindowGeometryChanged(arg_window_bounds_in_screen_dips, arg_content_bounds_in_screen_dips);
  }
  onWindowWillStartLiveResize() {
    return this.$.onWindowWillStartLiveResize();
  }
  onWindowDidEndLiveResize() {
    return this.$.onWindowDidEndLiveResize();
  }
  onWindowFullscreenTransitionStart(arg_target_fullscreen_state) {
    return this.$.onWindowFullscreenTransitionStart(arg_target_fullscreen_state);
  }
  onWindowFullscreenTransitionComplete(arg_is_fullscreen) {
    return this.$.onWindowFullscreenTransitionComplete(arg_is_fullscreen);
  }
  onWindowMiniaturizedChanged(arg_miniaturized) {
    return this.$.onWindowMiniaturizedChanged(arg_miniaturized);
  }
  onWindowZoomedChanged(arg_zoomed) {
    return this.$.onWindowZoomedChanged(arg_zoomed);
  }
  onWindowDisplayChanged(arg_display) {
    return this.$.onWindowDisplayChanged(arg_display);
  }
  onWindowWillClose() {
    return this.$.onWindowWillClose();
  }
  onWindowHasClosed() {
    return this.$.onWindowHasClosed();
  }
  onWindowKeyStatusChanged(arg_is_key, arg_is_content_first_responder, arg_full_keyboard_access_enabled) {
    return this.$.onWindowKeyStatusChanged(arg_is_key, arg_is_content_first_responder, arg_full_keyboard_access_enabled);
  }
  onWindowStateRestorationDataChanged(arg_data) {
    return this.$.onWindowStateRestorationDataChanged(arg_data);
  }
  onSheetModalShown() {
    return this.$.onSheetModalShown();
  }
  onSheetModalClosed() {
    return this.$.onSheetModalClosed();
  }
  onImmersiveFullscreenToolbarRevealChanged(arg_is_revealed) {
    return this.$.onImmersiveFullscreenToolbarRevealChanged(arg_is_revealed);
  }
  onImmersiveFullscreenMenuBarRevealChanged(arg_reveal_amount) {
    return this.$.onImmersiveFullscreenMenuBarRevealChanged(arg_reveal_amount);
  }
  onAutohidingMenuBarHeightChanged(arg_menu_bar_height) {
    return this.$.onAutohidingMenuBarHeightChanged(arg_menu_bar_height);
  }
  doDialogButtonAction(arg_button) {
    return this.$.doDialogButtonAction(arg_button);
  }
  getDialogButtonInfo(arg_button) {
    return this.$.getDialogButtonInfo(arg_button);
  }
  getDoDialogButtonsExist() {
    return this.$.getDoDialogButtonsExist();
  }
  getShouldShowWindowTitle() {
    return this.$.getShouldShowWindowTitle();
  }
  getCanWindowBecomeKey() {
    return this.$.getCanWindowBecomeKey();
  }
  getAlwaysRenderWindowAsKey() {
    return this.$.getAlwaysRenderWindowAsKey();
  }
  onWindowCloseRequested() {
    return this.$.onWindowCloseRequested();
  }
  getWindowFrameTitlebarHeight() {
    return this.$.getWindowFrameTitlebarHeight();
  }
  onFocusWindowToolbar() {
    return this.$.onFocusWindowToolbar();
  }
  setRemoteAccessibilityTokens(arg_window_token, arg_view_token) {
    return this.$.setRemoteAccessibilityTokens(arg_window_token, arg_view_token);
  }
  getRootViewAccessibilityToken() {
    return this.$.getRootViewAccessibilityToken();
  }
  validateUserInterfaceItem(arg_command) {
    return this.$.validateUserInterfaceItem(arg_command);
  }
  willExecuteCommand(arg_command, arg_window_open_disposition, arg_is_before_first_responder) {
    return this.$.willExecuteCommand(arg_command, arg_window_open_disposition, arg_is_before_first_responder);
  }
  executeCommand(arg_command, arg_window_open_disposition, arg_is_before_first_responder) {
    return this.$.executeCommand(arg_command, arg_window_open_disposition, arg_is_before_first_responder);
  }
  handleAccelerator(arg_accelerator, arg_require_priority_handler) {
    return this.$.handleAccelerator(arg_accelerator, arg_require_priority_handler);
  }
};

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NativeWidgetNSWindowHost', [
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

  onVisibilityChanged(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  onSpaceActivationChanged(arg_is_space_active) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec,
      null,
      [arg_is_space_active],
      false);
  }

  onWindowNativeThemeChanged() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onViewSizeChanged(arg_new_size) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec,
      null,
      [arg_new_size],
      false);
  }

  getSheetOffsetY() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParamsSpec,
      [],
      false);
  }

  setKeyboardAccessible(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  onIsFirstResponderChanged(arg_is_first_responder) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec,
      null,
      [arg_is_first_responder],
      false);
  }

  onMouseCaptureActiveChanged(arg_capture_is_active) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec,
      null,
      [arg_capture_is_active],
      false);
  }

  onScrollEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  onMouseEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  onGestureEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  dispatchKeyEventRemote(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParamsSpec,
      [arg_event],
      false);
  }

  dispatchKeyEventToMenuControllerRemote(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParamsSpec,
      [arg_event],
      false);
  }

  dispatchMonitorEvent(arg_event, arg_target_is_this_window) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParamsSpec,
      [arg_event, arg_target_is_this_window],
      false);
  }

  getHasMenuController() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParamsSpec,
      [],
      false);
  }

  getHitTestResult(arg_location_in_content) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParamsSpec,
      [arg_location_in_content],
      false);
  }

  getTooltipTextAt(arg_location_in_content) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParamsSpec,
      [arg_location_in_content],
      false);
  }

  getWidgetIsModal() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParamsSpec,
      [],
      false);
  }

  getIsFocusedViewTextual() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParamsSpec,
      [],
      false);
  }

  onWindowGeometryChanged(arg_window_bounds_in_screen_dips, arg_content_bounds_in_screen_dips) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec,
      null,
      [arg_window_bounds_in_screen_dips, arg_content_bounds_in_screen_dips],
      false);
  }

  onWindowWillStartLiveResize() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec,
      null,
      [],
      false);
  }

  onWindowDidEndLiveResize() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec,
      null,
      [],
      false);
  }

  onWindowFullscreenTransitionStart(arg_target_fullscreen_state) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec,
      null,
      [arg_target_fullscreen_state],
      false);
  }

  onWindowFullscreenTransitionComplete(arg_is_fullscreen) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec,
      null,
      [arg_is_fullscreen],
      false);
  }

  onWindowMiniaturizedChanged(arg_miniaturized) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec,
      null,
      [arg_miniaturized],
      false);
  }

  onWindowZoomedChanged(arg_zoomed) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec,
      null,
      [arg_zoomed],
      false);
  }

  onWindowDisplayChanged(arg_display) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec,
      null,
      [arg_display],
      false);
  }

  onWindowWillClose() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec,
      null,
      [],
      false);
  }

  onWindowHasClosed() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onWindowKeyStatusChanged(arg_is_key, arg_is_content_first_responder, arg_full_keyboard_access_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec,
      null,
      [arg_is_key, arg_is_content_first_responder, arg_full_keyboard_access_enabled],
      false);
  }

  onWindowStateRestorationDataChanged(arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec,
      null,
      [arg_data],
      false);
  }

  onSheetModalShown() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec,
      null,
      [],
      false);
  }

  onSheetModalClosed() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onImmersiveFullscreenToolbarRevealChanged(arg_is_revealed) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec,
      null,
      [arg_is_revealed],
      false);
  }

  onImmersiveFullscreenMenuBarRevealChanged(arg_reveal_amount) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec,
      null,
      [arg_reveal_amount],
      false);
  }

  onAutohidingMenuBarHeightChanged(arg_menu_bar_height) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec,
      null,
      [arg_menu_bar_height],
      false);
  }

  doDialogButtonAction(arg_button) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec,
      null,
      [arg_button],
      false);
  }

  getDialogButtonInfo(arg_button) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParamsSpec,
      [arg_button],
      false);
  }

  getDoDialogButtonsExist() {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParamsSpec,
      [],
      false);
  }

  getShouldShowWindowTitle() {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParamsSpec,
      [],
      false);
  }

  getCanWindowBecomeKey() {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParamsSpec,
      [],
      false);
  }

  getAlwaysRenderWindowAsKey() {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParamsSpec,
      [],
      false);
  }

  onWindowCloseRequested() {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParamsSpec,
      [],
      false);
  }

  getWindowFrameTitlebarHeight() {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParamsSpec,
      [],
      false);
  }

  onFocusWindowToolbar() {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec,
      null,
      [],
      false);
  }

  setRemoteAccessibilityTokens(arg_window_token, arg_view_token) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec,
      null,
      [arg_window_token, arg_view_token],
      false);
  }

  getRootViewAccessibilityToken() {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParamsSpec,
      [],
      false);
  }

  validateUserInterfaceItem(arg_command) {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParamsSpec,
      [arg_command],
      false);
  }

  willExecuteCommand(arg_command, arg_window_open_disposition, arg_is_before_first_responder) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParamsSpec,
      [arg_command, arg_window_open_disposition, arg_is_before_first_responder],
      false);
  }

  executeCommand(arg_command, arg_window_open_disposition, arg_is_before_first_responder) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ResponseParamsSpec,
      [arg_command, arg_window_open_disposition, arg_is_before_first_responder],
      false);
  }

  handleAccelerator(arg_accelerator, arg_require_priority_handler) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ResponseParamsSpec,
      [arg_accelerator, arg_require_priority_handler],
      false);
  }

};

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost.getRemote = function() {
  let remote = new mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.NativeWidgetNSWindowHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NativeWidgetNSWindowHost', [
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
        
        // Try Method 0: OnVisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVisibilityChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSpaceActivationChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSpaceActivationChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnWindowNativeThemeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowNativeThemeChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnViewSizeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnViewSizeChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetSheetOffsetY
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSheetOffsetY (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetKeyboardAccessible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeyboardAccessible (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnIsFirstResponderChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIsFirstResponderChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnMouseCaptureActiveChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMouseCaptureActiveChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnScrollEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScrollEvent (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnMouseEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMouseEvent (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnGestureEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGestureEvent (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: DispatchKeyEventRemote
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchKeyEventRemote (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: DispatchKeyEventToMenuControllerRemote
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchKeyEventToMenuControllerRemote (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: DispatchMonitorEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchMonitorEvent (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetHasMenuController
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHasMenuController (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: GetHitTestResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHitTestResult (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: GetTooltipTextAt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTooltipTextAt (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: GetWidgetIsModal
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWidgetIsModal (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: GetIsFocusedViewTextual
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIsFocusedViewTextual (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: OnWindowGeometryChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowGeometryChanged (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: OnWindowWillStartLiveResize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowWillStartLiveResize (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: OnWindowDidEndLiveResize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowDidEndLiveResize (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: OnWindowFullscreenTransitionStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowFullscreenTransitionStart (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: OnWindowFullscreenTransitionComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowFullscreenTransitionComplete (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: OnWindowMiniaturizedChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowMiniaturizedChanged (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: OnWindowZoomedChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowZoomedChanged (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: OnWindowDisplayChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowDisplayChanged (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: OnWindowWillClose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowWillClose (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: OnWindowHasClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowHasClosed (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: OnWindowKeyStatusChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowKeyStatusChanged (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: OnWindowStateRestorationDataChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowStateRestorationDataChanged (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: OnSheetModalShown
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSheetModalShown (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: OnSheetModalClosed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSheetModalClosed (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: OnImmersiveFullscreenToolbarRevealChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImmersiveFullscreenToolbarRevealChanged (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: OnImmersiveFullscreenMenuBarRevealChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImmersiveFullscreenMenuBarRevealChanged (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: OnAutohidingMenuBarHeightChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAutohidingMenuBarHeightChanged (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: DoDialogButtonAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoDialogButtonAction (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: GetDialogButtonInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDialogButtonInfo (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: GetDoDialogButtonsExist
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDoDialogButtonsExist (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: GetShouldShowWindowTitle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetShouldShowWindowTitle (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        // Try Method 40: GetCanWindowBecomeKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCanWindowBecomeKey (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 40 failed:', e);
           }
        }
        // Try Method 41: GetAlwaysRenderWindowAsKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAlwaysRenderWindowAsKey (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 41 failed:', e);
           }
        }
        // Try Method 42: OnWindowCloseRequested
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowCloseRequested (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 42 failed:', e);
           }
        }
        // Try Method 43: GetWindowFrameTitlebarHeight
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWindowFrameTitlebarHeight (43)');
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 43 failed:', e);
           }
        }
        // Try Method 44: OnFocusWindowToolbar
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFocusWindowToolbar (44)');
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 44 failed:', e);
           }
        }
        // Try Method 45: SetRemoteAccessibilityTokens
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRemoteAccessibilityTokens (45)');
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 45 failed:', e);
           }
        }
        // Try Method 46: GetRootViewAccessibilityToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRootViewAccessibilityToken (46)');
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 46 failed:', e);
           }
        }
        // Try Method 47: ValidateUserInterfaceItem
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ValidateUserInterfaceItem (47)');
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 47 failed:', e);
           }
        }
        // Try Method 48: WillExecuteCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WillExecuteCommand (48)');
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 48 failed:', e);
           }
        }
        // Try Method 49: ExecuteCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteCommand (49)');
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 49 failed:', e);
           }
        }
        // Try Method 50: HandleAccelerator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleAccelerator (50)');
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 50 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onVisibilityChanged');
          const result = this.impl.onVisibilityChanged(params.arg_visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSpaceActivationChanged');
          const result = this.impl.onSpaceActivationChanged(params.arg_is_space_active);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowNativeThemeChanged');
          const result = this.impl.onWindowNativeThemeChanged();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onViewSizeChanged');
          const result = this.impl.onViewSizeChanged(params.arg_new_size);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSheetOffsetY');
          const result = this.impl.getSheetOffsetY();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSheetOffsetY FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setKeyboardAccessible');
          const result = this.impl.setKeyboardAccessible(params.arg_enabled);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onIsFirstResponderChanged');
          const result = this.impl.onIsFirstResponderChanged(params.arg_is_first_responder);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMouseCaptureActiveChanged');
          const result = this.impl.onMouseCaptureActiveChanged(params.arg_capture_is_active);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onScrollEvent');
          const result = this.impl.onScrollEvent(params.arg_event);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMouseEvent');
          const result = this.impl.onMouseEvent(params.arg_event);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onGestureEvent');
          const result = this.impl.onGestureEvent(params.arg_event);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchKeyEventRemote');
          const result = this.impl.dispatchKeyEventRemote(params.arg_event);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchKeyEventRemote FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchKeyEventToMenuControllerRemote');
          const result = this.impl.dispatchKeyEventToMenuControllerRemote(params.arg_event);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchKeyEventToMenuControllerRemote FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchMonitorEvent');
          const result = this.impl.dispatchMonitorEvent(params.arg_event, params.arg_target_is_this_window);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchMonitorEvent FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHasMenuController');
          const result = this.impl.getHasMenuController();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHasMenuController FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHitTestResult');
          const result = this.impl.getHitTestResult(params.arg_location_in_content);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetHitTestResult FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTooltipTextAt');
          const result = this.impl.getTooltipTextAt(params.arg_location_in_content);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTooltipTextAt FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWidgetIsModal');
          const result = this.impl.getWidgetIsModal();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetWidgetIsModal FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getIsFocusedViewTextual');
          const result = this.impl.getIsFocusedViewTextual();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetIsFocusedViewTextual FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowGeometryChanged');
          const result = this.impl.onWindowGeometryChanged(params.arg_window_bounds_in_screen_dips, params.arg_content_bounds_in_screen_dips);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowWillStartLiveResize');
          const result = this.impl.onWindowWillStartLiveResize();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowDidEndLiveResize');
          const result = this.impl.onWindowDidEndLiveResize();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowFullscreenTransitionStart');
          const result = this.impl.onWindowFullscreenTransitionStart(params.arg_target_fullscreen_state);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowFullscreenTransitionComplete');
          const result = this.impl.onWindowFullscreenTransitionComplete(params.arg_is_fullscreen);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowMiniaturizedChanged');
          const result = this.impl.onWindowMiniaturizedChanged(params.arg_miniaturized);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowZoomedChanged');
          const result = this.impl.onWindowZoomedChanged(params.arg_zoomed);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowDisplayChanged');
          const result = this.impl.onWindowDisplayChanged(params.arg_display);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowWillClose');
          const result = this.impl.onWindowWillClose();
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowHasClosed');
          const result = this.impl.onWindowHasClosed();
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowKeyStatusChanged');
          const result = this.impl.onWindowKeyStatusChanged(params.arg_is_key, params.arg_is_content_first_responder, params.arg_full_keyboard_access_enabled);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowStateRestorationDataChanged');
          const result = this.impl.onWindowStateRestorationDataChanged(params.arg_data);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSheetModalShown');
          const result = this.impl.onSheetModalShown();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSheetModalClosed');
          const result = this.impl.onSheetModalClosed();
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImmersiveFullscreenToolbarRevealChanged');
          const result = this.impl.onImmersiveFullscreenToolbarRevealChanged(params.arg_is_revealed);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onImmersiveFullscreenMenuBarRevealChanged');
          const result = this.impl.onImmersiveFullscreenMenuBarRevealChanged(params.arg_reveal_amount);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAutohidingMenuBarHeightChanged');
          const result = this.impl.onAutohidingMenuBarHeightChanged(params.arg_menu_bar_height);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.doDialogButtonAction');
          const result = this.impl.doDialogButtonAction(params.arg_button);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDialogButtonInfo');
          const result = this.impl.getDialogButtonInfo(params.arg_button);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDialogButtonInfo FAILED:', e));
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDoDialogButtonsExist');
          const result = this.impl.getDoDialogButtonsExist();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDoDialogButtonsExist FAILED:', e));
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getShouldShowWindowTitle');
          const result = this.impl.getShouldShowWindowTitle();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetShouldShowWindowTitle FAILED:', e));
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCanWindowBecomeKey');
          const result = this.impl.getCanWindowBecomeKey();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCanWindowBecomeKey FAILED:', e));
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAlwaysRenderWindowAsKey');
          const result = this.impl.getAlwaysRenderWindowAsKey();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAlwaysRenderWindowAsKey FAILED:', e));
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onWindowCloseRequested');
          const result = this.impl.onWindowCloseRequested();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OnWindowCloseRequested FAILED:', e));
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWindowFrameTitlebarHeight');
          const result = this.impl.getWindowFrameTitlebarHeight();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetWindowFrameTitlebarHeight FAILED:', e));
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFocusWindowToolbar');
          const result = this.impl.onFocusWindowToolbar();
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setRemoteAccessibilityTokens');
          const result = this.impl.setRemoteAccessibilityTokens(params.arg_window_token, params.arg_view_token);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRootViewAccessibilityToken');
          const result = this.impl.getRootViewAccessibilityToken();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetRootViewAccessibilityToken FAILED:', e));
          }
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.validateUserInterfaceItem');
          const result = this.impl.validateUserInterfaceItem(params.arg_command);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ValidateUserInterfaceItem FAILED:', e));
          }
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.willExecuteCommand');
          const result = this.impl.willExecuteCommand(params.arg_command, params.arg_window_open_disposition, params.arg_is_before_first_responder);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WillExecuteCommand FAILED:', e));
          }
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.executeCommand');
          const result = this.impl.executeCommand(params.arg_command, params.arg_window_open_disposition, params.arg_is_before_first_responder);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ExecuteCommand FAILED:', e));
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleAccelerator');
          const result = this.impl.handleAccelerator(params.arg_accelerator, params.arg_require_priority_handler);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HandleAccelerator FAILED:', e));
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

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHostReceiver = mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHostReceiver;

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHostPtr = mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHostRemote;
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHostRequest = mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowHostPendingReceiver;

