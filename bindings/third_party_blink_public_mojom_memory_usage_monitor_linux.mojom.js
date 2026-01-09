// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/memory_usage_monitor_linux.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: MemoryUsageMonitorLinux
blink.mojom.MemoryUsageMonitorLinuxPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.MemoryUsageMonitorLinux';
  }

  open() {
    // Method: open
    // Call: open()
  }

  setProcFiles(statm_file, status_file) {
    // Method: SetProcFiles
    // Call: SetProcFiles(statm_file, status_file)
  }

};

blink.mojom.MemoryUsageMonitorLinuxRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
