// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/native_widget_ns_window.mojom
// Module: remote_cocoa.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var ui = ui || {};
var gfx = gfx || {};

remote_cocoa.mojom.WindowClassSpec = { $: mojo.internal.Enum() };
remote_cocoa.mojom.WindowVisibilityStateSpec = { $: mojo.internal.Enum() };
remote_cocoa.mojom.VisibilityTransitionSpec = { $: mojo.internal.Enum() };
remote_cocoa.mojom.ToolbarVisibilityStyleSpec = { $: mojo.internal.Enum() };
remote_cocoa.mojom.CreateWindowParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindowInitParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow = {};
remote_cocoa.mojom.NativeWidgetNSWindow.$interfaceName = 'remote_cocoa.mojom.NativeWidgetNSWindow';
remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec = { $: {} };
remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_ParamsSpec = { $: {} };

// Enum: WindowClass
remote_cocoa.mojom.WindowClass = {
  kDefault: 0,
  kBrowser: 1,
  kFrameless: 2,
  kOverlay: 3,
};

// Enum: WindowVisibilityState
remote_cocoa.mojom.WindowVisibilityState = {
  kHideWindow: 0,
  kShowAndActivateWindow: 1,
  kShowInactive: 2,
  kMiniaturizeWindow: 3,
};

// Enum: VisibilityTransition
remote_cocoa.mojom.VisibilityTransition = {
  kShow: 1,
  kHide: 2,
  kBoth: 3,
  kNone: 4,
};

// Enum: ToolbarVisibilityStyle
remote_cocoa.mojom.ToolbarVisibilityStyle = {
  kNone: 0,
  kAlways: 1,
  kAutohide: 2,
};

