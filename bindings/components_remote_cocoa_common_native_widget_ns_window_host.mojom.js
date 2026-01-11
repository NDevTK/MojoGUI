// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/native_widget_ns_window_host.mojom
// Module: remote_cocoa.mojom

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};
var mojo_base = mojo_base || {};
var ui = ui || {};
var display = display || {};
var gfx = gfx || {};

remote_cocoa.mojom.HitTestResultSpec = { $: mojo.internal.Enum() };
remote_cocoa.mojom.ValidateUserInterfaceItemResultSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost = {};
remote_cocoa.mojom.NativeWidgetNSWindowHost.$interfaceName = 'remote_cocoa.mojom.NativeWidgetNSWindowHost';
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ResponseParamsSpec = { $: {} };

// Enum: HitTestResult
remote_cocoa.mojom.HitTestResult = {
  kDraggableBackground: 0,
  kRootView: 1,
  kSubView: 2,
  kOther: 3,
};

// Struct: ValidateUserInterfaceItemResult
mojo.internal.Struct(
    remote_cocoa.mojom.ValidateUserInterfaceItemResultSpec, 'remote_cocoa.mojom.ValidateUserInterfaceItemResult', [
      mojo.internal.StructField('new_title', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('enable', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('disable_if_has_no_key_equivalent', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('set_hidden_state', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('new_hidden_state', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('set_toggle_state', 8, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('new_toggle_state', 8, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: NativeWidgetNSWindowHost
mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_Params', [
      mojo.internal.StructField('is_space_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_Params', [
      mojo.internal.StructField('new_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParams', [
      mojo.internal.StructField('offset_y', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_Params', [
      mojo.internal.StructField('is_first_responder', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_Params', [
      mojo.internal.StructField('capture_is_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_Params', [
      mojo.internal.StructField('event', 0, 0, ui.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_Params', [
      mojo.internal.StructField('event', 0, 0, ui.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_Params', [
      mojo.internal.StructField('event', 0, 0, ui.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_Params', [
      mojo.internal.StructField('event', 0, 0, ui.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParams', [
      mojo.internal.StructField('event_handled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_Params', [
      mojo.internal.StructField('event', 0, 0, ui.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParams', [
      mojo.internal.StructField('event_swallowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('event_handled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_Params', [
      mojo.internal.StructField('event', 0, 0, ui.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('target_is_this_window', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParams', [
      mojo.internal.StructField('event_handled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParams', [
      mojo.internal.StructField('has_menu_controller', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_Params', [
      mojo.internal.StructField('location_in_content', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParams', [
      mojo.internal.StructField('hit_test_result', 0, 0, remote_cocoa.mojom.HitTestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_Params', [
      mojo.internal.StructField('location_in_content', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParams', [
      mojo.internal.StructField('new_tooltip_text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParams', [
      mojo.internal.StructField('widget_is_modal', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParams', [
      mojo.internal.StructField('is_textual', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_Params', [
      mojo.internal.StructField('window_bounds_in_screen_dips', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('content_bounds_in_screen_dips', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_Params', [
      mojo.internal.StructField('target_fullscreen_state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_Params', [
      mojo.internal.StructField('is_fullscreen', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_Params', [
      mojo.internal.StructField('miniaturized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_Params', [
      mojo.internal.StructField('zoomed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_Params', [
      mojo.internal.StructField('display', 0, 0, display.mojom.DisplaySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_Params', [
      mojo.internal.StructField('is_key', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_content_first_responder', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('full_keyboard_access_enabled', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_Params', [
      mojo.internal.StructField('is_revealed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_Params', [
      mojo.internal.StructField('reveal_amount', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_Params', [
      mojo.internal.StructField('menu_bar_height', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_Params', [
      mojo.internal.StructField('button', 0, 0, ui.mojom.DialogButtonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_Params', [
      mojo.internal.StructField('button', 0, 0, ui.mojom.DialogButtonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParams', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('button_exists', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_button_enabled', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_button_default', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParams', [
      mojo.internal.StructField('buttons_exist', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParams', [
      mojo.internal.StructField('should_show_window_title', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParams', [
      mojo.internal.StructField('can_window_become_key', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParams', [
      mojo.internal.StructField('always_render_as_key', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParams', [
      mojo.internal.StructField('can_window_close', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParams', [
      mojo.internal.StructField('titlebar_height', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('override_titlebar_height', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_Params', [
      mojo.internal.StructField('window_token', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('view_token', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParams', [
      mojo.internal.StructField('host_pid', 0, 0, mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('element_token', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_Params', [
      mojo.internal.StructField('command', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, remote_cocoa.mojom.ValidateUserInterfaceItemResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_Params', [
      mojo.internal.StructField('window_open_disposition', 0, 0, ui.mojom.WindowOpenDispositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('command', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_before_first_responder', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParams', [
      mojo.internal.StructField('will_execute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_Params', [
      mojo.internal.StructField('window_open_disposition', 0, 0, ui.mojom.WindowOpenDispositionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('command', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_before_first_responder', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ResponseParams', [
      mojo.internal.StructField('was_executed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_Params', [
      mojo.internal.StructField('accelerator', 0, 0, ui.mojom.AcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('require_priority_handler', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ResponseParams', [
      mojo.internal.StructField('was_handled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
  onVisibilityChanged(visible) {
    return this.$.onVisibilityChanged(visible);
  }
  onSpaceActivationChanged(is_space_active) {
    return this.$.onSpaceActivationChanged(is_space_active);
  }
  onWindowNativeThemeChanged() {
    return this.$.onWindowNativeThemeChanged();
  }
  onViewSizeChanged(new_size) {
    return this.$.onViewSizeChanged(new_size);
  }
  getSheetOffsetY() {
    return this.$.getSheetOffsetY();
  }
  setKeyboardAccessible(enabled) {
    return this.$.setKeyboardAccessible(enabled);
  }
  onIsFirstResponderChanged(is_first_responder) {
    return this.$.onIsFirstResponderChanged(is_first_responder);
  }
  onMouseCaptureActiveChanged(capture_is_active) {
    return this.$.onMouseCaptureActiveChanged(capture_is_active);
  }
  onScrollEvent(event) {
    return this.$.onScrollEvent(event);
  }
  onMouseEvent(event) {
    return this.$.onMouseEvent(event);
  }
  onGestureEvent(event) {
    return this.$.onGestureEvent(event);
  }
  dispatchKeyEventRemote(event) {
    return this.$.dispatchKeyEventRemote(event);
  }
  dispatchKeyEventToMenuControllerRemote(event) {
    return this.$.dispatchKeyEventToMenuControllerRemote(event);
  }
  dispatchMonitorEvent(event, target_is_this_window) {
    return this.$.dispatchMonitorEvent(event, target_is_this_window);
  }
  getHasMenuController() {
    return this.$.getHasMenuController();
  }
  getHitTestResult(location_in_content) {
    return this.$.getHitTestResult(location_in_content);
  }
  getTooltipTextAt(location_in_content) {
    return this.$.getTooltipTextAt(location_in_content);
  }
  getWidgetIsModal() {
    return this.$.getWidgetIsModal();
  }
  getIsFocusedViewTextual() {
    return this.$.getIsFocusedViewTextual();
  }
  onWindowGeometryChanged(window_bounds_in_screen_dips, content_bounds_in_screen_dips) {
    return this.$.onWindowGeometryChanged(window_bounds_in_screen_dips, content_bounds_in_screen_dips);
  }
  onWindowWillStartLiveResize() {
    return this.$.onWindowWillStartLiveResize();
  }
  onWindowDidEndLiveResize() {
    return this.$.onWindowDidEndLiveResize();
  }
  onWindowFullscreenTransitionStart(target_fullscreen_state) {
    return this.$.onWindowFullscreenTransitionStart(target_fullscreen_state);
  }
  onWindowFullscreenTransitionComplete(is_fullscreen) {
    return this.$.onWindowFullscreenTransitionComplete(is_fullscreen);
  }
  onWindowMiniaturizedChanged(miniaturized) {
    return this.$.onWindowMiniaturizedChanged(miniaturized);
  }
  onWindowZoomedChanged(zoomed) {
    return this.$.onWindowZoomedChanged(zoomed);
  }
  onWindowDisplayChanged(display) {
    return this.$.onWindowDisplayChanged(display);
  }
  onWindowWillClose() {
    return this.$.onWindowWillClose();
  }
  onWindowHasClosed() {
    return this.$.onWindowHasClosed();
  }
  onWindowKeyStatusChanged(is_key, is_content_first_responder, full_keyboard_access_enabled) {
    return this.$.onWindowKeyStatusChanged(is_key, is_content_first_responder, full_keyboard_access_enabled);
  }
  onWindowStateRestorationDataChanged(data) {
    return this.$.onWindowStateRestorationDataChanged(data);
  }
  onSheetModalShown() {
    return this.$.onSheetModalShown();
  }
  onSheetModalClosed() {
    return this.$.onSheetModalClosed();
  }
  onImmersiveFullscreenToolbarRevealChanged(is_revealed) {
    return this.$.onImmersiveFullscreenToolbarRevealChanged(is_revealed);
  }
  onImmersiveFullscreenMenuBarRevealChanged(reveal_amount) {
    return this.$.onImmersiveFullscreenMenuBarRevealChanged(reveal_amount);
  }
  onAutohidingMenuBarHeightChanged(menu_bar_height) {
    return this.$.onAutohidingMenuBarHeightChanged(menu_bar_height);
  }
  doDialogButtonAction(button) {
    return this.$.doDialogButtonAction(button);
  }
  getDialogButtonInfo(button) {
    return this.$.getDialogButtonInfo(button);
  }
  getDoDialogButtonsExist() {
    return this.$.getDoDialogButtonsExist();
  }
  getShouldShowWindowTitle() {
    return this.$.getShouldShowWindowTitle();
  }
  getCanWindowBecomeKey() {
    return this.$.getCanWindowBecomeKey();
  }
  getAlwaysRenderWindowAsKey() {
    return this.$.getAlwaysRenderWindowAsKey();
  }
  onWindowCloseRequested() {
    return this.$.onWindowCloseRequested();
  }
  getWindowFrameTitlebarHeight() {
    return this.$.getWindowFrameTitlebarHeight();
  }
  onFocusWindowToolbar() {
    return this.$.onFocusWindowToolbar();
  }
  setRemoteAccessibilityTokens(window_token, view_token) {
    return this.$.setRemoteAccessibilityTokens(window_token, view_token);
  }
  getRootViewAccessibilityToken() {
    return this.$.getRootViewAccessibilityToken();
  }
  validateUserInterfaceItem(command) {
    return this.$.validateUserInterfaceItem(command);
  }
  willExecuteCommand(command, window_open_disposition, is_before_first_responder) {
    return this.$.willExecuteCommand(command, window_open_disposition, is_before_first_responder);
  }
  executeCommand(command, window_open_disposition, is_before_first_responder) {
    return this.$.executeCommand(command, window_open_disposition, is_before_first_responder);
  }
  handleAccelerator(accelerator, require_priority_handler) {
    return this.$.handleAccelerator(accelerator, require_priority_handler);
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NativeWidgetNSWindowHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  onVisibilityChanged(visible) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec,
      null,
      [visible],
      false);
  }

  onSpaceActivationChanged(is_space_active) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec,
      null,
      [is_space_active],
      false);
  }

  onWindowNativeThemeChanged() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onViewSizeChanged(new_size) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec,
      null,
      [new_size],
      false);
  }

  getSheetOffsetY() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParamsSpec,
      [],
      false);
  }

  setKeyboardAccessible(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec,
      null,
      [enabled],
      false);
  }

  onIsFirstResponderChanged(is_first_responder) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec,
      null,
      [is_first_responder],
      false);
  }

  onMouseCaptureActiveChanged(capture_is_active) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec,
      null,
      [capture_is_active],
      false);
  }

  onScrollEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  onMouseEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  onGestureEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  dispatchKeyEventRemote(event) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParamsSpec,
      [event],
      false);
  }

  dispatchKeyEventToMenuControllerRemote(event) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParamsSpec,
      [event],
      false);
  }

  dispatchMonitorEvent(event, target_is_this_window) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParamsSpec,
      [event, target_is_this_window],
      false);
  }

  getHasMenuController() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParamsSpec,
      [],
      false);
  }

  getHitTestResult(location_in_content) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParamsSpec,
      [location_in_content],
      false);
  }

  getTooltipTextAt(location_in_content) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParamsSpec,
      [location_in_content],
      false);
  }

  getWidgetIsModal() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParamsSpec,
      [],
      false);
  }

  getIsFocusedViewTextual() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParamsSpec,
      [],
      false);
  }

  onWindowGeometryChanged(window_bounds_in_screen_dips, content_bounds_in_screen_dips) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec,
      null,
      [window_bounds_in_screen_dips, content_bounds_in_screen_dips],
      false);
  }

  onWindowWillStartLiveResize() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec,
      null,
      [],
      false);
  }

  onWindowDidEndLiveResize() {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec,
      null,
      [],
      false);
  }

  onWindowFullscreenTransitionStart(target_fullscreen_state) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec,
      null,
      [target_fullscreen_state],
      false);
  }

  onWindowFullscreenTransitionComplete(is_fullscreen) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec,
      null,
      [is_fullscreen],
      false);
  }

  onWindowMiniaturizedChanged(miniaturized) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec,
      null,
      [miniaturized],
      false);
  }

  onWindowZoomedChanged(zoomed) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec,
      null,
      [zoomed],
      false);
  }

  onWindowDisplayChanged(display) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec,
      null,
      [display],
      false);
  }

  onWindowWillClose() {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec,
      null,
      [],
      false);
  }

  onWindowHasClosed() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onWindowKeyStatusChanged(is_key, is_content_first_responder, full_keyboard_access_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec,
      null,
      [is_key, is_content_first_responder, full_keyboard_access_enabled],
      false);
  }

  onWindowStateRestorationDataChanged(data) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec,
      null,
      [data],
      false);
  }

  onSheetModalShown() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec,
      null,
      [],
      false);
  }

  onSheetModalClosed() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onImmersiveFullscreenToolbarRevealChanged(is_revealed) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec,
      null,
      [is_revealed],
      false);
  }

  onImmersiveFullscreenMenuBarRevealChanged(reveal_amount) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec,
      null,
      [reveal_amount],
      false);
  }

  onAutohidingMenuBarHeightChanged(menu_bar_height) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec,
      null,
      [menu_bar_height],
      false);
  }

  doDialogButtonAction(button) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec,
      null,
      [button],
      false);
  }

  getDialogButtonInfo(button) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParamsSpec,
      [button],
      false);
  }

  getDoDialogButtonsExist() {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParamsSpec,
      [],
      false);
  }

  getShouldShowWindowTitle() {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParamsSpec,
      [],
      false);
  }

  getCanWindowBecomeKey() {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParamsSpec,
      [],
      false);
  }

  getAlwaysRenderWindowAsKey() {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParamsSpec,
      [],
      false);
  }

  onWindowCloseRequested() {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParamsSpec,
      [],
      false);
  }

  getWindowFrameTitlebarHeight() {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParamsSpec,
      [],
      false);
  }

  onFocusWindowToolbar() {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec,
      null,
      [],
      false);
  }

  setRemoteAccessibilityTokens(window_token, view_token) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec,
      null,
      [window_token, view_token],
      false);
  }

  getRootViewAccessibilityToken() {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParamsSpec,
      [],
      false);
  }

  validateUserInterfaceItem(command) {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParamsSpec,
      [command],
      false);
  }

  willExecuteCommand(command, window_open_disposition, is_before_first_responder) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParamsSpec,
      [command, window_open_disposition, is_before_first_responder],
      false);
  }

  executeCommand(command, window_open_disposition, is_before_first_responder) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ResponseParamsSpec,
      [command, window_open_disposition, is_before_first_responder],
      false);
  }

  handleAccelerator(accelerator, require_priority_handler) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ResponseParamsSpec,
      [accelerator, require_priority_handler],
      false);
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

remote_cocoa.mojom.NativeWidgetNSWindowHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NativeWidgetNSWindowHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec);
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec);
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec);
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec);
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec);
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec);
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec);
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec);
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec);
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec);
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onVisibilityChanged(params.visible);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onSpaceActivationChanged(params.is_space_active);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowNativeThemeChanged();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onViewSizeChanged(params.new_size);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec.$.structSpec);
          const result = this.impl.getSheetOffsetY();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec.$.structSpec);
          const result = this.impl.setKeyboardAccessible(params.enabled);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onIsFirstResponderChanged(params.is_first_responder);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onMouseCaptureActiveChanged(params.capture_is_active);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec.$.structSpec);
          const result = this.impl.onScrollEvent(params.event);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec.$.structSpec);
          const result = this.impl.onMouseEvent(params.event);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec.$.structSpec);
          const result = this.impl.onGestureEvent(params.event);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchKeyEventRemote(params.event);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchKeyEventToMenuControllerRemote(params.event);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchMonitorEvent(params.event, params.target_is_this_window);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec.$.structSpec);
          const result = this.impl.getHasMenuController();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec.$.structSpec);
          const result = this.impl.getHitTestResult(params.location_in_content);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec.$.structSpec);
          const result = this.impl.getTooltipTextAt(params.location_in_content);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec.$.structSpec);
          const result = this.impl.getWidgetIsModal();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec.$.structSpec);
          const result = this.impl.getIsFocusedViewTextual();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowGeometryChanged(params.window_bounds_in_screen_dips, params.content_bounds_in_screen_dips);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowWillStartLiveResize();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowDidEndLiveResize();
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowFullscreenTransitionStart(params.target_fullscreen_state);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowFullscreenTransitionComplete(params.is_fullscreen);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowMiniaturizedChanged(params.miniaturized);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowZoomedChanged(params.zoomed);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowDisplayChanged(params.display);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowWillClose();
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowHasClosed();
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowKeyStatusChanged(params.is_key, params.is_content_first_responder, params.full_keyboard_access_enabled);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowStateRestorationDataChanged(params.data);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec.$.structSpec);
          const result = this.impl.onSheetModalShown();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onSheetModalClosed();
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onImmersiveFullscreenToolbarRevealChanged(params.is_revealed);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onImmersiveFullscreenMenuBarRevealChanged(params.reveal_amount);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onAutohidingMenuBarHeightChanged(params.menu_bar_height);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec.$.structSpec);
          const result = this.impl.doDialogButtonAction(params.button);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getDialogButtonInfo(params.button);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec.$.structSpec);
          const result = this.impl.getDoDialogButtonsExist();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec.$.structSpec);
          const result = this.impl.getShouldShowWindowTitle();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec.$.structSpec);
          const result = this.impl.getCanWindowBecomeKey();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec.$.structSpec);
          const result = this.impl.getAlwaysRenderWindowAsKey();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec.$.structSpec);
          const result = this.impl.onWindowCloseRequested();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec.$.structSpec);
          const result = this.impl.getWindowFrameTitlebarHeight();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec.$.structSpec);
          const result = this.impl.onFocusWindowToolbar();
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec.$.structSpec);
          const result = this.impl.setRemoteAccessibilityTokens(params.window_token, params.view_token);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec.$.structSpec);
          const result = this.impl.getRootViewAccessibilityToken();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec.$.structSpec);
          const result = this.impl.validateUserInterfaceItem(params.command);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec.$.structSpec);
          const result = this.impl.willExecuteCommand(params.command, params.window_open_disposition, params.is_before_first_responder);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec.$.structSpec);
          const result = this.impl.executeCommand(params.command, params.window_open_disposition, params.is_before_first_responder);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec.$.structSpec);
          const result = this.impl.handleAccelerator(params.accelerator, params.require_priority_handler);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ResponseParamsSpec);
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

remote_cocoa.mojom.NativeWidgetNSWindowHostReceiver = remote_cocoa.mojom.NativeWidgetNSWindowHostReceiver;

remote_cocoa.mojom.NativeWidgetNSWindowHostPtr = remote_cocoa.mojom.NativeWidgetNSWindowHostRemote;
remote_cocoa.mojom.NativeWidgetNSWindowHostRequest = remote_cocoa.mojom.NativeWidgetNSWindowHostPendingReceiver;

