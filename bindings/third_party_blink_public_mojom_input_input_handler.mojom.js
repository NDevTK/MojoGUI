// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_handler.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SelectionGranularity
blink.mojom.SelectionGranularity = {
};

// Enum: PanAction
blink.mojom.PanAction = {
};

// Enum: ImeState
blink.mojom.ImeState = {
};

// Enum: FocusState
blink.mojom.FocusState = {
};

// Struct: KeyData
blink.mojom.KeyData = class {
  constructor(values = {}) {
    this.unmodified_text = values.unmodified_text !== undefined ? values.unmodified_text : 0;
  }
};

// Struct: PointerData
blink.mojom.PointerData = class {
  constructor(values = {}) {
    this.device_id = values.device_id !== undefined ? values.device_id : 0;
  }
};

// Struct: WheelData
blink.mojom.WheelData = class {
  constructor(values = {}) {
    this.delta_units = values.delta_units !== undefined ? values.delta_units : 0;
  }
};

// Struct: MouseData
blink.mojom.MouseData = class {
  constructor(values = {}) {
    this.wheel_data = values.wheel_data !== undefined ? values.wheel_data : 0;
  }
};

// Struct: ScrollData
blink.mojom.ScrollData = class {
  constructor(values = {}) {
    this.pointer_count = values.pointer_count !== undefined ? values.pointer_count : 0;
    this.cursor_control = values.cursor_control !== undefined ? values.cursor_control : false;
  }
};

// Struct: PinchBeginData
blink.mojom.PinchBeginData = class {
  constructor(values = {}) {
    this.needs_wheel_event = values.needs_wheel_event !== undefined ? values.needs_wheel_event : false;
  }
};

// Struct: PinchUpdateData
blink.mojom.PinchUpdateData = class {
  constructor(values = {}) {
    this.needs_wheel_event = values.needs_wheel_event !== undefined ? values.needs_wheel_event : 0;
  }
};

// Struct: PinchEndData
blink.mojom.PinchEndData = class {
  constructor(values = {}) {
    this.needs_wheel_event = values.needs_wheel_event !== undefined ? values.needs_wheel_event : false;
  }
};

// Struct: FlingData
blink.mojom.FlingData = class {
  constructor(values = {}) {
    this.prevent_boosting = values.prevent_boosting !== undefined ? values.prevent_boosting : 0;
  }
};

// Struct: TapData
blink.mojom.TapData = class {
  constructor(values = {}) {
    this.needs_wheel_event = values.needs_wheel_event !== undefined ? values.needs_wheel_event : 0;
  }
};

// Struct: TapDownData
blink.mojom.TapDownData = class {
  constructor(values = {}) {
    this.tap_down_count = values.tap_down_count !== undefined ? values.tap_down_count : 0;
  }
};

// Struct: GestureData
blink.mojom.GestureData = class {
  constructor(values = {}) {
    this.fling_data = values.fling_data !== undefined ? values.fling_data : 0;
  }
};

// Struct: TouchPoint
blink.mojom.TouchPoint = class {
  constructor(values = {}) {
    this.pointer_data = values.pointer_data !== undefined ? values.pointer_data : 0;
  }
};

// Struct: TouchData
blink.mojom.TouchData = class {
  constructor(values = {}) {
    this.touches = values.touches !== undefined ? values.touches : 0;
  }
};

// Struct: Event
blink.mojom.Event = class {
  constructor(values = {}) {
    this.touch_data = values.touch_data !== undefined ? values.touch_data : 0;
  }
};

// Struct: DidOverscrollParams
blink.mojom.DidOverscrollParams = class {
  constructor(values = {}) {
    this.source_device = values.source_device !== undefined ? values.source_device : 0;
  }
};

// Struct: TouchActionOptional
blink.mojom.TouchActionOptional = class {
  constructor(values = {}) {
    this.touch_action = values.touch_action !== undefined ? values.touch_action : null;
  }
};

// Struct: EditCommand
blink.mojom.EditCommand = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Struct: SelectAroundCaretResult
blink.mojom.SelectAroundCaretResult = class {
  constructor(values = {}) {
    this.word_end_adjust = values.word_end_adjust !== undefined ? values.word_end_adjust : 0;
  }
};