// Struct: CreateWindowParams
mojo.internal.Struct(
    remote_cocoa.mojom.CreateWindowParamsSpec, 'remote_cocoa.mojom.CreateWindowParams', [
      mojo.internal.StructField('window_class', 0, 0, remote_cocoa.mojom.WindowClassSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('style_mask', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('titlebar_appears_transparent', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('window_title_hidden', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('animation_enabled', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: NativeWidgetNSWindowInitParams
mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindowInitParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindowInitParams', [
      mojo.internal.StructField('modal_type', 0, 0, ui.mojom.ModalTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('state_restoration_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('is_translucent', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_window_server_shadow', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_into_collection_cycle', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_tooltip', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: NativeWidgetNSWindow
mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_Params', [
      mojo.internal.StructField('params', 0, 0, remote_cocoa.mojom.CreateWindowParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_Params', [
      mojo.internal.StructField('parent_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_Params', [
      mojo.internal.StructField('dialog', 0, 0, mojo.internal.InterfaceRequest(remote_cocoa.mojom.SelectFileDialogRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_Params', [
      mojo.internal.StructField('certificate', 0, 0, network.mojom.X509CertificateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_Params', [
      mojo.internal.StructField('sibling_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_Params', [
      mojo.internal.StructField('params', 0, 0, remote_cocoa.mojom.NativeWidgetNSWindowInitParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ResponseParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ResponseParams', [
      mojo.internal.StructField('cg_window_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_Params', [
      mojo.internal.StructField('ns_view_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('corner_radius_$value', 16, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'corner_radius_$flag', originalFieldName: 'corner_radius' }),
      mojo.internal.StructField('corner_radius_$flag', 20, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'corner_radius_$value', originalFieldName: 'corner_radius' }),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_Params', [
      mojo.internal.StructField('new_bounds', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('minimum_content_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_Params', [
      mojo.internal.StructField('new_bounds', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('minimum_content_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('maximum_content_size', 16, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_Params', [
      mojo.internal.StructField('new_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('minimum_content_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_Params', [
      mojo.internal.StructField('content_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('minimum_content_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_Params', [
      mojo.internal.StructField('new_state', 0, 0, remote_cocoa.mojom.WindowVisibilityStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_Params', [
      mojo.internal.StructField('animation_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_Params', [
      mojo.internal.StructField('transitions', 0, 0, remote_cocoa.mojom.VisibilityTransitionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_Params', [
      mojo.internal.StructField('always_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_Params', [
      mojo.internal.StructField('target_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_Params', [
      mojo.internal.StructField('can_appear_in_existing_fullscreen_spaces', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_Params', [
      mojo.internal.StructField('miniaturized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_Params', [
      mojo.internal.StructField('zoomed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_Params', [
      mojo.internal.StructField('min_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_size', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_resizable', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_maximizable', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_Params', [
      mojo.internal.StructField('opacity', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_Params', [
      mojo.internal.StructField('level', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_Params', [
      mojo.internal.StructField('independence', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_Params', [
      mojo.internal.StructField('aspect_ratio', 0, 0, gfx.mojom.SizeFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('excluded_margin', 8, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_Params', [
      mojo.internal.StructField('ca_layer_params', 0, 0, gfx.mojom.CALayerParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_Params', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_Params', [
      mojo.internal.StructField('ignores_mouse_events', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_Params', [
      mojo.internal.StructField('attached_subview_ids', 0, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_Params', [
      mojo.internal.StructField('native_event_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_Params', [
      mojo.internal.StructField('cursor', 0, 0, ui.mojom.CursorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_Params', [
      mojo.internal.StructField('fullscreen_overlay_widget_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('tab_widget_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_Params', [
      mojo.internal.StructField('style', 0, 0, remote_cocoa.mojom.ToolbarVisibilityStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_Params', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_Params', [
      mojo.internal.StructField('can_go_back', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_Params', [
      mojo.internal.StructField('can_go_forward', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_Params', [
      mojo.internal.StructField('menu', 0, 0, remote_cocoa.mojom.ContextMenuSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.InterfaceProxy(remote_cocoa.mojom.MenuHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('receiver', 16, 0, mojo.internal.InterfaceRequest(remote_cocoa.mojom.MenuRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_Params', [
      mojo.internal.StructField('allow', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_ParamsSpec, 'remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_Params', [
      mojo.internal.StructField('color_mode', 0, 0, ui.mojom.ColorModeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

remote_cocoa.mojom.NativeWidgetNSWindowPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.NativeWidgetNSWindow';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.NativeWidgetNSWindowPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.NativeWidgetNSWindowRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createWindow(params) {
    return this.$.createWindow(params);
  }
  setParent(parent_id) {
    return this.$.setParent(parent_id);
  }
  createSelectFileDialog(dialog) {
    return this.$.createSelectFileDialog(dialog);
  }
  showCertificateViewer(certificate) {
    return this.$.showCertificateViewer(certificate);
  }
  stackAbove(sibling_id) {
    return this.$.stackAbove(sibling_id);
  }
  stackAtTop() {
    return this.$.stackAtTop();
  }
  showEmojiPanel() {
    return this.$.showEmojiPanel();
  }
  initWindow(params) {
    return this.$.initWindow(params);
  }
  initCompositorView() {
    return this.$.initCompositorView();
  }
  createContentView(ns_view_id, bounds, corner_radius) {
    return this.$.createContentView(ns_view_id, bounds, corner_radius);
  }
  destroyContentView() {
    return this.$.destroyContentView();
  }
  closeWindow() {
    return this.$.closeWindow();
  }
  closeWindowNow() {
    return this.$.closeWindowNow();
  }
  setInitialBounds(new_bounds, minimum_content_size) {
    return this.$.setInitialBounds(new_bounds, minimum_content_size);
  }
  setBounds(new_bounds, minimum_content_size, maximum_content_size) {
    return this.$.setBounds(new_bounds, minimum_content_size, maximum_content_size);
  }
  setSize(new_size, minimum_content_size) {
    return this.$.setSize(new_size, minimum_content_size);
  }
  setSizeAndCenter(content_size, minimum_content_size) {
    return this.$.setSizeAndCenter(content_size, minimum_content_size);
  }
  setVisibilityState(new_state) {
    return this.$.setVisibilityState(new_state);
  }
  setAnimationEnabled(animation_enabled) {
    return this.$.setAnimationEnabled(animation_enabled);
  }
  setTransitionsToAnimate(transitions) {
    return this.$.setTransitionsToAnimate(transitions);
  }
  setVisibleOnAllSpaces(always_visible) {
    return this.$.setVisibleOnAllSpaces(always_visible);
  }
  enterFullscreen(target_display_id) {
    return this.$.enterFullscreen(target_display_id);
  }
  exitFullscreen() {
    return this.$.exitFullscreen();
  }
  setCanAppearInExistingFullscreenSpaces(can_appear_in_existing_fullscreen_spaces) {
    return this.$.setCanAppearInExistingFullscreenSpaces(can_appear_in_existing_fullscreen_spaces);
  }
  setMiniaturized(miniaturized) {
    return this.$.setMiniaturized(miniaturized);
  }
  setZoomed(zoomed) {
    return this.$.setZoomed(zoomed);
  }
  setSizeConstraints(min_size, max_size, is_resizable, is_maximizable) {
    return this.$.setSizeConstraints(min_size, max_size, is_resizable, is_maximizable);
  }
  setOpacity(opacity) {
    return this.$.setOpacity(opacity);
  }
  setWindowLevel(level) {
    return this.$.setWindowLevel(level);
  }
  setActivationIndependence(independence) {
    return this.$.setActivationIndependence(independence);
  }
  setAspectRatio(aspect_ratio, excluded_margin) {
    return this.$.setAspectRatio(aspect_ratio, excluded_margin);
  }
  setCALayerParams(ca_layer_params) {
    return this.$.setCALayerParams(ca_layer_params);
  }
  setWindowTitle(title) {
    return this.$.setWindowTitle(title);
  }
  setIgnoresMouseEvents(ignores_mouse_events) {
    return this.$.setIgnoresMouseEvents(ignores_mouse_events);
  }
  makeFirstResponder() {
    return this.$.makeFirstResponder();
  }
  sortSubviews(attached_subview_ids) {
    return this.$.sortSubviews(attached_subview_ids);
  }
  clearTouchBar() {
    return this.$.clearTouchBar();
  }
  updateTooltip() {
    return this.$.updateTooltip();
  }
  acquireCapture() {
    return this.$.acquireCapture();
  }
  releaseCapture() {
    return this.$.releaseCapture();
  }
  redispatchKeyEvent(native_event_data) {
    return this.$.redispatchKeyEvent(native_event_data);
  }
  setLocalEventMonitorEnabled(enabled) {
    return this.$.setLocalEventMonitorEnabled(enabled);
  }
  setCursor(cursor) {
    return this.$.setCursor(cursor);
  }
  enableImmersiveFullscreen(fullscreen_overlay_widget_id, tab_widget_id) {
    return this.$.enableImmersiveFullscreen(fullscreen_overlay_widget_id, tab_widget_id);
  }
  disableImmersiveFullscreen() {
    return this.$.disableImmersiveFullscreen();
  }
  updateToolbarVisibility(style) {
    return this.$.updateToolbarVisibility(style);
  }
  onTopContainerViewBoundsChanged(bounds) {
    return this.$.onTopContainerViewBoundsChanged(bounds);
  }
  immersiveFullscreenRevealLock() {
    return this.$.immersiveFullscreenRevealLock();
  }
  immersiveFullscreenRevealUnlock() {
    return this.$.immersiveFullscreenRevealUnlock();
  }
  setCanGoBack(can_go_back) {
    return this.$.setCanGoBack(can_go_back);
  }
  setCanGoForward(can_go_forward) {
    return this.$.setCanGoForward(can_go_forward);
  }
  displayContextMenu(menu, host, receiver) {
    return this.$.displayContextMenu(menu, host, receiver);
  }
  setAllowScreenshots(allow) {
    return this.$.setAllowScreenshots(allow);
  }
  setColorMode(color_mode) {
    return this.$.setColorMode(color_mode);
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('NativeWidgetNSWindow', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createWindow(params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec,
      null,
      [params],
      false);
  }

  setParent(parent_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec,
      null,
      [parent_id],
      false);
  }

  createSelectFileDialog(dialog) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec,
      null,
      [dialog],
      false);
  }

  showCertificateViewer(certificate) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec,
      null,
      [certificate],
      false);
  }

  stackAbove(sibling_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec,
      null,
      [sibling_id],
      false);
  }

  stackAtTop() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec,
      null,
      [],
      false);
  }

  showEmojiPanel() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec,
      null,
      [],
      false);
  }

  initWindow(params) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec,
      null,
      [params],
      false);
  }

  initCompositorView() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ResponseParamsSpec,
      [],
      false);
  }

  createContentView(ns_view_id, bounds, corner_radius) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec,
      null,
      [ns_view_id, bounds, corner_radius],
      false);
  }

  destroyContentView() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec,
      null,
      [],
      false);
  }

  closeWindow() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec,
      null,
      [],
      false);
  }

  closeWindowNow() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec,
      null,
      [],
      false);
  }

  setInitialBounds(new_bounds, minimum_content_size) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec,
      null,
      [new_bounds, minimum_content_size],
      false);
  }

  setBounds(new_bounds, minimum_content_size, maximum_content_size) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec,
      null,
      [new_bounds, minimum_content_size, maximum_content_size],
      false);
  }

  setSize(new_size, minimum_content_size) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec,
      null,
      [new_size, minimum_content_size],
      false);
  }

  setSizeAndCenter(content_size, minimum_content_size) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec,
      null,
      [content_size, minimum_content_size],
      false);
  }

  setVisibilityState(new_state) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec,
      null,
      [new_state],
      false);
  }

  setAnimationEnabled(animation_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec,
      null,
      [animation_enabled],
      false);
  }

  setTransitionsToAnimate(transitions) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec,
      null,
      [transitions],
      false);
  }

  setVisibleOnAllSpaces(always_visible) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec,
      null,
      [always_visible],
      false);
  }

  enterFullscreen(target_display_id) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec,
      null,
      [target_display_id],
      false);
  }

  exitFullscreen() {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec,
      null,
      [],
      false);
  }

  setCanAppearInExistingFullscreenSpaces(can_appear_in_existing_fullscreen_spaces) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec,
      null,
      [can_appear_in_existing_fullscreen_spaces],
      false);
  }

  setMiniaturized(miniaturized) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec,
      null,
      [miniaturized],
      false);
  }

  setZoomed(zoomed) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec,
      null,
      [zoomed],
      false);
  }

  setSizeConstraints(min_size, max_size, is_resizable, is_maximizable) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec,
      null,
      [min_size, max_size, is_resizable, is_maximizable],
      false);
  }

  setOpacity(opacity) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec,
      null,
      [opacity],
      false);
  }

  setWindowLevel(level) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec,
      null,
      [level],
      false);
  }

  setActivationIndependence(independence) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec,
      null,
      [independence],
      false);
  }

  setAspectRatio(aspect_ratio, excluded_margin) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec,
      null,
      [aspect_ratio, excluded_margin],
      false);
  }

  setCALayerParams(ca_layer_params) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec,
      null,
      [ca_layer_params],
      false);
  }

  setWindowTitle(title) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  setIgnoresMouseEvents(ignores_mouse_events) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec,
      null,
      [ignores_mouse_events],
      false);
  }

  makeFirstResponder() {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec,
      null,
      [],
      false);
  }

  sortSubviews(attached_subview_ids) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec,
      null,
      [attached_subview_ids],
      false);
  }

  clearTouchBar() {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec,
      null,
      [],
      false);
  }

  updateTooltip() {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec,
      null,
      [],
      false);
  }

  acquireCapture() {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec,
      null,
      [],
      false);
  }

  releaseCapture() {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec,
      null,
      [],
      false);
  }

  redispatchKeyEvent(native_event_data) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec,
      null,
      [native_event_data],
      false);
  }

  setLocalEventMonitorEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setCursor(cursor) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec,
      null,
      [cursor],
      false);
  }

  enableImmersiveFullscreen(fullscreen_overlay_widget_id, tab_widget_id) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec,
      null,
      [fullscreen_overlay_widget_id, tab_widget_id],
      false);
  }

  disableImmersiveFullscreen() {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec,
      null,
      [],
      false);
  }

  updateToolbarVisibility(style) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec,
      null,
      [style],
      false);
  }

  onTopContainerViewBoundsChanged(bounds) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec,
      null,
      [bounds],
      false);
  }

  immersiveFullscreenRevealLock() {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec,
      null,
      [],
      false);
  }

  immersiveFullscreenRevealUnlock() {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec,
      null,
      [],
      false);
  }

  setCanGoBack(can_go_back) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec,
      null,
      [can_go_back],
      false);
  }

  setCanGoForward(can_go_forward) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec,
      null,
      [can_go_forward],
      false);
  }

  displayContextMenu(menu, host, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec,
      null,
      [menu, host, receiver],
      false);
  }

  setAllowScreenshots(allow) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec,
      null,
      [allow],
      false);
  }

  setColorMode(color_mode) {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_ParamsSpec,
      null,
      [color_mode],
      false);
  }

};

