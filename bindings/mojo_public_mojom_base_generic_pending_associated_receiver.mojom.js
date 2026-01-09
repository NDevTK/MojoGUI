// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/generic_pending_associated_receiver.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: GenericPendingAssociatedReceiver
mojo_base.mojom.GenericPendingAssociatedReceiver = class {
  constructor(values = {}) {
    this.receiver = values.receiver !== undefined ? values.receiver : 0;
  }
};

// Interface: GenericAssociatedInterface
mojo_base.mojom.GenericAssociatedInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mojo_base.mojom.GenericAssociatedInterface';
  }

};

mojo_base.mojom.GenericAssociatedInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