// Interface: WidgetInputHandlerHost
blink.mojom.WidgetInputHandlerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WidgetInputHandlerHost';
  }

  setTouchActionFromMain(touch_action) {
    // Method: SetTouchActionFromMain
    // Call: SetTouchActionFromMain(touch_action)
  }

  setPanAction(pan_action) {
    // Method: SetPanAction
    // Call: SetPanAction(pan_action)
  }

  didOverscroll(params) {
    // Method: DidOverscroll
    // Call: DidOverscroll(params)
  }

  didStartScrollingViewport() {
    // Method: DidStartScrollingViewport
    // Call: DidStartScrollingViewport()
  }

  imeCancelComposition() {
    // Method: ImeCancelComposition
    // Call: ImeCancelComposition()
  }

  imeCompositionRangeChanged(range, character_bounds) {
    // Method: ImeCompositionRangeChanged
    // Call: ImeCompositionRangeChanged(range, character_bounds)
  }

  setMouseCapture(capture) {
    // Method: SetMouseCapture
    // Call: SetMouseCapture(capture)
  }

  setAutoscrollSelectionActiveInMainFrame(autoscroll_selection) {
    // Method: SetAutoscrollSelectionActiveInMainFrame
    // Call: SetAutoscrollSelectionActiveInMainFrame(autoscroll_selection)
  }

  requestMouseLock(from_user_gesture, unadjusted_movement) {
    // Method: RequestMouseLock
    return new Promise((resolve) => {
      // Call: RequestMouseLock(from_user_gesture, unadjusted_movement)
      resolve({});
    });
  }

};

blink.mojom.WidgetInputHandlerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrameWidgetInputHandler
blink.mojom.FrameWidgetInputHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FrameWidgetInputHandler';
  }

  addImeTextSpansToExistingText(start, end, ime_text_spans) {
    // Method: AddImeTextSpansToExistingText
    // Call: AddImeTextSpansToExistingText(start, end, ime_text_spans)
  }

  clearImeTextSpansByType(start, end, type) {
    // Method: ClearImeTextSpansByType
    // Call: ClearImeTextSpansByType(start, end, type)
  }

  setCompositionFromExistingText(start, end, ime_text_spans) {
    // Method: SetCompositionFromExistingText
    // Call: SetCompositionFromExistingText(start, end, ime_text_spans)
  }

  extendSelectionAndDelete(before, after) {
    // Method: ExtendSelectionAndDelete
    // Call: ExtendSelectionAndDelete(before, after)
  }

  extendSelectionAndReplace(before, after, replacement_text) {
    // Method: ExtendSelectionAndReplace
    // Call: ExtendSelectionAndReplace(before, after, replacement_text)
  }

  deleteSurroundingText(before, after) {
    // Method: DeleteSurroundingText
    // Call: DeleteSurroundingText(before, after)
  }

  deleteSurroundingTextInCodePoints(before, after) {
    // Method: DeleteSurroundingTextInCodePoints
    // Call: DeleteSurroundingTextInCodePoints(before, after)
  }

  setEditableSelectionOffsets(start, end) {
    // Method: SetEditableSelectionOffsets
    // Call: SetEditableSelectionOffsets(start, end)
  }

  handleStylusWritingGestureAction(gesture_data) {
    // Method: HandleStylusWritingGestureAction
    return new Promise((resolve) => {
      // Call: HandleStylusWritingGestureAction(gesture_data)
      resolve({});
    });
  }

  executeEditCommand(command, value) {
    // Method: ExecuteEditCommand
    // Call: ExecuteEditCommand(command, value)
  }

  undo() {
    // Method: Undo
    // Call: Undo()
  }

  redo() {
    // Method: Redo
    // Call: Redo()
  }

  cut() {
    // Method: Cut
    // Call: Cut()
  }

  copy() {
    // Method: Copy
    // Call: Copy()
  }

  copyToFindPboard() {
    // Method: CopyToFindPboard
    // Call: CopyToFindPboard()
  }

  centerSelection() {
    // Method: CenterSelection
    // Call: CenterSelection()
  }

  paste() {
    // Method: Paste
    // Call: Paste()
  }

  pasteAndMatchStyle() {
    // Method: PasteAndMatchStyle
    // Call: PasteAndMatchStyle()
  }

  delete() {
    // Method: Delete
    // Call: Delete()
  }

  selectAll() {
    // Method: SelectAll
    // Call: SelectAll()
  }

  collapseSelection() {
    // Method: CollapseSelection
    // Call: CollapseSelection()
  }

  replace(word) {
    // Method: Replace
    // Call: Replace(word)
  }

  replaceMisspelling(word) {
    // Method: ReplaceMisspelling
    // Call: ReplaceMisspelling(word)
  }

  selectRange(base, extent) {
    // Method: SelectRange
    // Call: SelectRange(base, extent)
  }

  adjustSelectionByCharacterOffset(start, end, behavior) {
    // Method: AdjustSelectionByCharacterOffset
    // Call: AdjustSelectionByCharacterOffset(start, end, behavior)
  }

  selectAroundCaret(granularity, should_show_handle, should_show_context_menu) {
    // Method: SelectAroundCaret
    return new Promise((resolve) => {
      // Call: SelectAroundCaret(granularity, should_show_handle, should_show_context_menu)
      resolve({});
    });
  }

  moveRangeSelectionExtent(extent) {
    // Method: MoveRangeSelectionExtent
    // Call: MoveRangeSelectionExtent(extent)
  }

  scrollFocusedEditableNodeIntoView() {
    // Method: ScrollFocusedEditableNodeIntoView
    // Call: ScrollFocusedEditableNodeIntoView()
  }

  waitForPageScaleAnimationForTesting() {
    // Method: WaitForPageScaleAnimationForTesting
    // Call: WaitForPageScaleAnimationForTesting()
  }

  moveCaret(point) {
    // Method: MoveCaret
    // Call: MoveCaret(point)
  }

  startAutoscrollForSelectionToPoint(point) {
    // Method: StartAutoscrollForSelectionToPoint
    // Call: StartAutoscrollForSelectionToPoint(point)
  }

  stopAutoscroll() {
    // Method: StopAutoscroll
    // Call: StopAutoscroll()
  }

  rectForEditFieldChars(range) {
    // Method: RectForEditFieldChars
    return new Promise((resolve) => {
      // Call: RectForEditFieldChars(range)
      resolve({});
    });
  }

};

