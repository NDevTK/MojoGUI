// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/event_dispatcher.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Struct: EventFilteringInfo
extensions.mojom.EventFilteringInfo = class {
  constructor(values = {}) {
    this.window_exposed_by_default = values.window_exposed_by_default !== undefined ? values.window_exposed_by_default : 0;
  }
};

// Struct: DispatchEventParams
extensions.mojom.DispatchEventParams = class {
  constructor(values = {}) {
    this.thread = values.thread !== undefined ? values.thread : null;
    this.filtering_info = values.filtering_info !== undefined ? values.filtering_info : 0;
  }
};

// Interface: EventDispatcher
extensions.mojom.EventDispatcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.EventDispatcher';
  }

  dispatchEvent(params, event_args) {
    // Method: DispatchEvent
    return new Promise((resolve) => {
      // Call: DispatchEvent(params, event_args)
      resolve({});
    });
  }

};

extensions.mojom.EventDispatcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
