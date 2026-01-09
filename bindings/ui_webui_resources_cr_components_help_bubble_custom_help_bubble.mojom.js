// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/help_bubble/custom_help_bubble.mojom
// Module: custom_help_bubble.mojom

'use strict';

// Module namespace
var custom_help_bubble = custom_help_bubble || {};
custom_help_bubble.mojom = custom_help_bubble.mojom || {};


// Enum: CustomHelpBubbleUserAction
custom_help_bubble.mojom.CustomHelpBubbleUserAction = {
  kDismiss: 0,
  clicking: 1,
};

// Interface: CustomHelpBubbleHandlerFactory
custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory';
  }

  createCustomHelpBubbleHandler(handler) {
    // Method: CreateCustomHelpBubbleHandler
    // Call: CreateCustomHelpBubbleHandler(handler)
  }

};

custom_help_bubble.mojom.CustomHelpBubbleHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CustomHelpBubbleHandler
custom_help_bubble.mojom.CustomHelpBubbleHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'custom_help_bubble.mojom.CustomHelpBubbleHandler';
  }

  notifyUserAction(action) {
    // Method: NotifyUserAction
    // Call: NotifyUserAction(action)
  }

};

custom_help_bubble.mojom.CustomHelpBubbleHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