remote_cocoa.mojom.NativeWidgetNSWindow.getRemote = function() {
  let remote = new remote_cocoa.mojom.NativeWidgetNSWindowRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.NativeWidgetNSWindow',
    'context');
  return remote.$;
};

remote_cocoa.mojom.NativeWidgetNSWindowReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('NativeWidgetNSWindow', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec);
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec);
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec);
             this.mapOrdinal(header.ordinal, 31);
             dispatchId = 31;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 32);
             dispatchId = 32;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec);
             this.mapOrdinal(header.ordinal, 33);
             dispatchId = 33;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 34);
             dispatchId = 34;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec);
             this.mapOrdinal(header.ordinal, 35);
             dispatchId = 35;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec);
             this.mapOrdinal(header.ordinal, 36);
             dispatchId = 36;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec);
             this.mapOrdinal(header.ordinal, 37);
             dispatchId = 37;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 38);
             dispatchId = 38;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec);
             this.mapOrdinal(header.ordinal, 39);
             dispatchId = 39;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 40);
             dispatchId = 40;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 41);
             dispatchId = 41;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec);
             this.mapOrdinal(header.ordinal, 42);
             dispatchId = 42;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec);
             this.mapOrdinal(header.ordinal, 43);
             dispatchId = 43;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec);
             this.mapOrdinal(header.ordinal, 44);
             dispatchId = 44;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec);
             this.mapOrdinal(header.ordinal, 45);
             dispatchId = 45;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 46);
             dispatchId = 46;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec);
             this.mapOrdinal(header.ordinal, 47);
             dispatchId = 47;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec);
             this.mapOrdinal(header.ordinal, 48);
             dispatchId = 48;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec);
             this.mapOrdinal(header.ordinal, 49);
             dispatchId = 49;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec);
             this.mapOrdinal(header.ordinal, 50);
             dispatchId = 50;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 51);
             dispatchId = 51;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec);
             this.mapOrdinal(header.ordinal, 52);
             dispatchId = 52;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 53);
             dispatchId = 53;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec.$.structSpec);
          const result = this.impl.createWindow(params.params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec.$.structSpec);
          const result = this.impl.setParent(params.parent_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec.$.structSpec);
          const result = this.impl.createSelectFileDialog(params.dialog);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec.$.structSpec);
          const result = this.impl.showCertificateViewer(params.certificate);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec.$.structSpec);
          const result = this.impl.stackAbove(params.sibling_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec.$.structSpec);
          const result = this.impl.stackAtTop();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec.$.structSpec);
          const result = this.impl.showEmojiPanel();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec.$.structSpec);
          const result = this.impl.initWindow(params.params);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec.$.structSpec);
          const result = this.impl.initCompositorView();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec.$.structSpec);
          const result = this.impl.createContentView(params.ns_view_id, params.bounds, params.corner_radius);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec.$.structSpec);
          const result = this.impl.destroyContentView();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec.$.structSpec);
          const result = this.impl.closeWindow();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec.$.structSpec);
          const result = this.impl.closeWindowNow();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec.$.structSpec);
          const result = this.impl.setInitialBounds(params.new_bounds, params.minimum_content_size);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec.$.structSpec);
          const result = this.impl.setBounds(params.new_bounds, params.minimum_content_size, params.maximum_content_size);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec.$.structSpec);
          const result = this.impl.setSize(params.new_size, params.minimum_content_size);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec.$.structSpec);
          const result = this.impl.setSizeAndCenter(params.content_size, params.minimum_content_size);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec.$.structSpec);
          const result = this.impl.setVisibilityState(params.new_state);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setAnimationEnabled(params.animation_enabled);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec.$.structSpec);
          const result = this.impl.setTransitionsToAnimate(params.transitions);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec.$.structSpec);
          const result = this.impl.setVisibleOnAllSpaces(params.always_visible);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec.$.structSpec);
          const result = this.impl.enterFullscreen(params.target_display_id);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec.$.structSpec);
          const result = this.impl.exitFullscreen();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec.$.structSpec);
          const result = this.impl.setCanAppearInExistingFullscreenSpaces(params.can_appear_in_existing_fullscreen_spaces);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec.$.structSpec);
          const result = this.impl.setMiniaturized(params.miniaturized);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec.$.structSpec);
          const result = this.impl.setZoomed(params.zoomed);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec.$.structSpec);
          const result = this.impl.setSizeConstraints(params.min_size, params.max_size, params.is_resizable, params.is_maximizable);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec.$.structSpec);
          const result = this.impl.setOpacity(params.opacity);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec.$.structSpec);
          const result = this.impl.setWindowLevel(params.level);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec.$.structSpec);
          const result = this.impl.setActivationIndependence(params.independence);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec.$.structSpec);
          const result = this.impl.setAspectRatio(params.aspect_ratio, params.excluded_margin);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec.$.structSpec);
          const result = this.impl.setCALayerParams(params.ca_layer_params);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec.$.structSpec);
          const result = this.impl.setWindowTitle(params.title);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec.$.structSpec);
          const result = this.impl.setIgnoresMouseEvents(params.ignores_mouse_events);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec.$.structSpec);
          const result = this.impl.makeFirstResponder();
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec.$.structSpec);
          const result = this.impl.sortSubviews(params.attached_subview_ids);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec.$.structSpec);
          const result = this.impl.clearTouchBar();
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec.$.structSpec);
          const result = this.impl.updateTooltip();
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec.$.structSpec);
          const result = this.impl.acquireCapture();
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec.$.structSpec);
          const result = this.impl.releaseCapture();
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec.$.structSpec);
          const result = this.impl.redispatchKeyEvent(params.native_event_data);
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setLocalEventMonitorEnabled(params.enabled);
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec.$.structSpec);
          const result = this.impl.setCursor(params.cursor);
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec.$.structSpec);
          const result = this.impl.enableImmersiveFullscreen(params.fullscreen_overlay_widget_id, params.tab_widget_id);
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec.$.structSpec);
          const result = this.impl.disableImmersiveFullscreen();
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec.$.structSpec);
          const result = this.impl.updateToolbarVisibility(params.style);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onTopContainerViewBoundsChanged(params.bounds);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec.$.structSpec);
          const result = this.impl.immersiveFullscreenRevealLock();
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec.$.structSpec);
          const result = this.impl.immersiveFullscreenRevealUnlock();
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec.$.structSpec);
          const result = this.impl.setCanGoBack(params.can_go_back);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec.$.structSpec);
          const result = this.impl.setCanGoForward(params.can_go_forward);
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec.$.structSpec);
          const result = this.impl.displayContextMenu(params.menu, params.host, params.receiver);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec.$.structSpec);
          const result = this.impl.setAllowScreenshots(params.allow);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_ParamsSpec.$.structSpec);
          const result = this.impl.setColorMode(params.color_mode);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowReceiver = remote_cocoa.mojom.NativeWidgetNSWindowReceiver;

remote_cocoa.mojom.NativeWidgetNSWindowPtr = remote_cocoa.mojom.NativeWidgetNSWindowRemote;
remote_cocoa.mojom.NativeWidgetNSWindowRequest = remote_cocoa.mojom.NativeWidgetNSWindowPendingReceiver;

