// Auto-generated MojoJS binding
// Source: chromium_src/content/common/render_widget_host_ns_view.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Struct: PopupMenu
remote_cocoa.mojom.PopupMenu = class {
  constructor(values = {}) {
    this.receiver = values.receiver !== undefined ? values.receiver : 0;
  }
};

// Interface: PopupMenuRunner
remote_cocoa.mojom.PopupMenuRunnerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.PopupMenuRunner';
  }

  hide() {
    // Method: Hide
    // Call: Hide()
  }

};

remote_cocoa.mojom.PopupMenuRunnerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RenderWidgetHostNSView
remote_cocoa.mojom.RenderWidgetHostNSViewPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.RenderWidgetHostNSView';
  }

  popup(picker) {
    // Method: popup
    // Call: popup(picker)
  }

  initAsPopup(content_rect, popup_parent_ns_view_id) {
    // Method: InitAsPopup
    // Call: InitAsPopup(content_rect, popup_parent_ns_view_id)
  }

  setParentWebContentsNSView(parent_ns_view_id) {
    // Method: SetParentWebContentsNSView
    // Call: SetParentWebContentsNSView(parent_ns_view_id)
  }

  content(color) {
    // Method: content
    // Call: content(color)
  }

  disableDisplay() {
    // Method: DisableDisplay
    // Call: DisableDisplay()
  }

  makeFirstResponder() {
    // Method: MakeFirstResponder
    // Call: MakeFirstResponder()
  }

  nSWindow(the) {
    // Method: NSWindow
    // Call: NSWindow(the)
  }

  setBounds(rect) {
    // Method: SetBounds
    // Call: SetBounds(rect)
  }

  setCALayerParams(ca_layer_params) {
    // Method: SetCALayerParams
    // Call: SetCALayerParams(ca_layer_params)
  }

  setBackgroundColor(color) {
    // Method: SetBackgroundColor
    // Call: SetBackgroundColor(color)
  }

  setVisible(visible) {
    // Method: SetVisible
    // Call: SetVisible(visible)
  }

  setTooltipText(display_text) {
    // Method: SetTooltipText
    // Call: SetTooltipText(display_text)
  }

  setTextInputState(text_input_type, flags) {
    // Method: SetTextInputState
    // Call: SetTextInputState(text_input_type, flags)
  }

  setTextSelection(text, offset, range) {
    // Method: SetTextSelection
    // Call: SetTextSelection(text, offset, range)
  }

  setCompositionRangeInfo(range) {
    // Method: SetCompositionRangeInfo
    // Call: SetCompositionRangeInfo(range)
  }

  cancelComposition() {
    // Method: CancelComposition
    // Call: CancelComposition()
  }

  setShowingContextMenu(showing) {
    // Method: SetShowingContextMenu
    // Call: SetShowingContextMenu(showing)
  }

  displayCursor(cursor) {
    // Method: DisplayCursor
    // Call: DisplayCursor(cursor)
  }

  setCursorLocked(locked) {
    // Method: SetCursorLocked
    // Call: SetCursorLocked(locked)
  }

  unaccelerated() {
    // Method: unaccelerated
    // Call: unaccelerated()
  }

  setCursorLockedUnacceleratedMovement(unaccelerated_movement) {
    // Method: SetCursorLockedUnacceleratedMovement
    // Call: SetCursorLockedUnacceleratedMovement(unaccelerated_movement)
  }

  showDictionaryOverlayForSelection() {
    // Method: ShowDictionaryOverlayForSelection
    // Call: ShowDictionaryOverlayForSelection()
  }

  showDictionaryOverlay(attributed_string, baseline_point) {
    // Method: ShowDictionaryOverlay
    // Call: ShowDictionaryOverlay(attributed_string, baseline_point)
  }

  lockKeyboard(dom_codes) {
    // Method: LockKeyboard
    // Call: LockKeyboard(dom_codes)
  }

  unlockKeyboard() {
    // Method: UnlockKeyboard
    // Call: UnlockKeyboard()
  }

  showSharingServicePicker(title, text, url, file_paths) {
    // Method: ShowSharingServicePicker
    return new Promise((resolve) => {
      // Call: ShowSharingServicePicker(title, text, url, file_paths)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  destroy() {
    // Method: Destroy
    // Call: Destroy()
  }

  gestureScrollEventAck(event, consumed) {
    // Method: GestureScrollEventAck
    // Call: GestureScrollEventAck(event, consumed)
  }

  didOverscroll(params) {
    // Method: DidOverscroll
    // Call: DidOverscroll(params)
  }

  displayPopupMenu(menu) {
    // Method: DisplayPopupMenu
    return new Promise((resolve) => {
      // Call: DisplayPopupMenu(menu)
      resolve({});
    });
  }

};

remote_cocoa.mojom.RenderWidgetHostNSViewRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RenderWidgetHostNSViewHost
remote_cocoa.mojom.RenderWidgetHostNSViewHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.RenderWidgetHostNSViewHost';
  }

  syncIsWidgetForMainFrame() {
    // Method: SyncIsWidgetForMainFrame
    return new Promise((resolve) => {
      // Call: SyncIsWidgetForMainFrame()
      resolve({});
    });
  }

  down(date/time) {
    // Method: down
    // Call: down(date/time)
  }

  requestShutdown() {
    // Method: RequestShutdown
    // Call: RequestShutdown()
  }

  onFirstResponderChanged(is_first_responder) {
    // Method: OnFirstResponderChanged
    // Call: OnFirstResponderChanged(is_first_responder)
  }

  onWindowIsKeyChanged(is_key) {
    // Method: OnWindowIsKeyChanged
    // Call: OnWindowIsKeyChanged(is_key)
  }

  system() {
    // Method: system
    // Call: system()
  }

  nSWindow(not, |view_bounds_in_window_dip|'s, relevant) {
    // Method: NSWindow
    // Call: NSWindow(not, |view_bounds_in_window_dip|'s, relevant)
  }

  onBoundsInWindowChanged(view_bounds_in_window_dip, attached_to_window) {
    // Method: OnBoundsInWindowChanged
    // Call: OnBoundsInWindowChanged(view_bounds_in_window_dip, attached_to_window)
  }

  system(of) {
    // Method: system
    // Call: system(of)
  }

  onWindowFrameInScreenChanged(window_frame_in_screen_dip) {
    // Method: OnWindowFrameInScreenChanged
    // Call: OnWindowFrameInScreenChanged(window_frame_in_screen_dip)
  }

  onScreenInfosChanged(screen_infos) {
    // Method: OnScreenInfosChanged
    // Call: OnScreenInfosChanged(screen_infos)
  }

  beginKeyboardEvent() {
    // Method: BeginKeyboardEvent
    // Call: BeginKeyboardEvent()
  }

  endKeyboardEvent() {
    // Method: EndKeyboardEvent
    // Call: EndKeyboardEvent()
  }

  forwardKeyboardEventWithCommands(event, native_event_data, skip_if_unhandled, commands) {
    // Method: ForwardKeyboardEventWithCommands
    // Call: ForwardKeyboardEventWithCommands(event, native_event_data, skip_if_unhandled, commands)
  }

  routeOrProcessMouseEvent(event) {
    // Method: RouteOrProcessMouseEvent
    // Call: RouteOrProcessMouseEvent(event)
  }

  routeOrProcessTouchEvent(event) {
    // Method: RouteOrProcessTouchEvent
    // Call: RouteOrProcessTouchEvent(event)
  }

  routeOrProcessWheelEvent(event) {
    // Method: RouteOrProcessWheelEvent
    // Call: RouteOrProcessWheelEvent(event)
  }

  forwardMouseEvent(event) {
    // Method: ForwardMouseEvent
    // Call: ForwardMouseEvent(event)
  }

  forwardWheelEvent(event) {
    // Method: ForwardWheelEvent
    // Call: ForwardWheelEvent(event)
  }

  pinchEvent(event, is_synthetically_injected) {
    // Method: PinchEvent
    // Call: PinchEvent(event, is_synthetically_injected)
  }

  smartMagnifyEvent(event) {
    // Method: SmartMagnifyEvent
    // Call: SmartMagnifyEvent(event)
  }

  imeSetComposition(text, ime_text_spans, replacement_range, selection_start, selection_end) {
    // Method: ImeSetComposition
    // Call: ImeSetComposition(text, ime_text_spans, replacement_range, selection_start, selection_end)
  }

  imeCommitText(text, replacement_range) {
    // Method: ImeCommitText
    // Call: ImeCommitText(text, replacement_range)
  }

  imeFinishComposingText() {
    // Method: ImeFinishComposingText
    // Call: ImeFinishComposingText()
  }

  imeCancelCompositionFromCocoa() {
    // Method: ImeCancelCompositionFromCocoa
    // Call: ImeCancelCompositionFromCocoa()
  }

  lookUpDictionaryOverlayAtPoint(root_point) {
    // Method: LookUpDictionaryOverlayAtPoint
    // Call: LookUpDictionaryOverlayAtPoint(root_point)
  }

  lookUpDictionaryOverlayFromRange(range) {
    // Method: LookUpDictionaryOverlayFromRange
    // Call: LookUpDictionaryOverlayFromRange(range)
  }

  syncGetCharacterIndexAtPoint(root_point) {
    // Method: SyncGetCharacterIndexAtPoint
    return new Promise((resolve) => {
      // Call: SyncGetCharacterIndexAtPoint(root_point)
      resolve({});
    });
  }

  syncGetFirstRectForRange(requested_range) {
    // Method: SyncGetFirstRectForRange
    return new Promise((resolve) => {
      // Call: SyncGetFirstRectForRange(requested_range)
      resolve({});
    });
  }

  executeEditCommand(command) {
    // Method: ExecuteEditCommand
    // Call: ExecuteEditCommand(command)
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

  selectAll() {
    // Method: SelectAll
    // Call: SelectAll()
  }

  startSpeaking() {
    // Method: StartSpeaking
    // Call: StartSpeaking()
  }

  stopSpeaking() {
    // Method: StopSpeaking
    // Call: StopSpeaking()
  }

  syncIsSpeaking() {
    // Method: SyncIsSpeaking
    return new Promise((resolve) => {
      // Call: SyncIsSpeaking()
      resolve({});
    });
  }

  getRenderWidgetAccessibilityToken() {
    // Method: GetRenderWidgetAccessibilityToken
    return new Promise((resolve) => {
      // Call: GetRenderWidgetAccessibilityToken()
      resolve({});
    });
  }

  setRemoteAccessibilityWindowToken(window_token) {
    // Method: SetRemoteAccessibilityWindowToken
    // Call: SetRemoteAccessibilityWindowToken(window_token)
  }

};

remote_cocoa.mojom.RenderWidgetHostNSViewHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
