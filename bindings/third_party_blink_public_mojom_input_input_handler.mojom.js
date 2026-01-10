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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var cc = cc || {};
var mojo_base = mojo_base || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.SelectionGranularitySpec = { $: mojo.internal.Enum() };
blink.mojom.PanActionSpec = { $: mojo.internal.Enum() };
blink.mojom.ImeStateSpec = { $: mojo.internal.Enum() };
blink.mojom.FocusStateSpec = { $: mojo.internal.Enum() };
blink.mojom.KeyDataSpec = { $: {} };
blink.mojom.PointerDataSpec = { $: {} };
blink.mojom.WheelDataSpec = { $: {} };
blink.mojom.MouseDataSpec = { $: {} };
blink.mojom.ScrollDataSpec = { $: {} };
blink.mojom.PinchBeginDataSpec = { $: {} };
blink.mojom.PinchUpdateDataSpec = { $: {} };
blink.mojom.PinchEndDataSpec = { $: {} };
blink.mojom.FlingDataSpec = { $: {} };
blink.mojom.TapDataSpec = { $: {} };
blink.mojom.TapDownDataSpec = { $: {} };
blink.mojom.GestureDataSpec = { $: {} };
blink.mojom.TouchPointSpec = { $: {} };
blink.mojom.TouchDataSpec = { $: {} };
blink.mojom.EventSpec = { $: {} };
blink.mojom.DidOverscrollParamsSpec = { $: {} };
blink.mojom.TouchActionOptionalSpec = { $: {} };
blink.mojom.EditCommandSpec = { $: {} };
blink.mojom.SelectAroundCaretResultSpec = { $: {} };
blink.mojom.WidgetInputHandlerHost = {};
blink.mojom.WidgetInputHandlerHost.$interfaceName = 'blink.mojom.WidgetInputHandlerHost';
blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler = {};
blink.mojom.FrameWidgetInputHandler.$interfaceName = 'blink.mojom.FrameWidgetInputHandler';
blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler = {};
blink.mojom.WidgetInputHandler.$interfaceName = 'blink.mojom.WidgetInputHandler';
blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_ImeSetComposition_ResponseParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_ImeCommitText_ResponseParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_WaitForInputProcessed_ResponseParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_PingMainThread_ResponseParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec = { $: {} };
blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec = { $: {} };

// Enum: SelectionGranularity
blink.mojom.SelectionGranularity = {
  kWord: 0,
  kSentence: 1,
};

// Enum: PanAction
blink.mojom.PanAction = {
  kNone: 0,
  kScroll: 1,
  kMoveCursorOrScroll: 2,
  kStylusWritable: 3,
};

// Enum: ImeState
blink.mojom.ImeState = {
  kNone: 0,
  kTextSuggestionSelected: 1,
};

// Enum: FocusState
blink.mojom.FocusState = {
  kFocused: 0,
  kNotFocusedAndActive: 1,
  kNotFocusedAndNotActive: 2,
};

