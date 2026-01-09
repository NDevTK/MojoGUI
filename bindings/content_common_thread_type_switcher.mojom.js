// Auto-generated MojoJS binding
// Source: chromium_src/content/common/thread_type_switcher.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: ThreadTypeSwitcher
content.mojom.ThreadTypeSwitcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.ThreadTypeSwitcher';
  }

  setThreadType(platform_thread_id, thread_type) {
    // Method: SetThreadType
    // Call: SetThreadType(platform_thread_id, thread_type)
  }

};

content.mojom.ThreadTypeSwitcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
