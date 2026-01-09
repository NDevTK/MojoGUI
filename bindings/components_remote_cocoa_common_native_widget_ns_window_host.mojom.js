// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/native_widget_ns_window_host.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: HitTestResult
remote_cocoa.mojom.HitTestResult = {
  kDraggableBackground: 0,
  kRootView: 1,
  kSubView: 2,
  kOther: 3,
};

// Struct: ValidateUserInterfaceItemResult
remote_cocoa.mojom.ValidateUserInterfaceItemResultSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.ValidateUserInterfaceItemResult',
      packedSize: 24,
      fields: [
        { name: 'new_title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'enable', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'disable_if_has_no_key_equivalent', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'set_hidden_state', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'new_hidden_state', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'set_toggle_state', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'new_toggle_state', packedOffset: 8, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: NativeWidgetNSWindowHost
remote_cocoa.mojom.NativeWidgetNSWindowHost = {};

remote_cocoa.mojom.NativeWidgetNSWindowHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHostRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.NativeWidgetNSWindowHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.NativeWidgetNSWindowHostPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.NativeWidgetNSWindowHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVisibilityChanged(visible) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec,
      null,
      [visible]);
  }

  onSpaceActivationChanged(is_space_active) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec,
      null,
      [is_space_active]);
  }

  onWindowNativeThemeChanged() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec,
      null,
      []);
  }

  onViewSizeChanged(new_size) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec,
      null,
      [new_size]);
  }

  getSheetOffsetY() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParamsSpec,
      []);
  }

  setKeyboardAccessible(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec,
      null,
      [enabled]);
  }

  onIsFirstResponderChanged(is_first_responder) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec,
      null,
      [is_first_responder]);
  }

  onMouseCaptureActiveChanged(capture_is_active) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec,
      null,
      [capture_is_active]);
  }

  onScrollEvent(event) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec,
      null,
      [event]);
  }

  onMouseEvent(event) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec,
      null,
      [event]);
  }

  onGestureEvent(event) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec,
      null,
      [event]);
  }

  dispatchKeyEventRemote(event) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParamsSpec,
      [event]);
  }

  dispatchKeyEventToMenuControllerRemote(event) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParamsSpec,
      [event]);
  }

  dispatchMonitorEvent(event, target_is_this_window) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParamsSpec,
      [event, target_is_this_window]);
  }

  getHasMenuController() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParamsSpec,
      []);
  }

  getHitTestResult(location_in_content) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParamsSpec,
      [location_in_content]);
  }

  getTooltipTextAt(location_in_content) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParamsSpec,
      [location_in_content]);
  }

  getWidgetIsModal() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParamsSpec,
      []);
  }

  getIsFocusedViewTextual() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParamsSpec,
      []);
  }

  onWindowGeometryChanged(window_bounds_in_screen_dips, content_bounds_in_screen_dips) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec,
      null,
      [window_bounds_in_screen_dips, content_bounds_in_screen_dips]);
  }

  onWindowWillStartLiveResize() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec,
      null,
      []);
  }

  onWindowDidEndLiveResize() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec,
      null,
      []);
  }

  onWindowFullscreenTransitionStart(target_fullscreen_state) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec,
      null,
      [target_fullscreen_state]);
  }

  onWindowFullscreenTransitionComplete(is_fullscreen) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec,
      null,
      [is_fullscreen]);
  }

  onWindowMiniaturizedChanged(miniaturized) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec,
      null,
      [miniaturized]);
  }

  onWindowZoomedChanged(zoomed) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec,
      null,
      [zoomed]);
  }

  onWindowDisplayChanged(display) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec,
      null,
      [display]);
  }

  onWindowWillClose() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec,
      null,
      []);
  }

  onWindowHasClosed() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec,
      null,
      []);
  }

  onWindowKeyStatusChanged(is_key, is_content_first_responder, full_keyboard_access_enabled) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec,
      null,
      [is_key, is_content_first_responder, full_keyboard_access_enabled]);
  }

  onWindowStateRestorationDataChanged(data) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec,
      null,
      [data]);
  }

  onSheetModalShown() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec,
      null,
      []);
  }

  onSheetModalClosed() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec,
      null,
      []);
  }

  onImmersiveFullscreenToolbarRevealChanged(is_revealed) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec,
      null,
      [is_revealed]);
  }

  onImmersiveFullscreenMenuBarRevealChanged(reveal_amount) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec,
      null,
      [reveal_amount]);
  }

  onAutohidingMenuBarHeightChanged(menu_bar_height) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec,
      null,
      [menu_bar_height]);
  }

  doDialogButtonAction(button) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec,
      null,
      [button]);
  }

  getDialogButtonInfo(button) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParamsSpec,
      [button]);
  }

  getDoDialogButtonsExist() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParamsSpec,
      []);
  }

  getShouldShowWindowTitle() {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParamsSpec,
      []);
  }

  getCanWindowBecomeKey() {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParamsSpec,
      []);
  }

  getAlwaysRenderWindowAsKey() {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParamsSpec,
      []);
  }

  onWindowCloseRequested() {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParamsSpec,
      []);
  }

  getWindowFrameTitlebarHeight() {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParamsSpec,
      []);
  }

  onFocusWindowToolbar() {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec,
      null,
      []);
  }

  setRemoteAccessibilityTokens(window_token, view_token) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec,
      null,
      [window_token, view_token]);
  }

  getRootViewAccessibilityToken() {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParamsSpec,
      []);
  }

  validateUserInterfaceItem(command) {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParamsSpec,
      [command]);
  }

  willExecuteCommand(command, window_open_disposition, is_before_first_responder) {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParamsSpec,
      [command, window_open_disposition, is_before_first_responder]);
  }

  executeCommand(command, window_open_disposition, is_before_first_responder) {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ResponseParamsSpec,
      [command, window_open_disposition, is_before_first_responder]);
  }

  handleAccelerator(accelerator, require_priority_handler) {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ResponseParamsSpec,
      [accelerator, require_priority_handler]);
  }

};

