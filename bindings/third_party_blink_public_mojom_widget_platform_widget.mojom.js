// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/widget/platform_widget.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: WidgetCompositor
blink.mojom.WidgetCompositorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WidgetCompositor';
  }

  visualStateRequest() {
    // Method: VisualStateRequest
    // Call: VisualStateRequest()
  }

};

blink.mojom.WidgetCompositorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: WidgetHost
blink.mojom.WidgetHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.WidgetHost';
  }

  setCursor(cursor) {
    // Method: SetCursor
    // Call: SetCursor(cursor)
  }

  updateTooltipUnderCursor(tooltip_text, text_direction_hint) {
    // Method: UpdateTooltipUnderCursor
    // Call: UpdateTooltipUnderCursor(tooltip_text, text_direction_hint)
  }

  updateTooltipFromKeyboard(tooltip_text, text_direction_hint, bounds) {
    // Method: UpdateTooltipFromKeyboard
    // Call: UpdateTooltipFromKeyboard(tooltip_text, text_direction_hint, bounds)
  }

  clearKeyboardTriggeredTooltip() {
    // Method: ClearKeyboardTriggeredTooltip
    // Call: ClearKeyboardTriggeredTooltip()
  }

  textInputStateChanged(state) {
    // Method: TextInputStateChanged
    // Call: TextInputStateChanged(state)
  }

  selectionBoundsChanged(anchor_rect, anchor_dir, focus_rect, focus_dir, bounding_box_rect, is_anchor_first) {
    // Method: SelectionBoundsChanged
    // Call: SelectionBoundsChanged(anchor_rect, anchor_dir, focus_rect, focus_dir, bounding_box_rect, is_anchor_first)
  }

  createFrameSink(compositor_frame_sink_receiver, compositor_frame_sink_client, render_input_router_client) {
    // Method: CreateFrameSink
    // Call: CreateFrameSink(compositor_frame_sink_receiver, compositor_frame_sink_client, render_input_router_client)
  }

  registerRenderFrameMetadataObserver(render_frame_metadata_observer_client_receiver, render_frame_metadata_observer) {
    // Method: RegisterRenderFrameMetadataObserver
    // Call: RegisterRenderFrameMetadataObserver(render_frame_metadata_observer_client_receiver, render_frame_metadata_observer)
  }

};

blink.mojom.WidgetHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Widget
blink.mojom.WidgetPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.Widget';
  }

  forceRedraw() {
    // Method: ForceRedraw
    // Call: ForceRedraw()
  }

  updateVisualProperties(visual_properties) {
    // Method: UpdateVisualProperties
    // Call: UpdateVisualProperties(visual_properties)
  }

  updateScreenRects(widget_screen_rect, window_screen_rect) {
    // Method: UpdateScreenRects
    // Call: UpdateScreenRects(widget_screen_rect, window_screen_rect)
  }

  wasHidden() {
    // Method: WasHidden
    // Call: WasHidden()
  }

  wasShown(was_evicted, record_tab_switch_time_request) {
    // Method: WasShown
    // Call: WasShown(was_evicted, record_tab_switch_time_request)
  }

  requestSuccessfulPresentationTimeForNextFrame(visible_time_request) {
    // Method: RequestSuccessfulPresentationTimeForNextFrame
    // Call: RequestSuccessfulPresentationTimeForNextFrame(visible_time_request)
  }

  cancelSuccessfulPresentationTimeRequest() {
    // Method: CancelSuccessfulPresentationTimeRequest
    // Call: CancelSuccessfulPresentationTimeRequest()
  }

  setupBrowserRenderInputRouterConnections(browser_client) {
    // Method: SetupBrowserRenderInputRouterConnections
    // Call: SetupBrowserRenderInputRouterConnections(browser_client)
  }

};

blink.mojom.WidgetRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RenderInputRouterClient
blink.mojom.RenderInputRouterClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RenderInputRouterClient';
  }

  getWidgetInputHandler(request, host, from_viz) {
    // Method: GetWidgetInputHandler
    // Call: GetWidgetInputHandler(request, host, from_viz)
  }

  showContextMenu(source_type, location) {
    // Method: ShowContextMenu
    // Call: ShowContextMenu(source_type, location)
  }

  bindInputTargetClient(host) {
    // Method: BindInputTargetClient
    // Call: BindInputTargetClient(host)
  }

};

blink.mojom.RenderInputRouterClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
