// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/user_input.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Enum: SyntheticMouseEventButton
ax.mojom.SyntheticMouseEventButton = {
};

// Struct: SyntheticKeyEvent
ax.mojom.SyntheticKeyEvent = class {
  constructor(values = {}) {
    this.flags = values.flags !== undefined ? values.flags : 0;
  }
};

// Struct: SyntheticMouseEvent
ax.mojom.SyntheticMouseEvent = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
    this.touch_accessibility = values.touch_accessibility !== undefined ? values.touch_accessibility : 0;
  }
};

// Interface: UserInput
ax.mojom.UserInputPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.UserInput';
  }

  sendSyntheticKeyEventForShortcutOrNavigation(key_event) {
    // Method: SendSyntheticKeyEventForShortcutOrNavigation
    // Call: SendSyntheticKeyEventForShortcutOrNavigation(key_event)
  }

  sendSyntheticMouseEvent(mouse_event) {
    // Method: SendSyntheticMouseEvent
    // Call: SendSyntheticMouseEvent(mouse_event)
  }

};

ax.mojom.UserInputRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
