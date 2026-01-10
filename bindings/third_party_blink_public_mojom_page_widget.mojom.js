// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/widget.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var cc = cc || {};
var mojo_base = mojo_base || {};
var viz = viz || {};
var skia = skia || {};
var ui = ui || {};
var gfx = gfx || {};

blink.mojom.DeviceEmulationCacheBehaviorSpec = { $: mojo.internal.Enum() };
blink.mojom.ProximateCharacterRangeBoundsSpec = { $: {} };
blink.mojom.StylusWritingFocusResultSpec = { $: {} };
blink.mojom.FrameWidget = {};
blink.mojom.FrameWidget.$interfaceName = 'blink.mojom.FrameWidget';
blink.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragTargetDragEnter_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragTargetDragOver_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragTargetDragOver_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragTargetDrop_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragTargetDrop_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragSourceEndedAt_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_OnStartStylusWriting_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_SetTextDirection_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_SetActive_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_GetStringAtPoint_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_GetStringAtPoint_ResponseParamsSpec = { $: {} };
blink.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_SetViewportIntersection_ParamsSpec = { $: {} };
blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost = {};
blink.mojom.FrameWidgetHost.$interfaceName = 'blink.mojom.FrameWidgetHost';
blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec = { $: {} };
blink.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec = { $: {} };
blink.mojom.PopupWidgetHost = {};
blink.mojom.PopupWidgetHost.$interfaceName = 'blink.mojom.PopupWidgetHost';
blink.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec = { $: {} };
blink.mojom.PopupWidgetHost_ShowPopup_ParamsSpec = { $: {} };
blink.mojom.PopupWidgetHost_ShowPopup_ResponseParamsSpec = { $: {} };
blink.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec = { $: {} };
blink.mojom.PopupWidgetHost_SetPopupBounds_ResponseParamsSpec = { $: {} };

// Enum: DeviceEmulationCacheBehavior
blink.mojom.DeviceEmulationCacheBehavior = {
  kClearCache: 0,
  kKeepCache: 1,
};

