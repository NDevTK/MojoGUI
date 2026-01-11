// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/input/input_handler.mojom
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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.cc = mojo.internal.bindings.cc || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.blink.mojom.SelectionGranularitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.PanActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.ImeStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.FocusStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.KeyDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PointerDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WheelDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MouseDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ScrollDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PinchBeginDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PinchUpdateDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PinchEndDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FlingDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.TapDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.TapDownDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.GestureDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.TouchPointSpec = { $: {} };
mojo.internal.bindings.blink.mojom.TouchDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EventSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DidOverscrollParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.TouchActionOptionalSpec = { $: {} };
mojo.internal.bindings.blink.mojom.EditCommandSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SelectAroundCaretResultSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost = {};
mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost.$interfaceName = 'blink.mojom.WidgetInputHandlerHost';
mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler = {};
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler.$interfaceName = 'blink.mojom.FrameWidgetInputHandler';
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler = {};
mojo.internal.bindings.blink.mojom.WidgetInputHandler.$interfaceName = 'blink.mojom.WidgetInputHandler';
mojo.internal.bindings.blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeSetComposition_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeCommitText_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_WaitForInputProcessed_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_PingMainThread_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec = { $: {} };

// Enum: SelectionGranularity
mojo.internal.bindings.blink.mojom.SelectionGranularity = {
  kWord: 0,
  kSentence: 1,
};

// Enum: PanAction
mojo.internal.bindings.blink.mojom.PanAction = {
  kNone: 0,
  kScroll: 1,
  kMoveCursorOrScroll: 2,
  kStylusWritable: 3,
};

// Enum: ImeState
mojo.internal.bindings.blink.mojom.ImeState = {
  kNone: 0,
  kTextSuggestionSelected: 1,
};

// Enum: FocusState
mojo.internal.bindings.blink.mojom.FocusState = {
  kFocused: 0,
  kNotFocusedAndActive: 1,
  kNotFocusedAndNotActive: 2,
};

