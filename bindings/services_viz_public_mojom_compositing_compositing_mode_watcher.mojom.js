// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositing_mode_watcher.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: CompositingModeWatcher
viz.mojom.CompositingModeWatcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.CompositingModeWatcher';
  }

  compositingModeFallbackToSoftware() {
    // Method: CompositingModeFallbackToSoftware
    // Call: CompositingModeFallbackToSoftware()
  }

};

viz.mojom.CompositingModeWatcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CompositingModeReporter
viz.mojom.CompositingModeReporterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.CompositingModeReporter';
  }

  addCompositingModeWatcher(watcher) {
    // Method: AddCompositingModeWatcher
    // Call: AddCompositingModeWatcher(watcher)
  }

};

viz.mojom.CompositingModeReporterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
