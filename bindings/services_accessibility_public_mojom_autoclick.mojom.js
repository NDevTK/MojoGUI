// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/autoclick.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Interface: Autoclick
ax.mojom.AutoclickPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.Autoclick';
  }

  requestScrollableBoundsForPoint(point) {
    // Method: RequestScrollableBoundsForPoint
    // Call: RequestScrollableBoundsForPoint(point)
  }

};

ax.mojom.AutoclickRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AutoclickClient
ax.mojom.AutoclickClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ax.mojom.AutoclickClient';
  }

  handleScrollableBoundsForPointFound(bounds) {
    // Method: HandleScrollableBoundsForPointFound
    // Call: HandleScrollableBoundsForPointFound(bounds)
  }

  bindAutoclick() {
    // Method: BindAutoclick
    return new Promise((resolve) => {
      // Call: BindAutoclick()
      resolve({});
    });
  }

};

ax.mojom.AutoclickClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
