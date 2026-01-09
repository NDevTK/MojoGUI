// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/widget.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: DeviceEmulationCacheBehavior
blink.mojom.DeviceEmulationCacheBehavior = {
  kClearCache: 0,
  kKeepCache: 1,
};

// Interface: FrameWidget
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
      blink.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec.$,
      blink.mojom.FrameWidget_DragTargetDragEnter_ResponseParamsSpec.$,
      [drag_data, point_in_viewport, screen_point, operations_allowed, key_modifiers]);
  }

  dragTargetDragOver(point_in_viewport, screen_point, operations_allowed, key_modifiers) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FrameWidget_DragTargetDragOver_ParamsSpec.$,
      blink.mojom.FrameWidget_DragTargetDragOver_ResponseParamsSpec.$,
      [point_in_viewport, screen_point, operations_allowed, key_modifiers]);
  }

  dragTargetDragLeave(point_in_viewport, screen_point) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec.$,
      null,
      [point_in_viewport, screen_point]);
  }

  dragTargetDrop(drag_data, point_in_viewport, screen_point, key_modifiers) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FrameWidget_DragTargetDrop_ParamsSpec.$,
      null,
      [drag_data, point_in_viewport, screen_point, key_modifiers]);
  }

  dragSourceEndedAt(point_in_viewport, screen_point, drag_operation) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec.$,
      null,
      [point_in_viewport, screen_point, drag_operation]);
  }

  dragSourceSystemDragEnded() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec.$,
      null,
      []);
  }

  onStartStylusWriting(focus_widget_rect_in_dips) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec.$,
      blink.mojom.FrameWidget_OnStartStylusWriting_ResponseParamsSpec.$,
      [focus_widget_rect_in_dips]);
  }

  passImeRenderWidgetHost(remote) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec.$,
      null,
      [remote]);
  }

  setBackgroundOpaque(opaque) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec.$,
      null,
      [opaque]);
  }

  setTextDirection(direction) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.FrameWidget_SetTextDirection_ParamsSpec.$,
      null,
      [direction]);
  }

  setActive(active) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.FrameWidget_SetActive_ParamsSpec.$,
      null,
      [active]);
  }

  setInheritedEffectiveTouchActionForSubFrame(touch_action) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec.$,
      null,
      [touch_action]);
  }

  updateRenderThrottlingStatusForSubFrame(is_throttled, subtree_throttled, display_locked) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec.$,
      null,
      [is_throttled, subtree_throttled, display_locked]);
  }

  setIsInertForSubFrame(inert) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec.$,
      null,
      [inert]);
  }

  getStringAtPoint(point_in_local_root) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.FrameWidget_GetStringAtPoint_ParamsSpec.$,
      blink.mojom.FrameWidget_GetStringAtPoint_ResponseParamsSpec.$,
      [point_in_local_root]);
  }

  enableDeviceEmulation(parameters, cache_behavior) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec.$,
      null,
      [parameters, cache_behavior]);
  }

  disableDeviceEmulation() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec.$,
      null,
      []);
  }

  bindWidgetCompositor(host) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec.$,
      null,
      [host]);
  }

  setViewportIntersection(intersection_state, visual_properties) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.FrameWidget_SetViewportIntersection_ParamsSpec.$,
      null,
      [intersection_state, visual_properties]);
  }

  notifyClearedDisplayedGraphics() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for DragTargetDragEnter
