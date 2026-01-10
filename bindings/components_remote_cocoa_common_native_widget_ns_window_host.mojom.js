// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/native_widget_ns_window_host.mojom
// Module: remote_cocoa.mojom

'use strict';

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
      [visible],
      false);
  }

  onSpaceActivationChanged(is_space_active) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec,
      null,
      [is_space_active],
      false);
  }

  onWindowNativeThemeChanged() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onViewSizeChanged(new_size) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec,
      null,
      [new_size],
      false);
  }

  getSheetOffsetY() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParamsSpec,
      [],
      false);
  }

  setKeyboardAccessible(enabled) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec,
      null,
      [enabled],
      false);
  }

  onIsFirstResponderChanged(is_first_responder) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec,
      null,
      [is_first_responder],
      false);
  }

  onMouseCaptureActiveChanged(capture_is_active) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec,
      null,
      [capture_is_active],
      false);
  }

  onScrollEvent(event) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  onMouseEvent(event) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  onGestureEvent(event) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  dispatchKeyEventRemote(event) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParamsSpec,
      [event],
      false);
  }

  dispatchKeyEventToMenuControllerRemote(event) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParamsSpec,
      [event],
      false);
  }

  dispatchMonitorEvent(event, target_is_this_window) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParamsSpec,
      [event, target_is_this_window],
      false);
  }

  getHasMenuController() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParamsSpec,
      [],
      false);
  }

  getHitTestResult(location_in_content) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParamsSpec,
      [location_in_content],
      false);
  }

  getTooltipTextAt(location_in_content) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParamsSpec,
      [location_in_content],
      false);
  }

  getWidgetIsModal() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParamsSpec,
      [],
      false);
  }

  getIsFocusedViewTextual() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParamsSpec,
      [],
      false);
  }

  onWindowGeometryChanged(window_bounds_in_screen_dips, content_bounds_in_screen_dips) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec,
      null,
      [window_bounds_in_screen_dips, content_bounds_in_screen_dips],
      false);
  }

  onWindowWillStartLiveResize() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec,
      null,
      [],
      false);
  }

  onWindowDidEndLiveResize() {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec,
      null,
      [],
      false);
  }

  onWindowFullscreenTransitionStart(target_fullscreen_state) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec,
      null,
      [target_fullscreen_state],
      false);
  }

  onWindowFullscreenTransitionComplete(is_fullscreen) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec,
      null,
      [is_fullscreen],
      false);
  }

  onWindowMiniaturizedChanged(miniaturized) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec,
      null,
      [miniaturized],
      false);
  }

  onWindowZoomedChanged(zoomed) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec,
      null,
      [zoomed],
      false);
  }

  onWindowDisplayChanged(display) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec,
      null,
      [display],
      false);
  }

  onWindowWillClose() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec,
      null,
      [],
      false);
  }

  onWindowHasClosed() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onWindowKeyStatusChanged(is_key, is_content_first_responder, full_keyboard_access_enabled) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec,
      null,
      [is_key, is_content_first_responder, full_keyboard_access_enabled],
      false);
  }

  onWindowStateRestorationDataChanged(data) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec,
      null,
      [data],
      false);
  }

  onSheetModalShown() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec,
      null,
      [],
      false);
  }

  onSheetModalClosed() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onImmersiveFullscreenToolbarRevealChanged(is_revealed) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec,
      null,
      [is_revealed],
      false);
  }

  onImmersiveFullscreenMenuBarRevealChanged(reveal_amount) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec,
      null,
      [reveal_amount],
      false);
  }

  onAutohidingMenuBarHeightChanged(menu_bar_height) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec,
      null,
      [menu_bar_height],
      false);
  }

  doDialogButtonAction(button) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec,
      null,
      [button],
      false);
  }

  getDialogButtonInfo(button) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParamsSpec,
      [button],
      false);
  }

  getDoDialogButtonsExist() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParamsSpec,
      [],
      false);
  }

  getShouldShowWindowTitle() {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParamsSpec,
      [],
      false);
  }

  getCanWindowBecomeKey() {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParamsSpec,
      [],
      false);
  }

  getAlwaysRenderWindowAsKey() {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParamsSpec,
      [],
      false);
  }

  onWindowCloseRequested() {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParamsSpec,
      [],
      false);
  }

  getWindowFrameTitlebarHeight() {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParamsSpec,
      [],
      false);
  }

  onFocusWindowToolbar() {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec,
      null,
      [],
      false);
  }

  setRemoteAccessibilityTokens(window_token, view_token) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec,
      null,
      [window_token, view_token],
      false);
  }

  getRootViewAccessibilityToken() {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParamsSpec,
      [],
      false);
  }

  validateUserInterfaceItem(command) {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParamsSpec,
      [command],
      false);
  }

  willExecuteCommand(command, window_open_disposition, is_before_first_responder) {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParamsSpec,
      [command, window_open_disposition, is_before_first_responder],
      false);
  }

  executeCommand(command, window_open_disposition, is_before_first_responder) {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ResponseParamsSpec,
      [command, window_open_disposition, is_before_first_responder],
      false);
  }

  handleAccelerator(accelerator, require_priority_handler) {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    this.ordinalMap.set(24, 24); // Default ordinal 24 -> Index 24
    this.ordinalMap.set(25, 25); // Default ordinal 25 -> Index 25
    this.ordinalMap.set(26, 26); // Default ordinal 26 -> Index 26
    this.ordinalMap.set(27, 27); // Default ordinal 27 -> Index 27
    this.ordinalMap.set(28, 28); // Default ordinal 28 -> Index 28
    this.ordinalMap.set(29, 29); // Default ordinal 29 -> Index 29
    this.ordinalMap.set(30, 30); // Default ordinal 30 -> Index 30
    this.ordinalMap.set(31, 31); // Default ordinal 31 -> Index 31
    this.ordinalMap.set(32, 32); // Default ordinal 32 -> Index 32
    this.ordinalMap.set(33, 33); // Default ordinal 33 -> Index 33
    this.ordinalMap.set(34, 34); // Default ordinal 34 -> Index 34
    this.ordinalMap.set(35, 35); // Default ordinal 35 -> Index 35
    this.ordinalMap.set(36, 36); // Default ordinal 36 -> Index 36
    this.ordinalMap.set(37, 37); // Default ordinal 37 -> Index 37
    this.ordinalMap.set(38, 38); // Default ordinal 38 -> Index 38
    this.ordinalMap.set(39, 39); // Default ordinal 39 -> Index 39
    this.ordinalMap.set(40, 40); // Default ordinal 40 -> Index 40
    this.ordinalMap.set(41, 41); // Default ordinal 41 -> Index 41
    this.ordinalMap.set(42, 42); // Default ordinal 42 -> Index 42
    this.ordinalMap.set(43, 43); // Default ordinal 43 -> Index 43
    this.ordinalMap.set(44, 44); // Default ordinal 44 -> Index 44
    this.ordinalMap.set(45, 45); // Default ordinal 45 -> Index 45
    this.ordinalMap.set(46, 46); // Default ordinal 46 -> Index 46
    this.ordinalMap.set(47, 47); // Default ordinal 47 -> Index 47
    this.ordinalMap.set(48, 48); // Default ordinal 48 -> Index 48
    this.ordinalMap.set(49, 49); // Default ordinal 49 -> Index 49
    this.ordinalMap.set(50, 50); // Default ordinal 50 -> Index 50
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnVisibilityChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnVisibilityChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnSpaceActivationChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSpaceActivationChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: OnWindowNativeThemeChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowNativeThemeChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: OnViewSizeChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnViewSizeChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: GetSheetOffsetY
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSheetOffsetY (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: SetKeyboardAccessible
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetKeyboardAccessible (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: OnIsFirstResponderChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnIsFirstResponderChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: OnMouseCaptureActiveChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMouseCaptureActiveChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: OnScrollEvent
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnScrollEvent (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 9: OnMouseEvent
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMouseEvent (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 10: OnGestureEvent
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnGestureEvent (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 11: DispatchKeyEventRemote
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchKeyEventRemote (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 12: DispatchKeyEventToMenuControllerRemote
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchKeyEventToMenuControllerRemote (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 13: DispatchMonitorEvent
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchMonitorEvent (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 14: GetHasMenuController
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHasMenuController (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 15: GetHitTestResult
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHitTestResult (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 16: GetTooltipTextAt
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTooltipTextAt (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 17: GetWidgetIsModal
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWidgetIsModal (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 18: GetIsFocusedViewTextual
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIsFocusedViewTextual (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 19: OnWindowGeometryChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowGeometryChanged (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 20: OnWindowWillStartLiveResize
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowWillStartLiveResize (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 21: OnWindowDidEndLiveResize
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowDidEndLiveResize (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 22: OnWindowFullscreenTransitionStart
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowFullscreenTransitionStart (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 23: OnWindowFullscreenTransitionComplete
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowFullscreenTransitionComplete (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 24: OnWindowMiniaturizedChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowMiniaturizedChanged (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 25: OnWindowZoomedChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowZoomedChanged (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 26: OnWindowDisplayChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowDisplayChanged (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 27: OnWindowWillClose
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowWillClose (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 28: OnWindowHasClosed
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowHasClosed (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 29: OnWindowKeyStatusChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowKeyStatusChanged (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 30: OnWindowStateRestorationDataChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowStateRestorationDataChanged (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 31: OnSheetModalShown
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSheetModalShown (31)');
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 32: OnSheetModalClosed
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSheetModalClosed (32)');
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 33: OnImmersiveFullscreenToolbarRevealChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImmersiveFullscreenToolbarRevealChanged (33)');
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 34: OnImmersiveFullscreenMenuBarRevealChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnImmersiveFullscreenMenuBarRevealChanged (34)');
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 35: OnAutohidingMenuBarHeightChanged
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAutohidingMenuBarHeightChanged (35)');
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 36: DoDialogButtonAction
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DoDialogButtonAction (36)');
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 37: GetDialogButtonInfo
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDialogButtonInfo (37)');
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 38: GetDoDialogButtonsExist
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDoDialogButtonsExist (38)');
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 39: GetShouldShowWindowTitle
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetShouldShowWindowTitle (39)');
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 40: GetCanWindowBecomeKey
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCanWindowBecomeKey (40)');
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 41: GetAlwaysRenderWindowAsKey
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAlwaysRenderWindowAsKey (41)');
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 42: OnWindowCloseRequested
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnWindowCloseRequested (42)');
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 43: GetWindowFrameTitlebarHeight
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWindowFrameTitlebarHeight (43)');
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 44: OnFocusWindowToolbar
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFocusWindowToolbar (44)');
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 45: SetRemoteAccessibilityTokens
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetRemoteAccessibilityTokens (45)');
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 46: GetRootViewAccessibilityToken
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRootViewAccessibilityToken (46)');
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 47: ValidateUserInterfaceItem
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ValidateUserInterfaceItem (47)');
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 48: WillExecuteCommand
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WillExecuteCommand (48)');
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 49: ExecuteCommand
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExecuteCommand (49)');
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 50: HandleAccelerator
        try {
             decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleAccelerator (50)');
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onVisibilityChanged');
          const result = this.impl.onVisibilityChanged(params.visible);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSpaceActivationChanged');
          const result = this.impl.onSpaceActivationChanged(params.is_space_active);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowNativeThemeChanged');
          const result = this.impl.onWindowNativeThemeChanged();
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onViewSizeChanged');
          const result = this.impl.onViewSizeChanged(params.new_size);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSheetOffsetY');
          const result = this.impl.getSheetOffsetY();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setKeyboardAccessible');
          const result = this.impl.setKeyboardAccessible(params.enabled);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onIsFirstResponderChanged');
          const result = this.impl.onIsFirstResponderChanged(params.is_first_responder);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMouseCaptureActiveChanged');
          const result = this.impl.onMouseCaptureActiveChanged(params.capture_is_active);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onScrollEvent');
          const result = this.impl.onScrollEvent(params.event);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMouseEvent');
          const result = this.impl.onMouseEvent(params.event);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onGestureEvent');
          const result = this.impl.onGestureEvent(params.event);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dispatchKeyEventRemote');
          const result = this.impl.dispatchKeyEventRemote(params.event);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dispatchKeyEventToMenuControllerRemote');
          const result = this.impl.dispatchKeyEventToMenuControllerRemote(params.event);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dispatchMonitorEvent');
          const result = this.impl.dispatchMonitorEvent(params.event, params.target_is_this_window);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getHasMenuController');
          const result = this.impl.getHasMenuController();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getHitTestResult');
          const result = this.impl.getHitTestResult(params.location_in_content);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getTooltipTextAt');
          const result = this.impl.getTooltipTextAt(params.location_in_content);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getWidgetIsModal');
          const result = this.impl.getWidgetIsModal();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getIsFocusedViewTextual');
          const result = this.impl.getIsFocusedViewTextual();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowGeometryChanged');
          const result = this.impl.onWindowGeometryChanged(params.window_bounds_in_screen_dips, params.content_bounds_in_screen_dips);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowWillStartLiveResize');
          const result = this.impl.onWindowWillStartLiveResize();
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowDidEndLiveResize');
          const result = this.impl.onWindowDidEndLiveResize();
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowFullscreenTransitionStart');
          const result = this.impl.onWindowFullscreenTransitionStart(params.target_fullscreen_state);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowFullscreenTransitionComplete');
          const result = this.impl.onWindowFullscreenTransitionComplete(params.is_fullscreen);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowMiniaturizedChanged');
          const result = this.impl.onWindowMiniaturizedChanged(params.miniaturized);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowZoomedChanged');
          const result = this.impl.onWindowZoomedChanged(params.zoomed);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowDisplayChanged');
          const result = this.impl.onWindowDisplayChanged(params.display);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowWillClose');
          const result = this.impl.onWindowWillClose();
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowHasClosed');
          const result = this.impl.onWindowHasClosed();
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowKeyStatusChanged');
          const result = this.impl.onWindowKeyStatusChanged(params.is_key, params.is_content_first_responder, params.full_keyboard_access_enabled);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowStateRestorationDataChanged');
          const result = this.impl.onWindowStateRestorationDataChanged(params.data);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSheetModalShown');
          const result = this.impl.onSheetModalShown();
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSheetModalClosed');
          const result = this.impl.onSheetModalClosed();
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onImmersiveFullscreenToolbarRevealChanged');
          const result = this.impl.onImmersiveFullscreenToolbarRevealChanged(params.is_revealed);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onImmersiveFullscreenMenuBarRevealChanged');
          const result = this.impl.onImmersiveFullscreenMenuBarRevealChanged(params.reveal_amount);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAutohidingMenuBarHeightChanged');
          const result = this.impl.onAutohidingMenuBarHeightChanged(params.menu_bar_height);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.doDialogButtonAction');
          const result = this.impl.doDialogButtonAction(params.button);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDialogButtonInfo');
          const result = this.impl.getDialogButtonInfo(params.button);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getDoDialogButtonsExist');
          const result = this.impl.getDoDialogButtonsExist();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getShouldShowWindowTitle');
          const result = this.impl.getShouldShowWindowTitle();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCanWindowBecomeKey');
          const result = this.impl.getCanWindowBecomeKey();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAlwaysRenderWindowAsKey');
          const result = this.impl.getAlwaysRenderWindowAsKey();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onWindowCloseRequested');
          const result = this.impl.onWindowCloseRequested();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getWindowFrameTitlebarHeight');
          const result = this.impl.getWindowFrameTitlebarHeight();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFocusWindowToolbar');
          const result = this.impl.onFocusWindowToolbar();
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setRemoteAccessibilityTokens');
          const result = this.impl.setRemoteAccessibilityTokens(params.window_token, params.view_token);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getRootViewAccessibilityToken');
          const result = this.impl.getRootViewAccessibilityToken();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.validateUserInterfaceItem');
          const result = this.impl.validateUserInterfaceItem(params.command);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.willExecuteCommand');
          const result = this.impl.willExecuteCommand(params.command, params.window_open_disposition, params.is_before_first_responder);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.executeCommand');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.handleAccelerator');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowHostReceiver = remote_cocoa.mojom.NativeWidgetNSWindowHostReceiver;

remote_cocoa.mojom.NativeWidgetNSWindowHostPtr = remote_cocoa.mojom.NativeWidgetNSWindowHostRemote;
remote_cocoa.mojom.NativeWidgetNSWindowHostRequest = remote_cocoa.mojom.NativeWidgetNSWindowHostPendingReceiver;

