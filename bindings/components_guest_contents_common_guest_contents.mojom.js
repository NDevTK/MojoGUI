// Auto-generated MojoJS binding
// Source: chromium_src/components/guest_contents/common/guest_contents.mojom
// Module: guest_contents.mojom

'use strict';

// Module namespace
var guest_contents = guest_contents || {};
guest_contents.mojom = guest_contents.mojom || {};


// Interface: GuestContentsHost
guest_contents.mojom.GuestContentsHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'guest_contents.mojom.GuestContentsHost';
  }

  attach(frame_to_swap, guest_contents_id) {
    // Method: Attach
    return new Promise((resolve) => {
      // Call: Attach(frame_to_swap, guest_contents_id)
      resolve({});
    });
  }

};

guest_contents.mojom.GuestContentsHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
