// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/associated_interfaces/associated_interfaces.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AssociatedInterface
blink.mojom.AssociatedInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AssociatedInterface';
  }

};

blink.mojom.AssociatedInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AssociatedInterfaceProvider
blink.mojom.AssociatedInterfaceProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.AssociatedInterfaceProvider';
  }

  getAssociatedInterface(name, receiver) {
    // Method: GetAssociatedInterface
    // Call: GetAssociatedInterface(name, receiver)
  }

};

blink.mojom.AssociatedInterfaceProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
