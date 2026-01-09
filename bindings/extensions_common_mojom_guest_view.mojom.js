// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/guest_view.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: GuestView
extensions.mojom.GuestViewPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.GuestView';
  }

  readyToCreateMimeHandlerView(success) {
    // Method: ReadyToCreateMimeHandlerView
    // Call: ReadyToCreateMimeHandlerView(success)
  }

  canExecuteContentScript(script_id) {
    // Method: CanExecuteContentScript
    return new Promise((resolve) => {
      // Call: CanExecuteContentScript(script_id)
      resolve({});
    });
  }

};

extensions.mojom.GuestViewRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MimeHandlerViewContainerManager
extensions.mojom.MimeHandlerViewContainerManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.MimeHandlerViewContainerManager';
  }

  setInternalId(token_id) {
    // Method: SetInternalId
    // Call: SetInternalId(token_id)
  }

  createBeforeUnloadControl() {
    // Method: CreateBeforeUnloadControl
    return new Promise((resolve) => {
      // Call: CreateBeforeUnloadControl()
      resolve({});
    });
  }

  destroyFrameContainer(element_instance_id) {
    // Method: DestroyFrameContainer
    // Call: DestroyFrameContainer(element_instance_id)
  }

  didLoad(mime_handler_view_guest_element_instance_id, resource_url) {
    // Method: DidLoad
    // Call: DidLoad(mime_handler_view_guest_element_instance_id, resource_url)
  }

};

extensions.mojom.MimeHandlerViewContainerManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
