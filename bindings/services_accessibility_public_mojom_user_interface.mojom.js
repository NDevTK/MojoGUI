// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/user_interface.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Enum: FocusType
ax.mojom.FocusType = {
  kGlow: 0,
  kSolid: 1,
  kDashed: 2,
};

// Enum: FocusRingStackingOrder
ax.mojom.FocusRingStackingOrder = {
  kAboveAccessibilityBubbles: 0,
  kBelowAccessibilityBubbles: 1,
};

// Struct: FocusRingInfo
ax.mojom.FocusRingInfo = class {
  constructor(values = {}) {
    this.color = values.color !== undefined ? values.color : [];
    this.secondary_color = values.secondary_color !== undefined ? values.secondary_color : null;
    this.stacking_order = values.stacking_order !== undefined ? values.stacking_order : null;
    this.id = values.id !== undefined ? values.id : "";
  }
};

// Interface: UserInterface
ax.mojom.UserInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.UserInterface';
  }

  darkenScreen(darken) {
    // Method: DarkenScreen
    // Call: DarkenScreen(darken)
  }

  openSettingsSubpage(subpage) {
    // Method: OpenSettingsSubpage
    // Call: OpenSettingsSubpage(subpage)
  }

  showConfirmationDialog(title, description, cancelName) {
    // Method: ShowConfirmationDialog
    return new Promise((resolve) => {
      // Call: ShowConfirmationDialog(title, description, cancelName)
      resolve({});
    });
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  setFocusRings(focus_rings, at_type) {
    // Method: SetFocusRings
    // Call: SetFocusRings(focus_rings, at_type)
  }

  setHighlights(rects, color) {
    // Method: SetHighlights
    // Call: SetHighlights(rects, color)
  }

  setVirtualKeyboardVisible(is_visible) {
    // Method: SetVirtualKeyboardVisible
    // Call: SetVirtualKeyboardVisible(is_visible)
  }

};

ax.mojom.UserInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
