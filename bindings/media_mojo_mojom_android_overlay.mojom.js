// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/android_overlay.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: AndroidOverlayConfig
media.mojom.AndroidOverlayConfig = class {
  constructor(values = {}) {
    this.frame = values.frame !== undefined ? values.frame : null;
    this.token = values.token !== undefined ? values.token : null;
    this.pipe = values.pipe !== undefined ? values.pipe : null;
    this.construct = values.construct !== undefined ? values.construct : null;
    this.rect = values.rect !== undefined ? values.rect : null;
    this.power_efficient = values.power_efficient !== undefined ? values.power_efficient : false;
  }
};

// Interface: AndroidOverlayProvider
media.mojom.AndroidOverlayProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AndroidOverlayProvider';
  }

  createOverlay(overlay, client, config) {
    // Method: CreateOverlay
    // Call: CreateOverlay(overlay, client, config)
  }

};

media.mojom.AndroidOverlayProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AndroidOverlay
media.mojom.AndroidOverlayPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AndroidOverlay';
  }

  scheduleLayout(rect) {
    // Method: ScheduleLayout
    // Call: ScheduleLayout(rect)
  }

};

media.mojom.AndroidOverlayRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AndroidOverlayClient
media.mojom.AndroidOverlayClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.AndroidOverlayClient';
  }

  onSurfaceReady(surface_key) {
    // Method: OnSurfaceReady
    // Call: OnSurfaceReady(surface_key)
  }

  onDestroyed() {
    // Method: OnDestroyed
    // Call: OnDestroyed()
  }

  onSynchronouslyDestroyed() {
    // Method: OnSynchronouslyDestroyed
    // Call: OnSynchronouslyDestroyed()
  }

  onPowerEfficientState(is_power_efficient) {
    // Method: OnPowerEfficientState
    // Call: OnPowerEfficientState(is_power_efficient)
  }

};

media.mojom.AndroidOverlayClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
