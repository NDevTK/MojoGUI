// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/preloading/anchor_element_interaction_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: AnchorElementPointerData
blink.mojom.AnchorElementPointerData = class {
  constructor(values = {}) {
    this.mouse_acceleration = values.mouse_acceleration !== undefined ? values.mouse_acceleration : 0;
  }
};

// Interface: AnchorElementInteractionHost
blink.mojom.AnchorElementInteractionHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AnchorElementInteractionHost';
  }

  onPointerDown(target) {
    // Method: OnPointerDown
    // Call: OnPointerDown(target)
  }

  onPointerHoverEager(target, mouse_data) {
    // Method: OnPointerHoverEager
    // Call: OnPointerHoverEager(target, mouse_data)
  }

  onPointerHoverModerate(target, mouse_data) {
    // Method: OnPointerHoverModerate
    // Call: OnPointerHoverModerate(target, mouse_data)
  }

  onModerateViewportHeuristicTriggered(target) {
    // Method: OnModerateViewportHeuristicTriggered
    // Call: OnModerateViewportHeuristicTriggered(target)
  }

  onEagerViewportHeuristicTriggered(targets) {
    // Method: OnEagerViewportHeuristicTriggered
    // Call: OnEagerViewportHeuristicTriggered(targets)
  }

};

blink.mojom.AnchorElementInteractionHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
