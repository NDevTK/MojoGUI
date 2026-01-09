// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/actor/ui/actor_overlay.mojom
// Module: actor.ui.mojom

'use strict';

// Module namespace
var actor = actor || {};
actor.ui = actor.ui || {};
actor.ui.mojom = actor.ui.mojom || {};


// Struct: Theme
actor.ui.mojom.Theme = class {
  constructor(values = {}) {
    this.magic_cursor_color = values.magic_cursor_color !== undefined ? values.magic_cursor_color : [];
  }
};

// Interface: ActorOverlayPageHandlerFactory
actor.ui.mojom.ActorOverlayPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'actor.ui.mojom.ActorOverlayPageHandlerFactory';
  }

  createPageHandler(page, receiver) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, receiver)
  }

};

actor.ui.mojom.ActorOverlayPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ActorOverlayPageHandler
actor.ui.mojom.ActorOverlayPageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'actor.ui.mojom.ActorOverlayPageHandler';
  }

  onHoverStatusChanged(is_hovering) {
    // Method: OnHoverStatusChanged
    // Call: OnHoverStatusChanged(is_hovering)
  }

  getCurrentBorderGlowVisibility() {
    // Method: GetCurrentBorderGlowVisibility
    return new Promise((resolve) => {
      // Call: GetCurrentBorderGlowVisibility()
      resolve({});
    });
  }

};

actor.ui.mojom.ActorOverlayPageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ActorOverlayPage
actor.ui.mojom.ActorOverlayPagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'actor.ui.mojom.ActorOverlayPage';
  }

  setScrimBackground(is_visible) {
    // Method: SetScrimBackground
    // Call: SetScrimBackground(is_visible)
  }

  setBorderGlowVisibility(is_visible) {
    // Method: SetBorderGlowVisibility
    // Call: SetBorderGlowVisibility(is_visible)
  }

  setTheme(theme) {
    // Method: SetTheme
    // Call: SetTheme(theme)
  }

  moveCursorTo(point) {
    // Method: MoveCursorTo
    // Call: MoveCursorTo(point)
  }

  triggerClickAnimation() {
    // Method: TriggerClickAnimation
    // Call: TriggerClickAnimation()
  }

};

actor.ui.mojom.ActorOverlayPageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
