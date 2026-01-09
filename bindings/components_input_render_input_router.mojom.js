// Auto-generated MojoJS binding
// Source: chromium_src/components/input/render_input_router.mojom
// Module: input.mojom

'use strict';

// Module namespace
var input = input || {};
input.mojom = input.mojom || {};


// Struct: RenderInputRouterConfig
input.mojom.RenderInputRouterConfig = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: TouchTransferState
input.mojom.TouchTransferState = class {
  constructor(values = {}) {
    this.dip_scale = values.dip_scale !== undefined ? values.dip_scale : 0;
    this.to = values.to !== undefined ? values.to : null;
    this.false = values.false !== undefined ? values.false : false;
    this.down_event = values.down_event !== undefined ? values.down_event : null;
  }
};

// Interface: RenderInputRouterDelegate
input.mojom.RenderInputRouterDelegatePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'input.mojom.RenderInputRouterDelegate';
  }

  stateOnTouchTransfer(state) {
    // Method: StateOnTouchTransfer
    // Call: StateOnTouchTransfer(state)
  }

  forceEnableZoomStateChanged(force_enable_zoom, frame_sink_id) {
    // Method: ForceEnableZoomStateChanged
    // Call: ForceEnableZoomStateChanged(force_enable_zoom, frame_sink_id)
  }

  stopFlingingOnViz(frame_sink_id) {
    // Method: StopFlingingOnViz
    // Call: StopFlingingOnViz(frame_sink_id)
  }

  restartInputEventAckTimeoutIfNecessary(frame_sink_id) {
    // Method: RestartInputEventAckTimeoutIfNecessary
    // Call: RestartInputEventAckTimeoutIfNecessary(frame_sink_id)
  }

  notifyVisibilityChanged(frame_sink_id, is_hidden) {
    // Method: NotifyVisibilityChanged
    // Call: NotifyVisibilityChanged(frame_sink_id, is_hidden)
  }

  resetGestureDetection(root_widget_frame_sink_id) {
    // Method: ResetGestureDetection
    // Call: ResetGestureDetection(root_widget_frame_sink_id)
  }

};

input.mojom.RenderInputRouterDelegateRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RenderInputRouterDelegateClient
input.mojom.RenderInputRouterDelegateClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'input.mojom.RenderInputRouterDelegateClient';
  }

  notifyObserversOfInputEvent(event, dispatched_to_renderer) {
    // Method: NotifyObserversOfInputEvent
    // Call: NotifyObserversOfInputEvent(event, dispatched_to_renderer)
  }

  notifyObserversOfInputEventAcks(ack_source, ack_result, event) {
    // Method: NotifyObserversOfInputEventAcks
    // Call: NotifyObserversOfInputEventAcks(ack_source, ack_result, event)
  }

  onInvalidInputEventSource() {
    // Method: OnInvalidInputEventSource
    // Call: OnInvalidInputEventSource()
  }

  stateOnOverscrollTransfer(overscroll) {
    // Method: StateOnOverscrollTransfer
    // Call: StateOnOverscrollTransfer(overscroll)
  }

  rendererInputResponsivenessChanged(is_responsive, ack_timeout_ts) {
    // Method: RendererInputResponsivenessChanged
    // Call: RendererInputResponsivenessChanged(is_responsive, ack_timeout_ts)
  }

};

input.mojom.RenderInputRouterDelegateClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