remote_cocoa.mojom.NativeWidgetNSWindowHost.getRemote = function() {
  let remote = new remote_cocoa.mojom.NativeWidgetNSWindowHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.NativeWidgetNSWindowHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnVisibilityChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnVisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSpaceActivationChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnSpaceActivationChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_space_active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowNativeThemeChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowNativeThemeChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnViewSizeChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnViewSizeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'new_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSheetOffsetY
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetSheetOffsetY_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetSheetOffsetY_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'offset_y', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetKeyboardAccessible
remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.SetKeyboardAccessible_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnIsFirstResponderChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnIsFirstResponderChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_first_responder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnMouseCaptureActiveChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnMouseCaptureActiveChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'capture_is_active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnScrollEvent
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnScrollEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnMouseEvent
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnMouseEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnGestureEvent
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnGestureEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchKeyEventRemote
remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.DispatchKeyEventRemote_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.DispatchKeyEventRemote_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'event_handled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchKeyEventToMenuControllerRemote
remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.DispatchKeyEventToMenuControllerRemote_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.DispatchKeyEventToMenuControllerRemote_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'event_swallowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'event_handled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchMonitorEvent
remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.DispatchMonitorEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'target_is_this_window', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.DispatchMonitorEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'event_handled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetHasMenuController
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetHasMenuController_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetHasMenuController_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_menu_controller', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetHitTestResult
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetHitTestResult_Params',
      packedSize: 16,
      fields: [
        { name: 'location_in_content', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetHitTestResult_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'hit_test_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetTooltipTextAt
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetTooltipTextAt_Params',
      packedSize: 16,
      fields: [
        { name: 'location_in_content', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetTooltipTextAt_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'new_tooltip_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetWidgetIsModal
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetWidgetIsModal_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetWidgetIsModal_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'widget_is_modal', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetIsFocusedViewTextual
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetIsFocusedViewTextual_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetIsFocusedViewTextual_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_textual', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowGeometryChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowGeometryChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'window_bounds_in_screen_dips', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'content_bounds_in_screen_dips', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowWillStartLiveResize
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowWillStartLiveResize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowDidEndLiveResize
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowDidEndLiveResize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowFullscreenTransitionStart
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowFullscreenTransitionStart_Params',
      packedSize: 16,
      fields: [
        { name: 'target_fullscreen_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowFullscreenTransitionComplete
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowFullscreenTransitionComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'is_fullscreen', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowMiniaturizedChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowMiniaturizedChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'miniaturized', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowZoomedChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowZoomedChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'zoomed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowDisplayChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowDisplayChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'display', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowWillClose
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowWillClose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowHasClosed
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowHasClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowKeyStatusChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowKeyStatusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_content_first_responder', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'full_keyboard_access_enabled', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowStateRestorationDataChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowStateRestorationDataChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSheetModalShown
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnSheetModalShown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSheetModalClosed
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnSheetModalClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnImmersiveFullscreenToolbarRevealChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnImmersiveFullscreenToolbarRevealChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_revealed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnImmersiveFullscreenMenuBarRevealChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnImmersiveFullscreenMenuBarRevealChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'reveal_amount', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAutohidingMenuBarHeightChanged
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnAutohidingMenuBarHeightChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'menu_bar_height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DoDialogButtonAction
remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.DoDialogButtonAction_Params',
      packedSize: 16,
      fields: [
        { name: 'button', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDialogButtonInfo
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetDialogButtonInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'button', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetDialogButtonInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'button_exists', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_button_enabled', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_button_default', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetDoDialogButtonsExist
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetDoDialogButtonsExist_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetDoDialogButtonsExist_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'buttons_exist', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetShouldShowWindowTitle
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetShouldShowWindowTitle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetShouldShowWindowTitle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_show_window_title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCanWindowBecomeKey
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetCanWindowBecomeKey_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetCanWindowBecomeKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'can_window_become_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAlwaysRenderWindowAsKey
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetAlwaysRenderWindowAsKey_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetAlwaysRenderWindowAsKey_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'always_render_as_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnWindowCloseRequested
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowCloseRequested_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnWindowCloseRequested_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'can_window_close', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetWindowFrameTitlebarHeight
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetWindowFrameTitlebarHeight_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetWindowFrameTitlebarHeight_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'titlebar_height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'override_titlebar_height', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFocusWindowToolbar
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.OnFocusWindowToolbar_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetRemoteAccessibilityTokens
remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.SetRemoteAccessibilityTokens_Params',
      packedSize: 24,
      fields: [
        { name: 'window_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'view_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetRootViewAccessibilityToken
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetRootViewAccessibilityToken_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.GetRootViewAccessibilityToken_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'host_pid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'element_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ValidateUserInterfaceItem
remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.ValidateUserInterfaceItem_Params',
      packedSize: 16,
      fields: [
        { name: 'command', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.ValidateUserInterfaceItem_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WillExecuteCommand
remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.WillExecuteCommand_Params',
      packedSize: 32,
      fields: [
        { name: 'window_open_disposition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'command', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_before_first_responder', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.WillExecuteCommand_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'will_execute', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExecuteCommand
remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.ExecuteCommand_Params',
      packedSize: 32,
      fields: [
        { name: 'window_open_disposition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'command', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'is_before_first_responder', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.ExecuteCommand_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'was_executed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleAccelerator
remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.HandleAccelerator_Params',
      packedSize: 24,
      fields: [
        { name: 'accelerator', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'require_priority_handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindowHost.HandleAccelerator_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'was_handled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.NativeWidgetNSWindowHostPtr = remote_cocoa.mojom.NativeWidgetNSWindowHostRemote;
remote_cocoa.mojom.NativeWidgetNSWindowHostRequest = remote_cocoa.mojom.NativeWidgetNSWindowHostPendingReceiver;

