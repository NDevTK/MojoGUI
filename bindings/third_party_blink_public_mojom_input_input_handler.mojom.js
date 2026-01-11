// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_handler.mojom
// Module: blink.mojom

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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec.$.structSpec);
          const result = this.impl.setTouchActionFromMain(params.touch_action);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec.$.structSpec);
          const result = this.impl.setPanAction(params.pan_action);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec.$.structSpec);
          const result = this.impl.didOverscroll(params.params);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec.$.structSpec);
          const result = this.impl.didStartScrollingViewport();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec.$.structSpec);
          const result = this.impl.imeCancelComposition();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.imeCompositionRangeChanged(params.range, params.character_bounds);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec.$.structSpec);
          const result = this.impl.setMouseCapture(params.capture);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec.$.structSpec);
          const result = this.impl.setAutoscrollSelectionActiveInMainFrame(params.autoscroll_selection);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec.$.structSpec);
          const result = this.impl.addImeTextSpansToExistingText(params.start, params.end, params.ime_text_spans);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec.$.structSpec);
          const result = this.impl.clearImeTextSpansByType(params.start, params.end, params.type);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec.$.structSpec);
          const result = this.impl.setCompositionFromExistingText(params.start, params.end, params.ime_text_spans);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec.$.structSpec);
          const result = this.impl.extendSelectionAndDelete(params.before, params.after);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec.$.structSpec);
          const result = this.impl.extendSelectionAndReplace(params.before, params.after, params.replacement_text);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec.$.structSpec);
          const result = this.impl.deleteSurroundingText(params.before, params.after);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec.$.structSpec);
          const result = this.impl.deleteSurroundingTextInCodePoints(params.before, params.after);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec.$.structSpec);
          const result = this.impl.setEditableSelectionOffsets(params.start, params.end);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec.$.structSpec);
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
          const result = this.impl.executeEditCommand(params.command, params.value);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec.$.structSpec);
          const result = this.impl.undo();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec.$.structSpec);
          const result = this.impl.redo();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec.$.structSpec);
          const result = this.impl.cut();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec.$.structSpec);
          const result = this.impl.copy();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec.$.structSpec);
          const result = this.impl.copyToFindPboard();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec.$.structSpec);
          const result = this.impl.centerSelection();
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec.$.structSpec);
          const result = this.impl.paste();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec.$.structSpec);
          const result = this.impl.pasteAndMatchStyle();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec.$.structSpec);
          const result = this.impl.delete();
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec.$.structSpec);
          const result = this.impl.selectAll();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec.$.structSpec);
          const result = this.impl.collapseSelection();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec.$.structSpec);
          const result = this.impl.replace(params.word);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec.$.structSpec);
          const result = this.impl.replaceMisspelling(params.word);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec.$.structSpec);
          const result = this.impl.selectRange(params.base, params.extent);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec.$.structSpec);
          const result = this.impl.adjustSelectionByCharacterOffset(params.start, params.end, params.behavior);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec.$.structSpec);
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
          const result = this.impl.moveRangeSelectionExtent(params.extent);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec.$.structSpec);
          const result = this.impl.scrollFocusedEditableNodeIntoView();
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec.$.structSpec);
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
          const result = this.impl.moveCaret(params.point);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec.$.structSpec);
          const result = this.impl.startAutoscrollForSelectionToPoint(params.point);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec.$.structSpec);
          const result = this.impl.stopAutoscroll();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec.$.structSpec);
          const result = this.impl.setFocus(params.state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec.$.structSpec);
          const result = this.impl.mouseCaptureLost();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec.$.structSpec);
          const result = this.impl.setEditCommandsForNextKeyEvent(params.commands);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.cursorVisibilityChanged(params.visible);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec.$.structSpec);
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
          const result = this.impl.imeFinishComposingText(params.keep_selection);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.requestTextInputStateUpdate();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec.$.structSpec);
          const result = this.impl.requestCompositionUpdates(params.immediate_request, params.monitor_request);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec.$.structSpec);
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
          const result = this.impl.dispatchNonBlockingEvent(params.event);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec.$.structSpec);
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
          const result = this.impl.attachSynchronousCompositor(params.control_host, params.host, params.compositor_request);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec.$.structSpec);
          const result = this.impl.getFrameWidgetInputHandler(params.interface_request);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec.$.structSpec);
          const result = this.impl.updateBrowserControlsState(params.constraints, params.current, params.animate, params.offset_tag_modifications);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.WidgetInputHandlerReceiver = blink.mojom.WidgetInputHandlerReceiver;

blink.mojom.WidgetInputHandlerPtr = blink.mojom.WidgetInputHandlerRemote;
blink.mojom.WidgetInputHandlerRequest = blink.mojom.WidgetInputHandlerPendingReceiver;

