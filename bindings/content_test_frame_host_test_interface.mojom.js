// Auto-generated MojoJS binding
// Source: chromium_src/content/test/frame_host_test_interface.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: FrameHostTestInterface
content.mojom.FrameHostTestInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.FrameHostTestInterface';
  }

  ping(source_url, source_event) {
    // Method: Ping
    // Call: Ping(source_url, source_event)
  }

};

content.mojom.FrameHostTestInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
