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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnVisibilityChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onVisibilityChanged');
          const result = this.impl.onVisibilityChanged(params.visible);
          break;
        }
        case 1: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSpaceActivationChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onSpaceActivationChanged');
          const result = this.impl.onSpaceActivationChanged(params.is_space_active);
          break;
        }
        case 2: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowNativeThemeChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onWindowNativeThemeChanged');
          const result = this.impl.onWindowNativeThemeChanged();
          break;
        }
        case 3: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnViewSizeChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onViewSizeChanged');
          const result = this.impl.onViewSizeChanged(params.new_size);
          break;
        }
        case 4: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_GetSheetOffsetY_ParamsSpec.$.decode(message.payload);
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
        case 5: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_SetKeyboardAccessible_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setKeyboardAccessible');
          const result = this.impl.setKeyboardAccessible(params.enabled);
          break;
        }
        case 6: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnIsFirstResponderChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onIsFirstResponderChanged');
          const result = this.impl.onIsFirstResponderChanged(params.is_first_responder);
          break;
        }
        case 7: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseCaptureActiveChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onMouseCaptureActiveChanged');
          const result = this.impl.onMouseCaptureActiveChanged(params.capture_is_active);
          break;
        }
        case 8: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnScrollEvent_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onScrollEvent');
          const result = this.impl.onScrollEvent(params.event);
          break;
        }
        case 9: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnMouseEvent_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onMouseEvent');
          const result = this.impl.onMouseEvent(params.event);
          break;
        }
        case 10: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnGestureEvent_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onGestureEvent');
          const result = this.impl.onGestureEvent(params.event);
          break;
        }
        case 11: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventRemote_ParamsSpec.$.decode(message.payload);
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
        case 12: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchKeyEventToMenuControllerRemote_ParamsSpec.$.decode(message.payload);
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
        case 13: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_DispatchMonitorEvent_ParamsSpec.$.decode(message.payload);
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
        case 14: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHasMenuController_ParamsSpec.$.decode(message.payload);
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
        case 15: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_GetHitTestResult_ParamsSpec.$.decode(message.payload);
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
        case 16: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_GetTooltipTextAt_ParamsSpec.$.decode(message.payload);
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
        case 17: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWidgetIsModal_ParamsSpec.$.decode(message.payload);
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
        case 18: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_GetIsFocusedViewTextual_ParamsSpec.$.decode(message.payload);
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
        case 19: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowGeometryChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onWindowGeometryChanged');
          const result = this.impl.onWindowGeometryChanged(params.window_bounds_in_screen_dips, params.content_bounds_in_screen_dips);
          break;
        }
        case 20: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillStartLiveResize_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onWindowWillStartLiveResize');
          const result = this.impl.onWindowWillStartLiveResize();
          break;
        }
        case 21: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDidEndLiveResize_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onWindowDidEndLiveResize');
          const result = this.impl.onWindowDidEndLiveResize();
          break;
        }
        case 22: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionStart_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onWindowFullscreenTransitionStart');
          const result = this.impl.onWindowFullscreenTransitionStart(params.target_fullscreen_state);
          break;
        }
        case 23: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowFullscreenTransitionComplete_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onWindowFullscreenTransitionComplete');
          const result = this.impl.onWindowFullscreenTransitionComplete(params.is_fullscreen);
          break;
        }
        case 24: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowMiniaturizedChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onWindowMiniaturizedChanged');
          const result = this.impl.onWindowMiniaturizedChanged(params.miniaturized);
          break;
        }
        case 25: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowZoomedChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onWindowZoomedChanged');
          const result = this.impl.onWindowZoomedChanged(params.zoomed);
          break;
        }
        case 26: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowDisplayChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onWindowDisplayChanged');
          const result = this.impl.onWindowDisplayChanged(params.display);
          break;
        }
        case 27: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowWillClose_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onWindowWillClose');
          const result = this.impl.onWindowWillClose();
          break;
        }
        case 28: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowHasClosed_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onWindowHasClosed');
          const result = this.impl.onWindowHasClosed();
          break;
        }
        case 29: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowKeyStatusChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onWindowKeyStatusChanged');
          const result = this.impl.onWindowKeyStatusChanged(params.is_key, params.is_content_first_responder, params.full_keyboard_access_enabled);
          break;
        }
        case 30: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowStateRestorationDataChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onWindowStateRestorationDataChanged');
          const result = this.impl.onWindowStateRestorationDataChanged(params.data);
          break;
        }
        case 31: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalShown_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onSheetModalShown');
          const result = this.impl.onSheetModalShown();
          break;
        }
        case 32: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnSheetModalClosed_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onSheetModalClosed');
          const result = this.impl.onSheetModalClosed();
          break;
        }
        case 33: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenToolbarRevealChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onImmersiveFullscreenToolbarRevealChanged');
          const result = this.impl.onImmersiveFullscreenToolbarRevealChanged(params.is_revealed);
          break;
        }
        case 34: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnImmersiveFullscreenMenuBarRevealChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onImmersiveFullscreenMenuBarRevealChanged');
          const result = this.impl.onImmersiveFullscreenMenuBarRevealChanged(params.reveal_amount);
          break;
        }
        case 35: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnAutohidingMenuBarHeightChanged_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onAutohidingMenuBarHeightChanged');
          const result = this.impl.onAutohidingMenuBarHeightChanged(params.menu_bar_height);
          break;
        }
        case 36: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_DoDialogButtonAction_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.doDialogButtonAction');
          const result = this.impl.doDialogButtonAction(params.button);
          break;
        }
        case 37: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDialogButtonInfo_ParamsSpec.$.decode(message.payload);
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
        case 38: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_GetDoDialogButtonsExist_ParamsSpec.$.decode(message.payload);
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
        case 39: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_GetShouldShowWindowTitle_ParamsSpec.$.decode(message.payload);
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
        case 40: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_GetCanWindowBecomeKey_ParamsSpec.$.decode(message.payload);
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
        case 41: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_GetAlwaysRenderWindowAsKey_ParamsSpec.$.decode(message.payload);
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
        case 42: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnWindowCloseRequested_ParamsSpec.$.decode(message.payload);
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
        case 43: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_GetWindowFrameTitlebarHeight_ParamsSpec.$.decode(message.payload);
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
        case 44: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_OnFocusWindowToolbar_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.onFocusWindowToolbar');
          const result = this.impl.onFocusWindowToolbar();
          break;
        }
        case 45: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_SetRemoteAccessibilityTokens_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.setRemoteAccessibilityTokens');
          const result = this.impl.setRemoteAccessibilityTokens(params.window_token, params.view_token);
          break;
        }
        case 46: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_GetRootViewAccessibilityToken_ParamsSpec.$.decode(message.payload);
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
        case 47: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_ValidateUserInterfaceItem_ParamsSpec.$.decode(message.payload);
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
        case 48: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_WillExecuteCommand_ParamsSpec.$.decode(message.payload);
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
        case 49: {
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_ExecuteCommand_ParamsSpec.$.decode(message.payload);
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
          const params = remote_cocoa.mojom.NativeWidgetNSWindowHost_HandleAccelerator_ParamsSpec.$.decode(message.payload);
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

