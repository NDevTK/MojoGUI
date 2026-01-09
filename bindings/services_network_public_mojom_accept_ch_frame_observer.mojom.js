// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/accept_ch_frame_observer.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: AcceptCHFrameObserver
network.mojom.AcceptCHFrameObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'network.mojom.AcceptCHFrameObserver';
  }

  onAcceptCHFrameReceived(origin, accept_ch_frame) {
    // Method: OnAcceptCHFrameReceived
    return new Promise((resolve) => {
      // Call: OnAcceptCHFrameReceived(origin, accept_ch_frame)
      resolve({});
    });
  }

  clone(listener) {
    // Method: Clone
    // Call: Clone(listener)
  }

};

network.mojom.AcceptCHFrameObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