blink.mojom.FrameWidgetInputHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WidgetInputHandler
blink.mojom.WidgetInputHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WidgetInputHandler';
  }

  setFocus(state) {
    // Method: SetFocus
    // Call: SetFocus(state)
  }

  mouseCaptureLost() {
    // Method: MouseCaptureLost
    // Call: MouseCaptureLost()
  }

  setEditCommandsForNextKeyEvent(commands) {
    // Method: SetEditCommandsForNextKeyEvent
    // Call: SetEditCommandsForNextKeyEvent(commands)
  }

  cursorVisibilityChanged(visible) {
    // Method: CursorVisibilityChanged
    // Call: CursorVisibilityChanged(visible)
  }

  imeSetComposition(text, ime_text_spans, range, start, end, ime_state) {
    // Method: ImeSetComposition
    // Call: ImeSetComposition(text, ime_text_spans, range, start, end, ime_state)
  }

  imeCommitText(text, ime_text_spans, range, relative_cursor_position) {
    // Method: ImeCommitText
    // Call: ImeCommitText(text, ime_text_spans, range, relative_cursor_position)
  }

  imeFinishComposingText(keep_selection) {
    // Method: ImeFinishComposingText
    // Call: ImeFinishComposingText(keep_selection)
  }

  requestTextInputStateUpdate() {
    // Method: RequestTextInputStateUpdate
    // Call: RequestTextInputStateUpdate()
  }

  requestCompositionUpdates(immediate_request, monitor_request) {
    // Method: RequestCompositionUpdates
    // Call: RequestCompositionUpdates(immediate_request, monitor_request)
  }

  dispatchEvent(event, original_event_for_gesture) {
    // Method: DispatchEvent
    return new Promise((resolve) => {
      // Call: DispatchEvent(event, original_event_for_gesture)
      resolve({});
    });
  }

  dispatchNonBlockingEvent(event) {
    // Method: DispatchNonBlockingEvent
    // Call: DispatchNonBlockingEvent(event)
  }

  waitForInputProcessed() {
    // Method: WaitForInputProcessed
    // Call: WaitForInputProcessed()
  }

  pingMainThread() {
    // Method: PingMainThread
    // Call: PingMainThread()
  }

  attachSynchronousCompositor(control_host, host, compositor_request) {
    // Method: AttachSynchronousCompositor
    // Call: AttachSynchronousCompositor(control_host, host, compositor_request)
  }

  getFrameWidgetInputHandler(interface_request) {
    // Method: GetFrameWidgetInputHandler
    // Call: GetFrameWidgetInputHandler(interface_request)
  }

  updateBrowserControlsState(constraints, current, animate, offset_tag_modifications) {
    // Method: UpdateBrowserControlsState
    // Call: UpdateBrowserControlsState(constraints, current, animate, offset_tag_modifications)
  }

};

blink.mojom.WidgetInputHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
