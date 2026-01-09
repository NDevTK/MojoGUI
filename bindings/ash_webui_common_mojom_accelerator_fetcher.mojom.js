// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/accelerator_fetcher.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.mojom = ash.common.mojom || {};


// Interface: AcceleratorFetcherObserver
ash.common.mojom.AcceleratorFetcherObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.common.mojom.AcceleratorFetcherObserver';
  }

  onAcceleratorsUpdated(actionId, accelerators) {
    // Method: OnAcceleratorsUpdated
    // Call: OnAcceleratorsUpdated(actionId, accelerators)
  }

};

ash.common.mojom.AcceleratorFetcherObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AcceleratorFetcher
ash.common.mojom.AcceleratorFetcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.common.mojom.AcceleratorFetcher';
  }

  observeAcceleratorChanges(actionIds, observer) {
    // Method: ObserveAcceleratorChanges
    // Call: ObserveAcceleratorChanges(actionIds, observer)
  }

  getMetaKeyToDisplay() {
    // Method: GetMetaKeyToDisplay
    return new Promise((resolve) => {
      // Call: GetMetaKeyToDisplay()
      resolve({});
    });
  }

};

ash.common.mojom.AcceleratorFetcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
