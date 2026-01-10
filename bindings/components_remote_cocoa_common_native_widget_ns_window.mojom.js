// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/native_widget_ns_window.mojom
// Module: remote_cocoa.mojom

'use strict';

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
};

remote_cocoa.mojom.NativeWidgetNSWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWindow(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec,
      null,
      [params],
      false);
  }

  setParent(parent_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec,
      null,
      [parent_id],
      false);
  }

  createSelectFileDialog(dialog) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec,
      null,
      [dialog],
      false);
  }

  showCertificateViewer(certificate) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec,
      null,
      [certificate],
      false);
  }

  stackAbove(sibling_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec,
      null,
      [sibling_id],
      false);
  }

  stackAtTop() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec,
      null,
      [],
      false);
  }

  showEmojiPanel() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec,
      null,
      [],
      false);
  }

  initWindow(params) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec,
      null,
      [params],
      false);
  }

  initCompositorView() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec,
      remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ResponseParamsSpec,
      [],
      false);
  }

  createContentView(ns_view_id, bounds, corner_radius) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec,
      null,
      [ns_view_id, bounds, corner_radius],
      false);
  }

  destroyContentView() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec,
      null,
      [],
      false);
  }

  closeWindow() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec,
      null,
      [],
      false);
  }

  closeWindowNow() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec,
      null,
      [],
      false);
  }

  setInitialBounds(new_bounds, minimum_content_size) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec,
      null,
      [new_bounds, minimum_content_size],
      false);
  }

  setBounds(new_bounds, minimum_content_size, maximum_content_size) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec,
      null,
      [new_bounds, minimum_content_size, maximum_content_size],
      false);
  }

  setSize(new_size, minimum_content_size) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec,
      null,
      [new_size, minimum_content_size],
      false);
  }

  setSizeAndCenter(content_size, minimum_content_size) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec,
      null,
      [content_size, minimum_content_size],
      false);
  }

  setVisibilityState(new_state) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec,
      null,
      [new_state],
      false);
  }

  setAnimationEnabled(animation_enabled) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec,
      null,
      [animation_enabled],
      false);
  }

  setTransitionsToAnimate(transitions) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec,
      null,
      [transitions],
      false);
  }

  setVisibleOnAllSpaces(always_visible) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec,
      null,
      [always_visible],
      false);
  }

  enterFullscreen(target_display_id) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec,
      null,
      [target_display_id],
      false);
  }

  exitFullscreen() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec,
      null,
      [],
      false);
  }

  setCanAppearInExistingFullscreenSpaces(can_appear_in_existing_fullscreen_spaces) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec,
      null,
      [can_appear_in_existing_fullscreen_spaces],
      false);
  }

  setMiniaturized(miniaturized) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec,
      null,
      [miniaturized],
      false);
  }

  setZoomed(zoomed) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec,
      null,
      [zoomed],
      false);
  }

  setSizeConstraints(min_size, max_size, is_resizable, is_maximizable) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec,
      null,
      [min_size, max_size, is_resizable, is_maximizable],
      false);
  }

  setOpacity(opacity) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec,
      null,
      [opacity],
      false);
  }

  setWindowLevel(level) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec,
      null,
      [level],
      false);
  }

  setActivationIndependence(independence) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec,
      null,
      [independence],
      false);
  }

  setAspectRatio(aspect_ratio, excluded_margin) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec,
      null,
      [aspect_ratio, excluded_margin],
      false);
  }

  setCALayerParams(ca_layer_params) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec,
      null,
      [ca_layer_params],
      false);
  }

  setWindowTitle(title) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec,
      null,
      [title],
      false);
  }

  setIgnoresMouseEvents(ignores_mouse_events) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec,
      null,
      [ignores_mouse_events],
      false);
  }

  makeFirstResponder() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec,
      null,
      [],
      false);
  }

  sortSubviews(attached_subview_ids) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec,
      null,
      [attached_subview_ids],
      false);
  }

  clearTouchBar() {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec,
      null,
      [],
      false);
  }

  updateTooltip() {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec,
      null,
      [],
      false);
  }

  acquireCapture() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec,
      null,
      [],
      false);
  }

  releaseCapture() {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec,
      null,
      [],
      false);
  }

  redispatchKeyEvent(native_event_data) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec,
      null,
      [native_event_data],
      false);
  }

  setLocalEventMonitorEnabled(enabled) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  setCursor(cursor) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec,
      null,
      [cursor],
      false);
  }

  enableImmersiveFullscreen(fullscreen_overlay_widget_id, tab_widget_id) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec,
      null,
      [fullscreen_overlay_widget_id, tab_widget_id],
      false);
  }

  disableImmersiveFullscreen() {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec,
      null,
      [],
      false);
  }

  updateToolbarVisibility(style) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec,
      null,
      [style],
      false);
  }

  onTopContainerViewBoundsChanged(bounds) {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec,
      null,
      [bounds],
      false);
  }

  immersiveFullscreenRevealLock() {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec,
      null,
      [],
      false);
  }

  immersiveFullscreenRevealUnlock() {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec,
      null,
      [],
      false);
  }

  setCanGoBack(can_go_back) {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec,
      null,
      [can_go_back],
      false);
  }

  setCanGoForward(can_go_forward) {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec,
      null,
      [can_go_forward],
      false);
  }

  displayContextMenu(menu, host, receiver) {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec,
      null,
      [menu, host, receiver],
      false);
  }

  setAllowScreenshots(allow) {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec,
      null,
      [allow],
      false);
  }

  setColorMode(color_mode) {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
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
    this.ordinalMap.set(51, 51); // Default ordinal 51 -> Index 51
    this.ordinalMap.set(52, 52); // Default ordinal 52 -> Index 52
    this.ordinalMap.set(53, 53); // Default ordinal 53 -> Index 53
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createWindow');
          const result = this.impl.createWindow(params.params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setParent');
          const result = this.impl.setParent(params.parent_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createSelectFileDialog');
          const result = this.impl.createSelectFileDialog(params.dialog);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.showCertificateViewer');
          const result = this.impl.showCertificateViewer(params.certificate);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.stackAbove');
          const result = this.impl.stackAbove(params.sibling_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.stackAtTop');
          const result = this.impl.stackAtTop();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.showEmojiPanel');
          const result = this.impl.showEmojiPanel();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.initWindow');
          const result = this.impl.initWindow(params.params);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.initCompositorView');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.createContentView');
          const result = this.impl.createContentView(params.ns_view_id, params.bounds, params.corner_radius);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.destroyContentView');
          const result = this.impl.destroyContentView();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.closeWindow');
          const result = this.impl.closeWindow();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.closeWindowNow');
          const result = this.impl.closeWindowNow();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setInitialBounds');
          const result = this.impl.setInitialBounds(params.new_bounds, params.minimum_content_size);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setBounds');
          const result = this.impl.setBounds(params.new_bounds, params.minimum_content_size, params.maximum_content_size);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setSize');
          const result = this.impl.setSize(params.new_size, params.minimum_content_size);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setSizeAndCenter');
          const result = this.impl.setSizeAndCenter(params.content_size, params.minimum_content_size);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setVisibilityState');
          const result = this.impl.setVisibilityState(params.new_state);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setAnimationEnabled');
          const result = this.impl.setAnimationEnabled(params.animation_enabled);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setTransitionsToAnimate');
          const result = this.impl.setTransitionsToAnimate(params.transitions);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setVisibleOnAllSpaces');
          const result = this.impl.setVisibleOnAllSpaces(params.always_visible);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.enterFullscreen');
          const result = this.impl.enterFullscreen(params.target_display_id);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.exitFullscreen');
          const result = this.impl.exitFullscreen();
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setCanAppearInExistingFullscreenSpaces');
          const result = this.impl.setCanAppearInExistingFullscreenSpaces(params.can_appear_in_existing_fullscreen_spaces);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setMiniaturized');
          const result = this.impl.setMiniaturized(params.miniaturized);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setZoomed');
          const result = this.impl.setZoomed(params.zoomed);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setSizeConstraints');
          const result = this.impl.setSizeConstraints(params.min_size, params.max_size, params.is_resizable, params.is_maximizable);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setOpacity');
          const result = this.impl.setOpacity(params.opacity);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setWindowLevel');
          const result = this.impl.setWindowLevel(params.level);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setActivationIndependence');
          const result = this.impl.setActivationIndependence(params.independence);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setAspectRatio');
          const result = this.impl.setAspectRatio(params.aspect_ratio, params.excluded_margin);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setCALayerParams');
          const result = this.impl.setCALayerParams(params.ca_layer_params);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setWindowTitle');
          const result = this.impl.setWindowTitle(params.title);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setIgnoresMouseEvents');
          const result = this.impl.setIgnoresMouseEvents(params.ignores_mouse_events);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.makeFirstResponder');
          const result = this.impl.makeFirstResponder();
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.sortSubviews');
          const result = this.impl.sortSubviews(params.attached_subview_ids);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.clearTouchBar');
          const result = this.impl.clearTouchBar();
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.updateTooltip');
          const result = this.impl.updateTooltip();
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.acquireCapture');
          const result = this.impl.acquireCapture();
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.releaseCapture');
          const result = this.impl.releaseCapture();
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.redispatchKeyEvent');
          const result = this.impl.redispatchKeyEvent(params.native_event_data);
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setLocalEventMonitorEnabled');
          const result = this.impl.setLocalEventMonitorEnabled(params.enabled);
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setCursor');
          const result = this.impl.setCursor(params.cursor);
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.enableImmersiveFullscreen');
          const result = this.impl.enableImmersiveFullscreen(params.fullscreen_overlay_widget_id, params.tab_widget_id);
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.disableImmersiveFullscreen');
          const result = this.impl.disableImmersiveFullscreen();
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.updateToolbarVisibility');
          const result = this.impl.updateToolbarVisibility(params.style);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onTopContainerViewBoundsChanged');
          const result = this.impl.onTopContainerViewBoundsChanged(params.bounds);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.immersiveFullscreenRevealLock');
          const result = this.impl.immersiveFullscreenRevealLock();
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.immersiveFullscreenRevealUnlock');
          const result = this.impl.immersiveFullscreenRevealUnlock();
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setCanGoBack');
          const result = this.impl.setCanGoBack(params.can_go_back);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setCanGoForward');
          const result = this.impl.setCanGoForward(params.can_go_forward);
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.displayContextMenu');
          const result = this.impl.displayContextMenu(params.menu, params.host, params.receiver);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setAllowScreenshots');
          const result = this.impl.setAllowScreenshots(params.allow);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setColorMode');
          const result = this.impl.setColorMode(params.color_mode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowReceiver = remote_cocoa.mojom.NativeWidgetNSWindowReceiver;

remote_cocoa.mojom.NativeWidgetNSWindowPtr = remote_cocoa.mojom.NativeWidgetNSWindowRemote;
remote_cocoa.mojom.NativeWidgetNSWindowRequest = remote_cocoa.mojom.NativeWidgetNSWindowPendingReceiver;

