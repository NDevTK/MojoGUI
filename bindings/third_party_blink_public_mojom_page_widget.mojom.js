// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/widget.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};


// Enum: DeviceEmulationCacheBehavior
blink.mojom.mojom.DeviceEmulationCacheBehavior = {
  kClearCache: 0,
  kKeepCache: 1,
};
blink.mojom.mojom.DeviceEmulationCacheBehaviorSpec = { $: mojo.internal.Enum() };

// Struct: ProximateCharacterRangeBounds
blink.mojom.mojom.ProximateCharacterRangeBoundsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ProximateCharacterRangeBounds',
      packedSize: 24,
      fields: [
        { name: 'range', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'widget_bounds_in_dips', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.RectSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: StylusWritingFocusResult
blink.mojom.mojom.StylusWritingFocusResultSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.StylusWritingFocusResult',
      packedSize: 32,
      fields: [
        { name: 'focused_edit_bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'caret_bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'proximate_bounds', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ProximateCharacterRangeBoundsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: FrameWidget
blink.mojom.mojom.FrameWidget = {};

blink.mojom.mojom.FrameWidgetPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.FrameWidgetRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FrameWidget';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.FrameWidgetPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.FrameWidgetRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.FrameWidgetRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dragTargetDragEnter(drag_data, point_in_viewport, screen_point, operations_allowed, key_modifiers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec,
      blink.mojom.mojom.FrameWidget_DragTargetDragEnter_ResponseParamsSpec,
      [drag_data, point_in_viewport, screen_point, operations_allowed, key_modifiers]);
  }

  dragTargetDragOver(point_in_viewport, screen_point, operations_allowed, key_modifiers) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.FrameWidget_DragTargetDragOver_ParamsSpec,
      blink.mojom.mojom.FrameWidget_DragTargetDragOver_ResponseParamsSpec,
      [point_in_viewport, screen_point, operations_allowed, key_modifiers]);
  }

  dragTargetDragLeave(point_in_viewport, screen_point) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec,
      null,
      [point_in_viewport, screen_point]);
  }

  dragTargetDrop(drag_data, point_in_viewport, screen_point, key_modifiers) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.FrameWidget_DragTargetDrop_ParamsSpec,
      null,
      [drag_data, point_in_viewport, screen_point, key_modifiers]);
  }

  dragSourceEndedAt(point_in_viewport, screen_point, drag_operation) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec,
      null,
      [point_in_viewport, screen_point, drag_operation]);
  }

  dragSourceSystemDragEnded() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec,
      null,
      []);
  }

  onStartStylusWriting(focus_widget_rect_in_dips) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec,
      blink.mojom.mojom.FrameWidget_OnStartStylusWriting_ResponseParamsSpec,
      [focus_widget_rect_in_dips]);
  }

  passImeRenderWidgetHost(remote) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec,
      null,
      [remote]);
  }

  setBackgroundOpaque(opaque) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec,
      null,
      [opaque]);
  }

  setTextDirection(direction) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.mojom.FrameWidget_SetTextDirection_ParamsSpec,
      null,
      [direction]);
  }

  setActive(active) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.mojom.FrameWidget_SetActive_ParamsSpec,
      null,
      [active]);
  }

  setInheritedEffectiveTouchActionForSubFrame(touch_action) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec,
      null,
      [touch_action]);
  }

  updateRenderThrottlingStatusForSubFrame(is_throttled, subtree_throttled, display_locked) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec,
      null,
      [is_throttled, subtree_throttled, display_locked]);
  }

  setIsInertForSubFrame(inert) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec,
      null,
      [inert]);
  }

  getStringAtPoint(point_in_local_root) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.mojom.FrameWidget_GetStringAtPoint_ParamsSpec,
      blink.mojom.mojom.FrameWidget_GetStringAtPoint_ResponseParamsSpec,
      [point_in_local_root]);
  }

  enableDeviceEmulation(parameters, cache_behavior) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec,
      null,
      [parameters, cache_behavior]);
  }

  disableDeviceEmulation() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec,
      null,
      []);
  }

  bindWidgetCompositor(host) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec,
      null,
      [host]);
  }

  setViewportIntersection(intersection_state, visual_properties) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.mojom.FrameWidget_SetViewportIntersection_ParamsSpec,
      null,
      [intersection_state, visual_properties]);
  }

  notifyClearedDisplayedGraphics() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.FrameWidget.getRemote = function() {
  let remote = new blink.mojom.mojom.FrameWidgetRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FrameWidget',
    'context');
  return remote.$;
};

