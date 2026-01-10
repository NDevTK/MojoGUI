// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_handler.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var blink = blink || {};

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
      mojo.internal.StructField('dom_key', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('dom_code', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('windows_key_code', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('native_key_code', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_system_key', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_browser_shortcut', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_confirmed_physical_keyboard_input', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('unmodified_text', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PointerData
mojo.internal.Struct(
    blink.mojom.PointerDataSpec, 'blink.mojom.PointerData', [
      mojo.internal.StructField('pointer_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('force', 52, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('tilt_x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('tilt_y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('tangential_pressure', 56, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('twist', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('button', 64, 0, blink.mojom.ButtonSpec, null, false, 0, undefined),
      mojo.internal.StructField('pointer_type', 16, 0, ui.mojom.EventPointerTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('movement_x', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('movement_y', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_raw_movement_event', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('widget_position', 24, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('screen_position', 32, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('mouse_data', 40, 0, blink.mojom.MouseDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('device_id', 76, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: WheelData
mojo.internal.Struct(
    blink.mojom.WheelDataSpec, 'blink.mojom.WheelData', [
      mojo.internal.StructField('delta_x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('delta_y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('wheel_ticks_x', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('wheel_ticks_y', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('acceleration_ratio_x', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('acceleration_ratio_y', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('phase', 28, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('momentum_phase', 29, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('cancelable', 24, 0, blink.mojom.DispatchTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_action', 30, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('delta_units', 31, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: MouseData
mojo.internal.Struct(
    blink.mojom.MouseDataSpec, 'blink.mojom.MouseData', [
      mojo.internal.StructField('click_count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('wheel_data', 0, 0, blink.mojom.WheelDataSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ScrollData
mojo.internal.Struct(
    blink.mojom.ScrollDataSpec, 'blink.mojom.ScrollData', [
      mojo.internal.StructField('delta_x', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('delta_y', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('delta_units', 0, 0, ui.mojom.ScrollGranularitySpec, null, false, 0, undefined),
      mojo.internal.StructField('target_viewport', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('inertial_phase', 16, 0, blink.mojom.InertialPhaseStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('synthetic', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('pointer_count', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('cursor_control', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
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
      mojo.internal.StructField('screen_position', 0, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('widget_position', 8, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('source_device', 88, 0, blink.mojom.GestureDeviceSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_source_touch_event_set_blocking', 100, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('primary_pointer_type', 16, 0, ui.mojom.EventPointerTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('primary_unique_touch_event_id', 92, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('unique_touch_event_id', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('contact_size', 24, 0, gfx.mojom.SizeSpec, null, true, 0, undefined),
      mojo.internal.StructField('scroll_data', 32, 0, blink.mojom.ScrollDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('pinch_begin_data', 40, 0, blink.mojom.PinchBeginDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('pinch_update_data', 48, 0, blink.mojom.PinchUpdateDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('pinch_end_data', 56, 0, blink.mojom.PinchEndDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('tap_data', 64, 0, blink.mojom.TapDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('tap_down_data', 72, 0, blink.mojom.TapDownDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('fling_data', 80, 0, blink.mojom.FlingDataSpec, null, true, 0, undefined),
    ],
    [[0, 112]]);

// Struct: TouchPoint
mojo.internal.Struct(
    blink.mojom.TouchPointSpec, 'blink.mojom.TouchPoint', [
      mojo.internal.StructField('state', 8, 0, blink.mojom.TouchStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('radius_x', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('radius_y', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('rotation_angle', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('pointer_data', 0, 0, blink.mojom.PointerDataSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TouchData
mojo.internal.Struct(
    blink.mojom.TouchDataSpec, 'blink.mojom.TouchData', [
      mojo.internal.StructField('cancelable', 8, 0, blink.mojom.DispatchTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('moved_beyond_slop_region', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('touch_start_or_first_move', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('hovering', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('unique_touch_event_id', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('touches', 0, 0, mojo.internal.Array(blink.mojom.TouchPointSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Event
mojo.internal.Struct(
    blink.mojom.EventSpec, 'blink.mojom.Event', [
      mojo.internal.StructField('type', 56, 0, blink.mojom.EventTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('modifiers', 60, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('latency', 8, 0, ui.mojom.LatencyInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('event_latency_metadata', 16, 0, ui.mojom.EventLatencyMetadataSpec, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 24, 0, blink.mojom.KeyDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('pointer_data', 32, 0, blink.mojom.PointerDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('gesture_data', 40, 0, blink.mojom.GestureDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('touch_data', 48, 0, blink.mojom.TouchDataSpec, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: DidOverscrollParams
mojo.internal.Struct(
    blink.mojom.DidOverscrollParamsSpec, 'blink.mojom.DidOverscrollParams', [
      mojo.internal.StructField('accumulated_overscroll', 0, 0, gfx.mojom.Vector2dFSpec, null, false, 0, undefined),
      mojo.internal.StructField('latest_overscroll_delta', 8, 0, gfx.mojom.Vector2dFSpec, null, false, 0, undefined),
      mojo.internal.StructField('current_fling_velocity', 16, 0, gfx.mojom.Vector2dFSpec, null, false, 0, undefined),
      mojo.internal.StructField('causal_event_viewport_point', 24, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
      mojo.internal.StructField('overscroll_behavior', 32, 0, cc.mojom.OverscrollBehaviorSpec, null, false, 0, undefined),
      mojo.internal.StructField('source_device', 40, 0, blink.mojom.GestureDeviceSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TouchActionOptional
mojo.internal.Struct(
    blink.mojom.TouchActionOptionalSpec, 'blink.mojom.TouchActionOptional', [
      mojo.internal.StructField('touch_action', 0, 0, cc.mojom.TouchActionSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('touch_action', 0, 0, cc.mojom.TouchActionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_SetPanAction_Params', [
      mojo.internal.StructField('pan_action', 0, 0, blink.mojom.PanActionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_DidOverscroll_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.DidOverscrollParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec, 'blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_Params', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('character_bounds', 8, 0, mojo.internal.Array(gfx.mojom.RectSpec, false), null, true, 0, undefined),
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
      mojo.internal.StructField('result', 8, 0, blink.mojom.PointerLockResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('context', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.PointerLockContextRemote), null, true, 0, undefined),
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
};

blink.mojom.WidgetInputHandlerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setTouchActionFromMain(touch_action) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec,
      null,
      [touch_action]);
  }

  setPanAction(pan_action) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec,
      null,
      [pan_action]);
  }

  didOverscroll(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec,
      null,
      [params]);
  }

  didStartScrollingViewport() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec,
      null,
      []);
  }

  imeCancelComposition() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec,
      null,
      []);
  }

  imeCompositionRangeChanged(range, character_bounds) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec,
      null,
      [range, character_bounds]);
  }

  setMouseCapture(capture) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec,
      null,
      [capture]);
  }

  setAutoscrollSelectionActiveInMainFrame(autoscroll_selection) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec,
      null,
      [autoscroll_selection]);
  }

  requestMouseLock(from_user_gesture, unadjusted_movement) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec,
      blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ResponseParamsSpec,
      [from_user_gesture, unadjusted_movement]);
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

blink.mojom.WidgetInputHandlerHostPtr = blink.mojom.WidgetInputHandlerHostRemote;
blink.mojom.WidgetInputHandlerHostRequest = blink.mojom.WidgetInputHandlerHostPendingReceiver;


// Interface: FrameWidgetInputHandler
mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_Params', [
      mojo.internal.StructField('start', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('ime_text_spans', 0, 0, mojo.internal.Array(ui.mojom.ImeTextSpanSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_Params', [
      mojo.internal.StructField('start', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, ui.mojom.ImeTextSpanTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_Params', [
      mojo.internal.StructField('start', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('ime_text_spans', 0, 0, mojo.internal.Array(ui.mojom.ImeTextSpanSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('before', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('after', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('replacement_text', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
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
      mojo.internal.StructField('gesture_data', 0, 0, blink.mojom.StylusWritingGestureDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParamsSpec, 'blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.HandwritingGestureResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_Params', [
      mojo.internal.StructField('command', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Undo_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Redo_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Cut_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Copy_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_CenterSelection_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Paste_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Delete_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SelectAll_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_CollapseSelection_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_Replace_Params', [
      mojo.internal.StructField('word', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_Params', [
      mojo.internal.StructField('word', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SelectRange_Params', [
      mojo.internal.StructField('base', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('extent', 8, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_Params', [
      mojo.internal.StructField('start', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('behavior', 8, 0, blink.mojom.SelectionMenuBehaviorSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_Params', [
      mojo.internal.StructField('granularity', 0, 0, blink.mojom.SelectionGranularitySpec, null, false, 0, undefined),
      mojo.internal.StructField('should_show_handle', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('should_show_context_menu', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParamsSpec, 'blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.SelectAroundCaretResultSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_Params', [
      mojo.internal.StructField('extent', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ResponseParamsSpec, 'blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_MoveCaret_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointFSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_StopAutoscroll_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec, 'blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_Params', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParamsSpec, 'blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParams', [
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec, null, false, 0, undefined),
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
};

blink.mojom.FrameWidgetInputHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addImeTextSpansToExistingText(start, end, ime_text_spans) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec,
      null,
      [start, end, ime_text_spans]);
  }

  clearImeTextSpansByType(start, end, type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec,
      null,
      [start, end, type]);
  }

  setCompositionFromExistingText(start, end, ime_text_spans) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec,
      null,
      [start, end, ime_text_spans]);
  }

  extendSelectionAndDelete(before, after) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec,
      null,
      [before, after]);
  }

  extendSelectionAndReplace(before, after, replacement_text) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec,
      null,
      [before, after, replacement_text]);
  }

  deleteSurroundingText(before, after) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec,
      null,
      [before, after]);
  }

  deleteSurroundingTextInCodePoints(before, after) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec,
      null,
      [before, after]);
  }

  setEditableSelectionOffsets(start, end) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec,
      null,
      [start, end]);
  }

  handleStylusWritingGestureAction(gesture_data) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec,
      blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParamsSpec,
      [gesture_data]);
  }

  executeEditCommand(command, value) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec,
      null,
      [command, value]);
  }

  undo() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec,
      null,
      []);
  }

  redo() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec,
      null,
      []);
  }

  cut() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec,
      null,
      []);
  }

  copy() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec,
      null,
      []);
  }

  copyToFindPboard() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec,
      null,
      []);
  }

  centerSelection() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec,
      null,
      []);
  }

  paste() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec,
      null,
      []);
  }

  pasteAndMatchStyle() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec,
      null,
      []);
  }

  delete() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec,
      null,
      []);
  }

  selectAll() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec,
      null,
      []);
  }

  collapseSelection() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec,
      null,
      []);
  }

  replace(word) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec,
      null,
      [word]);
  }

  replaceMisspelling(word) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec,
      null,
      [word]);
  }

  selectRange(base, extent) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec,
      null,
      [base, extent]);
  }

  adjustSelectionByCharacterOffset(start, end, behavior) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec,
      null,
      [start, end, behavior]);
  }

  selectAroundCaret(granularity, should_show_handle, should_show_context_menu) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec,
      blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParamsSpec,
      [granularity, should_show_handle, should_show_context_menu]);
  }

  moveRangeSelectionExtent(extent) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec,
      null,
      [extent]);
  }

  scrollFocusedEditableNodeIntoView() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec,
      null,
      []);
  }

  waitForPageScaleAnimationForTesting() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec,
      blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ResponseParamsSpec,
      []);
  }

  moveCaret(point) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec,
      null,
      [point]);
  }

  startAutoscrollForSelectionToPoint(point) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec,
      null,
      [point]);
  }

  stopAutoscroll() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec,
      null,
      []);
  }

  rectForEditFieldChars(range) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec,
      blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParamsSpec,
      [range]);
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

blink.mojom.FrameWidgetInputHandlerPtr = blink.mojom.FrameWidgetInputHandlerRemote;
blink.mojom.FrameWidgetInputHandlerRequest = blink.mojom.FrameWidgetInputHandlerPendingReceiver;


// Interface: WidgetInputHandler
mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec, 'blink.mojom.WidgetInputHandler_SetFocus_Params', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.FocusStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec, 'blink.mojom.WidgetInputHandler_MouseCaptureLost_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec, 'blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_Params', [
      mojo.internal.StructField('commands', 0, 0, mojo.internal.Array(blink.mojom.EditCommandSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec, 'blink.mojom.WidgetInputHandler_CursorVisibilityChanged_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec, 'blink.mojom.WidgetInputHandler_ImeSetComposition_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('ime_text_spans', 8, 0, mojo.internal.Array(ui.mojom.ImeTextSpanSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('range', 16, 0, gfx.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('start', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('end', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('ime_state', 32, 0, blink.mojom.ImeStateSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_ImeSetComposition_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_ImeSetComposition_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec, 'blink.mojom.WidgetInputHandler_ImeCommitText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('ime_text_spans', 8, 0, mojo.internal.Array(ui.mojom.ImeTextSpanSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('range', 16, 0, gfx.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('relative_cursor_position', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_ImeCommitText_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_ImeCommitText_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec, 'blink.mojom.WidgetInputHandler_ImeFinishComposingText_Params', [
      mojo.internal.StructField('keep_selection', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec, 'blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec, 'blink.mojom.WidgetInputHandler_RequestCompositionUpdates_Params', [
      mojo.internal.StructField('immediate_request', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('monitor_request', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec, 'blink.mojom.WidgetInputHandler_DispatchEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec, null, false, 0, undefined),
      mojo.internal.StructField('original_event_for_gesture', 8, 0, blink.mojom.EventSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParams', [
      mojo.internal.StructField('source', 24, 0, blink.mojom.InputEventResultSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('updated_latency', 0, 0, ui.mojom.LatencyInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('state', 28, 0, blink.mojom.InputEventResultStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('overscroll', 8, 0, blink.mojom.DidOverscrollParamsSpec, null, true, 0, undefined),
      mojo.internal.StructField('touch_action', 16, 0, blink.mojom.TouchActionOptionalSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec, 'blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec, 'blink.mojom.WidgetInputHandler_WaitForInputProcessed_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_WaitForInputProcessed_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_WaitForInputProcessed_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec, 'blink.mojom.WidgetInputHandler_PingMainThread_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_PingMainThread_ResponseParamsSpec, 'blink.mojom.WidgetInputHandler_PingMainThread_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec, 'blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_Params', [
      mojo.internal.StructField('control_host', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.SynchronousCompositorControlHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.AssociatedInterfaceProxy(blink.mojom.SynchronousCompositorHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('compositor_request', 16, 0, mojo.internal.AssociatedInterfaceRequest(blink.mojom.SynchronousCompositorRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec, 'blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_Params', [
      mojo.internal.StructField('interface_request', 0, 0, mojo.internal.AssociatedInterfaceRequest(blink.mojom.FrameWidgetInputHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec, 'blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_Params', [
      mojo.internal.StructField('constraints', 0, 0, cc.mojom.BrowserControlsStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('current', 8, 0, cc.mojom.BrowserControlsStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('animate', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('offset_tag_modifications', 16, 0, cc.mojom.BrowserControlsOffsetTagModificationsSpec, null, true, 0, undefined),
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
};

blink.mojom.WidgetInputHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setFocus(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec,
      null,
      [state]);
  }

  mouseCaptureLost() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec,
      null,
      []);
  }

  setEditCommandsForNextKeyEvent(commands) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec,
      null,
      [commands]);
  }

  cursorVisibilityChanged(visible) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec,
      null,
      [visible]);
  }

  imeSetComposition(text, ime_text_spans, range, start, end, ime_state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec,
      blink.mojom.WidgetInputHandler_ImeSetComposition_ResponseParamsSpec,
      [text, ime_text_spans, range, start, end, ime_state]);
  }

  imeCommitText(text, ime_text_spans, range, relative_cursor_position) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec,
      blink.mojom.WidgetInputHandler_ImeCommitText_ResponseParamsSpec,
      [text, ime_text_spans, range, relative_cursor_position]);
  }

  imeFinishComposingText(keep_selection) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec,
      null,
      [keep_selection]);
  }

  requestTextInputStateUpdate() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec,
      null,
      []);
  }

  requestCompositionUpdates(immediate_request, monitor_request) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec,
      null,
      [immediate_request, monitor_request]);
  }

  dispatchEvent(event, original_event_for_gesture) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec,
      blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParamsSpec,
      [event, original_event_for_gesture]);
  }

  dispatchNonBlockingEvent(event) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec,
      null,
      [event]);
  }

  waitForInputProcessed() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec,
      blink.mojom.WidgetInputHandler_WaitForInputProcessed_ResponseParamsSpec,
      []);
  }

  pingMainThread() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec,
      blink.mojom.WidgetInputHandler_PingMainThread_ResponseParamsSpec,
      []);
  }

  attachSynchronousCompositor(control_host, host, compositor_request) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec,
      null,
      [control_host, host, compositor_request]);
  }

  getFrameWidgetInputHandler(interface_request) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec,
      null,
      [interface_request]);
  }

  updateBrowserControlsState(constraints, current, animate, offset_tag_modifications) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec,
      null,
      [constraints, current, animate, offset_tag_modifications]);
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

blink.mojom.WidgetInputHandlerPtr = blink.mojom.WidgetInputHandlerRemote;
blink.mojom.WidgetInputHandlerRequest = blink.mojom.WidgetInputHandlerPendingReceiver;

