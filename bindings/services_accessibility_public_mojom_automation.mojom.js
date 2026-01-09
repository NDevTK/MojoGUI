// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/automation.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Interface: Automation
ax.mojom.AutomationPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.Automation';
  }

  dispatchTreeDestroyedEvent(tree_id) {
    // Method: DispatchTreeDestroyedEvent
    // Call: DispatchTreeDestroyedEvent(tree_id)
  }

  client(process) {
    // Method: client
    // Call: client(process)
  }

  performAction(cases) {
    // Method: performAction
    // Call: performAction(cases)
  }

  dispatchActionResult(data, result) {
    // Method: DispatchActionResult
    // Call: DispatchActionResult(data, result)
  }

  dispatchAccessibilityEvents(tree_id, updates, mouse_location, events) {
    // Method: DispatchAccessibilityEvents
    // Call: DispatchAccessibilityEvents(tree_id, updates, mouse_location, events)
  }

  dispatchAccessibilityLocationChange(tree_id, node_id, bounds) {
    // Method: DispatchAccessibilityLocationChange
    // Call: DispatchAccessibilityLocationChange(tree_id, node_id, bounds)
  }

  dispatchAccessibilityScrollChange(tree_id, node_id, scroll_x, scroll_y) {
    // Method: DispatchAccessibilityScrollChange
    // Call: DispatchAccessibilityScrollChange(tree_id, node_id, scroll_x, scroll_y)
  }

  dispatchGetTextLocationResult(data, rect) {
    // Method: DispatchGetTextLocationResult
    // Call: DispatchGetTextLocationResult(data, rect)
  }

};

ax.mojom.AutomationRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
