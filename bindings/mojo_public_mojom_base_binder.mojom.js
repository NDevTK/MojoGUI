// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/binder.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Interface: Binder
mojo_base.mojom.BinderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mojo_base.mojom.Binder';
  }

};

mojo_base.mojom.BinderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
