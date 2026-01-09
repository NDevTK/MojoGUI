// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/help_bubble/help_bubble.mojom
// Module: help_bubble.mojom

'use strict';

// Module namespace
var help_bubble = help_bubble || {};
help_bubble.mojom = help_bubble.mojom || {};


// Enum: HelpBubbleArrowPosition
help_bubble.mojom.HelpBubbleArrowPosition = {
  TOP_LEFT: 0,
  TOP_CENTER: 1,
  TOP_RIGHT: 2,
  BOTTOM_LEFT: 3,
  BOTTOM_CENTER: 4,
  BOTTOM_RIGHT: 5,
  LEFT_TOP: 6,
  LEFT_CENTER: 7,
  LEFT_BOTTOM: 8,
  RIGHT_TOP: 9,
  RIGHT_CENTER: 10,
  RIGHT_BOTTOM: 11,
};

// Enum: HelpBubbleClosedReason
help_bubble.mojom.HelpBubbleClosedReason = {
};

// Struct: HelpBubbleButtonParams
help_bubble.mojom.HelpBubbleButtonParams = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Struct: Progress
help_bubble.mojom.Progress = class {
  constructor(values = {}) {
    this.total = values.total !== undefined ? values.total : 0;
  }
};

// Struct: HelpBubbleParams
help_bubble.mojom.HelpBubbleParams = class {
  constructor(values = {}) {
    this.buttons = values.buttons !== undefined ? values.buttons : "";
    this.timeout = values.timeout !== undefined ? values.timeout : 0;
  }
};

// Interface: HelpBubbleHandlerFactory
help_bubble.mojom.HelpBubbleHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'help_bubble.mojom.HelpBubbleHandlerFactory';
  }

  createHelpBubbleHandler(client, handler) {
    // Method: CreateHelpBubbleHandler
    // Call: CreateHelpBubbleHandler(client, handler)
  }

};

help_bubble.mojom.HelpBubbleHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PdfHelpBubbleHandlerFactory
help_bubble.mojom.PdfHelpBubbleHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'help_bubble.mojom.PdfHelpBubbleHandlerFactory';
  }

  createHelpBubbleHandler(client, handler) {
    // Method: CreateHelpBubbleHandler
    // Call: CreateHelpBubbleHandler(client, handler)
  }

};

help_bubble.mojom.PdfHelpBubbleHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HelpBubbleHandler
help_bubble.mojom.HelpBubbleHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'help_bubble.mojom.HelpBubbleHandler';
  }

  bindTrackedElementHandler(handler) {
    // Method: BindTrackedElementHandler
    // Call: BindTrackedElementHandler(handler)
  }

  helpBubbleButtonPressed(native_identifier, button_index) {
    // Method: HelpBubbleButtonPressed
    // Call: HelpBubbleButtonPressed(native_identifier, button_index)
  }

  helpBubbleClosed(native_identifier, reason) {
    // Method: HelpBubbleClosed
    // Call: HelpBubbleClosed(native_identifier, reason)
  }

};

help_bubble.mojom.HelpBubbleHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HelpBubbleClient
help_bubble.mojom.HelpBubbleClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'help_bubble.mojom.HelpBubbleClient';
  }

  showHelpBubble(params) {
    // Method: ShowHelpBubble
    // Call: ShowHelpBubble(params)
  }

  toggleFocusForAccessibility(native_identifier) {
    // Method: ToggleFocusForAccessibility
    // Call: ToggleFocusForAccessibility(native_identifier)
  }

  hideHelpBubble(native_identifier) {
    // Method: HideHelpBubble
    // Call: HideHelpBubble(native_identifier)
  }

  externalHelpBubbleUpdated(native_identifier, shown) {
    // Method: ExternalHelpBubbleUpdated
    // Call: ExternalHelpBubbleUpdated(native_identifier, shown)
  }

};

help_bubble.mojom.HelpBubbleClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
