// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/native_widget_ns_window.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: WindowClass
remote_cocoa.mojom.WindowClass = {
};

// Enum: WindowVisibilityState
remote_cocoa.mojom.WindowVisibilityState = {
};

// Enum: VisibilityTransition
remote_cocoa.mojom.VisibilityTransition = {
  kShow: 0,
  kHide: 1,
  kBoth: 2,
  kNone: 3,
};

// Enum: ToolbarVisibilityStyle
remote_cocoa.mojom.ToolbarVisibilityStyle = {
};

// Struct: CreateWindowParams
remote_cocoa.mojom.CreateWindowParams = class {
  constructor(values = {}) {
    this.style_mask = values.style_mask !== undefined ? values.style_mask : 0;
    this.titlebar_appears_transparent = values.titlebar_appears_transparent !== undefined ? values.titlebar_appears_transparent : false;
    this.animation_enabled = values.animation_enabled !== undefined ? values.animation_enabled : false;
  }
};

// Struct: NativeWidgetNSWindowInitParams
remote_cocoa.mojom.NativeWidgetNSWindowInitParams = class {
  constructor(values = {}) {
    this.modal_type = values.modal_type !== undefined ? values.modal_type : null;
    this.is_translucent = values.is_translucent !== undefined ? values.is_translucent : false;
    this.has_window_server_shadow = values.has_window_server_shadow !== undefined ? values.has_window_server_shadow : false;
    this.force_into_collection_cycle = values.force_into_collection_cycle !== undefined ? values.force_into_collection_cycle : false;
    this.things = values.things !== undefined ? values.things : null;
    this.state_restoration_data = values.state_restoration_data !== undefined ? values.state_restoration_data : 0;
    this.tooltip = values.tooltip !== undefined ? values.tooltip : null;
    this.is_tooltip = values.is_tooltip !== undefined ? values.is_tooltip : false;
  }
};