blink.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragTargetDragEnter_Params',
      packedSize: 48,
      fields: [
        { name: 'drag_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'point_in_viewport', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'screen_point', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'operations_allowed', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'key_modifiers', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FrameWidget_DragTargetDragEnter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragTargetDragEnter_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'operation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'document_is_handling_drag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DragTargetDragOver
blink.mojom.FrameWidget_DragTargetDragOver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragTargetDragOver_Params',
      packedSize: 40,
      fields: [
        { name: 'point_in_viewport', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'screen_point', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'operations_allowed', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'key_modifiers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FrameWidget_DragTargetDragOver_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragTargetDragOver_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'operation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'document_is_handling_drag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DragTargetDragLeave
blink.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragTargetDragLeave_Params',
      packedSize: 24,
      fields: [
        { name: 'point_in_viewport', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'screen_point', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DragTargetDrop
blink.mojom.FrameWidget_DragTargetDrop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragTargetDrop_Params',
      packedSize: 40,
      fields: [
        { name: 'drag_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'point_in_viewport', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'screen_point', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'key_modifiers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DragSourceEndedAt
blink.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragSourceEndedAt_Params',
      packedSize: 32,
      fields: [
        { name: 'point_in_viewport', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'screen_point', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'drag_operation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DragSourceSystemDragEnded
blink.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragSourceSystemDragEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStartStylusWriting
blink.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.OnStartStylusWriting_Params',
      packedSize: 16,
      fields: [
        { name: 'focus_widget_rect_in_dips', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FrameWidget_OnStartStylusWriting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.OnStartStylusWriting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'focus_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PassImeRenderWidgetHost
blink.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.PassImeRenderWidgetHost_Params',
      packedSize: 16,
      fields: [
        { name: 'remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetBackgroundOpaque
blink.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.SetBackgroundOpaque_Params',
      packedSize: 16,
      fields: [
        { name: 'opaque', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTextDirection
blink.mojom.FrameWidget_SetTextDirection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.SetTextDirection_Params',
      packedSize: 16,
      fields: [
        { name: 'direction', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetActive
blink.mojom.FrameWidget_SetActive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.SetActive_Params',
      packedSize: 16,
      fields: [
        { name: 'active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetInheritedEffectiveTouchActionForSubFrame
blink.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.SetInheritedEffectiveTouchActionForSubFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'touch_action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateRenderThrottlingStatusForSubFrame
blink.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.UpdateRenderThrottlingStatusForSubFrame_Params',
      packedSize: 32,
      fields: [
        { name: 'is_throttled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'subtree_throttled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'display_locked', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetIsInertForSubFrame
blink.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.SetIsInertForSubFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'inert', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetStringAtPoint
blink.mojom.FrameWidget_GetStringAtPoint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.GetStringAtPoint_Params',
      packedSize: 16,
      fields: [
        { name: 'point_in_local_root', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FrameWidget_GetStringAtPoint_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.GetStringAtPoint_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'string', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'baseline_point', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EnableDeviceEmulation
blink.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.EnableDeviceEmulation_Params',
      packedSize: 24,
      fields: [
        { name: 'parameters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'cache_behavior', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DisableDeviceEmulation
blink.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DisableDeviceEmulation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindWidgetCompositor
blink.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.BindWidgetCompositor_Params',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetViewportIntersection
blink.mojom.FrameWidget_SetViewportIntersection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.SetViewportIntersection_Params',
      packedSize: 24,
      fields: [
        { name: 'intersection_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'visual_properties', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyClearedDisplayedGraphics
blink.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.NotifyClearedDisplayedGraphics_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FrameWidgetPtr = blink.mojom.FrameWidgetRemote;
blink.mojom.FrameWidgetRequest = blink.mojom.FrameWidgetPendingReceiver;


// Interface: FrameWidgetHost
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
      blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec.$,
      null,
      [tap_point, rect_to_zoom]);
  }

  zoomToFindInPageRectInMainFrame(rect_to_zoom) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec.$,
      null,
      [rect_to_zoom]);
  }

  setHasTouchEventConsumers(touch_event_consumers) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec.$,
      null,
      [touch_event_consumers]);
  }

  intrinsicSizingInfoChanged(sizing_info) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec.$,
      null,
      [sizing_info]);
  }

  autoscrollStart(position) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec.$,
      null,
      [position]);
  }

  autoscrollFling(velocity) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec.$,
      null,
      [velocity]);
  }

  autoscrollEnd() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for AnimateDoubleTapZoomInMainFrame
blink.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.AnimateDoubleTapZoomInMainFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'tap_point', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'rect_to_zoom', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ZoomToFindInPageRectInMainFrame
blink.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.ZoomToFindInPageRectInMainFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'rect_to_zoom', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetHasTouchEventConsumers
blink.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.SetHasTouchEventConsumers_Params',
      packedSize: 16,
      fields: [
        { name: 'touch_event_consumers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IntrinsicSizingInfoChanged
blink.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.IntrinsicSizingInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'sizing_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AutoscrollStart
blink.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.AutoscrollStart_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AutoscrollFling
blink.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.AutoscrollFling_Params',
      packedSize: 16,
      fields: [
        { name: 'velocity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AutoscrollEnd
blink.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.AutoscrollEnd_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FrameWidgetHostPtr = blink.mojom.FrameWidgetHostRemote;
blink.mojom.FrameWidgetHostRequest = blink.mojom.FrameWidgetHostPendingReceiver;


// Interface: PopupWidgetHost
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
      blink.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec.$,
      null,
      []);
  }

  showPopup(initial_rect, anchor_rect) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PopupWidgetHost_ShowPopup_ParamsSpec.$,
      null,
      [initial_rect, anchor_rect]);
  }

  setPopupBounds(bounds) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec.$,
      null,
      [bounds]);
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

// ParamsSpec for RequestClosePopup
blink.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PopupWidgetHost.RequestClosePopup_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowPopup
blink.mojom.PopupWidgetHost_ShowPopup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PopupWidgetHost.ShowPopup_Params',
      packedSize: 24,
      fields: [
        { name: 'initial_rect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'anchor_rect', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPopupBounds
blink.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PopupWidgetHost.SetPopupBounds_Params',
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PopupWidgetHostPtr = blink.mojom.PopupWidgetHostRemote;
blink.mojom.PopupWidgetHostRequest = blink.mojom.PopupWidgetHostPendingReceiver;

