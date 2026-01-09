// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/js/tracked_element/tracked_element.mojom
// Module: tracked_element.mojom

'use strict';

// Module namespace
var tracked_element = tracked_element || {};
tracked_element.mojom = tracked_element.mojom || {};


// Interface: TrackedElementHandler
tracked_element.mojom.TrackedElementHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'tracked_element.mojom.TrackedElementHandler';
  }

  trackedElementVisibilityChanged(native_identifier, visible, rect) {
    // Method: TrackedElementVisibilityChanged
    // Call: TrackedElementVisibilityChanged(native_identifier, visible, rect)
  }

  trackedElementActivated(native_identifier) {
    // Method: TrackedElementActivated
    // Call: TrackedElementActivated(native_identifier)
  }

  trackedElementCustomEvent(native_identifier, custom_event_name) {
    // Method: TrackedElementCustomEvent
    // Call: TrackedElementCustomEvent(native_identifier, custom_event_name)
  }

};

tracked_element.mojom.TrackedElementHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
