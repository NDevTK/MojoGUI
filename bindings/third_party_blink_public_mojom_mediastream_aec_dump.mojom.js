// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediastream/aec_dump.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AecDumpAgent
blink.mojom.AecDumpAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AecDumpAgent';
  }

  start(file) {
    // Method: Start
    // Call: Start(file)
  }

  stop() {
    // Method: Stop
    // Call: Stop()
  }

};

blink.mojom.AecDumpAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AecDumpManager
blink.mojom.AecDumpManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AecDumpManager';
  }

  add(agent) {
    // Method: Add
    // Call: Add(agent)
  }

};

blink.mojom.AecDumpManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