// Struct: KeyData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.KeyDataSpec, 'blink.mojom.KeyData', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_unmodified_text', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dom_key', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dom_code', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_windows_key_code', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_native_key_code', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_system_key', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_browser_shortcut', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_confirmed_physical_keyboard_input', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PointerData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PointerDataSpec, 'blink.mojom.PointerData', [
      mojo.internal.StructField('arg_tilt_x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tilt_y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_button', 16, 0, mojo.internal.bindings.blink.mojom.ButtonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pointer_type', 24, 0, mojo.internal.bindings.ui.mojom.EventPointerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_widget_position', 32, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_screen_position', 40, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mouse_data', 48, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.MouseDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_pointer_id', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_force', 60, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tangential_pressure', 64, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_twist', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_movement_x', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_movement_y', 76, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_raw_movement_event', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: WheelData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WheelDataSpec, 'blink.mojom.WheelData', [
      mojo.internal.StructField('arg_cancelable', 0, 0, mojo.internal.bindings.blink.mojom.DispatchTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_delta_x', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_delta_y', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_wheel_ticks_x', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_wheel_ticks_y', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_acceleration_ratio_x', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_acceleration_ratio_y', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_phase', 32, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_momentum_phase', 33, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_event_action', 34, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_delta_units', 35, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: MouseData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MouseDataSpec, 'blink.mojom.MouseData', [
      mojo.internal.StructField('arg_wheel_data', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.WheelDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_click_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ScrollData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ScrollDataSpec, 'blink.mojom.ScrollData', [
      mojo.internal.StructField('arg_delta_units', 0, 0, mojo.internal.bindings.ui.mojom.ScrollGranularitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_inertial_phase', 8, 0, mojo.internal.bindings.blink.mojom.InertialPhaseStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_delta_x', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_delta_y', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pointer_count', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_target_viewport', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_synthetic', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_cursor_control', 28, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PinchBeginData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PinchBeginDataSpec, 'blink.mojom.PinchBeginData', [
      mojo.internal.StructField('arg_needs_wheel_event', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PinchUpdateData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PinchUpdateDataSpec, 'blink.mojom.PinchUpdateData', [
      mojo.internal.StructField('arg_scale', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_zoom_disabled', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_needs_wheel_event', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PinchEndData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PinchEndDataSpec, 'blink.mojom.PinchEndData', [
      mojo.internal.StructField('arg_needs_wheel_event', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FlingData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FlingDataSpec, 'blink.mojom.FlingData', [
      mojo.internal.StructField('arg_velocity_x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_velocity_y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_target_viewport', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_prevent_boosting', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TapData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.TapDataSpec, 'blink.mojom.TapData', [
      mojo.internal.StructField('arg_tap_count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_needs_wheel_event', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TapDownData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.TapDownDataSpec, 'blink.mojom.TapDownData', [
      mojo.internal.StructField('arg_tap_down_count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GestureData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.GestureDataSpec, 'blink.mojom.GestureData', [
      mojo.internal.StructField('arg_screen_position', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_widget_position', 8, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_device', 16, 0, mojo.internal.bindings.blink.mojom.GestureDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_primary_pointer_type', 24, 0, mojo.internal.bindings.ui.mojom.EventPointerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_contact_size', 32, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_scroll_data', 40, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.ScrollDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_pinch_begin_data', 48, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.PinchBeginDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_pinch_update_data', 56, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.PinchUpdateDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_pinch_end_data', 64, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.PinchEndDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_tap_data', 72, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.TapDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_tap_down_data', 80, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.TapDownDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_fling_data', 88, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.FlingDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_primary_unique_touch_event_id', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_unique_touch_event_id', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_source_touch_event_set_blocking', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: TouchPoint
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.TouchPointSpec, 'blink.mojom.TouchPoint', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.blink.mojom.TouchStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pointer_data', 8, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.PointerDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_radius_x', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_radius_y', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rotation_angle', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TouchData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.TouchDataSpec, 'blink.mojom.TouchData', [
      mojo.internal.StructField('arg_cancelable', 0, 0, mojo.internal.bindings.blink.mojom.DispatchTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_touches', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.TouchPointSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_unique_touch_event_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_moved_beyond_slop_region', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_touch_start_or_first_move', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_hovering', 20, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Event
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EventSpec, 'blink.mojom.Event', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.blink.mojom.EventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_latency', 16, 0, mojo.internal.bindings.ui.mojom.LatencyInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_latency_metadata', 24, 0, mojo.internal.bindings.ui.mojom.EventLatencyMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_data', 32, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.KeyDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_pointer_data', 40, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.PointerDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_gesture_data', 48, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.GestureDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_touch_data', 56, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.TouchDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_modifiers', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: DidOverscrollParams
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DidOverscrollParamsSpec, 'blink.mojom.DidOverscrollParams', [
      mojo.internal.StructField('arg_accumulated_overscroll', 0, 0, mojo.internal.bindings.gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_latest_overscroll_delta', 8, 0, mojo.internal.bindings.gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_current_fling_velocity', 16, 0, mojo.internal.bindings.gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_causal_event_viewport_point', 24, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_overscroll_behavior', 32, 0, mojo.internal.bindings.cc.mojom.OverscrollBehaviorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_device', 40, 0, mojo.internal.bindings.blink.mojom.GestureDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TouchActionOptional
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.TouchActionOptionalSpec, 'blink.mojom.TouchActionOptional', [
      mojo.internal.StructField('arg_touch_action', 0, 0, mojo.internal.bindings.cc.mojom.TouchActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EditCommand
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.EditCommandSpec, 'blink.mojom.EditCommand', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SelectAroundCaretResult
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SelectAroundCaretResultSpec, 'blink.mojom.SelectAroundCaretResult', [
      mojo.internal.StructField('arg_extended_start_adjust', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_extended_end_adjust', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_word_start_adjust', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_word_end_adjust', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WidgetInputHandlerHost
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_Params', [
      mojo.internal.StructField('arg_touch_action', 0, 0, mojo.internal.bindings.cc.mojom.TouchActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_SetPanAction_Params', [
      mojo.internal.StructField('arg_pan_action', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.PanActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_DidOverscroll_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.DidOverscrollParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_Params', [
      mojo.internal.StructField('arg_range', 0, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_character_bounds', 8, 0, mojo.internal.Array(mojo.internal.bindings.gfx.mojom.RectSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_SetMouseCapture_Params', [
      mojo.internal.StructField('arg_capture', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_Params', [
      mojo.internal.StructField('arg_autoscroll_selection', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_RequestMouseLock_Params', [
      mojo.internal.StructField('arg_from_user_gesture', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_unadjusted_movement', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ResponseParamsSpec, 'blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.PointerLockResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_context', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.PointerLockContextRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetInputHandlerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setTouchActionFromMain(arg_touch_action) {
    return this.$.setTouchActionFromMain(arg_touch_action);
  }
  setPanAction(arg_pan_action) {
    return this.$.setPanAction(arg_pan_action);
  }
  didOverscroll(arg_params) {
    return this.$.didOverscroll(arg_params);
  }
  didStartScrollingViewport() {
    return this.$.didStartScrollingViewport();
  }
  imeCancelComposition() {
    return this.$.imeCancelComposition();
  }
  imeCompositionRangeChanged(arg_range, arg_character_bounds) {
    return this.$.imeCompositionRangeChanged(arg_range, arg_character_bounds);
  }
  setMouseCapture(arg_capture) {
    return this.$.setMouseCapture(arg_capture);
  }
  setAutoscrollSelectionActiveInMainFrame(arg_autoscroll_selection) {
    return this.$.setAutoscrollSelectionActiveInMainFrame(arg_autoscroll_selection);
  }
  requestMouseLock(arg_from_user_gesture, arg_unadjusted_movement) {
    return this.$.requestMouseLock(arg_from_user_gesture, arg_unadjusted_movement);
  }
};

mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WidgetInputHandlerHost', [
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

  setTouchActionFromMain(arg_touch_action) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec,
      null,
      [arg_touch_action],
      false);
  }

  setPanAction(arg_pan_action) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec,
      null,
      [arg_pan_action],
      false);
  }

  didOverscroll(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  didStartScrollingViewport() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec,
      null,
      [],
      false);
  }

  imeCancelComposition() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec,
      null,
      [],
      false);
  }

  imeCompositionRangeChanged(arg_range, arg_character_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec,
      null,
      [arg_range, arg_character_bounds],
      false);
  }

  setMouseCapture(arg_capture) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec,
      null,
      [arg_capture],
      false);
  }

  setAutoscrollSelectionActiveInMainFrame(arg_autoscroll_selection) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec,
      null,
      [arg_autoscroll_selection],
      false);
  }

  requestMouseLock(arg_from_user_gesture, arg_unadjusted_movement) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ResponseParamsSpec,
      [arg_from_user_gesture, arg_unadjusted_movement],
      false);
  }

};

mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetInputHandlerHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WidgetInputHandlerHost', [
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
        
        // Try Method 0: SetTouchActionFromMain
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTouchActionFromMain (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetPanAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPanAction (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DidOverscroll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidOverscroll (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DidStartScrollingViewport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidStartScrollingViewport (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ImeCancelComposition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImeCancelComposition (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ImeCompositionRangeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImeCompositionRangeChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetMouseCapture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMouseCapture (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetAutoscrollSelectionActiveInMainFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAutoscrollSelectionActiveInMainFrame (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RequestMouseLock
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestMouseLock (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTouchActionFromMain');
          const result = this.impl.setTouchActionFromMain(params.arg_touch_action);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPanAction');
          const result = this.impl.setPanAction(params.arg_pan_action);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didOverscroll');
          const result = this.impl.didOverscroll(params.arg_params);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didStartScrollingViewport');
          const result = this.impl.didStartScrollingViewport();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeCancelComposition');
          const result = this.impl.imeCancelComposition();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeCompositionRangeChanged');
          const result = this.impl.imeCompositionRangeChanged(params.arg_range, params.arg_character_bounds);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMouseCapture');
          const result = this.impl.setMouseCapture(params.arg_capture);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAutoscrollSelectionActiveInMainFrame');
          const result = this.impl.setAutoscrollSelectionActiveInMainFrame(params.arg_autoscroll_selection);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestMouseLock');
          const result = this.impl.requestMouseLock(params.arg_from_user_gesture, params.arg_unadjusted_movement);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RequestMouseLock FAILED:', e));
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

mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostReceiver = mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostReceiver;

mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostPtr = mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostRemote;
mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostRequest = mojo.internal.bindings.blink.mojom.WidgetInputHandlerHostPendingReceiver;


// Interface: FrameWidgetInputHandler
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_Params', [
      mojo.internal.StructField('arg_ime_text_spans', 0, 0, mojo.internal.Array(mojo.internal.bindings.ui.mojom.ImeTextSpanSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_start', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ui.mojom.ImeTextSpanTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_start', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_Params', [
      mojo.internal.StructField('arg_ime_text_spans', 0, 0, mojo.internal.Array(mojo.internal.bindings.ui.mojom.ImeTextSpanSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_start', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_Params', [
      mojo.internal.StructField('arg_before', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_after', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_Params', [
      mojo.internal.StructField('arg_replacement_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_before', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_after', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_Params', [
      mojo.internal.StructField('arg_before', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_after', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_Params', [
      mojo.internal.StructField('arg_before', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_after', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_Params', [
      mojo.internal.StructField('arg_start', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_Params', [
      mojo.internal.StructField('arg_gesture_data', 0, 0, mojo.internal.bindings.blink.mojom.StylusWritingGestureDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParamsSpec, 'blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.blink.mojom.HandwritingGestureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_Params', [
      mojo.internal.StructField('arg_command', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Undo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Redo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Cut_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Copy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_CenterSelection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Paste_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Delete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SelectAll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_CollapseSelection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Replace_Params', [
      mojo.internal.StructField('arg_word', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_Params', [
      mojo.internal.StructField('arg_word', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SelectRange_Params', [
      mojo.internal.StructField('arg_base', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_extent', 8, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_Params', [
      mojo.internal.StructField('arg_behavior', 0, 0, mojo.internal.bindings.blink.mojom.SelectionMenuBehaviorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_start', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_Params', [
      mojo.internal.StructField('arg_granularity', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.SelectionGranularitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_should_show_handle', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_should_show_context_menu', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.SelectAroundCaretResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_Params', [
      mojo.internal.StructField('arg_extent', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ResponseParamsSpec, 'blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_MoveCaret_Params', [
      mojo.internal.StructField('arg_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_Params', [
      mojo.internal.StructField('arg_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_StopAutoscroll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_Params', [
      mojo.internal.StructField('arg_range', 0, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParamsSpec, 'blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParams', [
      mojo.internal.StructField('arg_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.blink.mojom.FrameWidgetInputHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.FrameWidgetInputHandlerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FrameWidgetInputHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.FrameWidgetInputHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addImeTextSpansToExistingText(arg_start, arg_end, arg_ime_text_spans) {
    return this.$.addImeTextSpansToExistingText(arg_start, arg_end, arg_ime_text_spans);
  }
  clearImeTextSpansByType(arg_start, arg_end, arg_type) {
    return this.$.clearImeTextSpansByType(arg_start, arg_end, arg_type);
  }
  setCompositionFromExistingText(arg_start, arg_end, arg_ime_text_spans) {
    return this.$.setCompositionFromExistingText(arg_start, arg_end, arg_ime_text_spans);
  }
  extendSelectionAndDelete(arg_before, arg_after) {
    return this.$.extendSelectionAndDelete(arg_before, arg_after);
  }
  extendSelectionAndReplace(arg_before, arg_after, arg_replacement_text) {
    return this.$.extendSelectionAndReplace(arg_before, arg_after, arg_replacement_text);
  }
  deleteSurroundingText(arg_before, arg_after) {
    return this.$.deleteSurroundingText(arg_before, arg_after);
  }
  deleteSurroundingTextInCodePoints(arg_before, arg_after) {
    return this.$.deleteSurroundingTextInCodePoints(arg_before, arg_after);
  }
  setEditableSelectionOffsets(arg_start, arg_end) {
    return this.$.setEditableSelectionOffsets(arg_start, arg_end);
  }
  handleStylusWritingGestureAction(arg_gesture_data) {
    return this.$.handleStylusWritingGestureAction(arg_gesture_data);
  }
  executeEditCommand(arg_command, arg_value) {
    return this.$.executeEditCommand(arg_command, arg_value);
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
  delete() {
    return this.$.delete();
  }
  selectAll() {
    return this.$.selectAll();
  }
  collapseSelection() {
    return this.$.collapseSelection();
  }
  replace(arg_word) {
    return this.$.replace(arg_word);
  }
  replaceMisspelling(arg_word) {
    return this.$.replaceMisspelling(arg_word);
  }
  selectRange(arg_base, arg_extent) {
    return this.$.selectRange(arg_base, arg_extent);
  }
  adjustSelectionByCharacterOffset(arg_start, arg_end, arg_behavior) {
    return this.$.adjustSelectionByCharacterOffset(arg_start, arg_end, arg_behavior);
  }
  selectAroundCaret(arg_granularity, arg_should_show_handle, arg_should_show_context_menu) {
    return this.$.selectAroundCaret(arg_granularity, arg_should_show_handle, arg_should_show_context_menu);
  }
  moveRangeSelectionExtent(arg_extent) {
    return this.$.moveRangeSelectionExtent(arg_extent);
  }
  scrollFocusedEditableNodeIntoView() {
    return this.$.scrollFocusedEditableNodeIntoView();
  }
  waitForPageScaleAnimationForTesting() {
    return this.$.waitForPageScaleAnimationForTesting();
  }
  moveCaret(arg_point) {
    return this.$.moveCaret(arg_point);
  }
  startAutoscrollForSelectionToPoint(arg_point) {
    return this.$.startAutoscrollForSelectionToPoint(arg_point);
  }
  stopAutoscroll() {
    return this.$.stopAutoscroll();
  }
  rectForEditFieldChars(arg_range) {
    return this.$.rectForEditFieldChars(arg_range);
  }
};

mojo.internal.bindings.blink.mojom.FrameWidgetInputHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FrameWidgetInputHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  addImeTextSpansToExistingText(arg_start, arg_end, arg_ime_text_spans) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec,
      null,
      [arg_start, arg_end, arg_ime_text_spans],
      false);
  }

  clearImeTextSpansByType(arg_start, arg_end, arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec,
      null,
      [arg_start, arg_end, arg_type],
      false);
  }

  setCompositionFromExistingText(arg_start, arg_end, arg_ime_text_spans) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec,
      null,
      [arg_start, arg_end, arg_ime_text_spans],
      false);
  }

  extendSelectionAndDelete(arg_before, arg_after) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec,
      null,
      [arg_before, arg_after],
      false);
  }

  extendSelectionAndReplace(arg_before, arg_after, arg_replacement_text) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec,
      null,
      [arg_before, arg_after, arg_replacement_text],
      false);
  }

  deleteSurroundingText(arg_before, arg_after) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec,
      null,
      [arg_before, arg_after],
      false);
  }

  deleteSurroundingTextInCodePoints(arg_before, arg_after) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec,
      null,
      [arg_before, arg_after],
      false);
  }

  setEditableSelectionOffsets(arg_start, arg_end) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec,
      null,
      [arg_start, arg_end],
      false);
  }

  handleStylusWritingGestureAction(arg_gesture_data) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParamsSpec,
      [arg_gesture_data],
      false);
  }

  executeEditCommand(arg_command, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec,
      null,
      [arg_command, arg_value],
      false);
  }

  undo() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec,
      null,
      [],
      false);
  }

  redo() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec,
      null,
      [],
      false);
  }

  cut() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec,
      null,
      [],
      false);
  }

  copy() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec,
      null,
      [],
      false);
  }

  copyToFindPboard() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec,
      null,
      [],
      false);
  }

  centerSelection() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec,
      null,
      [],
      false);
  }

  paste() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec,
      null,
      [],
      false);
  }

  pasteAndMatchStyle() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec,
      null,
      [],
      false);
  }

  delete() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec,
      null,
      [],
      false);
  }

  selectAll() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec,
      null,
      [],
      false);
  }

  collapseSelection() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec,
      null,
      [],
      false);
  }

  replace(arg_word) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec,
      null,
      [arg_word],
      false);
  }

  replaceMisspelling(arg_word) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec,
      null,
      [arg_word],
      false);
  }

  selectRange(arg_base, arg_extent) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec,
      null,
      [arg_base, arg_extent],
      false);
  }

  adjustSelectionByCharacterOffset(arg_start, arg_end, arg_behavior) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec,
      null,
      [arg_start, arg_end, arg_behavior],
      false);
  }

  selectAroundCaret(arg_granularity, arg_should_show_handle, arg_should_show_context_menu) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParamsSpec,
      [arg_granularity, arg_should_show_handle, arg_should_show_context_menu],
      false);
  }

  moveRangeSelectionExtent(arg_extent) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec,
      null,
      [arg_extent],
      false);
  }

  scrollFocusedEditableNodeIntoView() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec,
      null,
      [],
      false);
  }

  waitForPageScaleAnimationForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ResponseParamsSpec,
      [],
      false);
  }

  moveCaret(arg_point) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec,
      null,
      [arg_point],
      false);
  }

  startAutoscrollForSelectionToPoint(arg_point) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec,
      null,
      [arg_point],
      false);
  }

  stopAutoscroll() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec,
      null,
      [],
      false);
  }

  rectForEditFieldChars(arg_range) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec,
      mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParamsSpec,
      [arg_range],
      false);
  }

};

mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.FrameWidgetInputHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FrameWidgetInputHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.FrameWidgetInputHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FrameWidgetInputHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: AddImeTextSpansToExistingText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddImeTextSpansToExistingText (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ClearImeTextSpansByType
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearImeTextSpansByType (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetCompositionFromExistingText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCompositionFromExistingText (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ExtendSelectionAndDelete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtendSelectionAndDelete (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ExtendSelectionAndReplace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtendSelectionAndReplace (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DeleteSurroundingText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteSurroundingText (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: DeleteSurroundingTextInCodePoints
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteSurroundingTextInCodePoints (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetEditableSelectionOffsets
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEditableSelectionOffsets (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: HandleStylusWritingGestureAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleStylusWritingGestureAction (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: ExecuteEditCommand
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteEditCommand (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: Undo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Undo (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: Redo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Redo (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: Cut
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cut (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: Copy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Copy (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: CopyToFindPboard
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CopyToFindPboard (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: CenterSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CenterSelection (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: Paste
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Paste (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: PasteAndMatchStyle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PasteAndMatchStyle (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: Delete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Delete (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: SelectAll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectAll (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: CollapseSelection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CollapseSelection (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: Replace
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Replace (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: ReplaceMisspelling
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReplaceMisspelling (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: SelectRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectRange (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: AdjustSelectionByCharacterOffset
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AdjustSelectionByCharacterOffset (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: SelectAroundCaret
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectAroundCaret (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: MoveRangeSelectionExtent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveRangeSelectionExtent (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: ScrollFocusedEditableNodeIntoView
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ScrollFocusedEditableNodeIntoView (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: WaitForPageScaleAnimationForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitForPageScaleAnimationForTesting (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: MoveCaret
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MoveCaret (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: StartAutoscrollForSelectionToPoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartAutoscrollForSelectionToPoint (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
           }
        }
        // Try Method 31: StopAutoscroll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopAutoscroll (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 31 failed:', e);
           }
        }
        // Try Method 32: RectForEditFieldChars
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RectForEditFieldChars (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 32 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addImeTextSpansToExistingText');
          const result = this.impl.addImeTextSpansToExistingText(params.arg_start, params.arg_end, params.arg_ime_text_spans);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearImeTextSpansByType');
          const result = this.impl.clearImeTextSpansByType(params.arg_start, params.arg_end, params.arg_type);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCompositionFromExistingText');
          const result = this.impl.setCompositionFromExistingText(params.arg_start, params.arg_end, params.arg_ime_text_spans);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.extendSelectionAndDelete');
          const result = this.impl.extendSelectionAndDelete(params.arg_before, params.arg_after);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.extendSelectionAndReplace');
          const result = this.impl.extendSelectionAndReplace(params.arg_before, params.arg_after, params.arg_replacement_text);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteSurroundingText');
          const result = this.impl.deleteSurroundingText(params.arg_before, params.arg_after);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteSurroundingTextInCodePoints');
          const result = this.impl.deleteSurroundingTextInCodePoints(params.arg_before, params.arg_after);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEditableSelectionOffsets');
          const result = this.impl.setEditableSelectionOffsets(params.arg_start, params.arg_end);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleStylusWritingGestureAction');
          const result = this.impl.handleStylusWritingGestureAction(params.arg_gesture_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] HandleStylusWritingGestureAction FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.executeEditCommand');
          const result = this.impl.executeEditCommand(params.arg_command, params.arg_value);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undo');
          const result = this.impl.undo();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.redo');
          const result = this.impl.redo();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cut');
          const result = this.impl.cut();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copy');
          const result = this.impl.copy();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyToFindPboard');
          const result = this.impl.copyToFindPboard();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.centerSelection');
          const result = this.impl.centerSelection();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.paste');
          const result = this.impl.paste();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pasteAndMatchStyle');
          const result = this.impl.pasteAndMatchStyle();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.delete');
          const result = this.impl.delete();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectAll');
          const result = this.impl.selectAll();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.collapseSelection');
          const result = this.impl.collapseSelection();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replace');
          const result = this.impl.replace(params.arg_word);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replaceMisspelling');
          const result = this.impl.replaceMisspelling(params.arg_word);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectRange');
          const result = this.impl.selectRange(params.arg_base, params.arg_extent);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.adjustSelectionByCharacterOffset');
          const result = this.impl.adjustSelectionByCharacterOffset(params.arg_start, params.arg_end, params.arg_behavior);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectAroundCaret');
          const result = this.impl.selectAroundCaret(params.arg_granularity, params.arg_should_show_handle, params.arg_should_show_context_menu);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectAroundCaret FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.moveRangeSelectionExtent');
          const result = this.impl.moveRangeSelectionExtent(params.arg_extent);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scrollFocusedEditableNodeIntoView');
          const result = this.impl.scrollFocusedEditableNodeIntoView();
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitForPageScaleAnimationForTesting');
          const result = this.impl.waitForPageScaleAnimationForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WaitForPageScaleAnimationForTesting FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.moveCaret');
          const result = this.impl.moveCaret(params.arg_point);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startAutoscrollForSelectionToPoint');
          const result = this.impl.startAutoscrollForSelectionToPoint(params.arg_point);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopAutoscroll');
          const result = this.impl.stopAutoscroll();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rectForEditFieldChars');
          const result = this.impl.rectForEditFieldChars(params.arg_range);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RectForEditFieldChars FAILED:', e));
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

mojo.internal.bindings.blink.mojom.FrameWidgetInputHandlerReceiver = mojo.internal.bindings.blink.mojom.FrameWidgetInputHandlerReceiver;

mojo.internal.bindings.blink.mojom.FrameWidgetInputHandlerPtr = mojo.internal.bindings.blink.mojom.FrameWidgetInputHandlerRemote;
mojo.internal.bindings.blink.mojom.FrameWidgetInputHandlerRequest = mojo.internal.bindings.blink.mojom.FrameWidgetInputHandlerPendingReceiver;


// Interface: WidgetInputHandler
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec, 'blink.mojom.WidgetInputHandler_SetFocus_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.FocusStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec, 'blink.mojom.WidgetInputHandler_MouseCaptureLost_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec, 'blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_Params', [
      mojo.internal.StructField('arg_commands', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.blink.mojom.EditCommandSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec, 'blink.mojom.WidgetInputHandler_CursorVisibilityChanged_Params', [
      mojo.internal.StructField('arg_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec, 'blink.mojom.WidgetInputHandler_ImeSetComposition_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ime_text_spans', 8, 0, mojo.internal.Array(mojo.internal.bindings.ui.mojom.ImeTextSpanSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_range', 16, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ime_state', 24, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.ImeStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_start', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeSetComposition_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_ImeSetComposition_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec, 'blink.mojom.WidgetInputHandler_ImeCommitText_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ime_text_spans', 8, 0, mojo.internal.Array(mojo.internal.bindings.ui.mojom.ImeTextSpanSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_range', 16, 0, mojo.internal.bindings.gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_relative_cursor_position', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeCommitText_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_ImeCommitText_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec, 'blink.mojom.WidgetInputHandler_ImeFinishComposingText_Params', [
      mojo.internal.StructField('arg_keep_selection', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec, 'blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec, 'blink.mojom.WidgetInputHandler_RequestCompositionUpdates_Params', [
      mojo.internal.StructField('arg_immediate_request', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_monitor_request', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec, 'blink.mojom.WidgetInputHandler_DispatchEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_original_event_for_gesture', 8, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.EventSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParams', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.blink.mojom.InputEventResultSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_updated_latency', 8, 0, mojo.internal.bindings.ui.mojom.LatencyInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 16, 0, mojo.internal.bindings.blink.mojom.InputEventResultStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_overscroll', 24, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.DidOverscrollParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_touch_action', 32, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.TouchActionOptionalSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec, 'blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.mojo.internal.bindings.blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec, 'blink.mojom.WidgetInputHandler_WaitForInputProcessed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_WaitForInputProcessed_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_WaitForInputProcessed_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec, 'blink.mojom.WidgetInputHandler_PingMainThread_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_PingMainThread_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_PingMainThread_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec, 'blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_Params', [
      mojo.internal.StructField('arg_control_host', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.SynchronousCompositorControlHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_host', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_compositor_request', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec, 'blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_Params', [
      mojo.internal.StructField('arg_interface_request', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec, 'blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_Params', [
      mojo.internal.StructField('arg_constraints', 0, 0, mojo.internal.bindings.cc.mojom.BrowserControlsStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_current', 8, 0, mojo.internal.bindings.cc.mojom.BrowserControlsStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset_tag_modifications', 16, 0, mojo.internal.bindings.cc.mojom.BrowserControlsOffsetTagModificationsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_animate', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.bindings.blink.mojom.WidgetInputHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.blink.mojom.WidgetInputHandlerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetInputHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.WidgetInputHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.WidgetInputHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setFocus(arg_state) {
    return this.$.setFocus(arg_state);
  }
  mouseCaptureLost() {
    return this.$.mouseCaptureLost();
  }
  setEditCommandsForNextKeyEvent(arg_commands) {
    return this.$.setEditCommandsForNextKeyEvent(arg_commands);
  }
  cursorVisibilityChanged(arg_visible) {
    return this.$.cursorVisibilityChanged(arg_visible);
  }
  imeSetComposition(arg_text, arg_ime_text_spans, arg_range, arg_start, arg_end, arg_ime_state) {
    return this.$.imeSetComposition(arg_text, arg_ime_text_spans, arg_range, arg_start, arg_end, arg_ime_state);
  }
  imeCommitText(arg_text, arg_ime_text_spans, arg_range, arg_relative_cursor_position) {
    return this.$.imeCommitText(arg_text, arg_ime_text_spans, arg_range, arg_relative_cursor_position);
  }
  imeFinishComposingText(arg_keep_selection) {
    return this.$.imeFinishComposingText(arg_keep_selection);
  }
  requestTextInputStateUpdate() {
    return this.$.requestTextInputStateUpdate();
  }
  requestCompositionUpdates(arg_immediate_request, arg_monitor_request) {
    return this.$.requestCompositionUpdates(arg_immediate_request, arg_monitor_request);
  }
  dispatchEvent(arg_event, arg_original_event_for_gesture) {
    return this.$.dispatchEvent(arg_event, arg_original_event_for_gesture);
  }
  dispatchNonBlockingEvent(arg_event) {
    return this.$.dispatchNonBlockingEvent(arg_event);
  }
  waitForInputProcessed() {
    return this.$.waitForInputProcessed();
  }
  pingMainThread() {
    return this.$.pingMainThread();
  }
  attachSynchronousCompositor(arg_control_host, arg_host, arg_compositor_request) {
    return this.$.attachSynchronousCompositor(arg_control_host, arg_host, arg_compositor_request);
  }
  getFrameWidgetInputHandler(arg_interface_request) {
    return this.$.getFrameWidgetInputHandler(arg_interface_request);
  }
  updateBrowserControlsState(arg_constraints, arg_current, arg_animate, arg_offset_tag_modifications) {
    return this.$.updateBrowserControlsState(arg_constraints, arg_current, arg_animate, arg_offset_tag_modifications);
  }
};

mojo.internal.bindings.blink.mojom.WidgetInputHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WidgetInputHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  setFocus(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  mouseCaptureLost() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec,
      null,
      [],
      false);
  }

  setEditCommandsForNextKeyEvent(arg_commands) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec,
      null,
      [arg_commands],
      false);
  }

  cursorVisibilityChanged(arg_visible) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec,
      null,
      [arg_visible],
      false);
  }

  imeSetComposition(arg_text, arg_ime_text_spans, arg_range, arg_start, arg_end, arg_ime_state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeSetComposition_ResponseParamsSpec,
      [arg_text, arg_ime_text_spans, arg_range, arg_start, arg_end, arg_ime_state],
      false);
  }

  imeCommitText(arg_text, arg_ime_text_spans, arg_range, arg_relative_cursor_position) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeCommitText_ResponseParamsSpec,
      [arg_text, arg_ime_text_spans, arg_range, arg_relative_cursor_position],
      false);
  }

  imeFinishComposingText(arg_keep_selection) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec,
      null,
      [arg_keep_selection],
      false);
  }

  requestTextInputStateUpdate() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec,
      null,
      [],
      false);
  }

  requestCompositionUpdates(arg_immediate_request, arg_monitor_request) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec,
      null,
      [arg_immediate_request, arg_monitor_request],
      false);
  }

  dispatchEvent(arg_event, arg_original_event_for_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParamsSpec,
      [arg_event, arg_original_event_for_gesture],
      false);
  }

  dispatchNonBlockingEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  waitForInputProcessed() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_WaitForInputProcessed_ResponseParamsSpec,
      [],
      false);
  }

  pingMainThread() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec,
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_PingMainThread_ResponseParamsSpec,
      [],
      false);
  }

  attachSynchronousCompositor(arg_control_host, arg_host, arg_compositor_request) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec,
      null,
      [arg_control_host, arg_host, arg_compositor_request],
      false);
  }

  getFrameWidgetInputHandler(arg_interface_request) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec,
      null,
      [arg_interface_request],
      false);
  }

  updateBrowserControlsState(arg_constraints, arg_current, arg_animate, arg_offset_tag_modifications) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec,
      null,
      [arg_constraints, arg_current, arg_animate, arg_offset_tag_modifications],
      false);
  }

};

mojo.internal.bindings.blink.mojom.WidgetInputHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.WidgetInputHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetInputHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.WidgetInputHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WidgetInputHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        
        // Try Method 0: SetFocus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFocus (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: MouseCaptureLost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> MouseCaptureLost (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetEditCommandsForNextKeyEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetEditCommandsForNextKeyEvent (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CursorVisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CursorVisibilityChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ImeSetComposition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImeSetComposition (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ImeCommitText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImeCommitText (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ImeFinishComposingText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ImeFinishComposingText (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: RequestTextInputStateUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestTextInputStateUpdate (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RequestCompositionUpdates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestCompositionUpdates (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: DispatchEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchEvent (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: DispatchNonBlockingEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchNonBlockingEvent (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: WaitForInputProcessed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitForInputProcessed (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: PingMainThread
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PingMainThread (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: AttachSynchronousCompositor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AttachSynchronousCompositor (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetFrameWidgetInputHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFrameWidgetInputHandler (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: UpdateBrowserControlsState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateBrowserControlsState (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFocus');
          const result = this.impl.setFocus(params.arg_state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mouseCaptureLost');
          const result = this.impl.mouseCaptureLost();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEditCommandsForNextKeyEvent');
          const result = this.impl.setEditCommandsForNextKeyEvent(params.arg_commands);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cursorVisibilityChanged');
          const result = this.impl.cursorVisibilityChanged(params.arg_visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeSetComposition');
          const result = this.impl.imeSetComposition(params.arg_text, params.arg_ime_text_spans, params.arg_range, params.arg_start, params.arg_end, params.arg_ime_state);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeSetComposition_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ImeSetComposition FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeCommitText');
          const result = this.impl.imeCommitText(params.arg_text, params.arg_ime_text_spans, params.arg_range, params.arg_relative_cursor_position);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeCommitText_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ImeCommitText FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeFinishComposingText');
          const result = this.impl.imeFinishComposingText(params.arg_keep_selection);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestTextInputStateUpdate');
          const result = this.impl.requestTextInputStateUpdate();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestCompositionUpdates');
          const result = this.impl.requestCompositionUpdates(params.arg_immediate_request, params.arg_monitor_request);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchEvent');
          const result = this.impl.dispatchEvent(params.arg_event, params.arg_original_event_for_gesture);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DispatchEvent FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchNonBlockingEvent');
          const result = this.impl.dispatchNonBlockingEvent(params.arg_event);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitForInputProcessed');
          const result = this.impl.waitForInputProcessed();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WidgetInputHandler_WaitForInputProcessed_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WaitForInputProcessed FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pingMainThread');
          const result = this.impl.pingMainThread();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.blink.mojom.WidgetInputHandler_PingMainThread_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PingMainThread FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.attachSynchronousCompositor');
          const result = this.impl.attachSynchronousCompositor(params.arg_control_host, params.arg_host, params.arg_compositor_request);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFrameWidgetInputHandler');
          const result = this.impl.getFrameWidgetInputHandler(params.arg_interface_request);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateBrowserControlsState');
          const result = this.impl.updateBrowserControlsState(params.arg_constraints, params.arg_current, params.arg_animate, params.arg_offset_tag_modifications);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.WidgetInputHandlerReceiver = mojo.internal.bindings.blink.mojom.WidgetInputHandlerReceiver;

mojo.internal.bindings.blink.mojom.WidgetInputHandlerPtr = mojo.internal.bindings.blink.mojom.WidgetInputHandlerRemote;
mojo.internal.bindings.blink.mojom.WidgetInputHandlerRequest = mojo.internal.bindings.blink.mojom.WidgetInputHandlerPendingReceiver;