// ParamsSpec for DragTargetDragEnter
blink.mojom.mojom.FrameWidget_DragTargetDragEnter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragTargetDragEnter_Params',
      packedSize: 48,
      fields: [
        { name: 'drag_data', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DragDataSpec, nullable: false, minVersion: 0 },
        { name: 'point_in_viewport', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'screen_point', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'operations_allowed', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AllowedDragOperationsSpec, nullable: false, minVersion: 0 },
        { name: 'key_modifiers', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

blink.mojom.mojom.FrameWidget_DragTargetDragEnter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragTargetDragEnter_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'operation', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.DragOperationSpec, nullable: false, minVersion: 0 },
        { name: 'document_is_handling_drag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DragTargetDragOver
blink.mojom.mojom.FrameWidget_DragTargetDragOver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragTargetDragOver_Params',
      packedSize: 40,
      fields: [
        { name: 'point_in_viewport', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'screen_point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'operations_allowed', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AllowedDragOperationsSpec, nullable: false, minVersion: 0 },
        { name: 'key_modifiers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.mojom.FrameWidget_DragTargetDragOver_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragTargetDragOver_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'operation', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.DragOperationSpec, nullable: false, minVersion: 0 },
        { name: 'document_is_handling_drag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DragTargetDragLeave
blink.mojom.mojom.FrameWidget_DragTargetDragLeave_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragTargetDragLeave_Params',
      packedSize: 24,
      fields: [
        { name: 'point_in_viewport', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'screen_point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DragTargetDrop
blink.mojom.mojom.FrameWidget_DragTargetDrop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragTargetDrop_Params',
      packedSize: 40,
      fields: [
        { name: 'drag_data', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DragDataSpec, nullable: false, minVersion: 0 },
        { name: 'point_in_viewport', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'screen_point', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'key_modifiers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for DragSourceEndedAt
blink.mojom.mojom.FrameWidget_DragSourceEndedAt_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragSourceEndedAt_Params',
      packedSize: 32,
      fields: [
        { name: 'point_in_viewport', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'screen_point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'drag_operation', packedOffset: 16, packedBitOffset: 0, type: ui.mojom.DragOperationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for DragSourceSystemDragEnded
blink.mojom.mojom.FrameWidget_DragSourceSystemDragEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DragSourceSystemDragEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnStartStylusWriting
blink.mojom.mojom.FrameWidget_OnStartStylusWriting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.OnStartStylusWriting_Params',
      packedSize: 16,
      fields: [
        { name: 'focus_widget_rect_in_dips', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.FrameWidget_OnStartStylusWriting_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.OnStartStylusWriting_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'focus_result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.StylusWritingFocusResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PassImeRenderWidgetHost
blink.mojom.mojom.FrameWidget_PassImeRenderWidgetHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.PassImeRenderWidgetHost_Params',
      packedSize: 16,
      fields: [
        { name: 'remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBackgroundOpaque
blink.mojom.mojom.FrameWidget_SetBackgroundOpaque_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.SetBackgroundOpaque_Params',
      packedSize: 16,
      fields: [
        { name: 'opaque', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTextDirection
blink.mojom.mojom.FrameWidget_SetTextDirection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.SetTextDirection_Params',
      packedSize: 16,
      fields: [
        { name: 'direction', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TextDirectionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetActive
blink.mojom.mojom.FrameWidget_SetActive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.SetActive_Params',
      packedSize: 16,
      fields: [
        { name: 'active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetInheritedEffectiveTouchActionForSubFrame
blink.mojom.mojom.FrameWidget_SetInheritedEffectiveTouchActionForSubFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.SetInheritedEffectiveTouchActionForSubFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'touch_action', packedOffset: 0, packedBitOffset: 0, type: cc.mojom.TouchActionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateRenderThrottlingStatusForSubFrame
blink.mojom.mojom.FrameWidget_UpdateRenderThrottlingStatusForSubFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.UpdateRenderThrottlingStatusForSubFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'is_throttled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'subtree_throttled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'display_locked', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetIsInertForSubFrame
blink.mojom.mojom.FrameWidget_SetIsInertForSubFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.SetIsInertForSubFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'inert', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetStringAtPoint
blink.mojom.mojom.FrameWidget_GetStringAtPoint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.GetStringAtPoint_Params',
      packedSize: 16,
      fields: [
        { name: 'point_in_local_root', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.FrameWidget_GetStringAtPoint_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.GetStringAtPoint_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'string', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.AttributedStringSpec, nullable: true, minVersion: 0 },
        { name: 'baseline_point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EnableDeviceEmulation
blink.mojom.mojom.FrameWidget_EnableDeviceEmulation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.EnableDeviceEmulation_Params',
      packedSize: 24,
      fields: [
        { name: 'parameters', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DeviceEmulationParamsSpec, nullable: false, minVersion: 0 },
        { name: 'cache_behavior', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.DeviceEmulationCacheBehaviorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DisableDeviceEmulation
blink.mojom.mojom.FrameWidget_DisableDeviceEmulation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.DisableDeviceEmulation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for BindWidgetCompositor
blink.mojom.mojom.FrameWidget_BindWidgetCompositor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.BindWidgetCompositor_Params',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetViewportIntersection
blink.mojom.mojom.FrameWidget_SetViewportIntersection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.SetViewportIntersection_Params',
      packedSize: 24,
      fields: [
        { name: 'intersection_state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ViewportIntersectionStateSpec, nullable: false, minVersion: 0 },
        { name: 'visual_properties', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.VisualPropertiesSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for NotifyClearedDisplayedGraphics
blink.mojom.mojom.FrameWidget_NotifyClearedDisplayedGraphics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidget.NotifyClearedDisplayedGraphics_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.FrameWidgetPtr = blink.mojom.mojom.FrameWidgetRemote;
blink.mojom.mojom.FrameWidgetRequest = blink.mojom.mojom.FrameWidgetPendingReceiver;


// Interface: FrameWidgetHost
blink.mojom.mojom.FrameWidgetHost = {};

blink.mojom.mojom.FrameWidgetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.FrameWidgetHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FrameWidgetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.FrameWidgetHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.FrameWidgetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.FrameWidgetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  animateDoubleTapZoomInMainFrame(tap_point, rect_to_zoom) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec,
      null,
      [tap_point, rect_to_zoom]);
  }

  zoomToFindInPageRectInMainFrame(rect_to_zoom) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec,
      null,
      [rect_to_zoom]);
  }

  setHasTouchEventConsumers(touch_event_consumers) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec,
      null,
      [touch_event_consumers]);
  }

  intrinsicSizingInfoChanged(sizing_info) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec,
      null,
      [sizing_info]);
  }

  autoscrollStart(position) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec,
      null,
      [position]);
  }

  autoscrollFling(velocity) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec,
      null,
      [velocity]);
  }

  autoscrollEnd() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.FrameWidgetHost.getRemote = function() {
  let remote = new blink.mojom.mojom.FrameWidgetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FrameWidgetHost',
    'context');
  return remote.$;
};

// ParamsSpec for AnimateDoubleTapZoomInMainFrame
blink.mojom.mojom.FrameWidgetHost_AnimateDoubleTapZoomInMainFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.AnimateDoubleTapZoomInMainFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'tap_point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'rect_to_zoom', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ZoomToFindInPageRectInMainFrame
blink.mojom.mojom.FrameWidgetHost_ZoomToFindInPageRectInMainFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.ZoomToFindInPageRectInMainFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'rect_to_zoom', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetHasTouchEventConsumers
blink.mojom.mojom.FrameWidgetHost_SetHasTouchEventConsumers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.SetHasTouchEventConsumers_Params',
      packedSize: 16,
      fields: [
        { name: 'touch_event_consumers', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.TouchEventConsumersSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IntrinsicSizingInfoChanged
blink.mojom.mojom.FrameWidgetHost_IntrinsicSizingInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.IntrinsicSizingInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'sizing_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IntrinsicSizingInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AutoscrollStart
blink.mojom.mojom.FrameWidgetHost_AutoscrollStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.AutoscrollStart_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AutoscrollFling
blink.mojom.mojom.FrameWidgetHost_AutoscrollFling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.AutoscrollFling_Params',
      packedSize: 16,
      fields: [
        { name: 'velocity', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.Vector2dFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AutoscrollEnd
blink.mojom.mojom.FrameWidgetHost_AutoscrollEnd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetHost.AutoscrollEnd_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.FrameWidgetHostPtr = blink.mojom.mojom.FrameWidgetHostRemote;
blink.mojom.mojom.FrameWidgetHostRequest = blink.mojom.mojom.FrameWidgetHostPendingReceiver;


// Interface: PopupWidgetHost
blink.mojom.mojom.PopupWidgetHost = {};

blink.mojom.mojom.PopupWidgetHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.PopupWidgetHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PopupWidgetHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.PopupWidgetHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.PopupWidgetHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.PopupWidgetHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestClosePopup() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec,
      null,
      []);
  }

  showPopup(initial_rect, anchor_rect) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.PopupWidgetHost_ShowPopup_ParamsSpec,
      null,
      [initial_rect, anchor_rect]);
  }

  setPopupBounds(bounds) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec,
      null,
      [bounds]);
  }

};

blink.mojom.mojom.PopupWidgetHost.getRemote = function() {
  let remote = new blink.mojom.mojom.PopupWidgetHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PopupWidgetHost',
    'context');
  return remote.$;
};

// ParamsSpec for RequestClosePopup
blink.mojom.mojom.PopupWidgetHost_RequestClosePopup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PopupWidgetHost.RequestClosePopup_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ShowPopup
blink.mojom.mojom.PopupWidgetHost_ShowPopup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PopupWidgetHost.ShowPopup_Params',
      packedSize: 24,
      fields: [
        { name: 'initial_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'anchor_rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetPopupBounds
blink.mojom.mojom.PopupWidgetHost_SetPopupBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PopupWidgetHost.SetPopupBounds_Params',
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.PopupWidgetHostPtr = blink.mojom.mojom.PopupWidgetHostRemote;
blink.mojom.mojom.PopupWidgetHostRequest = blink.mojom.mojom.PopupWidgetHostPendingReceiver;

