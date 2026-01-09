// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_content_window.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Enum: VisibilityType
chromecast.mojom.VisibilityType = {
  supporting: 0,
  and: 1,
};

// Enum: VisibilityPriority
chromecast.mojom.VisibilityPriority = {
  it: 0,
  it: 1,
  it: 2,
  but: 3,
};

// Interface: CastContentWindowObserver
chromecast.mojom.CastContentWindowObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.CastContentWindowObserver';
  }

  onVisibilityChange(visibility_type) {
    // Method: OnVisibilityChange
    // Call: OnVisibilityChange(visibility_type)
  }

  onWindowDestroyed() {
    // Method: OnWindowDestroyed
    // Call: OnWindowDestroyed()
  }

};

chromecast.mojom.CastContentWindowObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CastContentWindow
chromecast.mojom.CastContentWindowPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.CastContentWindow';
  }

  createWindow(z_order, priority) {
    // Method: CreateWindow
    // Call: CreateWindow(z_order, priority)
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  grantScreenAccess() {
    // Method: GrantScreenAccess
    // Call: GrantScreenAccess()
  }

  grantScreenAccess() {
    // Method: GrantScreenAccess
    // Call: GrantScreenAccess()
  }

  revokeScreenAccess() {
    // Method: RevokeScreenAccess
    // Call: RevokeScreenAccess()
  }

  requestVisibility(priority) {
    // Method: RequestVisibility
    // Call: RequestVisibility(priority)
  }

  enableTouchInput(enabled) {
    // Method: EnableTouchInput
    // Call: EnableTouchInput(enabled)
  }

};

chromecast.mojom.CastContentWindowRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
