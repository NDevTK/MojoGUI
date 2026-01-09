// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_extraction/frame_metadata_observer_registry.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: PaidContentMetadataObserver
blink.mojom.PaidContentMetadataObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.PaidContentMetadataObserver';
  }

  unspecified(yet) {
    // Method: unspecified
    // Call: unspecified(yet)
  }

  onPaidContentMetadataChanged(has_paid_content) {
    // Method: OnPaidContentMetadataChanged
    // Call: OnPaidContentMetadataChanged(has_paid_content)
  }

};

blink.mojom.PaidContentMetadataObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MetaTagsObserver
blink.mojom.MetaTagsObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.MetaTagsObserver';
  }

  onMetaTagsChanged(meta_tags) {
    // Method: OnMetaTagsChanged
    // Call: OnMetaTagsChanged(meta_tags)
  }

};

blink.mojom.MetaTagsObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FrameMetadataObserverRegistry
blink.mojom.FrameMetadataObserverRegistryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.FrameMetadataObserverRegistry';
  }

  addPaidContentMetadataObserver(observer) {
    // Method: AddPaidContentMetadataObserver
    // Call: AddPaidContentMetadataObserver(observer)
  }

  addMetaTagsObserver(names, observer) {
    // Method: AddMetaTagsObserver
    // Call: AddMetaTagsObserver(names, observer)
  }

};

blink.mojom.FrameMetadataObserverRegistryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