// Struct: ProximateCharacterRangeBounds
mojo.internal.Struct(
    blink.mojom.ProximateCharacterRangeBoundsSpec, 'blink.mojom.ProximateCharacterRangeBounds', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('widget_bounds_in_dips', 8, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StylusWritingFocusResult
mojo.internal.Struct(
    blink.mojom.StylusWritingFocusResultSpec, 'blink.mojom.StylusWritingFocusResult', [
      mojo.internal.StructField('focused_edit_bounds', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('caret_bounds', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('proximate_bounds', 16, 0, blink.mojom.ProximateCharacterRangeBoundsSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FrameWidget
mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec, 'blink.mojom.FrameWidget_DragTargetDragEnter_Params', [
      mojo.internal.StructField('drag_data', 0, 0, blink.mojom.DragDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('point_in_viewport', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_point', 16, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('operations_allowed', 24, 0, blink.mojom.AllowedDragOperationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_modifiers', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDragEnter_ResponseParamsSpec, 'blink.mojom.FrameWidget_DragTargetDragEnter_ResponseParams', [
      mojo.internal.StructField('operation', 0, 0, ui.mojom.DragOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_is_handling_drag', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDragOver_ParamsSpec, 'blink.mojom.FrameWidget_DragTargetDragOver_Params', [
      mojo.internal.StructField('point_in_viewport', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_point', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('operations_allowed', 16, 0, blink.mojom.AllowedDragOperationsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_modifiers', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDragOver_ResponseParamsSpec, 'blink.mojom.FrameWidget_DragTargetDragOver_ResponseParams', [
      mojo.internal.StructField('operation', 0, 0, ui.mojom.DragOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('document_is_handling_drag', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec, 'blink.mojom.FrameWidget_DragTargetDragLeave_Params', [
      mojo.internal.StructField('point_in_viewport', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_point', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDrop_ParamsSpec, 'blink.mojom.FrameWidget_DragTargetDrop_Params', [
      mojo.internal.StructField('drag_data', 0, 0, blink.mojom.DragDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('point_in_viewport', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_point', 16, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_modifiers', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragTargetDrop_ResponseParamsSpec, 'blink.mojom.FrameWidget_DragTargetDrop_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec, 'blink.mojom.FrameWidget_DragSourceEndedAt_Params', [
      mojo.internal.StructField('point_in_viewport', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('screen_point', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('drag_operation', 16, 0, ui.mojom.DragOperationSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragSourceEndedAt_ResponseParamsSpec, 'blink.mojom.FrameWidget_DragSourceEndedAt_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec, 'blink.mojom.FrameWidget_DragSourceSystemDragEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec, 'blink.mojom.FrameWidget_OnStartStylusWriting_Params', [
      mojo.internal.StructField('focus_widget_rect_in_dips', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_OnStartStylusWriting_ResponseParamsSpec, 'blink.mojom.FrameWidget_OnStartStylusWriting_ResponseParams', [
      mojo.internal.StructField('focus_result', 0, 0, blink.mojom.StylusWritingFocusResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec, 'blink.mojom.FrameWidget_PassImeRenderWidgetHost_Params', [
      mojo.internal.StructField('remote', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.ImeRenderWidgetHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec, 'blink.mojom.FrameWidget_SetBackgroundOpaque_Params', [
      mojo.internal.StructField('opaque', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_SetTextDirection_ParamsSpec, 'blink.mojom.FrameWidget_SetTextDirection_Params', [
      mojo.internal.StructField('direction', 0, 0, mojo_base.mojom.TextDirectionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_SetActive_ParamsSpec, 'blink.mojom.FrameWidget_SetActive_Params', [
      mojo.internal.StructField('active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec, 'blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_Params', [
      mojo.internal.StructField('touch_action', 0, 0, cc.mojom.TouchActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec, 'blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_Params', [
      mojo.internal.StructField('is_throttled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('subtree_throttled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('display_locked', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec, 'blink.mojom.FrameWidget_SetIsInertForSubFrame_Params', [
      mojo.internal.StructField('inert', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_GetStringAtPoint_ParamsSpec, 'blink.mojom.FrameWidget_GetStringAtPoint_Params', [
      mojo.internal.StructField('point_in_local_root', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_GetStringAtPoint_ResponseParamsSpec, 'blink.mojom.FrameWidget_GetStringAtPoint_ResponseParams', [
      mojo.internal.StructField('string', 0, 0, ui.mojom.AttributedStringSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('baseline_point', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec, 'blink.mojom.FrameWidget_EnableDeviceEmulation_Params', [
      mojo.internal.StructField('parameters', 0, 0, blink.mojom.DeviceEmulationParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cache_behavior', 8, 0, blink.mojom.DeviceEmulationCacheBehaviorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec, 'blink.mojom.FrameWidget_DisableDeviceEmulation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec, 'blink.mojom.FrameWidget_BindWidgetCompositor_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.WidgetCompositorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_SetViewportIntersection_ParamsSpec, 'blink.mojom.FrameWidget_SetViewportIntersection_Params', [
      mojo.internal.StructField('intersection_state', 0, 0, blink.mojom.ViewportIntersectionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visual_properties', 8, 0, blink.mojom.VisualPropertiesSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec, 'blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_Params', [
    ],
    [[0, 8]]);

blink.mojom.FrameWidgetPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FrameWidgetRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FrameWidget';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FrameWidgetPendingReceiver,
      handle);
    this.$ = new blink.mojom.FrameWidgetRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FrameWidgetRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dragTargetDragEnter(drag_data, point_in_viewport, screen_point, operations_allowed, key_modifiers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec,
      blink.mojom.FrameWidget_DragTargetDragEnter_ResponseParamsSpec,
      [drag_data, point_in_viewport, screen_point, operations_allowed, key_modifiers],
      false);
  }

  dragTargetDragOver(point_in_viewport, screen_point, operations_allowed, key_modifiers) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FrameWidget_DragTargetDragOver_ParamsSpec,
      blink.mojom.FrameWidget_DragTargetDragOver_ResponseParamsSpec,
      [point_in_viewport, screen_point, operations_allowed, key_modifiers],
      false);
  }

  dragTargetDragLeave(point_in_viewport, screen_point) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec,
      null,
      [point_in_viewport, screen_point],
      false);
  }

  dragTargetDrop(drag_data, point_in_viewport, screen_point, key_modifiers) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FrameWidget_DragTargetDrop_ParamsSpec,
      blink.mojom.FrameWidget_DragTargetDrop_ResponseParamsSpec,
      [drag_data, point_in_viewport, screen_point, key_modifiers],
      false);
  }

  dragSourceEndedAt(point_in_viewport, screen_point, drag_operation) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec,
      blink.mojom.FrameWidget_DragSourceEndedAt_ResponseParamsSpec,
      [point_in_viewport, screen_point, drag_operation],
      false);
  }

  dragSourceSystemDragEnded() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec,
      null,
      [],
      false);
  }

  onStartStylusWriting(focus_widget_rect_in_dips) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec,
      blink.mojom.FrameWidget_OnStartStylusWriting_ResponseParamsSpec,
      [focus_widget_rect_in_dips],
      false);
  }

  passImeRenderWidgetHost(remote) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec,
      null,
      [remote],
      false);
  }

  setBackgroundOpaque(opaque) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec,
      null,
      [opaque],
      false);
  }

  setTextDirection(direction) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.FrameWidget_SetTextDirection_ParamsSpec,
      null,
      [direction],
      false);
  }

  setActive(active) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.FrameWidget_SetActive_ParamsSpec,
      null,
      [active],
      false);
  }

  setInheritedEffectiveTouchActionForSubFrame(touch_action) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec,
      null,
      [touch_action],
      false);
  }

  updateRenderThrottlingStatusForSubFrame(is_throttled, subtree_throttled, display_locked) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec,
      null,
      [is_throttled, subtree_throttled, display_locked],
      false);
  }

  setIsInertForSubFrame(inert) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec,
      null,
      [inert],
      false);
  }

  getStringAtPoint(point_in_local_root) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.FrameWidget_GetStringAtPoint_ParamsSpec,
      blink.mojom.FrameWidget_GetStringAtPoint_ResponseParamsSpec,
      [point_in_local_root],
      false);
  }

  enableDeviceEmulation(parameters, cache_behavior) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec,
      null,
      [parameters, cache_behavior],
      false);
  }

  disableDeviceEmulation() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec,
      null,
      [],
      false);
  }

  bindWidgetCompositor(host) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec,
      null,
      [host],
      false);
  }

  setViewportIntersection(intersection_state, visual_properties) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.FrameWidget_SetViewportIntersection_ParamsSpec,
      null,
      [intersection_state, visual_properties],
      false);
  }

  notifyClearedDisplayedGraphics() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.FrameWidget.getRemote = function() {
  let remote = new blink.mojom.FrameWidgetRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FrameWidget',
    'context');
  return remote.$;
};

blink.mojom.FrameWidgetReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DragTargetDragEnter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragTargetDragEnter (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DragTargetDragOver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_DragTargetDragOver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragTargetDragOver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DragTargetDragLeave
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragTargetDragLeave (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DragTargetDrop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_DragTargetDrop_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragTargetDrop (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DragSourceEndedAt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragSourceEndedAt (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DragSourceSystemDragEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DragSourceSystemDragEnded (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnStartStylusWriting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStartStylusWriting (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: PassImeRenderWidgetHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PassImeRenderWidgetHost (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetBackgroundOpaque
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetBackgroundOpaque (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetTextDirection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_SetTextDirection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTextDirection (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetActive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_SetActive_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetActive (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetInheritedEffectiveTouchActionForSubFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetInheritedEffectiveTouchActionForSubFrame (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: UpdateRenderThrottlingStatusForSubFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRenderThrottlingStatusForSubFrame (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetIsInertForSubFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsInertForSubFrame (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetStringAtPoint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_GetStringAtPoint_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStringAtPoint (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: EnableDeviceEmulation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnableDeviceEmulation (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: DisableDeviceEmulation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisableDeviceEmulation (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: BindWidgetCompositor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindWidgetCompositor (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SetViewportIntersection
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_SetViewportIntersection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetViewportIntersection (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: NotifyClearedDisplayedGraphics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyClearedDisplayedGraphics (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dragTargetDragEnter');
          const result = this.impl.dragTargetDragEnter(params.drag_data, params.point_in_viewport, params.screen_point, params.operations_allowed, params.key_modifiers);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidget_DragTargetDragEnter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_DragTargetDragOver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dragTargetDragOver');
          const result = this.impl.dragTargetDragOver(params.point_in_viewport, params.screen_point, params.operations_allowed, params.key_modifiers);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidget_DragTargetDragOver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dragTargetDragLeave');
          const result = this.impl.dragTargetDragLeave(params.point_in_viewport, params.screen_point);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_DragTargetDrop_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dragTargetDrop');
          const result = this.impl.dragTargetDrop(params.drag_data, params.point_in_viewport, params.screen_point, params.key_modifiers);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidget_DragTargetDrop_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dragSourceEndedAt');
          const result = this.impl.dragSourceEndedAt(params.point_in_viewport, params.screen_point, params.drag_operation);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidget_DragSourceEndedAt_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dragSourceSystemDragEnded');
          const result = this.impl.dragSourceSystemDragEnded();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onStartStylusWriting');
          const result = this.impl.onStartStylusWriting(params.focus_widget_rect_in_dips);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidget_OnStartStylusWriting_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.passImeRenderWidgetHost');
          const result = this.impl.passImeRenderWidgetHost(params.remote);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setBackgroundOpaque');
          const result = this.impl.setBackgroundOpaque(params.opaque);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_SetTextDirection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTextDirection');
          const result = this.impl.setTextDirection(params.direction);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_SetActive_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setActive');
          const result = this.impl.setActive(params.active);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setInheritedEffectiveTouchActionForSubFrame');
          const result = this.impl.setInheritedEffectiveTouchActionForSubFrame(params.touch_action);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateRenderThrottlingStatusForSubFrame');
          const result = this.impl.updateRenderThrottlingStatusForSubFrame(params.is_throttled, params.subtree_throttled, params.display_locked);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setIsInertForSubFrame');
          const result = this.impl.setIsInertForSubFrame(params.inert);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_GetStringAtPoint_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getStringAtPoint');
          const result = this.impl.getStringAtPoint(params.point_in_local_root);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.FrameWidget_GetStringAtPoint_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.enableDeviceEmulation');
          const result = this.impl.enableDeviceEmulation(params.parameters, params.cache_behavior);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.disableDeviceEmulation');
          const result = this.impl.disableDeviceEmulation();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindWidgetCompositor');
          const result = this.impl.bindWidgetCompositor(params.host);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_SetViewportIntersection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setViewportIntersection');
          const result = this.impl.setViewportIntersection(params.intersection_state, params.visual_properties);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyClearedDisplayedGraphics');
          const result = this.impl.notifyClearedDisplayedGraphics();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.FrameWidgetReceiver = blink.mojom.FrameWidgetReceiver;

blink.mojom.FrameWidgetPtr = blink.mojom.FrameWidgetRemote;
blink.mojom.FrameWidgetRequest = blink.mojom.FrameWidgetPendingReceiver;


// Interface: FrameWidgetHost
mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec, 'blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_Params', [
      mojo.internal.StructField('tap_point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rect_to_zoom', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec, 'blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_Params', [
      mojo.internal.StructField('rect_to_zoom', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec, 'blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_Params', [
      mojo.internal.StructField('touch_event_consumers', 0, 0, blink.mojom.TouchEventConsumersSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec, 'blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_Params', [
      mojo.internal.StructField('sizing_info', 0, 0, blink.mojom.IntrinsicSizingInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec, 'blink.mojom.FrameWidgetHost_AutoscrollStart_Params', [
      mojo.internal.StructField('position', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec, 'blink.mojom.FrameWidgetHost_AutoscrollFling_Params', [
      mojo.internal.StructField('velocity', 0, 0, gfx.mojom.Vector2dFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec, 'blink.mojom.FrameWidgetHost_AutoscrollEnd_Params', [
    ],
    [[0, 8]]);

blink.mojom.FrameWidgetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FrameWidgetHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FrameWidgetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FrameWidgetHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.FrameWidgetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FrameWidgetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  animateDoubleTapZoomInMainFrame(tap_point, rect_to_zoom) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec,
      null,
      [tap_point, rect_to_zoom],
      false);
  }

  zoomToFindInPageRectInMainFrame(rect_to_zoom) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec,
      null,
      [rect_to_zoom],
      false);
  }

  setHasTouchEventConsumers(touch_event_consumers) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec,
      null,
      [touch_event_consumers],
      false);
  }

  intrinsicSizingInfoChanged(sizing_info) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec,
      null,
      [sizing_info],
      false);
  }

  autoscrollStart(position) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec,
      null,
      [position],
      false);
  }

  autoscrollFling(velocity) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec,
      null,
      [velocity],
      false);
  }

  autoscrollEnd() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.FrameWidgetHost.getRemote = function() {
  let remote = new blink.mojom.FrameWidgetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FrameWidgetHost',
    'context');
  return remote.$;
};

blink.mojom.FrameWidgetHostReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AnimateDoubleTapZoomInMainFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AnimateDoubleTapZoomInMainFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ZoomToFindInPageRectInMainFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ZoomToFindInPageRectInMainFrame (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetHasTouchEventConsumers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHasTouchEventConsumers (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: IntrinsicSizingInfoChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IntrinsicSizingInfoChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: AutoscrollStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AutoscrollStart (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: AutoscrollFling
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AutoscrollFling (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: AutoscrollEnd
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AutoscrollEnd (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.animateDoubleTapZoomInMainFrame');
          const result = this.impl.animateDoubleTapZoomInMainFrame(params.tap_point, params.rect_to_zoom);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.zoomToFindInPageRectInMainFrame');
          const result = this.impl.zoomToFindInPageRectInMainFrame(params.rect_to_zoom);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHasTouchEventConsumers');
          const result = this.impl.setHasTouchEventConsumers(params.touch_event_consumers);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.intrinsicSizingInfoChanged');
          const result = this.impl.intrinsicSizingInfoChanged(params.sizing_info);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.autoscrollStart');
          const result = this.impl.autoscrollStart(params.position);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.autoscrollFling');
          const result = this.impl.autoscrollFling(params.velocity);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.autoscrollEnd');
          const result = this.impl.autoscrollEnd();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.FrameWidgetHostReceiver = blink.mojom.FrameWidgetHostReceiver;

blink.mojom.FrameWidgetHostPtr = blink.mojom.FrameWidgetHostRemote;
blink.mojom.FrameWidgetHostRequest = blink.mojom.FrameWidgetHostPendingReceiver;


// Interface: PopupWidgetHost
mojo.internal.Struct(
    blink.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec, 'blink.mojom.PopupWidgetHost_RequestClosePopup_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PopupWidgetHost_ShowPopup_ParamsSpec, 'blink.mojom.PopupWidgetHost_ShowPopup_Params', [
      mojo.internal.StructField('initial_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('anchor_rect', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.PopupWidgetHost_ShowPopup_ResponseParamsSpec, 'blink.mojom.PopupWidgetHost_ShowPopup_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec, 'blink.mojom.PopupWidgetHost_SetPopupBounds_Params', [
      mojo.internal.StructField('bounds', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PopupWidgetHost_SetPopupBounds_ResponseParamsSpec, 'blink.mojom.PopupWidgetHost_SetPopupBounds_ResponseParams', [
    ],
    [[0, 8]]);

blink.mojom.PopupWidgetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PopupWidgetHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PopupWidgetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PopupWidgetHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.PopupWidgetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PopupWidgetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestClosePopup() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec,
      null,
      [],
      false);
  }

  showPopup(initial_rect, anchor_rect) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PopupWidgetHost_ShowPopup_ParamsSpec,
      blink.mojom.PopupWidgetHost_ShowPopup_ResponseParamsSpec,
      [initial_rect, anchor_rect],
      false);
  }

  setPopupBounds(bounds) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec,
      blink.mojom.PopupWidgetHost_SetPopupBounds_ResponseParamsSpec,
      [bounds],
      false);
  }

};

blink.mojom.PopupWidgetHost.getRemote = function() {
  let remote = new blink.mojom.PopupWidgetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PopupWidgetHost',
    'context');
  return remote.$;
};

blink.mojom.PopupWidgetHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RequestClosePopup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestClosePopup (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ShowPopup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PopupWidgetHost_ShowPopup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowPopup (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetPopupBounds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPopupBounds (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestClosePopup');
          const result = this.impl.requestClosePopup();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PopupWidgetHost_ShowPopup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showPopup');
          const result = this.impl.showPopup(params.initial_rect, params.anchor_rect);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PopupWidgetHost_ShowPopup_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPopupBounds');
          const result = this.impl.setPopupBounds(params.bounds);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PopupWidgetHost_SetPopupBounds_ResponseParamsSpec);
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

blink.mojom.PopupWidgetHostReceiver = blink.mojom.PopupWidgetHostReceiver;

blink.mojom.PopupWidgetHostPtr = blink.mojom.PopupWidgetHostRemote;
blink.mojom.PopupWidgetHostRequest = blink.mojom.PopupWidgetHostPendingReceiver;

