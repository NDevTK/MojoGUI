// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/idle/idle_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: IdleManagerError
blink.mojom.IdleManagerError = {
  kSuccess: 0,
  kPermissionDisabled: 1,
};

// Struct: IdleState
blink.mojom.IdleState = class {
  constructor(values = {}) {
    this.screen_locked = values.screen_locked !== undefined ? values.screen_locked : false;
  }
};

// Interface: IdleMonitor
blink.mojom.IdleMonitorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.IdleMonitor';
  }

  update(state, is_overridden_by_devtools) {
    // Method: Update
    // Call: Update(state, is_overridden_by_devtools)
  }

};

blink.mojom.IdleMonitorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: IdleManager
blink.mojom.IdleManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.IdleManager';
  }

  update() {
    // Method: Update
    // Call: Update()
  }

  addMonitor(monitor) {
    // Method: AddMonitor
    return new Promise((resolve) => {
      // Call: AddMonitor(monitor)
      resolve({});
    });
  }

};

blink.mojom.IdleManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
