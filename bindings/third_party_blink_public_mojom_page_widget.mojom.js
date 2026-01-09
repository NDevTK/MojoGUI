// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/widget.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: DeviceEmulationCacheBehavior
blink.mojom.DeviceEmulationCacheBehavior = {
  which: 0,
  but: 1,
};

// Struct: ProximateCharacterRangeBounds
blink.mojom.ProximateCharacterRangeBounds = class {
  constructor(values = {}) {
    this.widget_bounds_in_dips = values.widget_bounds_in_dips !== undefined ? values.widget_bounds_in_dips : [];
  }
};

// Struct: StylusWritingFocusResult
blink.mojom.StylusWritingFocusResult = class {
  constructor(values = {}) {
    this.caret_bounds = values.caret_bounds !== undefined ? values.caret_bounds : null;
    this.proximate_bounds = values.proximate_bounds !== undefined ? values.proximate_bounds : null;
  }
};

// Interface: FrameWidget
blink.mojom.FrameWidgetPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FrameWidget';
  }

  dragTargetDragEnter(drag_data, point_in_viewport, screen_point, operations_allowed, key_modifiers) {
    // Method: DragTargetDragEnter
    return new Promise((resolve) => {
      // Call: DragTargetDragEnter(drag_data, point_in_viewport, screen_point, operations_allowed, key_modifiers)
      resolve({});
    });
  }

  dragTargetDragEnter() {
    // Method: DragTargetDragEnter
    // Call: DragTargetDragEnter()
  }

  dragTargetDragOver(point_in_viewport, screen_point, operations_allowed, key_modifiers) {
    // Method: DragTargetDragOver
    return new Promise((resolve) => {
      // Call: DragTargetDragOver(point_in_viewport, screen_point, operations_allowed, key_modifiers)
      resolve({});
    });
  }

  dragTargetDragLeave(point_in_viewport, screen_point) {
    // Method: DragTargetDragLeave
    // Call: DragTargetDragLeave(point_in_viewport, screen_point)
  }

  dragTargetDrop(drag_data, point_in_viewport, screen_point, key_modifiers) {
    // Method: DragTargetDrop
    // Call: DragTargetDrop(drag_data, point_in_viewport, screen_point, key_modifiers)
  }

  dragSourceEndedAt(point_in_viewport, screen_point, drag_operation) {
    // Method: DragSourceEndedAt
    // Call: DragSourceEndedAt(point_in_viewport, screen_point, drag_operation)
  }

  dragSourceSystemDragEnded() {
    // Method: DragSourceSystemDragEnded
    // Call: DragSourceSystemDragEnded()
  }

  onStartStylusWriting(focus_widget_rect_in_dips) {
    // Method: OnStartStylusWriting
    return new Promise((resolve) => {
      // Call: OnStartStylusWriting(focus_widget_rect_in_dips)
      resolve({});
    });
  }

  passImeRenderWidgetHost(remote) {
    // Method: PassImeRenderWidgetHost
    // Call: PassImeRenderWidgetHost(remote)
  }

  setBackgroundOpaque(opaque) {
    // Method: SetBackgroundOpaque
    // Call: SetBackgroundOpaque(opaque)
  }

  field(any) {
    // Method: field
    // Call: field(any)
  }

  setTextDirection(direction) {
    // Method: SetTextDirection
    // Call: SetTextDirection(direction)
  }

  setActive(active) {
    // Method: SetActive
    // Call: SetActive(active)
  }

  setInheritedEffectiveTouchActionForSubFrame(touch_action) {
    // Method: SetInheritedEffectiveTouchActionForSubFrame
    // Call: SetInheritedEffectiveTouchActionForSubFrame(touch_action)
  }

  updateRenderThrottlingStatusForSubFrame(is_throttled, subtree_throttled, display_locked) {
    // Method: UpdateRenderThrottlingStatusForSubFrame
    // Call: UpdateRenderThrottlingStatusForSubFrame(is_throttled, subtree_throttled, display_locked)
  }

  setIsInertForSubFrame(inert) {
    // Method: SetIsInertForSubFrame
    // Call: SetIsInertForSubFrame(inert)
  }

  getStringAtPoint(point_in_local_root) {
    // Method: GetStringAtPoint
    return new Promise((resolve) => {
      // Call: GetStringAtPoint(point_in_local_root)
      resolve({});
    });
  }

  enableDeviceEmulation(parameters, cache_behavior) {
    // Method: EnableDeviceEmulation
    // Call: EnableDeviceEmulation(parameters, cache_behavior)
  }

  disableDeviceEmulation() {
    // Method: DisableDeviceEmulation
    // Call: DisableDeviceEmulation()
  }

  bindWidgetCompositor(host) {
    // Method: BindWidgetCompositor
    // Call: BindWidgetCompositor(host)
  }

  setViewportIntersection(intersection_state, visual_properties) {
    // Method: SetViewportIntersection
    // Call: SetViewportIntersection(intersection_state, visual_properties)
  }

  notifyClearedDisplayedGraphics() {
    // Method: NotifyClearedDisplayedGraphics
    // Call: NotifyClearedDisplayedGraphics()
  }

};

blink.mojom.FrameWidgetRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrameWidgetHost
blink.mojom.FrameWidgetHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FrameWidgetHost';
  }

  animateDoubleTapZoomInMainFrame(tap_point, rect_to_zoom) {
    // Method: AnimateDoubleTapZoomInMainFrame
    // Call: AnimateDoubleTapZoomInMainFrame(tap_point, rect_to_zoom)
  }

  zoomToFindInPageRectInMainFrame(rect_to_zoom) {
    // Method: ZoomToFindInPageRectInMainFrame
    // Call: ZoomToFindInPageRectInMainFrame(rect_to_zoom)
  }

  setHasTouchEventConsumers(touch_event_consumers) {
    // Method: SetHasTouchEventConsumers
    // Call: SetHasTouchEventConsumers(touch_event_consumers)
  }

  intrinsicSizingInfoChanged(sizing_info) {
    // Method: IntrinsicSizingInfoChanged
    // Call: IntrinsicSizingInfoChanged(sizing_info)
  }

  autoscrollStart(position) {
    // Method: AutoscrollStart
    // Call: AutoscrollStart(position)
  }

  autoscrollFling(velocity) {
    // Method: AutoscrollFling
    // Call: AutoscrollFling(velocity)
  }

  autoscrollEnd() {
    // Method: AutoscrollEnd
    // Call: AutoscrollEnd()
  }

};

blink.mojom.FrameWidgetHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PopupWidgetHost
blink.mojom.PopupWidgetHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PopupWidgetHost';
  }

  requestClosePopup() {
    // Method: RequestClosePopup
    // Call: RequestClosePopup()
  }

  showPopup(initial_rect, anchor_rect) {
    // Method: ShowPopup
    // Call: ShowPopup(initial_rect, anchor_rect)
  }

  setPopupBounds(bounds) {
    // Method: SetPopupBounds
    // Call: SetPopupBounds(bounds)
  }

};

blink.mojom.PopupWidgetHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
