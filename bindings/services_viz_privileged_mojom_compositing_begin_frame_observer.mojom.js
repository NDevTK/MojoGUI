// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/compositing/begin_frame_observer.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: BeginFrameObserver
viz.mojom.BeginFrameObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.BeginFrameObserver';
  }

  onStandaloneBeginFrame(args) {
    // Method: OnStandaloneBeginFrame
    // Call: OnStandaloneBeginFrame(args)
  }

};

viz.mojom.BeginFrameObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