// Interface: NativeWidgetNSWindow
remote_cocoa.mojom.NativeWidgetNSWindowPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.NativeWidgetNSWindow';
  }

  createWindow(params) {
    // Method: CreateWindow
    // Call: CreateWindow(params)
  }

  setParent(parent_id) {
    // Method: SetParent
    // Call: SetParent(parent_id)
  }

  createSelectFileDialog(dialog) {
    // Method: CreateSelectFileDialog
    // Call: CreateSelectFileDialog(dialog)
  }

  showCertificateViewer(certificate) {
    // Method: ShowCertificateViewer
    // Call: ShowCertificateViewer(certificate)
  }

  stackAbove(sibling_id) {
    // Method: StackAbove
    // Call: StackAbove(sibling_id)
  }

  stackAtTop() {
    // Method: StackAtTop
    // Call: StackAtTop()
  }

  showEmojiPanel() {
    // Method: ShowEmojiPanel
    // Call: ShowEmojiPanel()
  }

  initWindow(params) {
    // Method: InitWindow
    // Call: InitWindow(params)
  }

  dimensions(updates) {
    // Method: dimensions
    // Call: dimensions(updates)
  }

  initCompositorView() {
    // Method: InitCompositorView
    return new Promise((resolve) => {
      // Call: InitCompositorView()
      resolve({});
    });
  }

  functions(view) {
    // Method: functions
    // Call: functions(view)
  }

  createContentView(ns_view_id, bounds, corner_radius) {
    // Method: CreateContentView
    // Call: CreateContentView(ns_view_id, bounds, corner_radius)
  }

  destroyContentView() {
    // Method: DestroyContentView
    // Call: DestroyContentView()
  }

  window(posted) {
    // Method: window
    // Call: window(posted)
  }

  closeWindow() {
    // Method: CloseWindow
    // Call: CloseWindow()
  }

  window(deleting) {
    // Method: window
    // Call: window(deleting)
  }

  closeWindowNow() {
    // Method: CloseWindowNow
    // Call: CloseWindowNow()
  }

  setInitialBounds(new_bounds, minimum_content_size) {
    // Method: SetInitialBounds
    // Call: SetInitialBounds(new_bounds, minimum_content_size)
  }

  setBounds(new_bounds, minimum_content_size, maximum_content_size) {
    // Method: SetBounds
    // Call: SetBounds(new_bounds, minimum_content_size, maximum_content_size)
  }

  setSize(new_size, minimum_content_size) {
    // Method: SetSize
    // Call: SetSize(new_size, minimum_content_size)
  }

  setSizeAndCenter(content_size, minimum_content_size) {
    // Method: SetSizeAndCenter
    // Call: SetSizeAndCenter(content_size, minimum_content_size)
  }

  setVisibilityState(new_state) {
    // Method: SetVisibilityState
    // Call: SetVisibilityState(new_state)
  }

  setAnimationEnabled(animation_enabled) {
    // Method: SetAnimationEnabled
    // Call: SetAnimationEnabled(animation_enabled)
  }

  setTransitionsToAnimate(transitions) {
    // Method: SetTransitionsToAnimate
    // Call: SetTransitionsToAnimate(transitions)
  }

  setVisibleOnAllSpaces(always_visible) {
    // Method: SetVisibleOnAllSpaces
    // Call: SetVisibleOnAllSpaces(always_visible)
  }

  enterFullscreen(target_display_id) {
    // Method: EnterFullscreen
    // Call: EnterFullscreen(target_display_id)
  }

  exitFullscreen() {
    // Method: ExitFullscreen
    // Call: ExitFullscreen()
  }

  setCanAppearInExistingFullscreenSpaces(can_appear_in_existing_fullscreen_spaces) {
    // Method: SetCanAppearInExistingFullscreenSpaces
    // Call: SetCanAppearInExistingFullscreenSpaces(can_appear_in_existing_fullscreen_spaces)
  }

  setMiniaturized(miniaturized) {
    // Method: SetMiniaturized
    // Call: SetMiniaturized(miniaturized)
  }

  setZoomed(zoomed) {
    // Method: SetZoomed
    // Call: SetZoomed(zoomed)
  }

  setSizeConstraints(min_size, max_size, is_resizable, is_maximizable) {
    // Method: SetSizeConstraints
    // Call: SetSizeConstraints(min_size, max_size, is_resizable, is_maximizable)
  }

  setOpacity(opacity) {
    // Method: SetOpacity
    // Call: SetOpacity(opacity)
  }

  setWindowLevel(level) {
    // Method: SetWindowLevel
    // Call: SetWindowLevel(level)
  }

  hidden(programmatically) {
    // Method: hidden
    // Call: hidden(programmatically)
  }

  setActivationIndependence(independence) {
    // Method: SetActivationIndependence
    // Call: SetActivationIndependence(independence)
  }

  to() {
    // Method: to
    // Call: to()
  }

  of() {
    // Method: of
    // Call: of()
  }

  since() {
    // Method: since
    // Call: since()
  }

  remaining() {
    // Method: remaining
    // Call: remaining()
  }

  setAspectRatio(aspect_ratio, excluded_margin) {
    // Method: SetAspectRatio
    // Call: SetAspectRatio(aspect_ratio, excluded_margin)
  }

  setCALayerParams(ca_layer_params) {
    // Method: SetCALayerParams
    // Call: SetCALayerParams(ca_layer_params)
  }

  setWindowTitle(title) {
    // Method: SetWindowTitle
    // Call: SetWindowTitle(title)
  }

  setIgnoresMouseEvents(ignores_mouse_events) {
    // Method: SetIgnoresMouseEvents
    // Call: SetIgnoresMouseEvents(ignores_mouse_events)
  }

  makeFirstResponder() {
    // Method: MakeFirstResponder
    // Call: MakeFirstResponder()
  }

  sortSubviews(attached_subview_ids) {
    // Method: SortSubviews
    // Call: SortSubviews(attached_subview_ids)
  }

  clearTouchBar() {
    // Method: ClearTouchBar
    // Call: ClearTouchBar()
  }

  updateTooltip() {
    // Method: UpdateTooltip
    // Call: UpdateTooltip()
  }

  acquireCapture() {
    // Method: AcquireCapture
    // Call: AcquireCapture()
  }

  releaseCapture() {
    // Method: ReleaseCapture
    // Call: ReleaseCapture()
  }

  redispatchKeyEvent(native_event_data) {
    // Method: RedispatchKeyEvent
    // Call: RedispatchKeyEvent(native_event_data)
  }

  setLocalEventMonitorEnabled(enabled) {
    // Method: SetLocalEventMonitorEnabled
    // Call: SetLocalEventMonitorEnabled(enabled)
  }

  setCursor(cursor) {
    // Method: SetCursor
    // Call: SetCursor(cursor)
  }

  enableImmersiveFullscreen(fullscreen_overlay_widget_id, tab_widget_id) {
    // Method: EnableImmersiveFullscreen
    // Call: EnableImmersiveFullscreen(fullscreen_overlay_widget_id, tab_widget_id)
  }

  disableImmersiveFullscreen() {
    // Method: DisableImmersiveFullscreen
    // Call: DisableImmersiveFullscreen()
  }

  toolbar(chrome) {
    // Method: toolbar
    // Call: toolbar(chrome)
  }

  updateToolbarVisibility(style) {
    // Method: UpdateToolbarVisibility
    // Call: UpdateToolbarVisibility(style)
  }

  onTopContainerViewBoundsChanged(bounds) {
    // Method: OnTopContainerViewBoundsChanged
    // Call: OnTopContainerViewBoundsChanged(bounds)
  }

  immersiveFullscreenRevealLock() {
    // Method: ImmersiveFullscreenRevealLock
    // Call: ImmersiveFullscreenRevealLock()
  }

  immersiveFullscreenRevealUnlock() {
    // Method: ImmersiveFullscreenRevealUnlock
    // Call: ImmersiveFullscreenRevealUnlock()
  }

  immersiveFullscreenRevealLock() {
    // Method: ImmersiveFullscreenRevealLock
    // Call: ImmersiveFullscreenRevealLock()
  }

  immersiveFullscreenRevealLock() {
    // Method: ImmersiveFullscreenRevealLock
    // Call: ImmersiveFullscreenRevealLock()
  }

  immersiveFullscreenRevealUnlock() {
    // Method: ImmersiveFullscreenRevealUnlock
    // Call: ImmersiveFullscreenRevealUnlock()
  }

  setCanGoBack(can_go_back) {
    // Method: SetCanGoBack
    // Call: SetCanGoBack(can_go_back)
  }

  setCanGoForward(can_go_forward) {
    // Method: SetCanGoForward
    // Call: SetCanGoForward(can_go_forward)
  }

  displayContextMenu(menu, host, receiver) {
    // Method: DisplayContextMenu
    // Call: DisplayContextMenu(menu, host, receiver)
  }

  setAllowScreenshots(allow) {
    // Method: SetAllowScreenshots
    // Call: SetAllowScreenshots(allow)
  }

  setColorMode(color_mode) {
    // Method: SetColorMode
    // Call: SetColorMode(color_mode)
  }

};

remote_cocoa.mojom.NativeWidgetNSWindowRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