// Struct: KeyData
mojo.internal.Struct(
    blink.mojom.KeyDataSpec, 'blink.mojom.KeyData', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('unmodified_text', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('dom_key', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('dom_code', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('windows_key_code', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('native_key_code', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_system_key', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_browser_shortcut', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_confirmed_physical_keyboard_input', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PointerData
mojo.internal.Struct(
    blink.mojom.PointerDataSpec, 'blink.mojom.PointerData', [
      mojo.internal.StructField('tilt_x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('tilt_y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('button', 16, 0, blink.mojom.ButtonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pointer_type', 24, 0, ui.mojom.EventPointerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('widget_position', 32, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_position', 40, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mouse_data', 48, 0, blink.mojom.MouseDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pointer_id', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('force', 60, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tangential_pressure', 64, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('twist', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('movement_x', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('movement_y', 76, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('device_id', 80, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_raw_movement_event', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: WheelData
mojo.internal.Struct(
    blink.mojom.WheelDataSpec, 'blink.mojom.WheelData', [
      mojo.internal.StructField('cancelable', 0, 0, blink.mojom.DispatchTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('delta_x', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('delta_y', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('wheel_ticks_x', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('wheel_ticks_y', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('acceleration_ratio_x', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('acceleration_ratio_y', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('phase', 32, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('momentum_phase', 33, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('event_action', 34, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('delta_units', 35, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: MouseData
mojo.internal.Struct(
    blink.mojom.MouseDataSpec, 'blink.mojom.MouseData', [
      mojo.internal.StructField('wheel_data', 0, 0, blink.mojom.WheelDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('click_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ScrollData
mojo.internal.Struct(
    blink.mojom.ScrollDataSpec, 'blink.mojom.ScrollData', [
      mojo.internal.StructField('delta_units', 0, 0, ui.mojom.ScrollGranularitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('inertial_phase', 8, 0, blink.mojom.InertialPhaseStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('delta_x', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('delta_y', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('pointer_count', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('target_viewport', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('synthetic', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('cursor_control', 28, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PinchBeginData
mojo.internal.Struct(
    blink.mojom.PinchBeginDataSpec, 'blink.mojom.PinchBeginData', [
      mojo.internal.StructField('needs_wheel_event', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PinchUpdateData
mojo.internal.Struct(
    blink.mojom.PinchUpdateDataSpec, 'blink.mojom.PinchUpdateData', [
      mojo.internal.StructField('scale', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('zoom_disabled', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('needs_wheel_event', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PinchEndData
mojo.internal.Struct(
    blink.mojom.PinchEndDataSpec, 'blink.mojom.PinchEndData', [
      mojo.internal.StructField('needs_wheel_event', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FlingData
mojo.internal.Struct(
    blink.mojom.FlingDataSpec, 'blink.mojom.FlingData', [
      mojo.internal.StructField('velocity_x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('velocity_y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('target_viewport', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('prevent_boosting', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TapData
mojo.internal.Struct(
    blink.mojom.TapDataSpec, 'blink.mojom.TapData', [
      mojo.internal.StructField('tap_count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('needs_wheel_event', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TapDownData
mojo.internal.Struct(
    blink.mojom.TapDownDataSpec, 'blink.mojom.TapDownData', [
      mojo.internal.StructField('tap_down_count', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GestureData
mojo.internal.Struct(
    blink.mojom.GestureDataSpec, 'blink.mojom.GestureData', [
      mojo.internal.StructField('screen_position', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('widget_position', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_device', 16, 0, blink.mojom.GestureDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('primary_pointer_type', 24, 0, ui.mojom.EventPointerTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('contact_size', 32, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('scroll_data', 40, 0, blink.mojom.ScrollDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pinch_begin_data', 48, 0, blink.mojom.PinchBeginDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pinch_update_data', 56, 0, blink.mojom.PinchUpdateDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pinch_end_data', 64, 0, blink.mojom.PinchEndDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tap_data', 72, 0, blink.mojom.TapDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tap_down_data', 80, 0, blink.mojom.TapDownDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('fling_data', 88, 0, blink.mojom.FlingDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('primary_unique_touch_event_id', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('unique_touch_event_id', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_source_touch_event_set_blocking', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: TouchPoint
mojo.internal.Struct(
    blink.mojom.TouchPointSpec, 'blink.mojom.TouchPoint', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.TouchStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pointer_data', 8, 0, blink.mojom.PointerDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('radius_x', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('radius_y', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('rotation_angle', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TouchData
mojo.internal.Struct(
    blink.mojom.TouchDataSpec, 'blink.mojom.TouchData', [
      mojo.internal.StructField('cancelable', 0, 0, blink.mojom.DispatchTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('touches', 8, 0, mojo.internal.Array(blink.mojom.TouchPointSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('unique_touch_event_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('moved_beyond_slop_region', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('touch_start_or_first_move', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hovering', 20, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Event
mojo.internal.Struct(
    blink.mojom.EventSpec, 'blink.mojom.Event', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.EventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('latency', 16, 0, ui.mojom.LatencyInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_latency_metadata', 24, 0, ui.mojom.EventLatencyMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 32, 0, blink.mojom.KeyDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pointer_data', 40, 0, blink.mojom.PointerDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('gesture_data', 48, 0, blink.mojom.GestureDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('touch_data', 56, 0, blink.mojom.TouchDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('modifiers', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: DidOverscrollParams
mojo.internal.Struct(
    blink.mojom.DidOverscrollParamsSpec, 'blink.mojom.DidOverscrollParams', [
      mojo.internal.StructField('accumulated_overscroll', 0, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('latest_overscroll_delta', 8, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('current_fling_velocity', 16, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('causal_event_viewport_point', 24, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('overscroll_behavior', 32, 0, cc.mojom.OverscrollBehaviorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_device', 40, 0, blink.mojom.GestureDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TouchActionOptional
mojo.internal.Struct(
    blink.mojom.TouchActionOptionalSpec, 'blink.mojom.TouchActionOptional', [
      mojo.internal.StructField('touch_action', 0, 0, cc.mojom.TouchActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EditCommand
mojo.internal.Struct(
    blink.mojom.EditCommandSpec, 'blink.mojom.EditCommand', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SelectAroundCaretResult
mojo.internal.Struct(
    blink.mojom.SelectAroundCaretResultSpec, 'blink.mojom.SelectAroundCaretResult', [
      mojo.internal.StructField('extended_start_adjust', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('extended_end_adjust', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('word_start_adjust', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('word_end_adjust', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WidgetInputHandlerHost
mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_Params', [
      mojo.internal.StructField('touch_action', 0, 0, cc.mojom.TouchActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_SetPanAction_Params', [
      mojo.internal.StructField('pan_action', 0, 0, blink.mojom.PanActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_DidOverscroll_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.DidOverscrollParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_Params', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('character_bounds', 8, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_SetMouseCapture_Params', [
      mojo.internal.StructField('capture', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_Params', [
      mojo.internal.StructField('autoscroll_selection', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_RequestMouseLock_Params', [
      mojo.internal.StructField('from_user_gesture', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('unadjusted_movement', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ResponseParamsSpec, 'blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.PointerLockResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('context', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.PointerLockContextRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.WidgetInputHandlerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WidgetInputHandlerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetInputHandlerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WidgetInputHandlerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.WidgetInputHandlerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setTouchActionFromMain(touch_action) {
    return this.$.setTouchActionFromMain(touch_action);
  }
  setPanAction(pan_action) {
    return this.$.setPanAction(pan_action);
  }
  didOverscroll(params) {
    return this.$.didOverscroll(params);
  }
  didStartScrollingViewport() {
    return this.$.didStartScrollingViewport();
  }
  imeCancelComposition() {
    return this.$.imeCancelComposition();
  }
  imeCompositionRangeChanged(range, character_bounds) {
    return this.$.imeCompositionRangeChanged(range, character_bounds);
  }
  setMouseCapture(capture) {
    return this.$.setMouseCapture(capture);
  }
  setAutoscrollSelectionActiveInMainFrame(autoscroll_selection) {
    return this.$.setAutoscrollSelectionActiveInMainFrame(autoscroll_selection);
  }
  requestMouseLock(from_user_gesture, unadjusted_movement) {
    return this.$.requestMouseLock(from_user_gesture, unadjusted_movement);
  }
};

blink.mojom.WidgetInputHandlerHostRemoteCallHandler = class {
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

  setTouchActionFromMain(touch_action) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec,
      null,
      [touch_action],
      false);
  }

  setPanAction(pan_action) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec,
      null,
      [pan_action],
      false);
  }

  didOverscroll(params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec,
      null,
      [params],
      false);
  }

  didStartScrollingViewport() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec,
      null,
      [],
      false);
  }

  imeCancelComposition() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec,
      null,
      [],
      false);
  }

  imeCompositionRangeChanged(range, character_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec,
      null,
      [range, character_bounds],
      false);
  }

  setMouseCapture(capture) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec,
      null,
      [capture],
      false);
  }

  setAutoscrollSelectionActiveInMainFrame(autoscroll_selection) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec,
      null,
      [autoscroll_selection],
      false);
  }

  requestMouseLock(from_user_gesture, unadjusted_movement) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec,
      blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ResponseParamsSpec,
      [from_user_gesture, unadjusted_movement],
      false);
  }

};

blink.mojom.WidgetInputHandlerHost.getRemote = function() {
  let remote = new blink.mojom.WidgetInputHandlerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetInputHandlerHost',
    'context');
  return remote.$;
};

blink.mojom.WidgetInputHandlerHostReceiver = class {
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTouchActionFromMain');
          const result = this.impl.setTouchActionFromMain(params.touch_action);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPanAction');
          const result = this.impl.setPanAction(params.pan_action);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didOverscroll');
          const result = this.impl.didOverscroll(params.params);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didStartScrollingViewport');
          const result = this.impl.didStartScrollingViewport();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeCancelComposition');
          const result = this.impl.imeCancelComposition();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeCompositionRangeChanged');
          const result = this.impl.imeCompositionRangeChanged(params.range, params.character_bounds);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMouseCapture');
          const result = this.impl.setMouseCapture(params.capture);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAutoscrollSelectionActiveInMainFrame');
          const result = this.impl.setAutoscrollSelectionActiveInMainFrame(params.autoscroll_selection);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestMouseLock');
          const result = this.impl.requestMouseLock(params.from_user_gesture, params.unadjusted_movement);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ResponseParamsSpec);
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

blink.mojom.WidgetInputHandlerHostReceiver = blink.mojom.WidgetInputHandlerHostReceiver;

blink.mojom.WidgetInputHandlerHostPtr = blink.mojom.WidgetInputHandlerHostRemote;
blink.mojom.WidgetInputHandlerHostRequest = blink.mojom.WidgetInputHandlerHostPendingReceiver;


// Interface: FrameWidgetInputHandler
mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_Params', [
      mojo.internal.StructField('ime_text_spans', 0, 0, mojo.internal.Array(ui.mojom.ImeTextSpanSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('start', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_Params', [
      mojo.internal.StructField('type', 0, 0, ui.mojom.ImeTextSpanTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_Params', [
      mojo.internal.StructField('ime_text_spans', 0, 0, mojo.internal.Array(ui.mojom.ImeTextSpanSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('start', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_Params', [
      mojo.internal.StructField('before', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('after', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_Params', [
      mojo.internal.StructField('replacement_text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('before', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('after', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_Params', [
      mojo.internal.StructField('before', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('after', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_Params', [
      mojo.internal.StructField('before', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('after', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_Params', [
      mojo.internal.StructField('start', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_Params', [
      mojo.internal.StructField('gesture_data', 0, 0, blink.mojom.StylusWritingGestureDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParamsSpec, 'blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.HandwritingGestureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_Params', [
      mojo.internal.StructField('command', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Undo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Redo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Cut_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Copy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_CenterSelection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Paste_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Delete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SelectAll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_CollapseSelection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Replace_Params', [
      mojo.internal.StructField('word', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_Params', [
      mojo.internal.StructField('word', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SelectRange_Params', [
      mojo.internal.StructField('base', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extent', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_Params', [
      mojo.internal.StructField('behavior', 0, 0, blink.mojom.SelectionMenuBehaviorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_Params', [
      mojo.internal.StructField('granularity', 0, 0, blink.mojom.SelectionGranularitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('should_show_handle', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_show_context_menu', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.SelectAroundCaretResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_Params', [
      mojo.internal.StructField('extent', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ResponseParamsSpec, 'blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_MoveCaret_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_StopAutoscroll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_Params', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParamsSpec, 'blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParams', [
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.FrameWidgetInputHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FrameWidgetInputHandlerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FrameWidgetInputHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FrameWidgetInputHandlerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FrameWidgetInputHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addImeTextSpansToExistingText(start, end, ime_text_spans) {
    return this.$.addImeTextSpansToExistingText(start, end, ime_text_spans);
  }
  clearImeTextSpansByType(start, end, type) {
    return this.$.clearImeTextSpansByType(start, end, type);
  }
  setCompositionFromExistingText(start, end, ime_text_spans) {
    return this.$.setCompositionFromExistingText(start, end, ime_text_spans);
  }
  extendSelectionAndDelete(before, after) {
    return this.$.extendSelectionAndDelete(before, after);
  }
  extendSelectionAndReplace(before, after, replacement_text) {
    return this.$.extendSelectionAndReplace(before, after, replacement_text);
  }
  deleteSurroundingText(before, after) {
    return this.$.deleteSurroundingText(before, after);
  }
  deleteSurroundingTextInCodePoints(before, after) {
    return this.$.deleteSurroundingTextInCodePoints(before, after);
  }
  setEditableSelectionOffsets(start, end) {
    return this.$.setEditableSelectionOffsets(start, end);
  }
  handleStylusWritingGestureAction(gesture_data) {
    return this.$.handleStylusWritingGestureAction(gesture_data);
  }
  executeEditCommand(command, value) {
    return this.$.executeEditCommand(command, value);
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
  replace(word) {
    return this.$.replace(word);
  }
  replaceMisspelling(word) {
    return this.$.replaceMisspelling(word);
  }
  selectRange(base, extent) {
    return this.$.selectRange(base, extent);
  }
  adjustSelectionByCharacterOffset(start, end, behavior) {
    return this.$.adjustSelectionByCharacterOffset(start, end, behavior);
  }
  selectAroundCaret(granularity, should_show_handle, should_show_context_menu) {
    return this.$.selectAroundCaret(granularity, should_show_handle, should_show_context_menu);
  }
  moveRangeSelectionExtent(extent) {
    return this.$.moveRangeSelectionExtent(extent);
  }
  scrollFocusedEditableNodeIntoView() {
    return this.$.scrollFocusedEditableNodeIntoView();
  }
  waitForPageScaleAnimationForTesting() {
    return this.$.waitForPageScaleAnimationForTesting();
  }
  moveCaret(point) {
    return this.$.moveCaret(point);
  }
  startAutoscrollForSelectionToPoint(point) {
    return this.$.startAutoscrollForSelectionToPoint(point);
  }
  stopAutoscroll() {
    return this.$.stopAutoscroll();
  }
  rectForEditFieldChars(range) {
    return this.$.rectForEditFieldChars(range);
  }
};

blink.mojom.FrameWidgetInputHandlerRemoteCallHandler = class {
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

  addImeTextSpansToExistingText(start, end, ime_text_spans) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec,
      null,
      [start, end, ime_text_spans],
      false);
  }

  clearImeTextSpansByType(start, end, type) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec,
      null,
      [start, end, type],
      false);
  }

  setCompositionFromExistingText(start, end, ime_text_spans) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec,
      null,
      [start, end, ime_text_spans],
      false);
  }

  extendSelectionAndDelete(before, after) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec,
      null,
      [before, after],
      false);
  }

  extendSelectionAndReplace(before, after, replacement_text) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec,
      null,
      [before, after, replacement_text],
      false);
  }

  deleteSurroundingText(before, after) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec,
      null,
      [before, after],
      false);
  }

  deleteSurroundingTextInCodePoints(before, after) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec,
      null,
      [before, after],
      false);
  }

  setEditableSelectionOffsets(start, end) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec,
      null,
      [start, end],
      false);
  }

  handleStylusWritingGestureAction(gesture_data) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec,
      blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParamsSpec,
      [gesture_data],
      false);
  }

  executeEditCommand(command, value) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec,
      null,
      [command, value],
      false);
  }

  undo() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec,
      null,
      [],
      false);
  }

  redo() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec,
      null,
      [],
      false);
  }

  cut() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec,
      null,
      [],
      false);
  }

  copy() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec,
      null,
      [],
      false);
  }

  copyToFindPboard() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec,
      null,
      [],
      false);
  }

  centerSelection() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec,
      null,
      [],
      false);
  }

  paste() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec,
      null,
      [],
      false);
  }

  pasteAndMatchStyle() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec,
      null,
      [],
      false);
  }

  delete() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec,
      null,
      [],
      false);
  }

  selectAll() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec,
      null,
      [],
      false);
  }

  collapseSelection() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec,
      null,
      [],
      false);
  }

  replace(word) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec,
      null,
      [word],
      false);
  }

  replaceMisspelling(word) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec,
      null,
      [word],
      false);
  }

  selectRange(base, extent) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec,
      null,
      [base, extent],
      false);
  }

  adjustSelectionByCharacterOffset(start, end, behavior) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec,
      null,
      [start, end, behavior],
      false);
  }

  selectAroundCaret(granularity, should_show_handle, should_show_context_menu) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec,
      blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParamsSpec,
      [granularity, should_show_handle, should_show_context_menu],
      false);
  }

  moveRangeSelectionExtent(extent) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec,
      null,
      [extent],
      false);
  }

  scrollFocusedEditableNodeIntoView() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec,
      null,
      [],
      false);
  }

  waitForPageScaleAnimationForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec,
      blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ResponseParamsSpec,
      [],
      false);
  }

  moveCaret(point) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec,
      null,
      [point],
      false);
  }

  startAutoscrollForSelectionToPoint(point) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec,
      null,
      [point],
      false);
  }

  stopAutoscroll() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec,
      null,
      [],
      false);
  }

  rectForEditFieldChars(range) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec,
      blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParamsSpec,
      [range],
      false);
  }

};

blink.mojom.FrameWidgetInputHandler.getRemote = function() {
  let remote = new blink.mojom.FrameWidgetInputHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FrameWidgetInputHandler',
    'context');
  return remote.$;
};

blink.mojom.FrameWidgetInputHandlerReceiver = class {
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addImeTextSpansToExistingText');
          const result = this.impl.addImeTextSpansToExistingText(params.start, params.end, params.ime_text_spans);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearImeTextSpansByType');
          const result = this.impl.clearImeTextSpansByType(params.start, params.end, params.type);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCompositionFromExistingText');
          const result = this.impl.setCompositionFromExistingText(params.start, params.end, params.ime_text_spans);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.extendSelectionAndDelete');
          const result = this.impl.extendSelectionAndDelete(params.before, params.after);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.extendSelectionAndReplace');
          const result = this.impl.extendSelectionAndReplace(params.before, params.after, params.replacement_text);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteSurroundingText');
          const result = this.impl.deleteSurroundingText(params.before, params.after);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteSurroundingTextInCodePoints');
          const result = this.impl.deleteSurroundingTextInCodePoints(params.before, params.after);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEditableSelectionOffsets');
          const result = this.impl.setEditableSelectionOffsets(params.start, params.end);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleStylusWritingGestureAction');
          const result = this.impl.handleStylusWritingGestureAction(params.gesture_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.executeEditCommand');
          const result = this.impl.executeEditCommand(params.command, params.value);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.undo');
          const result = this.impl.undo();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.redo');
          const result = this.impl.redo();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cut');
          const result = this.impl.cut();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copy');
          const result = this.impl.copy();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyToFindPboard');
          const result = this.impl.copyToFindPboard();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.centerSelection');
          const result = this.impl.centerSelection();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.paste');
          const result = this.impl.paste();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pasteAndMatchStyle');
          const result = this.impl.pasteAndMatchStyle();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.delete');
          const result = this.impl.delete();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectAll');
          const result = this.impl.selectAll();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.collapseSelection');
          const result = this.impl.collapseSelection();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replace');
          const result = this.impl.replace(params.word);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.replaceMisspelling');
          const result = this.impl.replaceMisspelling(params.word);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectRange');
          const result = this.impl.selectRange(params.base, params.extent);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.adjustSelectionByCharacterOffset');
          const result = this.impl.adjustSelectionByCharacterOffset(params.start, params.end, params.behavior);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectAroundCaret');
          const result = this.impl.selectAroundCaret(params.granularity, params.should_show_handle, params.should_show_context_menu);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.moveRangeSelectionExtent');
          const result = this.impl.moveRangeSelectionExtent(params.extent);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scrollFocusedEditableNodeIntoView');
          const result = this.impl.scrollFocusedEditableNodeIntoView();
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitForPageScaleAnimationForTesting');
          const result = this.impl.waitForPageScaleAnimationForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.moveCaret');
          const result = this.impl.moveCaret(params.point);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startAutoscrollForSelectionToPoint');
          const result = this.impl.startAutoscrollForSelectionToPoint(params.point);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopAutoscroll');
          const result = this.impl.stopAutoscroll();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rectForEditFieldChars');
          const result = this.impl.rectForEditFieldChars(params.range);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParamsSpec);
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

blink.mojom.FrameWidgetInputHandlerReceiver = blink.mojom.FrameWidgetInputHandlerReceiver;

blink.mojom.FrameWidgetInputHandlerPtr = blink.mojom.FrameWidgetInputHandlerRemote;
blink.mojom.FrameWidgetInputHandlerRequest = blink.mojom.FrameWidgetInputHandlerPendingReceiver;


// Interface: WidgetInputHandler
mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec, 'blink.mojom.WidgetInputHandler_SetFocus_Params', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.FocusStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec, 'blink.mojom.WidgetInputHandler_MouseCaptureLost_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec, 'blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_Params', [
      mojo.internal.StructField('commands', 0, 0, mojo.internal.Array(blink.mojom.EditCommandSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec, 'blink.mojom.WidgetInputHandler_CursorVisibilityChanged_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec, 'blink.mojom.WidgetInputHandler_ImeSetComposition_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('ime_text_spans', 8, 0, mojo.internal.Array(ui.mojom.ImeTextSpanSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('range', 16, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ime_state', 24, 0, blink.mojom.ImeStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('start', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_ImeSetComposition_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_ImeSetComposition_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec, 'blink.mojom.WidgetInputHandler_ImeCommitText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('ime_text_spans', 8, 0, mojo.internal.Array(ui.mojom.ImeTextSpanSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('range', 16, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('relative_cursor_position', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_ImeCommitText_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_ImeCommitText_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec, 'blink.mojom.WidgetInputHandler_ImeFinishComposingText_Params', [
      mojo.internal.StructField('keep_selection', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec, 'blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec, 'blink.mojom.WidgetInputHandler_RequestCompositionUpdates_Params', [
      mojo.internal.StructField('immediate_request', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('monitor_request', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec, 'blink.mojom.WidgetInputHandler_DispatchEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('original_event_for_gesture', 8, 0, blink.mojom.EventSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParams', [
      mojo.internal.StructField('source', 0, 0, blink.mojom.InputEventResultSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('updated_latency', 8, 0, ui.mojom.LatencyInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('state', 16, 0, blink.mojom.InputEventResultStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('overscroll', 24, 0, blink.mojom.DidOverscrollParamsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('touch_action', 32, 0, blink.mojom.TouchActionOptionalSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec, 'blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec, 'blink.mojom.WidgetInputHandler_WaitForInputProcessed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_WaitForInputProcessed_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_WaitForInputProcessed_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec, 'blink.mojom.WidgetInputHandler_PingMainThread_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_PingMainThread_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_PingMainThread_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec, 'blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_Params', [
      mojo.internal.StructField('control_host', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.SynchronousCompositorControlHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('compositor_request', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec, 'blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_Params', [
      mojo.internal.StructField('interface_request', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec, 'blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_Params', [
      mojo.internal.StructField('constraints', 0, 0, cc.mojom.BrowserControlsStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('current', 8, 0, cc.mojom.BrowserControlsStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset_tag_modifications', 16, 0, cc.mojom.BrowserControlsOffsetTagModificationsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('animate', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

blink.mojom.WidgetInputHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WidgetInputHandlerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetInputHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WidgetInputHandlerPendingReceiver,
      handle);
    this.$ = new blink.mojom.WidgetInputHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setFocus(state) {
    return this.$.setFocus(state);
  }
  mouseCaptureLost() {
    return this.$.mouseCaptureLost();
  }
  setEditCommandsForNextKeyEvent(commands) {
    return this.$.setEditCommandsForNextKeyEvent(commands);
  }
  cursorVisibilityChanged(visible) {
    return this.$.cursorVisibilityChanged(visible);
  }
  imeSetComposition(text, ime_text_spans, range, start, end, ime_state) {
    return this.$.imeSetComposition(text, ime_text_spans, range, start, end, ime_state);
  }
  imeCommitText(text, ime_text_spans, range, relative_cursor_position) {
    return this.$.imeCommitText(text, ime_text_spans, range, relative_cursor_position);
  }
  imeFinishComposingText(keep_selection) {
    return this.$.imeFinishComposingText(keep_selection);
  }
  requestTextInputStateUpdate() {
    return this.$.requestTextInputStateUpdate();
  }
  requestCompositionUpdates(immediate_request, monitor_request) {
    return this.$.requestCompositionUpdates(immediate_request, monitor_request);
  }
  dispatchEvent(event, original_event_for_gesture) {
    return this.$.dispatchEvent(event, original_event_for_gesture);
  }
  dispatchNonBlockingEvent(event) {
    return this.$.dispatchNonBlockingEvent(event);
  }
  waitForInputProcessed() {
    return this.$.waitForInputProcessed();
  }
  pingMainThread() {
    return this.$.pingMainThread();
  }
  attachSynchronousCompositor(control_host, host, compositor_request) {
    return this.$.attachSynchronousCompositor(control_host, host, compositor_request);
  }
  getFrameWidgetInputHandler(interface_request) {
    return this.$.getFrameWidgetInputHandler(interface_request);
  }
  updateBrowserControlsState(constraints, current, animate, offset_tag_modifications) {
    return this.$.updateBrowserControlsState(constraints, current, animate, offset_tag_modifications);
  }
};

blink.mojom.WidgetInputHandlerRemoteCallHandler = class {
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

  setFocus(state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec,
      null,
      [state],
      false);
  }

  mouseCaptureLost() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec,
      null,
      [],
      false);
  }

  setEditCommandsForNextKeyEvent(commands) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec,
      null,
      [commands],
      false);
  }

  cursorVisibilityChanged(visible) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec,
      null,
      [visible],
      false);
  }

  imeSetComposition(text, ime_text_spans, range, start, end, ime_state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec,
      blink.mojom.WidgetInputHandler_ImeSetComposition_ResponseParamsSpec,
      [text, ime_text_spans, range, start, end, ime_state],
      false);
  }

  imeCommitText(text, ime_text_spans, range, relative_cursor_position) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec,
      blink.mojom.WidgetInputHandler_ImeCommitText_ResponseParamsSpec,
      [text, ime_text_spans, range, relative_cursor_position],
      false);
  }

  imeFinishComposingText(keep_selection) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec,
      null,
      [keep_selection],
      false);
  }

  requestTextInputStateUpdate() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec,
      null,
      [],
      false);
  }

  requestCompositionUpdates(immediate_request, monitor_request) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec,
      null,
      [immediate_request, monitor_request],
      false);
  }

  dispatchEvent(event, original_event_for_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec,
      blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParamsSpec,
      [event, original_event_for_gesture],
      false);
  }

  dispatchNonBlockingEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  waitForInputProcessed() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec,
      blink.mojom.WidgetInputHandler_WaitForInputProcessed_ResponseParamsSpec,
      [],
      false);
  }

  pingMainThread() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec,
      blink.mojom.WidgetInputHandler_PingMainThread_ResponseParamsSpec,
      [],
      false);
  }

  attachSynchronousCompositor(control_host, host, compositor_request) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec,
      null,
      [control_host, host, compositor_request],
      false);
  }

  getFrameWidgetInputHandler(interface_request) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec,
      null,
      [interface_request],
      false);
  }

  updateBrowserControlsState(constraints, current, animate, offset_tag_modifications) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec,
      null,
      [constraints, current, animate, offset_tag_modifications],
      false);
  }

};

blink.mojom.WidgetInputHandler.getRemote = function() {
  let remote = new blink.mojom.WidgetInputHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetInputHandler',
    'context');
  return remote.$;
};

blink.mojom.WidgetInputHandlerReceiver = class {
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec);
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
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFocus');
          const result = this.impl.setFocus(params.state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mouseCaptureLost');
          const result = this.impl.mouseCaptureLost();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEditCommandsForNextKeyEvent');
          const result = this.impl.setEditCommandsForNextKeyEvent(params.commands);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cursorVisibilityChanged');
          const result = this.impl.cursorVisibilityChanged(params.visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeSetComposition');
          const result = this.impl.imeSetComposition(params.text, params.ime_text_spans, params.range, params.start, params.end, params.ime_state);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WidgetInputHandler_ImeSetComposition_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeCommitText');
          const result = this.impl.imeCommitText(params.text, params.ime_text_spans, params.range, params.relative_cursor_position);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WidgetInputHandler_ImeCommitText_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.imeFinishComposingText');
          const result = this.impl.imeFinishComposingText(params.keep_selection);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestTextInputStateUpdate');
          const result = this.impl.requestTextInputStateUpdate();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestCompositionUpdates');
          const result = this.impl.requestCompositionUpdates(params.immediate_request, params.monitor_request);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchEvent');
          const result = this.impl.dispatchEvent(params.event, params.original_event_for_gesture);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchNonBlockingEvent');
          const result = this.impl.dispatchNonBlockingEvent(params.event);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.waitForInputProcessed');
          const result = this.impl.waitForInputProcessed();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WidgetInputHandler_WaitForInputProcessed_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pingMainThread');
          const result = this.impl.pingMainThread();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.WidgetInputHandler_PingMainThread_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.attachSynchronousCompositor');
          const result = this.impl.attachSynchronousCompositor(params.control_host, params.host, params.compositor_request);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFrameWidgetInputHandler');
          const result = this.impl.getFrameWidgetInputHandler(params.interface_request);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateBrowserControlsState');
          const result = this.impl.updateBrowserControlsState(params.constraints, params.current, params.animate, params.offset_tag_modifications);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.WidgetInputHandlerReceiver = blink.mojom.WidgetInputHandlerReceiver;

blink.mojom.WidgetInputHandlerPtr = blink.mojom.WidgetInputHandlerRemote;
blink.mojom.WidgetInputHandlerRequest = blink.mojom.WidgetInputHandlerPendingReceiver;

