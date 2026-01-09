// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/locks/lock_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: LockMode
blink.mojom.LockMode = {
  SHARED: 0,
  EXCLUSIVE: 1,
};

// Enum: WaitMode
blink.mojom.WaitMode = {
  WAIT: 0,
  NO_WAIT: 1,
  PREEMPT: 2,
};

// Struct: LockInfo
blink.mojom.LockInfo = class {
  constructor(values = {}) {
    this.client_id = values.client_id !== undefined ? values.client_id : "";
  }
};

// Interface: LockHandle
blink.mojom.LockHandlePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.LockHandle';
  }

};

blink.mojom.LockHandleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LockRequest
blink.mojom.LockRequestPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.LockRequest';
  }

  granted(lock_handle) {
    // Method: Granted
    // Call: Granted(lock_handle)
  }

  failed() {
    // Method: Failed
    // Call: Failed()
  }

};

blink.mojom.LockRequestRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LockManager
blink.mojom.LockManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.LockManager';
  }

  requestLock(name, mode, wait, request) {
    // Method: RequestLock
    // Call: RequestLock(name, mode, wait, request)
  }

  queryState() {
    // Method: QueryState
    return new Promise((resolve) => {
      // Call: QueryState()
      resolve({});
    });
  }

};

blink.mojom.LockManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
