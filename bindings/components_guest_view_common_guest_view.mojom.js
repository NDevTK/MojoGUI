// Auto-generated MojoJS binding
// Source: chromium_src/components/guest_view/common/guest_view.mojom
// Module: guest_view.mojom

'use strict';

// Module namespace
var guest_view = guest_view || {};
guest_view.mojom = guest_view.mojom || {};


// Interface: ViewHandle
guest_view.mojom.ViewHandlePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'guest_view.mojom.ViewHandle';
  }

};

guest_view.mojom.ViewHandleRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GuestViewHost
guest_view.mojom.GuestViewHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'guest_view.mojom.GuestViewHost';
  }

  attachToEmbedderFrame(element_instance_id, guest_instance_id, params) {
    // Method: AttachToEmbedderFrame
    // Call: AttachToEmbedderFrame(element_instance_id, guest_instance_id, params)
  }

  guestView(`view_instance_id`) {
    // Method: GuestView
    // Call: GuestView(`view_instance_id`)
  }

  viewCreated(view_instance_id, view_type, keep_alive_handle_receiver) {
    // Method: ViewCreated
    // Call: ViewCreated(view_instance_id, view_type, keep_alive_handle_receiver)
  }

};

guest_view.mojom.GuestViewHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
