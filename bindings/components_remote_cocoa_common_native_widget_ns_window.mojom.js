// Auto-generated MojoJS binding
 // Source: chromium_src/components/remote_cocoa/common/native_widget_ns_window.mojom
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
 

 mojo.internal.bindings.remote_cocoa = mojo.internal.bindings.remote_cocoa || {};
mojo.internal.bindings.remote_cocoa.mojom = mojo.internal.bindings.remote_cocoa.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.remote_cocoa.mojom.WindowClassSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remote_cocoa.mojom.WindowVisibilityStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remote_cocoa.mojom.VisibilityTransitionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remote_cocoa.mojom.ToolbarVisibilityStyleSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remote_cocoa.mojom.CreateWindowParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowInitParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow = {};
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowSpec = { $ : {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow.$interfaceName = 'remote_cocoa.mojom.NativeWidgetNSWindow';
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec = { $: {} };
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_ParamsSpec = { $: {} };

// Enum: WindowClass
mojo.internal.bindings.remote_cocoa.mojom.WindowClass = {
  kDefault: 0,
  kBrowser: 1,
  kFrameless: 2,
  kOverlay: 3,
};

// Enum: WindowVisibilityState
mojo.internal.bindings.remote_cocoa.mojom.WindowVisibilityState = {
  kHideWindow: 0,
  kShowAndActivateWindow: 1,
  kShowInactive: 2,
  kMiniaturizeWindow: 3,
};

// Enum: VisibilityTransition
mojo.internal.bindings.remote_cocoa.mojom.VisibilityTransition = {
  kShow: 1,
  kHide: 2,
  kBoth: 3,
  kNone: 4,
};

// Enum: ToolbarVisibilityStyle
mojo.internal.bindings.remote_cocoa.mojom.ToolbarVisibilityStyle = {
  kNone: 0,
  kAlways: 1,
  kAutohide: 2,
};

// Struct: CreateWindowParams
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.CreateWindowParamsSpec, 'remote_cocoa.mojom.CreateWindowParams', [
      mojo.internal.StructField('arg_window_class', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.WindowClassSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_style_mask', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_titlebar_appears_transparent', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_window_title_hidden', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_animation_enabled', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: NativeWidgetNSWindowInitParams
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowInitParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowInitParams', [
      mojo.internal.StructField('arg_modal_type', 0, 0, mojo.internal.bindings.ui.mojom.ModalTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_state_restoration_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_translucent', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_window_server_shadow', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_force_into_collection_cycle', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_tooltip', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: NativeWidgetNSWindow
mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.CreateWindowParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_Params', [
      mojo.internal.StructField('arg_parent_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_Params', [
      mojo.internal.StructField('arg_dialog', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.remote_cocoa.mojom.SelectFileDialogRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_Params', [
      mojo.internal.StructField('arg_certificate', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_Params', [
      mojo.internal.StructField('arg_sibling_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowInitParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ResponseParams', [
      mojo.internal.StructField('arg_cg_window_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_Params', [
      mojo.internal.StructField('arg_ns_view_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_corner_radius_$value', 16, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_corner_radius_$flag', originalFieldName: 'arg_corner_radius' }),
      mojo.internal.StructField('arg_corner_radius_$flag', 20, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_corner_radius_$value', originalFieldName: 'arg_corner_radius' }),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_Params', [
      mojo.internal.StructField('arg_new_bounds', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_minimum_content_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_Params', [
      mojo.internal.StructField('arg_new_bounds', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_minimum_content_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_maximum_content_size', 16, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_Params', [
      mojo.internal.StructField('arg_new_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_minimum_content_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_Params', [
      mojo.internal.StructField('arg_content_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_minimum_content_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_Params', [
      mojo.internal.StructField('arg_new_state', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.WindowVisibilityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_Params', [
      mojo.internal.StructField('arg_animation_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_Params', [
      mojo.internal.StructField('arg_transitions', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.VisibilityTransitionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_Params', [
      mojo.internal.StructField('arg_always_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_Params', [
      mojo.internal.StructField('arg_target_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_Params', [
      mojo.internal.StructField('arg_can_appear_in_existing_fullscreen_spaces', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_Params', [
      mojo.internal.StructField('arg_miniaturized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_Params', [
      mojo.internal.StructField('arg_zoomed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_Params', [
      mojo.internal.StructField('arg_min_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_resizable', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_maximizable', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_Params', [
      mojo.internal.StructField('arg_opacity', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_Params', [
      mojo.internal.StructField('arg_level', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_Params', [
      mojo.internal.StructField('arg_independence', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_Params', [
      mojo.internal.StructField('arg_aspect_ratio', 0, 0, mojo.internal.bindings.gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_excluded_margin', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_Params', [
      mojo.internal.StructField('arg_ca_layer_params', 0, 0, mojo.internal.bindings.gfx.mojom.CALayerParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_Params', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_Params', [
      mojo.internal.StructField('arg_ignores_mouse_events', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_Params', [
      mojo.internal.StructField('arg_attached_subview_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_Params', [
      mojo.internal.StructField('arg_native_event_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_Params', [
      mojo.internal.StructField('arg_cursor', 0, 0, mojo.internal.bindings.ui.mojom.CursorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_Params', [
      mojo.internal.StructField('arg_fullscreen_overlay_widget_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tab_widget_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_Params', [
      mojo.internal.StructField('arg_style', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.ToolbarVisibilityStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_Params', [
      mojo.internal.StructField('arg_bounds', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_Params', [
      mojo.internal.StructField('arg_can_go_back', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_Params', [
      mojo.internal.StructField('arg_can_go_forward', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_Params', [
      mojo.internal.StructField('arg_menu', 0, 0, mojo.internal.bindings.remote_cocoa.mojom.ContextMenuSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_host', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.remote_cocoa.mojom.MenuHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_receiver', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.remote_cocoa.mojom.MenuRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_Params', [
      mojo.internal.StructField('arg_allow', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_Params', [
      mojo.internal.StructField('arg_color_mode', 0, 0, mojo.internal.bindings.ui.mojom.ColorModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.NativeWidgetNSWindow';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createWindow(arg_params) {
    return this.$.createWindow(arg_params);
  }
  setParent(arg_parent_id) {
    return this.$.setParent(arg_parent_id);
  }
  createSelectFileDialog(arg_dialog) {
    return this.$.createSelectFileDialog(arg_dialog);
  }
  showCertificateViewer(arg_certificate) {
    return this.$.showCertificateViewer(arg_certificate);
  }
  stackAbove(arg_sibling_id) {
    return this.$.stackAbove(arg_sibling_id);
  }
  stackAtTop() {
    return this.$.stackAtTop();
  }
  showEmojiPanel() {
    return this.$.showEmojiPanel();
  }
  initWindow(arg_params) {
    return this.$.initWindow(arg_params);
  }
  initCompositorView() {
    return this.$.initCompositorView();
  }
  createContentView(arg_ns_view_id, arg_bounds, arg_corner_radius) {
    return this.$.createContentView(arg_ns_view_id, arg_bounds, arg_corner_radius);
  }
  destroyContentView() {
    return this.$.destroyContentView();
  }
  closeWindow() {
    return this.$.closeWindow();
  }
  closeWindowNow() {
    return this.$.closeWindowNow();
  }
  setInitialBounds(arg_new_bounds, arg_minimum_content_size) {
    return this.$.setInitialBounds(arg_new_bounds, arg_minimum_content_size);
  }
  setBounds(arg_new_bounds, arg_minimum_content_size, arg_maximum_content_size) {
    return this.$.setBounds(arg_new_bounds, arg_minimum_content_size, arg_maximum_content_size);
  }
  setSize(arg_new_size, arg_minimum_content_size) {
    return this.$.setSize(arg_new_size, arg_minimum_content_size);
  }
  setSizeAndCenter(arg_content_size, arg_minimum_content_size) {
    return this.$.setSizeAndCenter(arg_content_size, arg_minimum_content_size);
  }
  setVisibilityState(arg_new_state) {
    return this.$.setVisibilityState(arg_new_state);
  }
  setAnimationEnabled(arg_animation_enabled) {
    return this.$.setAnimationEnabled(arg_animation_enabled);
  }
  setTransitionsToAnimate(arg_transitions) {
    return this.$.setTransitionsToAnimate(arg_transitions);
  }
  setVisibleOnAllSpaces(arg_always_visible) {
    return this.$.setVisibleOnAllSpaces(arg_always_visible);
  }
  enterFullscreen(arg_target_display_id) {
    return this.$.enterFullscreen(arg_target_display_id);
  }
  exitFullscreen() {
    return this.$.exitFullscreen();
  }
  setCanAppearInExistingFullscreenSpaces(arg_can_appear_in_existing_fullscreen_spaces) {
    return this.$.setCanAppearInExistingFullscreenSpaces(arg_can_appear_in_existing_fullscreen_spaces);
  }
  setMiniaturized(arg_miniaturized) {
    return this.$.setMiniaturized(arg_miniaturized);
  }
  setZoomed(arg_zoomed) {
    return this.$.setZoomed(arg_zoomed);
  }
  setSizeConstraints(arg_min_size, arg_max_size, arg_is_resizable, arg_is_maximizable) {
    return this.$.setSizeConstraints(arg_min_size, arg_max_size, arg_is_resizable, arg_is_maximizable);
  }
  setOpacity(arg_opacity) {
    return this.$.setOpacity(arg_opacity);
  }
  setWindowLevel(arg_level) {
    return this.$.setWindowLevel(arg_level);
  }
  setActivationIndependence(arg_independence) {
    return this.$.setActivationIndependence(arg_independence);
  }
  setAspectRatio(arg_aspect_ratio, arg_excluded_margin) {
    return this.$.setAspectRatio(arg_aspect_ratio, arg_excluded_margin);
  }
  setCALayerParams(arg_ca_layer_params) {
    return this.$.setCALayerParams(arg_ca_layer_params);
  }
  setWindowTitle(arg_title) {
    return this.$.setWindowTitle(arg_title);
  }
  setIgnoresMouseEvents(arg_ignores_mouse_events) {
    return this.$.setIgnoresMouseEvents(arg_ignores_mouse_events);
  }
  makeFirstResponder() {
    return this.$.makeFirstResponder();
  }
  sortSubviews(arg_attached_subview_ids) {
    return this.$.sortSubviews(arg_attached_subview_ids);
  }
  clearTouchBar() {
    return this.$.clearTouchBar();
  }
  updateTooltip() {
    return this.$.updateTooltip();
  }
  acquireCapture() {
    return this.$.acquireCapture();
  }
  releaseCapture() {
    return this.$.releaseCapture();
  }
  redispatchKeyEvent(arg_native_event_data) {
    return this.$.redispatchKeyEvent(arg_native_event_data);
  }
  setLocalEventMonitorEnabled(arg_enabled) {
    return this.$.setLocalEventMonitorEnabled(arg_enabled);
  }
  setCursor(arg_cursor) {
    return this.$.setCursor(arg_cursor);
  }
  enableImmersiveFullscreen(arg_fullscreen_overlay_widget_id, arg_tab_widget_id) {
    return this.$.enableImmersiveFullscreen(arg_fullscreen_overlay_widget_id, arg_tab_widget_id);
  }
  disableImmersiveFullscreen() {
    return this.$.disableImmersiveFullscreen();
  }
  updateToolbarVisibility(arg_style) {
    return this.$.updateToolbarVisibility(arg_style);
  }
  onTopContainerViewBoundsChanged(arg_bounds) {
    return this.$.onTopContainerViewBoundsChanged(arg_bounds);
  }
  immersiveFullscreenRevealLock() {
    return this.$.immersiveFullscreenRevealLock();
  }
  immersiveFullscreenRevealUnlock() {
    return this.$.immersiveFullscreenRevealUnlock();
  }
  setCanGoBack(arg_can_go_back) {
    return this.$.setCanGoBack(arg_can_go_back);
  }
  setCanGoForward(arg_can_go_forward) {
    return this.$.setCanGoForward(arg_can_go_forward);
  }
  displayContextMenu(arg_menu, arg_host, arg_receiver) {
    return this.$.displayContextMenu(arg_menu, arg_host, arg_receiver);
  }
  setAllowScreenshots(arg_allow) {
    return this.$.setAllowScreenshots(arg_allow);
  }
  setColorMode(arg_color_mode) {
    return this.$.setColorMode(arg_color_mode);
  }
};

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remote_cocoa.mojom.NativeWidgetNSWindow', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createWindow(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  setParent(arg_parent_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec,
      null,
      [arg_parent_id],
      false);
  }

  createSelectFileDialog(arg_dialog) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec,
      null,
      [arg_dialog],
      false);
  }

  showCertificateViewer(arg_certificate) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec,
      null,
      [arg_certificate],
      false);
  }

  stackAbove(arg_sibling_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec,
      null,
      [arg_sibling_id],
      false);
  }

  stackAtTop() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec,
      null,
      [],
      false);
  }

  showEmojiPanel() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec,
      null,
      [],
      false);
  }

  initWindow(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  initCompositorView() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec,
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ResponseParamsSpec,
      [],
      false);
  }

  createContentView(arg_ns_view_id, arg_bounds, arg_corner_radius) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec,
      null,
      [arg_ns_view_id, arg_bounds, arg_corner_radius],
      false);
  }

  destroyContentView() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec,
      null,
      [],
      false);
  }

  closeWindow() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec,
      null,
      [],
      false);
  }

  closeWindowNow() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec,
      null,
      [],
      false);
  }

  setInitialBounds(arg_new_bounds, arg_minimum_content_size) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec,
      null,
      [arg_new_bounds, arg_minimum_content_size],
      false);
  }

  setBounds(arg_new_bounds, arg_minimum_content_size, arg_maximum_content_size) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec,
      null,
      [arg_new_bounds, arg_minimum_content_size, arg_maximum_content_size],
      false);
  }

  setSize(arg_new_size, arg_minimum_content_size) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec,
      null,
      [arg_new_size, arg_minimum_content_size],
      false);
  }

  setSizeAndCenter(arg_content_size, arg_minimum_content_size) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec,
      null,
      [arg_content_size, arg_minimum_content_size],
      false);
  }

  setVisibilityState(arg_new_state) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec,
      null,
      [arg_new_state],
      false);
  }

  setAnimationEnabled(arg_animation_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec,
      null,
      [arg_animation_enabled],
      false);
  }

  setTransitionsToAnimate(arg_transitions) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec,
      null,
      [arg_transitions],
      false);
  }

  setVisibleOnAllSpaces(arg_always_visible) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec,
      null,
      [arg_always_visible],
      false);
  }

  enterFullscreen(arg_target_display_id) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec,
      null,
      [arg_target_display_id],
      false);
  }

  exitFullscreen() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec,
      null,
      [],
      false);
  }

  setCanAppearInExistingFullscreenSpaces(arg_can_appear_in_existing_fullscreen_spaces) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec,
      null,
      [arg_can_appear_in_existing_fullscreen_spaces],
      false);
  }

  setMiniaturized(arg_miniaturized) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec,
      null,
      [arg_miniaturized],
      false);
  }

  setZoomed(arg_zoomed) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec,
      null,
      [arg_zoomed],
      false);
  }

  setSizeConstraints(arg_min_size, arg_max_size, arg_is_resizable, arg_is_maximizable) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec,
      null,
      [arg_min_size, arg_max_size, arg_is_resizable, arg_is_maximizable],
      false);
  }

  setOpacity(arg_opacity) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec,
      null,
      [arg_opacity],
      false);
  }

  setWindowLevel(arg_level) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec,
      null,
      [arg_level],
      false);
  }

  setActivationIndependence(arg_independence) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec,
      null,
      [arg_independence],
      false);
  }

  setAspectRatio(arg_aspect_ratio, arg_excluded_margin) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec,
      null,
      [arg_aspect_ratio, arg_excluded_margin],
      false);
  }

  setCALayerParams(arg_ca_layer_params) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec,
      null,
      [arg_ca_layer_params],
      false);
  }

  setWindowTitle(arg_title) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec,
      null,
      [arg_title],
      false);
  }

  setIgnoresMouseEvents(arg_ignores_mouse_events) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec,
      null,
      [arg_ignores_mouse_events],
      false);
  }

  makeFirstResponder() {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec,
      null,
      [],
      false);
  }

  sortSubviews(arg_attached_subview_ids) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec,
      null,
      [arg_attached_subview_ids],
      false);
  }

  clearTouchBar() {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec,
      null,
      [],
      false);
  }

  updateTooltip() {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec,
      null,
      [],
      false);
  }

  acquireCapture() {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec,
      null,
      [],
      false);
  }

  releaseCapture() {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec,
      null,
      [],
      false);
  }

  redispatchKeyEvent(arg_native_event_data) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec,
      null,
      [arg_native_event_data],
      false);
  }

  setLocalEventMonitorEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  setCursor(arg_cursor) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec,
      null,
      [arg_cursor],
      false);
  }

  enableImmersiveFullscreen(arg_fullscreen_overlay_widget_id, arg_tab_widget_id) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec,
      null,
      [arg_fullscreen_overlay_widget_id, arg_tab_widget_id],
      false);
  }

  disableImmersiveFullscreen() {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec,
      null,
      [],
      false);
  }

  updateToolbarVisibility(arg_style) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec,
      null,
      [arg_style],
      false);
  }

  onTopContainerViewBoundsChanged(arg_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec,
      null,
      [arg_bounds],
      false);
  }

  immersiveFullscreenRevealLock() {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec,
      null,
      [],
      false);
  }

  immersiveFullscreenRevealUnlock() {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec,
      null,
      [],
      false);
  }

  setCanGoBack(arg_can_go_back) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec,
      null,
      [arg_can_go_back],
      false);
  }

  setCanGoForward(arg_can_go_forward) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec,
      null,
      [arg_can_go_forward],
      false);
  }

  displayContextMenu(arg_menu, arg_host, arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec,
      null,
      [arg_menu, arg_host, arg_receiver],
      false);
  }

  setAllowScreenshots(arg_allow) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec,
      null,
      [arg_allow],
      false);
  }

  setColorMode(arg_color_mode) {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_ParamsSpec,
      null,
      [arg_color_mode],
      false);
  }

};

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow.getRemote = function() {
  let remote = new mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.NativeWidgetNSWindow',
    'context');
  return remote.$;
};

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remote_cocoa.mojom.NativeWidgetNSWindow', [
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
        
        // Try Method 0: CreateWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateWindow (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetParent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetParent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateSelectFileDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSelectFileDialog (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ShowCertificateViewer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowCertificateViewer (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: StackAbove
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StackAbove (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: StackAtTop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StackAtTop (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ShowEmojiPanel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowEmojiPanel (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: InitWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitWindow (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: InitCompositorView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitCompositorView (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: CreateContentView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateContentView (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: DestroyContentView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DestroyContentView (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: CloseWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseWindow (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: CloseWindowNow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseWindowNow (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetInitialBounds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInitialBounds (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetBounds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBounds (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSize (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetSizeAndCenter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSizeAndCenter (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SetVisibilityState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVisibilityState (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SetAnimationEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAnimationEnabled (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: SetTransitionsToAnimate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTransitionsToAnimate (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: SetVisibleOnAllSpaces
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVisibleOnAllSpaces (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: EnterFullscreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnterFullscreen (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: ExitFullscreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExitFullscreen (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: SetCanAppearInExistingFullscreenSpaces
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCanAppearInExistingFullscreenSpaces (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: SetMiniaturized
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMiniaturized (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: SetZoomed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetZoomed (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: SetSizeConstraints
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSizeConstraints (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: SetOpacity
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOpacity (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: SetWindowLevel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWindowLevel (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: SetActivationIndependence
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetActivationIndependence (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: SetAspectRatio
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAspectRatio (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: SetCALayerParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCALayerParams (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: SetWindowTitle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWindowTitle (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
           }
        }
        // Try Method 33: SetIgnoresMouseEvents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIgnoresMouseEvents (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 33 failed:', e);
           }
        }
        // Try Method 34: MakeFirstResponder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MakeFirstResponder (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 34 failed:', e);
           }
        }
        // Try Method 35: SortSubviews
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SortSubviews (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 35 failed:', e);
           }
        }
        // Try Method 36: ClearTouchBar
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearTouchBar (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 36 failed:', e);
           }
        }
        // Try Method 37: UpdateTooltip
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTooltip (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 37 failed:', e);
           }
        }
        // Try Method 38: AcquireCapture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcquireCapture (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 38 failed:', e);
           }
        }
        // Try Method 39: ReleaseCapture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReleaseCapture (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 39 failed:', e);
           }
        }
        // Try Method 40: RedispatchKeyEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RedispatchKeyEvent (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 40 failed:', e);
           }
        }
        // Try Method 41: SetLocalEventMonitorEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLocalEventMonitorEnabled (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 41 failed:', e);
           }
        }
        // Try Method 42: SetCursor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCursor (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 42 failed:', e);
           }
        }
        // Try Method 43: EnableImmersiveFullscreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableImmersiveFullscreen (43)');
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 43 failed:', e);
           }
        }
        // Try Method 44: DisableImmersiveFullscreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableImmersiveFullscreen (44)');
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 44 failed:', e);
           }
        }
        // Try Method 45: UpdateToolbarVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateToolbarVisibility (45)');
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 45 failed:', e);
           }
        }
        // Try Method 46: OnTopContainerViewBoundsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTopContainerViewBoundsChanged (46)');
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 46 failed:', e);
           }
        }
        // Try Method 47: ImmersiveFullscreenRevealLock
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImmersiveFullscreenRevealLock (47)');
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 47 failed:', e);
           }
        }
        // Try Method 48: ImmersiveFullscreenRevealUnlock
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImmersiveFullscreenRevealUnlock (48)');
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 48 failed:', e);
           }
        }
        // Try Method 49: SetCanGoBack
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCanGoBack (49)');
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 49 failed:', e);
           }
        }
        // Try Method 50: SetCanGoForward
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCanGoForward (50)');
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 50 failed:', e);
           }
        }
        // Try Method 51: DisplayContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayContextMenu (51)');
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 51 failed:', e);
           }
        }
        // Try Method 52: SetAllowScreenshots
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAllowScreenshots (52)');
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 52 failed:', e);
           }
        }
        // Try Method 53: SetColorMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetColorMode (53)');
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 53 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWindow');
          const result = this.impl.createWindow(params.arg_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setParent');
          const result = this.impl.setParent(params.arg_parent_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSelectFileDialog');
          const result = this.impl.createSelectFileDialog(params.arg_dialog);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showCertificateViewer');
          const result = this.impl.showCertificateViewer(params.arg_certificate);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stackAbove');
          const result = this.impl.stackAbove(params.arg_sibling_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stackAtTop');
          const result = this.impl.stackAtTop();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showEmojiPanel');
          const result = this.impl.showEmojiPanel();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initWindow');
          const result = this.impl.initWindow(params.arg_params);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initCompositorView');
          const result = this.impl.initCompositorView();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InitCompositorView FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createContentView');
          const result = this.impl.createContentView(params.arg_ns_view_id, params.arg_bounds, params.arg_corner_radius);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.destroyContentView');
          const result = this.impl.destroyContentView();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeWindow');
          const result = this.impl.closeWindow();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeWindowNow');
          const result = this.impl.closeWindowNow();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInitialBounds');
          const result = this.impl.setInitialBounds(params.arg_new_bounds, params.arg_minimum_content_size);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBounds');
          const result = this.impl.setBounds(params.arg_new_bounds, params.arg_minimum_content_size, params.arg_maximum_content_size);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSize');
          const result = this.impl.setSize(params.arg_new_size, params.arg_minimum_content_size);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSizeAndCenter');
          const result = this.impl.setSizeAndCenter(params.arg_content_size, params.arg_minimum_content_size);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVisibilityState');
          const result = this.impl.setVisibilityState(params.arg_new_state);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAnimationEnabled');
          const result = this.impl.setAnimationEnabled(params.arg_animation_enabled);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTransitionsToAnimate');
          const result = this.impl.setTransitionsToAnimate(params.arg_transitions);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVisibleOnAllSpaces');
          const result = this.impl.setVisibleOnAllSpaces(params.arg_always_visible);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enterFullscreen');
          const result = this.impl.enterFullscreen(params.arg_target_display_id);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exitFullscreen');
          const result = this.impl.exitFullscreen();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCanAppearInExistingFullscreenSpaces');
          const result = this.impl.setCanAppearInExistingFullscreenSpaces(params.arg_can_appear_in_existing_fullscreen_spaces);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMiniaturized');
          const result = this.impl.setMiniaturized(params.arg_miniaturized);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setZoomed');
          const result = this.impl.setZoomed(params.arg_zoomed);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSizeConstraints');
          const result = this.impl.setSizeConstraints(params.arg_min_size, params.arg_max_size, params.arg_is_resizable, params.arg_is_maximizable);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOpacity');
          const result = this.impl.setOpacity(params.arg_opacity);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWindowLevel');
          const result = this.impl.setWindowLevel(params.arg_level);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setActivationIndependence');
          const result = this.impl.setActivationIndependence(params.arg_independence);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAspectRatio');
          const result = this.impl.setAspectRatio(params.arg_aspect_ratio, params.arg_excluded_margin);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCALayerParams');
          const result = this.impl.setCALayerParams(params.arg_ca_layer_params);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWindowTitle');
          const result = this.impl.setWindowTitle(params.arg_title);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setIgnoresMouseEvents');
          const result = this.impl.setIgnoresMouseEvents(params.arg_ignores_mouse_events);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.makeFirstResponder');
          const result = this.impl.makeFirstResponder();
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sortSubviews');
          const result = this.impl.sortSubviews(params.arg_attached_subview_ids);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearTouchBar');
          const result = this.impl.clearTouchBar();
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTooltip');
          const result = this.impl.updateTooltip();
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.acquireCapture');
          const result = this.impl.acquireCapture();
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.releaseCapture');
          const result = this.impl.releaseCapture();
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.redispatchKeyEvent');
          const result = this.impl.redispatchKeyEvent(params.arg_native_event_data);
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLocalEventMonitorEnabled');
          const result = this.impl.setLocalEventMonitorEnabled(params.arg_enabled);
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCursor');
          const result = this.impl.setCursor(params.arg_cursor);
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableImmersiveFullscreen');
          const result = this.impl.enableImmersiveFullscreen(params.arg_fullscreen_overlay_widget_id, params.arg_tab_widget_id);
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disableImmersiveFullscreen');
          const result = this.impl.disableImmersiveFullscreen();
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateToolbarVisibility');
          const result = this.impl.updateToolbarVisibility(params.arg_style);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTopContainerViewBoundsChanged');
          const result = this.impl.onTopContainerViewBoundsChanged(params.arg_bounds);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.immersiveFullscreenRevealLock');
          const result = this.impl.immersiveFullscreenRevealLock();
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.immersiveFullscreenRevealUnlock');
          const result = this.impl.immersiveFullscreenRevealUnlock();
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCanGoBack');
          const result = this.impl.setCanGoBack(params.arg_can_go_back);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCanGoForward');
          const result = this.impl.setCanGoForward(params.arg_can_go_forward);
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.displayContextMenu');
          const result = this.impl.displayContextMenu(params.arg_menu, params.arg_host, params.arg_receiver);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAllowScreenshots');
          const result = this.impl.setAllowScreenshots(params.arg_allow);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setColorMode');
          const result = this.impl.setColorMode(params.arg_color_mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowReceiver = mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowReceiver;

mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowPtr = mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowRemote;
mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowRequest = mojo.internal.bindings.remote_cocoa.mojom.NativeWidgetNSWindowPendingReceiver;

