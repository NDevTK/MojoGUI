// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/native_widget_ns_window_host.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: HitTestResult
remote_cocoa.mojom.HitTestResult = {
};

// Struct: ValidateUserInterfaceItemResult
remote_cocoa.mojom.ValidateUserInterfaceItemResult = class {
  constructor(values = {}) {
    this.enable = values.enable !== undefined ? values.enable : false;
    this.new_title = values.new_title !== undefined ? values.new_title : false;
    this.new_hidden_state = values.new_hidden_state !== undefined ? values.new_hidden_state : false;
    this.new_toggle_state = values.new_toggle_state !== undefined ? values.new_toggle_state : false;
  }
};

// Interface: NativeWidgetNSWindowHost
remote_cocoa.mojom.NativeWidgetNSWindowHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remote_cocoa.mojom.NativeWidgetNSWindowHost';
  }

  onVisibilityChanged(visible) {
    // Method: OnVisibilityChanged
    // Call: OnVisibilityChanged(visible)
  }

  onSpaceActivationChanged(is_space_active) {
    // Method: OnSpaceActivationChanged
    // Call: OnSpaceActivationChanged(is_space_active)
  }

  onWindowNativeThemeChanged() {
    // Method: OnWindowNativeThemeChanged
    // Call: OnWindowNativeThemeChanged()
  }

  onViewSizeChanged(new_size) {
    // Method: OnViewSizeChanged
    // Call: OnViewSizeChanged(new_size)
  }

  getSheetOffsetY() {
    // Method: GetSheetOffsetY
    return new Promise((resolve) => {
      // Call: GetSheetOffsetY()
      resolve({});
    });
  }

  setKeyboardAccessible(enabled) {
    // Method: SetKeyboardAccessible
    // Call: SetKeyboardAccessible(enabled)
  }

  onIsFirstResponderChanged(is_first_responder) {
    // Method: OnIsFirstResponderChanged
    // Call: OnIsFirstResponderChanged(is_first_responder)
  }

  onMouseCaptureActiveChanged(capture_is_active) {
    // Method: OnMouseCaptureActiveChanged
    // Call: OnMouseCaptureActiveChanged(capture_is_active)
  }

  onScrollEvent(event) {
    // Method: OnScrollEvent
    // Call: OnScrollEvent(event)
  }

  onMouseEvent(event) {
    // Method: OnMouseEvent
    // Call: OnMouseEvent(event)
  }

  onGestureEvent(event) {
    // Method: OnGestureEvent
    // Call: OnGestureEvent(event)
  }

  dispatchKeyEventRemote(event) {
    // Method: DispatchKeyEventRemote
    return new Promise((resolve) => {
      // Call: DispatchKeyEventRemote(event)
      resolve({});
    });
  }

  dispatchKeyEventToMenuControllerRemote(event) {
    // Method: DispatchKeyEventToMenuControllerRemote
    return new Promise((resolve) => {
      // Call: DispatchKeyEventToMenuControllerRemote(event)
      resolve({});
    });
  }

  dispatchMonitorEvent(event, target_is_this_window) {
    // Method: DispatchMonitorEvent
    return new Promise((resolve) => {
      // Call: DispatchMonitorEvent(event, target_is_this_window)
      resolve({});
    });
  }

  getHasMenuController() {
    // Method: GetHasMenuController
    return new Promise((resolve) => {
      // Call: GetHasMenuController()
      resolve({});
    });
  }

  getHitTestResult(location_in_content) {
    // Method: GetHitTestResult
    return new Promise((resolve) => {
      // Call: GetHitTestResult(location_in_content)
      resolve({});
    });
  }

  getTooltipTextAt(location_in_content) {
    // Method: GetTooltipTextAt
    return new Promise((resolve) => {
      // Call: GetTooltipTextAt(location_in_content)
      resolve({});
    });
  }

  getWidgetIsModal() {
    // Method: GetWidgetIsModal
    return new Promise((resolve) => {
      // Call: GetWidgetIsModal()
      resolve({});
    });
  }

  getIsFocusedViewTextual() {
    // Method: GetIsFocusedViewTextual
    return new Promise((resolve) => {
      // Call: GetIsFocusedViewTextual()
      resolve({});
    });
  }

  onWindowGeometryChanged(window_bounds_in_screen_dips, content_bounds_in_screen_dips) {
    // Method: OnWindowGeometryChanged
    // Call: OnWindowGeometryChanged(window_bounds_in_screen_dips, content_bounds_in_screen_dips)
  }

  onWindowWillStartLiveResize() {
    // Method: OnWindowWillStartLiveResize
    // Call: OnWindowWillStartLiveResize()
  }

  onWindowDidEndLiveResize() {
    // Method: OnWindowDidEndLiveResize
    // Call: OnWindowDidEndLiveResize()
  }

  onWindowFullscreenTransitionStart(target_fullscreen_state) {
    // Method: OnWindowFullscreenTransitionStart
    // Call: OnWindowFullscreenTransitionStart(target_fullscreen_state)
  }

  onWindowFullscreenTransitionComplete(is_fullscreen) {
    // Method: OnWindowFullscreenTransitionComplete
    // Call: OnWindowFullscreenTransitionComplete(is_fullscreen)
  }

  onWindowMiniaturizedChanged(miniaturized) {
    // Method: OnWindowMiniaturizedChanged
    // Call: OnWindowMiniaturizedChanged(miniaturized)
  }

  onWindowZoomedChanged(zoomed) {
    // Method: OnWindowZoomedChanged
    // Call: OnWindowZoomedChanged(zoomed)
  }

  onWindowDisplayChanged(display) {
    // Method: OnWindowDisplayChanged
    // Call: OnWindowDisplayChanged(display)
  }

  onWindowWillClose() {
    // Method: OnWindowWillClose
    // Call: OnWindowWillClose()
  }

  onWindowHasClosed() {
    // Method: OnWindowHasClosed
    // Call: OnWindowHasClosed()
  }

  onWindowKeyStatusChanged(is_key, is_content_first_responder, full_keyboard_access_enabled) {
    // Method: OnWindowKeyStatusChanged
    // Call: OnWindowKeyStatusChanged(is_key, is_content_first_responder, full_keyboard_access_enabled)
  }

  onWindowStateRestorationDataChanged(data) {
    // Method: OnWindowStateRestorationDataChanged
    // Call: OnWindowStateRestorationDataChanged(data)
  }

  onSheetModalShown() {
    // Method: OnSheetModalShown
    // Call: OnSheetModalShown()
  }

  onSheetModalClosed() {
    // Method: OnSheetModalClosed
    // Call: OnSheetModalClosed()
  }

  onImmersiveFullscreenToolbarRevealChanged(is_revealed) {
    // Method: OnImmersiveFullscreenToolbarRevealChanged
    // Call: OnImmersiveFullscreenToolbarRevealChanged(is_revealed)
  }

  onImmersiveFullscreenMenuBarRevealChanged(reveal_amount) {
    // Method: OnImmersiveFullscreenMenuBarRevealChanged
    // Call: OnImmersiveFullscreenMenuBarRevealChanged(reveal_amount)
  }

  onAutohidingMenuBarHeightChanged(menu_bar_height) {
    // Method: OnAutohidingMenuBarHeightChanged
    // Call: OnAutohidingMenuBarHeightChanged(menu_bar_height)
  }

  doDialogButtonAction(button) {
    // Method: DoDialogButtonAction
    // Call: DoDialogButtonAction(button)
  }

  getDialogButtonInfo(button) {
    // Method: GetDialogButtonInfo
    return new Promise((resolve) => {
      // Call: GetDialogButtonInfo(button)
      resolve({});
    });
  }

  getDoDialogButtonsExist() {
    // Method: GetDoDialogButtonsExist
    return new Promise((resolve) => {
      // Call: GetDoDialogButtonsExist()
      resolve({});
    });
  }

  getShouldShowWindowTitle() {
    // Method: GetShouldShowWindowTitle
    return new Promise((resolve) => {
      // Call: GetShouldShowWindowTitle()
      resolve({});
    });
  }

  getCanWindowBecomeKey() {
    // Method: GetCanWindowBecomeKey
    return new Promise((resolve) => {
      // Call: GetCanWindowBecomeKey()
      resolve({});
    });
  }

  getAlwaysRenderWindowAsKey() {
    // Method: GetAlwaysRenderWindowAsKey
    return new Promise((resolve) => {
      // Call: GetAlwaysRenderWindowAsKey()
      resolve({});
    });
  }

  onWindowCloseRequested() {
    // Method: OnWindowCloseRequested
    return new Promise((resolve) => {
      // Call: OnWindowCloseRequested()
      resolve({});
    });
  }

  getWindowFrameTitlebarHeight() {
    // Method: GetWindowFrameTitlebarHeight
    return new Promise((resolve) => {
      // Call: GetWindowFrameTitlebarHeight()
      resolve({});
    });
  }

  onFocusWindowToolbar() {
    // Method: OnFocusWindowToolbar
    // Call: OnFocusWindowToolbar()
  }

  setRemoteAccessibilityTokens(window_token, view_token) {
    // Method: SetRemoteAccessibilityTokens
    // Call: SetRemoteAccessibilityTokens(window_token, view_token)
  }

  getRootViewAccessibilityToken() {
    // Method: GetRootViewAccessibilityToken
    return new Promise((resolve) => {
      // Call: GetRootViewAccessibilityToken()
      resolve({});
    });
  }

  validateUserInterfaceItem(command) {
    // Method: ValidateUserInterfaceItem
    return new Promise((resolve) => {
      // Call: ValidateUserInterfaceItem(command)
      resolve({});
    });
  }

  willExecuteCommand(command, window_open_disposition, is_before_first_responder) {
    // Method: WillExecuteCommand
    return new Promise((resolve) => {
      // Call: WillExecuteCommand(command, window_open_disposition, is_before_first_responder)
      resolve({});
    });
  }

  executeCommand(command, window_open_disposition, is_before_first_responder) {
    // Method: ExecuteCommand
    return new Promise((resolve) => {
      // Call: ExecuteCommand(command, window_open_disposition, is_before_first_responder)
      resolve({});
    });
  }

  handleAccelerator(accelerator, require_priority_handler) {
    // Method: HandleAccelerator
    return new Promise((resolve) => {
      // Call: HandleAccelerator(accelerator, require_priority_handler)
      resolve({});
    });
  }

};

remote_cocoa.mojom.NativeWidgetNSWindowHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
