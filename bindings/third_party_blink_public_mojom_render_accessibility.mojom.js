// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/render_accessibility.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: HitTestResponse
blink.mojom.HitTestResponse = class {
  constructor(values = {}) {
    this.stitched_child_tree_id = values.stitched_child_tree_id !== undefined ? values.stitched_child_tree_id : null;
    this.hit_frame_token = values.hit_frame_token !== undefined ? values.hit_frame_token : null;
    this.for = values.for !== undefined ? values.for : null;
    this.hit_node_id = values.hit_node_id !== undefined ? values.hit_node_id : 0;
  }
};

// Interface: RenderAccessibilityHost
blink.mojom.RenderAccessibilityHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RenderAccessibilityHost';
  }

  handleAXEvents(events_and_updates, location_and_scroll_updates, reset_token) {
    // Method: HandleAXEvents
    // Call: HandleAXEvents(events_and_updates, location_and_scroll_updates, reset_token)
  }

  handleAXLocationChanges(changes, reset_token) {
    // Method: HandleAXLocationChanges
    // Call: HandleAXLocationChanges(changes, reset_token)
  }

};

blink.mojom.RenderAccessibilityHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RenderAccessibility
blink.mojom.RenderAccessibilityPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RenderAccessibility';
  }

  setMode(ax_mode, reset_token) {
    // Method: SetMode
    // Call: SetMode(ax_mode, reset_token)
  }

  fatalError() {
    // Method: FatalError
    // Call: FatalError()
  }

  hitTest(point, event_to_fire, request_id) {
    // Method: HitTest
    return new Promise((resolve) => {
      // Call: HitTest(point, event_to_fire, request_id)
      resolve({});
    });
  }

  performAction(action_data) {
    // Method: PerformAction
    // Call: PerformAction(action_data)
  }

  reset(reset_token) {
    // Method: Reset
    // Call: Reset(reset_token)
  }

};

blink.mojom.RenderAccessibilityRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
