// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/performance_manager/v8_detailed_memory_reporter.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: Mode
blink.mojom.Mode = {
  DEFAULT: 0,
};

// Struct: PerContextV8MemoryUsage
blink.mojom.PerContextV8MemoryUsage = class {
  constructor(values = {}) {
    this.memory_used = values.memory_used !== undefined ? values.memory_used : null;
    this.workers = values.workers !== undefined ? values.workers : null;
    this.url = values.url !== undefined ? values.url : "";
  }
};

// Struct: PerContextCanvasMemoryUsage
blink.mojom.PerContextCanvasMemoryUsage = class {
  constructor(values = {}) {
    this.memory_used = values.memory_used !== undefined ? values.memory_used : null;
  }
};

// Struct: PerIsolateV8MemoryUsage
blink.mojom.PerIsolateV8MemoryUsage = class {
  constructor(values = {}) {
    this.canvas_contexts = values.canvas_contexts !== undefined ? values.canvas_contexts : 0;
  }
};

// Struct: PerProcessV8MemoryUsage
blink.mojom.PerProcessV8MemoryUsage = class {
  constructor(values = {}) {
    this.isolates = values.isolates !== undefined ? values.isolates : [];
  }
};

// Interface: V8DetailedMemoryReporter
blink.mojom.V8DetailedMemoryReporterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.V8DetailedMemoryReporter';
  }

  getV8MemoryUsage(mode) {
    // Method: GetV8MemoryUsage
    return new Promise((resolve) => {
      // Call: GetV8MemoryUsage(mode)
      resolve({});
    });
  }

};

blink.mojom.V8DetailedMemoryReporterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
