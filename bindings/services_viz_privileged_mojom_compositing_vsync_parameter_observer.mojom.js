// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/vsync_parameter_observer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: VSyncParameterObserver
viz.mojom.VSyncParameterObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.VSyncParameterObserver';
  }

  onUpdateVSyncParameters(timebase, interval) {
    // Method: OnUpdateVSyncParameters
    // Call: OnUpdateVSyncParameters(timebase, interval)
  }

};

viz.mojom.VSyncParameterObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
